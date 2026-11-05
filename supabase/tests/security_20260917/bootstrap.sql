-- 仿真 Supabase 的角色与权限模型（只保留本次修复相关部分）。以容器超级用户 supabase_admin 执行。
-- 每一项都对照过生产 catalog（2026-09-17 只读查询）。

-- 角色：生产 postgres 非超级用户但 rolbypassrls=true；service_role rolbypassrls=true；anon/authenticated 不绕过 RLS
create role postgres login bypassrls createrole;
create role anon nologin noinherit;
create role authenticated nologin noinherit;
create role service_role nologin noinherit bypassrls;
create role supabase_auth_admin nologin noinherit;

grant usage on schema public to anon, authenticated, service_role;
grant all on schema public to postgres;

-- 生产 pg_default_acl 原样：postgres 在 public 下建的表/函数/序列自动授权给 API 角色（本次漏洞的根因）
alter default privileges for role postgres in schema public grant all on tables    to anon, authenticated, service_role;
alter default privileges for role postgres in schema public grant all on functions to anon, authenticated, service_role;
alter default privileges for role postgres in schema public grant all on sequences to anon, authenticated, service_role;

-- auth schema：生产查证 auth.users 只有 postgres 可读（anon / authenticated / service_role 均不可）
create schema auth authorization supabase_auth_admin;
create table auth.users (
  id uuid primary key,
  email text,
  created_at timestamptz default now()
);
alter table auth.users owner to supabase_auth_admin;
alter table auth.users enable row level security;  -- 生产 relrowsecurity=true；postgres 靠 BYPASSRLS 读
grant usage on schema auth to postgres, anon, authenticated, service_role;
grant select, references on auth.users to postgres;

-- auth.uid()：与 Supabase 实现一致，从 PostgREST 注入的 JWT claims 取 sub
create function auth.uid() returns uuid language sql stable as $$
  select coalesce(
    nullif(current_setting('request.jwt.claim.sub', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
  )::uuid
$$;
alter function auth.uid() owner to supabase_auth_admin;
grant execute on function auth.uid() to postgres, anon, authenticated, service_role;
