"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getUser, logout, type UserProfile } from "@/lib/auth-store";
import { useTheme } from "@/lib/theme-context";
import { isPreviewMode, PREVIEW_LOCKED_PATHS, exitPreviewMode } from "@/lib/preview-mode";
import SignUpModal from "@/components/SignUpModal";

const NAV_ITEMS = [
  { href: "/dashboard", icon: "🏠", label: "Dashboard", labelCn: "主页" },
  { href: "/dashboard/courses", icon: "🗺️", label: "Course Map", labelCn: "课程地图" },
  { href: "/dashboard/lessons", icon: "📚", label: "Lessons", labelCn: "课程" },
  { href: "/dashboard/code-lab", icon: "💻", label: "Code Lab", labelCn: "代码实验室" },
  { href: "/dashboard/ai-chat", icon: "🤖", label: "AI Buddy", labelCn: "AI 助手" },
  { href: "/dashboard/explore", icon: "🔬", label: "Explore CS", labelCn: "计算机探秘" },
  { href: "/dashboard/data-structures", icon: "🎮", label: "DS Playground", labelCn: "数据结构实验室" },
  { href: "/dashboard/progress", icon: "📊", label: "My Progress", labelCn: "我的进度" },
  { href: "/dashboard/shop", icon: "🏪", label: "Reward Shop", labelCn: "奖励商店" },
  { href: "/dashboard/settings", icon: "⚙️", label: "Settings", labelCn: "设置" },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [preview, setPreview] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setUser(getUser());
    setPreview(isPreviewMode());
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Overlay */}
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

      {/* Sidebar */}
      <aside
        className={`
          w-[75vw] max-w-64 h-[100dvh] flex flex-col
          fixed top-0 left-0 z-50 transition-transform duration-200 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{
          backgroundColor: theme.colors.sidebarBg,
          borderRight: `1px solid ${theme.colors.sidebarBorder}`,
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 pl-14 pr-6 py-5" style={{ borderBottom: `1px solid ${theme.colors.sidebarBorder}` }}>
          <span className="text-3xl">🐍</span>
          <span className="text-xl font-bold" style={{ color: theme.colors.primary }}>
            Code Buddy
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            const isLocked = preview && PREVIEW_LOCKED_PATHS.includes(item.href);
            
            const content = (
              <motion.div
                whileHover={isLocked ? {} : { x: 4 }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: isActive ? `${theme.colors.primary}18` : "transparent",
                  color: isLocked ? theme.colors.textMuted : isActive ? theme.colors.primary : theme.colors.textSecondary,
                  border: isActive ? `1px solid ${theme.colors.primary}30` : "1px solid transparent",
                  opacity: isLocked ? 0.5 : 1,
                }}
              >
                <span className="text-xl">{isLocked ? "🔒" : item.icon}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-[10px]" style={{ color: theme.colors.textMuted }}>{item.labelCn}</span>
                </div>
              </motion.div>
            );

            if (isLocked) {
              return (
                <button key={item.href} onClick={() => setShowSignUpModal(true)} className="w-full text-left">
                  {content}
                </button>
              );
            }

            return (
              <Link key={item.href} href={item.href}>
                {content}
              </Link>
            );
          })}
        </nav>

        {/* User & Footer */}
        <div className="px-4 py-4 space-y-3" style={{ borderTop: `1px solid ${theme.colors.sidebarBorder}` }}>
          {preview ? (
            <button
              onClick={() => {
                exitPreviewMode();
                window.location.href = "/login";
              }}
              className="w-full py-3 font-bold text-sm rounded-xl hover:opacity-90 transition-opacity"
              style={{
                background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primaryLight || theme.colors.primary})`,
                color: theme.colors.bg,
              }}
            >
              🚀 Sign Up · 注册
            </button>
          ) : user ? (
            <div className="flex items-center gap-2">
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{user.name}</div>
                <div className="text-[10px]" style={{ color: theme.colors.textMuted }}>Grade {user.grade} Pilot</div>
              </div>
              <button
                onClick={async () => { await logout(); window.location.href = "/login"; }}
                className="text-xs px-2 py-1 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors"
                style={{ color: theme.colors.textMuted }}
                title="Sign out · 退出登录"
              >
                🚪 退出
              </button>
            </div>
          ) : null}
          <div className="text-xs terminal-text" style={{ color: theme.colors.textMuted }}>
            v2.0 Phase 2
          </div>
        </div>
      </aside>
      <SignUpModal open={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
    </>
  );
}
