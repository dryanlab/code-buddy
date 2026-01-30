"use client";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { InfoCard, ControlButton, OperationLog } from "./shared";

interface BSTNode { value: number; left: BSTNode | null; right: BSTNode | null; }

function insertBST(root: BSTNode | null, val: number): BSTNode {
  if (!root) return { value: val, left: null, right: null };
  if (val < root.value) return { ...root, left: insertBST(root.left, val) };
  if (val > root.value) return { ...root, right: insertBST(root.right, val) };
  return root;
}

function deleteBST(root: BSTNode | null, val: number): BSTNode | null {
  if (!root) return null;
  if (val < root.value) return { ...root, left: deleteBST(root.left, val) };
  if (val > root.value) return { ...root, right: deleteBST(root.right, val) };
  if (!root.left) return root.right;
  if (!root.right) return root.left;
  let min = root.right;
  while (min.left) min = min.left;
  return { ...root, value: min.value, right: deleteBST(root.right, min.value) };
}

interface FlatNode { value: number; x: number; y: number; parentX?: number; parentY?: number; }

function flatten(node: BSTNode | null, x: number, y: number, spread: number, parentX?: number, parentY?: number): FlatNode[] {
  if (!node) return [];
  return [
    { value: node.value, x, y, parentX, parentY },
    ...flatten(node.left, x - spread, y + 60, spread * 0.55, x, y),
    ...flatten(node.right, x + spread, y + 60, spread * 0.55, x, y),
  ];
}

export default function BSTVisualizer() {
  const [root, setRoot] = useState<BSTNode | null>(() => {
    let r: BSTNode | null = null;
    for (const v of [50, 30, 70, 20, 40, 60, 80]) r = insertBST(r, v);
    return r;
  });
  const [highlightPath, setHighlightPath] = useState<number[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [guessTarget, setGuessTarget] = useState<number | null>(null);
  const [guessCount, setGuessCount] = useState(0);
  const [guessHint, setGuessHint] = useState("");

  const addLog = (msg: string) => setLog(p => [...p, msg]);

  const nodes = flatten(root, 200, 30, 80);

  const insert = () => {
    const v = parseInt(inputVal); if (isNaN(v)) return;
    const path: number[] = [];
    let cur = root;
    while (cur) { path.push(cur.value); cur = v < cur.value ? cur.left : cur.right; }
    setHighlightPath(path);
    addLog(`insert(${v}) — traversed ${path.length} nodes — O(log n) avg`);
    setTimeout(() => {
      setRoot(prev => insertBST(prev, v));
      setHighlightPath([]);
    }, path.length * 300 + 200);
    setInputVal("");
  };

  const search = () => {
    const v = parseInt(inputVal); if (isNaN(v)) return;
    const path: number[] = [];
    let cur = root;
    let found = false;
    while (cur) {
      path.push(cur.value);
      if (cur.value === v) { found = true; break; }
      cur = v < cur.value ? cur.left : cur.right;
    }
    let i = 0;
    const interval = setInterval(() => {
      setHighlightPath(path.slice(0, i + 1));
      i++;
      if (i >= path.length) {
        clearInterval(interval);
        addLog(`search(${v}) — ${found ? "FOUND ✅" : "NOT FOUND ❌"} — checked ${path.length} nodes`);
        setTimeout(() => setHighlightPath([]), 1500);
      }
    }, 400);
    setInputVal("");
  };

  const del = () => {
    const v = parseInt(inputVal); if (isNaN(v)) return;
    setRoot(prev => deleteBST(prev, v));
    addLog(`delete(${v}) — O(log n) avg`);
    setInputVal("");
  };

  const startGuessGame = () => {
    setGuessTarget(Math.floor(Math.random() * 100) + 1);
    setGuessCount(0);
    setGuessHint("I'm thinking of a number 1-100. 我在想一个1-100的数字。Guess! 猜！");
  };

  const makeGuess = () => {
    const v = parseInt(inputVal); if (isNaN(v) || !guessTarget) return;
    const c = guessCount + 1;
    setGuessCount(c);
    if (v === guessTarget) { setGuessHint(`🎉 Correct in ${c} guesses! 猜对了！用了${c}次！`); setGuessTarget(null); }
    else if (v < guessTarget) setGuessHint(`⬆️ Higher! 再大一点！ (Guess #${c})`);
    else setGuessHint(`⬇️ Lower! 再小一点！ (Guess #${c})`);
    setInputVal("");
  };

  return (
    <div>
      <InfoCard
        icon="🌳" title="Binary Search Tree — Number Guessing Tree" titleCn="二叉搜索树 — 猜数字树"
        description="Left child < parent < right child. Search by comparing and going left or right — like binary search!"
        descriptionCn="左子树 < 父节点 < 右子树。通过比较来左转或右转搜索！"
        analogy="Like a guessing game — 'Higher or lower?' to narrow down the answer!"
        analogyCn="就像猜数字——'大了还是小了？'逐步缩小范围！"
      />

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4 overflow-x-auto">
        <svg width="400" height={Math.max(200, nodes.length * 20)} viewBox="0 0 400 300" className="mx-auto">
          {nodes.map((n, i) => n.parentX !== undefined && (
            <motion.line
              key={`line-${i}`}
              x1={n.parentX} y1={(n.parentY || 0) + 18}
              x2={n.x} y2={n.y}
              stroke={highlightPath.includes(n.value) ? "#22c55e" : "#4b5563"}
              strokeWidth={2}
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.g key={`node-${i}`} initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <motion.circle
                cx={n.x} cy={n.y + 8} r={18}
                fill={highlightPath.includes(n.value) ? "#166534" : "#1e293b"}
                stroke={highlightPath.includes(n.value) ? "#22c55e" : "#4b5563"}
                strokeWidth={2}
                animate={{
                  stroke: highlightPath.includes(n.value) ? "#22c55e" : "#4b5563",
                  fill: highlightPath.includes(n.value) ? "#166534" : "#1e293b",
                }}
              />
              <text x={n.x} y={n.y + 13} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{n.value}</text>
            </motion.g>
          ))}
        </svg>
      </div>

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="value" className="w-24 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={insert} color="#22c55e">🌱 Insert</ControlButton>
          <ControlButton onClick={search} color="#3b82f6">🔍 Search</ControlButton>
          <ControlButton onClick={del} color="#ef4444">🗑️ Delete</ControlButton>
        </div>
      </div>

      {/* Guessing game */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="text-sm font-bold mb-2">🎮 Binary Search Guessing Game / 二分搜索猜数字</div>
        <p className="text-xs text-[var(--theme-text-muted)] mb-2">Can you guess in ≤7 tries? (Binary search: log₂100 ≈ 7) 最多7次猜中！</p>
        {!guessTarget && <ControlButton onClick={startGuessGame} color="#eab308">🎲 Start Game 开始</ControlButton>}
        {guessTarget && (
          <div className="flex gap-2">
            <input value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="1-100" className="w-20 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
            <ControlButton onClick={makeGuess} color="#22c55e">Guess! 猜！</ControlButton>
          </div>
        )}
        {guessHint && <div className="text-sm mt-2">{guessHint}</div>}
      </div>

      <OperationLog log={log} />
    </div>
  );
}
