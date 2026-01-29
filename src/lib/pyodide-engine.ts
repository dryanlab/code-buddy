// Pyodide Python runtime integration
// Lazy-loads Pyodide for real Python execution in the browser

export interface PyodideResult {
  output: string;
  error: string | null;
  variables: Record<string, string>;
}

let pyodideInstance: unknown = null;
let loadingPromise: Promise<unknown> | null = null;

type PyodideInterface = {
  runPythonAsync: (code: string) => Promise<unknown>;
  globals: { get: (key: string) => unknown; toJs: () => Map<string, unknown> };
  runPython: (code: string) => unknown;
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
      .loadPyodide as (config: Record<string, string>) => Promise<unknown>;
    pyodideInstance = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/",
    });
    onProgress?.("Python 准备就绪！ ✅");
  })();

  await loadingPromise;
}

// Translate Python errors to kid-friendly Chinese
function translateError(error: string): string {
  if (error.includes("SyntaxError")) {
    const match = error.match(/SyntaxError: (.+)/);
    const detail = match?.[1] || "";
    if (detail.includes("EOL while scanning"))
      return "❌ 语法错误：字符串没有正确关闭，检查引号是否配对！";
    if (detail.includes("unexpected EOF"))
      return "❌ 语法错误：代码没写完，是不是少了什么？";
    if (detail.includes("invalid syntax"))
      return "❌ 语法错误：Python 看不懂这行代码，检查拼写和符号！";
    return `❌ 语法错误：Python 看不懂你的代码 —— ${detail}`;
  }
  if (error.includes("NameError")) {
    const match = error.match(/name '(\w+)' is not defined/);
    if (match)
      return `❌ 名字错误：Python 不认识 '${match[1]}'，是不是拼错了，或者忘记定义它了？`;
    return "❌ 名字错误：用了一个 Python 不认识的名字";
  }
  if (error.includes("TypeError")) {
    if (error.includes("unsupported operand"))
      return "❌ 类型错误：你试图把不同类型的东西放在一起运算（比如数字和文字），用 str() 或 int() 转换一下！";
    if (error.includes("can only concatenate"))
      return '❌ 类型错误：不能把文字和数字直接拼接，用 str() 把数字变成文字！比如 str(42)';
    return `❌ 类型错误：数据类型不对 —— ${error.match(/TypeError: (.+)/)?.[1] || ""}`;
  }
  if (error.includes("IndexError")) {
    return "❌ 索引错误：你访问了列表中不存在的位置，记住列表是从 0 开始数的！";
  }
  if (error.includes("ZeroDivisionError")) {
    return "❌ 除零错误：不能除以 0！数学老师也会告诉你这不行 😄";
  }
  if (error.includes("IndentationError")) {
    return "❌ 缩进错误：Python 对空格很讲究！if/for/while 下面的代码要缩进（按 Tab 或 4 个空格）";
  }
  if (error.includes("ValueError")) {
    return `❌ 值错误：给的值不对 —— ${error.match(/ValueError: (.+)/)?.[1] || ""}`;
  }
  // fallback
  const lastLine = error.trim().split("\n").pop() || error;
  return `❌ 错误：${lastLine}`;
}

export async function runPython(
  code: string,
  inputValues?: string[]
): Promise<PyodideResult> {
  if (!pyodideInstance) {
    return { output: "", error: "Python 引擎还没加载好，请稍等...", variables: {} };
  }

  const py = pyodideInstance as PyodideInterface;
  const outputLines: string[] = [];
  let inputIndex = 0;

  try {
    // Set up stdout/stderr capture and input mock
    py.runPython(`
import sys, io

class _CaptureOut(io.StringIO):
    def __init__(self, callback):
        super().__init__()
        self._cb = callback
    def write(self, s):
        if s and s != '\\n':
            self._cb(s)
        elif s == '\\n':
            self._cb('\\n')
        return len(s)

_output_lines = []
def _capture(s):
    _output_lines.append(s)

sys.stdout = _CaptureOut(_capture)
sys.stderr = _CaptureOut(_capture)
`);

    // Mock input() if values provided
    if (inputValues && inputValues.length > 0) {
      const inputJson = JSON.stringify(inputValues);
      py.runPython(`
_input_values = ${inputJson}
_input_idx = 0
_orig_input = input
def input(prompt=""):
    global _input_idx
    if prompt:
        _output_lines.append(prompt)
    if _input_idx < len(_input_values):
        val = _input_values[_input_idx]
        _input_idx += 1
        _output_lines.append(val + "\\n")
        return val
    return ""
`);
    }

    // Run user code
    await py.runPythonAsync(code);

    // Collect output
    const rawOutput = py.runPython(`"".join(_output_lines)`) as string;
    const output = rawOutput.replace(/\n$/, "");

    // Collect variables (simple types only)
    py.runPython(`
import json as _json
_user_vars = {}
for _k, _v in dict(globals()).items():
    if not _k.startswith('_') and _k not in ('sys', 'io', 'input', 'json'):
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

    // Cleanup
    py.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);

    return { output, error: null, variables };
  } catch (e) {
    // Cleanup
    try {
      py.runPython(`
import sys
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);
    } catch {}

    const errMsg = e instanceof Error ? e.message : String(e);
    return { output: outputLines.join(""), error: translateError(errMsg), variables: {} };
  }
}
