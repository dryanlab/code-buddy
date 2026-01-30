// Cloud sync — saves full JSON snapshots of all stores to Supabase user_progress table
// localStorage is primary (instant/offline), cloud is secondary (fire-and-forget save, load on init)

import { getSupabase, isSupabaseConfigured } from "./supabase";

type StoreKey = "progress_data" | "coins_data" | "skills_data";

let _syncTimer: ReturnType<typeof setTimeout> | null = null;
let _pendingSync: Partial<Record<StoreKey, unknown>> = {};
const DEBOUNCE_MS = 5000;

async function getUserId(): Promise<string | null> {
  if (!isSupabaseConfigured) return null;
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user?.id ?? null;
}

/** Queue a debounced cloud save for one or more store columns */
export function queueCloudSync(key: StoreKey, data: unknown): void {
  _pendingSync[key] = data;
  if (_syncTimer) clearTimeout(_syncTimer);
  _syncTimer = setTimeout(() => flushSync(), DEBOUNCE_MS);
}

async function flushSync(): Promise<void> {
  const pending = _pendingSync;
  _pendingSync = {};
  _syncTimer = null;

  const userId = await getUserId();
  if (!userId) return;
  const supabase = getSupabase()!;

  const row: Record<string, unknown> = { user_id: userId, updated_at: new Date().toISOString() };
  for (const [k, v] of Object.entries(pending)) {
    row[k] = v;
  }

  await supabase.from("user_progress").upsert(row, { onConflict: "user_id" }).then(({ error }) => {
    if (error) console.warn("[cloud-sync] save error:", error.message);
  });
}

/** Load all cloud data for the current user. Returns null if not logged in or no data. */
export async function loadAllFromCloud(): Promise<{
  progress_data: Record<string, unknown> | null;
  coins_data: Record<string, unknown> | null;
  skills_data: Record<string, unknown> | null;
  updated_at: string | null;
} | null> {
  const userId = await getUserId();
  if (!userId) return null;
  const supabase = getSupabase()!;

  const { data, error } = await supabase
    .from("user_progress")
    .select("progress_data, coins_data, skills_data, updated_at")
    .eq("user_id", userId)
    .single();

  if (error || !data) return null;
  return data as {
    progress_data: Record<string, unknown> | null;
    coins_data: Record<string, unknown> | null;
    skills_data: Record<string, unknown> | null;
    updated_at: string | null;
  };
}

/** Force immediate sync of all stores (call on logout/critical saves) */
export async function forceSync(): Promise<void> {
  if (_syncTimer) {
    clearTimeout(_syncTimer);
    _syncTimer = null;
  }
  await flushSync();
}
