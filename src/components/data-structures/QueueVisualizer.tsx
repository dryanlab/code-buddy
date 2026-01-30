"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { InfoCard, ControlButton, OperationLog } from "./shared";

const EMOJIS = ["🧑", "👩", "👨", "🧒", "👧", "👦", "🧓", "👴", "👵"];

export default function QueueVisualizer() {
  const [queue, setQueue] = useState<{ id: number; value: string; emoji: string }[]>([
    { id: 1, value: "Alice", emoji: "🧑" },
    { id: 2, value: "Bob", emoji: "👨" },
    { id: 3, value: "Carol", emoji: "👩" },
  ]);
  const [log, setLog] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [peeking, setPeeking] = useState(false);

  const addLog = (msg: string) => setLog(p => [...p, msg]);

  const enqueue = () => {
    if (!inputVal) return;
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    setQueue(p => [...p, { id: Date.now(), value: inputVal, emoji }]);
    addLog(`enqueue("${inputVal}") — O(1) ⚡ joined the line!`);
    setInputVal("");
  };

  const dequeue = () => {
    if (queue.length === 0) return;
    addLog(`dequeue() → "${queue[0].value}" ${queue[0].emoji} — O(1) ⚡ served!`);
    setQueue(p => p.slice(1));
  };

  const peekFront = () => {
    if (queue.length === 0) return;
    setPeeking(true);
    addLog(`peek() → "${queue[0].value}" is first in line — O(1) ⚡`);
    setTimeout(() => setPeeking(false), 1200);
  };

  return (
    <div>
      <InfoCard
        icon="🎟️" title="Queue — Ticket Line" titleCn="队列 — 排队买票"
        description="First In, First Out (FIFO). Join at the back, leave from the front — just like a real line!"
        descriptionCn="先进先出 (FIFO)。从后面加入，从前面离开——就像排队买票！"
        analogy="Like waiting in line — the first person to arrive gets served first!"
        analogyCn="就像排队——先到的人先被服务！"
      />

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-5 border border-[var(--theme-border)] mb-4 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-fit">
          <div className="text-xs text-[var(--theme-text-muted)] font-bold">FRONT\n前面</div>
          <div className="text-lg">🚪</div>
          <AnimatePresence mode="popLayout">
            {queue.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: 60 }}
                animate={{
                  opacity: 1, x: 0,
                  borderColor: (peeking && i === 0) ? "#22c55e" : "#374151",
                  boxShadow: (peeking && i === 0) ? "0 0 16px rgba(34,197,94,0.5)" : "none",
                }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col items-center border-2 rounded-lg p-2 bg-[var(--theme-bg)] min-w-[56px]"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs mt-1">{item.value}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {queue.length === 0 && <div className="text-sm text-[var(--theme-text-muted)] px-4">Empty queue! 空队列！</div>}
          <div className="text-xs text-[var(--theme-text-muted)] font-bold ml-2">← BACK\n后面</div>
        </div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mt-3">Size: {queue.length}</div>
      </div>

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="name" className="w-24 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={enqueue} color="#22c55e">➡️ Enqueue 入队</ControlButton>
          <ControlButton onClick={dequeue} color="#ef4444">⬅️ Dequeue 出队</ControlButton>
          <ControlButton onClick={peekFront} color="#3b82f6">👀 Peek Front</ControlButton>
        </div>
      </div>

      {/* Real-world example */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="text-sm font-bold mb-2">🖨️ Real World: Printer Queue / 打印机队列</div>
        <p className="text-xs text-[var(--theme-text-secondary)]">
          When you send files to a printer, they wait in a queue. The first file sent prints first!
        </p>
        <p className="text-xs text-[var(--theme-text-muted)] mt-1">
          发送文件到打印机时，它们在队列中等待。先发送的先打印！
        </p>
        <div className="mt-2 text-xs">
          📄→📄→📄→🖨️ First in, first printed!
        </div>
      </div>

      <OperationLog log={log} />
    </div>
  );
}
