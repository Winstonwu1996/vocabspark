#!/bin/bash
# 只起停服务，不重新构建。断网那条流程要中途停掉服务再起来，用的就是它。
#   server.sh start | stop | status
source "$(dirname "$0")/_common.sh"
cd "$ROOT"

case "${1:-}" in
  start)
    preflight
    [ -f .next/BUILD_ID ] || die "还没构建过，先跑 launch.sh"
    [ "$(cat .next/verify-commit 2>/dev/null)" = "$(git rev-parse HEAD)" ] || die "构建和当前提交对不上，先 launch.sh 重建"
    running="$(our_pids_sure)"; [ -z "$running" ] || die "已经在跑：先 server.sh stop"
    if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
      die "端口 $PORT 被别的进程占着，不是我们起的，不去动它。换端口：VERIFY_PORT=3101"
    fi
    mkdir -p "$RUN"
    set -m   # 让服务自成一个进程组，停的时候整组一起停
    run_clean nohup node node_modules/next/dist/bin/next start -p "$PORT" -H 127.0.0.1 >>"$RUN/server.log" 2>&1 &
    set +m
    echo $! >"$RUN/server.pgid"
    ps -o lstart= -p $! >"$RUN/server.lstart"
    cp .next/BUILD_ID "$RUN/started-build-id"
    for _ in $(seq 1 60); do
      if curl -sf -o /dev/null "$BASE_URL/api/version" && [ "$(served_build_id)" = "$(cat .next/BUILD_ID)" ]; then
        echo "✓ 服务就绪 $BASE_URL（进程组 $(cat "$RUN/server.pgid")，构建 $(cat .next/BUILD_ID)）"
        exit 0
      fi
      alive="$(our_pids_sure)"; [ -n "$alive" ] || die "服务没起来，看 $RUN/server.log"
      sleep 1
    done
    die "60 秒内没就绪，看 $RUN/server.log"
    ;;
  stop)
    [ -f "$RUN/server.pgid" ] || { echo "· 没有记下的服务"; exit 0; }
    g="$(cat "$RUN/server.pgid")"
    pids="$(our_pids_sure)"
    if [ -n "$pids" ]; then
      kill -TERM $pids 2>/dev/null || true
      for _ in $(seq 1 30); do pids="$(our_pids_sure)"; [ -z "$pids" ] && break; sleep 0.5; done
      if [ -n "$pids" ]; then
        echo "… 15 秒没停下，强停"
        kill -KILL $pids 2>/dev/null || true
        sleep 1
        pids="$(our_pids_sure)"
      fi
      [ -z "$pids" ] || die "进程组 $g 里还有进程停不掉（$(echo $pids)），记录保留，查清再停"
    fi
    rm -f "$RUN/server.pgid" "$RUN/server.lstart"
    if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
      die "我们的进程都停了，但端口 $PORT 还被别的进程占着"
    fi
    echo "✓ 服务已停"
    ;;
  status)
    pids="$(our_pids_sure)"
    if [ -n "$pids" ]; then echo "running $(echo $pids)"; else echo "stopped"; fi
    ;;
  *) die "用法: server.sh start|stop|status" ;;
esac
