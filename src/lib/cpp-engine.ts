// C++ Execution Engine via Judge0 API
// Calls our Next.js API route which proxies to Judge0

export interface CppExecutionResult {
  output: string;
  error: string | null;
  status: 'success' | 'error' | 'timeout' | 'compile_error';
  compileError?: string;
  time?: string;
  memory?: number;
}

export async function executeCpp(
  code: string,
  input?: string
): Promise<CppExecutionResult> {
  try {
    const res = await fetch('/api/execute-cpp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, input }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Request failed' }));
      if (res.status === 429) {
        return {
          output: '',
          error: '⏱ Rate limit exceeded. Please wait a moment.\n请求过于频繁，请稍后再试。',
          status: 'error',
        };
      }
      if (res.status === 503) {
        return {
          output: '',
          error: err.error || '🔑 Judge0 API not configured.\nJudge0 API 未配置。',
          status: 'error',
        };
      }
      return {
        output: '',
        error: err.error || `Server error (${res.status})`,
        status: 'error',
      };
    }

    return await res.json();
  } catch (e) {
    return {
      output: '',
      error: `Network error: ${e instanceof Error ? e.message : 'unknown'}\n网络错误，请检查连接。`,
      status: 'error',
    };
  }
}
