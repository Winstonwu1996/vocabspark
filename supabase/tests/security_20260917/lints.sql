-- Security Advisor 检查规则。
-- 0002 / 0010：官方 splinter 规则原文（github.com/supabase/splinter lints/*.sql，2026-09-17 取）。
-- 0013 / 0028+0029 / custom：按官方文档语义写的等价检查（更严格，非原文）。
create schema lint;

create view lint."0002_auth_users_exposed" as
select
    'auth_users_exposed' as name,
    'Exposed Auth Users' as title,
    'ERROR' as level,
    'EXTERNAL' as facing,
    array['SECURITY'] as categories,
    'Detects if auth.users is exposed to anon or authenticated roles via a view or materialized view in schemas exposed to PostgREST, potentially compromising user data security.' as description,
    format(
        'View/Materialized View "%s" in the public schema may expose `auth.users` data to anon or authenticated roles.',
        c.relname
    ) as detail,
    'https://supabase.com/docs/guides/database/database-linter?lint=0002_auth_users_exposed' as remediation,
    jsonb_build_object(
        'schema', n.nspname,
        'name', c.relname,
        'type', 'view',
        'exposed_to', array_remove(array_agg(DISTINCT case when pg_catalog.has_table_privilege('anon', c.oid, 'SELECT') then 'anon' when pg_catalog.has_table_privilege('authenticated', c.oid, 'SELECT') then 'authenticated' end), null)
    ) as metadata,
    format('auth_users_exposed_%s_%s', n.nspname, c.relname) as cache_key
from
    pg_catalog.pg_class auth_users_pg_class
    join pg_catalog.pg_namespace auth_users_pg_namespace
        on auth_users_pg_class.relnamespace = auth_users_pg_namespace.oid
        and auth_users_pg_class.relname = 'users'
        and auth_users_pg_namespace.nspname = 'auth'
    join pg_catalog.pg_depend d
        on d.refobjid = auth_users_pg_class.oid
    join pg_catalog.pg_rewrite r
        on r.oid = d.objid
    join pg_catalog.pg_class c
        on c.oid = r.ev_class
    join pg_catalog.pg_namespace n
        on n.oid = c.relnamespace
    join pg_catalog.pg_class pg_class_auth_users
        on d.refobjid = pg_class_auth_users.oid
where
    d.deptype = 'n'
    and (
      pg_catalog.has_table_privilege('anon', c.oid, 'SELECT')
      or pg_catalog.has_table_privilege('authenticated', c.oid, 'SELECT')
    )
    and n.nspname = any(array(select trim(unnest(string_to_array(coalesce(current_setting('pgrst.db_schemas', 't'), 'public'), ',')))))
    and c.relname <> '0002_auth_users_exposed'
    and
    (
        (c.relkind in ('m'))
        or
        (
            c.relkind = 'v'
            and not (
                lower(coalesce(c.reloptions::text,'{}'))::text[]
                && array['security_invoker=1','security_invoker=true','security_invoker=yes','security_invoker=on']
            )
        )
        or
        (
            c.relkind in ('v')
            and (
                lower(coalesce(c.reloptions::text,'{}'))::text[]
                && array['security_invoker=1','security_invoker=true','security_invoker=yes','security_invoker=on']
            )
            and not pg_class_auth_users.relrowsecurity
        )
    )
group by
    n.nspname,
    c.relname,
    c.oid;

create view lint."0010_security_definer_view" as
select
    'security_definer_view' as name,
    format('View `%s.%s` is defined with the SECURITY DEFINER property', n.nspname, c.relname) as detail,
    jsonb_build_object('schema', n.nspname, 'name', c.relname, 'type', 'view') as metadata
from
    pg_catalog.pg_class c
    join pg_catalog.pg_namespace n
        on n.oid = c.relnamespace
    left join pg_catalog.pg_depend dep
        on c.oid = dep.objid
        and dep.deptype = 'e'
        and dep.classid = 'pg_catalog.pg_class'::regclass
where
    c.relkind = 'v'
    and (
        pg_catalog.has_table_privilege('anon', c.oid, 'SELECT')
        or pg_catalog.has_table_privilege('authenticated', c.oid, 'SELECT')
    )
    and substring(pg_catalog.version() from 'PostgreSQL ([0-9]+)') >= '15'
    and n.nspname = any(array(select trim(unnest(string_to_array(coalesce(current_setting('pgrst.db_schemas', 't'), 'public'), ',')))))
    and n.nspname not in (
        '_timescaledb_cache', '_timescaledb_catalog', '_timescaledb_config', '_timescaledb_internal', 'auth', 'cron', 'extensions', 'graphql', 'graphql_public', 'information_schema', 'net', 'pgmq', 'pgroonga', 'pgsodium', 'pgsodium_masks', 'pgtle', 'pgbouncer', 'pg_catalog', 'realtime', 'repack', 'storage', 'supabase_functions', 'supabase_migrations', 'tiger', 'topology', 'vault'
    )
    and dep.objid is null
    and not (
        lower(coalesce(c.reloptions::text,'{}'))::text[]
        && array['security_invoker=1','security_invoker=true','security_invoker=yes','security_invoker=on']
    );

-- 0013 等价：public 下未开 RLS 的表
create view lint."0013_equiv_rls_disabled" as
select c.relname
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind in ('r', 'p') and not c.relrowsecurity;

-- 0028 + 0029 等价：public 下 anon / authenticated 可执行的 SECURITY DEFINER 函数
create view lint."0028_0029_equiv_secdef_fn_executable" as
select p.oid::regprocedure::text as fn, r.role
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
cross join (values ('anon'), ('authenticated')) r(role)
where n.nspname = 'public' and p.prosecdef and has_function_privilege(r.role, p.oid, 'EXECUTE');

-- 自定义：public 下对 PUBLIC / anon / authenticated 无条件放行写入的 policy（官方 Advisor 没报，但这就是付费闸漏洞）
create view lint."custom_open_write_policy" as
select pol.polrelid::regclass::text as tbl, pol.polname
from pg_policy pol
join pg_class c on c.oid = pol.polrelid
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and pol.polcmd in ('a', 'w', 'd', '*')
  and exists (select 1 from unnest(pol.polroles) r
              where r = 0 or r in (select oid from pg_roles where rolname in ('anon', 'authenticated')))
  and coalesce(pg_get_expr(pol.polwithcheck, pol.polrelid), pg_get_expr(pol.polqual, pol.polrelid)) = 'true';
