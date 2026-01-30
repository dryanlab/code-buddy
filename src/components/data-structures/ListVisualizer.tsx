"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { InfoCard, ControlButton, OperationLog } from "./shared";

export default function ListVisualizer() {
  const [items, setItems] = useState(["🍎 Apple", "🍌 Banana", "🥛 Milk", "🍞 Bread"]);
  const [log, setLog] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [inputIdx, setInputIdx] = useState("");
  const [highlight, setHighlight] = useState<number | null>(null);

  const addLog = (msg: string) => setLog(p => [...p, msg]);

  const append = () => {
    if (!inputVal) return;
    setItems(p => [...p, inputVal]);
    addLog(`append("${inputVal}") — O(1) ⚡ amortized`);
    setInputVal("");
    setHighlight(items.length);
    setTimeout(() => setHighlight(null), 800);
  };

  const insertAt = () => {
    const i = parseInt(inputIdx);
    if (!inputVal || isNaN(i) || i < 0 || i > items.length) return;
    const n = [...items]; n.splice(i, 0, inputVal); setItems(n);
    addLog(`insert(${i}, "${inputVal}") — O(n) 🐢`);
    setInputVal(""); setHighlight(i);
    setTimeout(() => setHighlight(null), 800);
  };

  const removeAt = () => {
    const i = parseInt(inputIdx);
    if (isNaN(i) || i < 0 || i >= items.length) return;
    addLog(`remove(${i}) removed "${items[i]}" — O(n) 🐢`);
    setHighlight(i);
    setTimeout(() => {
      const n = [...items]; n.splice(i, 1); setItems(n);
      setHighlight(null);
    }, 500);
  };

  const pop = () => {
    if (items.length === 0) return;
    const last = items[items.length - 1];
    addLog(`pop() removed "${last}" — O(1) ⚡`);
    setHighlight(items.length - 1);
    setTimeout(() => {
      setItems(p => p.slice(0, -1));
      setHighlight(null);
    }, 500);
  };

  const sort = () => {
    setItems(p => [...p].sort());
    addLog(`sort() — O(n log n)`);
  };

  const reverse = () => {
    setItems(p => [...p].reverse());
    addLog(`reverse() — O(n)`);
  };

  return (
    <div>
      <InfoCard
        icon="📝" title="List — Shopping List" titleCn="列表 — 购物清单"
        description="Python's list is a dynamic array — it can grow and shrink. You can add, remove, and rearrange items freely."
        descriptionCn="Python 的 list 是动态数组——可以自由增减和重排。"
        analogy="Like a shopping list — add items at the end, cross off anywhere!"
        analogyCn="就像购物清单——在最后添加，随时划掉！"
      />

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-5 border border-[var(--theme-border)] mb-4">
        <div className="text-xs text-[var(--theme-text-muted)] mb-2">my_list = [...]</div>
        <div className="space-y-1">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                key={`${i}-${item}`}
                layout
                initial={{ opacity: 0, x: -40 }}
                animate={{
                  opacity: 1, x: 0,
                  borderColor: highlight === i ? "#22c55e" : "#374151",
                  backgroundColor: highlight === i ? "rgba(34,197,94,0.1)" : "transparent",
                }}
                exit={{ opacity: 0, x: 40, height: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex items-center gap-3 p-2 rounded-lg border"
              >
                <span className="text-xs text-[var(--theme-text-muted)] w-6 text-right font-mono">[{i}]</span>
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {items.length === 0 && <div className="text-center text-sm text-[var(--theme-text-muted)] py-4">Empty list! 空列表！</div>}
        </div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mt-2">len = {items.length}</div>
      </div>

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="item" className="w-28 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
          <input value={inputIdx} onChange={e => setInputIdx(e.target.value)} placeholder="index" className="w-20 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={append} color="#22c55e">➕ append</ControlButton>
          <ControlButton onClick={insertAt} color="#3b82f6">📌 insert(i)</ControlButton>
          <ControlButton onClick={removeAt} color="#ef4444">🗑️ remove(i)</ControlButton>
          <ControlButton onClick={pop} color="#f97316">🔚 pop</ControlButton>
          <ControlButton onClick={sort} color="#8b5cf6">🔤 sort</ControlButton>
          <ControlButton onClick={reverse} color="#ec4899">🔄 reverse</ControlButton>
        </div>
      </div>

      <OperationLog log={log} />
    </div>
  );
}
