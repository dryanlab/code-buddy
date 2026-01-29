"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProgress } from "@/lib/progress-store";
import { MODULES, LESSONS } from "@/data/lessons";

export default function LessonsPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    setCompletedLessons(getProgress().completedLessons);
  }, []);

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-1">📚 Lessons</h1>
        <p className="text-sm text-gray-400 mb-1">课程</p>
        <p className="text-slate-400 mb-2">Choose a module and start your coding adventure!</p>
        <p className="text-sm text-gray-500 mb-8">选择一个模块，开始你的编程冒险！</p>
      </motion.div>

      <div className="space-y-10">
        {MODULES.map((mod, mi) => {
          const moduleLessons = LESSONS.filter((l) => l.moduleId === mod.id).sort((a, b) => a.order - b.order);
          const completed = moduleLessons.filter((l) => completedLessons.includes(l.id)).length;

          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: mi * 0.15 }}
            >
              {/* Module header */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{mod.icon}</span>
                <div>
                  <h2 className="text-xl font-bold">{mod.title}</h2>
                  <p className="text-sm text-slate-400">{mod.subtitle}</p>
                </div>
                <div className="ml-auto text-sm text-slate-400">
                  {completed}/{moduleLessons.length} completed
                  <span className="text-xs text-gray-500 block text-right">已完成</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-slate-800 rounded-full mb-4 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${mod.color} rounded-full transition-all`}
                  style={{ width: `${moduleLessons.length > 0 ? (completed / moduleLessons.length) * 100 : 0}%` }}
                />
              </div>

              {/* Lesson cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {moduleLessons.map((lesson, li) => {
                  const isDone = completedLessons.includes(lesson.id);
                  const isLocked = li > 0 && !completedLessons.includes(moduleLessons[li - 1].id) && !isDone;

                  return (
                    <Link
                      key={lesson.id}
                      href={isLocked ? "#" : `/dashboard/lessons/${lesson.id}`}
                      className={isLocked ? "pointer-events-none" : ""}
                    >
                      <motion.div
                        whileHover={isLocked ? {} : { scale: 1.02 }}
                        className={`relative p-4 rounded-xl border transition-colors ${
                          isDone
                            ? "bg-green-500/10 border-green-500/30"
                            : isLocked
                            ? "bg-slate-800/30 border-slate-700/20 opacity-50"
                            : "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {isDone ? "✅" : isLocked ? "🔒" : lesson.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm truncate">{lesson.title}</div>
                            <div className="text-xs text-slate-400 truncate">{lesson.subtitle}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-green-400">+{lesson.xp} XP</div>
                            <div className="text-xs text-slate-500">{lesson.duration}</div>
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
