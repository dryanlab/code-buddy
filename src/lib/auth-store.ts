// User authentication store — Supabase with localStorage fallback

import { getSupabase, isSupabaseConfigured } from "./supabase";

export interface UserProfile {
  id?: string; // Supabase user id
  name: string;
  grade: string;
  avatar: string;
  createdAt: string;
}

const AUTH_KEY = "code-buddy-user";

const AVATARS = ["🧑‍💻", "👩‍💻", "🧑‍🚀", "👩‍🚀", "🦊", "🐼", "🐉", "🤖", "🦄", "🐍", "🦅", "🎮"];

export function getAvatarOptions(): string[] {
  return AVATARS;
}

// ─── localStorage fallback ───────────────────────────────────

function getLocalUser(): UserProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as UserProfile;
  } catch {
    return null;
  }
}

function saveLocalUser(profile: UserProfile): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_KEY, JSON.stringify(profile));
}

function removeLocalUser(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_KEY);
}

// ─── Supabase auth ───────────────────────────────────────────

export async function signUp(
  email: string,
  password: string,
  name: string,
  grade: string,
  avatar: string
): Promise<{ error?: string }> {
  const supabase = getSupabase();

  if (!supabase) {
    // fallback: localStorage
    const profile: UserProfile = { name, grade, avatar, createdAt: new Date().toISOString() };
    saveLocalUser(profile);
    return {};
  }

  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return { error: error.message };
  if (!data.user) return { error: "Signup failed — no user returned." };

  const userId = data.user.id;

  // create profile
  const { error: profileErr } = await supabase.from("profiles").insert({
    id: userId,
    name,
    grade,
    avatar,
  });
  if (profileErr) return { error: profileErr.message };

  // create user_stats
  await supabase.from("user_stats").insert({ user_id: userId });

  // cache locally
  saveLocalUser({ id: userId, name, grade, avatar, createdAt: new Date().toISOString() });

  return {};
}

export async function signInWithGoogle(): Promise<{ error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { error: "Google sign-in requires Supabase." };

  // Use current URL origin so it works from both localhost and network IP
  const origin = window.location.origin;
  console.log("[Google Auth] redirectTo:", origin + "/dashboard");
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: origin + "/dashboard",
    },
  });
  if (error) return { error: error.message };
  return {};
}

export async function ensureProfile(): Promise<{ hasProfile: boolean; needsSetup: boolean }> {
  const supabase = getSupabase();
  if (!supabase) return { hasProfile: !!getLocalUser(), needsSetup: false };

  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) return { hasProfile: false, needsSetup: false };

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (profile) {
    saveLocalUser({
      id: profile.id,
      name: profile.name,
      grade: profile.grade,
      avatar: profile.avatar,
      createdAt: profile.created_at,
    });
    return { hasProfile: true, needsSetup: false };
  }

  // No profile yet — Google user needs setup
  return { hasProfile: false, needsSetup: true };
}

export async function completeGoogleProfile(
  grade: string,
  avatar: string
): Promise<{ error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { error: "Supabase not configured." };

  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) return { error: "Not authenticated." };

  const user = session.user;
  const name = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split("@")[0] || "Pilot";

  const { error: profileErr } = await supabase.from("profiles").insert({
    id: user.id,
    name,
    grade,
    avatar,
  });
  if (profileErr) return { error: profileErr.message };

  await supabase.from("user_stats").insert({ user_id: user.id });

  saveLocalUser({ id: user.id, name, grade, avatar, createdAt: new Date().toISOString() });
  return {};
}

export async function signIn(
  email: string,
  password: string
): Promise<{ error?: string }> {
  const supabase = getSupabase();

  if (!supabase) {
    // fallback: check localStorage name exists
    const u = getLocalUser();
    if (!u) return { error: "No account found. Please register first!" };
    return {};
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  if (!data.user) return { error: "Sign-in failed." };

  // fetch profile and cache
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (profile) {
    saveLocalUser({
      id: profile.id,
      name: profile.name,
      grade: profile.grade,
      avatar: profile.avatar,
      createdAt: profile.created_at,
    });
  }

  return {};
}

export async function signInLocal(name: string): Promise<{ error?: string }> {
  // Legacy localStorage-only sign in (name match)
  const user = getLocalUser();
  if (!user) return { error: "No account found. Please register first!" };
  if (user.name.toLowerCase() !== name.trim().toLowerCase()) {
    return { error: "Name doesn't match. Try again!" };
  }
  return {};
}

export function getUser(): UserProfile | null {
  return getLocalUser();
}

export async function getSessionUser(): Promise<UserProfile | null> {
  const supabase = getSupabase();
  if (!supabase) return getLocalUser();

  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) return null;

  // try cache first
  const cached = getLocalUser();
  if (cached?.id === session.user.id) return cached;

  // fetch from DB
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (profile) {
    const u: UserProfile = {
      id: profile.id,
      name: profile.name,
      grade: profile.grade,
      avatar: profile.avatar,
      createdAt: profile.created_at,
    };
    saveLocalUser(u);
    return u;
  }
  return null;
}

export function saveUser(profile: UserProfile): void {
  saveLocalUser(profile);
}

export function registerUser(name: string, grade: string, avatar: string): UserProfile {
  const profile: UserProfile = { name, grade, avatar, createdAt: new Date().toISOString() };
  saveLocalUser(profile);
  return profile;
}

export async function logout(): Promise<void> {
  const supabase = getSupabase();
  if (supabase) {
    await supabase.auth.signOut();
  }
  removeLocalUser();
}

export function isLoggedIn(): boolean {
  return getLocalUser() !== null;
}
