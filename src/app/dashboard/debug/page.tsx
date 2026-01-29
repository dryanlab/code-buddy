"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CodeEditor from "@/components/CodeEditor";

interface DebugPuzzle {
  id: number;
  difficulty: "easy" | "medium" | "hard";
  title: string;
  titleCn: string;
  description: string;
  descriptionCn: string;
  buggyCode: string;
  hint: string;
  hintCn: string;
  fixedCode: string;
  explanation: string;
  explanationCn: string;
  bugLine: number;
}

const PUZZLES: DebugPuzzle[] = [
  {
    id: 1, difficulty: "easy",
    title: "The Greeting Bug",
    titleCn: "打招呼的 Bug",
    description: "This program should greet the user, but something is wrong!",
    descriptionCn: "这个程序应该跟用户打招呼，但出了点问题！",
    buggyCode: `name = "Alice"
print("Hello, " + Name)`,
    hint: "Python is case-sensitive! · Python 区分大小写！",
    hintCn: "Python 区分大小写哦！",
    fixedCode: `name = "Alice"
print("Hello, " + name)`,
    explanation: "Python is case-sensitive: 'name' and 'Name' are different variables. We defined 'name' (lowercase), so we must use 'name' to read it.",
    explanationCn: "Python 区分大小写：'name' 和 'Name' 是两个不同的变量。我们定义的是小写的 'name'，所以读取时也必须用小写 'name'。",
    bugLine: 2,
  },
  {
    id: 2, difficulty: "easy",
    title: "The Loop That Never Ends",
    titleCn: "永远停不下来的循环",
    description: "This should count from 1 to 5, but the loop is wrong!",
    descriptionCn: "这个程序应该从1数到5，但循环写错了！",
    buggyCode: `count = 1
while count < 5:
    print(count)`,
    hint: "The loop variable never changes! · 循环变量从来不变！",
    hintCn: "循环变量从来不变！",
    fixedCode: `count = 1
while count <= 5:
    print(count)
    count = count + 1`,
    explanation: "Two bugs: 1) count never increases, so the loop runs forever (infinite loop!). 2) 'count < 5' stops at 4, should be 'count <= 5' to include 5.",
    explanationCn: "两个 Bug：1) count 没有增加，所以循环会永远运行（无限循环！）。2) 'count < 5' 在4就停了，应该用 'count <= 5' 才能包括5。",
    bugLine: 3,
  },
  {
    id: 3, difficulty: "medium",
    title: "The Indentation Trap",
    titleCn: "缩进陷阱",
    description: "This grading program gives wrong results. Can you find why?",
    descriptionCn: "这个评分程序结果不对，你能找出原因吗？",
    buggyCode: `score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"
    print("Your grade: " + grade)`,
    hint: "Look at the indentation of the last print statement! · 看看最后一行 print 的缩进！",
    hintCn: "看看最后一行 print 的缩进！",
    fixedCode: `score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"
print("Your grade: " + grade)`,
    explanation: "The print() is indented inside the 'else' block, so it ONLY runs when grade is D! It should be at the same level as the if/elif/else chain (no indent) so it always runs.",
    explanationCn: "print() 缩进在了 'else' 代码块里面，所以只有成绩是 D 时才会打印！它应该和 if/elif/else 同一级（不缩进），这样不管什么成绩都会打印。",
    bugLine: 10,
  },
  {
    id: 4, difficulty: "medium",
    title: "The Off-by-One",
    titleCn: "差一错误",
    description: "This should calculate the average of test scores, but the answer is wrong!",
    descriptionCn: "这个程序应该算考试平均分，但答案不对！",
    buggyCode: `scores = [85, 92, 78, 90]
total = 0
for s in scores:
    total = total + s
average = total / 3
print("Average:", average)`,
    hint: "How many scores are there? · 一共有几个分数？",
    hintCn: "一共有几个分数？",
    fixedCode: `scores = [85, 92, 78, 90]
total = 0
for s in scores:
    total = total + s
average = total / len(scores)
print("Average:", average)`,
    explanation: "We divided by 3, but there are 4 scores! Hard-coding the count is error-prone. Use len(scores) to automatically get the correct count. This way even if you add more scores, it still works!",
    explanationCn: "我们除以了3，但其实有4个分数！写死数量很容易出错。用 len(scores) 可以自动得到正确数量。这样即使以后加更多分数，也不会出错！",
    bugLine: 5,
  },
  {
    id: 5, difficulty: "hard",
    title: "The Sneaky Return",
    titleCn: "偷偷溜走的 Return",
    description: "This function should find the maximum number, but it doesn't work right!",
    descriptionCn: "这个函数应该找最大的数，但结果不对！",
    buggyCode: `def find_max(numbers):
    max_num = numbers[0]
    for n in numbers:
        if n > max_num:
            max_num = n
            return max_num

result = find_max([3, 7, 2, 9, 5])
print("Max:", result)`,
    hint: "Where is the return? Inside or outside the loop? · return 在哪里？在循环里面还是外面？",
    hintCn: "return 在哪里？在循环里面还是外面？",
    fixedCode: `def find_max(numbers):
    max_num = numbers[0]
    for n in numbers:
        if n > max_num:
            max_num = n
    return max_num

result = find_max([3, 7, 2, 9, 5])
print("Max:", result)`,
    explanation: "The return is inside the for loop AND inside the if! So it returns the FIRST number bigger than numbers[0], which is 7 — not the actual maximum (9). Move return outside the loop so it checks ALL numbers first!",
    explanationCn: "return 在 for 循环和 if 的里面！所以它会返回第一个比 numbers[0] 大的数（7），而不是真正的最大值（9）。把 return 移到循环外面，这样才会检查完所有数字！",
    bugLine: 6,
  },
];

function PuzzleCard({ puzzle, onSelect }: { puzzle: DebugPuzzle; onSelect: () => void }) {
  const diffColors = {
    easy: "text-green-400 bg-green-500/10 border-green-500/30",
    medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    hard: "text-red-400 bg-red-500/10 border-red-500/30",
  };
  const diffLabels = { easy: "🟢 Easy · 简单", medium: "🟡 Medium · 中等", hard: "🔴 Hard · 困难" };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`cursor-pointer border rounded-xl p-5 transition-all ${diffColors[puzzle.difficulty]}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">🐛</span>
        <span className="text-[10px] font-bold uppercase">{diffLabels[puzzle.difficulty]}</span>
      </div>
      <h3 className="font-bold text-sm">{puzzle.title}</h3>
      <p className="text-[10px] text-gray-500">{puzzle.titleCn}</p>
      <p className="text-xs text-slate-400 mt-2">{puzzle.description}</p>
    </motion.div>
  );
}

function PuzzleSolver({ puzzle, onBack }: { puzzle: DebugPuzzle; onBack: () => void }) {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const [found, setFound] = useState(false);

  const lines = puzzle.buggyCode.split("\n");

  const handleLineClick = (lineNum: number) => {
    setSelectedLine(lineNum);
    if (lineNum === puzzle.bugLine) setFound(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <button onClick={onBack} className="text-sm text-slate-400 hover:text-slate-200">
        ← Back to puzzles · 返回谜题
      </button>

      <div>
        <h2 className="text-2xl font-bold">🐛 {puzzle.title}</h2>
        <p className="text-sm text-gray-500">{puzzle.titleCn}</p>
        <p className="text-slate-300 mt-2">{puzzle.description}</p>
        <p className="text-xs text-gray-500">{puzzle.descriptionCn}</p>
      </div>

      {/* Buggy code — click to find the bug */}
      <div>
        <h3 className="text-sm font-bold text-red-400 mb-2">🔍 Click the buggy line! · 点击有 Bug 的那一行！</h3>
        <div className="bg-[#0d1117] rounded-xl p-4 border border-slate-700">
          {lines.map((line, i) => (
            <button
              key={i}
              onClick={() => handleLineClick(i + 1)}
              className={`w-full text-left flex items-center gap-3 px-2 py-1.5 rounded transition-colors ${
                selectedLine === i + 1
                  ? found ? "bg-green-500/20" : "bg-red-500/20"
                  : "hover:bg-slate-800"
              }`}
            >
              <span className="text-xs text-slate-600 w-6 text-right font-mono">{i + 1}</span>
              <span className="text-sm text-green-400 font-mono">{line}</span>
              {selectedLine === i + 1 && (
                <span className="ml-auto">{i + 1 === puzzle.bugLine ? "🐛 Found it!" : "❌"}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {found && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
              <div className="font-bold text-green-400 mb-2">🎉 You found the bug! · 找到 Bug 了！</div>
              <div className="text-sm text-slate-300 mb-1"><strong>Why? · 为什么？</strong></div>
              <div className="text-sm text-slate-300">{puzzle.explanation}</div>
              <div className="text-xs text-gray-500 mt-1">{puzzle.explanationCn}</div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-green-400 mb-2">✅ Fixed code · 修复后的代码：</h3>
              <CodeEditor initialCode={puzzle.fixedCode} readOnly />
            </div>
          </motion.div>
        )}
        {selectedLine && !found && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-200"
          >
            Not this line — keep looking! · 不是这一行，再找找看！
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex gap-3">
        <button onClick={() => setShowHint(!showHint)}
          className="px-4 py-2 text-sm bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30"
        >
          💡 {showHint ? "Hide Hint" : "Show Hint"} · {showHint ? "隐藏提示" : "显示提示"}
        </button>
        <button onClick={() => setShowAnswer(!showAnswer)}
          className="px-4 py-2 text-sm bg-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700"
        >
          👀 {showAnswer ? "Hide Answer" : "Show Answer"} · {showAnswer ? "隐藏答案" : "显示答案"}
        </button>
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-sm text-yellow-200"
          >
            💡 {puzzle.hint}
            <div className="text-xs text-yellow-400/60 mt-1">{puzzle.hintCn}</div>
          </motion.div>
        )}
        {showAnswer && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <div className="bg-slate-800/50 rounded-lg p-4 text-sm text-slate-300">
              <div className="font-bold mb-1">Bug is on line {puzzle.bugLine}:</div>
              <div>{puzzle.explanation}</div>
              <div className="text-xs text-gray-500 mt-1">{puzzle.explanationCn}</div>
            </div>
            <CodeEditor initialCode={puzzle.fixedCode} readOnly />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DebugPage() {
  const [selected, setSelected] = useState<DebugPuzzle | null>(null);

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-6">
      {selected ? (
        <PuzzleSolver puzzle={selected} onBack={() => setSelected(null)} />
      ) : (
        <>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold">🐛 Debug Detective</h1>
            <p className="text-sm text-gray-500">Debug 侦探 — 找出隐藏的 Bug！</p>
            <p className="text-slate-400 mt-2 text-sm">
              Every program has bugs. A great coder is a great debugger! Click a puzzle to start hunting. 🔍
            </p>
            <p className="text-xs text-gray-500">
              每个程序都有 Bug。优秀的程序员就是优秀的 Debug 侦探！点击谜题开始寻找 Bug。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PUZZLES.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <PuzzleCard puzzle={p} onSelect={() => setSelected(p)} />
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-5">
            <h3 className="font-bold mb-2">📚 Want more? · 想要更多挑战？</h3>
            <p className="text-sm text-slate-400 mb-3">
              Check out the full Debug Detective lessons for more puzzles and techniques!
            </p>
            <p className="text-xs text-gray-500 mb-3">去课程里的 Debug 侦探模块看更多谜题和技巧！</p>
            <Link href="/dashboard/lessons" className="text-sm text-cyan-400 hover:underline">
              → Go to Lessons · 去课程
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
