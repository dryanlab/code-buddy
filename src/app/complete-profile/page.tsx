"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { getAvatarOptions, completeGoogleProfile, ensureProfile } from "@/lib/auth-store";

const GRADES = [
  { value: "4", label: "Grade 4" },
  { value: "5", label: "Grade 5" },
  { value: "6", label: "Grade 6" },
  { value: "7", label: "Grade 7" },
  { value: "8", label: "Grade 8" },
  { value: "9", label: "Grade 9" },
  { value: "10", label: "Grade 10" },
];

export default function CompleteProfilePage() {
  const router = useRouter();
  const avatars = getAvatarOptions();
  const [grade, setGrade] = useState("6");
  const [avatar, setAvatar] = useState(avatars[0]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If profile already exists, go to dashboard
    ensureProfile().then(({ hasProfile }) => {
      if (hasProfile) router.replace("/dashboard");
    });
  }, [router]);

  async function handleSubmit() {
    setLoading(true);
    setError("");
    const { error: err } = await completeGoogleProfile(grade, avatar);
    if (err) { setError(err); setLoading(false); return; }
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🚀</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Complete Your Profile
          </h1>
          <p className="text-sm text-[var(--theme-text-muted)] mt-2">完善你的飞行员档案</p>
        </div>

        <div className="bg-[var(--theme-card-bg)] border border-[var(--theme-border)] rounded-2xl p-8 backdrop-blur space-y-6">
          {/* Grade */}
          <div>
            <label className="block text-sm font-medium text-[var(--theme-text-secondary)] mb-2">
              Grade Level <span className="text-[var(--theme-text-muted)] text-xs">年级</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {GRADES.map((g) => (
                <motion.button
                  key={g.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setGrade(g.value)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    grade === g.value
                      ? "bg-green-500/20 border border-green-500/50 text-green-400"
                      : "bg-[var(--theme-input-bg)] border border-[var(--theme-border)] text-[var(--theme-text-secondary)] hover:border-[var(--theme-border)]"
                  }`}
                >
                  {g.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div>
            <label className="block text-sm font-medium text-[var(--theme-text-secondary)] mb-2">
              Choose Your Avatar <span className="text-[var(--theme-text-muted)] text-xs">选择头像</span>
            </label>
            <div className="grid grid-cols-6 gap-3">
              {avatars.map((a) => (
                <motion.button
                  key={a}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setAvatar(a)}
                  className={`text-3xl p-2 rounded-xl transition-colors ${
                    avatar === a
                      ? "bg-green-500/20 border-2 border-green-500/50 shadow-lg shadow-green-500/10"
                      : "bg-[var(--theme-input-bg)] border-2 border-transparent hover:border-[var(--theme-border)]"
                  }`}
                >
                  {a}
                </motion.button>
              ))}
            </div>
          </div>

          {error && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center">
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-xl text-lg hover:from-green-400 hover:to-cyan-400 transition-all disabled:opacity-50"
          >
            {loading ? "Saving..." : "🚀 Launch My Profile!"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
