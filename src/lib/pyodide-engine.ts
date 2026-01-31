// Pyodide Python runtime integration
// Lazy-loads Pyodide for real Python execution in the browser

import { getTurtleMockPython } from "./turtle-graphics";

export interface VariableDetail {
  name: string;
  value: string;
  type: string;
  scope: "global" | "local";
  scopeName?: string;
}

export interface PyodideResult {
  output: string;
  error: string | null;
  variables: Record<string, string>;
  variableDetails: VariableDetail[];
  hasTurtle?: boolean;
  collectedInputs?: string[];
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
    onProgress?.("正在加载 Python 引擎... ⚙️");
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
    return { output: "", error: "Python 引擎还没加载好，请稍等...", variables: {}, variableDetails: [] };
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

    // Mock input() - replay known values, prompt for new ones, collect all
    if (inputValues && inputValues.length > 0) {
      const inputJson = JSON.stringify(inputValues);
      py.runPython(`
import js
_input_values = ${inputJson}
_input_idx = 0
_all_inputs = list(_input_values)  # copy
def input(prompt=""):
    global _input_idx
    if prompt:
        print(prompt, end="")
    if _input_idx < len(_input_values):
        val = _input_values[_input_idx]
        _input_idx += 1
        print(val)
        return val
    # Need new input - prompt user
    result = js.prompt(prompt or "请输入 (Enter a value):")
    if result is None:
        result = ""
    else:
        result = str(result)
    _all_inputs.append(result)
    print(result)
    return result
`);
    } else {
      // Use browser prompt() for input when no values pre-provided
      py.runPython(`
import js
_all_inputs = []
def input(prompt=""):
    if prompt:
        print(prompt, end="")
    result = js.prompt(prompt or "请输入 (Enter a value):")
    if result is None:
        result = ""
    else:
        result = str(result)
    _all_inputs.append(result)
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

    // Collect variables with type info
    py.runPython(`
import json as _json
_user_vars = {}
_user_vars_detail = []
_skip_names = {'sys', 'io', 'input', 'json', 'js', 'types', 'turtle', '_json', '_turtle_mod'}
for _k, _v in dict(globals()).items():
    if not _k.startswith('_') and _k not in _skip_names:
        try:
            _t = type(_v).__name__
            if _t in ('module', 'function', 'builtin_function_or_method', 'type'):
                continue
            if isinstance(_v, (int, float, str, bool)):
                _user_vars[_k] = str(_v)
                _user_vars_detail.append({"name": _k, "value": str(_v), "type": _t, "scope": "global"})
            elif isinstance(_v, list):
                _sv = _json.dumps(_v) if len(str(_v)) < 200 else str(_v)[:100]
                _user_vars[_k] = str(_v)[:50]
                _user_vars_detail.append({"name": _k, "value": _sv, "type": "list", "scope": "global"})
            elif isinstance(_v, dict):
                _sv = _json.dumps(_v) if len(str(_v)) < 200 else str(_v)[:100]
                _user_vars[_k] = str(_v)[:50]
                _user_vars_detail.append({"name": _k, "value": _sv, "type": "dict", "scope": "global"})
            elif isinstance(_v, tuple):
                _user_vars[_k] = str(_v)[:50]
                _user_vars_detail.append({"name": _k, "value": str(_v), "type": "tuple", "scope": "global"})
            elif _v is None:
                _user_vars[_k] = "None"
                _user_vars_detail.append({"name": _k, "value": "None", "type": "NoneType", "scope": "global"})
        except:
            pass
_vars_json = _json.dumps(_user_vars)
_vars_detail_json = _json.dumps(_user_vars_detail)
`);
    const varsJson = py.runPython("_vars_json") as string;
    const varsDetailJson = py.runPython("_vars_detail_json") as string;
    const variables = JSON.parse(varsJson);
    const variableDetails = JSON.parse(varsDetailJson);

    // Collect all inputs provided during this run
    let collectedInputs: string[] = [];
    try {
      const inputsJson = py.runPython("_json.dumps(_all_inputs)") as string;
      collectedInputs = JSON.parse(inputsJson);
    } catch { /* no inputs */ }

    return { output, error: null, variables, variableDetails, hasTurtle, collectedInputs };
  } catch (e) {
    // Get partial output captured before the error
    const partialOutput = _stdoutLines.join("\n").replace(/\n$/, "");

    // Try to collect inputs even on error
    let collectedInputs: string[] = [];
    try {
      const inputsJson = py.runPython("_json.dumps(_all_inputs)") as string;
      collectedInputs = JSON.parse(inputsJson);
    } catch { /* no inputs */ }

    const errMsg = e instanceof Error ? e.message : String(e);
    console.log("[pyodide] error:", errMsg, "partial output:", partialOutput);
    const errorText = translateError(errMsg);
    const fullOutput = partialOutput ? partialOutput + "\n\n" + errorText : errorText;
    return { output: "", error: fullOutput, variables: {}, variableDetails: [], hasTurtle, collectedInputs };
  }
}

export interface TraceStep {
  line: number;         // 0-indexed line number (first line of this statement)
  endLine: number;      // 0-indexed last line of this statement
  output: string;       // cumulative output up to this point
  variables: Record<string, string>;
  variableDetails: VariableDetail[];
}

/**
 * Execute code with AST-injected tracing.
 * Injects _trace_line(N) before each statement (recursively into loops, ifs, etc.),
 * records every executed line with cumulative output and variable snapshots.
 */
export async function traceExecution(
  code: string,
  inputValues?: string[]
): Promise<{ steps: TraceStep[]; error: string | null; collectedInputs?: string[] }> {
  if (!pyodideInstance) {
    return { steps: [], error: "Python 引擎还没加载好，请稍等..." };
  }

  const py = pyodideInstance as PyodideInterface;

  try {
    _stdoutLines = [];

    // Set up execution namespace with input mock
    py.runPython(`_exec_globals = {"__builtins__": __builtins__}`);

    if (inputValues && inputValues.length > 0) {
      const inputJson = JSON.stringify(inputValues);
      py.runPython(`
import js, json, sys, io
_input_values = ${inputJson}
_input_idx = 0
_all_inputs = list(_input_values)
def _mock_input(prompt=""):
    global _input_idx
    if prompt:
        print(prompt, end="")
    if _input_idx < len(_input_values):
        val = _input_values[_input_idx]
        _input_idx += 1
        print(val)
        return val
    result = js.prompt(prompt or "请输入 (Enter a value):")
    if result is None:
        result = ""
    else:
        result = str(result)
    _all_inputs.append(result)
    print(result)
    return result
_exec_globals['input'] = _mock_input
`);
    } else {
      py.runPython(`
import js, json, sys, io
_all_inputs = []
def _mock_input(prompt=""):
    if prompt:
        print(prompt, end="")
    result = js.prompt(prompt or "请输入 (Enter a value):")
    if result is None:
        result = ""
    else:
        result = str(result)
    _all_inputs.append(result)
    print(result)
    return result
_exec_globals['input'] = _mock_input
`);
    }

    // Use AST code injection to trace line-by-line execution.
    // This is more reliable than sys.settrace() in Pyodide (WebAssembly).
    // We inject _trace_line(N) calls before each statement in every body,
    // which records the line number, captures stdout and variables.
    py.runPython(`
import sys, json, io, ast, copy

_trace_steps = []
_trace_output_buf = io.StringIO()
_trace_error = None
_skip_vars = {'sys','io','input','json','js','types','turtle','math','random','time','ast','copy','_mock_input','__builtins__','_trace_line','_capture_trace_vars'}

def _capture_trace_vars(ns):
    _vars = {}
    _details = []
    for k, v in ns.items():
        if k.startswith('_') or k in _skip_vars:
            continue
        try:
            t = type(v).__name__
            if t in ('module', 'function', 'builtin_function_or_method', 'type'):
                continue
            if isinstance(v, (int, float, str, bool)):
                _vars[k] = str(v)
                _details.append({"name": k, "value": str(v), "type": t, "scope": "global", "scopeName": ""})
            elif isinstance(v, (list, tuple)):
                _vars[k] = str(v)[:100]
                _details.append({"name": k, "value": str(v)[:200], "type": t, "scope": "global", "scopeName": ""})
            elif isinstance(v, dict):
                _vars[k] = str(v)[:100]
                _details.append({"name": k, "value": str(v)[:200], "type": "dict", "scope": "global", "scopeName": ""})
            elif v is None:
                _vars[k] = "None"
                _details.append({"name": k, "value": "None", "type": "NoneType", "scope": "global", "scopeName": ""})
        except:
            pass
    return _vars, _details

def _trace_line(n):
    """Called before each statement. n is 1-indexed line number."""
    output_so_far = _trace_output_buf.getvalue().rstrip("\\n")
    _vars, _details = _capture_trace_vars(_exec_globals)
    _trace_steps.append({
        "line": n - 1,
        "output": output_so_far,
        "vars": _vars,
        "details": _details
    })

_exec_globals['_trace_line'] = _trace_line
_exec_globals['_capture_trace_vars'] = _capture_trace_vars

# AST transformer: inject _trace_line(lineno) before each statement in every body
class _LineInjector(ast.NodeTransformer):
    def _inject_body(self, stmts):
        new_stmts = []
        for stmt in stmts:
            # Insert trace call before this statement
            trace_call = ast.Expr(value=ast.Call(
                func=ast.Name(id='_trace_line', ctx=ast.Load()),
                args=[ast.Constant(value=stmt.lineno)],
                keywords=[]
            ))
            ast.copy_location(trace_call, stmt)
            ast.copy_location(trace_call.value, stmt)
            new_stmts.append(trace_call)
            new_stmts.append(self.visit(stmt))
        return new_stmts

    def visit_Module(self, node):
        node.body = self._inject_body(node.body)
        return node

    def visit_FunctionDef(self, node):
        node.body = self._inject_body(node.body)
        # Also handle decorators, defaults etc
        self.generic_visit(node)
        return node

    visit_AsyncFunctionDef = visit_FunctionDef

    def visit_For(self, node):
        node.body = self._inject_body(node.body)
        if node.orelse:
            node.orelse = self._inject_body(node.orelse)
        self.generic_visit(node)
        return node

    visit_While = visit_For

    def visit_If(self, node):
        node.body = self._inject_body(node.body)
        if node.orelse:
            node.orelse = self._inject_body(node.orelse)
        self.generic_visit(node)
        return node

    def visit_With(self, node):
        node.body = self._inject_body(node.body)
        self.generic_visit(node)
        return node

    visit_AsyncWith = visit_With

    def visit_Try(self, node):
        node.body = self._inject_body(node.body)
        for handler in node.handlers:
            handler.body = self._inject_body(handler.body)
        if node.orelse:
            node.orelse = self._inject_body(node.orelse)
        if hasattr(node, 'finalbody') and node.finalbody:
            node.finalbody = self._inject_body(node.finalbody)
        self.generic_visit(node)
        return node

    def visit_TryStar(self, node):
        node.body = self._inject_body(node.body)
        for handler in node.handlers:
            handler.body = self._inject_body(handler.body)
        if node.orelse:
            node.orelse = self._inject_body(node.orelse)
        if hasattr(node, 'finalbody') and node.finalbody:
            node.finalbody = self._inject_body(node.finalbody)
        self.generic_visit(node)
        return node

    def visit_ClassDef(self, node):
        node.body = self._inject_body(node.body)
        self.generic_visit(node)
        return node

# Redirect stdout to our buffer for tracing
_orig_stdout = sys.stdout
sys.stdout = _trace_output_buf

try:
    _tree = ast.parse(${JSON.stringify(code)})
    _tree = _LineInjector().visit(_tree)
    ast.fix_missing_locations(_tree)
    _compiled = compile(_tree, '<exec>', 'exec')
    exec(_compiled, _exec_globals)
except Exception as _e:
    _trace_error = str(_e)
finally:
    sys.stdout = _orig_stdout

# Capture final output and final variable state
_final_output = _trace_output_buf.getvalue().rstrip("\\n")
_final_vars, _final_details = _capture_trace_vars(_exec_globals)

_trace_steps_json = json.dumps(_trace_steps)
_trace_error_json = json.dumps(_trace_error)
_trace_final_output = json.dumps(_final_output)
_trace_final_vars = json.dumps(_final_vars)
_trace_final_details = json.dumps(_final_details)
`);

    const stepsJson = py.runPython("_trace_steps_json") as string;
    const traceError = JSON.parse(py.runPython("_trace_error_json") as string);
    const finalOutput = JSON.parse(py.runPython("_trace_final_output") as string);
    const finalVars: Record<string, string> = JSON.parse(py.runPython("_trace_final_vars") as string);
    const finalDetails: VariableDetail[] = JSON.parse(py.runPython("_trace_final_details") as string);
    const rawSteps: { line: number; output: string; vars: Record<string, string>; details: VariableDetail[] }[] = JSON.parse(stepsJson);

    // Convert raw trace steps to TraceStep format
    // _trace_line fires BEFORE each statement, so step[i] has pre-execution state.
    // Shift: step[i] gets output/vars from step[i+1] (post-execution of line i).
    // Last step gets final output/vars (after all code completes).
    const steps: TraceStep[] = [];
    for (let i = 0; i < rawSteps.length; i++) {
      const nextOutput = i + 1 < rawSteps.length ? rawSteps[i + 1].output : finalOutput;
      const nextVars = i + 1 < rawSteps.length ? rawSteps[i + 1].vars : finalVars;
      const nextDetails = i + 1 < rawSteps.length ? rawSteps[i + 1].details : finalDetails;
      steps.push({
        line: rawSteps[i].line,
        endLine: rawSteps[i].line,
        output: nextOutput,
        variables: nextVars,
        variableDetails: nextDetails,
      });
    }

    // If there was a trace error, update the last step or add an error step
    if (traceError) {
      const errorText = translateError(traceError);
      if (steps.length > 0) {
        const last = steps[steps.length - 1];
        last.output = last.output ? last.output + "\n\n" + errorText : errorText;
      } else {
        steps.push({
          line: 0,
          endLine: 0,
          output: errorText,
          variables: {},
          variableDetails: [],
        });
      }
    }

    // Collect inputs
    let collectedInputs: string[] = [];
    try {
      collectedInputs = JSON.parse(py.runPython("json.dumps(_all_inputs)") as string);
    } catch { /* no inputs */ }

    // Re-emit the captured output to Pyodide's normal stdout so the output panel shows it
    if (finalOutput) {
      _stdoutLines = finalOutput.split("\n");
    }

    return { steps, error: traceError ? translateError(traceError) : null, collectedInputs };
  } catch (e) {
    const partialOutput = _stdoutLines.join("\n").replace(/\n$/, "");
    let collectedInputs: string[] = [];
    try { collectedInputs = JSON.parse(py.runPython("json.dumps(_all_inputs)") as string); } catch {}

    const errMsg = e instanceof Error ? e.message : String(e);
    const errorText = translateError(errMsg);
    const fullOutput = partialOutput ? partialOutput + "\n\n" + errorText : errorText;
    return { steps: [], error: fullOutput, collectedInputs };
  }
}

// Keep for backward compat but not used for stepping anymore
export function parseCodeIntoSteps(code: string): { startLine: number; endLine: number; code: string }[] {
  const lines = code.split("\n");
  const steps: { startLine: number; endLine: number; code: string }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed !== "" && !trimmed.startsWith("#")) {
      steps.push({ startLine: i, endLine: i, code: lines.slice(0, i + 1).join("\n") });
    }
  }
  return steps;
}
