"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { LessonSection, SyntaxCard, CodeAnatomy } from "@/data/lessons";

function SyntaxCardComponent({ card, index }: { card: SyntaxCard; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer select-none"
    >
      <div
        className={`rounded-xl p-4 border-2 transition-all duration-300 ${
          flipped
            ? "bg-green-900/30 border-green-500/50"
            : "bg-slate-800/80 border-slate-600/50 hover:border-cyan-500/50"
        }`}
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{card.emoji}</span>
          <div className="flex-1 min-w-0">
            <code className="text-green-300 text-lg font-bold bg-slate-900/50 px-2 py-0.5 rounded">
              {card.symbol}
            </code>
            <div className="mt-2 text-cyan-300 font-medium text-sm">
              {card.name}
            </div>
            <div className="text-slate-400 text-xs mt-0.5">{card.nameZh}</div>

            {flipped && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-3 pt-3 border-t border-slate-700"
              >
                <p className="text-slate-300 text-sm">{card.description}</p>
                {card.example && (
                  <pre className="mt-2 bg-slate-900/80 rounded-lg p-2 text-green-300 text-xs overflow-x-auto">
                    <code>{card.example}</code>
                  </pre>
                )}
              </motion.div>
            )}

            {!flipped && (
              <div className="mt-2 text-slate-500 text-xs italic">
                👆 Tap to learn more · 点击了解更多
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CodeAnatomyComponent({ anatomy }: { anatomy: CodeAnatomy }) {
  const [activeLine, setActiveLine] = useState<number | null>(null);

  return (
    <div className="rounded-xl overflow-hidden border border-cyan-500/30">
      <div className="bg-slate-900 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
        <span className="text-lg">🔬</span>
        <span className="text-cyan-400 font-medium text-sm">
          Code Anatomy · 代码解剖
        </span>
      </div>

      <div className="bg-slate-900/80 p-4">
        <pre className="text-sm leading-relaxed">
          {anatomy.lines.map((line, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveLine(i)}
              onMouseLeave={() => setActiveLine(null)}
              onClick={() => setActiveLine(activeLine === i ? null : i)}
              className={`px-2 py-1 rounded cursor-pointer transition-all ${
                activeLine === i
                  ? "bg-cyan-500/20 border-l-2 border-cyan-400"
                  : "hover:bg-slate-800 border-l-2 border-transparent"
              }`}
            >
              <code className="text-green-300">{line.code}</code>
              {activeLine === i && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mt-1 ml-4 text-cyan-300 text-xs"
                >
                  💡 {line.explanation}
                  {line.explanationZh && (
                    <span className="text-slate-400 ml-2">· {line.explanationZh}</span>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </pre>
      </div>

      <div className="bg-slate-800/50 px-4 py-2 text-xs text-slate-500">
        👆 Hover or tap each line to see what it does · 悬停或点击每一行查看解释
      </div>
    </div>
  );
}

export default function ConceptSection({ section }: { section: LessonSection }) {
  if (!section.concept) return null;
  const { title, titleZh, syntaxCards, codeAnatomy } = section.concept;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div
        className="rounded-xl p-5 border"
        style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border)" }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📖</span>
          <div>
            <h2 className="text-xl font-bold text-green-400">{title}</h2>
            {titleZh && <p className="text-sm text-slate-400">{titleZh}</p>}
          </div>
        </div>
        <p className="text-slate-400 text-sm mt-2">
          Learn these new tools before we code! · 先学会这些新工具，再开始写代码！
        </p>
      </div>

      {/* Syntax Cards */}
      {syntaxCards && syntaxCards.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🃏</span>
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              New Syntax Cards · 新语法卡片
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {syntaxCards.map((card, i) => (
              <SyntaxCardComponent key={i} card={card} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* Code Anatomy */}
      {codeAnatomy && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🔬</span>
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Code Anatomy · 代码解剖
            </h3>
          </div>
          <CodeAnatomyComponent anatomy={codeAnatomy} />
        </div>
      )}
    </motion.div>
  );
}
