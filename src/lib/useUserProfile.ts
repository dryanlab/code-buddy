"use client";

import { useState, useEffect, useCallback } from "react";
import { getUser, getSessionUser, type UserProfile } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";
import { loadSkillLevelFromProfile, getSkillLevel, type SkillLevel } from "@/lib/skill-store";

export interface UserProfileData {
  name: string;
  grade: number;
  avatar: string;
  skillLevel: SkillLevel | null;
}

export function useUserProfile(): { profile: UserProfileData | null; refreshSkill: () => void } {
  const [profile, setProfile] = useState<UserProfileData | null>(null);

  const loadProfile = useCallback(async () => {
    let user: UserProfile | null = null;

    if (isSupabaseConfigured) {
      user = await getSessionUser();
    }
    if (!user) {
      user = getUser();
    }

    let skillLevel: SkillLevel | null = null;
    try {
      skillLevel = await loadSkillLevelFromProfile();
    } catch {
      skillLevel = getSkillLevel();
    }

    if (user) {
      setProfile({
        name: user.name || "Coder",
        grade: parseInt(user.grade, 10) || 6,
        avatar: user.avatar || "🧑‍💻",
        skillLevel,
      });
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  return { profile, refreshSkill: loadProfile };
}

export function getSkillGreeting(skillLevel: SkillLevel | null, name?: string, avatar?: string): { en: string; cn: string } {
  if (!skillLevel || skillLevel === "beginner") {
    return { en: `🌱 Welcome, Explorer! Ready to discover coding?`, cn: `欢迎小探险家！` };
  } else if (skillLevel === "intermediate") {
    return { en: `🌿 Welcome back, Builder! Let's create something!`, cn: `欢迎回来，编程达人！` };
  } else {
    return { en: `🚀 Welcome, Hacker! Ready for a challenge?`, cn: `欢迎，黑客！` };
  }
}
