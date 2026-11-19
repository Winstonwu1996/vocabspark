#!/usr/bin/env bash
# 本地验证 2026-09-17 Supabase 安全修复。一次性容器，跑完即删；不连生产；不拉新镜像（用本机已有 postgres:17-alpine）。
#
# 流程：搭仿真库 → 修复前复现漏洞 → 应用 migration → 权限/业务回归 + Advisor 规则 + postcheck
#       → 重复应用（幂等）→ 回滚并比对快照 == 修复前 → 回滚后再应用 → 再验一遍
#
# 用法（仓库根目录）: bash supabase/tests/security_20260917/run.sh
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(cd "$HERE/../../.." && pwd)"
MIG1="$REPO/supabase/migrations/20261105061015_lockdown_vocab_integrity_monitor.sql"
MIG2="$REPO/supabase/migrations/20261105061024_close_user_subscriptions_public_insert.sql"
MIG3="$REPO/supabase/migrations/20261105061034_close_novel_os_allow_all_tables.sql"
RB1="$REPO/supabase/security/20260917_rollback_1_integrity_monitor.sql"
RB2="$REPO/supabase/security/20260917_rollback_2_user_subscriptions.sql"
RB3="$REPO/supabase/security/20260917_rollback_3_novel_os_tables.sql"
SNAP="$REPO/supabase/security/20260917_snapshot.sql"
POST="$REPO/supabase/security/20260917_postcheck.sql"
IMAGE="postgres:17-alpine"
NAME="vocab-sec-test-$$"
OUT="$(mktemp -d)"

docker image inspect "$IMAGE" >/dev/null 2>&1 || { echo "本机没有 $IMAGE 镜像（脚本不会自动下载）"; exit 1; }
docker run -d --rm --name "$NAME" -e POSTGRES_USER=supabase_admin -e POSTGRES_PASSWORD=local-test-only \
  -e POSTGRES_DB=postgres "$IMAGE" >/dev/null
trap 'docker stop "$NAME" >/dev/null 2>&1 || true' EXIT

# 走 TCP 等待：官方镜像初始化阶段的临时实例只听 unix socket，避免连上后被重启打断
for _ in $(seq 1 120); do
  docker exec "$NAME" pg_isready -h 127.0.0.1 -U supabase_admin -d postgres -q 2>/dev/null && break
  sleep 0.5
done

q() { docker exec -i -e PGPASSWORD=local-test-only "$NAME" psql -h 127.0.0.1 -U supabase_admin -d postgres -X -q -v ON_ERROR_STOP=1 "$@"; }
step() { printf '\n━━ %s ━━\n' "$1"; }
data_md5() { q -At -c "set role postgres; select md5(string_agg(t::text, '|' order by user_id)) from public.vocab_data_integrity t" | tail -1; }
postcheck() {
  q -At -F ' | ' < "$POST" > "$OUT/postcheck.txt"
  cat "$OUT/postcheck.txt"
  if grep -q ' | f$' "$OUT/postcheck.txt"; then echo "FAIL  postcheck 有未通过项"; exit 1; fi
  echo "PASS  postcheck $(wc -l < "$OUT/postcheck.txt" | tr -d ' ') 项全部通过"
}

step "1/7 搭仿真库（角色 / auth / 默认授权 / 相关表与迁移原文 = 生产同款）"
q < "$HERE/bootstrap.sql"
q < "$HERE/prod_schema_fixture.sql"
q < "$HERE/seed.sql"
q < "$HERE/lints.sql"
q -At -F ' | ' < "$SNAP" > "$OUT/snap_0_before.txt"
MD5_BEFORE="$(data_md5)"
cat "$OUT/snap_0_before.txt"

step "2/7 修复前：复现漏洞（测试必须能抓到真问题）"
cat "$HERE/helpers.sql" "$HERE/assert_before.sql" | q 2>&1 | sed 's/^psql:[^ ]* NOTICE:  //'

step "3/7 应用三份 migration（各自单事务）"
q --single-transaction < "$MIG1"
q --single-transaction < "$MIG2"
q --single-transaction < "$MIG3"
echo "applied"

step "4/7 修复后：安全 + 业务回归 + Advisor 规则 + postcheck + 视图数据一致性"
cat "$HERE/helpers.sql" "$HERE/assert_after.sql" | q 2>&1 | sed 's/^psql:[^ ]* NOTICE:  //'
postcheck
MD5_AFTER="$(data_md5)"
[ "$MD5_BEFORE" = "$MD5_AFTER" ] && echo "PASS  视图输出（postgres 视角）修复前后逐行一致 md5=$MD5_AFTER" \
  || { echo "FAIL  视图输出变了 before=$MD5_BEFORE after=$MD5_AFTER"; exit 1; }

step "5/7 重复应用 migration（幂等，重跑不报错、不改变结果）"
q --single-transaction < "$MIG1"
q --single-transaction < "$MIG2"
q --single-transaction < "$MIG3"
q -At -F ' | ' < "$SNAP" > "$OUT/snap_1_after.txt"
q --single-transaction < "$MIG1"
q --single-transaction < "$MIG2"
q --single-transaction < "$MIG3"
q -At -F ' | ' < "$SNAP" > "$OUT/snap_1b_after_again.txt"
diff "$OUT/snap_1_after.txt" "$OUT/snap_1b_after_again.txt" && echo "PASS  重复应用后权限快照不变"
echo "--- 修复前 → 修复后 权限快照差异 ---"
diff "$OUT/snap_0_before.txt" "$OUT/snap_1_after.txt" || true

step "6/7 回滚（3 → 2 → 1）→ 权限快照必须与修复前逐字一致"
q --single-transaction < "$RB3"
q --single-transaction < "$RB2"
q --single-transaction < "$RB1"
q -At -F ' | ' < "$SNAP" > "$OUT/snap_2_rolled_back.txt"
diff "$OUT/snap_0_before.txt" "$OUT/snap_2_rolled_back.txt" && echo "PASS  回滚后快照 == 修复前快照"
cat "$HERE/helpers.sql" "$HERE/assert_before.sql" | q 2>&1 | sed 's/^psql:[^ ]* NOTICE:  //'
echo "PASS  回滚后漏洞行为也与修复前一致（证明回滚是精确的）"

step "7/7 回滚后重新应用 → 再全量验证"
q --single-transaction < "$MIG1"
q --single-transaction < "$MIG2"
q --single-transaction < "$MIG3"
cat "$HERE/helpers.sql" "$HERE/assert_after.sql" | q 2>&1 | sed 's/^psql:[^ ]* NOTICE:  //'
postcheck

printf '\n✅ ALL PASSED  (artifacts: %s)\n' "$OUT"
