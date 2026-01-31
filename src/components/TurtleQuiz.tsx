"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect, useRef } from "react";
import type { LessonSection, QuizQuestion } from "@/data/lessons";
import { nl2br } from "@/lib/nl2br";

// ═══ Turtle Progress Bar ═══
function TurtleProgressBar({ position, total }: { position: number; total: number }) {
  const pct = Math.min(100, (position / total) * 100);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-xs text-[var(--theme-text-muted)] mb-1">
        <span>🏁 Start · 起点</span>
        <span>🎯 Finish · 终点</span>
      </div>
      <div className="relative h-10 rounded-full overflow-visible" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
        {/* Track segments */}
        <div className="absolute inset-0 flex items-center px-2">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-2 mx-0.5 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: i < position ? "var(--theme-accent, #22c55e)" : "var(--theme-border)",
                opacity: i < position ? 0.7 : 0.3,
              }}
            />
          ))}
        </div>
        {/* Turtle */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 text-2xl z-10"
          animate={{ left: `calc(${pct}% - 14px)` }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
        >
          <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>🐢</span>
        </motion.div>
        {/* Finish flag */}
        <div className="absolute right-1 top-1/2 -translate-y-1/2 text-lg">🏁</div>
      </div>
      <div className="text-center text-xs text-[var(--theme-text-muted)] mt-1">
        {position}/{total} segments · 进度段
      </div>
    </div>
  );
}

// ═══ Coding Challenge Sub-component ═══
function CodingChallenge({
  question,
  onResult,
}: {
  question: QuizQuestion;
  onResult: (correct: boolean) => void;
}) {
  const [code, setCode] = useState(question.starterCode || "");
  const [output, setOutput] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const runCode = useCallback(() => {
    // Simulate output for Python or C++ code
    const result = simulateOutput(code);
    setOutput(result);
    const expected = (question.expectedOutput || "").trim();
    const pattern = (question as unknown as Record<string,unknown>).expectedPattern as string | undefined;
    let correct: boolean;
    if (pattern) {
      // Flexible matching: each line in pattern is a regex
      const patternLines = pattern.split("\n");
      const resultLines = result.trim().split("\n");
      correct = patternLines.length === resultLines.length &&
        patternLines.every((p, i) => new RegExp(`^${p}$`).test(resultLines[i]?.trim() || ""));
    } else {
      correct = result.trim() === expected;
    }
    setIsCorrect(correct);
    setChecked(true);
    onResult(correct);
  }, [code, question.expectedOutput, onResult]);

  return (
    <div className="space-y-3">
      <p className="text-base font-medium">{nl2br(question.prompt || question.question || "")}</p>

      <div className="relative">
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => { setCode(e.target.value); setChecked(false); }}
          className="w-full h-32 p-3 rounded-lg text-sm terminal-text resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          style={{
            backgroundColor: "#0d1117",
            color: "#22c55e",
            border: "1px solid var(--theme-border)",
          }}
          placeholder="# Write your code here · 在这里写代码"
          spellCheck={false}
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={runCode}
          disabled={!code.trim()}
          className="px-4 py-2 text-sm bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 disabled:opacity-40 transition-colors"
        >
          ▶️ Run Code · 运行代码
        </button>
        {question.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-4 py-2 text-sm bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors"
          >
            💡 {showHint ? "Hide Hint" : "Hint · 提示"}
          </button>
        )}
      </div>

      {showHint && (
        <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-200">
          💡 {nl2br(question.hint || "")}
        </div>
      )}

      {output !== null && (
        <div className="space-y-2">
          <div className="p-3 rounded-lg text-sm terminal-text" style={{ backgroundColor: "#0d1117", border: "1px solid var(--theme-border)" }}>
            <div className="text-xs text-[var(--theme-text-muted)] mb-1">Output · 输出:</div>
            <div className="text-green-400 whitespace-pre-wrap">{output || "(no output)"}</div>
          </div>
          {checked && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded-lg text-sm ${isCorrect ? "bg-green-500/15 text-green-300 border border-green-500/30" : "bg-red-500/15 text-red-300 border border-red-500/30"}`}
            >
              {isCorrect ? "✅ " : "❌ "}{question.explanation}
              {!isCorrect && question.expectedOutput && (
                <div className="mt-2 text-xs text-[var(--theme-text-muted)]">
                  Expected · 期望输出: <code className="text-cyan-400">{question.expectedOutput}</code>
                </div>
              )}
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

// Detect if code is C++ and route to appropriate simulator
function simulateOutput(code: string): string {
  if (code.includes("#include") || code.includes("cout") || code.includes("int main")) {
    return simulateCppOutput(code);
  }
  return simulatePythonOutput(code);
}

// Simple C++ output simulator for quiz coding questions
function simulateCppOutput(code: string): string {
  const lines: string[] = [];
  let currentLine = "";
  const vars: Record<string, string | number> = {};

  const codeLines = code.split("\n");
  for (const line of codeLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("//") || trimmed.startsWith("#include") ||
        trimmed === "using namespace std;" || trimmed === "int main() {" ||
        trimmed === "return 0;" || trimmed === "}") continue;

    // Variable assignment: int x = 5; or string s = "hello";
    const varMatch = trimmed.match(/^(?:int|double|float|string|char|bool|auto|std::string)\s+(\w+)\s*=\s*(.+?)\s*;/);
    if (varMatch) {
      const [, name, val] = varMatch;
      const strMatch = val.match(/^"(.*)"$/);
      if (strMatch) vars[name] = strMatch[1];
      else vars[name] = Number(val) || val;
      continue;
    }

    // cout statement
    const coutMatch = trimmed.match(/^(?:std::)?cout\s*<<\s*(.+?)\s*;/);
    if (coutMatch) {
      const parts = coutMatch[1].split("<<").map(p => p.trim());
      for (const part of parts) {
        if (part === "endl" || part === "\"\\n\"" || part === "'\\n'") {
          lines.push(currentLine);
          currentLine = "";
        } else if (part.startsWith("\"") && part.endsWith("\"")) {
          currentLine += part.slice(1, -1);
        } else if (vars[part] !== undefined) {
          currentLine += String(vars[part]);
        } else if (!isNaN(Number(part))) {
          currentLine += part;
        } else {
          currentLine += part;
        }
      }
      continue;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines.join("\n");
}

// Simple Python output simulator
function simulatePythonOutput(code: string): string {
  const lines: string[] = [];
  // Handle variable assignments and print statements
  const vars: Record<string, string | number | boolean> = {};

  const codeLines = code.split("\n");
  for (const line of codeLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    // Variable assignment: x = value
    const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+)$/);
    if (assignMatch && !trimmed.startsWith("print")) {
      const [, name, val] = assignMatch;
      vars[name] = evalSimpleExpr(val.trim(), vars);
      continue;
    }

    // print() statement
    const printMatch = trimmed.match(/^print\s*\((.+)\)\s*$/);
    if (printMatch) {
      const arg = printMatch[1].trim();
      lines.push(String(evalSimpleExpr(arg, vars)));
      continue;
    }

    // for loop (simple range)
    const forMatch = trimmed.match(/^for\s+(\w+)\s+in\s+range\((.+)\)\s*:\s*$/);
    if (forMatch) {
      const [, varName, rangeArgs] = forMatch;
      const args = rangeArgs.split(",").map((a) => Number(evalSimpleExpr(a.trim(), vars)));
      let start = 0, end = 0, step = 1;
      if (args.length === 1) { end = args[0]; }
      else if (args.length === 2) { start = args[0]; end = args[1]; }
      else if (args.length === 3) { start = args[0]; end = args[1]; step = args[2]; }

      // Find body lines (indented)
      const bodyLines: string[] = [];
      const startIdx = codeLines.indexOf(line);
      for (let j = startIdx + 1; j < codeLines.length; j++) {
        if (codeLines[j].match(/^\s+/) && codeLines[j].trim()) {
          bodyLines.push(codeLines[j].trim());
        } else break;
      }

      for (let i = start; step > 0 ? i < end : i > end; i += step) {
        vars[varName] = i;
        for (const bLine of bodyLines) {
          const bPrint = bLine.match(/^print\s*\((.+)\)\s*$/);
          if (bPrint) {
            lines.push(String(evalSimpleExpr(bPrint[1].trim(), vars)));
          }
          const bAssign = bLine.match(/^(\w+)\s*=\s*(.+)$/);
          if (bAssign && !bLine.startsWith("print")) {
            vars[bAssign[1]] = evalSimpleExpr(bAssign[2].trim(), vars);
          }
        }
      }
      continue;
    }
  }

  return lines.join("\n");
}

function evalSimpleExpr(expr: string, vars: Record<string, string | number | boolean>): string | number | boolean {
  // f-string: f"...{var}..."
  const fMatch = expr.match(/^f["'](.+)["']$/);
  if (fMatch) {
    return fMatch[1].replace(/\{([^}]+)\}/g, (_, key) => {
      const k = key.trim();
      return String(vars[k] ?? k);
    });
  }

  // String literal
  if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
    return expr.slice(1, -1);
  }

  // String concatenation with +
  if (expr.includes("+") && (expr.includes('"') || expr.includes("'"))) {
    const parts = expr.split("+").map((p) => String(evalSimpleExpr(p.trim(), vars)));
    return parts.join("");
  }

  // Boolean
  if (expr === "True") return true;
  if (expr === "False") return false;

  // Number
  if (!isNaN(Number(expr))) return Number(expr);

  // Arithmetic
  const arithMatch = expr.match(/^(.+?)\s*([\+\-\*\/\/\/%\*\*])\s*(.+)$/);
  if (arithMatch) {
    const left = Number(evalSimpleExpr(arithMatch[1].trim(), vars));
    const right = Number(evalSimpleExpr(arithMatch[3].trim(), vars));
    const op = arithMatch[2];
    if (op === "+") return left + right;
    if (op === "-") return left - right;
    if (op === "*") return left * right;
    if (op === "//") return Math.floor(left / right);
    if (op === "/") return left / right;
    if (op === "%") return left % right;
    if (op === "**") return Math.pow(left, right);
  }

  // Variable lookup
  if (vars[expr] !== undefined) return vars[expr];

  // len()
  const lenMatch = expr.match(/^len\((\w+)\)$/);
  if (lenMatch && vars[lenMatch[1]] !== undefined) {
    return String(vars[lenMatch[1]]).length;
  }

  // str()
  const strMatch = expr.match(/^str\((.+)\)$/);
  if (strMatch) return String(evalSimpleExpr(strMatch[1].trim(), vars));

  // int()
  const intMatch = expr.match(/^int\((.+)\)$/);
  if (intMatch) return Math.floor(Number(evalSimpleExpr(intMatch[1].trim(), vars)));

  return expr;
}

// ═══ Scoring System ═══
export interface QuizScore {
  correctFirstTry: number;
  wrongAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  isPerfect: boolean;
}

function calculateXP(correctFirstTry: number, wrongAnswers: number, baseXP: number): QuizScore {
  const bonusPerCorrect = 5;
  const penaltyPerWrong = 3;
  const perfectBonus = 25;
  
  let xp = Math.floor(baseXP * 0.5); // base 50% just for completing
  xp += correctFirstTry * bonusPerCorrect;
  xp -= wrongAnswers * penaltyPerWrong;
  const isPerfect = wrongAnswers === 0;
  if (isPerfect) xp += perfectBonus;
  xp = Math.max(Math.floor(baseXP * 0.3), xp); // floor at 30% of lesson XP
  
  return { correctFirstTry, wrongAnswers, totalQuestions: correctFirstTry + wrongAnswers, xpEarned: xp, isPerfect };
}

// ═══ Main Turtle Quiz Component ═══
export default function TurtleQuiz({
  section,
  onQuizComplete,
  lessonXP,
}: {
  section: LessonSection;
  onQuizComplete: (score: QuizScore) => void;
  lessonXP: number;
}) {
  const questions = section.quiz!;
  const TOTAL_SEGMENTS = Math.min(questions.length + 2, 12); // calibrated: need good accuracy
  const [currentQ, setCurrentQ] = useState(0);
  const [turtlePos, setTurtlePos] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [correctFirstTry, setCorrectFirstTry] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [finalScore, setFinalScore] = useState<QuizScore | null>(null);
  const celebrationFired = useRef(false);

  // Check if turtle reached the end
  useEffect(() => {
    if (turtlePos >= TOTAL_SEGMENTS && !quizComplete) {
      setQuizComplete(true);
      if (!celebrationFired.current) {
        celebrationFired.current = true;
        const score = calculateXP(correctFirstTry, wrongAnswers, lessonXP);
        setFinalScore(score);
        setShowCelebration(true);
        // Fire confetti — extra for perfect!
        import("canvas-confetti").then((confetti) => {
          const fire = confetti.default;
          fire({ particleCount: 100, spread: 80, origin: { x: 0.3, y: 0.5 } });
          fire({ particleCount: 100, spread: 80, origin: { x: 0.7, y: 0.5 } });
          setTimeout(() => fire({ particleCount: 120, spread: 120, origin: { x: 0.5, y: 0.4 } }), 400);
          if (score.isPerfect) {
            setTimeout(() => fire({ particleCount: 150, spread: 140, origin: { x: 0.5, y: 0.3 }, colors: ["#FFD700", "#FFA500", "#FF6347"] }), 800);
            setTimeout(() => fire({ particleCount: 80, spread: 100, origin: { x: 0.2, y: 0.4 } }), 1000);
            setTimeout(() => fire({ particleCount: 80, spread: 100, origin: { x: 0.8, y: 0.4 } }), 1200);
          } else {
            setTimeout(() => fire({ particleCount: 80, spread: 90, origin: { x: 0.5, y: 0.6 } }), 800);
          }
        });
        // Notify parent after celebration
        setTimeout(() => onQuizComplete(score), 1500);
      }
    }
  }, [turtlePos, TOTAL_SEGMENTS, quizComplete, onQuizComplete, correctFirstTry, wrongAnswers, lessonXP]);

  const handleAnswer = useCallback(
    (correct: boolean) => {
      setAnswered(true);
      setShowResult(true);
      if (correct) {
        setCorrectFirstTry((c) => c + 1);
        setTurtlePos((p) => Math.min(p + 1, TOTAL_SEGMENTS));
      } else {
        setWrongAnswers((w) => w + 1);
        setTurtlePos((p) => Math.max(0, p - 2));
      }
    },
    [TOTAL_SEGMENTS]
  );

  const handleMCSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    const correct = idx === questions[currentQ].correctIndex;
    handleAnswer(correct);
  };

  const handleNext = () => {
    const nextQ = currentQ + 1;
    setQuestionsAnswered((q) => q + 1);
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
      setSelected(null);
      setShowResult(false);
      setAnswered(false);
    } else if (!quizComplete) {
      // Out of questions but turtle not at end — loop back
      setCurrentQ(0);
      setSelected(null);
      setShowResult(false);
      setAnswered(false);
    }
  };

  const q = questions[currentQ];

  if (showCelebration && quizComplete && finalScore) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl p-8 text-center space-y-4"
        style={{ backgroundColor: "var(--theme-card-bg)", border: "2px solid var(--theme-accent, #22c55e)" }}
      >
        <TurtleProgressBar position={TOTAL_SEGMENTS} total={TOTAL_SEGMENTS} />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.6 }}
          className="text-7xl"
        >
          {finalScore.isPerfect ? "⭐" : "🎉"}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold" style={{ color: "var(--theme-accent, #22c55e)" }}>
            {finalScore.isPerfect ? "Perfect! ⭐" : "Lesson Complete!"}
          </h2>
          <p className="text-lg text-[var(--theme-text-muted)]">
            {finalScore.isPerfect ? "满分通关！太厉害了！🌟" : "课程完成！🐢 到达终点了！"}
          </p>
        </motion.div>
        {/* XP display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [0.5, 1.2, 1] }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-4xl font-bold"
          style={{ color: finalScore.isPerfect ? "#FFD700" : "var(--theme-accent, #22c55e)" }}
        >
          🌟 +{finalScore.xpEarned} XP
        </motion.div>
        {/* Score breakdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-1"
        >
          <div className="text-sm text-[var(--theme-text-secondary)]">
            ✅ {finalScore.correctFirstTry}/{finalScore.totalQuestions} correct on first try · 首次答对
          </div>
          {finalScore.wrongAnswers > 0 && (
            <div className="text-sm text-[var(--theme-text-muted)]">
              ❌ {finalScore.wrongAnswers} mistake{finalScore.wrongAnswers !== 1 ? "s" : ""} · 失误
            </div>
          )}
          {finalScore.isPerfect && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="inline-block mt-2 px-4 py-1 rounded-full text-sm font-bold"
              style={{ backgroundColor: "rgba(255, 215, 0, 0.2)", color: "#FFD700", border: "1px solid rgba(255, 215, 0, 0.4)" }}
            >
              🏆 Perfect Score Badge! · 满分徽章！
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl p-6 space-y-4"
      style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-cyan-400">🧠 Quiz Time! · 测验时间！</h3>
        <span className="text-sm text-[var(--theme-text-secondary)]">
          Q{currentQ + 1}/{questions.length}
        </span>
      </div>

      <TurtleProgressBar position={turtlePos} total={TOTAL_SEGMENTS} />

      <AnimatePresence mode="wait">
        <motion.div
          key={`q-${currentQ}-${questionsAnswered}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.2 }}
        >
          {q.type === "coding" ? (
            <CodingChallenge
              key={`coding-${currentQ}-${questionsAnswered}`}
              question={q}
              onResult={handleAnswer}
            />
          ) : (
            // Multiple choice (default)
            <div>
              <p className="text-base mb-4 font-medium">{nl2br(q.question || "")}</p>
              <div className="space-y-2 mb-4">
                {(q.options || []).map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleMCSelect(i)}
                    disabled={showResult}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm ${
                      showResult
                        ? i === q.correctIndex
                          ? "bg-green-500/20 border-green-500/50 text-green-400"
                          : i === selected
                          ? "bg-red-500/20 border-red-500/50 text-red-400"
                          : "border-[var(--theme-border)] text-[var(--theme-text-muted)]"
                        : "border-[var(--theme-border)] hover:border-cyan-500/40 hover:bg-cyan-500/5"
                    }`}
                    style={{ backgroundColor: showResult && i !== q.correctIndex && i !== selected ? "transparent" : undefined }}
                  >
                    <span className="font-mono text-xs mr-2 opacity-60">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                  </button>
                ))}
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg text-sm ${
                    selected === q.correctIndex
                      ? "bg-green-500/10 text-green-300 border border-green-500/20"
                      : "bg-red-500/10 text-red-300 border border-red-500/20"
                  }`}
                >
                  {selected === q.correctIndex ? "✅ " : "❌ "}
                  {q.explanation}
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {answered && !quizComplete && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2">
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors"
          >
            {currentQ + 1 >= questions.length && turtlePos < TOTAL_SEGMENTS
              ? "🔄 Keep Going! · 继续答题！"
              : "Next → 下一题"}
          </button>
          {turtlePos < TOTAL_SEGMENTS && (
            <span className="ml-3 text-xs text-[var(--theme-text-muted)]">
              🐢 {TOTAL_SEGMENTS - turtlePos} more to go! · 还差 {TOTAL_SEGMENTS - turtlePos} 步
            </span>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
