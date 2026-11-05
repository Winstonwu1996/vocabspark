-- 测试辅助（会话级临时函数）。查询结果输出静默，PASS/FAIL 走 NOTICE。
\o /dev/null

-- 以某个 API 角色 + JWT sub 执行一条 SQL（需返回单值），在子事务里跑完即回滚，不留任何写入。
-- 返回 'OK:<值>' 或 'DENIED'（42501 权限不足 / RLS 拒绝）。其他错误直接抛出，让测试失败。
create function pg_temp.try_as(p_role text, p_sub uuid, p_sql text)
returns text language plpgsql as $$
declare v text;
begin
  begin
    perform set_config('request.jwt.claims',
      case when p_sub is null then json_build_object('role', p_role)::text
           else json_build_object('role', p_role, 'sub', p_sub)::text end, true);
    execute format('set local role %I', p_role);
    execute p_sql into v;
    raise exception using errcode = 'XX999', message = 'OK:' || coalesce(v, '<null>');
  exception
    when sqlstate 'XX999' then return sqlerrm;
    when insufficient_privilege then return 'DENIED';
  end;
end $$;

create function pg_temp.expect(p_label text, p_actual text, p_expected text)
returns void language plpgsql as $$
begin
  if p_actual is distinct from p_expected then
    raise exception 'FAIL  %  expected [%] got [%]', p_label, p_expected, p_actual;
  end if;
  raise notice 'PASS  %  → %', p_label, p_actual;
end $$;
