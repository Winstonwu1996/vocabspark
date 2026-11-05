-- 应用后核验（只读）：每行一个检查，pass 必须全为 true。生产与本地测试共用。
with checks(check_name, expected, actual) as (values
  -- 视图 vocab_data_integrity
  ('view  anon SELECT',                          'false', has_table_privilege('anon', 'public.vocab_data_integrity', 'SELECT')::text),
  ('view  authenticated SELECT',                 'false', has_table_privilege('authenticated', 'public.vocab_data_integrity', 'SELECT')::text),
  ('view  security_invoker on',                  'true',  (coalesce((select reloptions from pg_class where oid = 'public.vocab_data_integrity'::regclass), '{}')
                                                            && array['security_invoker=true','security_invoker=on','security_invoker=1','security_invoker=yes'])::text),
  ('view  postgres can read auth.users (invoker path)',   'true', has_table_privilege('postgres', 'auth.users', 'SELECT')::text),
  ('view  postgres can read user_progress (invoker path)','true', has_table_privilege('postgres', 'public.user_progress', 'SELECT')::text),
  ('view  rows visible to operator = user_progress rows', (select count(*) from public.user_progress)::text, (select count(*) from public.vocab_data_integrity)::text),
  -- 日志表 vocab_data_integrity_log
  ('log   RLS enabled',                          'true',  (select relrowsecurity from pg_class where oid = 'public.vocab_data_integrity_log'::regclass)::text),
  ('log   anon any privilege',                   'false', has_table_privilege('anon', 'public.vocab_data_integrity_log', 'SELECT,INSERT,UPDATE,DELETE,TRUNCATE')::text),
  ('log   authenticated any privilege',          'false', has_table_privilege('authenticated', 'public.vocab_data_integrity_log', 'SELECT,INSERT,UPDATE,DELETE,TRUNCATE')::text),
  ('log   anon/authenticated id sequence',       'false', (has_sequence_privilege('anon', 'public.vocab_data_integrity_log_id_seq', 'USAGE,SELECT,UPDATE')
                                                           or has_sequence_privilege('authenticated', 'public.vocab_data_integrity_log_id_seq', 'USAGE,SELECT,UPDATE'))::text),
  ('log   service_role SELECT+INSERT',           'true',  (has_table_privilege('service_role', 'public.vocab_data_integrity_log', 'SELECT')
                                                           and has_table_privilege('service_role', 'public.vocab_data_integrity_log', 'INSERT'))::text),
  -- 快照函数
  ('fn    anon EXECUTE',                         'false', has_function_privilege('anon', 'public.vocab_integrity_snapshot()', 'EXECUTE')::text),
  ('fn    authenticated EXECUTE',                'false', has_function_privilege('authenticated', 'public.vocab_integrity_snapshot()', 'EXECUTE')::text),
  ('fn    postgres EXECUTE (cron)',              'true',  has_function_privilege('postgres', 'public.vocab_integrity_snapshot()', 'EXECUTE')::text),
  ('fn    service_role EXECUTE',                 'true',  has_function_privilege('service_role', 'public.vocab_integrity_snapshot()', 'EXECUTE')::text),
  -- 订阅表 user_subscriptions
  ('subs  open INSERT policy removed',           '0',     (select count(*) from pg_policy where polrelid = 'public.user_subscriptions'::regclass and polname = 'Service role can insert')::text),
  ('subs  anon INSERT/UPDATE/DELETE',            'false', has_table_privilege('anon', 'public.user_subscriptions', 'INSERT,UPDATE,DELETE,TRUNCATE,MAINTAIN')::text),
  ('subs  authenticated INSERT/UPDATE/DELETE',   'false', has_table_privilege('authenticated', 'public.user_subscriptions', 'INSERT,UPDATE,DELETE,TRUNCATE,MAINTAIN')::text),
  ('subs  read-own policy kept',                 '1',     (select count(*) from pg_policy where polrelid = 'public.user_subscriptions'::regclass and polname = 'Users can read own subscriptions')::text),
  ('subs  authenticated SELECT kept',            'true',  has_table_privilege('authenticated', 'public.user_subscriptions', 'SELECT')::text),
  ('subs  service_role INSERT+SELECT (webhook)', 'true',  (has_table_privilege('service_role', 'public.user_subscriptions', 'INSERT')
                                                           and has_table_privilege('service_role', 'public.user_subscriptions', 'SELECT'))::text),
  -- 对照：user_progress 不应被改动
  ('ctrl  user_progress own_progress policy (未改动对照)', '1',     (select count(*) from pg_policy where polrelid = 'public.user_progress'::regclass and polname = 'own_progress')::text),
  ('ctrl  user_progress authenticated UPDATE (未改动对照)', 'true',  has_table_privilege('authenticated', 'public.user_progress', 'UPDATE')::text),
  -- Novel OS 四表
  ('novel allow-all policies removed',          '0',     (select count(*) from pg_policy where polname in ('Allow all on chat_threads','Allow all on ideas','Allow all on state_overrides','Allow all on state_snapshots'))::text),
  ('novel anon any privilege',                  'false', (select bool_or(has_table_privilege('anon', t, 'SELECT,INSERT,UPDATE,DELETE,TRUNCATE')) from unnest(array['public.chat_threads','public.ideas','public.state_overrides','public.state_snapshots']) t)::text),
  ('novel authenticated any privilege',         'false', (select bool_or(has_table_privilege('authenticated', t, 'SELECT,INSERT,UPDATE,DELETE,TRUNCATE')) from unnest(array['public.chat_threads','public.ideas','public.state_overrides','public.state_snapshots']) t)::text),
  ('novel RLS still enabled',                   'true',  (select bool_and(relrowsecurity) from pg_class where oid in ('public.chat_threads'::regclass,'public.ideas'::regclass,'public.state_overrides'::regclass,'public.state_snapshots'::regclass))::text),
  ('novel service_role keeps access',           'true',  (select bool_and(has_table_privilege('service_role', t, 'SELECT') and has_table_privilege('service_role', t, 'INSERT')) from unnest(array['public.chat_threads','public.ideas','public.state_overrides','public.state_snapshots']) t)::text),
  -- 列级授权：表级 REVOKE 收不走，单独确认为空
  ('cols  no column-level grants on these objects', '0',   (select count(*) from pg_attribute where attnum > 0 and attacl is not null and attrelid in (
                                                            'public.vocab_data_integrity'::regclass, 'public.vocab_data_integrity_log'::regclass, 'public.user_subscriptions'::regclass,
                                                            'public.chat_threads'::regclass, 'public.ideas'::regclass, 'public.state_overrides'::regclass, 'public.state_snapshots'::regclass))::text)
)
select check_name, expected, actual, expected = actual as pass
from checks;
