"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { InfoCard, ControlButton, OperationLog } from "./shared";

const BUCKET_COUNT = 7;

function simpleHash(key: string): number {
  let h = 0;
  for (const ch of key) h = (h + ch.charCodeAt(0)) % BUCKET_COUNT;
  return h;
}

interface Entry { key: string; value: string; id: number; }

export default function HashMapVisualizer() {
  const [buckets, setBuckets] = useState<Entry[][]>(() => {
    const b: Entry[][] = Array.from({ length: BUCKET_COUNT }, () => []);
    b[simpleHash("cat")].push({ key: "cat", value: "🐱", id: 1 });
    b[simpleHash("dog")].push({ key: "dog", value: "🐕", id: 2 });
    b[simpleHash("fish")].push({ key: "fish", value: "🐟", id: 3 });
    return b;
  });
  const [log, setLog] = useState<string[]>([]);
  const [inputKey, setInputKey] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hashing, setHashing] = useState(false);

  const addLog = (msg: string) => setLog(p => [...p, msg]);

  const put = () => {
    if (!inputKey || !inputVal) return;
    const idx = simpleHash(inputKey);
    setHashing(true);
    setActiveIdx(null);
    setTimeout(() => {
      setActiveIdx(idx);
      setHashing(false);
      setBuckets(prev => {
        const nb = prev.map(b => [...b]);
        const existing = nb[idx].findIndex(e => e.key === inputKey);
        if (existing !== -1) nb[idx][existing] = { ...nb[idx][existing], value: inputVal };
        else nb[idx].push({ key: inputKey, value: inputVal, id: Date.now() });
        return nb;
      });
      const collision = buckets[idx].length > 0 && !buckets[idx].some(e => e.key === inputKey);
      addLog(`put("${inputKey}", "${inputVal}") → bucket[${idx}]${collision ? " ⚠️ COLLISION!" : ""} — O(1) avg ⚡`);
      setInputKey(""); setInputVal("");
      setTimeout(() => setActiveIdx(null), 1200);
    }, 800);
  };

  const get = () => {
    if (!inputKey) return;
    const idx = simpleHash(inputKey);
    setHashing(true);
    setTimeout(() => {
      setHashing(false);
      setActiveIdx(idx);
      const entry = buckets[idx].find(e => e.key === inputKey);
      if (entry) addLog(`get("${inputKey}") → "${entry.value}" at bucket[${idx}] — O(1) avg ⚡`);
      else addLog(`get("${inputKey}") → NOT FOUND (bucket[${idx}]) — O(1) avg`);
      setTimeout(() => setActiveIdx(null), 1200);
    }, 800);
  };

  const remove = () => {
    if (!inputKey) return;
    const idx = simpleHash(inputKey);
    setActiveIdx(idx);
    setBuckets(prev => {
      const nb = prev.map(b => [...b]);
      nb[idx] = nb[idx].filter(e => e.key !== inputKey);
      return nb;
    });
    addLog(`remove("${inputKey}") from bucket[${idx}] — O(1) avg ⚡`);
    setInputKey("");
    setTimeout(() => setActiveIdx(null), 1000);
  };

  return (
    <div>
      <InfoCard
        icon="📖" title="HashMap — Dictionary" titleCn="哈希表 — 字典"
        description="Store key-value pairs. A hash function converts keys into array indices for O(1) average access!"
        descriptionCn="存储键值对。哈希函数把键转换成数组索引，平均 O(1) 访问！"
        analogy="Like a dictionary — you know the word, flip directly to that page!"
        analogyCn="就像字典——知道单词，直接翻到那一页！"
      />

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-5 border border-[var(--theme-border)] mb-4">
        {/* Hash function animation */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-sm text-[var(--theme-text-secondary)]">key</div>
          <div className="text-lg">→</div>
          <motion.div
            animate={{ rotate: hashing ? 360 : 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl"
          >⚙️</motion.div>
          <div className="text-lg">→</div>
          <div className="text-sm text-[var(--theme-text-secondary)]">index</div>
        </div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mb-4">
          hash(key) % {BUCKET_COUNT} = bucket index
        </div>

        {/* Buckets */}
        <div className="space-y-1">
          {buckets.map((bucket, i) => (
            <motion.div
              key={i}
              animate={{
                borderColor: activeIdx === i ? "#22c55e" : "#374151",
                backgroundColor: activeIdx === i ? "rgba(34,197,94,0.08)" : "transparent",
              }}
              className="flex items-center gap-2 p-2 rounded-lg border"
            >
              <span className="text-xs font-mono text-[var(--theme-text-muted)] w-8">[{i}]</span>
              <div className="flex gap-1 flex-wrap flex-1">
                <AnimatePresence>
                  {bucket.map(entry => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="px-2 py-1 rounded bg-[var(--theme-bg)] border border-[var(--theme-border)] text-xs"
                    >
                      <span className="font-bold">{entry.key}</span>: {entry.value}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {bucket.length === 0 && <span className="text-xs text-[var(--theme-text-muted)]">empty</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <input value={inputKey} onChange={e => setInputKey(e.target.value)} placeholder="key" className="w-24 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="value" className="w-24 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={put} color="#22c55e">📥 Put(k,v)</ControlButton>
          <ControlButton onClick={get} color="#3b82f6">🔍 Get(k)</ControlButton>
          <ControlButton onClick={remove} color="#ef4444">🗑️ Remove(k)</ControlButton>
        </div>
      </div>

      <OperationLog log={log} />
    </div>
  );
}
