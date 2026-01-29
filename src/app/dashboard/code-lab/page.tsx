"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import { CODE_EXERCISES, type CodeExercise } from "@/data/code-challenges";

function ExerciseCard({ exercise, isSelected, onClick }: { exercise: CodeExercise; isSelected: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-colors ${
        isSelected
          ? "bg-green-500/10 border-green-500/30"
          : "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30"
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-sm">{exercise.title}</span>
        <div className="flex gap-1">
          {Array.from({ length: exercise.difficulty }, (_, i) => (
            <span key={i} className="text-yellow-400 text-xs">⭐</span>
          ))}
        </div>
      </div>
      <p className="text-xs text-slate-400 line-clamp-2">{exercise.description}</p>
      <div className="flex gap-1 mt-2">
        {exercise.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-[10px] bg-slate-700/50 text-slate-400 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

export default function CodeLabPage() {
  const [selectedExercise, setSelectedExercise] = useState<CodeExercise | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [freeMode, setFreeMode] = useState(false);

  return (
    <div className="p-6 md:p-8 h-screen flex flex-col">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-3xl font-bold mb-1">💻 Code Lab</h1>
        <p className="text-sm text-gray-400 mb-1">代码实验室</p>
        <p className="text-slate-400">Write code, run it, experiment! This is your coding lab 🧪</p>
        <p className="text-sm text-gray-500">写代码、运行、实验！这是你的编程实验室</p>
      </motion.div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Sidebar: exercises */}
        <div className="w-72 flex-shrink-0 overflow-y-auto space-y-3">
          <button
            onClick={() => { setFreeMode(true); setSelectedExercise(null); }}
            className={`w-full text-left p-4 rounded-xl border transition-colors ${
              freeMode
                ? "bg-cyan-500/10 border-cyan-500/30"
                : "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30"
            }`}
          >
            <span className="text-lg">🆓</span>
            <span className="ml-2 font-bold text-sm">Free Code</span>
            <p className="text-xs text-slate-400 mt-1">Write anything you want!</p>
            <p className="text-[10px] text-gray-500">自由编写任何代码！</p>
          </button>

          <div className="text-xs text-slate-500 px-2 pt-2">EXERCISES · 练习</div>
          {CODE_EXERCISES.map((ex) => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              isSelected={selectedExercise?.id === ex.id}
              onClick={() => { setSelectedExercise(ex); setFreeMode(false); setShowHint(false); setShowSolution(false); }}
            />
          ))}
        </div>

        {/* Main editor area */}
        <div className="flex-1 flex flex-col min-h-0">
          {selectedExercise && !freeMode ? (
            <>
              <div className="mb-4">
                <h2 className="text-xl font-bold">{selectedExercise.title}</h2>
                <p className="text-sm text-slate-400">{selectedExercise.description}</p>
              </div>

              <div className="flex-1 min-h-0">
                <CodeEditor initialCode={selectedExercise.starterCode} height="300px" />
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-4 py-2 text-sm bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30"
                >
                  💡 {showHint ? "Hide Hint" : "Show Hint"} {showHint ? "隐藏提示" : "显示提示"}
                </button>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-4 py-2 text-sm bg-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700"
                >
                  👀 {showSolution ? "Hide Solution" : "Show Solution"} {showSolution ? "隐藏答案" : "显示答案"}
                </button>
              </div>

              {showHint && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-200">
                  💡 {selectedExercise.hint}
                </motion.div>
              )}
              {showSolution && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3">
                  <CodeEditor initialCode={selectedExercise.solution} height="200px" readOnly />
                </motion.div>
              )}
            </>
          ) : (
            <div className="flex-1">
              <div className="mb-4">
                <h2 className="text-xl font-bold">🆓 Free Coding Mode</h2>
                <p className="text-sm text-gray-400">自由编程模式</p>
                <p className="text-sm text-slate-400">Write any Python code you want! Experiment freely.</p>
                <p className="text-xs text-gray-500">写任何你想写的 Python 代码！自由实验。</p>
              </div>
              <CodeEditor height="400px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
