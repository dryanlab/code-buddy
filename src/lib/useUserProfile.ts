"use client";

import { useState, useEffect } from "react";
import { getUser, getSessionUser, type UserProfile } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";

export interface UserProfileData {
  name: string;
  grade: number;
  avatar: string;
}

export function useUserProfile(): UserProfileData | null {
  const [profile, setProfile] = useState<UserProfileData | null>(null);

  useEffect(() => {
    async function load() {
      let user: UserProfile | null = null;

      if (isSupabaseConfigured) {
        user = await getSessionUser();
      }
      if (!user) {
        user = getUser();
      }

      if (user) {
        setProfile({
          name: user.name || "Coder",
          grade: parseInt(user.grade, 10) || 6,
          avatar: user.avatar || "🧑‍💻",
        });
      }
    }
    load();
  }, []);

  return profile;
}

export function getGradeGreeting(grade: number, name: string, avatar: string): { en: string; cn: string } {
  if (grade <= 5) {
    return { en: `Welcome, young explorer! 🌟 ${avatar}`, cn: `欢迎小探险家！` };
  } else if (grade <= 7) {
    return { en: `Welcome back, coder! 💻 ${avatar}`, cn: `欢迎回来，编程达人！` };
  } else {
    return { en: `Welcome, developer! 🚀 ${avatar}`, cn: `欢迎，开发者！` };
  }
}
