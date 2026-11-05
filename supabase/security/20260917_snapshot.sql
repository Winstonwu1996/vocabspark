-- 权限快照（只读，不含任何用户数据）：授权、RLS、视图选项、函数 ACL、policy。
-- 生产：应用前跑一次存档（= 备份点）；本地测试：比对「回滚后 == 修复前」。
-- ACL 条目按文本排序，避免 revoke/grant 后条目顺序变化造成假差异。
select 'relation' as kind,
       c.relname as name,
       'rls=' || c.relrowsecurity::text || ' options=' || coalesce(c.reloptions::text, '{}') as detail,
       coalesce((select string_agg(a::text, ',' order by a::text) from unnest(c.relacl) a), '<default>') as acl
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in ('vocab_data_integrity', 'vocab_data_integrity_log', 'user_subscriptions', 'user_progress',
                    'chat_threads', 'ideas', 'state_overrides', 'state_snapshots')
union all
select 'function',
       p.oid::regprocedure::text,
       'secdef=' || p.prosecdef::text || ' config=' || coalesce(array_to_string(p.proconfig, ','), ''),
       coalesce((select string_agg(a::text, ',' order by a::text) from unnest(p.proacl) a), '<default>')
from pg_proc p
where p.oid = 'public.vocab_integrity_snapshot()'::regprocedure
union all
select 'policy',
       pol.polrelid::regclass::text || ' :: ' || pol.polname,
       'cmd=' || pol.polcmd::text || ' using=' || coalesce(pg_get_expr(pol.polqual, pol.polrelid), '-')
         || ' check=' || coalesce(pg_get_expr(pol.polwithcheck, pol.polrelid), '-'),
       (select string_agg(case when r = 0 then 'PUBLIC' else r::regrole::text end, ',' order by r)
          from unnest(pol.polroles) r)
from pg_policy pol
where pol.polrelid in ('public.vocab_data_integrity_log'::regclass,
                       'public.user_subscriptions'::regclass,
                       'public.user_progress'::regclass,
                       'public.chat_threads'::regclass,
                       'public.ideas'::regclass,
                       'public.state_overrides'::regclass,
                       'public.state_snapshots'::regclass)
order by 1, 2;
