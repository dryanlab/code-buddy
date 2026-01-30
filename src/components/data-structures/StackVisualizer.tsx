"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { InfoCard, ControlButton, OperationLog } from "./shared";

export default function StackVisualizer() {
  const [stack, setStack] = useState<{ id: number; value: string }[]>([
    { id: 1, value: "A" }, { id: 2, value: "B" }, { id: 3, value: "C" },
  ]);
  const [log, setLog] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [peeking, setPeeking] = useState(false);
  const [bracketInput, setBracketInput] = useState("");
  const [bracketResult, setBracketResult] = useState<string | null>(null);
  const [bracketStack, setBracketStack] = useState<string[]>([]);
  let idCounter = 100;

  const addLog = (msg: string) => setLog(p => [...p, msg]);

  const push = () => {
    if (!inputVal) return;
    setStack(p => [...p, { id: Date.now(), value: inputVal }]);
    addLog(`push("${inputVal}") — O(1) ⚡`);
    setInputVal("");
  };

  const pop = () => {
    if (stack.length === 0) return;
    const top = stack[stack.length - 1];
    addLog(`pop() → "${top.value}" — O(1) ⚡`);
    setStack(p => p.slice(0, -1));
  };

  const peek = () => {
    if (stack.length === 0) return;
    setPeeking(true);
    addLog(`peek() → "${stack[stack.length - 1].value}" — O(1) ⚡`);
    setTimeout(() => setPeeking(false), 1200);
  };

  const clear = () => {
    setStack([]);
    addLog("clear() — stack is empty");
  };

  const checkBrackets = () => {
    const s: string[] = [];
    const match: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
    setBracketStack([]);
    let valid = true;
    const steps: string[][] = [];
    for (const ch of bracketInput) {
      if ("([{".includes(ch)) { s.push(ch); steps.push([...s]); }
      else if (")]}".includes(ch)) {
        if (s.length === 0 || s[s.length - 1] !== match[ch]) { valid = false; break; }
        s.pop(); steps.push([...s]);
      }
    }
    if (s.length > 0) valid = false;
    
    let i = 0;
    const interval = setInterval(() => {
      if (i >= steps.length) {
        clearInterval(interval);
        setBracketResult(valid ? "✅ Valid! 合法！" : "❌ Invalid! 不合法！");
        return;
      }
      setBracketStack(steps[i]);
      i++;
    }, 400);
  };

  return (
    <div>
      <InfoCard
        icon="📚" title="Stack — Stack of Plates" titleCn="栈 — 叠盘子"
        description="Last In, First Out (LIFO). You can only add or remove from the top — like stacking plates!"
        descriptionCn="后进先出 (LIFO)。只能从顶部添加或取走——就像叠盘子！"
        analogy="Like a stack of plates — you always take the top one first!"
        analogyCn="就像一摞盘子——你总是先拿最上面那个！"
      />

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-5 border border-[var(--theme-border)] mb-4">
        <div className="flex justify-center">
          <div className="relative w-32">
            <div className="text-xs text-[var(--theme-text-muted)] text-center mb-1">
              {stack.length > 0 ? "← TOP 顶部" : "Empty Stack!"}
            </div>
            <div className="flex flex-col-reverse gap-1">
              <AnimatePresence mode="popLayout">
                {stack.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: -50, scale: 0.5 }}
                    animate={{
                      opacity: 1, y: 0, scale: 1,
                      borderColor: (peeking && i === stack.length - 1) ? "#22c55e" : "#374151",
                      boxShadow: (peeking && i === stack.length - 1) ? "0 0 16px rgba(34,197,94,0.5)" : "none",
                    }}
                    exit={{ opacity: 0, y: -60, scale: 0.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, bounce: 0.4 }}
                    className="w-full h-12 rounded-lg border-2 flex items-center justify-center text-lg font-bold bg-[var(--theme-bg)]"
                  >
                    {item.value}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="mt-2 border-t-2 border-[var(--theme-text-muted)] w-full" />
            <div className="text-[10px] text-[var(--theme-text-muted)] text-center">BOTTOM 底部</div>
          </div>
        </div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mt-2">Size: {stack.length}</div>
      </div>

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <input value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder="value" className="w-24 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={push} color="#22c55e">⬆️ Push</ControlButton>
          <ControlButton onClick={pop} color="#ef4444">⬇️ Pop</ControlButton>
          <ControlButton onClick={peek} color="#3b82f6">👀 Peek</ControlButton>
          <ControlButton onClick={clear} color="#6b7280">🧹 Clear</ControlButton>
        </div>
      </div>

      {/* Bracket matching game */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="text-sm font-bold mb-2">🎮 Bracket Matching Game / 括号匹配游戏</div>
        <p className="text-xs text-[var(--theme-text-muted)] mb-3">Enter brackets to check if they&apos;re balanced! 输入括号检查是否匹配！</p>
        <div className="flex gap-2 mb-3">
          <input value={bracketInput} onChange={e => setBracketInput(e.target.value)} placeholder="e.g. ({[]})" className="flex-1 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm font-mono" />
          <ControlButton onClick={checkBrackets} color="#eab308">Check ✓</ControlButton>
        </div>
        {bracketStack.length > 0 && (
          <div className="flex gap-1 mb-2">
            <span className="text-xs text-[var(--theme-text-muted)]">Stack:</span>
            {bracketStack.map((b, i) => (
              <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} className="px-2 py-0.5 bg-[var(--theme-primary)] rounded text-xs font-mono">{b}</motion.span>
            ))}
          </div>
        )}
        {bracketResult && <div className="text-sm font-bold">{bracketResult}</div>}
      </div>

      <OperationLog log={log} />
    </div>
  );
}
