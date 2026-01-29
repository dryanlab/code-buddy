"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

export default function SettingsPage() {
  const { theme, themes, themeId, setThemeId } = useTheme();

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-8">
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
    </div>
  );
}
