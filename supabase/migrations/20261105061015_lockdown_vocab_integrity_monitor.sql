-- 2026-09-17 安全修复：数据自检监控三件套对 API 公开暴露
-- 已上生产 2026-11-04（PT），MCP apply_migration，远端版本 20261105061015
--
-- Supabase Security Advisor（2026-09-13 邮件告警）：
--   ERROR 0002 auth_users_exposed     public.vocab_data_integrity      —— 视图 join auth.users 带 email，anon 可读
--   ERROR 0010 security_definer_view  public.vocab_data_integrity      —— 按属主 postgres 权限执行，绕过 RLS
--   ERROR 0013 rls_disabled_in_public public.vocab_data_integrity_log  —— 没开 RLS，anon 可增删改
--   WARN  0028/0029                   public.vocab_integrity_snapshot() —— SECURITY DEFINER，anon/登录用户可 RPC 调
--
-- 根因：20260617064807_vocab_data_integrity_monitor 把运维用的视图/表/函数建在 public，
--       吃到 Supabase 默认授权（postgres 在 public 建的对象自动 GRANT 给 anon、authenticated）。
--
-- 使用方（2026-09-17 查证，仓库代码与 service_role 均未引用这三个对象）：
--   · 人工排查：SQL editor / MCP，postgres 角色
--   · pg_cron vocab_daily_integrity（0 13 * * *），postgres 角色调用快照函数
-- → 对 API 角色全部收回，业务无感。不改数据、不改视图定义、不改函数逻辑、不动 cron。
--
-- 回滚：supabase/security/20260917_rollback_1_integrity_monitor.sql
--
-- ⚠️ 以后改这三个对象的规矩（否则锁会被悄悄拆掉）：
--   · 改视图必须写 `create or replace view public.vocab_data_integrity with (security_invoker = true) as ...`
--     —— 不带 WITH 的 CREATE OR REPLACE 会清空 security_invoker（授权保留）
--   · DROP + CREATE 函数会重新拿到 Postgres 内置的 EXECUTE TO PUBLIC → 必须重跑本文件的 revoke
--     （表/视图自 20261105055227_revoke_public_default_privileges 起不再自动授权给 API 角色）
--   · 改完重跑 supabase/security/20260917_postcheck.sql，pass 全 true 才算完
--   根治方案（另议）：把这三个运维对象挪到 API 不暴露的 schema。

-- 1) 视图：两把锁
--    锁 A：收回 API 角色的全部权限。0002 与 0010 都以「anon/authenticated 有 SELECT」为触发前提，收回即清零。
revoke all on table public.vocab_data_integrity from anon, authenticated, public;
--    锁 B：改为按调用者权限执行。将来若有人误把 SELECT 授回 anon，anon 仍无权读 auth.users → 报错而非泄露。
--    postgres（SQL editor、cron 调用的快照函数属主）本身可读 auth.users，照常可用。
alter view public.vocab_data_integrity set (security_invoker = true);

-- 2) 日志表：开 RLS 且不建 policy = API 角色全拒；postgres / service_role 自带 BYPASSRLS 照常读写。
--    Advisor 会留一条 INFO 级 0008 rls_enabled_no_policy —— 属预期，与 history_branch_log 同款设计。
alter table public.vocab_data_integrity_log enable row level security;
revoke all on table public.vocab_data_integrity_log from anon, authenticated;
--    自增序列不随表收回，单独收（cron 以属主 postgres 写入，不受影响）
revoke all on sequence public.vocab_data_integrity_log_id_seq from anon, authenticated;

-- 3) 快照函数：只留属主 postgres（cron 用）与 service_role。PUBLIC 必须一起收，Postgres 默认 EXECUTE 挂在 PUBLIC 上。
revoke execute on function public.vocab_integrity_snapshot() from public, anon, authenticated;
