"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface VariableInfo {
  name: string;
  value: string;
  type: string;
  scope: "global" | "local";
  scopeName?: string; // function name for local scope
}

interface MemoryModelProps {
  variables: VariableInfo[];
}

function VariableCard({ v, status }: { v: VariableInfo; status: "new" | "changed" | "same" }) {
  const borderColor =
    status === "new" ? "border-green-400" : status === "changed" ? "border-yellow-400" : "border-[var(--theme-border)]";
  const bgColor =
    status === "new" ? "bg-green-500/10" : status === "changed" ? "bg-yellow-500/10" : "bg-[var(--theme-card-bg)]";

  const typeBadge: Record<string, { emoji: string; color: string }> = {
    int: { emoji: "🔢", color: "text-blue-400" },
    float: { emoji: "🔢", color: "text-blue-300" },
    str: { emoji: "📝", color: "text-green-400" },
    bool: { emoji: "✅", color: "text-yellow-400" },
    list: { emoji: "📋", color: "text-purple-400" },
    dict: { emoji: "📖", color: "text-orange-400" },
    tuple: { emoji: "📦", color: "text-pink-400" },
    NoneType: { emoji: "⬜", color: "text-gray-400" },
  };
  const badge = typeBadge[v.type] || { emoji: "❓", color: "text-gray-400" };

  // Special rendering for list
  if (v.type === "list") {
    return <ListVisualization v={v} status={status} borderColor={borderColor} bgColor={bgColor} badge={badge} />;
  }
  // Special rendering for dict
  if (v.type === "dict") {
    return <DictVisualization v={v} status={status} borderColor={borderColor} bgColor={bgColor} badge={badge} />;
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-lg border-2 ${borderColor} ${bgColor} p-2 min-w-[80px] transition-colors duration-300`}
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="text-xs font-bold text-cyan-300 terminal-text truncate">{v.name}</span>
        <span className={`text-[10px] ${badge.color}`}>{badge.emoji} {v.type}</span>
      </div>
      <div className="text-sm font-mono text-[var(--theme-text-primary)] bg-[var(--theme-input-bg)] rounded px-2 py-1 text-center truncate">
        {v.value}
      </div>
    </motion.div>
  );
}

function ListVisualization({
  v,
  status,
  borderColor,
  bgColor,
  badge,
}: {
  v: VariableInfo;
  status: string;
  borderColor: string;
  bgColor: string;
  badge: { emoji: string; color: string };
}) {
  // Parse list value like "[85, 92, 78]"
  let items: string[] = [];
  try {
    const parsed = JSON.parse(v.value.replace(/'/g, '"').replace(/True/g, 'true').replace(/False/g, 'false').replace(/None/g, 'null'));
    if (Array.isArray(parsed)) items = parsed.map(String);
  } catch {
    items = [v.value];
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-lg border-2 ${borderColor} ${bgColor} p-2 transition-colors duration-300`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-bold text-cyan-300 terminal-text">{v.name}</span>
        <span className={`text-[10px] ${badge.color}`}>{badge.emoji} {v.type}[{items.length}]</span>
      </div>
      <div className="flex gap-0 overflow-x-auto">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center min-w-[36px]">
            <span className="text-[10px] text-[var(--theme-text-muted)]">{i}</span>
            <div className="border border-[var(--theme-border)] bg-[var(--theme-input-bg)] px-2 py-1 text-xs font-mono text-[var(--theme-text-primary)] text-center">
              {item}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function DictVisualization({
  v,
  status,
  borderColor,
  bgColor,
  badge,
}: {
  v: VariableInfo;
  status: string;
  borderColor: string;
  bgColor: string;
  badge: { emoji: string; color: string };
}) {
  let entries: [string, string][] = [];
  try {
    const parsed = JSON.parse(v.value.replace(/'/g, '"').replace(/True/g, 'true').replace(/False/g, 'false').replace(/None/g, 'null'));
    if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
      entries = Object.entries(parsed).map(([k, val]) => [k, String(val)]);
    }
  } catch {
    entries = [["...", v.value]];
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-lg border-2 ${borderColor} ${bgColor} p-2 transition-colors duration-300`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-bold text-cyan-300 terminal-text">{v.name}</span>
        <span className={`text-[10px] ${badge.color}`}>{badge.emoji} {v.type}</span>
      </div>
      <table className="text-xs font-mono w-full">
        <tbody>
          {entries.map(([key, val], i) => (
            <tr key={i} className="border-b border-[var(--theme-border)] last:border-0">
              <td className="text-purple-300 pr-2 py-0.5">{key}</td>
              <td className="text-[var(--theme-text-muted)] px-1">→</td>
              <td className="text-[var(--theme-text-primary)] py-0.5">{val}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export default function MemoryModel({ variables }: MemoryModelProps) {
  const prevVarsRef = useRef<Record<string, string>>({});
  const [varStatuses, setVarStatuses] = useState<Record<string, "new" | "changed" | "same">>({});

  useEffect(() => {
    const prev = prevVarsRef.current;
    const statuses: Record<string, "new" | "changed" | "same"> = {};
    for (const v of variables) {
      const key = `${v.scope}:${v.name}`;
      if (!(key in prev)) {
        statuses[key] = "new";
      } else if (prev[key] !== v.value) {
        statuses[key] = "changed";
      } else {
        statuses[key] = "same";
      }
    }
    setVarStatuses(statuses);

    // Update prev
    const newPrev: Record<string, string> = {};
    for (const v of variables) {
      newPrev[`${v.scope}:${v.name}`] = v.value;
    }
    prevVarsRef.current = newPrev;
  }, [variables]);

  if (variables.length === 0) return null;

  const globals = variables.filter((v) => v.scope === "global");
  const locals = variables.filter((v) => v.scope === "local");
  const localScopes = [...new Set(locals.map((v) => v.scopeName || "unknown"))];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="mt-3 pt-3 border-t border-[var(--theme-border)]"
    >
      <div className="text-xs text-[var(--theme-text-muted)] terminal-text mb-2 flex items-center gap-1">
        <span>🧠</span> MEMORY · 内存模型
      </div>

      {globals.length > 0 && (
        <div className="mb-2">
          <div className="text-[10px] text-[var(--theme-text-muted)] mb-1">🌍 Global Variables · 全局变量</div>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {globals.map((v) => (
                <VariableCard key={v.name} v={v} status={varStatuses[`global:${v.name}`] || "same"} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {localScopes.map((scopeName) => (
        <div key={scopeName} className="mb-2">
          <div className="text-[10px] text-[var(--theme-text-muted)] mb-1">
            📦 Local Variables · 局部变量 ({scopeName})
          </div>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {locals
                .filter((v) => (v.scopeName || "unknown") === scopeName)
                .map((v) => (
                  <VariableCard key={v.name} v={v} status={varStatuses[`local:${v.name}`] || "same"} />
                ))}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
