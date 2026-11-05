-- 修复后：① 该挡的挡住 ② 第二把锁有效 ③ 授权范围内照常 ④ 后端 / 运维照常 ⑤ Advisor 规则清零
-- alice = 00000000-0000-4000-8000-00000000a11c（basic），bob = 00000000-0000-4000-8000-000000000b0b（pro）

-- ① anon / 登录用户 被挡住
select pg_temp.expect('AFTER anon 读视图（邮箱）',
  pg_temp.try_as('anon', null, $q$select count(email)::text from public.vocab_data_integrity$q$), 'DENIED');
select pg_temp.expect('AFTER 登录用户 读视图（邮箱）',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$select count(email)::text from public.vocab_data_integrity$q$), 'DENIED');

select pg_temp.expect('AFTER anon 读日志表',
  pg_temp.try_as('anon', null, $q$select count(*)::text from public.vocab_data_integrity_log$q$), 'DENIED');
select pg_temp.expect('AFTER anon 插日志表',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.vocab_data_integrity_log
    (accounts_total, accounts_with_anomaly, sum_status_missing, sum_studied_unlearned, sum_session_dirty, sum_invalid_status)
    values (0,0,0,0,0,0) returning 1) select count(*)::text from i$q$), 'DENIED');
select pg_temp.expect('AFTER anon 改日志表',
  pg_temp.try_as('anon', null, $q$with u as (update public.vocab_data_integrity_log set accounts_total = 0 returning 1) select count(*)::text from u$q$), 'DENIED');
select pg_temp.expect('AFTER anon 删日志表',
  pg_temp.try_as('anon', null, $q$with d as (delete from public.vocab_data_integrity_log returning 1) select count(*)::text from d$q$), 'DENIED');
select pg_temp.expect('AFTER 登录用户 读日志表',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$select count(*)::text from public.vocab_data_integrity_log$q$), 'DENIED');
select pg_temp.expect('AFTER 登录用户 删日志表',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$with d as (delete from public.vocab_data_integrity_log returning 1) select count(*)::text from d$q$), 'DENIED');

select pg_temp.expect('AFTER anon RPC 快照函数',
  pg_temp.try_as('anon', null, $q$select 'called' from (select public.vocab_integrity_snapshot()) s$q$), 'DENIED');
select pg_temp.expect('AFTER 登录用户 RPC 快照函数',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$select 'called' from (select public.vocab_integrity_snapshot()) s$q$), 'DENIED');

select pg_temp.expect('AFTER anon 伪造订阅',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.user_subscriptions (user_id, tier, billing_cycle, status, expires_at)
    values ('00000000-0000-4000-8000-000000000b0b', 'pro', 'yearly', 'active', now() + interval '10 years') returning 1)
    select count(*)::text from i$q$), 'DENIED');
select pg_temp.expect('AFTER 登录用户 给自己伪造 Pro',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$with i as (insert into public.user_subscriptions (user_id, tier, billing_cycle, status, expires_at)
    values ('00000000-0000-4000-8000-00000000a11c', 'pro', 'yearly', 'active', now() + interval '10 years') returning 1)
    select count(*)::text from i$q$), 'DENIED');
select pg_temp.expect('AFTER 登录用户 延长自己订阅到期日',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$with u as (update public.user_subscriptions
    set expires_at = now() + interval '10 years', tier = 'pro' where user_id = '00000000-0000-4000-8000-00000000a11c' returning 1)
    select count(*)::text from u$q$), 'DENIED');
select pg_temp.expect('AFTER 登录用户 删自己订阅',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$with d as (delete from public.user_subscriptions returning 1) select count(*)::text from d$q$), 'DENIED');

-- Novel OS 四表：anon / 登录用户 读写全拒
select pg_temp.expect('AFTER [Novel OS] anon 读 chat_threads',
  pg_temp.try_as('anon', null, $q$select count(*)::text from public.chat_threads$q$), 'DENIED');
select pg_temp.expect('AFTER [Novel OS] anon 写 chat_threads',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.chat_threads (topic) values ('probe') returning 1) select count(*)::text from i$q$), 'DENIED');
select pg_temp.expect('AFTER [Novel OS] anon 写 ideas',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.ideas (content) values ('probe') returning 1) select count(*)::text from i$q$), 'DENIED');
select pg_temp.expect('AFTER [Novel OS] anon 写 state_overrides',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.state_overrides (file_key, operation) values ('probe', 'set') returning 1) select count(*)::text from i$q$), 'DENIED');
select pg_temp.expect('AFTER [Novel OS] anon 写 state_snapshots',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.state_snapshots (file_key, data) values ('probe', '{}') returning 1) select count(*)::text from i$q$), 'DENIED');
select pg_temp.expect('AFTER [Novel OS] 登录用户 删 ideas',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$with d as (delete from public.ideas returning 1) select count(*)::text from d$q$), 'DENIED');
select pg_temp.expect('AFTER [Novel OS] service_role 仍可写（将来云模式走服务端）',
  pg_temp.try_as('service_role', null, $q$with i as (insert into public.chat_threads (topic) values ('probe') returning 1) select count(*)::text from i$q$), 'OK:1');

-- ② 第二把锁：将来若有人误把视图 SELECT 授回 anon，anon 仍读不到 auth.users（整段在子事务里，结束即撤销）
do $$
begin
  begin
    grant select on public.vocab_data_integrity to anon;
    perform set_config('request.jwt.claims', '{"role":"anon"}', true);
    set local role anon;
    perform count(email) from public.vocab_data_integrity;
    raise exception 'FAIL  第二把锁失效：误授权后 anon 仍能读到邮箱';
  exception when insufficient_privilege then
    raise notice 'PASS  AFTER 第二把锁：误 GRANT 回 anon 后仍被拒  → %', sqlerrm;
  end;
end $$;

-- ③ 授权范围内照常（用户侧业务）
select pg_temp.expect('AFTER 登录用户 读订阅只看到自己 1 行',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$select count(*)::text from public.user_subscriptions$q$), 'OK:1');
select pg_temp.expect('AFTER 登录用户 看不到别人订阅',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$select count(*)::text from public.user_subscriptions where user_id = '00000000-0000-4000-8000-000000000b0b'$q$), 'OK:0');
select pg_temp.expect('AFTER anon 读订阅 = 0 行（不报错，与修复前一致）',
  pg_temp.try_as('anon', null, $q$select count(*)::text from public.user_subscriptions$q$), 'OK:0');
select pg_temp.expect('AFTER 登录用户 读自己进度',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$select count(*)::text from public.user_progress$q$), 'OK:1');
select pg_temp.expect('AFTER 登录用户 同步写自己进度',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$with u as (update public.user_progress set version = version + 1
    where user_id = '00000000-0000-4000-8000-00000000a11c' returning 1) select count(*)::text from u$q$), 'OK:1');
select pg_temp.expect('AFTER 登录用户 改不了别人进度',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$with u as (update public.user_progress set version = version + 1
    where user_id = '00000000-0000-4000-8000-000000000b0b' returning 1) select count(*)::text from u$q$), 'OK:0');
select pg_temp.expect('AFTER anon 读进度 = 0 行',
  pg_temp.try_as('anon', null, $q$select count(*)::text from public.user_progress$q$), 'OK:0');

-- ④ 后端 service_role 与运维 postgres 照常
select pg_temp.expect('AFTER service_role Stripe webhook 写订阅',
  pg_temp.try_as('service_role', null, $q$with i as (insert into public.user_subscriptions (user_id, stripe_session_id, tier, billing_cycle, amount_paid, status, expires_at)
    values ('00000000-0000-4000-8000-00000000a11c', 'cs_test_upgrade', 'pro', 'monthly', 5000, 'active', now() + interval '30 days') returning 1)
    select count(*)::text from i$q$), 'OK:1');
select pg_temp.expect('AFTER service_role entitlement 查档位',
  pg_temp.try_as('service_role', null, $q$select tier from public.user_subscriptions where user_id = '00000000-0000-4000-8000-000000000b0b'
    and status = 'active' and expires_at >= now() order by expires_at desc limit 1$q$), 'OK:pro');
select pg_temp.expect('AFTER service_role 读日志表',
  pg_temp.try_as('service_role', null, $q$select (count(*) > 0)::text from public.vocab_data_integrity_log$q$), 'OK:true');
select pg_temp.expect('AFTER service_role 写日志表',
  pg_temp.try_as('service_role', null, $q$with i as (insert into public.vocab_data_integrity_log
    (accounts_total, accounts_with_anomaly, sum_status_missing, sum_studied_unlearned, sum_session_dirty, sum_invalid_status)
    values (0,0,0,0,0,0) returning 1) select count(*)::text from i$q$), 'OK:1');
select pg_temp.expect('AFTER service_role 调快照函数',
  pg_temp.try_as('service_role', null, $q$select 'called' from (select public.vocab_integrity_snapshot()) s$q$), 'OK:called');
select pg_temp.expect('AFTER service_role 直接读视图 → 拒（唯一行为变化；代码从未这样用）',
  pg_temp.try_as('service_role', null, $q$select count(email)::text from public.vocab_data_integrity$q$), 'DENIED');
select pg_temp.expect('AFTER postgres（SQL editor）读视图含邮箱',
  pg_temp.try_as('postgres', null, $q$select count(email)::text from public.vocab_data_integrity$q$), 'OK:2');

-- cron 路径：真实写入（不回滚），与生产 cron 同身份
set role postgres;
select count(*) as log_before from public.vocab_data_integrity_log \gset
select public.vocab_integrity_snapshot();
select count(*) as log_after,
       (select accounts_total from public.vocab_data_integrity_log order by id desc limit 1) as last_total,
       (select sum_status_missing from public.vocab_data_integrity_log order by id desc limit 1) as last_missing
from public.vocab_data_integrity_log \gset
reset role;
select pg_temp.expect('AFTER cron 路径（postgres 调快照）新增 1 行', (:log_after - :log_before)::text, '1');
select pg_temp.expect('AFTER cron 快照统计正确：账号数', :'last_total', '2');
select pg_temp.expect('AFTER cron 快照统计正确：alice 的 plum 学过但状态缺失', :'last_missing', '1');

-- ⑤ Advisor 规则清零
select pg_temp.expect('AFTER lint 0002 清零', (select count(*)::text from lint."0002_auth_users_exposed"), '0');
select pg_temp.expect('AFTER lint 0010 清零', (select count(*)::text from lint."0010_security_definer_view"), '0');
select pg_temp.expect('AFTER 0013 等价检查清零', (select count(*)::text from lint."0013_equiv_rls_disabled"), '0');
select pg_temp.expect('AFTER 0028/0029 等价检查清零', (select count(*)::text from lint."0028_0029_equiv_secdef_fn_executable"), '0');
select pg_temp.expect('AFTER 自定义开放写 policy 清零', (select count(*)::text from lint."custom_open_write_policy"), '0');
