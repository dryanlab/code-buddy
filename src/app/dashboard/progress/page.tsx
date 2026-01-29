"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getProgress,
  getProgressAsync,
  getLevelInfo,
  LEVELS,
  ALL_BADGES,
  type UserProgress,
} from "@/lib/progress-store";
import { getCoinState, REWARD_CATALOG, type CoinState } from "@/lib/coin-store";
import { MODULES, LESSONS } from "@/data/lessons";
import { isSupabaseConfigured } from "@/lib/supabase";

function ProgressRing({ percent, size = 80, stroke = 6, color = "green" }: { percent: number; size?: number; stroke?: number; color?: string }) {
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (percent / 100) * circ;
  const colors: Record<string, string> = {
    green: "#22c55e",
    cyan: "#06b6d4",
    purple: "#a855f7",
    yellow: "#eab308",
  };

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#1e293b" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        stroke={colors[color] || colors.green}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000"
      />
    </svg>
  );
}

function OverviewStats({ progress, coins }: { progress: UserProgress; coins: CoinState }) {
  const levelInfo = getLevelInfo(progress.xp);
  const totalLessons = LESSONS.length;
  const completionPct = totalLessons > 0 ? Math.round((progress.completedLessons.length / totalLessons) * 100) : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Level", labelCn: "等级", value: levelInfo.name, sub: `${progress.xp} XP`, color: "green" },
        { label: "Completed", labelCn: "已完成", value: `${progress.completedLessons.length}/${totalLessons}`, sub: `${completionPct}%`, color: "cyan" },
        { label: "Streak", labelCn: "连续天数", value: `${progress.streakDays} days`, sub: progress.lastActiveDate || "No activity", color: "purple" },
        { label: "Coins", labelCn: "金币", value: `🪙 ${coins.coins}`, sub: `Total earned: ${coins.totalEarned}`, color: "yellow" },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 text-center"
        >
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
          <div className="text-[10px] text-gray-500">{stat.labelCn}</div>
          <div className="text-[10px] text-slate-500 mt-1">{stat.sub}</div>
        </motion.div>
      ))}
    </div>
  );
}

function ModuleProgress({ progress }: { progress: UserProgress }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold">📚 Module Progress</h2>
        <p className="text-sm text-gray-500">模块进度</p>
      </div>
      <div className="space-y-3">
        {MODULES.map((mod) => {
          const modLessons = LESSONS.filter((l) => l.moduleId === mod.id);
          const completed = modLessons.filter((l) => progress.completedLessons.includes(l.id)).length;
          const pct = modLessons.length > 0 ? Math.round((completed / modLessons.length) * 100) : 0;

          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <ProgressRing percent={pct} size={60} stroke={5} />
                  <div className="absolute inset-0 flex items-center justify-center text-lg">
                    {mod.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm">{mod.title}</div>
                  <div className="text-[10px] text-gray-500">{mod.subtitle}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-400">{completed}/{modLessons.length}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function BadgeWall({ progress }: { progress: UserProgress }) {
  const earned = new Set(progress.earnedBadges);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold">🏅 Badge Collection</h2>
        <p className="text-sm text-gray-500">徽章收藏 — {earned.size}/{ALL_BADGES.length} unlocked</p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {ALL_BADGES.map((badge) => {
          const isEarned = earned.has(badge.id);
          return (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl p-3 text-center border transition-all ${
                isEarned
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-slate-800/20 border-slate-700/20 opacity-40 grayscale"
              }`}
            >
              <div className="text-3xl mb-1">{badge.icon}</div>
              <div className="text-[10px] font-medium truncate">{badge.name}</div>
              <div className="text-[8px] text-gray-500 truncate">{badge.description}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ActivityStats({ progress }: { progress: UserProgress }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold">📊 Activity Stats</h2>
        <p className="text-sm text-gray-500">活动统计</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: "▶️", label: "Code Runs", labelCn: "运行次数", value: progress.codeRunCount },
          { icon: "💬", label: "AI Chats", labelCn: "AI对话", value: progress.chatMessageCount },
          { icon: "🏅", label: "Badges", labelCn: "徽章", value: progress.earnedBadges.length },
          { icon: "📈", label: "Avg Score", labelCn: "平均分", value: (() => {
            const scores = Object.values(progress.lessonScores);
            if (scores.length === 0) return "N/A";
            return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) + "%";
          })() },
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-xl font-bold">{stat.value}</div>
            <div className="text-xs text-slate-400">{stat.label}</div>
            <div className="text-[10px] text-gray-500">{stat.labelCn}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LessonScores({ progress }: { progress: UserProgress }) {
  const completedWithScores = LESSONS.filter(
    (l) => progress.completedLessons.includes(l.id) && progress.lessonScores[l.id] !== undefined
  );

  if (completedWithScores.length === 0) return null;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold">📝 Quiz Scores</h2>
        <p className="text-sm text-gray-500">测验成绩</p>
      </div>
      <div className="space-y-2">
        {completedWithScores.map((lesson) => {
          const score = progress.lessonScores[lesson.id] || 0;
          return (
            <div key={lesson.id} className="flex items-center gap-3 bg-slate-800/20 rounded-lg px-4 py-2">
              <span className="text-lg">{lesson.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{lesson.title}</div>
              </div>
              <div className={`text-sm font-bold ${
                score >= 80 ? "text-green-400" : score >= 50 ? "text-yellow-400" : "text-red-400"
              }`}>
                {score}%
              </div>
              <div className="text-lg">
                {score >= 80 ? "🌟" : score >= 50 ? "👍" : "💪"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ProgressPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [coins, setCoins] = useState<CoinState | null>(null);

  useEffect(() => {
    async function load() {
      const p = isSupabaseConfigured ? await getProgressAsync() : getProgress();
      setProgress(p);
      setCoins(getCoinState());
    }
    load();
  }, []);

  if (!progress || !coins) return null;

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">📊 My Progress</h1>
        <p className="text-sm text-gray-500">我的学习进度</p>
      </motion.div>

      <OverviewStats progress={progress} coins={coins} />
      <ModuleProgress progress={progress} />
      <BadgeWall progress={progress} />
      <ActivityStats progress={progress} />
      <LessonScores progress={progress} />
    </div>
  );
}
