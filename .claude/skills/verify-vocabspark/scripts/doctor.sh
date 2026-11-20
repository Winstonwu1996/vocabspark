#!/bin/bash
# 只读体检：这个实例值不值得驱动。任何一项不过就别往下驱动，先修。
source "$(dirname "$0")/_common.sh"
cd "$ROOT"
fail=0
ok()  { echo "✓ $*"; }
bad() { echo "✗ $*"; fail=1; }

[ "$ROOT" != "$MAIN" ] && ok "在工作副本里，不是主仓库" || bad "在主仓库里：不能在这里驱动"

if pids="$(our_pids)"; then
  if [ -n "$pids" ]; then ok "服务在跑（$(echo $pids)）"; else bad "服务没在跑：先 launch.sh"; fi
else bad "认不准服务进程是不是我们起的（见上一行）"; pids=""; fi

listener="$(lsof -nP -t -iTCP:"$PORT" -sTCP:LISTEN 2>/dev/null | head -1 || true)"
if [ -n "$listener" ] && echo "$pids" | grep -qx "$listener"; then ok "端口 $PORT 是我们起的进程占着"
elif [ -n "$listener" ]; then bad "端口 $PORT 被别的进程（pid $listener）占着，不是这次起的，别驱动它"
else bad "端口 $PORT 没人监听"; fi

if [ "$(cat .next/verify-commit 2>/dev/null)" = "$(git rev-parse HEAD)" ]; then ok "构建的就是当前提交 $(git rev-parse --short HEAD)"
else bad "构建和当前提交对不上（改了代码没重建？）：cleanup.sh 后 launch.sh"; fi

served="$(served_build_id)"
if [ -n "$served" ] && [ "$served" = "$(cat .next/BUILD_ID 2>/dev/null)" ] && [ "$served" = "$(cat "$RUN/started-build-id" 2>/dev/null)" ]; then
  ok "正在服务的就是这份构建（$served）"
else bad "正在服务的构建（${served:-读不到}）和磁盘上的、启动时记下的对不上"; fi

if [ -n "$(git status --porcelain -- pages components lib styles public next.config.js package.json)" ]; then
  bad "页面代码有没提交的改动，构建里有没有它说不清：先提交或还原，再 launch.sh"
else ok "页面代码没有未提交的改动"; fi

if msg="$(env_check)"; then ok "环境变量只有白名单里的几项（$msg）"; else bad "$msg"; fi

for p in $pids; do
  if ! envs="$(ps -E -p "$p" -o command= 2>/dev/null)" || [ -z "$envs" ]; then bad "读不到进程 $p 的环境，没法确认里面没有密钥"; continue; fi
  if grep -E '(STRIPE|SERVICE_ROLE|UPSTASH|RESEND|SENTRY)' <<<"$envs" >/dev/null; then bad "进程 $p 的环境里有不该带的密钥"
  else ok "进程 $p 的环境里没有付款/管理员/发信/线上缓存/错误上报的变量"; fi
done

code="$(curl -s -o /dev/null -w '%{http_code}' "$BASE_URL/api/version" || true)"
[ "$code" = "200" ] && ok "/api/version 200" || bad "/api/version 返回 $code"
code="$(curl -s -o /dev/null -w '%{http_code}' "$BASE_URL/vocab" || true)"
[ "$code" = "200" ] && ok "/vocab 200" || bad "/vocab 返回 $code"

[ "$fail" = 0 ] && echo "体检通过，可以驱动" || { echo "体检没过"; exit 1; }
