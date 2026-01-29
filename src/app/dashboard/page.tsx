"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProgress, getProgressAsync, getLevelInfo, LEVELS, getLastLessonId, type UserProgress } from "@/lib/progress-store";
import { getCoinState } from "@/lib/coin-store";
import { MODULES, LESSONS } from "@/data/lessons";
import { getUser, getSessionUser, type UserProfile } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";

function XPBar({ xp, level }: { xp: number; level: number }) {
  const info = getLevelInfo(xp);
  const currentLevel = LEVELS.find((l) => l.level === level) || LEVELS[0];
  const nextLevel = LEVELS[level] || null;

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-2xl font-bold">{currentLevel.name}</div>
          <div className="text-sm text-slate-400">Level {level}</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">{xp} XP</div>
          {nextLevel && (
            <div className="text-xs text-slate-500">{nextLevel.xp - xp} XP to next level · 距下一级还差 {nextLevel.xp - xp} XP</div>
          )}
        </div>
      </div>
      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${info.progressToNext * 100}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
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
        <p className="text-sm text-gray-400">技能树</p>
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
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-green-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{mod.icon}</span>
                  <div>
                    <div className="font-bold">{mod.title}</div>
                    <div className="text-xs text-slate-400">{mod.subtitle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${mod.color} rounded-full transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-400">{completed}/{total}</span>
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
        <p className="text-sm text-gray-400">快捷入口</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { href: continueHref, icon: "📚", label: "Continue Learning", labelCn: "继续学习", color: "from-purple-500/20 to-purple-600/20 border-purple-500/30" },
          { href: "/dashboard/code-lab", icon: "💻", label: "Code Lab", labelCn: "代码实验室", color: "from-green-500/20 to-green-600/20 border-green-500/30" },
          { href: "/dashboard/explore", icon: "🔬", label: "Explore CS", labelCn: "计算机探秘", color: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30" },
          { href: "/dashboard/ai-chat", icon: "🤖", label: "Ask AI Buddy", labelCn: "问 AI 助手", color: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30" },
        ].map((action) => (
          <Link key={action.href} href={action.href}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br ${action.color} border rounded-xl p-4 text-center cursor-pointer`}
            >
              <div className="text-3xl mb-2">{action.icon}</div>
              <div className="text-xs font-medium">{action.label}</div>
              <div className="text-[10px] text-gray-500">{action.labelCn}</div>
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
        <div key={stat.label} className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4 text-center">
          <div className="text-2xl mb-1">{stat.icon}</div>
          <div className="text-xl font-bold">{stat.value}</div>
          <div className="text-xs text-slate-400">{stat.label}</div>
          <div className="text-[10px] text-gray-500">{stat.labelCn}</div>
        </div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);

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

  const displayName = user?.name || "Coder";

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-1">
          Hi, {displayName}! {user?.avatar || "👋"}
        </h1>
        <p className="text-slate-400">Ready to level up today?</p>
        <p className="text-sm text-gray-500">准备好升级了吗？</p>
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

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <SkillTree progress={progress} />
      </motion.div>
    </div>
  );
}
