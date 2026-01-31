"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { loadPyodideEngine, runPython, isPyodideLoaded, traceExecution } from "@/lib/pyodide-engine";
import type { VariableDetail, TraceStep } from "@/lib/pyodide-engine";
import { runCpp } from "@/lib/cpp-engine";
import { incrementCodeRun, addXP } from "@/lib/progress-store";
import { earnCoins } from "@/lib/coin-store";
import { CODE_EXERCISES, type CodeExercise } from "@/data/code-challenges";
import { ALL_EXERCISES, type UnifiedExercise, type ExerciseLanguage } from "@/data/unified-exercises";
import { runTestCases } from "@/lib/test-runner";
import { type GradeResult, getXPReward } from "@/lib/exercise-grader";
import { useUserProfile } from "@/lib/useUserProfile";
import { isPreviewMode, PREVIEW_MAX_EXERCISES } from "@/lib/preview-mode";
import { getCompletedExercises, markExerciseCompleted, isExerciseCompleted } from "@/lib/exercise-progress";
import SignUpModal from "@/components/SignUpModal";
import MemoryModel from "@/components/MemoryModel";
import {
  loadProjects,
  saveProject,
  deleteProject as deleteProjectFromStore,
  createProject,
  duplicateProject,
  type Project,
  type ProjectLanguage,
} from "@/lib/project-store";
import {
  getExerciseDraft,
  saveExerciseDraft,
  clearExerciseDraft,
  getFreeCode,
  saveFreeCode,
} from "@/lib/exercise-draft-store";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

// ─── Templates ──────────────────────────────────────────────

const PYTHON_TEMPLATES = [
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

const CPP_TEMPLATES = [
  { name: "Empty", icon: "📄", code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Start coding!\n    return 0;\n}\n' },
  {
    name: "Hello World",
    icon: "👋",
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;

    string name;
    cout << "What is your name? ";
    cin >> name;
    cout << "Nice to meet you, " << name << "!" << endl;

    return 0;
}`,
  },
  {
    name: "Calculator",
    icon: "🔢",
    code: `// Simple Calculator · 简单计算器
#include <iostream>
using namespace std;

int main() {
    double num1, num2;
    char op;

    cout << "First number: ";
    cin >> num1;
    cout << "Operator (+, -, *, /): ";
    cin >> op;
    cout << "Second number: ";
    cin >> num2;

    switch (op) {
        case '+': cout << num1 << " + " << num2 << " = " << num1 + num2 << endl; break;
        case '-': cout << num1 << " - " << num2 << " = " << num1 - num2 << endl; break;
        case '*': cout << num1 << " * " << num2 << " = " << num1 * num2 << endl; break;
        case '/': cout << num1 << " / " << num2 << " = " << num1 / num2 << endl; break;
        default: cout << "Unknown operator!" << endl;
    }
    return 0;
}`,
  },
  {
    name: "Array Ops",
    icon: "📊",
    code: `// Array Operations · 数组操作
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int data[] = {23, 45, 12, 67, 34, 89, 56, 78, 11, 90};
    int n = sizeof(data) / sizeof(data[0]);

    int total = 0;
    for (int i = 0; i < n; i++) total += data[i];
    double average = (double)total / n;
    int mx = *max_element(data, data + n);
    int mn = *min_element(data, data + n);

    cout << "Sum: " << total << endl;
    cout << "Average: " << average << endl;
    cout << "Max: " << mx << ", Min: " << mn << endl;
    cout << "Range: " << mx - mn << endl;

    sort(data, data + n);
    cout << "Sorted: ";
    for (int i = 0; i < n; i++) cout << data[i] << " ";
    cout << endl;

    return 0;
}`,
  },
  {
    name: "Class",
    icon: "🏗️",
    code: `// Class Example · 类示例
#include <iostream>
#include <string>
using namespace std;

class Pet {
    string name;
    int age;
public:
    Pet(string n, int a) : name(n), age(a) {}
    void greet() const {
        cout << "Hi! I'm " << name << ", age " << age << endl;
    }
    void birthday() {
        age++;
        cout << name << " is now " << age << "! 🎂" << endl;
    }
};

int main() {
    Pet dog("Buddy", 3);
    dog.greet();
    dog.birthday();
    return 0;
}`,
  },
  {
    name: "STL",
    icon: "📦",
    code: `// STL Example · 标准库示例
#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

int main() {
    // Vector
    vector<int> nums = {5, 2, 8, 1, 9, 3};
    sort(nums.begin(), nums.end());
    cout << "Sorted: ";
    for (int n : nums) cout << n << " ";
    cout << endl;

    // Map
    map<string, int> scores;
    scores["Alice"] = 95;
    scores["Bob"] = 87;
    scores["Charlie"] = 92;

    for (auto& [name, score] : scores) {
        cout << name << ": " << score << endl;
    }

    return 0;
}`,
  },
];

const TEMPLATES_BY_LANG: Record<ProjectLanguage, typeof PYTHON_TEMPLATES> = {
  python: PYTHON_TEMPLATES,
  cpp: CPP_TEMPLATES,
};

// ─── Sidebar Components ────────────────────────────────────

function UnifiedExerciseCard({
  exercise,
  isSelected,
  onClick,
  locked,
  completed,
}: {
  exercise: UnifiedExercise;
  isSelected: boolean;
  onClick: () => void;
  locked?: boolean;
  completed?: boolean;
}) {
  const diffBadge = exercise.difficulty === "easy" ? "🟢" : exercise.difficulty === "medium" ? "🟡" : "🔴";
  const langIcon = exercise.language === "python" ? "🐍" : "⚡";
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
        opacity: locked ? 0.4 : completed ? 0.45 : 1,
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
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-xs truncate">
          {completed && "✅ "}{langIcon} {diffBadge} {exercise.title}
        </span>
        <span
          className="text-[9px] px-1.5 py-0.5 rounded-full flex-shrink-0 ml-1"
          style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 12%, transparent)", color: "var(--color-primary)" }}
        >
          L{exercise.level}
        </span>
      </div>
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
        <span className="font-bold text-xs truncate">{project.language === "cpp" ? "⚡" : "🐍"} {project.name}</span>
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

function NewProjectDialog({ onClose, onCreate }: { onClose: () => void; onCreate: (name: string, code: string, language: ProjectLanguage) => void }) {
  const [name, setName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [language, setLanguage] = useState<ProjectLanguage>("python");

  const templates = TEMPLATES_BY_LANG[language];

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

        {/* Language selector */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs" style={{ color: "var(--theme-text-muted)" }}>Language · 语言</span>
          <div className="flex rounded-full border overflow-hidden" style={{ borderColor: "var(--theme-border)" }}>
            {(["python", "cpp"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); setSelectedTemplate(0); }}
                className="px-3 py-1 text-xs font-bold transition-colors"
                style={{
                  backgroundColor: language === lang ? "var(--color-primary)" : "transparent",
                  color: language === lang ? "white" : "var(--theme-text-secondary)",
                }}
              >
                {lang === "python" ? "🐍 Python" : "⚡ C++"}
              </button>
            ))}
          </div>
        </div>

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
          {templates.map((t, i) => (
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
              const finalName = name.trim() || templates[selectedTemplate].name;
              onCreate(finalName, templates[selectedTemplate].code, language);
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

// ─── Explanation Generator ───────────────────────────────────

function generateExplanation(exercise: UnifiedExercise): string[] {
  const steps: string[] = [];
  const lines = exercise.solution.split('\n').filter(l => l.trim());

  // Extract comments as explanation steps
  for (const line of lines) {
    const commentMatch = line.match(/(?:\/\/|#)\s*(.+)/);
    if (commentMatch && commentMatch[1].length > 3) {
      steps.push(commentMatch[1].trim());
    }
  }

  // If no comments found, generate basic explanation
  if (steps.length === 0) {
    if (exercise.language === 'python') {
      if (exercise.solution.includes('input(')) steps.push('Read input from the user · 从用户读取输入');
      if (exercise.solution.includes('for ')) steps.push('Use a loop to iterate · 使用循环遍历');
      if (exercise.solution.includes('if ')) steps.push('Use conditional logic · 使用条件判断');
      if (exercise.solution.includes('def ')) steps.push('Define a function · 定义函数');
      if (exercise.solution.includes('print(')) steps.push('Print the result · 输出结果');
    } else {
      if (exercise.solution.includes('cin')) steps.push('Read input with cin · 使用cin读取输入');
      if (exercise.solution.includes('for (') || exercise.solution.includes('for(')) steps.push('Use a loop to iterate · 使用循环遍历');
      if (exercise.solution.includes('if (') || exercise.solution.includes('if(')) steps.push('Use conditional logic · 使用条件判断');
      if (exercise.solution.includes('cout')) steps.push('Output with cout · 使用cout输出');
    }
    if (steps.length === 0) {
      steps.push(`Study the solution code above and compare with your approach · 研究上面的解答代码，与你的方法对比`);
    }
  }

  return steps;
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
      const ex = ALL_EXERCISES.find((e) => e.id === projectId);
      if (ex) {
        projectParamHandled.current = true;
        setSidebarTab("exercises");
        setTimeout(() => openUnifiedExercise(ex), 100);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Sidebar
  const [sidebarTab, setSidebarTab] = useState<"projects" | "exercises">("exercises");
  const [projects, setProjects] = useState<Project[]>([]);
  const [showNewProject, setShowNewProject] = useState(false);

  // Active state
  const [openTabs, setOpenTabs] = useState<{ type: "project" | "exercise" | "free"; id: string; name: string }[]>([
    { type: "free", id: "__free__", name: "Free Code" },
  ]);
  const [activeTabId, setActiveTabId] = useState("__free__");

  // Exercise state
  const [selectedExercise, setSelectedExercise] = useState<UnifiedExercise | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);

  // Language
  const [activeLanguage, setActiveLanguage] = useState<ProjectLanguage>("python");
  const isPython = activeLanguage === "python";

  // Sync language toggle with exercise filter
  useEffect(() => {
    setExLangFilter(activeLanguage === "python" ? "python" : "cpp");
  }, [activeLanguage]);

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

  // Grading
  const [gradeResult, setGradeResult] = useState<GradeResult | null>(null);
  const [isGrading, setIsGrading] = useState(false);
  const [gradingProgress, setGradingProgress] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);
  const [exercisesPassed, setExercisesPassed] = useState<Set<string>>(new Set());
  const [showExplanation, setShowExplanation] = useState(false);

  // Exercise completion tracking
  const [completedExerciseIds, setCompletedExerciseIds] = useState<Set<string>>(new Set());
  // Track EXPANDED categories (default: nothing expanded = all collapsed)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // Step/Debug
  const [stepMode, setStepMode] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [traceSteps, setTraceSteps] = useState<TraceStep[]>([]);
  const [highlightLines, setHighlightLines] = useState<{ start: number; end: number } | null>(null);
  const [breakpoints, setBreakpoints] = useState<Set<number>>(new Set());

  // Save as Project dialog
  const [showSaveAsProject, setShowSaveAsProject] = useState(false);
  const [saveAsProjectName, setSaveAsProjectName] = useState("");

  // Refs
  const editorRef = useRef<unknown>(null);
  const decorationsRef = useRef<string[]>([]);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const freeCodeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exerciseDraftTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // User
  const { profile } = useUserProfile();
  const skillLevel = profile?.skillLevel || "beginner";
  const SKILL_ORDER = ["beginner", "intermediate", "advanced"];
  const userSkillIdx = SKILL_ORDER.indexOf(skillLevel);

  const [filterTag, setFilterTag] = useState<string>("all");
  const [exLangFilter, setExLangFilter] = useState<"all" | ExerciseLanguage>("all");
  const [exLevelFilter, setExLevelFilter] = useState<number>(0); // 0 = all

  const filteredExercises = useMemo(() => {
    let exercises = ALL_EXERCISES;
    if (exLangFilter !== "all") {
      exercises = exercises.filter((ex) => ex.language === exLangFilter);
    }
    if (exLevelFilter > 0) {
      exercises = exercises.filter((ex) => ex.level === exLevelFilter);
    }
    return exercises;
  }, [exLangFilter, exLevelFilter]);

  // ─── Load projects ────────────────────────────────────────
  useEffect(() => {
    loadProjects().then(setProjects);
  }, []);

  // ─── Load completed exercises ─────────────────────────────
  useEffect(() => {
    setCompletedExerciseIds(new Set(getCompletedExercises()));
  }, []);

  // ─── Auto-save (debounce 2s) ──────────────────────────────
  const activeTab = openTabs.find((t) => t.id === activeTabId);
  const currentProject = activeTab?.type === "project" ? projects.find((p) => p.id === activeTab.id) : null;

  useEffect(() => {
    if (!currentProject) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      const updated = { ...currentProject, code, language: activeLanguage, updatedAt: new Date().toISOString() };
      saveProject(updated).then(() => {
        setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
      });
    }, 2000);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, currentProject?.id]);

  // ─── Free code auto-save (debounce 2s) ─────────────────────
  useEffect(() => {
    if (activeTab?.type !== "free") return;
    if (freeCodeTimerRef.current) clearTimeout(freeCodeTimerRef.current);
    freeCodeTimerRef.current = setTimeout(() => {
      saveFreeCode(activeLanguage, code);
    }, 2000);
    return () => {
      if (freeCodeTimerRef.current) clearTimeout(freeCodeTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, activeTab?.type, activeLanguage]);

  // ─── Exercise draft auto-save (debounce 2s) ───────────────
  useEffect(() => {
    if (activeTab?.type !== "exercise" || !selectedExercise) return;
    if (exerciseDraftTimerRef.current) clearTimeout(exerciseDraftTimerRef.current);
    exerciseDraftTimerRef.current = setTimeout(() => {
      saveExerciseDraft(selectedExercise.id, code);
    }, 2000);
    return () => {
      if (exerciseDraftTimerRef.current) clearTimeout(exerciseDraftTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, activeTab?.type, selectedExercise?.id]);

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

      if (isPython) {
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
      } else {
        // C++ execution
        try {
          const result = await runCpp(code);
          if (result.error) {
            setOutput(result.error);
            setHasError(true);
          } else {
            setOutput(result.output || "(No output · 没有输出)");
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
          }
        } catch (e) {
          setOutput(`❌ Failed to run C++: ${e instanceof Error ? e.message : "unknown"}`);
          setHasError(true);
        }
        setVariables({});
        setVariableDetails([]);
      }

      setIsRunning(false);
      incrementCodeRun();
      addXP(5);
    },
    [code, ensurePyodide, isPython]
  );

  const runCode = useCallback(async () => {
    setStepMode(false);
    setHighlightLines(null);
    setGradeResult(null);
    await executeCode();

    // Auto-grade if exercise with test cases
    if (selectedExercise && selectedExercise.testCases.length > 0) {
      setIsGrading(true);
      setGradingProgress("Running tests... · 正在测试...");
      try {
        const result = await runTestCases(
          code,
          selectedExercise.language,
          selectedExercise.testCases,
          (done, total) => setGradingProgress(`Test ${done}/${total}...`),
        );
        setGradeResult(result);

        if (result.passed) {
          // Award XP/coins on first pass
          if (!exercisesPassed.has(selectedExercise.id)) {
            const xp = getXPReward(selectedExercise.difficulty);
            addXP(xp);
            earnCoins(xp, `exercise:${selectedExercise.id}`);
            setExercisesPassed(prev => new Set(prev).add(selectedExercise.id));
          }
          // Track completion
          markExerciseCompleted(selectedExercise.id);
          setCompletedExerciseIds(prev => new Set(prev).add(selectedExercise.id));
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 3000);
        }
      } catch {
        setGradingProgress("Grading failed · 评分失败");
      } finally {
        setIsGrading(false);
      }
    }
  }, [executeCode, selectedExercise, code, exercisesPassed]);

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
      setActiveLanguage(project.language || "python");
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

  const openUnifiedExercise = useCallback(
    (ex: UnifiedExercise) => {
      setSelectedExercise(ex);
      const draft = getExerciseDraft(ex.id);
      setCode(draft || ex.starterCode);
      setActiveLanguage(ex.language);
      setShowHint(false);
      setShowSolution(false);
      setHintIndex(0);
      const tabId = `ex_${ex.id}`;
      const existing = openTabs.find((t) => t.id === tabId);
      if (!existing) {
        const langIcon = ex.language === "python" ? "🐍" : "⚡";
        setOpenTabs((prev) => [...prev, { type: "exercise", id: tabId, name: `${langIcon} ${ex.title}` }]);
      }
      setActiveTabId(tabId);
    },
    [openTabs]
  );

  const openFreeMode = useCallback(() => {
    setSelectedExercise(null);
    const saved = getFreeCode(activeLanguage);
    setCode(saved || (activeLanguage === "python"
      ? '# Write your Python code here!\nprint("Hello, World!")'
      : '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}\n'));
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
          const ex = ALL_EXERCISES.find((e) => e.id === exId);
          if (ex) openUnifiedExercise(ex);
        }
      }
    },
    [openTabs, activeTabId, projects, openFreeMode, openProject, openUnifiedExercise]
  );

  const switchTab = useCallback(
    (tabId: string) => {
      setActiveTabId(tabId);
      const tab = openTabs.find((t) => t.id === tabId);
      if (!tab) return;
      if (tab.type === "free") {
        setSelectedExercise(null);
        const saved = getFreeCode(activeLanguage);
        if (saved) setCode(saved);
      } else if (tab.type === "project") {
        const p = projects.find((pp) => pp.id === tab.id);
        if (p) {
          setCode(p.code);
          setActiveLanguage(p.language || "python");
          setSelectedExercise(null);
        }
      } else if (tab.type === "exercise") {
        const exId = tab.id.replace("ex_", "");
        const ex = ALL_EXERCISES.find((e) => e.id === exId);
        if (ex) {
          setSelectedExercise(ex);
          const draft = getExerciseDraft(ex.id);
          setCode(draft || ex.starterCode);
          setActiveLanguage(ex.language);
        }
      }
      setStepMode(false);
      setHighlightLines(null);
      setOutput("");
      setShowHint(false);
      setShowSolution(false);
      setGradeResult(null);
      setShowExplanation(false);
    },
    [openTabs, projects]
  );

  const handleNewProject = useCallback(
    async (name: string, templateCode: string, language: ProjectLanguage = "python") => {
      const p = await createProject(name, templateCode, language);
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

  // ─── Resize state ────────────────────────────────────────
  const [col1Width, setCol1Width] = useState(256);
  const [col3Width, setCol3Width] = useState(350);
  const [isDragging, setIsDragging] = useState<"col1" | "col3" | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileView, setMobileView] = useState<"editor" | "output">("editor");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const startResize = useCallback(
    (col: "col1" | "col3") => (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(col);
      const startX = e.clientX;
      const startWidth = col === "col1" ? col1Width : col3Width;

      const onMouseMove = (ev: MouseEvent) => {
        const delta = ev.clientX - startX;
        if (col === "col1") {
          setCol1Width(Math.max(200, Math.min(500, startWidth + delta)));
        } else {
          // col3: dragging left edge, so subtract delta
          setCol3Width(Math.max(250, Math.min(600, startWidth - delta)));
        }
      };

      const onMouseUp = () => {
        setIsDragging(null);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };

      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [col1Width, col3Width]
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


  // ─── Sidebar content (shared between mobile/desktop) ────
  const sidebarContent = (
    <>
      {/* Sidebar tabs */}
      <div className="flex border-b" style={{ borderColor: "var(--theme-border)" }}>
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

            <div className="text-[10px] font-bold pt-2 pb-1 px-1" style={{ color: "var(--theme-text-muted)" }}>
              📁 My Projects · 我的项目
            </div>
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                isSelected={activeTabId === p.id}
                onClick={() => { openProject(p); if (isMobile) setMobileSidebarOpen(false); }}
                onRename={() => handleRename(p)}
                onDelete={() => handleDelete(p)}
                onDuplicate={() => handleDuplicate(p)}
              />
            ))}
            {projects.length === 0 && (
              <p className="text-[10px] text-center py-2" style={{ color: "var(--theme-text-muted)" }}>
                No projects yet · 还没有项目
              </p>
            )}

            {/* Lesson Projects — grouped by area (Python) or category (C++) */}
            {(() => {
              const isCpp = activeLanguage === "cpp";
              const lessonProjects = CODE_EXERCISES.filter(ex =>
                ex.tags.includes("project") && ex.fromLesson &&
                (isCpp ? ex.language === "cpp" : !ex.language || ex.language === "python")
              );
              if (lessonProjects.length === 0) return null;
              // Python: group by area tag; C++: group by category
              const areaNames: Record<string, string> = {
                "area-1": "🏝️ Starter Island",
                "area-2": "🌲 Loop Forest",
                "area-3": "🏙️ Builder City",
                "area-4": "🔬 Science Lab",
                "area-5": "🤖 AI Frontier",
              };
              const cppCategoryNames: Record<string, string> = {
                "Games": "🎮 Games · 游戏",
                "Simulations": "🔬 Simulations · 模拟",
                "Creative": "🎨 Creative · 创意",
                "Science": "🧬 Science · 科学",
                "Tools": "🛠️ Tools · 工具",
                "Algorithms": "🧩 Algorithms · 算法",
                "Data": "📊 Data · 数据",
              };
              const groups: Record<string, typeof lessonProjects> = {};
              lessonProjects.forEach((ex) => {
                const key = isCpp ? (ex.category || "Other") : (ex.tags.find(t => t.startsWith("area-")) || "other");
                if (!groups[key]) groups[key] = [];
                groups[key].push(ex);
              });
              return (
                <>
                  <div className="text-[10px] font-bold pt-3 pb-1 px-1" style={{ color: "var(--theme-text-muted)" }}>
                    📚 Lesson Projects · 课程项目 ({lessonProjects.length})
                  </div>
                  {Object.entries(groups).map(([area, exs]) => {
                    const areaLabel = isCpp ? (cppCategoryNames[area] || area) : (areaNames[area] || area);
                    const catKey = `lp_${area}`;
                    const isExpanded = expandedCategories.has(catKey);
                    return (
                      <div key={area}>
                        <button
                          onClick={() => {
                            const next = new Set(expandedCategories);
                            if (next.has(catKey)) next.delete(catKey); else next.add(catKey);
                            setExpandedCategories(next);
                          }}
                          className="w-full text-left py-1.5 px-1 text-[11px] font-bold flex items-center gap-1"
                          style={{ color: "var(--theme-text-secondary)" }}
                        >
                          <span>{isExpanded ? "▾" : "▸"}</span>
                          <span>{areaLabel}</span>
                          <span className="ml-auto text-[9px] font-normal" style={{ color: "var(--theme-text-muted)" }}>
                            {exs.length}
                          </span>
                        </button>
                        {isExpanded && exs.map((ex) => {
                          const diffBadge = ex.difficulty === 1 ? "🟢" : ex.difficulty === 2 ? "🟡" : "🔴";
                          const isSelected = activeTabId === `ex_${ex.id}`;
                          return (
                            <motion.button
                              key={ex.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => {
                                setSelectedExercise(null);
                                setCode(ex.starterCode);
                                setShowHint(false);
                                setShowSolution(false);
                                const tabId = `ex_${ex.id}`;
                                const existing = openTabs.find((t) => t.id === tabId);
                                if (!existing) {
                                  setOpenTabs((prev) => [...prev, { type: "exercise" as const, id: tabId, name: ex.title }]);
                                }
                                setActiveTabId(tabId);
                                if (isMobile) setMobileSidebarOpen(false);
                              }}
                              className="w-full text-left p-2.5 rounded-xl border transition-colors mb-1"
                              style={{
                                backgroundColor: isSelected
                                  ? "color-mix(in srgb, var(--color-primary) 10%, var(--theme-card-bg))"
                                  : "var(--theme-card-bg)",
                                borderColor: isSelected
                                  ? "color-mix(in srgb, var(--color-primary) 30%, transparent)"
                                  : "var(--theme-border)",
                              }}
                            >
                              <div className="flex items-center justify-between mb-0.5">
                                <span className="font-bold text-xs truncate">🚀 {ex.title}</span>
                                <span className="text-[9px] flex-shrink-0 ml-1">{diffBadge}</span>
                              </div>
                              <p className="text-[10px] line-clamp-1" style={{ color: "var(--theme-text-secondary)" }}>
                                {ex.description}
                              </p>
                            </motion.button>
                          );
                        })}
                      </div>
                    );
                  })}
                </>
              );
            })()}
          </>
        ) : (
          <>
            {/* Language filter */}
            <div className="flex gap-1 mb-1">
              {([["all", "All"], ["python", "🐍 Python"], ["cpp", "⚡ C++"]] as const).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setExLangFilter(val as "all" | ExerciseLanguage)}
                  className="px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors"
                  style={{
                    backgroundColor: exLangFilter === val ? "color-mix(in srgb, var(--color-primary) 20%, transparent)" : "transparent",
                    color: exLangFilter === val ? "var(--color-primary)" : "var(--theme-text-muted)",
                    border: exLangFilter === val ? "1px solid var(--color-primary)" : "1px solid var(--theme-border)",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            {/* Level filter */}
            <div className="flex gap-1 flex-wrap mb-2">
              {[0, 1, 2, 3, 4, 5].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setExLevelFilter(lvl)}
                  className="px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors"
                  style={{
                    backgroundColor: exLevelFilter === lvl ? "color-mix(in srgb, var(--color-secondary) 20%, transparent)" : "transparent",
                    color: exLevelFilter === lvl ? "var(--color-secondary)" : "var(--theme-text-muted)",
                    border: exLevelFilter === lvl ? "1px solid var(--color-secondary)" : "1px solid var(--theme-border)",
                  }}
                >
                  {lvl === 0 ? "All Levels" : `L${lvl}`}
                </button>
              ))}
            </div>
            <div className="text-[10px] mb-1" style={{ color: "var(--theme-text-muted)" }}>
              {filteredExercises.length} exercises
            </div>
            {(() => {
              // Group by category
              const groups: Record<string, UnifiedExercise[]> = {};
              filteredExercises.forEach((ex) => {
                const cat = ex.category || "Other";
                if (!groups[cat]) groups[cat] = [];
                groups[cat].push(ex);
              });
              let globalIdx = 0;
              return Object.entries(groups).map(([cat, exercises]) => {
                const isExpanded = expandedCategories.has(cat);
                const catZh = exercises[0]?.categoryZh || cat;
                const completedCount = exercises.filter((e) => completedExerciseIds.has(e.id)).length;
                const allDone = completedCount === exercises.length && exercises.length > 0;
                return (
                  <div key={cat}>
                    <button
                      onClick={() => {
                        const next = new Set(expandedCategories);
                        if (next.has(cat)) next.delete(cat); else next.add(cat);
                        setExpandedCategories(next);
                      }}
                      className="w-full text-left py-1.5 px-1 text-[11px] font-bold flex items-center gap-1"
                      style={{ color: allDone ? "var(--color-primary)" : "var(--theme-text-secondary)" }}
                    >
                      <span>{isExpanded ? "▾" : "▸"}</span>
                      <span>📂 {cat} · {catZh}</span>
                      <span className="ml-auto text-[9px] font-normal" style={{ color: "var(--theme-text-muted)" }}>
                        {completedCount}/{exercises.length} ✓
                      </span>
                    </button>
                    {isExpanded && exercises.map((ex) => {
                      const exerciseLocked = preview && globalIdx++ >= PREVIEW_MAX_EXERCISES;
                      const done = completedExerciseIds.has(ex.id);
                      return (
                        <div key={ex.id} style={{ opacity: done ? 0.45 : 1 }}>
                          <UnifiedExerciseCard
                            exercise={ex}
                            isSelected={activeTabId === `ex_${ex.id}`}
                            locked={exerciseLocked}
                            onClick={() => {
                              if (exerciseLocked) { setShowSignUpModal(true); return; }
                              openUnifiedExercise(ex);
                              if (isMobile) setMobileSidebarOpen(false);
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              });
            })()}
          </>
        )}
      </div>
    </>
  );

  // ─── Output panel content (shared between mobile/desktop) ─
  const outputPanelContent = (
    <div className="flex flex-col h-full overflow-auto" style={{ backgroundColor: "#0d1117" }}>
      {/* Output header */}
      <div
        className="flex items-center justify-between px-3 py-1.5 border-b flex-shrink-0"
        style={{ borderColor: "var(--theme-border)" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[var(--theme-text-muted)] terminal-text font-bold">
            OUTPUT · 输出
          </span>
          {isRunning && <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
          <AnimatePresence>
            {showSuccess && (
              <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-[10px] text-green-400 font-bold">
                ✅ Success!
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {breakpoints.size > 0 && (
          <span className="text-[10px] text-red-400">🔴 {breakpoints.size} bp</span>
        )}
      </div>

      {/* Output content */}
      <div className="flex-1 p-3 overflow-auto min-h-0">
        <div id="turtle-output" data-turtle-mount="true" />
        <pre className={`text-xs terminal-text whitespace-pre-wrap min-h-[2rem] ${hasError ? "text-red-400" : "text-green-400"}`}>
          {output || (
            <span className="text-[var(--theme-text-muted)]">Click Run to execute · 点击 Run 运行代码</span>
          )}
        </pre>
      </div>

      {/* Step mode info */}
      {stepMode && (
        <div className="px-3 py-2 border-t flex-shrink-0" style={{ borderColor: "var(--theme-border)" }}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-yellow-300 font-mono font-bold">
              ⏭ Step {stepIndex + 1}/{traceSteps.length}
            </span>
            <span className="text-[10px] text-yellow-300 font-mono">
              Line {highlightLines ? highlightLines.start + 1 : "?"}
            </span>
          </div>
          <div className="flex gap-1">
            <button onClick={nextStep} className="px-2 py-1 bg-cyan-500 text-black text-[10px] font-bold rounded-md hover:bg-cyan-400">
              ⏭ Next
            </button>
            <button onClick={continueToBreakpoint} className="px-2 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-md hover:bg-blue-400">
              ▶ Continue
            </button>
            <button
              onClick={() => { setStepMode(false); setHighlightLines(null); }}
              className="px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-md hover:bg-red-400"
            >
              ⏹ Stop
            </button>
          </div>
        </div>
      )}

      {/* Variables panel */}
      {isPython && (
        <div className="px-3 py-2 border-t flex-shrink-0" style={{ borderColor: "var(--theme-border)" }}>
          <div className="text-[10px] text-[var(--theme-text-muted)] terminal-text mb-2 font-bold">VARIABLES · 变量</div>
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
      )}

      {/* Grading Panel */}
      {isGrading && (
        <div className="mx-3 mb-2 px-3 py-2 rounded-lg text-xs animate-pulse flex-shrink-0" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)" }}>
          ⏳ {gradingProgress}
        </div>
      )}
      {gradeResult && !isGrading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-3 mb-2 rounded-lg border overflow-hidden flex-shrink-0"
          style={{ borderColor: gradeResult.passed ? "#22c55e" : "#ef4444" }}
        >
          <div
            className="px-3 py-2 text-xs font-bold"
            style={{
              backgroundColor: gradeResult.passed ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
              color: gradeResult.passed ? "#22c55e" : "#ef4444",
            }}
          >
            {gradeResult.passed
              ? `✅ ${gradeResult.passedTests}/${gradeResult.totalTests} passed!`
              : `❌ ${gradeResult.passedTests}/${gradeResult.totalTests} passed`}
            {gradeResult.passed && selectedExercise && !exercisesPassed.has(selectedExercise.id) && (
              <span className="ml-2 text-yellow-400">+{getXPReward(selectedExercise.difficulty)} XP 🎉</span>
            )}
          </div>
          {!gradeResult.passed && (
            <div className="px-3 py-2 space-y-1.5">
              {gradeResult.results.map((r, i) => (
                <div
                  key={i}
                  className="text-[10px] terminal-text p-1.5 rounded"
                  style={{
                    backgroundColor: r.passed ? "rgba(34,197,94,0.05)" : "rgba(239,68,68,0.05)",
                  }}
                >
                  <span className="mr-1">{r.passed ? "✅" : "❌"}</span>
                  <span style={{ color: "var(--theme-text-muted)" }}>In:</span>{" "}
                  <span className="text-cyan-400">{r.input || "(none)"}</span>
                  <span className="mx-1">→</span>
                  <span style={{ color: "var(--theme-text-muted)" }}>Exp:</span>{" "}
                  <span className="text-green-400">{r.expectedOutput}</span>
                  {!r.passed && (
                    <>
                      <span className="mx-1">→</span>
                      <span style={{ color: "var(--theme-text-muted)" }}>Got:</span>{" "}
                      <span className="text-red-400">{r.actualOutput || "(empty)"}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );

  // ─── Resize handle component ──────────────────────────────
  const ResizeHandle = ({ onMouseDown: onDown, active }: { onMouseDown: (e: React.MouseEvent) => void; active: boolean }) => (
    <div
      onMouseDown={onDown}
      className="flex-shrink-0 flex items-center justify-center group"
      style={{
        width: 6,
        cursor: "col-resize",
        backgroundColor: active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
        transition: "background-color 0.15s",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.12)"; }}
      onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)"; }}
    >
      <div className="flex flex-col gap-[3px] opacity-40 group-hover:opacity-80 transition-opacity" style={{ pointerEvents: "none" }}>
        <div className="w-[3px] h-[3px] rounded-full bg-white/60" />
        <div className="w-[3px] h-[3px] rounded-full bg-white/60" />
        <div className="w-[3px] h-[3px] rounded-full bg-white/60" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col overflow-hidden" style={{ height: "calc(100dvh - 3.5rem)" }}>
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
          {/* Mobile hamburger */}
          {isMobile && (
            <button onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="text-lg">
              {mobileSidebarOpen ? "✕" : "☰"}
            </button>
          )}
          <h1 className="text-lg font-bold">💻 Code Lab</h1>
          <span className="text-xs hidden sm:inline" style={{ color: "var(--theme-text-muted)" }}>
            {isPython ? "Python" : "C++"} IDE · 代码实验室
          </span>
          {activeTab?.type !== "exercise" && (
            <div className="flex rounded-full border overflow-hidden" style={{ borderColor: "var(--theme-border)" }}>
              {(["python", "cpp"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    if (lang === activeLanguage) return;
                    setActiveLanguage(lang);
                    if (activeTab?.type === "free") {
                      const saved = getFreeCode(lang);
                      setCode(saved || (lang === "python"
                        ? '# Write your Python code here!\nprint("Hello, World!")'
                        : '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}\n'));
                    }
                  }}
                  className="px-2.5 py-0.5 text-[11px] font-bold transition-colors"
                  style={{
                    backgroundColor: activeLanguage === lang ? "var(--color-primary)" : "transparent",
                    color: activeLanguage === lang ? "white" : "var(--theme-text-muted)",
                  }}
                >
                  {lang === "python" ? "🐍 Python" : "⚡ C++"}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Mobile view toggle */}
        {isMobile && (
          <div className="flex rounded-full border overflow-hidden" style={{ borderColor: "var(--theme-border)" }}>
            <button
              onClick={() => setMobileView("editor")}
              className="px-2 py-0.5 text-[10px] font-bold"
              style={{
                backgroundColor: mobileView === "editor" ? "var(--color-primary)" : "transparent",
                color: mobileView === "editor" ? "white" : "var(--theme-text-muted)",
              }}
            >
              📝 Editor
            </button>
            <button
              onClick={() => setMobileView("output")}
              className="px-2 py-0.5 text-[10px] font-bold"
              style={{
                backgroundColor: mobileView === "output" ? "var(--color-primary)" : "transparent",
                color: mobileView === "output" ? "white" : "var(--theme-text-muted)",
              }}
            >
              📤 Output
            </button>
          </div>
        )}
      </motion.div>

      {/* Main layout */}
      <div className="flex flex-1 min-h-0 relative">
        {/* ─── Mobile sidebar overlay ─────────────────────── */}
        {isMobile && (
          <AnimatePresence>
            {mobileSidebarOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setMobileSidebarOpen(false)}
                />
                <motion.div
                  initial={{ x: -280 }}
                  animate={{ x: 0 }}
                  exit={{ x: -280 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed left-0 top-0 bottom-0 w-[280px] z-50 flex flex-col overflow-hidden"
                  style={{ backgroundColor: "var(--theme-card-bg)", borderRight: "1px solid var(--theme-border)" }}
                >
                  <div className="flex items-center justify-between px-3 py-2 border-b" style={{ borderColor: "var(--theme-border)" }}>
                    <span className="text-sm font-bold">📂 Browser</span>
                    <button onClick={() => setMobileSidebarOpen(false)} className="text-lg">✕</button>
                  </div>
                  {sidebarContent}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}

        {/* ─── Desktop 3-column layout ───────────────────── */}
        {!isMobile ? (
          <>
            {/* Column 1: Sidebar */}
            <div
              className="flex-shrink-0 border-r flex flex-col overflow-hidden"
              style={{ width: col1Width, minWidth: 200, borderColor: "var(--theme-border)", backgroundColor: "var(--theme-card-bg)" }}
            >
              {sidebarContent}
            </div>

            {/* Resize handle 1 */}
            <ResizeHandle onMouseDown={startResize("col1")} active={isDragging === "col1"} />

            {/* Column 2: Editor */}
            <div className="flex-1 flex flex-col min-h-0 min-w-0" style={{ minWidth: 300 }}>
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
                          onClick={(e) => { e.stopPropagation(); closeTab(tab.id); }}
                          className="ml-1 opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                  {isLoading && <span className="text-[10px] text-cyan-400 animate-pulse">{loadingMsg}</span>}
                  {!stepMode ? (
                    <>
                      {activeTab?.type === "free" && (
                        <button
                          onClick={() => { setSaveAsProjectName(""); setShowSaveAsProject(true); }}
                          className="flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-md transition-colors border"
                          style={{ borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}
                        >
                          💾 Save as Project
                        </button>
                      )}
                      {isPython && (
                        <button
                          onClick={startStepMode}
                          disabled={isRunning || isLoading}
                          className="flex items-center gap-1 px-2 py-1 bg-cyan-500 text-black text-xs font-bold rounded-md hover:bg-cyan-400 disabled:opacity-50 transition-colors"
                        >
                          ⏭ Step
                        </button>
                      )}
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
                        onClick={() => { setStepMode(false); setHighlightLines(null); }}
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
                  <span className="truncate" style={{ color: "var(--theme-text-secondary)" }}>{selectedExercise.description}</span>
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="px-2 py-0.5 rounded text-[10px] flex-shrink-0"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 20%, transparent)", color: "var(--color-warning)" }}
                  >
                    💡 {showHint ? "Hide" : "Hint"}
                  </button>
                  <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="px-2 py-0.5 rounded text-[10px] border flex-shrink-0"
                    style={{ borderColor: "var(--theme-border)", color: "var(--theme-text-secondary)" }}
                  >
                    👀 {showSolution ? "Hide" : "Solution"}
                  </button>
                  <button
                    onClick={() => {
                      if (selectedExercise) {
                        clearExerciseDraft(selectedExercise.id);
                        setCode(selectedExercise.starterCode);
                      }
                    }}
                    className="px-2 py-0.5 rounded text-[10px] flex-shrink-0"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-error, #ef4444) 15%, transparent)", color: "var(--color-error, #ef4444)" }}
                  >
                    🔄 Reset
                  </button>
                </div>
              )}

              {showHint && selectedExercise && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-3 py-2 text-xs border-b flex items-center gap-2"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 8%, var(--theme-bg))", borderColor: "var(--theme-border)" }}
                >
                  <span>💡 {selectedExercise.hints[hintIndex] || "No hints available"}</span>
                  {selectedExercise.hints.length > 1 && (
                    <button
                      onClick={() => setHintIndex((i) => (i + 1) % selectedExercise.hints.length)}
                      className="text-[10px] px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 20%, transparent)", color: "var(--color-warning)" }}
                    >
                      Next hint ({hintIndex + 1}/{selectedExercise.hints.length})
                    </button>
                  )}
                </motion.div>
              )}

              {/* Editor */}
              <div className="flex-1 min-h-0 relative">
                <MonacoEditor
                  height="100%"
                  language={isPython ? "python" : "cpp"}
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute bottom-2 right-2 z-10 rounded-xl border p-4 max-w-md max-h-[70%] overflow-auto text-xs shadow-2xl"
                    style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border)" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-sm">👀 Solution · 解答</span>
                      <button onClick={() => setShowSolution(false)} className="text-red-400 text-xs hover:text-red-300">✕</button>
                    </div>
                    {selectedExercise.hints.length > 0 && !showExplanation && (
                      <div className="mb-3 space-y-1">
                        <div className="text-[10px] font-bold mb-1" style={{ color: "var(--color-warning)" }}>💡 Hints · 提示</div>
                        {selectedExercise.hints.slice(0, hintIndex + 1).map((h, i) => (
                          <motion.div key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-[11px] p-1.5 rounded" style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 8%, transparent)" }}>
                            {i + 1}. {h}
                          </motion.div>
                        ))}
                        {selectedExercise.hintsZh && selectedExercise.hintsZh.slice(0, hintIndex + 1).map((h, i) => (
                          <div key={`zh-${i}`} className="text-[10px] pl-3" style={{ color: "var(--theme-text-muted)" }}>↳ {h}</div>
                        ))}
                        {hintIndex < selectedExercise.hints.length - 1 && (
                          <button onClick={() => setHintIndex(i => i + 1)} className="text-[10px] px-2 py-0.5 rounded mt-1" style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 15%, transparent)", color: "var(--color-warning)" }}>
                            Show next hint · 下一个提示 ({hintIndex + 1}/{selectedExercise.hints.length})
                          </button>
                        )}
                      </div>
                    )}
                    <div className="mb-2">
                      <div className="text-[10px] font-bold mb-1" style={{ color: "var(--theme-text-muted)" }}>CODE · 代码</div>
                      <pre className="text-green-400 terminal-text whitespace-pre-wrap text-[11px] p-2 rounded-lg" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        {selectedExercise.solution}
                      </pre>
                    </div>
                    <button
                      onClick={() => setShowExplanation(!showExplanation)}
                      className="text-[10px] px-2.5 py-1 rounded-lg font-bold transition-colors"
                      style={{
                        backgroundColor: showExplanation ? "color-mix(in srgb, var(--color-primary) 20%, transparent)" : "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                        color: showExplanation ? "var(--color-primary)" : "var(--color-secondary)",
                      }}
                    >
                      {showExplanation ? "Hide Explanation · 隐藏解析" : "📖 Explain · 解析"}
                    </button>
                    <AnimatePresence>
                      {showExplanation && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-2 p-2 rounded-lg text-[11px] space-y-1" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 6%, transparent)" }}>
                          <div className="font-bold text-[10px]" style={{ color: "var(--color-primary)" }}>Step-by-step · 逐步解析</div>
                          {generateExplanation(selectedExercise).map((step, i) => (
                            <div key={i} style={{ color: "var(--theme-text-secondary)" }}><span className="font-bold">{i + 1}.</span> {step}</div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Resize handle 2 */}
            <ResizeHandle onMouseDown={startResize("col3")} active={isDragging === "col3"} />

            {/* Column 3: Output + Variables */}
            <div
              className="flex-shrink-0 flex flex-col overflow-hidden"
              style={{ width: col3Width, minWidth: 250, borderLeft: "1px solid var(--theme-border)" }}
            >
              {outputPanelContent}
            </div>
          </>
        ) : (
          /* ─── Mobile stacked layout ──────────────────────── */
          <div className="flex-1 flex flex-col min-h-0">
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
                    <span className="truncate max-w-[80px]">{tab.name}</span>
                    {openTabs.length > 1 && (
                      <button onClick={(e) => { e.stopPropagation(); closeTab(tab.id); }} className="ml-1 opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity">×</button>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                {isLoading && <span className="text-[10px] text-cyan-400 animate-pulse">{loadingMsg}</span>}
                {isPython && !stepMode && (
                  <button onClick={startStepMode} disabled={isRunning || isLoading} className="flex items-center gap-1 px-2 py-1 bg-cyan-500 text-black text-xs font-bold rounded-md hover:bg-cyan-400 disabled:opacity-50 transition-colors">⏭</button>
                )}
                <button onClick={runCode} disabled={isRunning || isLoading} className="flex items-center gap-1 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-md hover:bg-green-400 disabled:opacity-50 transition-colors">
                  {isRunning ? "⏳" : "▶ Run"}
                </button>
              </div>
            </div>

            {/* Exercise hint bar (mobile) */}
            {selectedExercise && activeTab?.type === "exercise" && (
              <div className="flex items-center gap-2 px-3 py-1.5 border-b text-xs overflow-x-auto" style={{ borderColor: "var(--theme-border)", backgroundColor: "var(--theme-card-bg)" }}>
                <span className="truncate" style={{ color: "var(--theme-text-secondary)" }}>{selectedExercise.description}</span>
                <button onClick={() => setShowHint(!showHint)} className="px-2 py-0.5 rounded text-[10px] flex-shrink-0" style={{ backgroundColor: "color-mix(in srgb, var(--color-warning) 20%, transparent)", color: "var(--color-warning)" }}>💡</button>
                <button onClick={() => setShowSolution(!showSolution)} className="px-2 py-0.5 rounded text-[10px] border flex-shrink-0" style={{ borderColor: "var(--theme-border)", color: "var(--theme-text-secondary)" }}>👀</button>
                <button onClick={() => { if (selectedExercise) { clearExerciseDraft(selectedExercise.id); setCode(selectedExercise.starterCode); } }} className="px-2 py-0.5 rounded text-[10px] flex-shrink-0" style={{ color: "var(--color-error, #ef4444)" }}>🔄</button>
              </div>
            )}

            {/* Mobile content area */}
            {mobileView === "editor" ? (
              <div className="flex-1 min-h-0 relative">
                <MonacoEditor
                  height="100%"
                  language={isPython ? "python" : "cpp"}
                  theme="vs-dark"
                  value={code}
                  onChange={(v) => setCode(v || "")}
                  onMount={handleEditorMount}
                  options={{
                    fontSize: 13,
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
              </div>
            ) : (
              <div className="flex-1 min-h-0 overflow-auto">
                {outputPanelContent}
              </div>
            )}
          </div>
        )}
      </div>

      {/* New Project Dialog */}
      <AnimatePresence>
        {showNewProject && <NewProjectDialog onClose={() => setShowNewProject(false)} onCreate={handleNewProject} />}
      </AnimatePresence>
      <SignUpModal open={showSignUpModal} onClose={() => setShowSignUpModal(false)} />

      {/* Save as Project Dialog */}
      <AnimatePresence>
        {showSaveAsProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setShowSaveAsProject(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="rounded-2xl border p-6 max-w-sm w-full"
              style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold mb-4">💾 Save as Project · 保存为项目</h3>
              <input
                type="text"
                value={saveAsProjectName}
                onChange={(e) => setSaveAsProjectName(e.target.value)}
                placeholder="Project name · 项目名称"
                className="w-full px-3 py-2 rounded-lg border text-sm mb-4"
                style={{
                  backgroundColor: "var(--theme-bg)",
                  borderColor: "var(--theme-border)",
                  color: "var(--theme-text-primary)",
                }}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const name = saveAsProjectName.trim() || "Untitled";
                    handleNewProject(name, code, activeLanguage);
                    setShowSaveAsProject(false);
                  }
                }}
              />
              <div className="flex gap-2 justify-end">
                <button onClick={() => setShowSaveAsProject(false)} className="px-4 py-2 text-sm rounded-lg" style={{ color: "var(--theme-text-secondary)" }}>
                  Cancel · 取消
                </button>
                <button
                  onClick={() => {
                    const name = saveAsProjectName.trim() || "Untitled";
                    handleNewProject(name, code, activeLanguage);
                    setShowSaveAsProject(false);
                  }}
                  className="px-4 py-2 text-sm rounded-lg font-bold text-white"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Save · 保存
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Celebration overlay */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center"
          >
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{ opacity: 0, x: (Math.random() - 0.5) * 600, y: (Math.random() - 0.5) * 600, scale: Math.random() * 1.5, rotate: Math.random() * 720 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute w-3 h-3 rounded-sm"
                style={{ backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b", "#ec4899", "#8b5cf6", "#ef4444"][i % 6] }}
              />
            ))}
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ type: "spring", damping: 10 }} className="text-center">
              <div className="text-6xl mb-2">🎉</div>
              <div className="text-2xl font-bold text-white drop-shadow-lg">All Tests Passed!</div>
              <div className="text-lg text-white/80 drop-shadow">太棒了！全部通过！</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

}

// end of file
