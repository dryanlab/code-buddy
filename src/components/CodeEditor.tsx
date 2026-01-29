"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { loadPyodideEngine, runPython, isPyodideLoaded } from "@/lib/pyodide-engine";
import { incrementCodeRun, addXP } from "@/lib/progress-store";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showSuccess, setShowSuccess] = useState(false);
  const [needsInput, setNeedsInput] = useState(false);
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  // Update code when initialCode changes
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

  const runCode = useCallback(async () => {
    setIsRunning(true);
    setOutput("");
    setShowSuccess(false);

    const ready = await ensurePyodide();
    if (!ready) { setIsRunning(false); return; }

    // Check if code has input() calls - provide mock values
    const hasInput = /\binput\s*\(/.test(code);
    const inputs = hasInput ? inputValues : undefined;

    const result = await runPython(code, inputs);
    
    if (result.error) {
      setOutput(result.error);
    } else {
      setOutput(result.output || "(No output · 没有输出)");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      onRunSuccess?.();
    }
    setVariables(result.variables);
    setIsRunning(false);
    incrementCodeRun();
    addXP(5);
  }, [code, ensurePyodide, inputValues, onRunSuccess]);

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/50">
      {/* Editor header */}
      <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2 border-b border-slate-700/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-slate-400 ml-2 terminal-text">main.py</span>
        </div>
        <div className="flex items-center gap-2">
          {isLoading && (
            <span className="text-xs text-cyan-400 animate-pulse">{loadingMsg}</span>
          )}
          <button
            onClick={runCode}
            disabled={isRunning || isLoading}
            className="flex items-center gap-2 px-4 py-1.5 bg-green-500 text-black text-sm font-bold rounded-lg hover:bg-green-400 disabled:opacity-50 transition-colors"
          >
            {isRunning ? "⏳ Running... 运行中" : isLoading ? "⏳ Loading... 加载中" : "▶ Run · 运行"}
          </button>
        </div>
      </div>

      {/* Monaco Editor */}
      <MonacoEditor
        height={height}
        language="python"
        theme="vs-dark"
        value={code}
        onChange={(v) => setCode(v || "")}
        options={{
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          lineNumbers: "on",
          renderLineHighlight: "line",
          readOnly,
          padding: { top: 12 },
          automaticLayout: true,
        }}
      />

      {/* Output panel */}
      <div className="bg-[#0d1117] border-t border-slate-700/50 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-slate-500 terminal-text">OUTPUT</span>
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
        <pre className="text-sm text-green-400 terminal-text whitespace-pre-wrap min-h-[2rem]">
          {output || <span className="text-slate-600">Click &quot;Run&quot; to execute code... 点击 &quot;Run&quot; 运行代码</span>}
        </pre>

        {/* Variables panel */}
        {Object.keys(variables).length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-700/30">
            <div className="text-xs text-slate-500 terminal-text mb-2">VARIABLES · 变量</div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(variables).map(([name, value]) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs terminal-text"
                >
                  <span className="text-purple-400">{name}</span>
                  <span className="text-slate-500"> = </span>
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
