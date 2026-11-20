# 被其他脚本 source，不单独执行。
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
MAIN="$(git worktree list --porcelain | awk 'NR==1{print $2}')"   # 主仓库
PORT="${VERIFY_PORT:-3100}"
RUN="$ROOT/.verify/run"
# 证据放主仓库的 .git 里：永远不会被提交，工作副本删了也还在
EVIDENCE_ROOT="$(cd "$(git rev-parse --git-common-dir)" && pwd)/verify-evidence"
BASE_URL="http://127.0.0.1:$PORT"
NODE_BIN_DIR="/opt/homebrew/opt/node@22/bin"

# 验证只带这几项。付款、管理员、发邮件、线上缓存、错误上报的密钥一律不带：
# 本机跑出来的东西不能写进线上 Redis 缓存、不能发邮件、不能往线上 Sentry 报错。
ENV_ALLOW="NEXT_PUBLIC_SUPABASE_URL NEXT_PUBLIC_SUPABASE_ANON_KEY DEEPSEEK_API_KEY DEEPSEEK_API_KEY_2 GOOGLE_AI_API_KEY"

die() { echo "✗ $*" >&2; exit 1; }

# 构建、启动、检查环境都在干净环境里跑：不继承调用者终端里的任何变量（里面可能有密钥），
# NODE_ENV 固定为 production（是 test 时 Next 会改读 .env.test*，绕过下面的检查）。
run_clean() {
  env -i HOME="$HOME" USER="${USER:-}" TMPDIR="${TMPDIR:-/tmp}" LANG="${LANG:-en_US.UTF-8}" \
    PATH="$NODE_BIN_DIR:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin" \
    NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 "$@"
}

# 用 Next 自己的加载器读一遍：它会读的所有环境变量文件里，只许出现白名单里的键。
# 只打印文件名和键名，不打印值。
env_check() {
  (cd "$ROOT" && run_clean ALLOW="$ENV_ALLOW" node -e '
    const before = new Set(Object.keys(process.env));
    const { loadEnvConfig } = require("@next/env");
    const r = loadEnvConfig(process.cwd(), false, { info() {}, error() {} });
    const allow = new Set(process.env.ALLOW.split(" "));
    const bad = Object.keys(process.env).filter(k => !before.has(k) && !allow.has(k) && k !== "__NEXT_PROCESSED_ENV");  // 后者是 Next 自己的标记
    const files = (r.loadedEnvFiles || []).map(f => require("path").basename(f.path));
    if (bad.length) { console.log("文件 " + files.join("、") + " 里有白名单以外的键：" + bad.join("、")); process.exit(1); }
    console.log("读到的文件：" + (files.join("、") || "无"));
  ')
}

preflight() {
  [ "$ROOT" != "$MAIN" ] || die "不在主仓库里跑：主仓库的环境变量文件带付款和管理员密钥。先建一个工作副本：git worktree add ../vs-verify origin/main"
  local msg
  msg="$(env_check)" || die "$msg。删掉那几行，或换一个干净的工作副本"
}

# 我们起的服务：启动时记下进程组号和组长的启动时间，只认这一组里工作目录是这个副本的进程。不按进程名找。
# 打印进程号；返回 0 = 查清楚了（可能一个都没有），返回 2 = 查不清（查询失败、身份对不上），调用方不能当成「已经停了」。
our_pids() {
  [ -f "$RUN/server.pgid" ] || return 0
  local g p cwd members rc lead_now lead_saved
  g="$(cat "$RUN/server.pgid")"
  rc=0; members="$(pgrep -g "$g" 2>/dev/null)" || rc=$?
  [ "$rc" = 0 ] || [ "$rc" = 1 ] || { echo "查进程组 $g 失败" >&2; return 2; }
  [ -n "$members" ] || return 0
  lead_saved="$(cat "$RUN/server.lstart" 2>/dev/null || true)"
  if lead_now="$(ps -o lstart= -p "$g" 2>/dev/null)" && [ -n "$lead_now" ] && [ "$lead_now" != "$lead_saved" ]; then
    echo "进程组 $g 的组长启动时间和记录的不一样（$lead_now ≠ ${lead_saved:-没记}），可能是别的进程复用了编号" >&2; return 2
  fi
  for p in $members; do
    cwd="$(lsof -a -p "$p" -d cwd -Fn 2>/dev/null | sed -n 's/^n//p' | head -1)"
    if [ -z "$cwd" ]; then kill -0 "$p" 2>/dev/null || continue; echo "读不到进程 $p 的工作目录" >&2; return 2; fi
    [ "$cwd" = "$ROOT" ] || { echo "进程组 $g 里的进程 $p 工作目录是 $cwd，不是这个副本" >&2; return 2; }
    echo "$p"
  done
}

# 查不清就停下：给调用方用
our_pids_sure() {
  our_pids || die "认不准是不是我们起的服务，什么都没动。确认那几个进程不是这次验证起的以后，删掉 $RUN/server.pgid 再跑"
}

served_build_id() {
  curl -sf "$BASE_URL/vocab" 2>/dev/null | sed -n 's/.*"buildId":"\([^"]*\)".*/\1/p' | head -1
}
