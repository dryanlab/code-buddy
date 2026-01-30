// Skill level store — localStorage + Supabase profiles.skill_level
// Model: ONE curriculum path, skill level determines STARTING POINT

import { getSupabase, isSupabaseConfigured } from "./supabase";
import { queueCloudSync } from "./cloud-sync";

export type SkillLevel = "beginner" | "intermediate" | "advanced";

const SKILL_KEY = "code-buddy-skill-level";

// ═══ The single curriculum path (all 30 lessons in order) ═══
// Everyone walks this same path. Skill level = where you START.
export const CURRICULUM_PATH: string[] = [
  // Area 1: Starter Island (lessons 1-6)
  "1-1", "1-2", "1-3", "1-4", "1-5", "1-6",
  // Area 2: Loop Forest (lessons 7-12)
  "2-1", "2-2", "2-3", "2-4", "2-5", "2-6",
  // Area 3: Builder City (lessons 13-19)
  "3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7",
  // Area 4: Science Lab (lessons 20-25)
  "4-1", "4-2", "4-3", "4-4", "4-5", "4-6",
  // Area 5: AI Frontier (lessons 26-30)
  "5-1", "5-2", "5-3", "5-4", "5-5",
];

// Starting index in CURRICULUM_PATH for each skill level
// Beginner: start at lesson 0 (1-1, first lesson)
// Intermediate: start at lesson 6 (2-1, Loop Forest — skips Starter Island)
// Advanced: start at lesson 12 (3-1, Builder City — skips basics + loops)
export const SKILL_START_INDEX: Record<SkillLevel, number> = {
  beginner: 0,
  intermediate: 6,
  advanced: 12,
};

export function getStartingLessonId(level: SkillLevel): string {
  return CURRICULUM_PATH[SKILL_START_INDEX[level]];
}

export function getStartingIndex(level: SkillLevel): number {
  return SKILL_START_INDEX[level];
}

/** Get the global index of a lesson in the curriculum (0-based), or -1 */
export function getLessonIndex(lessonId: string): number {
  return CURRICULUM_PATH.indexOf(lessonId);
}

/**
 * Given a skill level and completed lessons, find the first incomplete lesson
 * from the starting point onward. Falls back to starting lesson if all done.
 */
export function getNextLessonId(level: SkillLevel, completedLessons: string[]): string {
  const startIdx = SKILL_START_INDEX[level];
  for (let i = startIdx; i < CURRICULUM_PATH.length; i++) {
    if (!completedLessons.includes(CURRICULUM_PATH[i])) {
      return CURRICULUM_PATH[i];
    }
  }
  // All done from starting point onward — check if earlier lessons are incomplete
  for (let i = 0; i < startIdx; i++) {
    if (!completedLessons.includes(CURRICULUM_PATH[i])) {
      return CURRICULUM_PATH[i];
    }
  }
  // Everything complete! Return last lesson
  return CURRICULUM_PATH[CURRICULUM_PATH.length - 1];
}

// ═══ Storage ═══

export function getSkillLevel(): SkillLevel | null {
  if (typeof window === "undefined") return null;
  const val = localStorage.getItem(SKILL_KEY);
  if (val === "beginner" || val === "intermediate" || val === "advanced") return val;
  return null;
}

export function saveSkillLevel(level: SkillLevel): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SKILL_KEY, level);
  queueCloudSync("skills_data", { skillLevel: level });
}

export async function saveSkillLevelToProfile(level: SkillLevel): Promise<void> {
  saveSkillLevel(level);

  if (!isSupabaseConfigured) return;
  const supabase = getSupabase();
  if (!supabase) return;

  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) return;

  await supabase
    .from("profiles")
    .update({ skill_level: level })
    .eq("id", session.user.id);
}

export async function loadSkillLevelFromProfile(): Promise<SkillLevel | null> {
  const local = getSkillLevel();
  if (local) return local;

  if (!isSupabaseConfigured) return null;
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("skill_level")
    .eq("id", session.user.id)
    .single();

  if (data?.skill_level) {
    saveSkillLevel(data.skill_level);
    return data.skill_level as SkillLevel;
  }
  return null;
}

/** Merge cloud skill data into localStorage */
export function mergeSkillsFromCloud(cloudData: Record<string, unknown>): void {
  if (cloudData?.skillLevel) {
    const level = cloudData.skillLevel as string;
    if (level === "beginner" || level === "intermediate" || level === "advanced") {
      // Only set if local has no skill level
      if (!getSkillLevel()) {
        saveSkillLevel(level);
      }
    }
  }
}

// ═══ Quiz scoring ═══
// Each of 4 questions scores 0-2. Total 0-2 = beginner, 3-5 = intermediate, 6-8 = advanced
export function scoreToSkillLevel(totalScore: number): SkillLevel {
  if (totalScore <= 2) return "beginner";
  if (totalScore <= 5) return "intermediate";
  return "advanced";
}

export const SKILL_LABELS: Record<SkillLevel, { emoji: string; en: string; cn: string }> = {
  beginner: { emoji: "🌱", en: "Explorer", cn: "探索者" },
  intermediate: { emoji: "🌿", en: "Builder", cn: "建造者" },
  advanced: { emoji: "🚀", en: "Hacker", cn: "黑客" },
};
