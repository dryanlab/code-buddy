"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { executeCpp } from "@/lib/cpp-engine";
import type { CppExecutionResult } from "@/lib/cpp-engine";
import { incrementCodeRun, addXP } from "@/lib/progress-store";
import { motion, AnimatePresence } from "framer-motion";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

interface CppCodeEditorProps {
  initialCode?: string;
  height?: string;
  readOnly?: boolean;
  onRunSuccess?: () => void;
}

const DEFAULT_CPP = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`;

export default function CppCodeEditor({
  initialCode = DEFAULT_CPP,
  height: heightProp,
  readOnly = false,
  onRunSuccess,
}: CppCodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const lineCount = code.split("\n").length;
  const height = heightProp || `${Math.min(Math.max(lineCount * 20 + 20, 150), 600)}px`;

  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [compileError, setCompileError] = useState<string | null>(null);
  const [execTime, setExecTime] = useState<string | undefined>();
  const [execMemory, setExecMemory] = useState<number | undefined>();
  const [showStdin, setShowStdin] = useState(false);
  const [stdinValue, setStdinValue] = useState("");

  // Step mode for C++: line-by-line explanation (not real stepping)
  const [stepMode, setStepMode] = useState(false);
  const [stepLine, setStepLine] = useState(0);
  const [highlightLines, setHighlightLines] = useState<{ start: number; end: number } | null>(null);
  const editorRef = useRef<unknown>(null);
  const decorationsRef = useRef<string[]>([]);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  // Apply line decorations
  useEffect(() => {
    const editor = editorRef.current as { deltaDecorations?: (old: string[], newDec: unknown[]) => string[] } | null;
    if (!editor?.deltaDecorations) return;
    if (highlightLines) {
      const newDec = [{
        range: {
          startLineNumber: highlightLines.start + 1,
          startColumn: 1,
          endLineNumber: highlightLines.end + 1,
          endColumn: 1000,
        },
        options: {
          isWholeLine: true,
          className: "step-highlight-line",
          linesDecorationsClassName: "step-highlight-gutter",
        },
      }];
      decorationsRef.current = editor.deltaDecorations(decorationsRef.current, newDec);
    } else {
      decorationsRef.current = editor.deltaDecorations(decorationsRef.current, []);
    }
  }, [highlightLines]);

  const handleResult = useCallback((result: CppExecutionResult) => {
    setExecTime(result.time);
    setExecMemory(result.memory);
    setCompileError(result.compileError || null);

    if (result.status === 'compile_error') {
      setOutput(result.compileError || result.error || 'Compilation failed');
      setHasError(true);
    } else if (result.error) {
      setOutput(result.error);
      setHasError(true);
    } else {
      setOutput(result.output || "(No output · 没有输出)");
      setHasError(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      onRunSuccess?.();
    }
  }, [onRunSuccess]);

  const runCode = useCallback(async () => {
    setIsRunning(true);
    setOutput("");
    setHasError(false);
    setShowSuccess(false);
    setCompileError(null);
    setStepMode(false);
    setHighlightLines(null);

    const result = await executeCpp(code, stdinValue || undefined);
    handleResult(result);
    setIsRunning(false);
    incrementCodeRun();
    addXP(5);
  }, [code, stdinValue, handleResult]);

  // Step mode: walk through code lines
  const codeLines = code.split("\n");
  const totalLines = codeLines.length;

  const startStepMode = useCallback(() => {
    setStepMode(true);
    setStepLine(0);
    setHighlightLines({ start: 0, end: 0 });
    setOutput(`📍 Line 1: ${codeLines[0]}\n第1行`);
  }, [codeLines]);

  const nextStepLine = useCallback(() => {
    const next = stepLine + 1;
    if (next >= totalLines) {
      setStepMode(false);
      setHighlightLines(null);
      setOutput("✅ Walkthrough complete! Now try \"Compile & Run\".\n代码浏览完毕！试试「编译运行」。");
      return;
    }
    setStepLine(next);
    setHighlightLines({ start: next, end: next });
    setOutput(`📍 Line ${next + 1}: ${codeLines[next]}\n第${next + 1}行`);
  }, [stepLine, totalLines, codeLines]);

  const stopStepMode = useCallback(() => {
    setStepMode(false);
    setHighlightLines(null);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
      {/* Left: Editor */}
      <div className="lg:w-3/5 rounded-xl overflow-hidden border border-[var(--theme-border)]">
        <style>{`
          .step-highlight-line {
            background: rgba(250, 204, 21, 0.15) !important;
            border-left: 4px solid #facc15 !important;
          }
          .step-highlight-gutter {
            background: #facc15;
            width: 4px !important;
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2 border-b border-[var(--theme-border)]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-[var(--theme-text-secondary)] ml-2 terminal-text">main.cpp</span>
            <span className="text-[10px] text-cyan-500 ml-1 font-mono">C++</span>
          </div>
          <div className="flex items-center gap-2">
            {!stepMode ? (
              <>
                <button
                  onClick={() => setShowStdin(!showStdin)}
                  className="px-2 py-1 text-xs text-[var(--theme-text-muted)] hover:text-white border border-[var(--theme-border)] rounded transition-colors"
                >
                  {showStdin ? "▾ stdin" : "▸ stdin"}
                </button>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center gap-2 px-4 py-1.5 bg-green-500 text-black text-sm font-bold rounded-lg hover:bg-green-400 disabled:opacity-50 transition-colors"
                >
                  {isRunning ? "⏳ Compiling... 编译中" : "▶ Compile & Run · 编译运行"}
                </button>
              </>
            ) : (
              <>
                <span className="text-xs text-yellow-300 font-mono">
                  Line {stepLine + 1}/{totalLines} · 第{stepLine + 1}行/共{totalLines}行
                </span>
                <button
                  onClick={nextStepLine}
                  className="flex items-center gap-1 px-3 py-1.5 bg-cyan-500 text-black text-xs font-bold rounded-lg hover:bg-cyan-400 transition-colors"
                >
                  ⏭ Next · 下一步
                </button>
                <button
                  onClick={stopStepMode}
                  className="flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-400 transition-colors"
                >
                  ⏹ Stop · 停止
                </button>
              </>
            )}
          </div>
        </div>

        {/* Stdin input */}
        <AnimatePresence>
          {showStdin && !stepMode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-[#161b22] border-b border-[var(--theme-border)] overflow-hidden"
            >
              <div className="p-3">
                <label className="text-xs text-[var(--theme-text-muted)] terminal-text block mb-1">
                  STDIN INPUT · 标准输入
                </label>
                <textarea
                  value={stdinValue}
                  onChange={(e) => setStdinValue(e.target.value)}
                  placeholder="Enter input here... 在此输入..."
                  className="w-full bg-[#0d1117] text-sm text-green-400 terminal-text border border-[var(--theme-border)] rounded p-2 resize-y min-h-[40px] max-h-[100px] focus:outline-none focus:border-cyan-500"
                  rows={2}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Monaco Editor */}
        <MonacoEditor
          height={height}
          language="cpp"
          theme="vs-dark"
          value={code}
          onChange={(v) => setCode(v || "")}
          onMount={(editor) => { editorRef.current = editor; }}
          options={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: "on",
            renderLineHighlight: "line",
            readOnly: readOnly || stepMode,
            padding: { top: 12 },
            automaticLayout: true,
          }}
        />

        {/* Output panel — mobile only */}
        <div className="lg:hidden bg-[#0d1117] border-t border-[var(--theme-border)] p-4 sticky bottom-0">
          <OutputPanel
            output={output}
            hasError={hasError}
            compileError={compileError}
            showSuccess={showSuccess}
            isRunning={isRunning}
            execTime={execTime}
            execMemory={execMemory}
          />
        </div>
      </div>

      {/* Right: Output — desktop */}
      <div className="hidden lg:block lg:w-2/5 lg:sticky lg:top-0 lg:self-start lg:max-h-screen lg:overflow-y-auto">
        <div className="bg-[#0d1117] rounded-xl border border-[var(--theme-border)] p-4">
          <OutputPanel
            output={output}
            hasError={hasError}
            compileError={compileError}
            showSuccess={showSuccess}
            isRunning={isRunning}
            execTime={execTime}
            execMemory={execMemory}
          />
        </div>
      </div>
    </div>
  );
}

function OutputPanel({
  output,
  hasError,
  compileError,
  showSuccess,
  isRunning,
  execTime,
  execMemory,
}: {
  output: string;
  hasError: boolean;
  compileError: string | null;
  showSuccess: boolean;
  isRunning: boolean;
  execTime?: string;
  execMemory?: number;
}) {
  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-[var(--theme-text-muted)] terminal-text">OUTPUT</span>
        {isRunning && (
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        )}
        <AnimatePresence>
          {showSuccess && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-green-400 font-bold"
            >
              ✅ Success! · 运行成功！
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Compile error panel */}
      {compileError && (
        <div className="mb-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
          <div className="text-xs text-red-400 font-bold mb-1 terminal-text">
            COMPILE ERROR · 编译错误
          </div>
          <pre className="text-xs text-red-300 terminal-text whitespace-pre-wrap">
            {compileError}
          </pre>
        </div>
      )}

      <pre className={`text-sm terminal-text whitespace-pre-wrap min-h-[2rem] ${hasError ? "text-red-400" : "text-green-400"}`}>
        {output || (
          <span className="text-[var(--theme-text-muted)]">
            Click &quot;Compile &amp; Run&quot; to execute code... 点击「编译运行」执行代码
          </span>
        )}
      </pre>

      {/* Execution stats */}
      {(execTime || execMemory) && (
        <div className="mt-3 pt-3 border-t border-[var(--theme-border)] flex gap-4">
          {execTime && (
            <div className="text-xs text-[var(--theme-text-muted)] terminal-text">
              ⏱ {execTime}s
            </div>
          )}
          {execMemory && (
            <div className="text-xs text-[var(--theme-text-muted)] terminal-text">
              💾 {(execMemory / 1024).toFixed(1)} MB
            </div>
          )}
        </div>
      )}
    </>
  );
}
