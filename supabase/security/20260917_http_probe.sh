#!/usr/bin/env bash
# 生产 API 外部探针：模拟「只拿到公开 anon key 的陌生人」能做什么。修复前后各跑一次对比。
#
# 安全性：
#   · 读探针全部 limit=0，只返回行数（Content-Range），不返回任何行内容
#   · 唯一的写探针（订阅表 INSERT）故意用非法 tier 触发 CHECK 约束，且 status=expired、到期日在 2000 年
#     → 无论修复前后，数据库都会拒绝，不会留下任何数据
#   · 从 .env.local 读 URL 与 anon key，不打印密钥
#
# 用法（仓库根目录）: bash supabase/security/20260917_http_probe.sh
set -euo pipefail
cd "$(dirname "$0")/../.."

env_get() { grep -E "^$1=" .env.local | head -1 | cut -d= -f2- | tr -d "\"'" ; }
URL="$(env_get NEXT_PUBLIC_SUPABASE_URL)"
KEY="$(env_get NEXT_PUBLIC_SUPABASE_ANON_KEY)"
[ -n "$URL" ] && [ -n "$KEY" ] || { echo "缺 NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY"; exit 1; }
echo "target: ${URL#https://}   ($(date -u +%FT%TZ))"

probe() { # label method path [json-body]
  local label="$1" method="$2" path="$3" body="${4:-}"
  local hdr out code range pgcode
  hdr="$(mktemp)"; out="$(mktemp)"
  if [ -n "$body" ]; then
    code="$(curl -sS -o "$out" -D "$hdr" -w '%{http_code}' -X "$method" "$URL/rest/v1/$path" \
      -H "apikey: $KEY" -H 'Content-Type: application/json' -H 'Prefer: return=minimal' --data "$body")"
  else
    code="$(curl -sS -o "$out" -D "$hdr" -w '%{http_code}' -X "$method" "$URL/rest/v1/$path" \
      -H "apikey: $KEY" -H 'Prefer: count=exact')"
  fi
  range="$( (grep -i '^content-range:' "$hdr" || true) | tr -d '\r' | awk '{print $2}')"
  pgcode="$(python3 -c 'import json,sys
try:
    d=json.load(open(sys.argv[1])); print(d.get("code","") if isinstance(d,dict) else "")
except Exception: print("")' "$out")"
  printf '%-48s HTTP %s  rows=%-6s pg_code=%s\n' "$label" "$code" "${range:--}" "${pgcode:--}"
  rm -f "$hdr" "$out"
}

probe "view  vocab_data_integrity (邮箱)"       GET  "vocab_data_integrity?select=email&limit=0"
probe "table vocab_data_integrity_log"          GET  "vocab_data_integrity_log?select=id&limit=0"
probe "novel chat_threads"                      GET  "chat_threads?select=id&limit=0"
probe "novel ideas"                             GET  "ideas?select=id&limit=0"
probe "novel state_overrides"                   GET  "state_overrides?select=id&limit=0"
probe "novel state_snapshots"                   GET  "state_snapshots?select=file_key&limit=0"
probe "ctrl  user_progress (应为 0 行)"          GET  "user_progress?select=user_id&limit=0"
probe "ctrl  user_subscriptions 读 (应为 0 行)"  GET  "user_subscriptions?select=id&limit=0"
probe "write user_subscriptions 伪造插入探针"     POST "user_subscriptions" \
  '{"user_id":"00000000-0000-4000-8000-00000000dead","tier":"__security_probe__","billing_cycle":"monthly","status":"expired","expires_at":"2000-01-01T00:00:00Z"}'

cat <<'EOF'

判读：
  修复前  视图/日志 HTTP 200|206 rows=*/N（N>0 即暴露）；写探针 HTTP 400 pg_code=23514
          （23514 = 权限和 RLS 都放行了，只是被 CHECK 约束拦下 → 换成合法 tier 就能伪造订阅）
  修复后  视图/日志 HTTP 401 pg_code=42501；写探针 HTTP 401 pg_code=42501；对照组仍 rows=*/0
EOF
