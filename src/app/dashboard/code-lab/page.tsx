"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { loadPyodideEngine, runPython, isPyodideLoaded, traceExecution } from "@/lib/pyodide-engine";
import type { VariableDetail, TraceStep } from "@/lib/pyodide-engine";
import { incrementCodeRun, addXP } from "@/lib/progress-store";
import { CODE_EXERCISES, type CodeExercise } from "@/data/code-challenges";
import { useUserProfile } from "@/lib/useUserProfile";
import { isPreviewMode, PREVIEW_MAX_EXERCISES } from "@/lib/preview-mode";
import SignUpModal from "@/components/SignUpModal";
import MemoryModel from "@/components/MemoryModel";
import {
  loadProjects,
  saveProject,
  deleteProject as deleteProjectFromStore,
  createProject,
  duplicateProject,
  type Project,
} from "@/lib/project-store";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

// ─── Templates ──────────────────────────────────────────────

const TEMPLATES = [
  { name: "Empty", icon: "📄", code: "# Start coding!\n" },
  {
    name: "Hello World",
    icon: "👋",
    code: `print('Hello, World!')
name = input('What is your name? ')
print(f'Nice to meet you, {name}!')`,
  },
  {
    name: "Calculator",
    icon: "🔢",
    code: `# Simple Calculator · 简单计算器
num1 = float(input('First number: '))
op = input('Operator (+, -, *, /): ')
num2 = float(input('Second number: '))

if op == '+':
    print(f'{num1} + {num2} = {num1 + num2}')
elif op == '-':
    print(f'{num1} - {num2} = {num1 - num2}')
elif op == '*':
    print(f'{num1} * {num2} = {num1 * num2}')
elif op == '/':
    print(f'{num1} / {num2} = {num1 / num2}')
else:
    print('Unknown operator!')`,
  },
  {
    name: "Turtle Art",
    icon: "🐢",
    code: `import turtle
t = turtle.Turtle()
colors = ['red', 'blue', 'green', 'orange', 'purple']

for i in range(36):
    t.color(colors[i % len(colors)])
    t.forward(i * 5)
    t.right(144)

turtle.done()`,
  },
  {
    name: "Game Starter",
    icon: "🎮",
    code: `# Text Adventure Game · 文字冒险游戏
import random

health = 100
gold = 0

print("⚔️ Welcome to the Dungeon!")
print(f"Health: {health} | Gold: {gold}")

choice = input("Go left or right? ")
if choice.lower() == "left":
    treasure = random.randint(10, 50)
    gold += treasure
    print(f"You found {treasure} gold! 💰")
else:
    damage = random.randint(5, 20)
    health -= damage
    print(f"A monster attacks! You lose {damage} HP 👹")

print(f"\\nFinal — Health: {health} | Gold: {gold}")`,
  },
  {
    name: "Data Analysis",
    icon: "📊",
    code: `# Data Analysis · 数据分析
data = [23, 45, 12, 67, 34, 89, 56, 78, 11, 90]

total = sum(data)
average = total / len(data)
maximum = max(data)
minimum = min(data)

print(f"📊 Data: {data}")
print(f"Sum: {total}")
print(f"Average: {average:.1f}")
print(f"Max: {maximum}, Min: {minimum}")
print(f"Range: {maximum - minimum}")

# Sort
sorted_data = sorted(data)
print(f"Sorted: {sorted_data}")`,
  },
];

// ─── Sidebar Components ────────────────────────────────────

function ExerciseCard({
  exercise,
  isSelected,
  onClick,
  isRecommended,
  locked,
}: {
  exercise: CodeExercise;
  isSelected: boolean;
  onClick: () => void;
  isRecommended: boolean;
  locked?: boolean;
}) {
  const diffBadge = exercise.difficulty === 1 ? "🟢" : exercise.difficulty === 2 ? "🟡" : "🔴";
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="w-full text-left p-3 rounded-xl border transition-colors relative"
      style={{
        backgroundColor: isSelected
          ? "color-mix(in srgb, var(--color-primary) 10%, var(--theme-card-bg))"
          : "var(--theme-card-bg)",
        borderColor: isSelected
          ? "color-mix(in srgb, var(--color-primary) 30%, transparent)"
          : "var(--theme-border)",
        opacity: locked ? 0.4 : isRecommended ? 1 : 0.7,
      }}
    >
      {locked && (
        <div
          className="absolute -top-1.5 -right-1.5 text-[9px] px-1.5 py-0.5 rounded-full"
          style={{ backgroundColor: "var(--theme-border)", color: "var(--theme-text-muted)" }}
        >
          🔒 Sign up
        </div>
      )}
      {!locked && !isRecommended && (
        <div
          className="absolute -top-1.5 -right-1.5 text-[9px] px-1.5 py-0.5 rounded-full"
          style={{ backgroundColor: "var(--theme-border)", color: "var(--theme-text-muted)" }}
        >
          🔮 Challenge
        </div>
      )}
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-xs">
          {diffBadge} {exercise.title}
        </span>
      </div>
      {exercise.fromLesson && (
        <span className="inline-block text-[9px] px-1.5 py-0.5 rounded-full mb-1" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)", color: "var(--color-primary)" }}>
          📚 From Lesson {exercise.fromLesson}
        </span>
      )}
      <p className="text-[10px] line-clamp-1" style={{ color: "var(--theme-text-secondary)" }}>
        {exercise.description}
      </p>
    </motion.button>
  );
}

function ProjectCard({
  project,
  isSelected,
  onClick,
  onRename,
  onDelete,
  onDuplicate,
}: {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
  onRename: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="w-full text-left p-3 rounded-xl border transition-colors cursor-pointer relative group"
      style={{
        backgroundColor: isSelected
          ? "color-mix(in srgb, var(--color-secondary) 10%, var(--theme-card-bg))"
          : "var(--theme-card-bg)",
        borderColor: isSelected
          ? "color-mix(in srgb, var(--color-secondary) 30%, transparent)"
          : "var(--theme-border)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="font-bold text-xs truncate">📄 {project.name}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
          className="opacity-0 group-hover:opacity-100 text-xs px-1 rounded hover:bg-white/10 transition-opacity"
        >
          ⋯
        </button>
      </div>
      <p className="text-[10px] mt-1" style={{ color: "var(--theme-text-muted)" }}>
        {new Date(project.updatedAt).toLocaleDateString()}
      </p>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute right-2 top-8 z-50 rounded-lg border shadow-xl py-1 min-w-[120px]"
            style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => { onRename(); setShowMenu(false); }} className="w-full text-left px-3 py-1.5 text-xs hover:bg-white/5">
              ✏️ Rename · 重命名
            </button>
            <button onClick={() => { onDuplicate(); setShowMenu(false); }} className="w-full text-left px-3 py-1.5 text-xs hover:bg-white/5">
              📋 Duplicate · 复制
            </button>
            <button onClick={() => { onDelete(); setShowMenu(false); }} className="w-full text-left px-3 py-1.5 text-xs hover:bg-white/5 text-red-400">
              🗑 Delete · 删除
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── New Project Dialog ─────────────────────────────────────

function NewProjectDialog({ onClose, onCreate }: { onClose: () => void; onCreate: (name: string, code: string) => void }) {
  const [name, setName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="rounded-2xl border p-6 max-w-md w-full"
        style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold mb-4">✨ New Project · 新建项目</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project name · 项目名称"
          className="w-full px-3 py-2 rounded-lg border text-sm mb-4"
          style={{
            backgroundColor: "var(--theme-bg)",
            borderColor: "var(--theme-border)",
            color: "var(--theme-text-primary)",
          }}
          autoFocus
        />
        <div className="text-xs mb-2" style={{ color: "var(--theme-text-muted)" }}>
          Choose a template · 选择模板
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {TEMPLATES.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setSelectedTemplate(i)}
              className="p-2 rounded-lg border text-center transition-colors"
              style={{
                backgroundColor: selectedTemplate === i
                  ? "color-mix(in srgb, var(--color-primary) 15%, var(--theme-bg))"
                  : "var(--theme-bg)",
                borderColor: selectedTemplate === i
                  ? "var(--color-primary)"
                  : "var(--theme-border)",
              }}
            >
              <div className="text-xl">{t.icon}</div>
              <div className="text-[10px] mt-1">{t.name}</div>
            </button>
          ))}
        </div>
        <div className="flex gap-2 justify-end">
          <button onClick={onClose} className="px-4 py-2 text-sm rounded-lg" style={{ color: "var(--theme-text-secondary)" }}>
            Cancel · 取消
          </button>
          <button
            onClick={() => {
              const finalName = name.trim() || TEMPLATES[selectedTemplate].name;
              onCreate(finalName, TEMPLATES[selectedTemplate].code);
            }}
            className="px-4 py-2 text-sm rounded-lg font-bold text-white"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Create · 创建
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ──────────────────────────────────────────────

export default function CodeLabPage() {
  // Preview mode
  const [preview, setPreview] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setPreview(isPreviewMode());
  }, []);

  // Handle ?project=proj-1-6 query param
  const projectParamHandled = useRef(false);
  useEffect(() => {
    if (projectParamHandled.current) return;
    const projectId = searchParams.get("project");
    if (projectId) {
      const ex = CODE_EXERCISES.find((e) => e.id === projectId);
      if (ex) {
        projectParamHandled.current = true;
        // Switch to exercises tab and open the exercise
        setSidebarTab("exercises");
        setFilterTag("projects");
        setTimeout(() => openExercise(ex), 100);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Sidebar
  const [sidebarTab, setSidebarTab] = useState<"projects" | "exercises">("projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [showNewProject, setShowNewProject] = useState(false);

  // Active state
  const [openTabs, setOpenTabs] = useState<{ type: "project" | "exercise" | "free"; id: string; name: string }[]>([
    { type: "free", id: "__free__", name: "Free Code" },
  ]);
  const [activeTabId, setActiveTabId] = useState("__free__");

  // Exercise state
  const [selectedExercise, setSelectedExercise] = useState<CodeExercise | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  // Editor
  const [code, setCode] = useState('# Write your Python code here!\nprint("Hello, World!")');
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [variableDetails, setVariableDetails] = useState<VariableDetail[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [outputCollapsed, setOutputCollapsed] = useState(false);

  // Step/Debug
  const [stepMode, setStepMode] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [traceSteps, setTraceSteps] = useState<TraceStep[]>([]);
  const [highlightLines, setHighlightLines] = useState<{ start: number; end: number } | null>(null);
  const [breakpoints, setBreakpoints] = useState<Set<number>>(new Set());

  // Refs
  const editorRef = useRef<unknown>(null);
  const decorationsRef = useRef<string[]>([]);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // User
  const { profile } = useUserProfile();
  const skillLevel = profile?.skillLevel || "beginner";
  const SKILL_ORDER = ["beginner", "intermediate", "advanced"];
  const userSkillIdx = SKILL_ORDER.indexOf(skillLevel);

  const [filterTag, setFilterTag] = useState<string>("all");

  const sortedExercises = useMemo(() => {
    let exercises = CODE_EXERCISES;
    if (filterTag === "projects") {
      exercises = exercises.filter((ex) => ex.tags.includes("project"));
    } else if (filterTag !== "all") {
      exercises = exercises.filter((ex) => ex.tags.includes(filterTag));
    }
    // Projects first, then by skill level
    const projects = exercises.filter((ex) => ex.tags.includes("project"));
    const nonProjects = exercises.filter((ex) => !ex.tags.includes("project"));
    const recommended = nonProjects.filter((ex) => SKILL_ORDER.indexOf(ex.skillLevel) <= userSkillIdx);
    const advanced = nonProjects.filter((ex) => SKILL_ORDER.indexOf(ex.skillLevel) > userSkillIdx);
    return [...projects, ...recommended, ...advanced];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSkillIdx, filterTag]);

  // ─── Load projects ────────────────────────────────────────
  useEffect(() => {
    loadProjects().then(setProjects);
  }, []);

  // ─── Auto-save (debounce 2s) ──────────────────────────────
  const activeTab = openTabs.find((t) => t.id === activeTabId);
  const currentProject = activeTab?.type === "project" ? projects.find((p) => p.id === activeTab.id) : null;

  useEffect(() => {
    if (!currentProject) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      const updated = { ...currentProject, code, updatedAt: new Date().toISOString() };
      saveProject(updated).then(() => {
        setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
      });
    }, 2000);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, currentProject?.id]);

  // ─── Decorations (highlight + breakpoints) ────────────────
  useEffect(() => {
    const editor = editorRef.current as { deltaDecorations?: (old: string[], newDec: unknown[]) => string[] } | null;
    if (!editor?.deltaDecorations) return;

    const decs: unknown[] = [];

    if (highlightLines) {
      decs.push({
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
      });
    }

    breakpoints.forEach((line) => {
      decs.push({
        range: { startLineNumber: line, startColumn: 1, endLineNumber: line, endColumn: 1 },
        options: {
          isWholeLine: true,
          className: "breakpoint-line",
          glyphMarginClassName: "breakpoint-glyph",
        },
      });
    });

    decorationsRef.current = editor.deltaDecorations(decorationsRef.current, decs);
  }, [highlightLines, breakpoints]);

  // ─── Pyodide ──────────────────────────────────────────────

  const ensurePyodide = useCallback(async () => {
    if (isPyodideLoaded()) return true;
    setIsLoading(true);
    try {
      await loadPyodideEngine((msg) => setLoadingMsg(msg));
      setIsLoading(false);
      return true;
    } catch {
      setIsLoading(false);
      setOutput("❌ Python engine failed to load.\nPython 引擎加载失败");
      return false;
    }
  }, []);

  const executeCode = useCallback(
    async (inputs?: string[]) => {
      setIsRunning(true);
      setOutput("");
      setHasError(false);
      setShowSuccess(false);

      const ready = await ensurePyodide();
      if (!ready) {
        setIsRunning(false);
        return;
      }

      const result = await runPython(code, inputs);
      if (result.error) {
        setOutput(result.error);
        setHasError(true);
      } else {
        setOutput(result.output || "(No output · 没有输出)");
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      }
      setVariables(result.variables);
      setVariableDetails(result.variableDetails || []);
      setIsRunning(false);
      incrementCodeRun();
      addXP(5);
    },
    [code, ensurePyodide]
  );

  const runCode = useCallback(async () => {
    setStepMode(false);
    setHighlightLines(null);
    await executeCode();
  }, [executeCode]);

  const startStepMode = useCallback(async () => {
    const ready = await ensurePyodide();
    if (!ready) return;
    setIsRunning(true);
    setOutput("⏳ Tracing... · 正在追踪...");
    const result = await traceExecution(code);
    if (result.error) {
      setOutput(result.error);
      setHasError(true);
      setIsRunning(false);
      return;
    }
    if (result.steps.length === 0) {
      setOutput("(No executable lines · 没有可执行的行)");
      setIsRunning(false);
      return;
    }
    setTraceSteps(result.steps);
    setStepIndex(0);
    setStepMode(true);
    setIsRunning(false);
    setHasError(false);
    const first = result.steps[0];
    setHighlightLines({ start: first.line, end: first.endLine ?? first.line });
    setOutput(first.output || "");
    setVariables(first.variables);
    setVariableDetails(first.variableDetails);
  }, [code, ensurePyodide]);

  const nextStep = useCallback(() => {
    const nextIdx = stepIndex + 1;
    if (nextIdx >= traceSteps.length) {
      setStepMode(false);
      setHighlightLines(null);
      const last = traceSteps[traceSteps.length - 1];
      setOutput(last.output || "(No output · 没有输出)");
      setVariables(last.variables);
      setVariableDetails(last.variableDetails);
      return;
    }
    setStepIndex(nextIdx);
    const step = traceSteps[nextIdx];
    setHighlightLines({ start: step.line, end: step.endLine ?? step.line });
    setOutput(step.output || "");
    setVariables(step.variables);
    setVariableDetails(step.variableDetails);
  }, [stepIndex, traceSteps]);

  const continueToBreakpoint = useCallback(() => {
    if (breakpoints.size === 0) {
      // no breakpoints, run all
      setStepMode(false);
      setHighlightLines(null);
      const last = traceSteps[traceSteps.length - 1];
      setOutput(last.output || "");
      setVariables(last.variables);
      setVariableDetails(last.variableDetails);
      return;
    }
    for (let i = stepIndex + 1; i < traceSteps.length; i++) {
      if (breakpoints.has(traceSteps[i].line + 1)) {
        setStepIndex(i);
        const step = traceSteps[i];
        setHighlightLines({ start: step.line, end: step.endLine ?? step.line });
        setOutput(step.output || "");
        setVariables(step.variables);
        setVariableDetails(step.variableDetails);
        return;
      }
    }
    // no more breakpoints hit
    setStepMode(false);
    setHighlightLines(null);
    const last = traceSteps[traceSteps.length - 1];
    setOutput(last.output || "");
    setVariables(last.variables);
    setVariableDetails(last.variableDetails);
  }, [stepIndex, traceSteps, breakpoints]);

  // ─── Tab/Project management ───────────────────────────────

  const openProject = useCallback(
    (project: Project) => {
      setCode(project.code);
      setSelectedExercise(null);
      setShowHint(false);
      setShowSolution(false);
      const existing = openTabs.find((t) => t.id === project.id);
      if (!existing) {
        setOpenTabs((prev) => [...prev, { type: "project", id: project.id, name: project.name }]);
      }
      setActiveTabId(project.id);
    },
    [openTabs]
  );

  const openExercise = useCallback(
    (ex: CodeExercise) => {
      setSelectedExercise(ex);
      setCode(ex.starterCode);
      setShowHint(false);
      setShowSolution(false);
      const tabId = `ex_${ex.id}`;
      const existing = openTabs.find((t) => t.id === tabId);
      if (!existing) {
        setOpenTabs((prev) => [...prev, { type: "exercise", id: tabId, name: ex.title }]);
      }
      setActiveTabId(tabId);
    },
    [openTabs]
  );

  const openFreeMode = useCallback(() => {
    setSelectedExercise(null);
    setCode('# Write your Python code here!\nprint("Hello, World!")');
    const existing = openTabs.find((t) => t.id === "__free__");
    if (!existing) {
      setOpenTabs((prev) => [{ type: "free", id: "__free__", name: "Free Code" }, ...prev]);
    }
    setActiveTabId("__free__");
  }, [openTabs]);

  const closeTab = useCallback(
    (tabId: string) => {
      if (openTabs.length <= 1) return;
      const newTabs = openTabs.filter((t) => t.id !== tabId);
      setOpenTabs(newTabs);
      if (activeTabId === tabId) {
        const last = newTabs[newTabs.length - 1];
        setActiveTabId(last.id);
        // switch content
        if (last.type === "free") {
          openFreeMode();
        } else if (last.type === "project") {
          const p = projects.find((pp) => pp.id === last.id);
          if (p) openProject(p);
        } else if (last.type === "exercise") {
          const exId = last.id.replace("ex_", "");
          const ex = CODE_EXERCISES.find((e) => e.id === exId);
          if (ex) openExercise(ex);
        }
      }
    },
    [openTabs, activeTabId, projects, openFreeMode, openProject, openExercise]
  );

  const switchTab = useCallback(
    (tabId: string) => {
      setActiveTabId(tabId);
      const tab = openTabs.find((t) => t.id === tabId);
      if (!tab) return;
      if (tab.type === "free") {
        setSelectedExercise(null);
        setCode('# Write your Python code here!\nprint("Hello, World!")');
      } else if (tab.type === "project") {
        const p = projects.find((pp) => pp.id === tab.id);
        if (p) {
          setCode(p.code);
          setSelectedExercise(null);
        }
      } else if (tab.type === "exercise") {
        const exId = tab.id.replace("ex_", "");
        const ex = CODE_EXERCISES.find((e) => e.id === exId);
        if (ex) {
          setSelectedExercise(ex);
          setCode(ex.starterCode);
        }
      }
      setStepMode(false);
      setHighlightLines(null);
      setOutput("");
      setShowHint(false);
      setShowSolution(false);
    },
    [openTabs, projects]
  );

  const handleNewProject = useCallback(
    async (name: string, templateCode: string) => {
      const p = await createProject(name, templateCode);
      setProjects((prev) => [p, ...prev]);
      openProject(p);
      setShowNewProject(false);
    },
    [openProject]
  );

  const handleRename = useCallback(
    async (project: Project) => {
      const newName = prompt("New name · 新名称", project.name);
      if (!newName || newName === project.name) return;
      const updated = { ...project, name: newName, updatedAt: new Date().toISOString() };
      await saveProject(updated);
      setProjects((prev) => prev.map((p) => (p.id === project.id ? updated : p)));
      setOpenTabs((prev) => prev.map((t) => (t.id === project.id ? { ...t, name: newName } : t)));
    },
    []
  );

  const handleDelete = useCallback(
    async (project: Project) => {
      if (!confirm(`Delete "${project.name}"? · 删除 "${project.name}"？`)) return;
      await deleteProjectFromStore(project.id);
      setProjects((prev) => prev.filter((p) => p.id !== project.id));
      closeTab(project.id);
    },
    [closeTab]
  );

  const handleDuplicate = useCallback(
    async (project: Project) => {
      const dup = await duplicateProject(project);
      setProjects((prev) => [dup, ...prev]);
    },
    []
  );

  // Toggle breakpoint on glyph margin click
  const handleEditorMount = useCallback(
    (editor: unknown) => {
      editorRef.current = editor;
      const ed = editor as { onMouseDown?: (cb: (e: { target?: { type?: number }; event?: { leftButton?: boolean } }) => void) => void };
      // Monaco glyph margin type = 2
      ed.onMouseDown?.((e) => {
        const targetType = e.target?.type;
        if (targetType === 2 && e.event?.leftButton) {
          // Glyph margin click — extract line
          const target = e.target as { position?: { lineNumber?: number } };
          const line = target.position?.lineNumber;
          if (line) {
            setBreakpoints((prev) => {
              const next = new Set(prev);
              if (next.has(line)) next.delete(line);
              else next.add(line);
              return next;
            });
          }
        }
      });
    },
    []
  );

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* CSS */}
      <style>{`
        .step-highlight-line { background: rgba(250, 204, 21, 0.15) !important; border-left: 4px solid #facc15 !important; }
        .step-highlight-gutter { background: #facc15; width: 4px !important; }
        .breakpoint-line { background: rgba(239, 68, 68, 0.08) !important; }
        .breakpoint-glyph { background: #ef4444; border-radius: 50%; width: 10px !important; height: 10px !important; margin-left: 4px; margin-top: 4px; }
      `}</style>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between px-4 py-2 border-b flex-shrink-0"
        style={{ borderColor: "var(--theme-border)", backgroundColor: "var(--theme-card-bg)" }}
      >
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold">💻 Code Lab</h1>
          <span className="text-xs" style={{ color: "var(--theme-text-muted)" }}>
            Python IDE · 代码实验室
          </span>
        </div>
      </motion.div>

      {/* Main layout */}
      <div className="flex flex-1 min-h-0 flex-col md:flex-row">
        {/* ─── Sidebar ─────────────────────────────────────── */}
        <div
          className="w-full md:w-56 lg:w-64 flex-shrink-0 border-r flex flex-col overflow-hidden"
          style={{ borderColor: "var(--theme-border)", backgroundColor: "var(--theme-card-bg)" }}
        >
          {/* Sidebar tabs */}
          <div className="flex border-b" style={{ borderColor: "var(--theme-border)" }}>
            <button
              onClick={() => preview ? setShowSignUpModal(true) : setSidebarTab("projects")}
              className="flex-1 py-2 text-xs font-bold transition-colors"
              style={{
                color: sidebarTab === "projects" ? "var(--color-primary)" : "var(--theme-text-muted)",
                borderBottom: sidebarTab === "projects" ? "2px solid var(--color-primary)" : "2px solid transparent",
                opacity: preview ? 0.45 : 1,
              }}
            >
              {preview ? "🔒" : "📁"} Projects · 项目
            </button>
            <button
              onClick={() => setSidebarTab("exercises")}
              className="flex-1 py-2 text-xs font-bold transition-colors"
              style={{
                color: sidebarTab === "exercises" ? "var(--color-primary)" : "var(--theme-text-muted)",
                borderBottom: sidebarTab === "exercises" ? "2px solid var(--color-primary)" : "2px solid transparent",
              }}
            >
              📝 Exercises · 练习
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {sidebarTab === "projects" ? (
              <>
                <button
                  onClick={() => setShowNewProject(true)}
                  className="w-full p-2 rounded-lg border-2 border-dashed text-xs font-bold transition-colors hover:border-solid"
                  style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
                >
                  + New Project · 新建项目
                </button>
                <button
                  onClick={openFreeMode}
                  className="w-full text-left p-3 rounded-xl border transition-colors"
                  style={{
                    backgroundColor:
                      activeTabId === "__free__"
                        ? "color-mix(in srgb, var(--color-secondary) 10%, var(--theme-card-bg))"
                        : "var(--theme-card-bg)",
                    borderColor:
                      activeTabId === "__free__"
                        ? "color-mix(in srgb, var(--color-secondary) 30%, transparent)"
                        : "var(--theme-border)",
                  }}
                >
                  <span className="text-xs font-bold">🆓 Free Code · 自由编程</span>
                </button>
                {projects.map((p) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    isSelected={activeTabId === p.id}
                    onClick={() => openProject(p)}
                    onRename={() => handleRename(p)}
                    onDelete={() => handleDelete(p)}
                    onDuplicate={() => handleDuplicate(p)}
                  />
                ))}
                {projects.length === 0 && (
                  <p className="text-[10px] text-center py-4" style={{ color: "var(--theme-text-muted)" }}>
                    No projects yet · 还没有项目
                  </p>
                )}
              </>
            ) : (
              <>
                <div className="flex gap-1 flex-wrap mb-1">
                  {["all", "projects", "beginner", "intermediate", "advanced"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setFilterTag(tag)}
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors"
                      style={{
                        backgroundColor: filterTag === tag ? "color-mix(in srgb, var(--color-primary) 20%, transparent)" : "transparent",
                        color: filterTag === tag ? "var(--color-primary)" : "var(--theme-text-muted)",
                        border: filterTag === tag ? "1px solid var(--color-primary)" : "1px solid var(--theme-border)",
                      }}
                    >
                      {tag === "all" ? "All" : tag === "projects" ? "🚀 Projects" : tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </button>
                  ))}
                </div>
                {sortedExercises.map((ex, idx) => {
                  const isRecommended = SKILL_ORDER.indexOf(ex.skillLevel) <= userSkillIdx;
                  const exerciseLocked = preview && idx >= PREVIEW_MAX_EXERCISES;
                  return (
                    <ExerciseCard
                      key={ex.id}
                      exercise={ex}
                      isSelected={activeTabId === `ex_${ex.id}`}
                      isRecommended={isRecommended}
                      locked={exerciseLocked}
                      onClick={() => exerciseLocked ? setShowSignUpModal(true) : openExercise(ex)}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>

        {/* ─── Editor Area ─────────────────────────────────── */}
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          {/* Tab bar + run buttons */}
          <div
            className="flex items-center justify-between px-2 py-1 border-b flex-shrink-0 overflow-x-auto"
            style={{ borderColor: "var(--theme-border)", backgroundColor: "#1e1e1e" }}
          >
            <div className="flex items-center gap-0.5 min-w-0 overflow-x-auto flex-shrink">
              {openTabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs cursor-pointer rounded-t-lg transition-colors whitespace-nowrap group"
                  style={{
                    backgroundColor: activeTabId === tab.id ? "#2d2d2d" : "transparent",
                    color: activeTabId === tab.id ? "#e0e0e0" : "#888",
                    borderBottom: activeTabId === tab.id ? "2px solid var(--color-primary)" : "2px solid transparent",
                  }}
                >
                  <span>{tab.type === "free" ? "🆓" : tab.type === "project" ? "📄" : "📝"}</span>
                  <span className="truncate max-w-[100px]">{tab.name}</span>
                  {openTabs.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(tab.id);
                      }}
                      className="ml-1 opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Run/Step buttons */}
            <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
              {isLoading && <span className="text-[10px] text-cyan-400 animate-pulse">{loadingMsg}</span>}
              {!stepMode ? (
                <>
                  <button
                    onClick={startStepMode}
                    disabled={isRunning || isLoading}
                    className="flex items-center gap-1 px-2 py-1 bg-cyan-500 text-black text-xs font-bold rounded-md hover:bg-cyan-400 disabled:opacity-50 transition-colors"
                  >
                    ⏭ Step
                  </button>
                  <button
                    onClick={runCode}
                    disabled={isRunning || isLoading}
                    className="flex items-center gap-1 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-md hover:bg-green-400 disabled:opacity-50 transition-colors"
                  >
                    {isRunning ? "⏳..." : "▶ Run"}
                  </button>
                </>
              ) : (
                <>
                  <span className="text-[10px] text-yellow-300 font-mono whitespace-nowrap">
                    {stepIndex + 1}/{traceSteps.length}
                  </span>
                  <button onClick={nextStep} className="px-2 py-1 bg-cyan-500 text-black text-[10px] font-bold rounded-md hover:bg-cyan-400">
                    ⏭ Next
                  </button>
                  <button onClick={continueToBreakpoint} className="px-2 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-md hover:bg-blue-400">
                    ▶ Continue
                  </button>
                  <button
                    onClick={() => {
                      setStepMode(false);
                      setHighlightLines(null);
                    }}
                    className="px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-md hover:bg-red-400"
                  >
                    ⏹ Stop
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Exercise hint bar */}
          {selectedExercise && activeTab?.type === "exercise" && (
            <div className="flex items-center gap-2 px-3 py-1.5 border-b text-xs" style={{ borderColor: "var(--theme-border)", backgroundColor: "var(--theme-card-bg)" }}>
              <span style={{ color: "var(--theme-text-secondary)" }}>{selectedExercise.description}</span>
              <button
                onClick={() => setShowHint(!showHint)}
                className="px-2 py-0.5 rounded text-[10px]"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 20%, transparent)", color: "var(--color-warning)" }}
              >
                💡 {showHint ? "Hide" : "Hint"}
              </button>
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="px-2 py-0.5 rounded text-[10px] border"
                style={{ borderColor: "var(--theme-border)", color: "var(--theme-text-secondary)" }}
              >
                👀 {showSolution ? "Hide" : "Solution"}
              </button>
            </div>
          )}

          {showHint && selectedExercise && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-3 py-2 text-xs border-b"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 8%, var(--theme-bg))", borderColor: "var(--theme-border)" }}
            >
              💡 {selectedExercise.hint}
            </motion.div>
          )}

          {/* Editor */}
          <div className="flex-1 min-h-0 relative">
            <MonacoEditor
              height="100%"
              language="python"
              theme="vs-dark"
              value={code}
              onChange={(v) => setCode(v || "")}
              onMount={handleEditorMount}
              options={{
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                lineNumbers: "on",
                renderLineHighlight: "line",
                readOnly: stepMode,
                padding: { top: 8 },
                automaticLayout: true,
                glyphMargin: true,
              }}
            />
            {showSolution && selectedExercise && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-2 right-2 z-10 rounded-lg border p-3 max-w-sm max-h-48 overflow-auto text-xs"
                style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border)" }}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-[10px]" style={{ color: "var(--theme-text-muted)" }}>SOLUTION</span>
                  <button onClick={() => setShowSolution(false)} className="text-red-400 text-xs">×</button>
                </div>
                <pre className="text-green-400 terminal-text whitespace-pre-wrap">{selectedExercise.solution}</pre>
              </motion.div>
            )}
          </div>

          {/* ─── Bottom Panel: Output + Variables ─────────── */}
          <div
            className="flex-shrink-0 border-t"
            style={{ borderColor: "var(--theme-border)", backgroundColor: "#0d1117" }}
          >
            {/* Panel header */}
            <div
              className="flex items-center justify-between px-3 py-1 border-b cursor-pointer"
              style={{ borderColor: "var(--theme-border)" }}
              onClick={() => setOutputCollapsed(!outputCollapsed)}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[var(--theme-text-muted)] terminal-text">
                  {outputCollapsed ? "▸" : "▾"} OUTPUT · 输出
                </span>
                {isRunning && <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-[10px] text-green-400 font-bold">
                      ✅ Success!
                    </motion.span>
                  )}
                </AnimatePresence>
                {stepMode && (
                  <span className="text-[10px] text-yellow-300 font-mono">
                    Line {highlightLines ? highlightLines.start + 1 : "?"} · Step {stepIndex + 1}/{traceSteps.length}
                  </span>
                )}
              </div>
              {breakpoints.size > 0 && (
                <span className="text-[10px] text-red-400">🔴 {breakpoints.size} breakpoint{breakpoints.size > 1 ? "s" : ""}</span>
              )}
            </div>

            <AnimatePresence>
              {!outputCollapsed && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row" style={{ maxHeight: "250px" }}>
                    {/* Output */}
                    <div className="flex-1 p-3 overflow-auto" style={{ maxHeight: "250px" }}>
                      <div id="turtle-output" data-turtle-mount="true" />
                      <pre className={`text-xs terminal-text whitespace-pre-wrap min-h-[2rem] ${hasError ? "text-red-400" : "text-green-400"}`}>
                        {output || (
                          <span className="text-[var(--theme-text-muted)]">Click Run to execute · 点击 Run 运行代码</span>
                        )}
                      </pre>
                    </div>

                    {/* Variables */}
                    <div
                      className="md:w-64 lg:w-80 p-3 border-t md:border-t-0 md:border-l overflow-auto"
                      style={{ borderColor: "var(--theme-border)", maxHeight: "250px" }}
                    >
                      <div className="text-[10px] text-[var(--theme-text-muted)] terminal-text mb-2">VARIABLES · 变量</div>
                      <MemoryModel variables={variableDetails} />
                      {variableDetails.length === 0 && Object.keys(variables).length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {Object.entries(variables).map(([name, value]) => (
                            <motion.div
                              key={name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded text-[10px] terminal-text"
                            >
                              <span className="text-purple-400">{name}</span>
                              <span className="text-[var(--theme-text-muted)]"> = </span>
                              <span className="text-cyan-400">{value}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      {variableDetails.length === 0 && Object.keys(variables).length === 0 && (
                        <p className="text-[10px]" style={{ color: "var(--theme-text-muted)" }}>
                          Run code to see variables · 运行代码查看变量
                        </p>
                      )}

                      {/* Call stack (during step mode) */}
                      {stepMode && traceSteps[stepIndex] && (
                        <div className="mt-3 pt-2 border-t" style={{ borderColor: "var(--theme-border)" }}>
                          <div className="text-[10px] text-[var(--theme-text-muted)] terminal-text mb-1">CALL STACK · 调用栈</div>
                          <div className="text-[10px] text-cyan-400 terminal-text">
                            → Line {traceSteps[stepIndex].line + 1}: {code.split("\n")[traceSteps[stepIndex].line]?.trim() || ""}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* New Project Dialog */}
      <AnimatePresence>
        {showNewProject && <NewProjectDialog onClose={() => setShowNewProject(false)} onCreate={handleNewProject} />}
      </AnimatePresence>
      <SignUpModal open={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
    </div>
  );
}

// end of file
