"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BinaryLab() {
  const [textInput, setTextInput] = useState("");
  const [binaryInput, setBinaryInput] = useState("");
  const [mode, setMode] = useState<"text-to-bin" | "bin-to-text">("text-to-bin");

  const textToBinary = (text: string) => {
    return text.split("").map((char) => ({
      char,
      ascii: char.charCodeAt(0),
      binary: char.charCodeAt(0).toString(2).padStart(8, "0"),
    }));
  };

  const binaryToText = (bin: string) => {
    const cleaned = bin.replace(/[^01]/g, "");
    const chunks: string[] = [];
    for (let i = 0; i < cleaned.length; i += 8) {
      chunks.push(cleaned.slice(i, i + 8));
    }
    return chunks
      .filter((c) => c.length === 8)
      .map((c) => ({
        binary: c,
        ascii: parseInt(c, 2),
        char: String.fromCharCode(parseInt(c, 2)),
      }));
  };

  const textResults = textInput ? textToBinary(textInput) : [];
  const binResults = binaryInput ? binaryToText(binaryInput) : [];

  return (
    <div className="space-y-4">
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-6 border border-[var(--theme-border)]">
        <div className="text-center text-sm text-[var(--theme-text-secondary)] mb-1">🔢 Binary Lab</div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mb-4">二进制实验室 — 文本与二进制互转</div>

        {/* Mode toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMode("text-to-bin")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "text-to-bin"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-[var(--theme-card-bg)] text-[var(--theme-text-muted)] border border-[var(--theme-border)]"
            }`}
          >
            Text → Binary · 文字→二进制
          </button>
          <button
            onClick={() => setMode("bin-to-text")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "bin-to-text"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-[var(--theme-card-bg)] text-[var(--theme-text-muted)] border border-[var(--theme-border)]"
            }`}
          >
            Binary → Text · 二进制→文字
          </button>
        </div>

        {mode === "text-to-bin" ? (
          <>
            <input
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Type your name or any text... 输入你的名字或任何文字..."
              className="w-full px-4 py-3 bg-black/30 border border-[var(--theme-border)] rounded-lg text-sm focus:outline-none focus:border-green-500 font-mono text-green-400"
            />
            {textResults.length > 0 && (
              <div className="mt-4 space-y-2">
                {textResults.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-2 bg-black/20 rounded-lg border border-green-500/20"
                  >
                    <span className="text-2xl w-10 text-center">{r.char}</span>
                    <span className="text-xs text-[var(--theme-text-muted)] w-16">ASCII: {r.ascii}</span>
                    <span className="font-mono text-green-400 text-sm tracking-wider flex-1">{r.binary}</span>
                  </motion.div>
                ))}
                <div className="mt-3 p-3 bg-black/40 rounded-lg border border-green-500/10">
                  <div className="text-[10px] text-[var(--theme-text-muted)] mb-1">Full binary · 完整二进制:</div>
                  <div className="font-mono text-green-400 text-xs break-all leading-relaxed">
                    {textResults.map((r) => r.binary).join(" ")}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <input
              value={binaryInput}
              onChange={(e) => setBinaryInput(e.target.value)}
              placeholder="Enter binary (e.g. 01001000 01101001)... 输入二进制..."
              className="w-full px-4 py-3 bg-black/30 border border-[var(--theme-border)] rounded-lg text-sm focus:outline-none focus:border-green-500 font-mono text-green-400"
            />
            {binResults.length > 0 && (
              <div className="mt-4 space-y-2">
                {binResults.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-2 bg-black/20 rounded-lg border border-green-500/20"
                  >
                    <span className="font-mono text-green-400 text-sm tracking-wider flex-1">{r.binary}</span>
                    <span className="text-xs text-[var(--theme-text-muted)] w-16">ASCII: {r.ascii}</span>
                    <span className="text-2xl w-10 text-center">{r.char}</span>
                  </motion.div>
                ))}
                <div className="mt-3 p-3 bg-black/40 rounded-lg border border-green-500/10">
                  <div className="text-[10px] text-[var(--theme-text-muted)] mb-1">Decoded text · 解码文字:</div>
                  <div className="font-mono text-green-400 text-lg">
                    {binResults.map((r) => r.char).join("")}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
