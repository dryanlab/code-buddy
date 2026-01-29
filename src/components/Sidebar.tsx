"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getUser, logout, type UserProfile } from "@/lib/auth-store";

const NAV_ITEMS = [
  { href: "/dashboard", icon: "🏠", label: "Dashboard", labelCn: "主页" },
  { href: "/dashboard/lessons", icon: "📚", label: "Lessons", labelCn: "课程" },
  { href: "/dashboard/code-lab", icon: "💻", label: "Code Lab", labelCn: "代码实验室" },
  { href: "/dashboard/explore", icon: "🔬", label: "Explore CS", labelCn: "计算机探秘" },
  { href: "/dashboard/ai-chat", icon: "🤖", label: "AI Assistant", labelCn: "AI 助手" },
  { href: "/dashboard/debug", icon: "🐛", label: "Debug Detective", labelCn: "Debug 侦探" },
  { href: "/dashboard/shop", icon: "🏪", label: "Reward Shop", labelCn: "奖励商店" },
  { href: "/dashboard/progress", icon: "📊", label: "My Progress", labelCn: "我的进度" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUser(getUser());
  }, []);

  // Close sidebar when navigating on mobile
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Hamburger button — visible on ALL screen sizes */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-3 left-3 z-[60] bg-[#0d1117]/90 backdrop-blur border border-slate-700 rounded-lg p-2.5 text-xl shadow-lg"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Overlay — all screens */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar — always starts hidden, toggles with hamburger */}
      <aside className={`
        w-[75vw] max-w-64 bg-[#0d1117] border-r border-slate-800 h-[100dvh] flex flex-col
        fixed top-0 left-0 z-50 transition-transform duration-200 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}>
        {/* Logo — left padding for hamburger button */}
        <Link href="/" className="flex items-center gap-3 pl-14 pr-6 py-5 border-b border-slate-800">
          <span className="text-3xl">🐍</span>
          <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Code Buddy
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-[10px] text-gray-500">{item.labelCn}</span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* User & Footer */}
        <div className="px-4 py-4 border-t border-slate-800 space-y-3">
          {user && (
            <div className="flex items-center gap-2">
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{user.name}</div>
                <div className="text-[10px] text-slate-500">Grade {user.grade} Pilot</div>
              </div>
              <button
                onClick={async () => { await logout(); window.location.href = "/login"; }}
                className="text-[10px] text-slate-500 hover:text-red-400 transition-colors"
                title="Sign out"
              >
                ↩
              </button>
            </div>
          )}
          <div className="text-xs text-slate-500 terminal-text">
            v2.0 Phase 2
          </div>
        </div>
      </aside>
    </>
  );
}
