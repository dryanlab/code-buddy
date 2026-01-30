"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export function InfoCard({ icon, title, titleCn, description, descriptionCn, analogy, analogyCn }: {
  icon: string; title: string; titleCn: string;
  description: string; descriptionCn: string;
  analogy: string; analogyCn: string;
}) {
  return (
    <div className="bg-[var(--theme-card-bg)] rounded-xl p-5 border border-[var(--theme-border)] mb-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{icon}</span>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-xs text-[var(--theme-text-muted)]">{titleCn}</p>
        </div>
      </div>
      <p className="text-sm text-[var(--theme-text-secondary)]">{description}</p>
      <p className="text-xs text-[var(--theme-text-muted)] mt-1">{descriptionCn}</p>
      <div className="mt-3 p-3 rounded-lg bg-[var(--theme-primary)]10 border border-[var(--theme-primary)]30">
        <p className="text-sm">💡 {analogy}</p>
        <p className="text-xs text-[var(--theme-text-muted)] mt-1">{analogyCn}</p>
      </div>
    </div>
  );
}

export function ControlButton({ onClick, children, color = "var(--theme-primary)", disabled = false }: {
  onClick: () => void; children: ReactNode; color?: string; disabled?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className="px-3 py-2 rounded-lg text-sm font-medium border transition-colors disabled:opacity-50"
      style={{ borderColor: color, color }}
    >
      {children}
    </motion.button>
  );
}

export function ComplexityBadge({ complexity, label }: { complexity: string; label: string }) {
  const isfast = complexity === "O(1)";
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono ${isfast ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
      {complexity} {isfast ? "⚡" : "🐢"} {label}
    </span>
  );
}

export function OperationLog({ log }: { log: string[] }) {
  if (log.length === 0) return null;
  return (
    <div className="mt-4 bg-[var(--theme-card-bg)] rounded-lg p-3 border border-[var(--theme-border)] max-h-32 overflow-y-auto">
      <div className="text-xs font-bold text-[var(--theme-text-muted)] mb-1">📋 Operation Log</div>
      {log.slice(-8).map((entry, i) => (
        <div key={i} className="text-xs text-[var(--theme-text-secondary)] terminal-text">{entry}</div>
      ))}
    </div>
  );
}
