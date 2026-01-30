"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import type { LessonSection, SyntaxCard, CodeAnatomy } from "@/data/lessons";
import { loadPyodideEngine, runPython, isPyodideLoaded, traceExecution } from "@/lib/pyodide-engine";
import type { VariableDetail, TraceStep } from "@/lib/pyodide-engine";
import MemoryModel from "./MemoryModel";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

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
            : "bg-[var(--theme-card-bg)] border-[var(--theme-border)] hover:border-cyan-500/50"
        }`}
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{card.emoji}</span>
          <div className="flex-1 min-w-0">
            <code className="text-green-300 text-lg font-bold bg-[var(--theme-input-bg)] px-2 py-0.5 rounded">
              {card.symbol}
            </code>
            <div className="mt-2 text-cyan-300 font-medium text-sm">
              {card.name}
            </div>
            <div className="text-[var(--theme-text-secondary)] text-xs mt-0.5">{card.nameZh}</div>

            {flipped && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-3 pt-3 border-t border-[var(--theme-border)]"
              >
                <p className="text-[var(--theme-text-secondary)] text-sm">{card.description}</p>
                {card.example && (
                  <pre className="mt-2 bg-[var(--theme-input-bg)] rounded-lg p-2 text-green-300 text-xs overflow-x-auto border border-[var(--theme-border)]">
                    <code>{card.example}</code>
                  </pre>
                )}
              </motion.div>
            )}

            {!flipped && (
              <div className="mt-2 text-[var(--theme-text-muted)] text-xs italic">
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
  const [output, setOutput] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [variableDetails, setVariableDetails] = useState<VariableDetail[]>([]);

  // Step mode state
  const [stepMode, setStepMode] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  // old steps removed — using traceSteps
  const [highlightRange, setHighlightRange] = useState<{ start: number; end: number } | null>(null);

  const runnableCode = anatomy.lines.map(l => l.code).join("\n");

  const ensurePyodide = useCallback(async () => {
    if (isPyodideLoaded()) return true;
    setIsLoading(true);
    try {
      await loadPyodideEngine((msg) => setLoadingMsg(msg));
      setIsLoading(false);
      return true;
    } catch {
      setOutput("❌ Python engine failed to load. Please refresh.\nPython 引擎加载失败，请刷新页面重试");
      setHasError(true);
      setIsRunning(false);
      setIsLoading(false);
      return false;
    }
  }, []);

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    setOutput("");
    setHasError(false);
    setStepMode(false);
    setHighlightRange(null);

    const ready = await ensurePyodide();
    if (!ready) { setIsRunning(false); return; }

    const result = await runPython(runnableCode);
    if (result.error) {
      setOutput(result.error);
      setHasError(true);
    } else if (result.hasTurtle) {
      setOutput(result.output || "🐢 Turtle graphics rendered above! · 海龟图形已在上方显示！");
    } else {
      setOutput(result.output || "(No output · 没有输出)");
    }
    setVariableDetails(result.variableDetails || []);
    setIsRunning(false);
  }, [runnableCode, ensurePyodide]);

  const [traceSteps, setTraceSteps] = useState<TraceStep[]>([]);

  const startStepMode = useCallback(async () => {
    const ready = await ensurePyodide();
    if (!ready) return;

    setIsRunning(true);
    setOutput("⏳ Tracing... · 正在追踪...");

    const result = await traceExecution(runnableCode);
    setIsRunning(false);

    if (result.error) {
      setOutput(result.error);
      setHasError(true);
      return;
    }
    if (result.steps.length === 0) {
      setOutput("(No executable lines · 没有可执行的行)");
      return;
    }

    setTraceSteps(result.steps);
    setStepIndex(0);
    setStepMode(true);
    setHasError(false);
    const first = result.steps[0];
    setOutput(first.output || "");
    setHighlightRange({ start: first.line, end: first.endLine ?? first.line });
    setVariableDetails(first.variableDetails);
  }, [runnableCode, ensurePyodide]);

  const nextStep = useCallback(() => {
    const nextIdx = stepIndex + 1;
    if (nextIdx >= traceSteps.length) {
      setStepMode(false);
      setHighlightRange(null);
      const last = traceSteps[traceSteps.length - 1];
      setOutput(last.output || "(No output · 没有输出)");
      setVariableDetails(last.variableDetails);
      return;
    }
    setStepIndex(nextIdx);
    const step = traceSteps[nextIdx];
    setHighlightRange({ start: step.line, end: step.endLine ?? step.line });
    setOutput(step.output || "");
    setVariableDetails(step.variableDetails);
  }, [stepIndex, traceSteps]);

  const stopStepMode = useCallback(() => {
    setStepMode(false);
    setHighlightRange(null);
  }, []);

  // Map anatomy line index to highlight
  const getLineHighlight = (lineIdx: number): boolean => {
    if (!stepMode || highlightRange === null) return false;
    return lineIdx >= highlightRange.start && lineIdx <= highlightRange.end;
  };

  return (
    <div className="rounded-xl overflow-hidden border border-cyan-500/30">
      <div className="bg-[var(--theme-card-bg)] px-4 py-2 border-b border-[var(--theme-border)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔬</span>
          <span className="text-cyan-400 font-medium text-sm">
            Code Anatomy · 代码解剖
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isLoading && <span className="text-xs text-cyan-400 animate-pulse">{loadingMsg}</span>}
          {!stepMode ? (
            <>
              <button
                onClick={startStepMode}
                disabled={isRunning || isLoading}
                className="flex items-center gap-1 px-2.5 py-1 bg-cyan-500 text-black text-xs font-bold rounded-lg hover:bg-cyan-400 disabled:opacity-50 transition-colors"
              >
                ⏭ Step · 分步
              </button>
              <button
                onClick={handleRun}
                disabled={isRunning || isLoading}
                className="flex items-center gap-1.5 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-lg hover:bg-green-400 disabled:opacity-50 transition-colors"
              >
                {isRunning ? "⏳ Running..." : "▶ Run · 运行"}
              </button>
            </>
          ) : (
            <>
              <span className="text-[10px] text-yellow-300 font-mono">
                Step {stepIndex + 1}/{traceSteps.length}
              </span>
              <button onClick={nextStep} className="px-2 py-1 bg-cyan-500 text-black text-[10px] font-bold rounded-lg hover:bg-cyan-400">
                ⏭ Next · 下一步
              </button>
              <button onClick={stopStepMode} className="px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-lg hover:bg-red-400">
                ⏹ Stop · 停止
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left: Code lines */}
        <div className="lg:w-3/5 bg-[var(--theme-card-bg)] p-4">
          <pre className="text-sm leading-relaxed">
            {anatomy.lines.map((line, i) => {
              const isStepHighlight = getLineHighlight(i);
              return (
                <div
                  key={i}
                  onMouseEnter={() => !stepMode && setActiveLine(i)}
                  onMouseLeave={() => !stepMode && setActiveLine(null)}
                  onClick={() => !stepMode && setActiveLine(activeLine === i ? null : i)}
                  className={`px-2 py-1 rounded cursor-pointer transition-all ${
                    isStepHighlight
                      ? "bg-yellow-500/20 border-l-4 border-yellow-400"
                      : activeLine === i
                      ? "bg-cyan-500/20 border-l-2 border-cyan-400"
                      : "hover:bg-[var(--theme-input-bg)] border-l-2 border-transparent"
                  }`}
                >
                  <code className="text-green-300">{line.code}</code>
                  {activeLine === i && !stepMode && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mt-1 ml-4 text-cyan-300 text-xs whitespace-normal break-words"
                    >
                      <span className="block">💡 {line.explanation}</span>
                      {line.explanationZh && (
                        <span className="block text-[var(--theme-text-secondary)] mt-0.5">· {line.explanationZh}</span>
                      )}
                    </motion.div>
                  )}
                  {isStepHighlight && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 ml-4 text-yellow-300 text-xs"
                    >
                      ▶ Running this line... · 正在执行这一行...
                    </motion.div>
                  )}
                </div>
              );
            })}
          </pre>

          {/* Mobile output — below code */}
          <div className="lg:hidden">
            <div id="turtle-output" data-turtle-mount="true" />
            {(output || isLoading) && (
              <div className="bg-[#0d1117] border-t border-[var(--theme-border)] p-3 mt-2 rounded-b-lg sticky bottom-0">
                <div className="text-xs text-[var(--theme-text-muted)] mb-1 terminal-text">OUTPUT</div>
                {isLoading && <span className="text-xs text-cyan-400 animate-pulse">{loadingMsg}</span>}
                <pre className={`text-xs terminal-text whitespace-pre-wrap ${hasError ? "text-red-400" : "text-green-400"}`}>
                  {output}
                </pre>
                <MemoryModel variables={variableDetails} />
              </div>
            )}
          </div>
        </div>

        {/* Right: Output — desktop only */}
        <div className="hidden lg:block lg:w-2/5 lg:sticky lg:top-0 lg:self-start lg:max-h-screen lg:overflow-y-auto bg-[#0d1117] border-l border-[var(--theme-border)] p-3">
          <div id="turtle-output" data-turtle-mount="true" />
          <div className="text-xs text-[var(--theme-text-muted)] mb-1 terminal-text">OUTPUT</div>
          {isLoading && <span className="text-xs text-cyan-400 animate-pulse">{loadingMsg}</span>}
          <pre className={`text-xs terminal-text whitespace-pre-wrap ${hasError ? "text-red-400" : "text-green-400"}`}>
            {output || <span className="text-[var(--theme-text-muted)]">Run code to see output · 运行代码查看输出</span>}
          </pre>
          <MemoryModel variables={variableDetails} />
        </div>
      </div>

      <div className="bg-[var(--theme-card-bg)] px-4 py-2 text-xs text-[var(--theme-text-muted)]">
        {stepMode
          ? "⏭ Click Next to execute the next line · 点击下一步执行下一行"
          : "👆 Hover or tap each line to see what it does · 悬停或点击每一行查看解释"}
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
      <div
        className="rounded-xl p-5 border"
        style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border)" }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📖</span>
          <div>
            <h2 className="text-xl font-bold text-green-400">{title}</h2>
            {titleZh && <p className="text-sm text-[var(--theme-text-secondary)]">{titleZh}</p>}
          </div>
        </div>
        <p className="text-[var(--theme-text-secondary)] text-sm mt-2">
          Learn these new tools before we code! · 先学会这些新工具，再开始写代码！
        </p>
      </div>

      {syntaxCards && syntaxCards.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🃏</span>
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              New Syntax Cards · 新语法卡片
            </h3>
          </div>
          <div className="relative rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card-bg)] p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1 scrollbar-visible">
              {syntaxCards.map((card, i) => (
                <SyntaxCardComponent key={i} card={card} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}

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
