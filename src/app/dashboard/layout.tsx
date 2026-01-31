"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import PreviewBanner from "@/components/PreviewBanner";
import { usePathname } from "next/navigation";
import { getUser, getSessionUser, ensureProfile } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";
import { loadSkillLevelFromProfile } from "@/lib/skill-store";
import { isPreviewMode } from "@/lib/preview-mode";
import Tutorial from "@/components/Tutorial";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  const [preview, setPreview] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tutorialVisible, setTutorialVisible] = useState(false);

  // Auto-start tutorial on first visit (check Supabase first, localStorage fallback)
  useEffect(() => {
    if (!ready) return;
    if (localStorage.getItem("code-buddy-tutorial-done")) return;
    // Check Supabase profile
    (async () => {
      try {
        const supabase = (await import("@/lib/supabase")).getSupabase();
        if (supabase) {
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user?.id) {
            const { data } = await supabase.from("profiles").select("tutorial_done").eq("id", session.user.id).single();
            if (data?.tutorial_done) {
              localStorage.setItem("code-buddy-tutorial-done", "true");
              return; // Already done, don't show
            }
          }
        }
      } catch { /* ignore */ }
      setTimeout(() => setTutorialVisible(true), 600);
    })();
  }, [ready]);

  useEffect(() => {
    async function check() {
      // Preview mode: skip all auth checks
      if (isPreviewMode()) {
        setPreview(true);
        setReady(true);
        return;
      }

      if (isSupabaseConfigured) {
        const supabase = (await import("@/lib/supabase")).getSupabase();
        if (supabase) {
          const { data: { session } } = await supabase.auth.getSession();
          if (!session) {
            await new Promise(r => setTimeout(r, 500));
            const { data: { session: retrySession } } = await supabase.auth.getSession();
            if (!retrySession) {
              // Clear stale localStorage to prevent redirect loop
              const { logout } = await import("@/lib/auth-store");
              await logout();
              router.replace("/login");
              return;
            }
          }
        }
        const { hasProfile, needsSetup } = await ensureProfile();
        if (needsSetup) { router.replace("/complete-profile"); return; }
        if (!hasProfile) {
          const user = await getSessionUser();
          if (!user) { router.replace("/login"); return; }
        }
      } else {
        const user = getUser();
        if (!user) { router.replace("/register"); return; }
      }
      // Check if skill level is set; if not, redirect to quiz (unless already on quiz page)
      if (pathname !== "/dashboard/skill-quiz") {
        const skill = await loadSkillLevelFromProfile();
        if (!skill) {
          router.replace("/dashboard/skill-quiz");
          return;
        }
      }
      setReady(true);
    }
    check();
  }, [router, pathname]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--theme-bg)" }}>
        <img src="/logo.png" alt="Loading..." className="w-12 h-12 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh]" style={{ backgroundColor: "var(--theme-bg)", color: "var(--theme-text-primary)" }}>
      {preview && <PreviewBanner />}
      <Header onToggleSidebar={() => setSidebarOpen(o => !o)} sidebarOpen={sidebarOpen} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} onStartTutorial={() => setTutorialVisible(true)} />
      <main className={`overflow-y-auto ${preview ? "pt-24" : "pt-14"}`}>{children}</main>
      <Tutorial
        visible={tutorialVisible}
        onClose={() => setTutorialVisible(false)}
        forceSidebarOpen={setSidebarOpen}
      />
    </div>
  );
}
