// Project storage — Supabase for logged-in users, localStorage fallback
// 项目存储 — 登录用户用 Supabase，未登录用 localStorage
//
// ⚠️ MIGRATION REQUIRED — Run this SQL in Supabase:
// ALTER TABLE user_projects ADD COLUMN language text DEFAULT 'python';

import { getSupabase } from "./supabase";

export type ProjectLanguage = "python" | "cpp";

export interface Project {
  id: string;
  name: string;
  code: string;
  language: ProjectLanguage;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "code-buddy-projects";

// ─── Helpers ─────────────────────────────────────────────────

function genId(): string {
  return crypto.randomUUID?.() || Math.random().toString(36).slice(2) + Date.now().toString(36);
}

async function getSupabaseUserId(): Promise<string | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user?.id ?? null;
  } catch {
    return null;
  }
}

// ─── localStorage ────────────────────────────────────────────

function getLocalProjects(): Project[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Project[]) : [];
  } catch {
    return [];
  }
}

function setLocalProjects(projects: Project[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

// ─── Public API ──────────────────────────────────────────────

export async function loadProjects(): Promise<Project[]> {
  const userId = await getSupabaseUserId();
  const supabase = getSupabase();

  if (userId && supabase) {
    try {
      const { data, error } = await supabase
        .from("user_projects")
        .select("*")
        .eq("user_id", userId)
        .order("updated_at", { ascending: false });

      if (!error && data) {
        return data.map((r: Record<string, unknown>) => ({
          id: r.id as string,
          name: r.name as string,
          code: r.code as string,
          language: (r.language as ProjectLanguage) || "python",
          createdAt: r.created_at as string,
          updatedAt: r.updated_at as string,
        }));
      }
    } catch {
      // fall through to localStorage
    }
  }

  return getLocalProjects();
}

export async function saveProject(project: Project): Promise<void> {
  const userId = await getSupabaseUserId();
  const supabase = getSupabase();

  if (userId && supabase) {
    try {
      await supabase.from("user_projects").upsert({
        id: project.id,
        user_id: userId,
        name: project.name,
        code: project.code,
        language: project.language || "python",
        updated_at: new Date().toISOString(),
      });
      return;
    } catch {
      // fall through
    }
  }

  // localStorage
  const projects = getLocalProjects();
  const idx = projects.findIndex((p) => p.id === project.id);
  const updated = { ...project, updatedAt: new Date().toISOString() };
  if (idx >= 0) projects[idx] = updated;
  else projects.unshift(updated);
  setLocalProjects(projects);
}

export async function deleteProject(id: string): Promise<void> {
  const userId = await getSupabaseUserId();
  const supabase = getSupabase();

  if (userId && supabase) {
    try {
      await supabase.from("user_projects").delete().eq("id", id).eq("user_id", userId);
      return;
    } catch {
      // fall through
    }
  }

  const projects = getLocalProjects().filter((p) => p.id !== id);
  setLocalProjects(projects);
}

export async function createProject(name: string, code: string, language: ProjectLanguage = "python"): Promise<Project> {
  const now = new Date().toISOString();
  const project: Project = {
    id: genId(),
    name,
    code,
    language,
    createdAt: now,
    updatedAt: now,
  };
  await saveProject(project);
  return project;
}

export async function duplicateProject(source: Project): Promise<Project> {
  return createProject(`${source.name} (copy)`, source.code, source.language);
}
