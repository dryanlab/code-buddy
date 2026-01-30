"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-context";

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

export default function Header({ onToggleSidebar, sidebarOpen }: HeaderProps) {
  const { theme, themes: allThemes, setThemeId, themeId } = useTheme();

  const cycleTheme = () => {
    const idx = allThemes.findIndex(t => t.id === themeId);
    const next = allThemes[(idx + 1) % allThemes.length];
    setThemeId(next.id);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-3 backdrop-blur-md border-b"
      style={{
        backgroundColor: `${theme.colors.sidebarBg}e6`,
        borderColor: theme.colors.sidebarBorder,
      }}
    >
      {/* Left: hamburger + theme */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleSidebar}
          className="rounded-lg p-2 text-xl transition-colors"
          style={{ color: theme.colors.textPrimary }}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>
        <button
          onClick={cycleTheme}
          className="rounded-lg p-2 text-xl transition-colors"
          style={{ color: theme.colors.textPrimary }}
          title="Change theme · 切换主题"
        >
          {theme.emoji}
        </button>
      </div>

      {/* Center: logo + title */}
      <Link href="/dashboard" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
        <img src="/logo.png" alt="Code Buddy" className="h-8 w-8 rounded" />
        <span className="text-lg font-bold hidden sm:inline" style={{ color: theme.colors.primary }}>
          Code Buddy
        </span>
      </Link>

      {/* Right: spacer for balance */}
      <div className="w-20" />
    </header>
  );
}
