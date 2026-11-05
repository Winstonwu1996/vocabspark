-- 修复前：在仿真库里复现生产问题 —— 证明测试抓得到真漏洞（否则「修复后通过」没有意义）
select pg_temp.expect('BEFORE [0002] anon 通过视图读到全部邮箱',
  pg_temp.try_as('anon', null, $q$select count(email)::text from public.vocab_data_integrity$q$), 'OK:2');

select pg_temp.expect('BEFORE [0013] anon 可往日志表插行',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.vocab_data_integrity_log
    (accounts_total, accounts_with_anomaly, sum_status_missing, sum_studied_unlearned, sum_session_dirty, sum_invalid_status)
    values (0,0,0,0,0,0) returning 1) select count(*)::text from i$q$), 'OK:1');

select pg_temp.expect('BEFORE [0013] anon 可清空日志表',
  pg_temp.try_as('anon', null, $q$with d as (delete from public.vocab_data_integrity_log returning 1) select (count(*) > 0)::text from d$q$), 'OK:true');

select pg_temp.expect('BEFORE [0028] anon 可 RPC 调快照函数',
  pg_temp.try_as('anon', null, $q$select 'called' from (select public.vocab_integrity_snapshot()) s$q$), 'OK:called');

select pg_temp.expect('BEFORE [付费闸] anon 可给任意用户伪造 Pro 订阅',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.user_subscriptions (user_id, tier, billing_cycle, status, expires_at)
    values ('00000000-0000-4000-8000-000000000b0b', 'pro', 'yearly', 'active', now() + interval '10 years') returning 1)
    select count(*)::text from i$q$), 'OK:1');

select pg_temp.expect('BEFORE [付费闸] 登录用户可给自己伪造 Pro 订阅',
  pg_temp.try_as('authenticated', '00000000-0000-4000-8000-00000000a11c', $q$with i as (insert into public.user_subscriptions (user_id, tier, billing_cycle, status, expires_at)
    values ('00000000-0000-4000-8000-00000000a11c', 'pro', 'yearly', 'active', now() + interval '10 years') returning 1)
    select count(*)::text from i$q$), 'OK:1');

select pg_temp.expect('BEFORE lint 0002 命中视图',
  (select count(*)::text from lint."0002_auth_users_exposed" where metadata->>'name' = 'vocab_data_integrity'), '1');
select pg_temp.expect('BEFORE lint 0010 命中视图',
  (select count(*)::text from lint."0010_security_definer_view" where metadata->>'name' = 'vocab_data_integrity'), '1');
select pg_temp.expect('BEFORE 0013 等价检查命中日志表',
  (select string_agg(relname, ',') from lint."0013_equiv_rls_disabled"), 'vocab_data_integrity_log');
select pg_temp.expect('BEFORE 0028/0029 等价检查命中函数（anon + authenticated）',
  (select count(*)::text from lint."0028_0029_equiv_secdef_fn_executable"), '2');
select pg_temp.expect('BEFORE [Novel OS] anon 可写 chat_threads',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.chat_threads (topic) values ('probe') returning 1) select count(*)::text from i$q$), 'OK:1');
select pg_temp.expect('BEFORE [Novel OS] anon 可覆盖 state_snapshots',
  pg_temp.try_as('anon', null, $q$with i as (insert into public.state_snapshots (file_key, data) values ('probe', '{}') returning 1) select count(*)::text from i$q$), 'OK:1');
select pg_temp.expect('BEFORE 自定义检查命中开放写 policy（订阅 1 + Novel OS 4）',
  (select string_agg(tbl || ' / ' || polname, ', ' order by tbl) from lint."custom_open_write_policy"),
  'chat_threads / Allow all on chat_threads, ideas / Allow all on ideas, state_overrides / Allow all on state_overrides, state_snapshots / Allow all on state_snapshots, user_subscriptions / Service role can insert');
