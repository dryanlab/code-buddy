-- Users profile (extends Supabase auth)
create table public.profiles (
  id uuid references auth.users primary key,
  name text not null,
  grade text not null,
  avatar text not null,
  created_at timestamptz default now()
);

-- Learning progress
create table public.progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) not null,
  lesson_id text not null,
  completed boolean default false,
  score integer default 0,
  xp_earned integer default 0,
  completed_at timestamptz,
  created_at timestamptz default now(),
  unique(user_id, lesson_id)
);

-- Overall user stats
create table public.user_stats (
  user_id uuid references public.profiles(id) primary key,
  total_xp integer default 0,
  level integer default 1,
  streak_days integer default 0,
  last_active_date date,
  lessons_completed integer default 0,
  challenges_completed integer default 0,
  created_at timestamptz default now()
);

-- RLS policies
alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.user_stats enable row level security;

create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

create policy "Users can read own progress" on public.progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on public.progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on public.progress for update using (auth.uid() = user_id);

create policy "Users can read own stats" on public.user_stats for select using (auth.uid() = user_id);
create policy "Users can insert own stats" on public.user_stats for insert with check (auth.uid() = user_id);
create policy "Users can update own stats" on public.user_stats for update using (auth.uid() = user_id);
