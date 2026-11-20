#!/bin/bash
# 收尾：停掉这次起的服务、删掉这次写的临时文件。证据目录一律不动。
source "$(dirname "$0")/_common.sh"
cd "$ROOT"

stop_ok=1
"$(dirname "$0")/server.sh" stop || stop_ok=0
if [ -f "$RUN/env-created-by-verify" ]; then
  rm -f .env.local "$RUN/env-created-by-verify"
  echo "✓ 删了 launch.sh 写的 .env.local"
fi
if [ "$stop_ok" = 1 ]; then
  rm -rf "$RUN"
  echo "✓ 清理完。证据留在 $EVIDENCE_ROOT"
else
  echo "✗ 服务没停干净，$RUN 留着（里面记着进程组号），查清后再跑一次 cleanup.sh" >&2
fi
ls -1t "$EVIDENCE_ROOT" 2>/dev/null | head -3 | sed 's/^/  · /'
[ "$stop_ok" = 1 ]
