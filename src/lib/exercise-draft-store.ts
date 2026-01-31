// Exercise draft persistence — localStorage only
// 练习草稿持久化 — 仅 localStorage

const PREFIX = "code-buddy-draft-";
const FREE_CODE_PREFIX = "code-buddy-free-code-";

// ─── Exercise Drafts ─────────────────────────────────────────

export function getExerciseDraft(exerciseId: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(`${PREFIX}${exerciseId}`);
  } catch {
    return null;
  }
}

export function saveExerciseDraft(exerciseId: string, code: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`${PREFIX}${exerciseId}`, code);
  } catch {
    // storage full, ignore
  }
}

export function clearExerciseDraft(exerciseId: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(`${PREFIX}${exerciseId}`);
  } catch {
    // ignore
  }
}

// ─── Free Code Persistence ───────────────────────────────────

export function getFreeCode(language: "python" | "cpp"): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(`${FREE_CODE_PREFIX}${language}`);
  } catch {
    return null;
  }
}

export function saveFreeCode(language: "python" | "cpp", code: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`${FREE_CODE_PREFIX}${language}`, code);
  } catch {
    // ignore
  }
}
