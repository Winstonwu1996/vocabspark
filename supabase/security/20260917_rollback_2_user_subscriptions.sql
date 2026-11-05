-- 回滚 20260917120100_close_user_subscriptions_public_insert → 精确恢复到修复前状态（本地测试已验证快照逐字一致）。
-- ⚠️ 这会把付费闸漏洞原样重新打开：任何人可伪造 Pro 订阅。只在 William 确认时使用。
grant insert, update, delete, truncate, references, trigger, maintain on table public.user_subscriptions to anon, authenticated;
create policy "Service role can insert" on public.user_subscriptions for insert with check (true);
