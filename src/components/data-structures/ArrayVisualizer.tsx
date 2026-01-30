"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { InfoCard, ControlButton, OperationLog } from "./shared";

export default function ArrayVisualizer() {
  const [arr, setArr] = useState([10, 25, 7, 42, 18]);
  const [highlight, setHighlight] = useState<number | null>(null);
  const [shifting, setShifting] = useState<number[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [inputIdx, setInputIdx] = useState("");
  const [inputVal, setInputVal] = useState("");

  const addLog = (msg: string) => setLog(p => [...p, msg]);

  const read = () => {
    const i = parseInt(inputIdx);
    if (isNaN(i) || i < 0 || i >= arr.length) return;
    setHighlight(i);
    addLog(`Read arr[${i}] = ${arr[i]} — O(1) ⚡`);
    setTimeout(() => setHighlight(null), 1200);
  };

  const write = () => {
    const i = parseInt(inputIdx);
    const v = parseInt(inputVal);
    if (isNaN(i) || isNaN(v) || i < 0 || i >= arr.length) return;
    const na = [...arr]; na[i] = v; setArr(na);
    setHighlight(i);
    addLog(`Write arr[${i}] = ${v} — O(1) ⚡`);
    setTimeout(() => setHighlight(null), 1200);
  };

  const insert = () => {
    const i = parseInt(inputIdx);
    const v = parseInt(inputVal);
    if (isNaN(i) || isNaN(v) || i < 0 || i > arr.length) return;
    const indices = [];
    for (let j = arr.length - 1; j >= i; j--) indices.push(j);
    setShifting(indices);
    addLog(`Insert ${v} at index ${i} — O(n) 🐢 shift ${indices.length} elements`);
    setTimeout(() => {
      const na = [...arr]; na.splice(i, 0, v); setArr(na);
      setShifting([]);
      setHighlight(i);
      setTimeout(() => setHighlight(null), 800);
    }, 600);
  };

  const del = () => {
    const i = parseInt(inputIdx);
    if (isNaN(i) || i < 0 || i >= arr.length) return;
    setHighlight(i);
    addLog(`Delete arr[${i}] — O(n) 🐢 shift elements left`);
    setTimeout(() => {
      const na = [...arr]; na.splice(i, 1); setArr(na);
      setHighlight(null);
    }, 600);
  };

  return (
    <div>
      <InfoCard
        icon="📦" title="Array — Locker" titleCn="数组 — 储物柜"
        description="An array stores items in numbered slots. You can instantly access any slot by its number."
        descriptionCn="数组在编号的格子里存放东西。知道编号就能直接找到！"
        analogy="Like a row of lockers — each has a number, open any one directly!"
        analogyCn="就像一排储物柜——每个都有编号，直接打开！"
      />

      {/* Visualization */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-5 border border-[var(--theme-border)] mb-4 overflow-x-auto">
        <div className="flex gap-1 min-w-fit justify-center">
          <AnimatePresence mode="popLayout">
            {arr.map((val, i) => (
              <motion.div
                key={`${i}-${val}`}
                layout
                initial={{ opacity: 0, y: -30, scale: 0.5 }}
                animate={{
                  opacity: 1, y: 0, scale: 1,
                  borderColor: highlight === i ? "#22c55e" : shifting.includes(i) ? "#eab308" : "#374151",
                  boxShadow: highlight === i ? "0 0 16px rgba(34,197,94,0.5)" : shifting.includes(i) ? "0 0 12px rgba(234,179,8,0.3)" : "none",
                  x: shifting.includes(i) ? 20 : 0,
                }}
                exit={{ opacity: 0, scale: 0.5, y: 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col items-center"
              >
                <div className="text-[10px] text-[var(--theme-text-muted)] mb-1">[{i}]</div>
                <div className="w-14 h-14 rounded-lg border-2 flex items-center justify-center text-lg font-bold bg-[var(--theme-bg)]">
                  {val}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mt-3">
          Length: {arr.length} | 长度: {arr.length}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <input value={inputIdx} onChange={e => setInputIdx(e.target.value)} placeholder="index" className="w-20 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="value" className="w-20 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={read} color="#22c55e">📖 Read(i)</ControlButton>
          <ControlButton onClick={write} color="#3b82f6">✏️ Write(i,v)</ControlButton>
          <ControlButton onClick={insert} color="#eab308">➕ Insert(i,v)</ControlButton>
          <ControlButton onClick={del} color="#ef4444">🗑️ Delete(i)</ControlButton>
        </div>
      </div>

      {/* Complexity table */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="text-sm font-bold mb-2">⏱️ Time Complexity / 时间复杂度</div>
        <div className="grid grid-cols-3 gap-1 text-xs">
          <div className="font-bold text-[var(--theme-text-muted)]">Operation</div>
          <div className="font-bold text-cyan-400">Array</div>
          <div className="font-bold text-purple-400">Linked List</div>
          {[["Read/Access 读取", "O(1) ⚡", "O(n) 🐢"], ["Insert 插入", "O(n) 🐢", "O(1) ⚡"], ["Delete 删除", "O(n) 🐢", "O(1) ⚡"], ["Search 搜索", "O(n) 🐢", "O(n) 🐢"]].map(([op, a, l], i) => (
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

import React from "react";
