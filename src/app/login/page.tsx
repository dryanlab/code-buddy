"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getUser, signIn, signInLocal } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const useSupabase = isSupabaseConfigured;

  useEffect(() => {
    const user = getUser();
    if (user) router.replace("/dashboard");
  }, [router]);

  async function handleLogin() {
    setError("");
    setLoading(true);
    try {
      if (useSupabase) {
        if (!email || !password) {
          setError("Please enter email and password.");
          return;
        }
        const { error: err } = await signIn(email, password);
        if (err) { setError(err); return; }
      } else {
        if (!name.trim()) { setError("Please enter your name."); return; }
        const { error: err } = await signInLocal(name);
        if (err) { setError(err); return; }
      }
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e14] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🐍</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Code Buddy
          </h1>
          <p className="text-slate-400 mt-2">Welcome back, pilot!</p>
          <p className="text-sm text-gray-500">欢迎回来，飞行员！</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur">
          <h2 className="text-xl font-bold mb-1">Sign In</h2>
          <p className="text-sm text-gray-400 mb-6">登录你的飞行员档案</p>

          {useSupabase && (
            <div className="mb-6 space-y-4">
              <GoogleSignInButton mode="signin" />
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-600/50" />
                <span className="text-sm text-slate-500">or / 或</span>
                <div className="flex-1 h-px bg-slate-600/50" />
              </div>
            </div>
          )}

          <div className="space-y-4">
            {useSupabase ? (
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
                    Password <span className="text-gray-500 text-xs">密码</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    placeholder="Enter password..."
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/25 transition-colors"
                  />
                </div>
              </>
            ) : (
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name <span className="text-gray-500 text-xs">你的名字</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  placeholder="Enter your name..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/25 transition-colors"
                />
              </div>
            )}

            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm">
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-xl hover:from-green-400 hover:to-cyan-400 transition-all disabled:opacity-50"
            >
              {loading ? "Launching..." : "🚀 Launch In"}
            </motion.button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              New pilot?{" "}
              <Link href="/register" className="text-green-400 hover:text-green-300 font-medium">
                Create Profile
              </Link>
            </p>
            <p className="text-xs text-gray-500">
              新飞行员？<Link href="/register" className="text-green-400/70 hover:text-green-300">创建档案</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
