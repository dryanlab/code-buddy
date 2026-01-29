"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import CodeEditor from "@/components/CodeEditor";
import { CODE_EXERCISES, type CodeExercise } from "@/data/code-challenges";
import { useUserProfile } from "@/lib/useUserProfile";

function ExerciseCard({ exercise, isSelected, onClick, isRecommended }: { exercise: CodeExercise; isSelected: boolean; onClick: () => void; isRecommended: boolean }) {
  const diffBadge = exercise.difficulty === 1 ? "🟢" : exercise.difficulty === 2 ? "🟡" : "🔴";
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="w-full text-left p-4 rounded-xl border transition-colors relative"
      style={{
        backgroundColor: isSelected
          ? `color-mix(in srgb, var(--color-primary) 10%, var(--theme-card-bg))`
          : "var(--theme-card-bg)",
        borderColor: isSelected
          ? `color-mix(in srgb, var(--color-primary) 30%, transparent)`
          : "var(--theme-border)",
        opacity: isRecommended ? 1 : 0.7,
      }}
    >
      {!isRecommended && (
        <div className="absolute -top-1.5 -right-1.5 text-[9px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "var(--theme-border)", color: "var(--theme-text-muted)" }}>
          🔒 Advanced
        </div>
      )}
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-sm">{diffBadge} {exercise.title}</span>
        <div className="flex gap-1">
          {Array.from({ length: exercise.difficulty }, (_, i) => (
            <span key={i} className="text-yellow-400 text-xs">⭐</span>
          ))}
        </div>
      </div>
      <p className="text-xs line-clamp-2" style={{ color: "var(--theme-text-secondary)" }}>{exercise.description}</p>
      <div className="flex gap-1 mt-2 flex-wrap">
        {isRecommended && (
          <span className="px-2 py-0.5 text-[10px] rounded-full font-bold" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 20%, transparent)", color: "var(--color-primary)" }}>
            ⭐ For you
          </span>
        )}
        {exercise.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-[10px] rounded-full" style={{ backgroundColor: "var(--theme-border)", color: "var(--theme-text-secondary)" }}>
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
  const profile = useUserProfile();
  const userGrade = profile?.grade || 6;

  const sortedExercises = useMemo(() => {
    const recommended = CODE_EXERCISES.filter((ex) => userGrade >= ex.gradeRange[0] && userGrade <= ex.gradeRange[1]);
    const advanced = CODE_EXERCISES.filter((ex) => userGrade < ex.gradeRange[0] || userGrade > ex.gradeRange[1]);
    return [...recommended, ...advanced];
  }, [userGrade]);

  return (
    <div className="p-6 md:p-8 h-screen flex flex-col">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-3xl font-bold mb-1">💻 Code Lab</h1>
        <p className="text-sm mb-1" style={{ color: "var(--theme-text-muted)" }}>代码实验室</p>
        <p style={{ color: "var(--theme-text-secondary)" }}>Write code, run it, experiment! This is your coding lab 🧪</p>
        <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>写代码、运行、实验！这是你的编程实验室</p>
      </motion.div>

      <div className="flex gap-6 flex-1 min-h-0">
        <div className="w-72 flex-shrink-0 overflow-y-auto space-y-3">
          <button
            onClick={() => { setFreeMode(true); setSelectedExercise(null); }}
            className="w-full text-left p-4 rounded-xl border transition-colors"
            style={{
              backgroundColor: freeMode
                ? `color-mix(in srgb, var(--color-secondary) 10%, var(--theme-card-bg))`
                : "var(--theme-card-bg)",
              borderColor: freeMode
                ? `color-mix(in srgb, var(--color-secondary) 30%, transparent)`
                : "var(--theme-border)",
            }}
          >
            <span className="text-lg">🆓</span>
            <span className="ml-2 font-bold text-sm">Free Code</span>
            <p className="text-xs mt-1" style={{ color: "var(--theme-text-secondary)" }}>Write anything you want!</p>
            <p className="text-[10px]" style={{ color: "var(--theme-text-muted)" }}>自由编写任何代码！</p>
          </button>

          <div className="text-xs px-2 pt-2" style={{ color: "var(--theme-text-muted)" }}>EXERCISES · 练习</div>
          {sortedExercises.map((ex) => {
            const isRecommended = userGrade >= ex.gradeRange[0] && userGrade <= ex.gradeRange[1];
            return (
              <ExerciseCard
                key={ex.id}
                exercise={ex}
                isSelected={selectedExercise?.id === ex.id}
                isRecommended={isRecommended}
                onClick={() => { setSelectedExercise(ex); setFreeMode(false); setShowHint(false); setShowSolution(false); }}
              />
            );
          })}
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          {selectedExercise && !freeMode ? (
            <>
              <div className="mb-4">
                <h2 className="text-xl font-bold">{selectedExercise.title}</h2>
                <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>{selectedExercise.description}</p>
              </div>

              <div className="flex-1 min-h-0">
                <CodeEditor initialCode={selectedExercise.starterCode} height="300px" />
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-4 py-2 text-sm rounded-lg"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 20%, transparent)", color: "var(--color-warning)" }}
                >
                  💡 {showHint ? "Hide Hint" : "Show Hint"} {showHint ? "隐藏提示" : "显示提示"}
                </button>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-4 py-2 text-sm rounded-lg"
                  style={{ backgroundColor: "var(--theme-card-bg)", color: "var(--theme-text-secondary)", border: "1px solid var(--theme-border)" }}
                >
                  👀 {showSolution ? "Hide Solution" : "Show Solution"} {showSolution ? "隐藏答案" : "显示答案"}
                </button>
              </div>

              {showHint && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="mt-3 p-3 rounded-lg text-sm"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 10%, var(--theme-card-bg))", border: "1px solid color-mix(in srgb, var(--color-warning) 20%, transparent)", color: "var(--theme-text-primary)" }}>
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
                <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>自由编程模式</p>
                <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>Write any Python code you want! Experiment freely.</p>
                <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>写任何你想写的 Python 代码！自由实验。</p>
              </div>
              <CodeEditor height="400px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
