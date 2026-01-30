"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProgress, getProgressAsync, getLevelInfo, LEVELS, getLastLessonId, mergeProgressFromCloud, type UserProgress } from "@/lib/progress-store";
import { getCoinState, mergeCoinsFromCloud } from "@/lib/coin-store";
import { loadAllFromCloud } from "@/lib/cloud-sync";
import { mergeSkillsFromCloud } from "@/lib/skill-store";
import { MODULES, LESSONS } from "@/data/lessons";
import { getUser, getSessionUser, type UserProfile } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";
import { useUserProfile, getSkillGreeting } from "@/lib/useUserProfile";
import { SKILL_LABELS, type SkillLevel, getNextLessonId, getStartingIndex, CURRICULUM_PATH } from "@/lib/skill-store";
import SkillQuiz from "@/components/SkillQuiz";
import AdventureMap from "@/components/AdventureMap";

function XPBar({ xp, level }: { xp: number; level: number }) {
  const info = getLevelInfo(xp);
  const currentLevel = LEVELS.find((l) => l.level === level) || LEVELS[0];
  const nextLevel = LEVELS[level] || null;

  return (
    <div className="rounded-xl p-4" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold">{currentLevel.name}</div>
          <div className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>Lv.{level}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>{xp} XP</div>
          {nextLevel && (
            <div className="text-[10px]" style={{ color: "var(--theme-text-muted)" }}>({nextLevel.xp - xp} to next)</div>
          )}
        </div>
      </div>
      <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${info.progressToNext * 100}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(to right, var(--color-primary), var(--color-primary-light))` }}
        />
      </div>
    </div>
  );
}

function SkillTree({ progress }: { progress: UserProgress }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold flex items-center gap-2">🌳 Skill Tree</h2>
        <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>技能树</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MODULES.map((mod) => {
          const moduleLessons = LESSONS.filter((l) => l.moduleId === mod.id);
          const completed = moduleLessons.filter((l) => progress.completedLessons.includes(l.id)).length;
          const total = moduleLessons.length;
          const pct = total > 0 ? (completed / total) * 100 : 0;

          return (
            <Link key={mod.id} href="/dashboard/lessons">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-xl p-5 transition-colors"
                style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{mod.icon}</span>
                  <div>
                    <div className="font-bold">{mod.title}</div>
                    <div className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>{mod.subtitle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
                    <div
                      className={`h-full bg-gradient-to-r ${mod.color} rounded-full transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>{completed}/{total}</span>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function QuickActions({ continueHref }: { continueHref: string }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {[
        { href: continueHref, icon: "📚", label: "Learn", labelCn: "学习" },
        { href: "/dashboard/code-lab", icon: "💻", label: "Code Lab", labelCn: "实验室" },
        { href: "/dashboard/courses", icon: "🗺️", label: "Full Map", labelCn: "地图" },
        { href: "/dashboard/ai-chat", icon: "🤖", label: "AI Buddy", labelCn: "AI 助手" },
      ].map((action) => (
        <Link key={action.href} href={action.href}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl p-3 text-center cursor-pointer"
            style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
          >
            <div className="text-2xl mb-1">{action.icon}</div>
            <div className="text-[11px] font-medium">{action.label}</div>
            <div className="text-[9px]" style={{ color: "var(--theme-text-muted)" }}>{action.labelCn}</div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

function StreakFlame({ streakDays }: { streakDays: number }) {
  if (streakDays === 0) return null;
  const flames = streakDays >= 7 ? "🔥🔥🔥" : streakDays >= 3 ? "🔥🔥" : "🔥";
  const message = streakDays >= 7
    ? "On fire! Keep going! · 火力全开！继续！"
    : streakDays >= 3
    ? "Great streak! · 连续学习中！"
    : "Keep it up! · 继续加油！";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-xl p-4 flex items-center gap-4"
      style={{
        background: `linear-gradient(135deg, rgba(249,115,22,0.15), rgba(239,68,68,0.1))`,
        border: "1px solid rgba(249,115,22,0.3)",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-4xl"
      >
        {flames}
      </motion.div>
      <div>
        <div className="font-bold text-lg">{streakDays}-Day Streak!</div>
        <div className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>{message}</div>
      </div>
      <div className="ml-auto flex gap-1">
        {Array.from({ length: 7 }, (_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: i < streakDays
                ? "rgba(249,115,22,0.8)"
                : "var(--theme-border)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function StatsRow({ progress }: { progress: UserProgress }) {
  const stats = [
    { label: "Lessons", labelCn: "课程", value: progress.completedLessons.length, icon: "📖" },
    { label: "Streak", labelCn: "连续", value: `${progress.streakDays}d`, icon: "🔥" },
    { label: "Runs", labelCn: "运行", value: progress.codeRunCount, icon: "▶️" },
    { label: "Coins", labelCn: "金币", value: getCoinState().coins, icon: "🪙" },
    { label: "Badges", labelCn: "徽章", value: progress.earnedBadges.length, icon: "🏅" },
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg p-3 text-center" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
          <div className="text-lg">{stat.icon}</div>
          <div className="text-base font-bold">{stat.value}</div>
          <div className="text-[10px]" style={{ color: "var(--theme-text-secondary)" }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const { profile } = useUserProfile();

  useEffect(() => {
    async function load() {
      if (isSupabaseConfigured) {
        try {
          const cloudData = await loadAllFromCloud();
          if (cloudData) {
            if (cloudData.progress_data) mergeProgressFromCloud(cloudData.progress_data);
            if (cloudData.coins_data) mergeCoinsFromCloud(cloudData.coins_data);
            if (cloudData.skills_data) mergeSkillsFromCloud(cloudData.skills_data);
          }
        } catch (e) {
          console.warn("[dashboard] cloud sync load failed:", e);
        }
        const [p, u] = await Promise.all([getProgressAsync(), getSessionUser()]);
        setProgress(p);
        setUser(u);
      } else {
        setProgress(getProgress());
        setUser(getUser());
      }
    }
    load();
  }, []);

  if (!progress) return null;

  const displayName = profile?.name || user?.name || "Coder";
  const userAvatar = profile?.avatar || user?.avatar || "👋";
  const skillLevel = profile?.skillLevel || null;
  const greeting = getSkillGreeting(skillLevel);
  const skillLabel = skillLevel ? SKILL_LABELS[skillLevel] : null;

  const effectiveSkill: SkillLevel = skillLevel || "beginner";
  const startIdx = getStartingIndex(effectiveSkill);
  const nextLessonId = getNextLessonId(effectiveSkill, progress.completedLessons);
  const lastLesson = getLastLessonId();
  const continueHref = lastLesson
    ? `/dashboard/lessons/${lastLesson}`
    : `/dashboard/lessons/${nextLessonId}`;

  const recommendedLessons = CURRICULUM_PATH
    .slice(startIdx)
    .map((id) => LESSONS.find((l) => l.id === id)!)
    .filter((l) => l && !progress.completedLessons.includes(l.id))
    .slice(0, 4);

  const continueLesson = lastLesson ? LESSONS.find(l => l.id === lastLesson) : null;

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-5">
      {/* Top: Greeting + Continue Learning (compact, same row) */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">
            {greeting.en} {displayName}! {userAvatar}
          </h1>
          <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>{greeting.cn}</p>
          {skillLabel && (
            <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>
              {skillLabel.emoji} {skillLabel.en} · {skillLabel.cn}
            </p>
          )}
        </div>
        {continueLesson && (
          <a href={continueHref}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl px-5 py-3 flex items-center gap-3 shrink-0"
              style={{
                background: "linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 15%, var(--theme-card-bg)), color-mix(in srgb, var(--color-primary-light, var(--color-primary)) 10%, var(--theme-card-bg)))",
                border: "1px solid color-mix(in srgb, var(--color-primary) 30%, transparent)",
              }}
            >
              <span className="text-2xl">{continueLesson.icon}</span>
              <div className="min-w-0">
                <div className="text-[10px] font-semibold" style={{ color: "var(--color-primary)" }}>▶ Continue · 继续</div>
                <div className="text-sm font-bold truncate max-w-[200px]">{continueLesson.title}</div>
              </div>
              <span className="text-xl">→</span>
            </motion.div>
          </a>
        )}
      </motion.div>

      {/* Streak Flame */}
      {progress.streakDays > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <StreakFlame streakDays={progress.streakDays} />
        </motion.div>
      )}

      {/* 🗺️ Adventure Map — Hero Element */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">🗺️ World of Code</h2>
              <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>代码世界冒险地图 — 点击探索！</p>
            </div>
            <Link href="/dashboard/courses" className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 12%, transparent)", color: "var(--color-primary)" }}>
              Full Screen · 全屏 →
            </Link>
          </div>
          <AdventureMap progress={progress} />
        </div>
      </motion.div>

      {/* Stats Row: XP bar + stats compact */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-3">
        <XPBar xp={progress.xp} level={progress.level} />
        <StatsRow progress={progress} />
      </motion.div>

      {/* Quick Actions — compact single row */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <QuickActions continueHref={continueHref} />
      </motion.div>

      {/* Recommended Lessons */}
      {recommendedLessons.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <div className="space-y-3">
            <div>
              <h2 className="text-lg font-bold">🎯 Your Next Lessons {skillLabel ? skillLabel.emoji : ""}</h2>
              <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>接下来的课程</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {recommendedLessons.map((lesson) => (
                <Link key={lesson.id} href={`/dashboard/lessons/${lesson.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl border transition-colors"
                    style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lesson.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm truncate">{lesson.title}</div>
                        <div className="text-xs truncate" style={{ color: "var(--theme-text-secondary)" }}>{lesson.subtitle}</div>
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)", color: "var(--color-primary)" }}>
                        {lesson.difficulty === "beginner" ? "🟢" : lesson.difficulty === "intermediate" ? "🟡" : "🔴"} +{lesson.xp} XP
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Skill Tree */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <SkillTree progress={progress} />
      </motion.div>
    </div>
  );
}
