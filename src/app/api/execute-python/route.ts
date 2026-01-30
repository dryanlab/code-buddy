import { NextRequest, NextResponse } from 'next/server';

const PISTON_API_URL = 'https://emkc.org/api/v2/piston/execute';

// Simple in-memory rate limiter
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

interface PythonExecutionResult {
  output: string;
  error: string | null;
  status: 'success' | 'error' | 'timeout';
  time?: string;
}

interface PistonResponse {
  run?: {
    stdout: string;
    stderr: string;
    code: number;
    signal: string | null;
    output: string;
  };
  message?: string;
}

export async function POST(req: NextRequest) {
  const sessionId = req.headers.get('x-forwarded-for') || 'anonymous';
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
    const startTime = Date.now();

    const res = await fetch(PISTON_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: 'python3',
        version: '3.10.0',
        files: [{ name: 'main.py', content: code }],
        stdin: input || '',
        run_timeout: 5000,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json(
        { output: '', error: `Piston API error (${res.status}): ${errText}`, status: 'error' },
        { status: 502 }
      );
    }

    const result = (await res.json()) as PistonResponse;
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(3);

    if (result.message) {
      return NextResponse.json({ output: '', error: result.message, status: 'error' });
    }

    const run = result.run;
    if (!run) {
      return NextResponse.json({ output: '', error: 'No run result from Piston', status: 'error' });
    }

    if (run.signal === 'SIGKILL') {
      return NextResponse.json({
        output: run.stdout || '',
        error: '⏱ Time limit exceeded.\n程序超时。',
        status: 'timeout',
        time: elapsed,
      });
    }

    const response: PythonExecutionResult = {
      output: run.stdout || '',
      error: run.stderr || null,
      status: run.code === 0 ? 'success' : 'error',
      time: elapsed,
    };

    return NextResponse.json(response);
  } catch (e) {
    return NextResponse.json(
      { output: '', error: `Server error: ${e instanceof Error ? e.message : 'unknown'}`, status: 'error' },
      { status: 500 }
    );
  }
}
