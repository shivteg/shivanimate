# Supabase Setup for ShivAnimate

To make the refactored project work, you need to set up the following tables and policies in your Supabase project.

## 1. Tables

### `profiles`
Stores user roles and usernames.
- `id`: uuid, primary key, references `auth.users(id)` on delete cascade.
- `username`: text, unique.
- `role`: text (either 'admin', 'teacher', or 'student').
- `created_at`: timestamp with time zone, default `now()`.

### `animations`
Stores saved animations for users.
- `id`: uuid, primary key, default `gen_random_uuid()`.
- `user_id`: uuid, references `auth.users(id)` on delete cascade.
- `word`: text.
- `style`: text.
- `created_at`: timestamp with time zone, default `now()`.

## 2. SQL Schema

```sql
-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique not null,
  role text check (role in ('admin', 'teacher', 'student')) not null default 'student',
  created_at timestamptz default now()
);

-- Create animations table
create table public.animations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  word text not null,
  style text not null,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.animations enable row level security;

-- Policies for profiles
create policy "Public profiles are viewable by everyone" on public.profiles
  for select using (true);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Policies for animations
create policy "Users can view own animations" on public.animations
  for select using (auth.uid() = user_id);

create policy "Users can insert own animations" on public.animations
  for insert with check (auth.uid() = user_id);

create policy "Users can delete own animations" on public.animations
  for delete using (auth.uid() = user_id);
```

## 3. Initial Admin Setup
After creating your first account (e.g., via the login screen if you've already added the user via SQL or Supabase Dashboard), run this SQL to make yourself an admin:

```sql
update public.profiles set role = 'admin' where username = 'your_username';
```

## 4. Environment Variables in Vercel
Ensure the following are set (as you've already started doing):
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
