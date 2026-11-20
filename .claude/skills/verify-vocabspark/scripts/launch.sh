#!/bin/bash
# 用生产构建把 VocabSpark 起在 127.0.0.1:$VERIFY_PORT（默认 3100）。
# 开发模式不行：课页的开发包太大，浏览器里页面不水合，按钮点了没反应。
#   launch.sh            构建 + 启动
#   launch.sh --no-build 当前提交已构建过就跳过构建
source "$(dirname "$0")/_common.sh"
cd "$ROOT"

[ "$ROOT" != "$MAIN" ] || die "不在主仓库里跑：主仓库的环境变量文件带付款和管理员密钥。先建一个工作副本：git worktree add ../vs-verify origin/main"
[ -z "$(our_pids)" ] || die "上一次的服务还在跑：先 cleanup.sh（不然会构建了新的、驱动的还是旧的）"

mkdir -p "$RUN" "$EVIDENCE_ROOT"

# 环境变量：只从主仓库的 .env.local 摘白名单那几项，写成这个副本自己的 .env.local
if [ ! -f .env.local ]; then
  [ -f "$MAIN/.env.local" ] || die "主仓库没有 .env.local，拿不到数据库地址"
  (umask 077; for k in $ENV_ALLOW; do grep -E "^$k=" "$MAIN/.env.local" || true; done >.env.local)
  touch "$RUN/env-created-by-verify"
  echo "✓ 写了只含 $(wc -l <.env.local | tr -d ' ') 项的 .env.local（清理时删掉）"
fi

# 依赖目录要是这个副本自己的：工作副本嵌在主仓库目录里，依赖里只要有一条快捷方式指出去，
# 构建就会混进主仓库那份 React（两份 React 并存，预渲染报 useEffect of null，84 页全挂）
deps_clean() {
  [ -d node_modules ] || return 1
  local l t
  while IFS= read -r l; do
    t="$(realpath "$l" 2>/dev/null || true)"
    case "$t" in "$ROOT"/node_modules/*) ;; *) return 1 ;; esac
  done < <(find node_modules -type l)
  # 应用和 react-dom 各自解析到的 React 必须是同一份，而且在这个副本里
  run_clean node -e '
    const p = require("path");
    const a = require.resolve("react");
    const b = require.resolve("react", { paths: [p.dirname(require.resolve("react-dom"))] });
    const root = p.join(process.cwd(), "node_modules") + p.sep;
    process.exit(a === b && a.startsWith(root) ? 0 : 1);
  ' || return 1
}
if ! deps_clean; then
  echo "… 依赖目录不是这个副本自己的（或缺），重装（npm ci，约 1-2 分钟）"
  run_clean npm ci --no-audit --no-fund >"$RUN/install.log" 2>&1 || die "装依赖失败，看 $RUN/install.log"
  deps_clean || die "重装后依赖目录还是指向别处，看 $RUN/install.log"
fi

preflight

head_sha="$(git rev-parse HEAD)"
if [ "${1:-}" = "--no-build" ] && [ -f .next/BUILD_ID ] && [ "$(cat .next/verify-commit 2>/dev/null)" = "$head_sha" ]; then
  echo "· 当前提交已构建过，跳过构建"
else
  [ -z "$(git status --porcelain -- pages components lib styles public next.config.js package.json)" ] \
    || die "页面代码有没提交的改动：先提交或还原，构建才对得上提交号"
  rm -f .next/verify-commit
  echo "… 构建中（约 1-3 分钟），日志 $RUN/build.log"
  run_clean node node_modules/next/dist/bin/next build >"$RUN/build.log" 2>&1 || die "构建失败，看 $RUN/build.log"
  echo "$head_sha" >.next/verify-commit
  echo "✓ 构建完成 $(git rev-parse --short HEAD)"
fi

"$(dirname "$0")/server.sh" start
