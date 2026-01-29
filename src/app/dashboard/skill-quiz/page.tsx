"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { saveSkillLevelToProfile, scoreToSkillLevel, SKILL_LABELS, type SkillLevel } from "@/lib/skill-store";

interface QuizQuestion {
  question: string;
  options: { emoji: string; label: string; points: number }[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    question: "Have you ever written code before?\n你写过代码吗？",
    options: [
      { emoji: "🙅", label: "Never 从没有", points: 0 },
      { emoji: "🤏", label: "A little 一点点", points: 1 },
      { emoji: "💻", label: "Yes, I code regularly 经常写", points: 2 },
    ],
  },
  {
    question: "Do you know what a variable is?\n你知道什么是变量吗？",
    options: [
      { emoji: "😅", label: "No idea 不知道", points: 0 },
      { emoji: "🤔", label: "I think so 好像知道", points: 1 },
      { emoji: "✅", label: "Yes! 知道！", points: 2 },
    ],
  },
  {
    question: "Have you used loops (for/while)?\n你用过循环吗？",
    options: [
      { emoji: "🙅", label: "No 没有", points: 0 },
      { emoji: "👀", label: "I've seen them 见过", points: 1 },
      { emoji: "✅", label: "Yes, I use them 用过", points: 2 },
    ],
  },
  {
    question: "What does this print? 这段代码输出什么？\nfor i in range(3): print(i)",
    options: [
      { emoji: "🤷", label: "No idea 不知道", points: 0 },
      { emoji: "🤔", label: "Maybe 0,1,2?", points: 1 },
      { emoji: "😎", label: "Definitely 0,1,2 肯定是", points: 2 },
    ],
  },
];

const RESULT_COLORS: Record<SkillLevel, string> = {
  beginner: "from-green-400 to-emerald-500",
  intermediate: "from-blue-400 to-indigo-500",
  advanced: "from-purple-400 to-pink-500",
};

export default function SkillQuizPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [saving, setSaving] = useState(false);

  const progress = ((currentQ) / QUESTIONS.length) * 100;

  function handleAnswer(points: number) {
    const newScore = score + points;
    setScore(newScore);

    if (currentQ + 1 >= QUESTIONS.length) {
      setFinished(true);
    } else {
      setCurrentQ(currentQ + 1);
    }
  }

  async function handleFinish() {
    setSaving(true);
    const level = scoreToSkillLevel(score);
    await saveSkillLevelToProfile(level);
    router.push("/dashboard");
  }

  const resultLevel = scoreToSkillLevel(score);
  const resultInfo = SKILL_LABELS[resultLevel];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Progress bar */}
        {!finished && (
          <div className="mb-8">
            <div className="flex justify-between text-xs mb-2" style={{ color: "var(--theme-text-muted)" }}>
              <span>Question {currentQ + 1}/{QUESTIONS.length}</span>
              <span>第 {currentQ + 1} 题，共 {QUESTIONS.length} 题</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, var(--color-primary), var(--color-primary-light))" }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🧠</div>
                <h2 className="text-xl font-bold whitespace-pre-line leading-relaxed">
                  {QUESTIONS[currentQ].question}
                </h2>
              </div>

              <div className="space-y-3">
                {QUESTIONS[currentQ].options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleAnswer(opt.points)}
                    className="w-full p-4 rounded-xl text-left flex items-center gap-4 transition-colors"
                    style={{
                      backgroundColor: "var(--theme-card-bg)",
                      border: "2px solid var(--theme-border)",
                    }}
                  >
                    <span className="text-3xl">{opt.emoji}</span>
                    <span className="font-medium">{opt.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-center"
            >
              <motion.div
                className="text-8xl mb-4"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {resultInfo.emoji}
              </motion.div>

              <h1 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${RESULT_COLORS[resultLevel]} bg-clip-text text-transparent`}>
                {resultInfo.en}!
              </h1>
              <p className="text-lg mb-2" style={{ color: "var(--theme-text-secondary)" }}>
                {resultInfo.cn}
              </p>
              <p className="text-sm mb-6" style={{ color: "var(--theme-text-muted)" }}>
                Score: {score}/8 · 得分：{score}/8
              </p>

              <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
                {resultLevel === "beginner" && (
                  <p>🌱 Perfect starting point! We&apos;ll begin from the very basics. 完美的起点！从最基础开始！</p>
                )}
                {resultLevel === "intermediate" && (
                  <p>🌿 Nice! You know some basics. We&apos;ll skip ahead a bit! 不错！你有一些基础，我们会跳过入门内容！</p>
                )}
                {resultLevel === "advanced" && (
                  <p>🚀 Impressive! You&apos;re ready for the advanced stuff! 厉害！准备好接受高级挑战了！</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFinish}
                disabled={saving}
                className="px-8 py-3 rounded-xl font-bold text-lg disabled:opacity-50"
                style={{ backgroundColor: "var(--color-primary)", color: "var(--theme-bg)" }}
              >
                {saving ? "Saving..." : "Let's Go! 出发！ 🚀"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
