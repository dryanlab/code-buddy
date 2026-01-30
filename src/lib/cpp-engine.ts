// C++ execution via Piston API · C++ 执行引擎
// Calls /api/execute-cpp endpoint

export interface CppExecutionResult {
  output: string;
  error: string | null;
  status: string;
  compileError?: string;
  time?: string;
  memory?: number;
}

export async function runCpp(
  code: string,
  input?: string
): Promise<CppExecutionResult> {
  const res = await fetch("/api/execute-cpp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, input }),
  });
  return res.json();
}

/** @deprecated Use runCpp instead */
export const executeCpp = runCpp;
