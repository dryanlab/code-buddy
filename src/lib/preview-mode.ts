export function isPreviewMode(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('preview_mode') === 'true';
}

export function enterPreviewMode(): void {
  localStorage.setItem('preview_mode', 'true');
}

export function exitPreviewMode(): void {
  localStorage.removeItem('preview_mode');
}

export const PREVIEW_ALLOWED_LESSONS = ["1-1", "2-1", "3-1", "4-1", "5-1"];

export function isLessonUnlocked(lessonId: string): boolean {
  if (!isPreviewMode()) return true;
  return PREVIEW_ALLOWED_LESSONS.includes(lessonId);
}

// Explore CS: only first 2 interactive tabs unlocked
export const PREVIEW_ALLOWED_EXPLORE_TABS = ["cards", "cpu"];

// Data Structures: only Array and Stack
export const PREVIEW_ALLOWED_DS_TABS = ["array", "stack"];

// Code Lab: only first 3 exercises
export const PREVIEW_MAX_EXERCISES = 3;

// Sidebar: locked pages in preview
export const PREVIEW_LOCKED_PATHS = [
  "/dashboard/progress",
  "/dashboard/shop",
  "/dashboard/settings",
  "/dashboard/ai-chat",
];
