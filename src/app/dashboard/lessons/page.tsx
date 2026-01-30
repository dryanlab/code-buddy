"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProgress } from "@/lib/progress-store";
import { MODULES, LESSONS } from "@/data/lessons";
import { useUserProfile } from "@/lib/useUserProfile";
import { getStartingIndex, getLessonIndex, CURRICULUM_PATH, SKILL_LABELS, type SkillLevel } from "@/lib/skill-store";

export default function LessonsPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const { profile } = useUserProfile();
  const skillLevel: SkillLevel = profile?.skillLevel || "beginner";
  const startIdx = getStartingIndex(skillLevel);
  const skillLabel = SKILL_LABELS[skillLevel];

  useEffect(() => {
    setCompletedLessons(getProgress().completedLessons);
  }, []);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-1">📚 Lessons</h1>
        <p className="text-sm mb-1" style={{ color: "var(--theme-text-muted)" }}>课程</p>
        <p className="mb-2" style={{ color: "var(--theme-text-secondary)" }}>
          Your journey as {skillLabel.emoji} {skillLabel.en} starts at lesson {startIdx + 1} of {CURRICULUM_PATH.length}
        </p>
        <p className="text-sm mb-8" style={{ color: "var(--theme-text-muted)" }}>
          {skillLabel.cn}的旅程从第 {startIdx + 1} 课开始 · 选择一个模块开始冒险！
        </p>
      </motion.div>

      <div className="space-y-10">
        {MODULES.map((mod, mi) => {
          const moduleLessons = LESSONS.filter((l) => l.moduleId === mod.id).sort((a, b) => a.order - b.order);
          const completed = moduleLessons.filter((l) => completedLessons.includes(l.id)).length;

          // Check if entire module is "review" territory
          const moduleIndices = moduleLessons.map((l) => getLessonIndex(l.id));
          const allBeforeStart = moduleIndices.every((idx) => idx < startIdx);

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
                  const isBeforeStart = globalIdx < startIdx;
                  const isAtOrAfterStart = globalIdx >= startIdx;

                  // Unlock logic: lessons before starting point are always unlocked (review).
                  // Lessons at/after starting point follow normal sequential unlock.
                  const isLocked = isAtOrAfterStart
                    && !isDone
                    && li > 0
                    && !completedLessons.includes(prevLesson!.id)
                    // But the very first lesson at or after start should be unlocked
                    && globalIdx !== startIdx;

                  // Difficulty badge based on curriculum position
                  const diffBadge = globalIdx < 6 ? "🟢" : globalIdx < 12 ? "🟡" : "🔴";

                  return (
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
    </div>
  );
}
