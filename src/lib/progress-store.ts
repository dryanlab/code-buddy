// Progress & gamification — Supabase with localStorage fallback

import { getSupabase, isSupabaseConfigured } from "./supabase";
import { getUser } from "./auth-store";
import { earnCoins, COIN_RATES } from "./coin-store";

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  streakDays: number;
  lastActiveDate: string;
  completedLessons: string[];
  lessonScores: Record<string, number>;
  earnedBadges: string[];
  chatMessageCount: number;
  codeRunCount: number;
  /** Tracks which section the user last viewed per lesson */
  lessonSections: Record<string, number>;
  /** The last lesson the user was actively working on */
  lastLessonId: string;
}

const STORAGE_KEY = "code-buddy-progress";

const defaultProgress: UserProgress = {
  xp: 0,
  level: 1,
  streakDays: 0,
  lastActiveDate: "",
  completedLessons: [],
  lessonScores: {},
  earnedBadges: [],
  chatMessageCount: 0,
  codeRunCount: 0,
  lessonSections: {},
  lastLessonId: "",
};

// Level system
export const LEVELS = [
  { level: 1, name: "🌱 Newbie", xp: 0 },
  { level: 2, name: "📖 Learner", xp: 100 },
  { level: 3, name: "🔧 Tinkerer", xp: 300 },
  { level: 4, name: "💻 Coder", xp: 600 },
  { level: 5, name: "🐍 Pythonista", xp: 1000 },
  { level: 6, name: "🐛 Debugger", xp: 1500 },
  { level: 7, name: "🔬 Engineer", xp: 2000 },
  { level: 8, name: "🧠 Architect", xp: 2800 },
  { level: 9, name: "⚡ Hacker", xp: 3500 },
  { level: 10, name: "🤖 AI Master", xp: 4500 },
];

export const ALL_BADGES: Badge[] = [
  // Progress milestones
  { id: "first-steps", name: "First Steps", icon: "🌱", description: "Complete your first lesson" },
  { id: "python-tamer", name: "Python Tamer", icon: "🐍", description: "Run your first Python program" },
  { id: "code-runner", name: "Code Runner", icon: "🚀", description: "Run 10 programs" },
  { id: "code-machine", name: "Code Machine", icon: "⚙️", description: "Run 50 programs" },

  // Area completion badges
  { id: "island-explorer", name: "Island Explorer", icon: "🏝️", description: "Complete Area 1: Starter Island" },
  { id: "loop-forest-ranger", name: "Loop Forest Ranger", icon: "🌀", description: "Complete Area 2: Loop Forest" },
  { id: "master-builder", name: "Master Builder", icon: "🏗️", description: "Complete Area 3: Builder City" },
  { id: "mad-scientist", name: "Mad Scientist", icon: "🧪", description: "Complete Area 4: Science Lab" },
  { id: "ai-pioneer", name: "AI Pioneer", icon: "🤖", description: "Complete Area 5: AI Frontier" },
  { id: "code-buddy-graduate", name: "Code Buddy Graduate", icon: "🎓", description: "Complete all 5 areas - 30 lessons!" },

  // Skill badges
  { id: "loop-master", name: "Loop Master", icon: "🔁", description: "Complete the loops lesson" },
  { id: "function-builder", name: "Function Builder", icon: "🧱", description: "Complete the functions lesson" },
  { id: "list-wrangler", name: "List Wrangler", icon: "📋", description: "Complete the lists lesson" },
  { id: "cpu-whisperer", name: "CPU Whisperer", icon: "🧠", description: "Understand Fetch-Decode-Execute" },
  { id: "ai-skeptic", name: "AI Skeptic", icon: "🔍", description: "Complete the AI review lesson" },

  // Streak badges
  { id: "streak-3", name: "3-Day Streak", icon: "🔥", description: "Learn 3 days in a row" },
  { id: "streak-7", name: "Week Warrior", icon: "🔥", description: "Learn 7 days in a row" },
  { id: "streak-30", name: "Monthly Master", icon: "🌟", description: "Learn 30 days in a row" },

  // XP badges
  { id: "xp-100", name: "Rising Star", icon: "⭐", description: "Earn 100 XP" },
  { id: "xp-500", name: "Superstar", icon: "🌟", description: "Earn 500 XP" },
  { id: "xp-1000", name: "Legend", icon: "💎", description: "Earn 1000 XP" },

  // Social / AI
  { id: "chatterbox", name: "Chatterbox", icon: "💬", description: "Send 10 messages to AI assistant" },
  { id: "curious-mind", name: "Curious Mind", icon: "🧐", description: "Send 50 messages to AI assistant" },
];

export function getLevelInfo(xp: number) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (xp >= l.xp) current = l;
    else break;
  }
  const next = LEVELS[current.level] || null;
  const progressToNext = next ? (xp - current.xp) / (next.xp - current.xp) : 1;
  return { ...current, nextXp: next?.xp || current.xp, progressToNext };
}

// ─── localStorage helpers ────────────────────────────────────

function getLocalProgress(): UserProgress {
  if (typeof window === "undefined") return { ...defaultProgress };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return { ...defaultProgress };
  }
}

function saveLocalProgress(p: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

// ─── Supabase sync ───────────────────────────────────────────

async function getUserId(): Promise<string | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user?.id ?? null;
}

async function loadFromSupabase(userId: string): Promise<UserProgress> {
  const supabase = getSupabase()!;
  const p: UserProgress = { ...defaultProgress };

  // load stats
  const { data: stats } = await supabase
    .from("user_stats")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (stats) {
    p.xp = stats.total_xp ?? 0;
    p.level = stats.level ?? 1;
    p.streakDays = stats.streak_days ?? 0;
    p.lastActiveDate = stats.last_active_date ?? "";
  }

  // load progress records
  const { data: rows } = await supabase
    .from("progress")
    .select("*")
    .eq("user_id", userId);

  if (rows) {
    for (const r of rows) {
      if (r.completed && !p.completedLessons.includes(r.lesson_id)) {
        p.completedLessons.push(r.lesson_id);
      }
      if (r.score > 0) {
        p.lessonScores[r.lesson_id] = Math.max(p.lessonScores[r.lesson_id] || 0, r.score);
      }
    }
  }

  // merge with local for fields not in DB (chatMessageCount, codeRunCount, earnedBadges)
  const local = getLocalProgress();
  p.chatMessageCount = local.chatMessageCount;
  p.codeRunCount = local.codeRunCount;
  p.earnedBadges = local.earnedBadges;

  return p;
}

async function saveStatsToSupabase(userId: string, p: UserProgress): Promise<void> {
  const supabase = getSupabase()!;
  await supabase.from("user_stats").upsert({
    user_id: userId,
    total_xp: p.xp,
    level: p.level,
    streak_days: p.streakDays,
    last_active_date: p.lastActiveDate || null,
    lessons_completed: p.completedLessons.length,
  });
}

async function saveLessonToSupabase(
  userId: string,
  lessonId: string,
  score: number,
  xpEarned: number
): Promise<void> {
  const supabase = getSupabase()!;
  await supabase.from("progress").upsert(
    {
      user_id: userId,
      lesson_id: lessonId,
      completed: true,
      score,
      xp_earned: xpEarned,
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_id" }
  );
}

// ─── Badge & level logic ─────────────────────────────────────

function updateStreak(p: UserProgress): UserProgress {
  const today = new Date().toISOString().slice(0, 10);
  if (p.lastActiveDate === today) return p;

  // Daily login coin bonus
  earnCoins(COIN_RATES.firstLogin, "daily-login");

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const newStreak = p.lastActiveDate === yesterday ? p.streakDays + 1 : 1;

  // Streak coin bonuses
  if (newStreak === 3) earnCoins(COIN_RATES.streakBonus3, "streak-3");
  if (newStreak === 7) earnCoins(COIN_RATES.streakBonus7, "streak-7");
  if (newStreak === 30) earnCoins(COIN_RATES.streakBonus30, "streak-30");

  return { ...p, streakDays: newStreak, lastActiveDate: today };
}

function checkLevel(p: UserProgress): UserProgress {
  const info = getLevelInfo(p.xp);
  return { ...p, level: info.level };
}

function checkBadges(p: UserProgress): UserProgress {
  const earned = new Set(p.earnedBadges);
  const has = (ids: string[]) => ids.every((id) => p.completedLessons.includes(id));

  // Progress milestones
  if (p.completedLessons.length >= 1) earned.add("first-steps");
  if (p.codeRunCount >= 1) earned.add("python-tamer");
  if (p.codeRunCount >= 10) earned.add("code-runner");
  if (p.codeRunCount >= 50) earned.add("code-machine");

  // Area completion badges
  if (has(["1-1", "1-2", "1-3", "1-4", "1-5", "1-6"])) earned.add("island-explorer");
  if (has(["2-1", "2-2", "2-3", "2-4", "2-5", "2-6"])) earned.add("loop-forest-ranger");
  if (has(["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7"])) earned.add("master-builder");
  if (has(["4-1", "4-2", "4-3", "4-4", "4-5", "4-6"])) earned.add("mad-scientist");
  if (has(["5-1", "5-2", "5-3", "5-4", "5-5"])) earned.add("ai-pioneer");

  // Graduate — all areas
  const allAreaBadges = ["island-explorer", "loop-forest-ranger", "master-builder", "mad-scientist", "ai-pioneer"];
  if (allAreaBadges.every((b) => earned.has(b))) earned.add("code-buddy-graduate");

  // Skill badges
  if (p.completedLessons.includes("2-4")) earned.add("loop-master");
  if (p.completedLessons.includes("3-1")) earned.add("function-builder");
  if (p.completedLessons.includes("2-2")) earned.add("list-wrangler");
  if (p.completedLessons.includes("1-2")) earned.add("cpu-whisperer");
  if (p.completedLessons.includes("5-3")) earned.add("ai-skeptic");

  // Streaks
  if (p.streakDays >= 3) earned.add("streak-3");
  if (p.streakDays >= 7) earned.add("streak-7");
  if (p.streakDays >= 30) earned.add("streak-30");

  // XP
  if (p.xp >= 100) earned.add("xp-100");
  if (p.xp >= 500) earned.add("xp-500");
  if (p.xp >= 1000) earned.add("xp-1000");

  // Social / AI
  if (p.chatMessageCount >= 10) earned.add("chatterbox");
  if (p.chatMessageCount >= 50) earned.add("curious-mind");

  return { ...p, earnedBadges: Array.from(earned) };
}

function processProgress(p: UserProgress): UserProgress {
  return checkBadges(checkLevel(updateStreak(p)));
}

// ─── Public API (same signatures, now with Supabase sync) ────

export function getProgress(): UserProgress {
  return getLocalProgress();
}

export async function getProgressAsync(): Promise<UserProgress> {
  const userId = await getUserId();
  if (userId) {
    const p = await loadFromSupabase(userId);
    const processed = processProgress(p);
    saveLocalProgress(processed);
    return processed;
  }
  return processProgress(getLocalProgress());
}

export function completeLesson(lessonId: string, quizScore: number, xpEarned: number): UserProgress {
  let p = getLocalProgress();
  const isNew = !p.completedLessons.includes(lessonId);
  if (isNew) {
    p.completedLessons.push(lessonId);
  }
  p.lessonScores[lessonId] = Math.max(p.lessonScores[lessonId] || 0, quizScore);
  p.xp += xpEarned;
  p = processProgress(p);
  saveLocalProgress(p);

  // Earn coins!
  if (isNew) {
    let coins = COIN_RATES.lessonComplete;
    if (quizScore >= 100) coins += COIN_RATES.quizPerfect;
    else if (quizScore >= 80) coins += COIN_RATES.quizGood;
    earnCoins(coins, `lesson:${lessonId}`);
  }

  // async Supabase sync (fire-and-forget)
  getUserId().then((uid) => {
    if (uid) {
      saveLessonToSupabase(uid, lessonId, quizScore, xpEarned);
      saveStatsToSupabase(uid, p);
    }
  });

  return p;
}

export function addXP(amount: number): UserProgress {
  let p = getLocalProgress();
  p.xp += amount;
  p = processProgress(p);
  saveLocalProgress(p);

  getUserId().then((uid) => {
    if (uid) saveStatsToSupabase(uid, p);
  });

  return p;
}

export function incrementCodeRun(): UserProgress {
  let p = getLocalProgress();
  p.codeRunCount += 1;
  p = processProgress(p);
  saveLocalProgress(p);
  return p;
}

export function incrementChatCount(): UserProgress {
  let p = getLocalProgress();
  p.chatMessageCount += 1;
  p = processProgress(p);
  saveLocalProgress(p);
  return p;
}

export function recordActivity(): UserProgress {
  let p = getLocalProgress();
  p = processProgress(p);
  saveLocalProgress(p);

  getUserId().then((uid) => {
    if (uid) saveStatsToSupabase(uid, p);
  });

  return p;
}

export function saveLessonPosition(lessonId: string, sectionIndex: number): void {
  let p = getLocalProgress();
  p.lessonSections[lessonId] = sectionIndex;
  p.lastLessonId = lessonId;
  saveLocalProgress(p);
}

export function getLessonPosition(lessonId: string): number {
  const p = getLocalProgress();
  return p.lessonSections[lessonId] ?? 0;
}

export function getLastLessonId(): string {
  const p = getLocalProgress();
  return p.lastLessonId || "";
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
