// Pyodide Python runtime integration
// Lazy-loads Pyodide for real Python execution in the browser

import { getTurtleMockPython } from "./turtle-graphics";

export interface PyodideResult {
  output: string;
  error: string | null;
  variables: Record<string, string>;
  hasTurtle?: boolean;
}

let pyodideInstance: unknown = null;
let loadingPromise: Promise<unknown> | null = null;
let turtleMockInstalled = false;

// Global output buffer for Pyodide stdout/stderr callbacks
let _stdoutLines: string[] = [];

type PyodideInterface = {
  runPythonAsync: (code: string) => Promise<unknown>;
  globals: { get: (key: string) => unknown; toJs: () => Map<string, unknown> };
  runPython: (code: string) => unknown;
  setStdout: (opts: { batched: (text: string) => void }) => void;
  setStderr: (opts: { batched: (text: string) => void }) => void;
};

export function isPyodideLoaded(): boolean {
  return pyodideInstance !== null;
}

export async function loadPyodideEngine(
  onProgress?: (msg: string) => void
): Promise<void> {
  if (pyodideInstance) return;
  if (loadingPromise) {
    await loadingPromise;
    return;
  }

  loadingPromise = (async () => {
    onProgress?.("正在加载 Python 引擎... 🐍");
    // dynamically load pyodide from CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js";
    document.head.appendChild(script);

    await new Promise<void>((resolve, reject) => {
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Pyodide script"));
    });

    onProgress?.("正在初始化 Python... ⚙️");
    const loadPyodide = (window as unknown as Record<string, unknown>)
      .loadPyodide as (config: Record<string, unknown>) => Promise<unknown>;
    pyodideInstance = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/",
      stdout: (text: string) => { _stdoutLines.push(text); },
      stderr: (text: string) => { _stdoutLines.push(text); },
    });
    onProgress?.("Python 准备就绪！ ✅");
  })();

  await loadingPromise;
}

// Unsupported modules that need friendly messages
const UNSUPPORTED_MODULES: Record<string, string> = {
  tkinter: "🖼️ tkinter (图形界面库) 在浏览器中不可用。\n💡 提示：可以在本地安装 Python 后使用 tkinter，或尝试用 turtle 模块画图！",
  pygame: "🎮 pygame (游戏库) 在浏览器中不可用。\n💡 提示：可以在本地安装 Python 和 pygame 来制作游戏！",
  cv2: "📷 OpenCV (cv2) 在浏览器中不可用。\n💡 提示：图像处理需要在本地 Python 环境中运行。",
  PIL: "🖼️ Pillow (PIL) 在浏览器中不可用。\n💡 提示：图像处理需要在本地 Python 环境中运行。",
  matplotlib: "📊 matplotlib 在浏览器中不可用。\n💡 提示：数据可视化可以在本地 Python 或 Google Colab 中使用。",
  numpy: "🔢 正在加载 numpy... 这可能需要一点时间。",
  pandas: "📊 pandas 在浏览器中可能加载较慢或不可用。",
  requests: "🌐 requests 在浏览器中不可用（浏览器有安全限制）。\n💡 提示：网络请求需要在本地 Python 中运行。",
  socket: "🔌 socket 在浏览器中不可用。\n💡 提示：网络编程需要在本地 Python 中运行。",
  os: "💻 os 模块的部分功能在浏览器中受限。",
  subprocess: "⚙️ subprocess 在浏览器中不可用。\n💡 提示：系统命令需要在本地 Python 中运行。",
};

// Check if code uses unsupported modules (excluding turtle which we mock)
function checkUnsupportedModules(code: string): string | null {
  const importRegex = /(?:^|\n)\s*(?:import|from)\s+(\w+)/g;
  let match;
  const warnings: string[] = [];
  
  while ((match = importRegex.exec(code)) !== null) {
    const moduleName = match[1];
    if (moduleName === "turtle") continue; // We handle turtle!
    if (UNSUPPORTED_MODULES[moduleName]) {
      warnings.push(UNSUPPORTED_MODULES[moduleName]);
    }
  }
  
  return warnings.length > 0 ? warnings.join("\n\n") : null;
}

// Detect if code uses turtle
function usesTurtle(code: string): boolean {
  return /(?:^|\n)\s*(?:import\s+turtle|from\s+turtle\s+import)/.test(code);
}

// Detect input() calls and extract prompts
function detectInputCalls(code: string): string[] {
  const prompts: string[] = [];
  const inputRegex = /input\s*\(\s*(?:["']([^"']*)["'])?\s*\)/g;
  let match;
  while ((match = inputRegex.exec(code)) !== null) {
    prompts.push(match[1] || "请输入 (Enter value):");
  }
  return prompts;
}

// Translate Python errors: show original error + kid-friendly Chinese hint
function translateError(error: string): string {
  // Extract the Python traceback (keep it readable)
  const lines = error.trim().split("\n");
  // Find the last meaningful error line
  const errorLine = lines.filter(l => l.match(/Error:|Exception:/)).pop() || lines[lines.length - 1] || error;
  
  // Build: original error first, then Chinese hint
  let hint = "";

  // Check for module import errors specifically
  const moduleMatch = error.match(/ModuleNotFoundError: No module named '(\w+)'/);
  if (moduleMatch) {
    const mod = moduleMatch[1];
    if (UNSUPPORTED_MODULES[mod]) {
      return UNSUPPORTED_MODULES[mod];
    }
    hint = `💡 这个模块在浏览器中可能不可用。试试在本地 Python 环境中运行！`;
  } else if (error.includes("SyntaxError")) {
    hint = "💡 语法错误：检查拼写、引号配对、冒号和缩进！";
  } else if (error.includes("NameError")) {
    const match = error.match(/name '(\w+)' is not defined/);
    hint = match
      ? `💡 Python 不认识 '${match[1]}'，是不是拼错了，或者忘记定义它了？`
      : "💡 用了一个 Python 不认识的名字，检查变量是否定义了。";
  } else if (error.includes("TypeError")) {
    hint = "💡 类型错误：不同类型的数据不能直接运算，用 str()、int()、float() 转换一下！";
  } else if (error.includes("IndexError")) {
    hint = "💡 索引错误：访问了列表中不存在的位置，记住列表是从 0 开始数的！";
  } else if (error.includes("ZeroDivisionError")) {
    hint = "💡 不能除以 0！检查除数是否为零。";
  } else if (error.includes("IndentationError")) {
    hint = "💡 Python 对空格很讲究！if/for/while 下面的代码要缩进（按 Tab 或 4 个空格）";
  } else if (error.includes("ValueError")) {
    hint = "💡 给的值不对，检查数据类型是否匹配。";
  } else if (error.includes("RecursionError")) {
    hint = "💡 函数调用自己太多次了！检查是否有正确的停止条件（base case）。";
  } else if (error.includes("KeyError")) {
    hint = "💡 字典中找不到这个键，检查键名是否拼写正确！";
  } else if (error.includes("AttributeError")) {
    hint = "💡 对象没有这个属性或方法，检查拼写和对象类型。";
  }

  // Show original Python error + Chinese hint
  const original = error.trim();
  return hint ? `${original}\n\n${hint}` : original;
}

async function installTurtleMock(py: PyodideInterface): Promise<void> {
  if (turtleMockInstalled) return;
  
  const turtleCode = getTurtleMockPython();
  
  // Register the turtle mock as a real Python module
  py.runPython(`
import sys
import types

# Create turtle module
_turtle_mod = types.ModuleType("turtle")
sys.modules["turtle"] = _turtle_mod
`);

  // Execute turtle mock code within the module namespace
  py.runPython(`
exec(${JSON.stringify(turtleCode)}, sys.modules["turtle"].__dict__)
`);
  
  turtleMockInstalled = true;
}

export async function runPython(
  code: string,
  inputValues?: string[]
): Promise<PyodideResult> {
  if (!pyodideInstance) {
    return { output: "", error: "Python 引擎还没加载好，请稍等...", variables: {} };
  }

  const py = pyodideInstance as PyodideInterface;
  const hasTurtle = usesTurtle(code);

  // Check for unsupported modules early (but don't block - let it try)
  const moduleWarning = checkUnsupportedModules(code);

  try {
    // Install turtle mock if needed
    if (hasTurtle) {
      await installTurtleMock(py);
    }

    // Clear the global output buffer
    _stdoutLines = [];
    
    // Set up input mock
    py.runPython(`
import sys
`);

    // Mock input() - use provided values or prompt via JS
    if (inputValues && inputValues.length > 0) {
      const inputJson = JSON.stringify(inputValues);
      py.runPython(`
_input_values = ${inputJson}
_input_idx = 0
def input(prompt=""):
    global _input_idx
    if prompt:
        print(prompt, end="")
    if _input_idx < len(_input_values):
        val = _input_values[_input_idx]
        _input_idx += 1
        print(val)
        return val
    return ""
`);
    } else {
      // Use browser prompt() for input when no values pre-provided
      py.runPython(`
import js

def input(prompt=""):
    if prompt:
        print(prompt, end="")
    result = js.prompt(prompt or "请输入 (Enter a value):")
    if result is None:
        result = ""
    else:
        result = str(result)
    print(result)
    return result
`);
    }

    // Run user code
    const returnVal = await py.runPythonAsync(code);

    // Collect output from global buffer (captured by Pyodide stdout callback)
    const rawOutput = _stdoutLines.join("\n");
    console.log("[pyodide] captured lines:", _stdoutLines.length, "returnVal:", returnVal);
    let output = rawOutput.replace(/\n$/, "");
    
    // Fallback: if no captured output but code had print(), something went wrong
    if (!output && returnVal !== undefined && returnVal !== null) {
      output = String(returnVal);
    }

    // Prepend module warning if any
    if (moduleWarning) {
      output = moduleWarning + "\n\n" + output;
    }

    // Collect variables (simple types only)
    py.runPython(`
import json as _json
_user_vars = {}
for _k, _v in dict(globals()).items():
    if not _k.startswith('_') and _k not in ('sys', 'io', 'input', 'json', 'js', 'types'):
        try:
            if isinstance(_v, (int, float, str, bool)):
                _user_vars[_k] = str(_v)
            elif isinstance(_v, (list, tuple)):
                _user_vars[_k] = str(_v)[:50]
        except:
            pass
_vars_json = _json.dumps(_user_vars)
`);
    const varsJson = py.runPython("_vars_json") as string;
    const variables = JSON.parse(varsJson);

    return { output, error: null, variables, hasTurtle };
  } catch (e) {
    // Get partial output captured before the error
    const partialOutput = _stdoutLines.join("\n").replace(/\n$/, "");

    const errMsg = e instanceof Error ? e.message : String(e);
    console.log("[pyodide] error:", errMsg, "partial output:", partialOutput);
    const errorText = translateError(errMsg);
    const fullOutput = partialOutput ? partialOutput + "\n\n" + errorText : errorText;
    return { output: "", error: fullOutput, variables: {}, hasTurtle };
  }
}
