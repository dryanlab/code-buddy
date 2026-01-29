"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getUser, registerUser, signUp, getAvatarOptions } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";
import GoogleSignInButton from "@/components/GoogleSignInButton";

const GRADES = [
  { value: "4", label: "Grade 4" },
  { value: "5", label: "Grade 5" },
  { value: "6", label: "Grade 6" },
  { value: "7", label: "Grade 7" },
  { value: "8", label: "Grade 8" },
  { value: "9", label: "Grade 9" },
  { value: "10", label: "Grade 10" },
];

export default function RegisterPage() {
  const router = useRouter();
  const avatars = getAvatarOptions();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [grade, setGrade] = useState("6");
  const [avatar, setAvatar] = useState(avatars[0]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const useSupabase = isSupabaseConfigured;

  useEffect(() => {
    const user = getUser();
    if (user) router.replace("/dashboard");
  }, [router]);

  async function handleRegister() {
    const trimmed = name.trim();
    if (!trimmed) { setError("Please enter your name!"); return; }
    if (trimmed.length < 2) { setError("Name must be at least 2 characters."); return; }

    if (useSupabase) {
      if (!email) { setError("Please enter your email."); return; }
      if (!password || password.length < 6) { setError("Password must be at least 6 characters."); return; }
    }

    setLoading(true);
    setError("");
    try {
      if (useSupabase) {
        const { error: err } = await signUp(email, password, trimmed, grade, avatar);
        if (err) { setError(err); return; }
      } else {
        registerUser(trimmed, grade, avatar);
      }
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="text-7xl mb-4"
          >
            🚀
          </motion.div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Create Your Pilot Profile
          </h1>
          <p className="text-sm text-gray-400 mt-2">创建你的飞行员档案</p>
        </div>

        {/* Registration Card */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur space-y-6">
          {/* Google Sign Up */}
          {useSupabase && (
            <>
              <GoogleSignInButton mode="signup" />
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-600/50" />
                <span className="text-sm text-slate-500">or / 或</span>
                <div className="flex-1 h-px bg-slate-600/50" />
              </div>
            </>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Pilot Name <span className="text-gray-500 text-xs">飞行员代号</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(""); }}
              placeholder="Enter your name..."
              maxLength={20}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/25 transition-colors"
            />
          </div>

          {/* Email & Password (Supabase mode) */}
          {useSupabase && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email <span className="text-gray-500 text-xs">邮箱</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/25 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password <span className="text-gray-500 text-xs">密码（至少6位）</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  placeholder="Create a password..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/25 transition-colors"
                />
              </div>
            </>
          )}

          {/* Grade */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Grade Level <span className="text-gray-500 text-xs">年级</span>
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
                      : "bg-slate-900/50 border border-slate-600/30 text-slate-400 hover:border-slate-500"
                  }`}
                >
                  {g.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Choose Your Avatar <span className="text-gray-500 text-xs">选择头像</span>
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
                      : "bg-slate-900/50 border-2 border-transparent hover:border-slate-600"
                  }`}
                >
                  {a}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="bg-slate-900/50 border border-slate-700/30 rounded-xl p-4 text-center">
            <div className="text-4xl mb-2">{avatar}</div>
            <div className="font-bold text-lg">{name || "????"}</div>
            <div className="text-xs text-slate-400">Grade {grade} Pilot</div>
          </div>

          {error && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center">
              {error}
            </motion.p>
          )}

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRegister}
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-xl text-lg hover:from-green-400 hover:to-cyan-400 transition-all disabled:opacity-50"
          >
            {loading ? "Creating Profile..." : "🚀 Launch My Profile!"}
          </motion.button>

          <div className="text-center">
            <p className="text-sm text-slate-400">
              Already have a profile?{" "}
              <Link href="/login" className="text-green-400 hover:text-green-300 font-medium">
                Sign In
              </Link>
            </p>
            <p className="text-xs text-gray-500">
              已有档案？<Link href="/login" className="text-green-400/70">登录</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
