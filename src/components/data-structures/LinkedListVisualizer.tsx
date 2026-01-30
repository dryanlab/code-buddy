"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import React from "react";
import { InfoCard, ControlButton, OperationLog } from "./shared";

interface LLNode { id: number; value: number; }

let nodeId = 100;

export default function LinkedListVisualizer() {
  const [nodes, setNodes] = useState<LLNode[]>([
    { id: 1, value: 10 }, { id: 2, value: 25 }, { id: 3, value: 7 }, { id: 4, value: 42 },
  ]);
  const [highlight, setHighlight] = useState<number | null>(null);
  const [searchPath, setSearchPath] = useState<number[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");

  const addLog = (msg: string) => setLog(p => [...p, msg]);

  const addHead = () => {
    const v = parseInt(inputVal); if (isNaN(v)) return;
    const n = { id: ++nodeId, value: v };
    setNodes(p => [n, ...p]);
    setHighlight(n.id);
    addLog(`Add to Head: ${v} — O(1) ⚡`);
    setTimeout(() => setHighlight(null), 1000);
    setInputVal("");
  };

  const addTail = () => {
    const v = parseInt(inputVal); if (isNaN(v)) return;
    const n = { id: ++nodeId, value: v };
    setNodes(p => [...p, n]);
    setHighlight(n.id);
    addLog(`Add to Tail: ${v} — O(n) 🐢 (must traverse)`);
    setTimeout(() => setHighlight(null), 1000);
    setInputVal("");
  };

  const removeHead = () => {
    if (nodes.length === 0) return;
    addLog(`Remove Head: ${nodes[0].value} — O(1) ⚡`);
    setHighlight(nodes[0].id);
    setTimeout(() => { setNodes(p => p.slice(1)); setHighlight(null); }, 600);
  };

  const search = () => {
    const v = parseInt(inputVal); if (isNaN(v)) return;
    setSearchPath([]);
    let found = -1;
    const path: number[] = [];
    nodes.forEach((n, i) => { path.push(n.id); if (n.value === v && found === -1) found = i; });
    
    let step = 0;
    const interval = setInterval(() => {
      if (step >= path.length || (found !== -1 && step > found)) {
        clearInterval(interval);
        if (found !== -1) addLog(`Search ${v}: Found at position ${found} — O(n) 🐢`);
        else addLog(`Search ${v}: Not found — O(n) 🐢`);
        setTimeout(() => setSearchPath([]), 1000);
        return;
      }
      setSearchPath(path.slice(0, step + 1));
      step++;
    }, 400);
    setInputVal("");
  };

  return (
    <div>
      <InfoCard
        icon="🔗" title="Linked List — Treasure Hunt" titleCn="链表 — 寻宝链条"
        description="Each node holds a value and a pointer to the next node. You must follow the chain from the start!"
        descriptionCn="每个节点存一个值和指向下一个节点的指针。必须从头开始跟着链条走！"
        analogy="Like a treasure hunt — each chest has a clue pointing to the next one!"
        analogyCn="就像寻宝游戏——每个宝箱里有线索指向下一个！"
      />

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-5 border border-[var(--theme-border)] mb-4 overflow-x-auto">
        <div className="flex items-center gap-0 min-w-fit justify-center">
          <div className="text-xs text-[var(--theme-text-muted)] mr-2 font-bold">HEAD →</div>
          <AnimatePresence mode="popLayout">
            {nodes.map((node, i) => (
              <React.Fragment key={node.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: -40, scale: 0.5 }}
                  animate={{
                    opacity: 1, y: 0, scale: 1,
                    borderColor: highlight === node.id ? "#22c55e" : searchPath.includes(node.id) ? "#eab308" : "#374151",
                    boxShadow: highlight === node.id ? "0 0 16px rgba(34,197,94,0.5)" : searchPath.includes(node.id) ? "0 0 12px rgba(234,179,8,0.4)" : "none",
                  }}
                  exit={{ opacity: 0, scale: 0.3, y: 40 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex flex-col items-center border-2 rounded-lg p-2 bg-[var(--theme-bg)] min-w-[56px]"
                >
                  <div className="text-lg font-bold">{node.value}</div>
                  <div className="text-[10px] text-[var(--theme-text-muted)]">next→</div>
                </motion.div>
                {i < nodes.length - 1 && (
                  <motion.div layout className="text-[var(--theme-text-muted)] text-lg mx-1">→</motion.div>
                )}
              </React.Fragment>
            ))}
          </AnimatePresence>
          {nodes.length > 0 && <div className="text-xs text-[var(--theme-text-muted)] ml-2">→ NULL</div>}
          {nodes.length === 0 && <div className="text-sm text-[var(--theme-text-muted)]">Empty! NULL</div>}
        </div>
      </div>

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="value" className="w-20 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={addHead} color="#22c55e">⬅️ Add Head</ControlButton>
          <ControlButton onClick={addTail} color="#3b82f6">Add Tail ➡️</ControlButton>
          <ControlButton onClick={removeHead} color="#ef4444">🗑️ Remove Head</ControlButton>
          <ControlButton onClick={search} color="#eab308">🔍 Search</ControlButton>
        </div>
      </div>

      {/* Complexity comparison */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="text-sm font-bold mb-2">⚔️ Array vs Linked List</div>
        <div className="grid grid-cols-3 gap-1 text-xs">
          <div className="font-bold text-[var(--theme-text-muted)]">Operation</div>
          <div className="font-bold text-cyan-400">Array 数组</div>
          <div className="font-bold text-purple-400">Linked List 链表</div>
          {[["Access 访问", "O(1) ⚡", "O(n) 🐢"], ["Insert Head 头插", "O(n) 🐢", "O(1) ⚡"], ["Insert Tail 尾插", "O(1)* ⚡", "O(n) 🐢"], ["Search 搜索", "O(n)", "O(n)"]].map(([op, a, l], i) => (
            <React.Fragment key={i}>
              <div className="text-[var(--theme-text-secondary)]">{op}</div>
              <div>{a}</div>
              <div>{l}</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <OperationLog log={log} />
    </div>
  );
}
