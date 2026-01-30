"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { exitPreviewMode } from "@/lib/preview-mode";

export default function SignUpModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();

  const handleSignUp = () => {
    exitPreviewMode();
    onClose();
    router.push("/login");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4"
          >
            <div
              className="rounded-2xl p-8 max-w-md w-full text-center space-y-5"
              style={{
                backgroundColor: "var(--theme-card-bg)",
                border: "1px solid var(--theme-border)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div className="text-5xl">🔒</div>
              <h2 className="text-2xl font-bold">Sign Up to Unlock</h2>
              <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>注册解锁全部内容</p>
              <p style={{ color: "var(--theme-text-secondary)" }}>
                Create a free account to save your progress, unlock all lessons, and access every feature!
              </p>
              <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>
                创建免费账号，保存进度、解锁所有课程和功能！
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={handleSignUp}
                  className="w-full py-3 font-bold text-lg rounded-xl hover:opacity-90 transition-opacity"
                  style={{
                    background: "linear-gradient(to right, var(--color-primary), var(--color-primary-light))",
                    color: "var(--theme-bg)",
                  }}
                >
                  🚀 Sign Up Free · 免费注册
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2 text-sm rounded-xl transition-colors"
                  style={{ color: "var(--theme-text-muted)" }}
                >
                  Keep exploring · 继续浏览
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
