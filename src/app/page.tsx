"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { enterPreviewMode } from "@/lib/preview-mode";

const CODE_LINES = [
  'print("Hello, World! 🌍")',
  "name = 'William'",
  "for i in range(10):",
  "    score += 1",
  "if level > 5:",
  '    print("Boss fight! 🐉")',
  "def hack_the_planet():",
  '    return "🚀"',
];

function MatrixRain() {
  const [columns, setColumns] = useState<number[]>([]);
  useEffect(() => {
    setColumns(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {columns.map((col) => (
        <motion.div
          key={col}
          className="absolute text-green-400 terminal-text text-xs"
          style={{ left: `${col * 5}%` }}
          initial={{ y: -100 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          {Array.from({ length: 20 }, () =>
            String.fromCharCode(0x30a0 + Math.random() * 96)
          ).join("\n")}
        </motion.div>
      ))}
    </div>
  );
}

function TypewriterCode() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    if (lineIndex >= CODE_LINES.length) {
      const t = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
        setDisplayed([]);
      }, 3000);
      return () => clearTimeout(t);
    }

    const line = CODE_LINES[lineIndex];
    if (charIndex < line.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 50);
      return () => clearTimeout(t);
    } else {
      setDisplayed((d) => [...d, line]);
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }
  }, [lineIndex, charIndex]);

  const currentLine = lineIndex < CODE_LINES.length ? CODE_LINES[lineIndex].slice(0, charIndex) : "";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayed, charIndex]);

  return (
    <div className="bg-[#0d1117] border border-green-500/30 rounded-xl p-6 terminal-text text-sm max-w-md w-full">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div ref={scrollRef} className="h-32 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-slate-700">
        {displayed.map((line, i) => (
          <div key={i} className="text-green-400">
            <span className="text-[var(--theme-text-muted)]">{">>> "}</span>
            {line}
          </div>
        ))}
        {lineIndex < CODE_LINES.length && (
          <div className="text-green-400">
            <span className="text-[var(--theme-text-muted)]">{">>> "}</span>
            {currentLine}
            <span className="animate-pulse">▌</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const router = useRouter();

  const handleTryFree = () => {
    enterPreviewMode();
    router.push("/dashboard");
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-grid overflow-hidden" style={{ backgroundColor: "var(--theme-bg)", color: "var(--theme-text-primary)" }}>
      <MatrixRain />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="text-7xl mb-6"
        >
          🐍
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span style={{ background: `linear-gradient(to right, var(--color-primary), var(--color-primary-light), var(--color-secondary))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Code Buddy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl mb-2 max-w-2xl"
          style={{ color: "var(--theme-text-secondary)" }}
        >
          Learn to Code · Understand Computers · Use AI
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-sm mb-8"
          style={{ color: "var(--theme-text-muted)" }}
        >
          学编程 · 懂计算机 · 用 AI — 从零开始，成为真正的 Programmer 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <TypewriterCode />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/login"
            className="px-8 py-4 font-bold text-lg rounded-xl hover:scale-105 transition-transform glow-green"
            style={{ background: `linear-gradient(to right, var(--color-primary), var(--color-primary-light))`, color: "var(--theme-bg)" }}
          >
            🚀 Start Adventure
            <span className="block text-xs font-normal opacity-80">开始冒险</span>
          </Link>
          <Link
            href="/dashboard/code-lab"
            className="px-8 py-4 font-bold text-lg rounded-xl transition-colors"
            style={{ border: "1px solid var(--color-secondary)", color: "var(--color-secondary)" }}
          >
            💻 Code Lab
            <span className="block text-xs font-normal opacity-70">代码实验室</span>
          </Link>
          <button
            onClick={handleTryFree}
            className="px-8 py-4 font-bold text-lg rounded-xl transition-colors hover:scale-105 transition-transform"
            style={{ border: "1px solid var(--theme-text-muted)", color: "var(--theme-text-secondary)" }}
          >
            👀 Try Free
            <span className="block text-xs font-normal opacity-70">免费试用</span>
          </button>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full"
        >
          {[
            { icon: "🐍", title: "Python Programming", titleCn: "Python 编程", desc: "From Hello World to text adventure games", descCn: "从 Hello World 到文字冒险游戏" },
            { icon: "💻", title: "Computer Science", titleCn: "计算机探秘", desc: "CPU, memory, and the secrets of binary", descCn: "CPU、内存、二进制的奥秘" },
            { icon: "🤖", title: "AI Assistant", titleCn: "AI 助手", desc: "Your coding buddy that guides you to think", descCn: "你的编程伙伴，引导你思考" },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl p-6 transition-colors"
              style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-sm mb-2" style={{ color: "var(--theme-text-muted)" }}>{feature.titleCn}</p>
              <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>{feature.desc}</p>
              <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>{feature.descCn}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
