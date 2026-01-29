"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { useUserProfile } from "@/lib/useUserProfile";
import { SKILL_LABELS } from "@/lib/skill-store";
import SkillQuiz from "@/components/SkillQuiz";

export default function SettingsPage() {
  const { themes, themeId, setThemeId } = useTheme();
  const { profile, refreshSkill } = useUserProfile();
  const [showQuiz, setShowQuiz] = useState(false);

  const skillLabel = profile?.skillLevel ? SKILL_LABELS[profile.skillLevel] : null;

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-8">
      {showQuiz && (
        <SkillQuiz onComplete={() => { setShowQuiz(false); refreshSkill(); }} />
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">⚙️ Settings</h1>
        <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>设置</p>
      </motion.div>

      {/* Theme Picker */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h2 className="text-xl font-bold mb-1">🎨 Theme · 主题</h2>
        <p className="text-sm mb-4" style={{ color: "var(--theme-text-secondary)" }}>
          Choose your favorite style! · 选择你喜欢的风格！
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {themes.map((t) => (
            <motion.button
              key={t.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setThemeId(t.id)}
              className="rounded-xl p-4 border-2 transition-all text-left"
              style={{
                backgroundColor: t.colors.cardBg,
                borderColor: themeId === t.id ? t.colors.primary : t.colors.border,
                boxShadow: themeId === t.id ? `0 0 16px ${t.colors.primary}40` : "none",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{t.emoji}</span>
                <div>
                  <div className="font-bold text-sm" style={{ color: t.colors.textPrimary }}>{t.name}</div>
                  <div className="text-xs" style={{ color: t.colors.textMuted }}>{t.nameZh}</div>
                </div>
              </div>
              <p className="text-xs mb-3" style={{ color: t.colors.textSecondary }}>{t.description}</p>
              <div className="flex gap-1.5">
                {[t.colors.primary, t.colors.primaryLight, t.colors.secondary, t.colors.accent, t.colors.bg].map((c, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: c, borderColor: t.colors.border }}
                  />
                ))}
              </div>
              {themeId === t.id && (
                <div className="mt-2 text-xs font-bold" style={{ color: t.colors.primary }}>
                  ✅ Active · 当前
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Skill Level */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h2 className="text-xl font-bold mb-1">🎯 Skill Level · 技能等级</h2>
        <p className="text-sm mb-4" style={{ color: "var(--theme-text-secondary)" }}>
          Your coding skill level affects lesson recommendations and AI responses.
        </p>
        <p className="text-sm mb-4" style={{ color: "var(--theme-text-muted)" }}>
          你的编程技能等级会影响课程推荐和 AI 回答方式。
        </p>

        <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
          {skillLabel ? (
            <div className="flex items-center gap-4">
              <span className="text-4xl">{skillLabel.emoji}</span>
              <div>
                <div className="font-bold text-lg">{skillLabel.en}</div>
                <div className="text-sm" style={{ color: "var(--theme-text-muted)" }}>{skillLabel.cn}</div>
              </div>
            </div>
          ) : (
            <p style={{ color: "var(--theme-text-secondary)" }}>No skill level set yet · 还没有设置技能等级</p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowQuiz(true)}
          className="px-6 py-3 rounded-xl font-bold transition-colors"
          style={{ backgroundColor: "var(--color-primary)", color: "var(--theme-bg)" }}
        >
          {skillLabel ? "🔄 Retake Quiz · 重新测试" : "🎯 Take Skill Quiz · 技能测试"}
        </motion.button>
      </motion.div>
    </div>
  );
}
