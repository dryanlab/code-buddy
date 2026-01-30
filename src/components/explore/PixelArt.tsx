"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const PRESETS: Record<string, number[][]> = {
  smile: [
    [0,0,1,1,1,1,0,0],
    [0,1,0,0,0,0,1,0],
    [1,0,1,0,0,1,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,1,0,0,1,0,1],
    [1,0,0,1,1,0,0,1],
    [0,1,0,0,0,0,1,0],
    [0,0,1,1,1,1,0,0],
  ],
  heart: [
    [0,1,1,0,0,1,1,0],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0],
  ],
  arrow: [
    [0,0,0,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [0,1,1,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
  ],
};

const emptyGrid = () => Array.from({ length: 8 }, () => Array(8).fill(0));

export default function PixelArt() {
  const [grid, setGrid] = useState<number[][]>(emptyGrid());

  const toggleCell = (r: number, c: number) => {
    setGrid((prev) => {
      const next = prev.map((row) => [...row]);
      next[r][c] = next[r][c] ? 0 : 1;
      return next;
    });
  };

  const loadPreset = (name: string) => {
    setGrid(PRESETS[name].map((row) => [...row]));
  };

  return (
    <div className="space-y-4">
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-6 border border-[var(--theme-border)]">
        <div className="text-center text-sm text-[var(--theme-text-secondary)] mb-1">🎨 Pixel Art — Bitmap Editor</div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mb-4">像素画 — 点击格子画图，理解 bitmap 就是二进制网格！</div>

        <div className="flex gap-6 flex-col md:flex-row items-start">
          {/* Grid */}
          <div className="flex-shrink-0">
            <div className="inline-grid grid-cols-8 gap-0.5 bg-[var(--theme-border)] p-0.5 rounded">
              {grid.map((row, r) =>
                row.map((cell, c) => (
                  <motion.div
                    key={`${r}-${c}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleCell(r, c)}
                    className={`w-8 h-8 md:w-10 md:h-10 cursor-pointer rounded-sm transition-colors ${
                      cell ? "bg-white" : "bg-gray-900"
                    }`}
                  />
                ))
              )}
            </div>
          </div>

          {/* Binary data */}
          <div className="flex-1 min-w-0">
            <div className="text-xs text-[var(--theme-text-muted)] mb-2">Binary data · 二进制数据:</div>
            <div className="font-mono text-xs space-y-1 bg-black/30 p-3 rounded-lg border border-[var(--theme-border)]">
              {grid.map((row, r) => (
                <div key={r} className="flex gap-1">
                  <span className="text-green-400">{row.join("")}</span>
                  <span className="text-[var(--theme-text-muted)] ml-2">
                    = 0x{parseInt(row.join(""), 2).toString(16).toUpperCase().padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-[var(--theme-text-muted)] mt-2">
              Each row is one byte (8 bits). The whole image = 8 bytes = 64 bits!
              <br />每行是一个字节（8位）。整张图 = 8字节 = 64位！
            </div>
          </div>
        </div>

        {/* Presets */}
        <div className="flex gap-2 mt-4">
          <span className="text-xs text-[var(--theme-text-muted)] py-1">Presets · 预设:</span>
          <button onClick={() => loadPreset("smile")} className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm hover:bg-yellow-500/30">😊 Smile</button>
          <button onClick={() => loadPreset("heart")} className="px-3 py-1 bg-red-500/20 text-red-400 rounded text-sm hover:bg-red-500/30">❤️ Heart</button>
          <button onClick={() => loadPreset("arrow")} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm hover:bg-blue-500/30">➡️ Arrow</button>
          <button onClick={() => setGrid(emptyGrid())} className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded text-sm hover:bg-gray-500/30">🗑️ Clear</button>
        </div>
      </div>
    </div>
  );
}
