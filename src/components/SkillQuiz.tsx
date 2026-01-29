"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scoreToSkillLevel, saveSkillLevelToProfile, SKILL_LABELS, type SkillLevel } from "@/lib/skill-store";

interface QuizQuestion {
  emoji: string;
  en: string;
  cn: string;
  options: { en: string; cn: string; score: number }[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    emoji: "💻",
    en: "Have you ever written code before?",
    cn: "你以前写过代码吗？",
    options: [
      { en: "Never! This is brand new", cn: "从来没有！完全是新手", score: 0 },
      { en: "A little (Scratch, blocks, etc.)", cn: "一点点（Scratch、积木编程等）", score: 1 },
      { en: "Yes, I code regularly!", cn: "是的，我经常写代码！", score: 2 },
    ],
  },
  {
    emoji: "📦",
    en: "Do you know what a variable is?",
    cn: "你知道什么是变量吗？",
    options: [
      { en: "No idea 🤷", cn: "不知道 🤷", score: 0 },
      { en: "I think so... like a container?", cn: "大概知道…像一个容器？", score: 1 },
      { en: "Yes! It stores data", cn: "知道！它用来存储数据", score: 2 },
    ],
  },
  {
    emoji: "🔁",
    en: "Have you used loops (for/while) before?",
    cn: "你用过循环（for/while）吗？",
    options: [
      { en: "What's a loop? 🤔", cn: "什么是循环？🤔", score: 0 },
      { en: "I've seen them in tutorials", cn: "在教程里见过", score: 1 },
      { en: "Yes, I use them all the time!", cn: "是的，我经常用！", score: 2 },
    ],
  },
  {
    emoji: "🧩",
    en: "Can you guess what this prints?",
    cn: "你能猜出这段代码输出什么吗？",
    options: [
      { en: "No idea what this means", cn: "完全看不懂", score: 0 },
      { en: "Maybe 0, 1, 2?", cn: "也许是 0, 1, 2？", score: 1 },
      { en: "Definitely 0, 1, 2 ✅", cn: "肯定是 0, 1, 2 ✅", score: 2 },
    ],
  },
];

interface SkillQuizProps {
  onComplete: (level: SkillLevel) => void;
}

export default function SkillQuiz({ onComplete }: SkillQuizProps) {
  const [step, setStep] = useState(0); // 0..3 = questions, 4 = result
  const [scores, setScores] = useState<number[]>([]);
  const [result, setResult] = useState<SkillLevel | null>(null);

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result
      const total = newScores.reduce((a, b) => a + b, 0);
      const level = scoreToSkillLevel(total);
      setResult(level);
      setStep(QUESTIONS.length);
      saveSkillLevelToProfile(level);
    }
  };

  const totalSteps = QUESTIONS.length + 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg rounded-2xl p-6 md:p-8"
        style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
      >
        {/* Progress bar */}
        <div className="h-2 rounded-full mb-6 overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
          <motion.div
            animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            className="h-full rounded-full"
            style={{ background: "linear-gradient(to right, var(--color-primary), var(--color-primary-light))" }}
          />
        </div>

        <AnimatePresence mode="wait">
          {step < QUESTIONS.length ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{QUESTIONS[step].emoji}</div>
                <h2 className="text-xl font-bold mb-1">{QUESTIONS[step].en}</h2>
                <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>{QUESTIONS[step].cn}</p>
                {step === 3 && (
                  <pre className="mt-3 px-4 py-3 rounded-lg text-sm text-left inline-block" style={{ backgroundColor: "var(--theme-bg)", border: "1px solid var(--theme-border)" }}>
                    <code>{`for i in range(3):\n    print(i)`}</code>
                  </pre>
                )}
              </div>

              <div className="space-y-3">
                {QUESTIONS[step].options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(opt.score)}
                    className="w-full text-left p-4 rounded-xl border transition-colors"
                    style={{ backgroundColor: "var(--theme-bg)", border: "1px solid var(--theme-border)" }}
                  >
                    <div className="font-medium text-sm">{opt.en}</div>
                    <div className="text-xs" style={{ color: "var(--theme-text-muted)" }}>{opt.cn}</div>
                  </motion.button>
                ))}
              </div>

              <div className="text-center mt-4 text-xs" style={{ color: "var(--theme-text-muted)" }}>
                Question {step + 1} of {QUESTIONS.length} · 第 {step + 1} / {QUESTIONS.length} 题
              </div>
            </motion.div>
          ) : result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{SKILL_LABELS[result].emoji}</div>
              <h2 className="text-2xl font-bold mb-1">
                You&apos;re a{result === "advanced" ? "n" : ""} {SKILL_LABELS[result].en}!
              </h2>
              <p className="text-lg mb-1" style={{ color: "var(--theme-text-secondary)" }}>
                你是{SKILL_LABELS[result].cn}！
              </p>
              <p className="text-sm mb-6" style={{ color: "var(--theme-text-muted)" }}>
                {result === "beginner" && "Perfect! We'll start with the basics and make it super fun! 🎮"}
                {result === "intermediate" && "Great! You know the basics — let's level up your skills! 💪"}
                {result === "advanced" && "Awesome! Let's tackle some real challenges! 🔥"}
              </p>
              <p className="text-xs mb-6" style={{ color: "var(--theme-text-muted)" }}>
                You can retake this quiz anytime in Settings · 你可以随时在设置中重新测试
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onComplete(result)}
                className="px-8 py-3 rounded-xl font-bold text-lg"
                style={{ backgroundColor: "var(--color-primary)", color: "var(--theme-bg)" }}
              >
                Let&apos;s Go! 出发！ 🚀
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
