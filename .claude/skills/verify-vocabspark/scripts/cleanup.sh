#!/bin/bash
# 收尾：停掉这次起的服务、删掉这次写的临时文件。证据目录一律不动。
source "$(dirname "$0")/_common.sh"
cd "$ROOT"

"$(dirname "$0")/server.sh" stop
if [ -f "$RUN/env-created-by-verify" ]; then
  rm -f .env.local
  echo "✓ 删了 launch.sh 写的 .env.local"
fi
rm -rf "$RUN"
echo "✓ 清理完。证据留在 $EVIDENCE_ROOT"
ls -1t "$EVIDENCE_ROOT" 2>/dev/null | head -3 | sed 's/^/  · /'
