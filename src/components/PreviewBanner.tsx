"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { exitPreviewMode, isPreviewMode } from "@/lib/preview-mode";

export default function PreviewBanner() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (isPreviewMode()) setVisible(true);
  }, []);

  useEffect(() => {
    if (!dismissed) return;
    // Re-show after 5 minutes
    const t = setTimeout(() => setDismissed(false), 5 * 60 * 1000);
    return () => clearTimeout(t);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-[55] flex items-center justify-center gap-3 px-4 py-2 text-sm"
        style={{
          background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
          color: "var(--theme-bg)",
        }}
      >
        <span className="font-medium">
          🔒 Preview Mode · 试用模式 — You&apos;re exploring! Sign up to save progress and unlock all lessons.
        </span>
        <button
          onClick={() => {
            exitPreviewMode();
            router.push("/login");
          }}
          className="px-3 py-1 rounded-lg font-bold text-xs whitespace-nowrap"
          style={{
            backgroundColor: "var(--theme-bg)",
            color: "var(--color-primary)",
          }}
        >
          Sign Up Free · 免费注册
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="ml-1 opacity-70 hover:opacity-100 text-lg leading-none"
          title="Dismiss"
        >
          ✕
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
