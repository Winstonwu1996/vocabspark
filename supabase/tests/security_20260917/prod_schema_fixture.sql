-- 生产 schema 相关部分的仿真。
-- 来源：生产 supabase_migrations.schema_migrations 里的迁移原文 + 生产 catalog（2026-09-17 只读查询）。
-- 以 postgres 角色建对象 → 吃到与生产相同的默认授权。
set role postgres;

-- user_progress：早于迁移记录，按生产 catalog 重建（列 / 约束 / RLS / policy 与生产一致）
create table public.user_progress (
  user_id uuid not null primary key references auth.users(id) on delete cascade,
  progress_data jsonb default '{}'::jsonb,
  updated_at timestamptz default now(),
  version integer not null default 0
);
alter table public.user_progress enable row level security;
create policy own_progress on public.user_progress for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ── 20260329182851_create_user_subscriptions（原文）──
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  stripe_session_id TEXT,
  stripe_customer_id TEXT,
  tier TEXT NOT NULL CHECK (tier IN ('basic', 'pro')),
  billing_cycle TEXT NOT NULL CHECK (billing_cycle IN ('monthly', 'yearly')),
  byo_key BOOLEAN DEFAULT false,
  payment_method TEXT,
  amount_paid INTEGER,
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'expired', 'canceled')),
  starts_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own subscriptions" ON user_subscriptions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Service role can insert" ON user_subscriptions
  FOR INSERT WITH CHECK (true);

-- ── 20260405143110_create_novel_os_cloud_tables（原文，去掉注释）──
CREATE TABLE public.chat_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic TEXT NOT NULL,
  title TEXT,
  messages JSONB NOT NULL DEFAULT '[]'::jsonb,
  model TEXT DEFAULT 'deepseek',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_chat_threads_topic ON public.chat_threads(topic);
CREATE TABLE public.ideas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  status TEXT NOT NULL DEFAULT 'new',
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_ideas_category ON public.ideas(category);
CREATE INDEX idx_ideas_status ON public.ideas(status);
CREATE TABLE public.state_overrides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_key TEXT NOT NULL,
  json_path TEXT,
  operation TEXT NOT NULL,
  value JSONB,
  applied BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_state_overrides_file ON public.state_overrides(file_key);
CREATE INDEX idx_state_overrides_applied ON public.state_overrides(applied);
CREATE TABLE public.state_snapshots (
  file_key TEXT PRIMARY KEY,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.chat_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ideas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.state_overrides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.state_snapshots ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all on chat_threads" ON public.chat_threads FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on ideas" ON public.ideas FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on state_overrides" ON public.state_overrides FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on state_snapshots" ON public.state_snapshots FOR ALL USING (true) WITH CHECK (true);

-- ── 20260725020058_user_subscriptions_stripe_session_unique（原文）──
create unique index if not exists user_subscriptions_stripe_session_id_key
  on public.user_subscriptions (stripe_session_id)
  where stripe_session_id is not null;

-- ── 20260617064807_vocab_data_integrity_monitor（原文）──
create or replace view public.vocab_data_integrity as
select
  u.email,
  p.user_id,
  p.updated_at,
  (select count(*) from jsonb_object_keys(coalesce(p.progress_data->'wordStatusMap','{}'::jsonb))) as status_entries,
  (select count(*) from jsonb_each_text(coalesce(p.progress_data->'wordStatusMap','{}'::jsonb)) kv where kv.value='skipped') as skipped_n,
  (select count(*) from jsonb_object_keys(coalesce(p.progress_data->'reviewWordData','{}'::jsonb)) rk
     where not (coalesce(p.progress_data->'wordStatusMap','{}'::jsonb) ? rk)) as studied_but_status_missing,
  (select count(*) from jsonb_object_keys(coalesce(p.progress_data->'reviewWordData','{}'::jsonb)) rk
     where (p.progress_data->'wordStatusMap'->>rk)='unlearned') as studied_but_unlearned,
  (select count(*) from jsonb_array_elements_text(coalesce(p.progress_data->'session'->'wordList','[]'::jsonb)) sw
     where (p.progress_data->'wordStatusMap'->>sw) in ('skipped','mastered')) as session_has_done_words,
  (select count(*) from jsonb_each_text(coalesce(p.progress_data->'wordStatusMap','{}'::jsonb)) kv
     where kv.value not in ('unlearned','learning','mastered','uncertain','error','skipped')) as invalid_status_n
from public.user_progress p
join auth.users u on u.id=p.user_id;

create table if not exists public.vocab_data_integrity_log (
  id bigint generated always as identity primary key,
  checked_at timestamptz not null default now(),
  accounts_total int not null,
  accounts_with_anomaly int not null,
  sum_status_missing int not null,
  sum_studied_unlearned int not null,
  sum_session_dirty int not null,
  sum_invalid_status int not null
);

create or replace function public.vocab_integrity_snapshot()
returns void language sql security definer set search_path=public as $$
  insert into public.vocab_data_integrity_log
    (accounts_total, accounts_with_anomaly, sum_status_missing, sum_studied_unlearned, sum_session_dirty, sum_invalid_status)
  select
    count(*),
    count(*) filter (where studied_but_status_missing>0 or studied_but_unlearned>0 or session_has_done_words>0 or invalid_status_n>0),
    coalesce(sum(studied_but_status_missing),0),
    coalesce(sum(studied_but_unlearned),0),
    coalesce(sum(session_has_done_words),0),
    coalesce(sum(invalid_status_n),0)
  from public.vocab_data_integrity;
$$;

-- ── 20260617064819_vocab_data_integrity_cron：跳过（alpine 镜像无 pg_cron）。
--    生产 cron 以 postgres 身份执行 `select public.vocab_integrity_snapshot();`，测试里用 set role postgres 模拟。

-- ── 20260617064941_vocab_integrity_refine_anomaly（原文）──
create or replace function public.vocab_integrity_snapshot()
returns void language sql security definer set search_path=public as $$
  insert into public.vocab_data_integrity_log
    (accounts_total, accounts_with_anomaly, sum_status_missing, sum_studied_unlearned, sum_session_dirty, sum_invalid_status)
  select
    count(*),
    count(*) filter (where studied_but_status_missing>0 or studied_but_unlearned>0 or invalid_status_n>0),
    coalesce(sum(studied_but_status_missing),0),
    coalesce(sum(studied_but_unlearned),0),
    coalesce(sum(session_has_done_words),0),
    coalesce(sum(invalid_status_n),0)
  from public.vocab_data_integrity;
$$;

reset role;
