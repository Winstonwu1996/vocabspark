-- 回滚 20261105061034_close_novel_os_allow_all_tables → 精确恢复到修复前状态（本地测试已验证快照逐字一致）。
-- ⚠️ 这会让四张表重新对任何人开放读写。只在 William 确认时使用。
grant all on table public.chat_threads, public.ideas, public.state_overrides, public.state_snapshots to anon, authenticated;
create policy "Allow all on chat_threads" on public.chat_threads for all using (true) with check (true);
create policy "Allow all on ideas" on public.ideas for all using (true) with check (true);
create policy "Allow all on state_overrides" on public.state_overrides for all using (true) with check (true);
create policy "Allow all on state_snapshots" on public.state_snapshots for all using (true) with check (true);
