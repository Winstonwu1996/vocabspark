-- 2026-09-17 安全修复：user_subscriptions 对任何人开放 INSERT（付费闸可被绕过）
-- 已上生产 2026-11-04（PT），MCP apply_migration，远端版本 20261105061024
--
-- 20260329182851_create_user_subscriptions 的 policy "Service role can insert" 没写 TO <role>，
-- WITH CHECK (true) 实际对 PUBLIC 生效。拿着公开的 anon key（前端里就有）即可插入
--   { user_id: 自己, tier: 'pro', status: 'active', expires_at: 2099 }
-- lib/entitlement-server.js 与 /api/stripe/check-subscription 都「只信 user_subscriptions active 行」→ 直接判为 Pro。
-- service_role 本就 BYPASSRLS，这条 policy 对它没有任何作用，只对攻击者有用。
--
-- 唯一合法写入方：pages/api/stripe/webhook.js（service_role key，2026-09-17 查证为真 service_role）→ 不受影响。
-- 保留不变：用户读自己订阅的 SELECT policy 与 SELECT 授权。
-- 现有 5 行均为 cs_live_ 会话、用户均存在，未发现伪造行。
--
-- 回滚：supabase/security/20260917_rollback_2_user_subscriptions.sql

drop policy if exists "Service role can insert" on public.user_subscriptions;
revoke insert, update, delete, truncate, references, trigger, maintain on table public.user_subscriptions from anon, authenticated;
