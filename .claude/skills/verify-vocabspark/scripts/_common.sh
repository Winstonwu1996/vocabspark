# 被其他脚本 source，不单独执行。
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
MAIN="$(git worktree list --porcelain | awk 'NR==1{print $2}')"   # 主仓库
PORT="${VERIFY_PORT:-3100}"
RUN="$ROOT/.verify/run"
# 证据放主仓库的 .git 里：永远不会被提交，工作副本删了也还在
EVIDENCE_ROOT="$(cd "$(git rev-parse --git-common-dir)" && pwd)/verify-evidence"
BASE_URL="http://127.0.0.1:$PORT"
export PATH="/opt/homebrew/bin:/opt/homebrew/opt/node@22/bin:$PATH"
export NEXT_TELEMETRY_DISABLED=1

# 验证只带这几项。付款、管理员、发邮件、线上缓存、错误上报的密钥一律不带：
# 本机跑出来的东西不能写进线上 Redis 缓存、不能发邮件、不能往线上 Sentry 报错。
ENV_ALLOW="NEXT_PUBLIC_SUPABASE_URL NEXT_PUBLIC_SUPABASE_ANON_KEY DEEPSEEK_API_KEY DEEPSEEK_API_KEY_2 GOOGLE_AI_API_KEY"
ENV_DENY_RE='^(STRIPE_SECRET_KEY|STRIPE_WEBHOOK_SECRET|SUPABASE_SERVICE_ROLE_KEY|RESEND_API_KEY|UPSTASH_REDIS_REST_TOKEN|UPSTASH_REDIS_REST_URL|NEXT_PUBLIC_SENTRY_DSN|SENTRY_AUTH_TOKEN|CRON_SECRET|PARENT_EMAIL_TEST_TOKEN|VERCEL_OIDC_TOKEN)='

die() { echo "✗ $*" >&2; exit 1; }

env_files_safe() {
  # Next 生产模式会读 .env、.env.production、.env.local、.env.production.local
  local f
  for f in .env .env.production .env.local .env.production.local; do
    [ -f "$ROOT/$f" ] || continue
    if grep -Eq "$ENV_DENY_RE" "$ROOT/$f"; then
      echo "$f"
      return 1
    fi
  done
  return 0
}

server_pids() {
  # 我们起的那个进程和它的子进程；不按进程名找
  [ -f "$RUN/server.pid" ] || return 0
  local p
  p="$(cat "$RUN/server.pid")"
  kill -0 "$p" 2>/dev/null || return 0
  echo "$p"
  pgrep -P "$p" 2>/dev/null || true
}
