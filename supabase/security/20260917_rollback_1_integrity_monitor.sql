-- 回滚 20261105061015_lockdown_vocab_integrity_monitor → 精确恢复到修复前状态（本地测试已验证快照逐字一致）。
-- ⚠️ 这会把漏洞原样重新打开：anon 可读全部用户邮箱、可改日志表、可调快照函数。
--    只在修复导致线上故障、且 William 确认时使用；恢复后应尽快换方案重新上锁。
grant execute on function public.vocab_integrity_snapshot() to public, anon, authenticated;
grant all on table public.vocab_data_integrity_log to anon, authenticated;
grant all on sequence public.vocab_data_integrity_log_id_seq to anon, authenticated;
alter table public.vocab_data_integrity_log disable row level security;
alter view public.vocab_data_integrity reset (security_invoker);
grant all on table public.vocab_data_integrity to anon, authenticated;
