#!/bin/bash
# 用生产构建把 VocabSpark 起在 127.0.0.1:$VERIFY_PORT（默认 3100）。
# 开发模式不行：课页的开发包太大，浏览器里页面不水合，按钮点了没反应。
#   launch.sh            构建 + 启动
#   launch.sh --no-build 当前提交已构建过就跳过构建
source "$(dirname "$0")/_common.sh"
cd "$ROOT"

[ "$ROOT" != "$MAIN" ] || die "不在主仓库里跑：主仓库的环境变量文件带付款和管理员密钥。先建一个工作副本：git worktree add ../vs-verify origin/main"

mkdir -p "$RUN" "$EVIDENCE_ROOT"

# 环境变量：只从主仓库的 .env.local 摘允许的那几项，写成这个副本自己的 .env.local
if [ ! -f .env.local ]; then
  [ -f "$MAIN/.env.local" ] || die "主仓库没有 .env.local，拿不到数据库地址"
  (umask 077; for k in $ENV_ALLOW; do grep -E "^$k=" "$MAIN/.env.local" || true; done >.env.local)
  touch "$RUN/env-created-by-verify"
  echo "✓ 写了只含 $(wc -l <.env.local | tr -d ' ') 项的 .env.local（清理时删掉）"
fi
if bad="$(env_files_safe)"; then :; else
  die "$bad 里有不该带进验证的密钥（付款/管理员/发信/线上缓存/错误上报）。删掉那几行，或换一个干净的工作副本"
fi

head_sha="$(git rev-parse HEAD)"
if [ "${1:-}" = "--no-build" ] && [ -f .next/BUILD_ID ] && [ "$(cat .next/verify-commit 2>/dev/null)" = "$head_sha" ]; then
  echo "· 当前提交已构建过，跳过构建"
else
  # 依赖目录要是这个副本自己的：工作副本嵌在主仓库目录里，依赖里只要有一条快捷方式指出去，
  # 构建就会混进主仓库那份 React（两份 React 并存，预渲染报 useEffect of null，84 页全挂）
  deps_clean() {
    [ -d node_modules ] || return 1
    local l
    for l in $(find node_modules -maxdepth 2 -type l); do
      case "$(realpath "$l" 2>/dev/null)" in
        "$ROOT"/node_modules/*) ;;
        *) return 1 ;;
      esac
    done
    case "$(node -p "require.resolve('react')" 2>/dev/null)" in "$ROOT"/node_modules/*) ;; *) return 1 ;; esac
  }
  if ! deps_clean; then
    echo "… 依赖目录不是这个副本自己的（或缺），重装（npm ci，约 1-2 分钟）"
    npm ci --no-audit --no-fund >"$RUN/install.log" 2>&1 || die "装依赖失败，看 $RUN/install.log"
    deps_clean || die "重装后依赖目录还是指向别处，看 $RUN/install.log"
  fi
  echo "… 构建中（约 1-3 分钟），日志 $RUN/build.log"
  node node_modules/next/dist/bin/next build >"$RUN/build.log" 2>&1 || die "构建失败，看 $RUN/build.log"
  echo "$head_sha" >.next/verify-commit
  echo "✓ 构建完成 $(git rev-parse --short HEAD)"
fi

"$(dirname "$0")/server.sh" start
