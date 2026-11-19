-- 2026-09-17 安全修复：Novel OS 云端四张表对任何人开放读写
-- 已上生产 2026-11-04（PT），MCP apply_migration，远端版本 20261105061034
--
-- 20260405143110_create_novel_os_cloud_tables 给 chat_threads / ideas / state_overrides / state_snapshots
-- 建了 FOR ALL USING (true) WITH CHECK (true) 的 policy（注释写「single-user system, no auth yet」），对 PUBLIC 生效。
-- 拿着公开 anon key 即可任意读、写、删；列是无上限 jsonb/text → 可被灌数据把 Free 计划库推过 500MB 进入只读，
-- 连带 Stripe webhook 写订阅、/api/sync 写进度全部失败。Security Advisor 没报（0024 未出现在该项目结果里）。
--
-- 使用方（2026-09-17 查证）：四表均 0 行、建表至今 0 次写入；~/.ai-tools/apps.toml 里 novel-os storage = "local-filesystem"，
-- 无对外部署；vocabspark 仓库无任何代码引用。
-- 更正（2026-11-04 查证）：本地 novel-engine 的 /api/ideas、/api/threads 不看 IS_CLOUD，直接用 anon key 读 ideas / chat_threads
-- （anon 历史读 chat_threads 145 次、ideas 3 次，从未写入）→ 上锁后这两个接口报错、界面退回默认内容。
-- 修复：删掉放行一切的 policy（RLS 保持开启、无 policy = API 角色全拒），收回 anon / authenticated 授权。
-- 以后若启用 Novel OS 云模式：服务端改用 service_role key，或按 auth.uid() 写归属 policy。
--
-- 回滚：supabase/security/20260917_rollback_3_novel_os_tables.sql

drop policy if exists "Allow all on chat_threads" on public.chat_threads;
drop policy if exists "Allow all on ideas" on public.ideas;
drop policy if exists "Allow all on state_overrides" on public.state_overrides;
drop policy if exists "Allow all on state_snapshots" on public.state_snapshots;
revoke all on table public.chat_threads, public.ideas, public.state_overrides, public.state_snapshots from anon, authenticated;
