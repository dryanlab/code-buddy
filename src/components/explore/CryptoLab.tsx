"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CryptoLab() {
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(3);
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [showWheel, setShowWheel] = useState(false);

  const caesarCipher = (text: string, s: number, decrypt: boolean) => {
    const effectiveShift = decrypt ? 26 - s : s;
    return text
      .split("")
      .map((char) => {
        if (/[a-z]/.test(char)) {
          return String.fromCharCode(((char.charCodeAt(0) - 97 + effectiveShift) % 26) + 97);
        }
        if (/[A-Z]/.test(char)) {
          return String.fromCharCode(((char.charCodeAt(0) - 65 + effectiveShift) % 26) + 65);
        }
        return char;
      })
      .join("");
  };

  const result = message ? caesarCipher(message, shift, mode === "decrypt") : "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="space-y-4">
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-6 border border-[var(--theme-border)]">
        <div className="text-center text-sm text-[var(--theme-text-secondary)] mb-1">🔐 Caesar Cipher</div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mb-4">凯撒密码 — 古罗马的加密方法！</div>

        {/* Mode toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMode("encrypt")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "encrypt"
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : "bg-[var(--theme-card-bg)] text-[var(--theme-text-muted)] border border-[var(--theme-border)]"
            }`}
          >
            🔒 Encrypt · 加密
          </button>
          <button
            onClick={() => setMode("decrypt")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "decrypt"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-[var(--theme-card-bg)] text-[var(--theme-text-muted)] border border-[var(--theme-border)]"
            }`}
          >
            🔓 Decrypt · 解密
          </button>
        </div>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={mode === "encrypt" ? "Enter secret message... 输入秘密消息..." : "Enter encrypted text... 输入密文..."}
          className="w-full px-4 py-3 bg-black/30 border border-[var(--theme-border)] rounded-lg text-sm focus:outline-none focus:border-red-500 font-mono"
        />

        {/* Shift selector */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-xs text-[var(--theme-text-muted)]">Shift · 偏移:</span>
          <input
            type="range"
            min={1}
            max={25}
            value={shift}
            onChange={(e) => setShift(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-lg font-bold text-red-400 w-8 text-center">{shift}</span>
        </div>

        {/* Alphabet wheel */}
        <button
          onClick={() => setShowWheel(!showWheel)}
          className="mt-2 text-xs text-[var(--theme-text-muted)] hover:text-[var(--theme-text-secondary)]"
        >
          {showWheel ? "▼ Hide" : "▶ Show"} alphabet mapping · 字母对照表
        </button>

        {showWheel && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-2 p-3 bg-black/20 rounded-lg border border-[var(--theme-border)]"
          >
            <div className="flex flex-wrap gap-1 mb-1">
              {alphabet.map((letter, i) => (
                <div key={i} className="text-center w-7">
                  <div className="text-xs text-[var(--theme-text-muted)]">{letter}</div>
                  <div className="text-[10px]">↓</div>
                  <motion.div
                    animate={{ color: "#f87171" }}
                    className="text-xs font-bold"
                  >
                    {alphabet[(i + shift) % 26]}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-black/40 rounded-lg border border-red-500/20"
          >
            <div className="text-[10px] text-[var(--theme-text-muted)] mb-1">
              {mode === "encrypt" ? "🔒 Encrypted · 加密结果:" : "🔓 Decrypted · 解密结果:"}
            </div>
            <div className="font-mono text-lg text-red-400 tracking-wider break-all">{result}</div>
            <div className="mt-2 flex gap-2">
              {message.split("").map((char, i) => (
                <motion.div
                  key={i}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 360 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-xs text-[var(--theme-text-muted)]">{char}</div>
                  <div className="text-[10px]">↓</div>
                  <div className="text-xs text-red-400 font-bold">{result[i]}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
