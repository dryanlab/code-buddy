"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

export default function ThemeChooserModal() {
  const { themes, themeId, setThemeId, hasChosenTheme, markThemeChosen } = useTheme();

  if (hasChosenTheme) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="w-full max-w-2xl rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
          style={{ backgroundColor: "var(--theme-card-bg)", color: "var(--theme-text-primary)" }}
        >
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">🎨</div>
            <h2 className="text-2xl font-bold">Choose Your Style!</h2>
            <p className="text-sm mt-1" style={{ color: "var(--theme-text-muted)" }}>
              选择你喜欢的风格！
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {themes.map((t) => (
              <motion.button
                key={t.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setThemeId(t.id)}
                className="rounded-xl p-3 border-2 transition-all text-center"
                style={{
                  backgroundColor: t.colors.bg,
                  borderColor: themeId === t.id ? t.colors.primary : t.colors.border,
                  boxShadow: themeId === t.id ? `0 0 12px ${t.colors.primary}40` : "none",
                }}
              >
                <div className="text-2xl mb-1">{t.emoji}</div>
                <div className="text-xs font-bold" style={{ color: t.colors.textPrimary }}>{t.name}</div>
                <div className="text-[10px]" style={{ color: t.colors.textMuted }}>{t.nameZh}</div>
                <div className="flex gap-1 justify-center mt-2">
                  {[t.colors.primary, t.colors.primaryLight, t.colors.secondary, t.colors.accent].map((c, i) => (
                    <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={markThemeChosen}
            className="w-full py-3 rounded-xl font-bold text-white"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            ✨ Let&apos;s Go! · 开始吧！
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
