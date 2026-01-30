import { NextRequest, NextResponse } from 'next/server';

const JUDGE0_API_URL = process.env.JUDGE0_API_URL || 'https://judge0-ce.p.rapidapi.com';
const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY || '';

// Simple in-memory rate limiter: sessionId -> timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(sessionId: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(sessionId) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT) return false;
  timestamps.push(now);
  rateLimitMap.set(sessionId, timestamps);
  return true;
}

// Map Judge0 status id to our status
function mapStatus(statusId: number): CppExecutionResult['status'] {
  // 3 = Accepted, 6 = Compilation Error, 5 = Time Limit Exceeded
  // 4 = Wrong Answer (still ran), 7-12 = runtime errors
  if (statusId === 3) return 'success';
  if (statusId === 6) return 'compile_error';
  if (statusId === 5) return 'timeout';
  return 'error';
}

interface CppExecutionResult {
  output: string;
  error: string | null;
  status: 'success' | 'error' | 'timeout' | 'compile_error';
  compileError?: string;
  time?: string;
  memory?: number;
}

interface Judge0Response {
  token?: string;
  status?: { id: number; description: string };
  stdout?: string | null;
  stderr?: string | null;
  compile_output?: string | null;
  time?: string | null;
  memory?: number | null;
  message?: string | null;
}

export async function POST(req: NextRequest) {
  if (!JUDGE0_API_KEY) {
    return NextResponse.json(
      {
        output: '',
        error: '🔑 C++ execution is not configured yet.\nPlease set JUDGE0_API_KEY in .env.local.\n\nC++ 执行引擎尚未配置，请在 .env.local 中设置 JUDGE0_API_KEY。\n\nGet a free key at: https://rapidapi.com/judge0-official/api/judge0-ce',
        status: 'error',
      },
      { status: 503 }
    );
  }

  // Rate limit by IP or forwarded header
  const sessionId =
    req.headers.get('x-forwarded-for') || 'anonymous';
  if (!checkRateLimit(sessionId)) {
    return NextResponse.json(
      { output: '', error: 'Rate limit exceeded', status: 'error' },
      { status: 429 }
    );
  }

  let body: { code?: string; input?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { output: '', error: 'Invalid request body', status: 'error' },
      { status: 400 }
    );
  }

  const { code, input } = body;
  if (!code || typeof code !== 'string') {
    return NextResponse.json(
      { output: '', error: 'No code provided', status: 'error' },
      { status: 400 }
    );
  }

  try {
    // Submit to Judge0
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': JUDGE0_API_KEY,
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    };

    const submitRes = await fetch(
      `${JUDGE0_API_URL}/submissions?base64_encoded=true&wait=false`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          source_code: Buffer.from(code).toString('base64'),
          language_id: 54, // C++ (GCC 9.2.0)
          stdin: input ? Buffer.from(input).toString('base64') : undefined,
          cpu_time_limit: 5,
          memory_limit: 128000,
        }),
      }
    );

    if (!submitRes.ok) {
      const errText = await submitRes.text();
      return NextResponse.json(
        {
          output: '',
          error: `Judge0 submission failed (${submitRes.status}): ${errText}`,
          status: 'error',
        },
        { status: 502 }
      );
    }

    const { token } = (await submitRes.json()) as Judge0Response;
    if (!token) {
      return NextResponse.json(
        { output: '', error: 'No token from Judge0', status: 'error' },
        { status: 502 }
      );
    }

    // Poll for result
    const maxPolls = 20;
    const pollInterval = 1000;
    for (let i = 0; i < maxPolls; i++) {
      await new Promise((r) => setTimeout(r, pollInterval));

      const pollRes = await fetch(
        `${JUDGE0_API_URL}/submissions/${token}?base64_encoded=true`,
        { headers }
      );

      if (!pollRes.ok) continue;

      const result = (await pollRes.json()) as Judge0Response;
      const statusId = result.status?.id ?? 0;

      // 1 = In Queue, 2 = Processing
      if (statusId <= 2) continue;

      const decode = (s?: string | null) =>
        s ? Buffer.from(s, 'base64').toString('utf-8') : '';

      const stdout = decode(result.stdout);
      const stderr = decode(result.stderr);
      const compileOutput = decode(result.compile_output);
      const status = mapStatus(statusId);

      const response: CppExecutionResult = {
        output: stdout,
        error: null,
        status,
        time: result.time ?? undefined,
        memory: result.memory ?? undefined,
      };

      if (status === 'compile_error') {
        response.error = compileOutput || 'Compilation failed';
        response.compileError = compileOutput;
      } else if (status === 'timeout') {
        response.error =
          '⏱ Time limit exceeded (5s).\n程序超时（5秒限制）。';
      } else if (status === 'error') {
        response.error =
          stderr ||
          compileOutput ||
          result.status?.description ||
          'Runtime error';
      }

      return NextResponse.json(response);
    }

    return NextResponse.json({
      output: '',
      error: '⏱ Execution timed out (polling). Try simpler code.\n执行超时，请尝试更简单的代码。',
      status: 'timeout',
    });
  } catch (e) {
    return NextResponse.json(
      {
        output: '',
        error: `Server error: ${e instanceof Error ? e.message : 'unknown'}`,
        status: 'error',
      },
      { status: 500 }
    );
  }
}
