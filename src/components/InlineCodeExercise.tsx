"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadPyodideEngine, runPython, isPyodideLoaded } from "@/lib/pyodide-engine";
import { runCpp } from "@/lib/cpp-engine";

export interface ExerciseData {
  prompt: string;
  promptZh: string;
  starterCode: string;
  expectedOutput: string;
  hint: string;
  hintZh: string;
  solution: string;
  language?: "python" | "cpp";
}

interface Props {
  exercise: ExerciseData;
  onComplete?: () => void;
}

export default function InlineCodeExercise({ exercise, onComplete }: Props) {
  const [code, setCode] = useState(exercise.starterCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMsg, setLoadMsg] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [code]);

  const lang = exercise.language || (code.includes("#include") || code.includes("int main") ? "cpp" : "python");

  const handleRun = async () => {
    setAttempted(true);
    setIsRunning(true);
    setOutput("");
    setIsCorrect(false);

    try {
      let outputText = "";
      let errorText: string | null = null;

      if (lang === "cpp") {
        // Use Piston API for C++
        setIsLoading(true);
        setLoadMsg("Compiling C++...");
        const result = await runCpp(code);
        setIsLoading(false);
        if (result.error) {
          errorText = result.error;
        } else {
          outputText = result.output;
        }
      } else {
        // Use Pyodide for Python
        if (!isPyodideLoaded()) {
          setIsLoading(true);
          try {
            await loadPyodideEngine((msg) => setLoadMsg(msg));
          } catch {
            setOutput("❌ Failed to load Python engine. Please refresh and try again.");
            setIsRunning(false);
            setIsLoading(false);
            return;
          }
          setIsLoading(false);
        }
        const result = await runPython(code);
        if (result.error) {
          errorText = result.error;
        } else {
          outputText = result.output;
        }
      }

      if (errorText) {
        setOutput(errorText);
      } else {
        setOutput(outputText);
        const expected = exercise.expectedOutput.trim();
        const actual = outputText.trim();
        if (actual === expected) {
          setIsCorrect(true);
          setShowConfetti(true);
          onComplete?.();
          setTimeout(() => setShowConfetti(false), 3000);
        }
      }
    } catch (e) {
      setOutput(`❌ Error running ${lang === "cpp" ? "C++" : "Python"} code`);
    }
    setIsRunning(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newCode = code.substring(0, start) + "    " + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl overflow-hidden relative"
      style={{
        backgroundColor: "var(--theme-card-bg)",
        border: "2px solid var(--theme-accent, #22d3ee)",
      }}
    >
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100 + "%",
                y: "-10%",
                rotate: 0,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: "110%",
                rotate: Math.random() * 720 - 360,
              }}
              transition={{
                duration: Math.random() * 1.5 + 1,
                delay: Math.random() * 0.5,
                ease: "easeIn",
              }}
              className="absolute text-xl"
            >
              {["🎉", "⭐", "✨", "🎊", "💫", "🌟"][i % 6]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Header */}
      <div
        className="px-5 py-3 font-bold text-sm flex items-center gap-2"
        style={{
          background: "linear-gradient(135deg, var(--theme-accent, #22d3ee)22, var(--theme-accent, #22d3ee)08)",
          borderBottom: "1px solid var(--theme-border)",
        }}
      >
        <span className="text-lg">🧪</span>
        <span>Try It! · 动手试试！</span>
        {isCorrect && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="ml-auto text-green-400 font-bold"
          >
            ✅ Correct! 正确！
          </motion.span>
        )}
      </div>

      <div className="p-5 space-y-4">
        {/* Prompt */}
        <div className="space-y-1">
          <p className="text-sm font-medium" style={{ color: "var(--theme-text)" }}>
            {exercise.prompt}
          </p>
          <p className="text-xs text-[var(--theme-text-secondary)]">{exercise.promptZh}</p>
        </div>

        {/* Code Editor */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            className="w-full min-h-[100px] p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "#0d1117",
              color: "#c9d1d9",
              border: "1px solid var(--theme-border)",
            }}
          />
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRun}
            disabled={isRunning || isLoading}
            className="px-5 py-2.5 rounded-lg font-bold text-sm text-black disabled:opacity-50 transition-colors"
            style={{
              background: "linear-gradient(135deg, #22c55e, #06b6d4)",
            }}
          >
            {isLoading ? `⏳ ${loadMsg || "Loading..."}` : isRunning ? "⏳ Running..." : "▶ Run · 运行"}
          </motion.button>

          <button
            onClick={() => setShowHint(!showHint)}
            className="px-4 py-2 text-sm rounded-lg transition-colors"
            style={{
              backgroundColor: "var(--theme-accent, #22d3ee)15",
              color: "var(--theme-accent, #22d3ee)",
              border: "1px solid var(--theme-accent, #22d3ee)30",
            }}
          >
            💡 {showHint ? "Hide Hint · 隐藏提示" : "Hint · 提示"}
          </button>

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="px-4 py-2 text-sm rounded-lg bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-card-bg)] transition-colors"
          >
            👀 {showSolution ? "Hide · 隐藏" : "Solution · 看答案"}
          </button>

          <button
            onClick={() => {
              setCode(exercise.starterCode);
              setOutput("");
              setIsCorrect(false);
            }}
            className="px-4 py-2 text-sm rounded-lg bg-[var(--theme-card-bg)] text-[var(--theme-text-muted)] hover:bg-[var(--theme-card-bg)] transition-colors"
          >
            🔄 Reset · 重置
          </button>
        </div>

        {/* Hint */}
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-sm"
            >
              <p className="text-yellow-200">💡 {exercise.hint}</p>
              <p className="text-yellow-200/70 text-xs mt-1">💡 {exercise.hintZh}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Solution */}
        <AnimatePresence>
          {showSolution && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="rounded-lg overflow-hidden">
                <div className="px-3 py-1.5 text-xs font-bold bg-green-500/20 text-green-400">
                  Solution · 答案
                </div>
                <pre className="p-3 text-sm font-mono bg-[#0d1117] border border-[var(--theme-border)] rounded-b-lg overflow-x-auto">
                  <code className="text-green-300">{exercise.solution}</code>
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Output Console */}
        {(output || isRunning) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg overflow-hidden"
          >
            <div className="px-3 py-1.5 text-xs font-bold bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] flex items-center gap-2">
              <span>📺 Output · 输出</span>
              {isCorrect && <span className="text-green-400 ml-auto">✅ Correct! 正确！</span>}
              {attempted && !isCorrect && output && !output.startsWith("❌") && (
                <span className="text-orange-400 ml-auto">🔄 Try again! 再试试！</span>
              )}
            </div>
            <pre
              className="p-3 text-sm font-mono min-h-[40px] max-h-[200px] overflow-auto"
              style={{
                backgroundColor: "#0d1117",
                color: isCorrect ? "#4ade80" : output.startsWith("❌") ? "#f87171" : "#c9d1d9",
                border: "1px solid var(--theme-border)",
              }}
            >
              {isRunning ? "⏳ Running..." : output || " "}
            </pre>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
