"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { getUser, getSessionUser, ensureProfile } from "@/lib/auth-store";
import { isSupabaseConfigured } from "@/lib/supabase";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function check() {
      if (isSupabaseConfigured) {
        const supabase = (await import("@/lib/supabase")).getSupabase();
        if (supabase) {
          const { data: { session } } = await supabase.auth.getSession();
          if (!session) {
            await new Promise(r => setTimeout(r, 500));
            const { data: { session: retrySession } } = await supabase.auth.getSession();
            if (!retrySession) { router.replace("/login"); return; }
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
      setReady(true);
    }
    check();
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--theme-bg)" }}>
        <div className="text-4xl animate-pulse">🐍</div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh]" style={{ backgroundColor: "var(--theme-bg)", color: "var(--theme-text-primary)" }}>
      <Sidebar />
      <main className="overflow-y-auto pt-14">{children}</main>
    </div>
  );
}
