#!/bin/bash
# 只读体检：这个实例值不值得驱动。任何一项不过就别往下驱动，先修。
source "$(dirname "$0")/_common.sh"
cd "$ROOT"
fail=0
ok()  { echo "✓ $*"; }
bad() { echo "✗ $*"; fail=1; }

pids="$(server_pids)"
if [ -n "$pids" ]; then ok "服务在跑（pid $(echo $pids)）"; else bad "服务没在跑：先 launch.sh"; fi

listener="$(lsof -nP -t -iTCP:"$PORT" -sTCP:LISTEN 2>/dev/null | head -1 || true)"
if [ -n "$listener" ] && echo "$pids" | grep -qx "$listener"; then ok "端口 $PORT 是我们起的进程占着"
elif [ -n "$listener" ]; then bad "端口 $PORT 被别的进程（pid $listener）占着，不是这次起的，别驱动它"
else bad "端口 $PORT 没人监听"; fi

if [ "$(cat .next/verify-commit 2>/dev/null)" = "$(git rev-parse HEAD)" ]; then ok "构建的就是当前提交 $(git rev-parse --short HEAD)"
else bad "构建和当前提交对不上（改了代码没重建？）：launch.sh 重建"; fi

if [ -n "$(git status --porcelain -- pages components lib styles public next.config.js package.json)" ]; then
  bad "页面代码有没提交的改动，构建里有没有它说不清：先提交或还原，再 launch.sh"
else ok "页面代码没有未提交的改动"; fi

if bad_f="$(env_files_safe)"; then ok "环境变量文件里没有付款/管理员/发信/线上缓存/错误上报的密钥"
else bad "$bad_f 里有不该带的密钥"; fi

code="$(curl -s -o /dev/null -w '%{http_code}' "$BASE_URL/api/version" || true)"
[ "$code" = "200" ] && ok "/api/version 200" || bad "/api/version 返回 $code"
code="$(curl -s -o /dev/null -w '%{http_code}' "$BASE_URL/vocab" || true)"
[ "$code" = "200" ] && ok "/vocab 200" || bad "/vocab 返回 $code"

[ "$fail" = 0 ] && echo "体检通过，可以驱动" || { echo "体检没过"; exit 1; }
