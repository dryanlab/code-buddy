"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProgress, getProgressAsync, getLevelInfo, LEVELS, getLastLessonId, mergeProgressFromCloud, type UserProgress, ALL_BADGES } from "@/lib/progress-store";
import { getCoinState, mergeCoinsFromCloud } from "@/lib/coin-store";
import { loadAllFromCloud } from "@/lib/cloud-sync";
import { mergeSkillsFromCloud } from "@/lib/skill-store";
import { MODULES, LESSONS } from "@/data/lessons";
import { CPP_MODULES, CPP_LESSONS } from "@/data/cpp-lessons";
import { DS_MODULES, DS_LESSONS } from "@/data/ds-lessons";
import { getUser, getSessionUser, type UserProfile } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";
import { useUserProfile, getSkillGreeting } from "@/lib/useUserProfile";
import { SKILL_LABELS, type SkillLevel, getNextLessonId, getStartingIndex, CURRICULUM_PATH } from "@/lib/skill-store";
import SkillQuiz from "@/components/SkillQuiz";
import AdventureMap from "@/components/AdventureMap";
import { TRACKS } from "@/data/tracks";

// All modules combined
const ALL_MODULES = [...MODULES, ...CPP_MODULES, ...DS_MODULES];
const ALL_LESSONS = [...LESSONS, ...CPP_LESSONS, ...DS_LESSONS];

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

// ═══════════════════════════════════════════════════════════════
// 🏆 Area Conquered! Section
// ═══════════════════════════════════════════════════════════════
function AreaConquered({ progress }: { progress: UserProgress }) {
  const conqueredModules = ALL_MODULES.filter((mod) => {
    if (!mod.lessons || mod.lessons.length === 0) return false;
    return mod.lessons.every((lid) => progress.completedLessons.includes(lid));
  });

  if (conqueredModules.length === 0) return null;

  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-bold">🏆 Areas Conquered!</h2>
        <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>已征服的区域</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {conqueredModules.map((mod, i) => {
          const moduleLessons = ALL_LESSONS.filter((l) => l.moduleId === mod.id);
          const totalXp = moduleLessons.reduce((sum, l) => sum + (l.xp || 0), 0);
          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              className="relative rounded-xl p-4 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(250,204,21,0.2), rgba(245,158,11,0.15), rgba(234,88,12,0.1))",
                border: "1.5px solid rgba(250,204,21,0.4)",
              }}
            >
              {/* Confetti dots */}
              {[...Array(6)].map((_, j) => (
                <motion.div
                  key={j}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: ["#facc15", "#f97316", "#a855f7", "#22d3ee", "#34d399", "#f472b6"][j],
                    top: `${10 + (j * 15) % 80}%`,
                    left: `${5 + (j * 23) % 90}%`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2, delay: j * 0.3 }}
                />
              ))}
              <div className="relative z-10">
                <div className="text-3xl mb-2">{mod.icon}</div>
                <div className="font-bold text-sm leading-tight">{mod.title}</div>
                <div className="text-[10px] mt-1" style={{ color: "var(--theme-text-secondary)" }}>
                  ✅ Completed · 已完成
                </div>
                {totalXp > 0 && (
                  <div className="text-[10px] mt-0.5 font-semibold" style={{ color: "rgba(250,204,21,0.9)" }}>
                    +{totalXp} XP earned
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 🎯 Skill Radar (SVG Spider Chart)
// ═══════════════════════════════════════════════════════════════
function SkillRadar({ progress }: { progress: UserProgress }) {
  const scores = progress.lessonScores || {};
  const completed = new Set(progress.completedLessons);

  // Helper: average scores for lessons in given module IDs
  function avgScoreForModules(moduleIds: string[]): number {
    const relevant = ALL_LESSONS.filter((l) => moduleIds.includes(l.moduleId));
    const scored = relevant.filter((l) => scores[l.id] !== undefined);
    if (scored.length === 0) return 0;
    const avg = scored.reduce((s, l) => s + (scores[l.id] || 0), 0) / scored.length;
    // Weight by completion ratio
    const completionRatio = relevant.filter((l) => completed.has(l.id)).length / Math.max(relevant.length, 1);
    return Math.round(avg * 0.7 + completionRatio * 100 * 0.3);
  }

  // 🧠 Logic: area-1, area-2, cpp-1, cpp-2
  const logic = avgScoreForModules(["area-1", "area-2", "cpp-1", "cpp-2"]);

  // 🔧 Engineering: area-3, area-4, cpp-3, cpp-4, cpp-5
  const engineering = avgScoreForModules(["area-3", "area-4", "cpp-3", "cpp-4", "cpp-5"]);

  // 🎨 Creativity: lessons with "art", "game", "project" in title
  const creativeLessons = ALL_LESSONS.filter((l) =>
    /(art|game|project|turtle|creative|adventure)/i.test(l.title)
  );
  const creativeCompleted = creativeLessons.filter((l) => completed.has(l.id)).length;
  const creativity = creativeLessons.length > 0
    ? Math.round((creativeCompleted / creativeLessons.length) * 100)
    : 0;

  // 🐛 Debugging: overall average quiz accuracy
  const allScored = Object.values(scores);
  const overallAvg = allScored.length > 0
    ? allScored.reduce((a, b) => a + b, 0) / allScored.length
    : 0;
  const debugging = Math.round(overallAvg);

  // ⚡ Speed: code runs per completed lesson + streak bonus
  const completedCount = progress.completedLessons.length || 1;
  const runsPerLesson = progress.codeRunCount / completedCount;
  // More runs = more experimentation. Cap at ~10 runs/lesson = 100
  const speedFromRuns = Math.min(100, Math.round(runsPerLesson * 10));
  const streakBonus = Math.min(30, progress.streakDays * 3);
  const speed = Math.min(100, Math.round(speedFromRuns * 0.7 + streakBonus));

  const dimensions = [
    { label: "🧠 Logic", labelCn: "逻辑", value: logic },
    { label: "🔧 Engineering", labelCn: "工程", value: engineering },
    { label: "🎨 Creativity", labelCn: "创造力", value: creativity },
    { label: "🐛 Debugging", labelCn: "调试", value: debugging },
    { label: "⚡ Speed", labelCn: "速度", value: speed },
  ];

  // SVG radar chart
  const cx = 150, cy = 150, r = 100;
  const n = 5;
  const angleStep = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2; // top

  function polarToXY(angle: number, radius: number) {
    return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
  }

  // Pentagon grid lines
  const gridLevels = [0.25, 0.5, 0.75, 1.0];
  const gridPaths = gridLevels.map((level) => {
    const points = Array.from({ length: n }, (_, i) => {
      const a = startAngle + i * angleStep;
      return polarToXY(a, r * level);
    });
    return points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";
  });

  // Data polygon
  const dataPoints = dimensions.map((d, i) => {
    const a = startAngle + i * angleStep;
    const val = Math.max(5, d.value) / 100; // min 5% so it's visible
    return polarToXY(a, r * val);
  });
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";

  // Axis lines
  const axisEnds = Array.from({ length: n }, (_, i) => {
    const a = startAngle + i * angleStep;
    return polarToXY(a, r);
  });

  // Label positions (slightly outside)
  const labelPositions = Array.from({ length: n }, (_, i) => {
    const a = startAngle + i * angleStep;
    return polarToXY(a, r + 30);
  });

  return (
    <div className="space-y-3 flex-1">
      <div>
        <h2 className="text-lg font-bold">🎯 Skill Radar</h2>
        <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>技能雷达</p>
      </div>
      <div className="rounded-xl p-4" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
        <svg viewBox="0 0 300 300" className="w-full max-w-[280px] mx-auto">
          {/* Grid */}
          {gridPaths.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="var(--theme-border)" strokeWidth={i === gridLevels.length - 1 ? 1.5 : 0.5} opacity={0.6} />
          ))}
          {/* Axes */}
          {axisEnds.map((p, i) => (
            <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--theme-border)" strokeWidth={0.5} opacity={0.4} />
          ))}
          {/* Data polygon */}
          <motion.path
            d={dataPath}
            fill="rgba(99, 102, 241, 0.2)"
            stroke="rgb(99, 102, 241)"
            strokeWidth={2}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
          {/* Data points */}
          {dataPoints.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={4}
              fill="rgb(99, 102, 241)"
              stroke="white"
              strokeWidth={1.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            />
          ))}
          {/* Labels */}
          {labelPositions.map((p, i) => (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--theme-text-secondary)"
              fontSize={11}
              fontWeight={600}
            >
              <tspan x={p.x} dy="-0.4em">{dimensions[i].label}</tspan>
              <tspan x={p.x} dy="1.2em" fontSize={10} fill="var(--theme-text-muted)">{dimensions[i].value}</tspan>
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 🏅 Achievement Wall
// ═══════════════════════════════════════════════════════════════
function AchievementWall({ progress }: { progress: UserProgress }) {
  const earned = new Set(progress.earnedBadges);

  return (
    <div className="space-y-3 flex-1">
      <div>
        <h2 className="text-lg font-bold">🏅 Achievement Wall</h2>
        <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>成就墙 · {earned.size}/{ALL_BADGES.length} unlocked</p>
      </div>
      <div className="rounded-xl p-4" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
          {ALL_BADGES.map((badge) => {
            const isEarned = earned.has(badge.id);
            return (
              <motion.div
                key={badge.id}
                whileHover={{ scale: 1.1 }}
                className="rounded-lg p-2 text-center relative"
                style={{
                  backgroundColor: isEarned ? "rgba(250,204,21,0.1)" : "rgba(128,128,128,0.05)",
                  border: isEarned ? "1px solid rgba(250,204,21,0.3)" : "1px solid var(--theme-border)",
                  opacity: isEarned ? 1 : 0.4,
                  filter: isEarned ? "none" : "grayscale(1)",
                }}
                title={`${badge.name}: ${badge.description}`}
              >
                <div className="text-xl">{badge.icon}</div>
                <div className="text-[8px] mt-0.5 leading-tight font-medium truncate">{badge.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// Existing components (kept as-is)
// ═══════════════════════════════════════════════════════════════

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

function CourseTrackCards({ progress }: { progress: UserProgress }) {
  const statusOrder = { available: 0, "coming-soon": 1, future: 2 } as const;
  const sorted = [...TRACKS].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  const diffIcon = (d: string) => d === "beginner" ? "🟢" : d === "intermediate" ? "🟡" : "🔴";
  const statusBadge = (s: string) =>
    s === "available" ? { text: "✅ Available", bg: "rgba(22,163,74,0.15)", color: "#15803d" }
    : s === "coming-soon" ? { text: "🔜 Coming Soon", bg: "rgba(202,138,4,0.15)", color: "#a16207" }
    : { text: "🔮 Future", bg: "rgba(126,34,206,0.15)", color: "#7e22ce" };

  const getHref = (id: string) =>
    id === "python" ? "/dashboard/lessons"
    : id === "data-structures" ? "/dashboard/data-structures"
    : "/dashboard/courses";

  const pythonTotal = LESSONS.length;
  const pythonDone = progress.completedLessons.filter((id) => LESSONS.some((l) => l.id === id)).length;
  const pythonPct = pythonTotal > 0 ? (pythonDone / pythonTotal) * 100 : 0;

  const cppTotal = CPP_LESSONS.length;
  const cppDone = progress.completedLessons.filter((id) => CPP_LESSONS.some((l) => l.id === id)).length;
  const cppPct = cppTotal > 0 ? (cppDone / cppTotal) * 100 : 0;

  const dsTotal = DS_LESSONS.length;
  const dsDone = progress.completedLessons.filter((id) => DS_LESSONS.some((l) => l.id === id)).length;
  const dsPct = dsTotal > 0 ? (dsDone / dsTotal) * 100 : 0;

  function getTrackProgress(id: string) {
    if (id === "python") return { done: pythonDone, total: pythonTotal, pct: pythonPct };
    if (id === "cpp") return { done: cppDone, total: cppTotal, pct: cppPct };
    if (id === "data-structures") return { done: dsDone, total: dsTotal, pct: dsPct };
    return null;
  }

  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-bold">📚 All Courses</h2>
        <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>全部课程</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {sorted.map((track) => {
          const badge = statusBadge(track.status);
          const tp = getTrackProgress(track.id);
          return (
            <Link key={track.id} href={getHref(track.id)}>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl p-4 h-full flex flex-col gap-2 cursor-pointer transition-shadow"
                style={{
                  backgroundColor: "var(--theme-card-bg)",
                  border: `1.5px solid ${track.colorHex}33`,
                  backgroundImage: `linear-gradient(135deg, ${track.colorHex}08, transparent)`,
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{track.icon}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-medium" style={{ backgroundColor: badge.bg, color: badge.color }}>
                    {badge.text}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight">{track.title}</div>
                  <div className="text-[11px]" style={{ color: "var(--theme-text-secondary)" }}>{track.titleZh}</div>
                </div>
                <p className="text-[10px] leading-snug flex-1" style={{ color: "var(--theme-text-muted)" }}>
                  {track.description}
                </p>
                <div className="flex items-center gap-2 text-[10px]" style={{ color: "var(--theme-text-secondary)" }}>
                  <span>{diffIcon(track.difficulty)}</span>
                  <span>{track.lessonCount} lessons</span>
                </div>
                {tp && tp.done > 0 && (
                  <div className="mt-auto">
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tp.pct}%` }}
                        transition={{ duration: 0.8 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: track.colorHex }}
                      />
                    </div>
                    <div className="text-[9px] mt-0.5" style={{ color: "var(--theme-text-muted)" }}>{tp.done}/{tp.total} done</div>
                  </div>
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
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

  // Cross-course recommendations
  const completedSet = new Set(progress.completedLessons);

  // Python recommendations
  const pythonNext = CURRICULUM_PATH
    .slice(startIdx)
    .map((id) => LESSONS.find((l) => l.id === id)!)
    .filter((l) => l && !completedSet.has(l.id));

  // C++ recommendations (if student has started any C++ lesson)
  const hasCpp = progress.completedLessons.some((id) => id.startsWith("cpp-"));
  const cppNext = hasCpp
    ? CPP_LESSONS.filter((l) => !completedSet.has(l.id)).slice(0, 2)
    : [];

  // DS recommendations (if student has started any DS lesson)
  const hasDs = progress.completedLessons.some((id) => id.startsWith("ds-"));
  const dsNext = hasDs
    ? DS_LESSONS.filter((l) => !completedSet.has(l.id)).slice(0, 2)
    : [];

  // Mix recommendations: prioritize courses student has started, up to 4
  const recommendedLessons: typeof LESSONS = [];
  const sources = [pythonNext, cppNext, dsNext].filter((s) => s.length > 0);
  let idx = 0;
  while (recommendedLessons.length < 4 && sources.some((s) => s.length > idx)) {
    for (const src of sources) {
      if (idx < src.length && recommendedLessons.length < 4) {
        recommendedLessons.push(src[idx]);
      }
    }
    idx++;
  }

  const continueLesson = lastLesson ? ALL_LESSONS.find(l => l.id === lastLesson) : null;

  // Course tag for recommended lessons
  function getCourseTag(lessonId: string) {
    if (lessonId.startsWith("cpp-")) return { label: "C++", color: "#4f46e5" };
    if (lessonId.startsWith("ds-")) return { label: "DS", color: "#3b82f6" };
    return { label: "Python", color: "#22c55e" };
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-5">
      {/* Top: Greeting + Continue Learning */}
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

      {/* 🗺️ Adventure Map */}
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

      {/* 🏆 Area Conquered */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
        <AreaConquered progress={progress} />
      </motion.div>

      {/* 📚 All Courses */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <CourseTrackCards progress={progress} />
      </motion.div>

      {/* 🎯 Skill Radar + 🏅 Achievement Wall (side by side on desktop) */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="flex flex-col md:flex-row gap-5">
        <SkillRadar progress={progress} />
        <AchievementWall progress={progress} />
      </motion.div>

      {/* Stats Row + XP */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-3">
        <XPBar xp={progress.xp} level={progress.level} />
        <StatsRow progress={progress} />
      </motion.div>

      {/* Recommended Lessons (cross-course) */}
      {recommendedLessons.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <div className="space-y-3">
            <div>
              <h2 className="text-lg font-bold">🎯 Your Next Lessons {skillLabel ? skillLabel.emoji : ""}</h2>
              <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>接下来的课程</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {recommendedLessons.map((lesson) => {
                const tag = getCourseTag(lesson.id);
                const lessonHref = lesson.id.startsWith("cpp-")
                  ? `/dashboard/cpp/${lesson.id}`
                  : lesson.id.startsWith("ds-")
                  ? `/dashboard/data-structures/${lesson.id}`
                  : `/dashboard/lessons/${lesson.id}`;
                return (
                  <Link key={lesson.id} href={lessonHref}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl border transition-colors"
                      style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lesson.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm truncate">{lesson.title}</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold shrink-0" style={{ backgroundColor: `${tag.color}22`, color: tag.color }}>
                              {tag.label}
                            </span>
                          </div>
                          <div className="text-xs truncate" style={{ color: "var(--theme-text-secondary)" }}>{lesson.subtitle}</div>
                        </div>
                        <div className="text-xs px-2 py-1 rounded-full shrink-0" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)", color: "var(--color-primary)" }}>
                          +{lesson.xp} XP
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <QuickActions continueHref={continueHref} />
      </motion.div>
    </div>
  );
}
