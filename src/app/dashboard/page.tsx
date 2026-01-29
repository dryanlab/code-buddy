"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProgress, getProgressAsync, getLevelInfo, LEVELS, getLastLessonId, type UserProgress } from "@/lib/progress-store";
import { getCoinState } from "@/lib/coin-store";
import { MODULES, LESSONS } from "@/data/lessons";
import { getUser, getSessionUser, type UserProfile } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";
import { useUserProfile, getSkillGreeting } from "@/lib/useUserProfile";
import { SKILL_LABELS, type SkillLevel } from "@/lib/skill-store";
function XPBar({ xp, level }: { xp: number; level: number }) {
  const info = getLevelInfo(xp);
  const currentLevel = LEVELS.find((l) => l.level === level) || LEVELS[0];
  const nextLevel = LEVELS[level] || null;

  return (
    <div className="rounded-xl p-6" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-2xl font-bold">{currentLevel.name}</div>
          <div className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>Level {level}</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>{xp} XP</div>
          {nextLevel && (
            <div className="text-xs" style={{ color: "var(--theme-text-muted)" }}>{nextLevel.xp - xp} XP to next level · 距下一级还差 {nextLevel.xp - xp} XP</div>
          )}
        </div>
      </div>
      <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
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

function QuickActions() {
  const lastLesson = getLastLessonId();
  const continueHref = lastLesson ? `/dashboard/lessons/${lastLesson}` : "/dashboard/lessons";
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold">⚡ Quick Actions</h2>
        <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>快捷入口</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { href: continueHref, icon: "📚", label: "Continue Learning", labelCn: "继续学习" },
          { href: "/dashboard/code-lab", icon: "💻", label: "Code Lab", labelCn: "代码实验室" },
          { href: "/dashboard/explore", icon: "🔬", label: "Explore CS", labelCn: "计算机探秘" },
          { href: "/dashboard/ai-chat", icon: "🤖", label: "Ask AI Buddy", labelCn: "问 AI 助手" },
        ].map((action) => (
          <Link key={action.href} href={action.href}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl p-4 text-center cursor-pointer"
              style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
            >
              <div className="text-3xl mb-2">{action.icon}</div>
              <div className="text-xs font-medium">{action.label}</div>
              <div className="text-[10px]" style={{ color: "var(--theme-text-muted)" }}>{action.labelCn}</div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function StatsBar({ progress }: { progress: UserProgress }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { label: "Lessons Done", labelCn: "已完成课程", value: progress.completedLessons.length, icon: "📖" },
        { label: "Streak", labelCn: "连续天数", value: `${progress.streakDays} days`, icon: "🔥" },
        { label: "Code Runs", labelCn: "运行次数", value: progress.codeRunCount, icon: "▶️" },
        { label: "Coins", labelCn: "金币", value: getCoinState().coins, icon: "🪙" },
        { label: "Badges", labelCn: "徽章", value: progress.earnedBadges.length, icon: "🏅" },
      ].map((stat) => (
        <div key={stat.label} className="rounded-lg p-4 text-center" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
          <div className="text-2xl mb-1">{stat.icon}</div>
          <div className="text-xl font-bold">{stat.value}</div>
          <div className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>{stat.label}</div>
          <div className="text-[10px]" style={{ color: "var(--theme-text-muted)" }}>{stat.labelCn}</div>
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

  // Recommended lessons based on skill level
  const SKILL_ORDER: SkillLevel[] = ["beginner", "intermediate", "advanced"];
  const userSkillIdx = skillLevel ? SKILL_ORDER.indexOf(skillLevel) : 0;
  const recommendedLessons = LESSONS
    .filter((l) => SKILL_ORDER.indexOf(l.skillLevel) <= userSkillIdx)
    .filter((l) => !progress.completedLessons.includes(l.id))
    .slice(0, 4);

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-1">
          {greeting.en} {displayName}! {userAvatar}
        </h1>
        <p style={{ color: "var(--theme-text-secondary)" }}>{greeting.cn}</p>
        {skillLabel && (
          <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>
            {skillLabel.emoji} {skillLabel.en} · {skillLabel.cn} · 准备好升级了吗？
          </p>
        )}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <XPBar xp={progress.xp} level={progress.level} />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <StatsBar progress={progress} />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <QuickActions />
      </motion.div>

      {recommendedLessons.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold">🎯 Recommended for You {skillLabel ? skillLabel.emoji : ""}</h2>
              <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>为你推荐的课程</p>
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

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <SkillTree progress={progress} />
      </motion.div>
    </div>
  );
}
