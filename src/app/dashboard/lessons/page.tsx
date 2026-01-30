"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProgress } from "@/lib/progress-store";
import { MODULES, LESSONS } from "@/data/lessons";
import { CPP_MODULES, CPP_LESSONS } from "@/data/cpp-lessons";
import { DS_MODULES, DS_LESSONS } from "@/data/ds-lessons";
import { ALG_MODULES, ALG_LESSONS } from "@/data/alg-lessons";
import { useUserProfile } from "@/lib/useUserProfile";
import { getStartingIndex, getLessonIndex, CURRICULUM_PATH, SKILL_LABELS, type SkillLevel } from "@/lib/skill-store";
import { isPreviewMode, isLessonUnlocked } from "@/lib/preview-mode";
import SignUpModal from "@/components/SignUpModal";

export default function LessonsPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [preview, setPreview] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const searchParams = useSearchParams();
  const initialTrack = (["python", "cpp", "ds", "alg"] as const).includes(searchParams.get("track") as never)
    ? (searchParams.get("track") as "python" | "cpp" | "ds" | "alg")
    : "python";
  const [track, setTrack] = useState<"python" | "cpp" | "ds" | "alg">(initialTrack);
  const { profile } = useUserProfile();
  const skillLevel: SkillLevel = profile?.skillLevel || "beginner";
  const startIdx = getStartingIndex(skillLevel);
  const skillLabel = SKILL_LABELS[skillLevel];

  const activeModules = track === "python" ? MODULES : track === "cpp" ? CPP_MODULES : track === "ds" ? DS_MODULES : ALG_MODULES;
  const activeLessons = track === "python" ? LESSONS : track === "cpp" ? CPP_LESSONS : track === "ds" ? DS_LESSONS : ALG_LESSONS;

  useEffect(() => {
    setCompletedLessons(getProgress().completedLessons);
    setPreview(isPreviewMode());
  }, []);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-1">📚 Lessons</h1>
        <p className="text-sm mb-1" style={{ color: "var(--theme-text-muted)" }}>课程</p>
        {track === "python" ? (
          <>
            <p className="mb-2" style={{ color: "var(--theme-text-secondary)" }}>
              Your journey as {skillLabel.emoji} {skillLabel.en} starts at lesson {startIdx + 1} of {CURRICULUM_PATH.length}
            </p>
            <p className="text-sm mb-8" style={{ color: "var(--theme-text-muted)" }}>
              {skillLabel.cn}的旅程从第 {startIdx + 1} 课开始 · 选择一个模块开始冒险！
            </p>
          </>
        ) : track === "cpp" ? (
          <>
            <p className="mb-2" style={{ color: "var(--theme-text-secondary)" }}>
              Level up from Python to C++ · 6 modules, 24 lessons
            </p>
            <p className="text-sm mb-8" style={{ color: "var(--theme-text-muted)" }}>
              从Python进阶到C++ · 6个模块，24节课
            </p>
          </>
        ) : (
          <>
            <p className="mb-2" style={{ color: "var(--theme-text-secondary)" }}>
              Visualize how data is organized! · 4 modules, 18 lessons
            </p>
            <p className="text-sm mb-8" style={{ color: "var(--theme-text-muted)" }}>
              可视化数据组织方式！数组、链表、树、图 · 4个模块，18节课
            </p>
          </>
        )}
      </motion.div>

      {/* Track Tabs */}
      <div className="flex gap-2 mb-8">
        {([
          { key: "python" as const, label: "🐍 Python", sub: "Python" },
          { key: "cpp" as const, label: "⚡ C++", sub: "C++" },
          { key: "ds" as const, label: "📦 Data Structures", sub: "DS" },
          { key: "alg" as const, label: "🧩 Algorithms", sub: "ALG" },
        ]).map((t) => (
          <motion.button
            key={t.key}
            whileTap={{ scale: 0.97 }}
            onClick={() => setTrack(t.key)}
            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all"
            style={{
              backgroundColor: track === t.key ? "var(--color-primary)" : "var(--theme-card-bg)",
              color: track === t.key ? "var(--theme-bg)" : "var(--theme-text-secondary)",
              border: `1px solid ${track === t.key ? "var(--color-primary)" : "var(--theme-border)"}`,
            }}
          >
            {t.label}
          </motion.button>
        ))}
      </div>

      <div className="space-y-10">
        {activeModules.map((mod, mi) => {
          const moduleLessons = activeLessons.filter((l) => l.moduleId === mod.id).sort((a, b) => a.order - b.order);
          const completed = moduleLessons.filter((l) => completedLessons.includes(l.id)).length;

          // Check if entire module is "review" territory (Python track only)
          const isCppTrack = track === "cpp" || track === "ds" || track === "alg";
          const moduleIndices = moduleLessons.map((l) => getLessonIndex(l.id));
          const allBeforeStart = !isCppTrack && moduleIndices.every((idx) => idx >= 0 && idx < startIdx);

          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: mi * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{mod.icon}</span>
                <div>
                  <h2 className="text-xl font-bold">
                    {mod.title}
                    {allBeforeStart && (
                      <span className="ml-2 text-sm font-normal" style={{ color: "var(--theme-text-muted)" }}>
                        (Review · 复习)
                      </span>
                    )}
                  </h2>
                  <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>{mod.subtitle}</p>
                </div>
                <div className="ml-auto text-sm" style={{ color: "var(--theme-text-secondary)" }}>
                  {completed}/{moduleLessons.length} completed
                  <span className="text-xs block text-right" style={{ color: "var(--theme-text-muted)" }}>已完成</span>
                </div>
              </div>

              <div className="h-2 rounded-full mb-4 overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
                <div
                  className={`h-full bg-gradient-to-r ${mod.color} rounded-full transition-all`}
                  style={{ width: `${moduleLessons.length > 0 ? (completed / moduleLessons.length) * 100 : 0}%` }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {moduleLessons.map((lesson, li) => {
                  const isDone = completedLessons.includes(lesson.id);
                  const prevLesson = li > 0 ? moduleLessons[li - 1] : null;
                  const globalIdx = getLessonIndex(lesson.id);
                  const isBeforeStart = !isCppTrack && globalIdx >= 0 && globalIdx < startIdx;
                  const isAtOrAfterStart = isCppTrack || globalIdx >= startIdx;

                  // Preview mode: lock all except allowed first lessons
                  const previewLocked = preview && !isLessonUnlocked(lesson.id);

                  // Unlock logic:
                  // Python: lessons before starting point are always unlocked (review).
                  // C++: simple sequential unlock (first lesson of each module always open).
                  const isLocked = previewLocked || (isCppTrack
                    ? (!isDone && li > 0 && !!prevLesson && !completedLessons.includes(prevLesson.id))
                    : (isAtOrAfterStart
                      && !isDone
                      && li > 0
                      && !completedLessons.includes(prevLesson!.id)
                      && globalIdx !== startIdx));

                  // Difficulty badge based on curriculum position
                  const diffBadge = isCppTrack
                    ? (lesson.order <= 2 ? "🟢" : lesson.order <= 4 ? "🟡" : "🔴")
                    : (globalIdx < 6 ? "🟢" : globalIdx < 12 ? "🟡" : "🔴");

                  return previewLocked ? (
                    <button
                      key={lesson.id}
                      onClick={() => setShowSignUpModal(true)}
                      className="w-full text-left"
                    >
                      <motion.div
                        className="relative p-4 rounded-xl border transition-colors"
                        style={{
                          backgroundColor: "var(--theme-card-bg)",
                          borderColor: "var(--theme-border)",
                          opacity: 0.45,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🔒</span>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm truncate">{lesson.title}</div>
                            <div className="text-xs" style={{ color: "var(--theme-text-muted)" }}>Sign up to unlock · 注册解锁</div>
                          </div>
                        </div>
                      </motion.div>
                    </button>
                  ) : (
                    <Link
                      key={lesson.id}
                      href={isLocked ? "#" : `/dashboard/lessons/${lesson.id}`}
                      className={isLocked ? "pointer-events-none" : ""}
                    >
                      <motion.div
                        whileHover={isLocked ? {} : { scale: 1.02 }}
                        className="relative p-4 rounded-xl border transition-colors"
                        style={{
                          backgroundColor: isDone
                            ? `color-mix(in srgb, var(--color-success) 10%, var(--theme-card-bg))`
                            : "var(--theme-card-bg)",
                          borderColor: isDone
                            ? `color-mix(in srgb, var(--color-success) 30%, transparent)`
                            : globalIdx === startIdx && !isDone
                            ? `color-mix(in srgb, var(--color-primary) 40%, transparent)`
                            : "var(--theme-border)",
                          opacity: isLocked ? 0.5 : isBeforeStart && !isDone ? 0.6 : 1,
                        }}
                      >
                        {isBeforeStart && !isDone && (
                          <div className="absolute -top-2 -right-2 text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--theme-border)", color: "var(--theme-text-muted)" }}>
                            📖 Review · 复习
                          </div>
                        )}
                        {globalIdx === startIdx && !isDone && (
                          <div className="absolute -top-2 -right-2 text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: "var(--color-primary)", color: "var(--theme-bg)" }}>
                            ▶️ Start Here · 从这里开始
                          </div>
                        )}
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {isDone ? "✅" : isLocked ? "🔒" : lesson.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm truncate">
                              {diffBadge} {lesson.title}
                            </div>
                            <div className="text-xs truncate" style={{ color: "var(--theme-text-secondary)" }}>{lesson.subtitle}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs" style={{ color: "var(--color-primary)" }}>+{lesson.xp} XP</div>
                            <div className="text-xs" style={{ color: "var(--theme-text-muted)" }}>{lesson.duration}</div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
      <SignUpModal open={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
    </div>
  );
}
