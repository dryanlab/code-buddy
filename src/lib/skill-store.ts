// Skill level store — localStorage + Supabase profiles.skill_level

import { getSupabase, isSupabaseConfigured } from "./supabase";

export type SkillLevel = "beginner" | "intermediate" | "advanced";

const SKILL_KEY = "code-buddy-skill-level";

export function getSkillLevel(): SkillLevel | null {
  if (typeof window === "undefined") return null;
  const val = localStorage.getItem(SKILL_KEY);
  if (val === "beginner" || val === "intermediate" || val === "advanced") return val;
  return null;
}

export function saveSkillLevel(level: SkillLevel): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SKILL_KEY, level);
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
  // Try localStorage first
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

// Quiz scoring: each answer is 0, 1, or 2 points (4 questions, max 8)
// Total 0-2 = beginner, 3-5 = intermediate, 6-8 = advanced
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
