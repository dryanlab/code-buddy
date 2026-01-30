"use client";

import { motion, AnimatePresence, Reorder } from "framer-motion";
import { useState, useCallback } from "react";
import type { LessonSection } from "@/data/lessons";

// ═══ Parsons Problem (Drag & Drop Code Ordering) ═══
export function ParsonsExercise({ section }: { section: LessonSection }) {
  const p = section.parsons!;
  const [items, setItems] = useState(p.shuffled.map((text, i) => ({ id: `item-${i}`, text })));
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkOrder = () => {
    const currentOrder = items.map((it) => it.text);
    const correct = JSON.stringify(currentOrder) === JSON.stringify(p.correctOrder);
    setIsCorrect(correct);
    setChecked(true);
  };

  const reset = () => {
    setItems(p.shuffled.map((text, i) => ({ id: `item-${i}`, text })));
    setChecked(false);
    setIsCorrect(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6"
    >
      <h3 className="text-lg font-bold text-indigo-400 mb-2">🧩 Drag & Drop · 拖拽排序</h3>
      <p className="text-sm text-[var(--theme-text-secondary)] mb-4">{p.instruction}</p>

      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="space-y-2"
      >
        {items.map((item, index) => (
          <Reorder.Item
            key={item.id}
            value={item}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-grab active:cursor-grabbing transition-colors ${
              checked
                ? item.text === p.correctOrder[index]
                  ? "bg-green-500/20 border-green-500/40"
                  : "bg-red-500/20 border-red-500/40"
                : "bg-[var(--theme-card-bg)] border-[var(--theme-border)] hover:border-indigo-500/40"
            }`}
          >
            <span className="text-xs text-[var(--theme-text-muted)] font-mono w-6">{index + 1}.</span>
            <span className="text-sm flex-1">{item.text}</span>
            <span className="text-[var(--theme-text-muted)]">⋮⋮</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="flex gap-3 mt-4">
        <button
          onClick={checkOrder}
          disabled={checked && isCorrect}
          className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 disabled:opacity-50 transition-colors font-bold"
        >
          ✅ Check Order · 检查顺序
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 text-sm bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] rounded-lg hover:bg-[var(--theme-card-bg)] transition-colors"
        >
          🔄 Reset · 重置
        </button>
      </div>

      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-3 p-3 rounded-lg text-sm ${
              isCorrect
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            <div className="font-bold mb-1">
              {isCorrect ? "🎉 Perfect! All in order! · 完美！顺序全对！" : "❌ Not quite right, try again! · 顺序不太对，再调整一下试试！"}
            </div>
            {p.explanation && (
              <div className="text-[var(--theme-text-secondary)] mt-2 text-xs leading-relaxed">
                💡 <strong>Why? · 为什么？</strong> {p.explanation}
              </div>
            )}
            {!isCorrect && (
              <div className="text-[var(--theme-text-secondary)] mt-2 text-xs">
                🔍 Correct order · 正确顺序: {p.correctOrder.map((line, i) => (
                  <div key={i} className="ml-4 text-green-400/70">{i + 1}. {line}</div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══ Fill in the Blank ═══
export function FillBlankExercise({ section }: { section: LessonSection }) {
  const fb = section.fillBlank!;
  const [answers, setAnswers] = useState<string[]>(fb.blanks.map(() => ""));
  const [checked, setChecked] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const check = () => setChecked(true);

  const isCorrect = answers.every(
    (a, i) => a.trim().toLowerCase() === fb.blanks[i].toLowerCase()
  );

  const lines = fb.prompt.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6"
    >
      <h3 className="text-lg font-bold text-cyan-400 mb-2">✏️ Fill in the Blanks · 填空挑战</h3>
      <p className="text-sm text-[var(--theme-text-secondary)] mb-4">Fill in the blanks with the correct code! · 把空白处填上正确的代码！</p>

      <div className="bg-[#0d1117] rounded-lg p-4 terminal-text text-sm space-y-1">
        {(() => {
          let blankIdx = 0;
          return lines.map((line, li) => {
            const parts = line.split("___");
            if (parts.length === 1) {
              return (
                <div key={li} className="text-green-400">{line}</div>
              );
            }
            return (
              <div key={li} className="text-green-400 flex flex-wrap items-center gap-1">
                {parts.map((part, pi) => {
                  const currentBlankIdx = blankIdx;
                  const isBlank = pi < parts.length - 1;
                  if (isBlank) blankIdx++;
                  return (
                    <span key={pi} className="inline-flex items-center">
                      <span>{part}</span>
                      {isBlank && (
                        <input
                          value={answers[currentBlankIdx] || ""}
                          onChange={(e) => {
                            const next = [...answers];
                            next[currentBlankIdx] = e.target.value;
                            setAnswers(next);
                            setChecked(false);
                          }}
                          className={`inline-block w-24 px-2 py-0.5 mx-1 rounded border text-sm terminal-text bg-[var(--theme-card-bg)] text-cyan-300 focus:outline-none focus:border-cyan-500 ${
                            checked
                              ? answers[currentBlankIdx]?.trim().toLowerCase() === fb.blanks[currentBlankIdx].toLowerCase()
                                ? "border-green-500"
                                : "border-red-500"
                              : "border-[var(--theme-border)]"
                          }`}
                          placeholder="___"
                        />
                      )}
                    </span>
                  );
                })}
              </div>
            );
          });
        })()}
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={check}
          className="px-4 py-2 text-sm bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors font-bold"
        >
          ✅ Check · 检查答案
        </button>
        <button
          onClick={() => setShowHints(!showHints)}
          className="px-4 py-2 text-sm bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors"
        >
          💡 Hints · 提示
        </button>
      </div>

      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-3 p-3 rounded-lg text-sm ${
              isCorrect ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
            }`}
          >
            {isCorrect ? (
              "🎉 All correct! · 全部正确！"
            ) : (
              <div>
                <div className="font-bold mb-2">❌ Not quite! · 还有错误：</div>
                {fb.blanks.map((correct, i) => {
                  const userAns = answers[i]?.trim().toLowerCase();
                  const isRight = userAns === correct.toLowerCase();
                  return (
                    <div key={i} className={`ml-2 mb-1 ${isRight ? "text-green-400" : "text-red-300"}`}>
                      {isRight ? "✅" : "❌"} Blank {i + 1} · 第{i + 1}空: 
                      {!isRight && <> You wrote "<strong>{answers[i] || "(empty)"}</strong>" → Correct: "<strong>{correct}</strong>"</>}
                      {isRight && <> <strong>{correct}</strong> ✓</>}
                      {!isRight && fb.explanations?.[i] && (
                        <div className="text-xs text-[var(--theme-text-secondary)] ml-4 mt-0.5">💡 {fb.explanations[i]}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
        {showHints && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-200"
          >
            {fb.hints.map((h, i) => (
              <div key={i}>💡 空 {i + 1}: {h}</div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══ Output Choice (Multiple Choice for Code Output) ═══
export function OutputChoiceExercise({ section }: { section: LessonSection }) {
  const oc = section.outputChoice!;
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  const handleSelect = (i: number) => {
    if (checked) return;
    setSelected(i);
    setChecked(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-xl p-6"
    >
      <h3 className="text-lg font-bold text-emerald-400 mb-2">🎯 Guess the Output! · 猜猜输出是什么？</h3>

      <div className="bg-[#0d1117] rounded-lg p-4 terminal-text text-sm text-green-400 mb-4 border border-[var(--theme-border)]">
        {oc.code.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <div className="space-y-2">
        {oc.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            disabled={checked}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors text-sm ${
              checked
                ? i === oc.correctIndex
                  ? "bg-green-500/20 border-green-500/50 text-green-300"
                  : i === selected
                  ? "bg-red-500/20 border-red-500/50 text-red-300"
                  : "bg-[var(--theme-card-bg)] border-[var(--theme-border)] text-[var(--theme-text-muted)]"
                : "bg-[var(--theme-card-bg)] border-[var(--theme-border)] hover:border-emerald-500/30 hover:text-emerald-300"
            }`}
          >
            <span className="font-mono mr-2">{String.fromCharCode(65 + i)}.</span>
            <span className="terminal-text">{opt.replace(/\\n/g, "↵")}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-3 p-3 rounded-lg text-sm ${
              selected === oc.correctIndex
                ? "bg-green-500/10 text-green-300"
                : "bg-red-500/10 text-red-300"
            }`}
          >
            <div className="font-bold mb-1">
              {selected === oc.correctIndex ? "✅ Correct! · 答对了！" : "❌ Not quite! · 答错了！"}
            </div>
            <div>💡 <strong>Why? · 为什么？</strong> {oc.explanation}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══ Bug Hunt Challenge ═══
export function BugHuntExercise({ section }: { section: LessonSection }) {
  const bug = section.bugChallenge!;
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [foundIt, setFoundIt] = useState(false);
  const [selectedLine, setSelectedLine] = useState<number | null>(null);

  const lines = bug.buggyCode.split("\n");

  const handleLineClick = (lineNum: number) => {
    setSelectedLine(lineNum);
    if (lineNum === bug.bugLine) {
      setFoundIt(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6"
    >
      <h3 className="text-lg font-bold text-red-400 mb-2">🐛 {bug.title}</h3>
      <p className="text-sm text-[var(--theme-text-secondary)] mb-4">Click the line you think has the bug! · 点击你觉得有 Bug 的那一行！</p>

      <div className="bg-[#0d1117] rounded-lg p-4 border border-[var(--theme-border)] mb-4">
        {lines.map((line, i) => (
          <button
            key={i}
            onClick={() => handleLineClick(i + 1)}
            className={`w-full text-left flex items-center gap-3 px-2 py-1 rounded transition-colors ${
              selectedLine === i + 1
                ? foundIt
                  ? "bg-green-500/20"
                  : "bg-red-500/20"
                : "hover:bg-[var(--theme-card-bg)]"
            }`}
          >
            <span className="text-xs text-[var(--theme-text-muted)] w-6 text-right terminal-text">
              {i + 1}
            </span>
            <span className="text-sm text-green-400 terminal-text">{line}</span>
            {selectedLine === i + 1 && (
              <span className="ml-auto">
                {i + 1 === bug.bugLine ? "🐛" : "❌"}
              </span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {foundIt && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-sm text-green-300 mb-2">
              🎉 Found it! Bug is on line {bug.bugLine}! · 找到了！第 {bug.bugLine} 行有 Bug！
            </div>
            <div className="p-3 bg-[var(--theme-card-bg)] rounded-lg text-sm text-[var(--theme-text-secondary)]">
              {bug.explanation}
            </div>
            <div className="mt-2 p-3 bg-[#0d1117] rounded-lg border border-green-500/30">
              <div className="text-xs text-green-400 mb-1 font-bold">✅ Fixed code · 修复后的代码：</div>
              {bug.fixedCode.split("\n").map((line, i) => (
                <div key={i} className="text-sm text-green-400 terminal-text">{line}</div>
              ))}
            </div>
          </motion.div>
        )}
        {selectedLine && !foundIt && selectedLine !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-200"
          >
            Not this line, try another! · 不是这一行，再看看别的行！
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3">
        <button
          onClick={() => setShowHint(!showHint)}
          className="px-4 py-2 text-sm bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors"
        >
          💡 Hint · 提示
        </button>
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="px-4 py-2 text-sm bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] rounded-lg hover:bg-[var(--theme-card-bg)] transition-colors"
        >
          👀 Answer · 答案
        </button>
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-200"
          >
            💡 {bug.hint}
          </motion.div>
        )}
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 p-3 bg-[var(--theme-card-bg)] rounded-lg text-sm text-[var(--theme-text-secondary)]"
          >
            Bug is on line {bug.bugLine}: {bug.explanation}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
