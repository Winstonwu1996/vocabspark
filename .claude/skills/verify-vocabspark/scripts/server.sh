#!/bin/bash
# 只起停服务，不重新构建。断网那条流程要中途停掉服务再起来，用的就是它。
#   server.sh start | stop | status
source "$(dirname "$0")/_common.sh"
cd "$ROOT"

case "${1:-}" in
  start)
    [ -f .next/BUILD_ID ] || die "还没构建过，先跑 launch.sh"
    [ -z "$(server_pids)" ] || die "已经在跑（pid $(cat "$RUN/server.pid")）"
    if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
      die "端口 $PORT 被别的进程占着，不是我们起的，不去动它。换端口：VERIFY_PORT=3101"
    fi
    mkdir -p "$RUN"
    nohup node node_modules/next/dist/bin/next start -p "$PORT" -H 127.0.0.1 >>"$RUN/server.log" 2>&1 &
    echo $! >"$RUN/server.pid"
    for _ in $(seq 1 60); do
      if curl -sf -o /dev/null "$BASE_URL/api/version" && curl -sf -o /dev/null "$BASE_URL/vocab"; then
        echo "✓ 服务就绪 $BASE_URL（pid $(cat "$RUN/server.pid")）"
        exit 0
      fi
      kill -0 "$(cat "$RUN/server.pid")" 2>/dev/null || die "服务没起来，看 $RUN/server.log"
      sleep 1
    done
    die "60 秒内没就绪，看 $RUN/server.log"
    ;;
  stop)
    pids="$(server_pids)"
    [ -n "$pids" ] || { echo "· 没有在跑的服务"; exit 0; }
    # 先停子进程再停父进程
    for p in $(echo "$pids" | tail -r); do kill "$p" 2>/dev/null || true; done
    for _ in $(seq 1 20); do
      [ -z "$(server_pids)" ] && ! lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1 && break
      sleep 0.5
    done
    rm -f "$RUN/server.pid"
    if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then die "停了以后端口 $PORT 还被占着"; fi
    echo "✓ 服务已停"
    ;;
  status)
    pids="$(server_pids)"
    if [ -n "$pids" ]; then echo "running $(echo $pids)"; else echo "stopped"; fi
    ;;
  *) die "用法: server.sh start|stop|status" ;;
esac
