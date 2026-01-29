# Code Buddy 🐍🚀

A gamified Python learning platform for kids (Grades 4–10), with AI tutoring and interactive coding.

## Quick Start (No Supabase — localStorage mode)

```bash
npm install
npm run dev
```

Without Supabase env vars, the app automatically uses localStorage for auth and progress. Great for local development.

## Full Setup with Supabase

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your **Project URL** and **anon public key** from Settings → API

### 2. Run Database Migration

In the Supabase SQL Editor, run the contents of:

```
supabase/migrations/001_init.sql
```

This creates:
- `profiles` — user profile (name, grade, avatar)
- `progress` — per-lesson completion tracking
- `user_stats` — XP, level, streak
- Row Level Security policies for all tables

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your values:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
GOOGLE_AI_API_KEY=your-google-ai-key
OPENAI_API_KEY=your-openai-key
```

### 4. Run

```bash
npm run dev
```

## Architecture

- **Auth**: Supabase Auth (email + password) with localStorage fallback
- **Progress**: Supabase DB with fire-and-forget sync + localStorage cache
- **AI Chat**: Google Gemini / OpenAI (configurable)
- **Code Execution**: Pyodide (Python in browser)
- **UI**: Next.js 16 + Tailwind CSS + Framer Motion

## Fallback Mode

If `NEXT_PUBLIC_SUPABASE_URL` is not set, the app runs entirely with localStorage — no backend needed. This makes development easy without any external services.
