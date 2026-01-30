"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { loadPyodideEngine, runPython, isPyodideLoaded, parseCodeIntoSteps } from "@/lib/pyodide-engine";
import type { VariableDetail } from "@/lib/pyodide-engine";
import { incrementCodeRun, addXP } from "@/lib/progress-store";
import { motion, AnimatePresence } from "framer-motion";
import MemoryModel from "./MemoryModel";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

interface CodeEditorProps {
  initialCode?: string;
  height?: string;
  readOnly?: boolean;
  onRunSuccess?: () => void;
}

export default function CodeEditor({
  initialCode = '# Write your Python code here!\nprint("Hello, World!")',
  height = "200px",
  readOnly = false,
  onRunSuccess,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [variableDetails, setVariableDetails] = useState<VariableDetail[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [inputValues] = useState<string[]>([]);
  const [hasTurtle, setHasTurtle] = useState(false);

  // Step mode state
  const [stepMode, setStepMode] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [steps, setSteps] = useState<{ startLine: number; endLine: number; code: string }[]>([]);
  const [highlightLines, setHighlightLines] = useState<{ start: number; end: number } | null>(null);
  const editorRef = useRef<unknown>(null);
  const decorationsRef = useRef<string[]>([]);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const ensurePyodide = useCallback(async () => {
    if (isPyodideLoaded()) return true;
    setIsLoading(true);
    try {
      await loadPyodideEngine((msg) => setLoadingMsg(msg));
      setIsLoading(false);
      return true;
    } catch {
      setIsLoading(false);
      setOutput("❌ Python engine failed to load. Please refresh.\nPython 引擎加载失败，请刷新页面重试");
      return false;
    }
  }, []);

  // Apply line decorations in Monaco
  useEffect(() => {
    const editor = editorRef.current as { deltaDecorations?: (old: string[], newDec: unknown[]) => string[] } | null;
    if (!editor || !editor.deltaDecorations) return;

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

  const executeCode = useCallback(async (inputs?: string[]) => {
    setIsRunning(true);
    setOutput("");
    setHasError(false);
    setShowSuccess(false);
    setHasTurtle(false);

    const ready = await ensurePyodide();
    if (!ready) { setIsRunning(false); return; }

    const result = await runPython(code, inputs);

    if (result.error) {
      setOutput(result.error);
      setHasError(true);
    } else {
      setOutput(result.output || "(No output · 没有输出)");
      setHasError(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      onRunSuccess?.();
    }
    setVariables(result.variables);
    setVariableDetails(result.variableDetails || []);
    setHasTurtle(result.hasTurtle || false);
    setIsRunning(false);
    incrementCodeRun();
    addXP(5);
  }, [code, ensurePyodide, onRunSuccess]);

  const runCode = useCallback(async () => {
    setStepMode(false);
    setHighlightLines(null);
    await executeCode(inputValues.length > 0 ? inputValues : undefined);
  }, [executeCode, inputValues]);

  // Cached inputs for step mode replay
  const [stepInputCache, setStepInputCache] = useState<string[]>([]);

  // Step mode: start
  const startStepMode = useCallback(async () => {
    const ready = await ensurePyodide();
    if (!ready) return;

    const parsed = parseCodeIntoSteps(code);
    if (parsed.length === 0) return;

    setSteps(parsed);
    setStepIndex(0);
    setStepMode(true);
    setOutput("");
    setHasError(false);
    setVariables({});
    setVariableDetails([]);
    setStepInputCache([]);
    setHighlightLines({ start: parsed[0].startLine, end: parsed[0].endLine });

    // Execute first step (no cached inputs yet)
    const result = await runPython(parsed[0].code);
    if (result.error) {
      setOutput(result.error);
      setHasError(true);
    } else {
      setOutput(result.output || "");
    }
    setVariables(result.variables);
    setVariableDetails(result.variableDetails || []);
    // Cache any inputs collected
    if (result.collectedInputs && result.collectedInputs.length > 0) {
      setStepInputCache(result.collectedInputs);
    }
  }, [code, ensurePyodide]);

  // Step mode: next
  const nextStep = useCallback(async () => {
    const nextIdx = stepIndex + 1;
    if (nextIdx >= steps.length) {
      setStepMode(false);
      setHighlightLines(null);
      return;
    }

    setStepIndex(nextIdx);
    setHighlightLines({ start: steps[nextIdx].startLine, end: steps[nextIdx].endLine });

    // Replay cached inputs so user doesn't have to re-enter them
    const result = await runPython(steps[nextIdx].code, stepInputCache.length > 0 ? stepInputCache : undefined);
    if (result.error) {
      setOutput(result.error);
      setHasError(true);
    } else {
      setOutput(result.output || "");
      setHasError(false);
    }
    setVariables(result.variables);
    setVariableDetails(result.variableDetails || []);
    // Update cache with any new inputs
    if (result.collectedInputs && result.collectedInputs.length > stepInputCache.length) {
      setStepInputCache(result.collectedInputs);
    }
  }, [stepIndex, steps, stepInputCache]);

  // Step mode: run all remaining
  const runAllRemaining = useCallback(async () => {
    setStepMode(false);
    setHighlightLines(null);
    await executeCode();
  }, [executeCode]);

  // Step mode: stop
  const stopStepMode = useCallback(() => {
    setStepMode(false);
    setHighlightLines(null);
  }, []);

  const totalLines = code.split("\n").length;

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--theme-border)]">
      {/* Inject step highlight CSS */}
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

      {/* Editor header */}
      <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2 border-b border-[var(--theme-border)]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-[var(--theme-text-secondary)] ml-2 terminal-text">main.py</span>
        </div>
        <div className="flex items-center gap-2">
          {isLoading && (
            <span className="text-xs text-cyan-400 animate-pulse">{loadingMsg}</span>
          )}
          {!stepMode ? (
            <>
              <button
                onClick={startStepMode}
                disabled={isRunning || isLoading}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500 text-black text-sm font-bold rounded-lg hover:bg-cyan-400 disabled:opacity-50 transition-colors"
              >
                ⏭ Step · 分步
              </button>
              <button
                onClick={runCode}
                disabled={isRunning || isLoading}
                className="flex items-center gap-2 px-4 py-1.5 bg-green-500 text-black text-sm font-bold rounded-lg hover:bg-green-400 disabled:opacity-50 transition-colors"
              >
                {isRunning ? "⏳ Running... 运行中" : isLoading ? "⏳ Loading... 加载中" : "▶ Run · 运行"}
              </button>
            </>
          ) : (
            <>
              <span className="text-xs text-yellow-300 font-mono">
                Line {highlightLines ? highlightLines.start + 1 : "?"} of {totalLines} · 第{highlightLines ? highlightLines.start + 1 : "?"}行/共{totalLines}行
              </span>
              <button
                onClick={nextStep}
                className="flex items-center gap-1 px-3 py-1.5 bg-cyan-500 text-black text-xs font-bold rounded-lg hover:bg-cyan-400 transition-colors"
              >
                ⏭ Next · 下一步
              </button>
              <button
                onClick={runAllRemaining}
                className="flex items-center gap-1 px-3 py-1.5 bg-green-500 text-black text-xs font-bold rounded-lg hover:bg-green-400 transition-colors"
              >
                ▶ Run All · 全部运行
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

      {/* Monaco Editor */}
      <MonacoEditor
        height={height}
        language="python"
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

      {/* Output panel */}
      <div className="bg-[#0d1117] border-t border-[var(--theme-border)] p-4">
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
          {stepMode && stepIndex >= steps.length - 1 && !hasError && (
            <span className="text-xs text-green-400 font-bold">✅ Complete! · 执行完毕！</span>
          )}
        </div>
        {/* Turtle canvas mount point */}
        <div id="turtle-output" data-turtle-mount="true" />

        <pre className={`text-sm terminal-text whitespace-pre-wrap min-h-[2rem] ${hasError ? "text-red-400" : "text-green-400"}`}>
          {output || <span className="text-[var(--theme-text-muted)]">Click &quot;Run&quot; to execute code... 点击 &quot;Run&quot; 运行代码</span>}
        </pre>

        {/* Memory Model */}
        <MemoryModel variables={variableDetails} />

        {/* Legacy variables panel (hidden if MemoryModel shows) */}
        {variableDetails.length === 0 && Object.keys(variables).length > 0 && (
          <div className="mt-3 pt-3 border-t border-[var(--theme-border)]">
            <div className="text-xs text-[var(--theme-text-muted)] terminal-text mb-2">VARIABLES · 变量</div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(variables).map(([name, value]) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs terminal-text"
                >
                  <span className="text-purple-400">{name}</span>
                  <span className="text-[var(--theme-text-muted)]"> = </span>
                  <span className="text-cyan-400">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
