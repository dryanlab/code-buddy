// Exercise completion progress tracking
// localStorage primary, cloud sync secondary

import { queueCloudSync } from "./cloud-sync";

const STORAGE_KEY = "code-buddy-completed-exercises";

function load(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(ids: string[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  // fire-and-forget cloud sync
  queueCloudSync("progress_data", { completedExercises: ids });
}

export function getCompletedExercises(): string[] {
  return load();
}

export function markExerciseCompleted(id: string): void {
  const ids = load();
  if (!ids.includes(id)) {
    ids.push(id);
    save(ids);
  }
}

export function isExerciseCompleted(id: string): boolean {
  return load().includes(id);
}
