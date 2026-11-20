#!/bin/bash
# 给一次驱动开一个证据目录，打印路径。  new-run.sh <功能名>
source "$(dirname "$0")/_common.sh"
cd "$ROOT"
feature="${1:?用法: new-run.sh <功能名，和 features/ 下的文件名一致>}"
[ -f "$(dirname "$0")/../features/$feature.md" ] || die "features/$feature.md 不存在"
dir="$EVIDENCE_ROOT/$(date +%Y%m%d-%H%M%S)-$feature"
mkdir -p "$dir"
{
  echo "# $feature 验证记录"
  echo
  echo "- 时间：$(date '+%Y-%m-%d %H:%M:%S %Z')"
  echo "- 提交：$(git rev-parse --short HEAD)（$(git log -1 --format=%s | cut -c1-60)）"
  echo "- 构建：$(cat .next/verify-commit 2>/dev/null | cut -c1-7 || echo 未知)"
  echo "- 地址：$BASE_URL"
  echo
  echo "## 步骤和观察"
  echo
} >"$dir/proof.md"
echo "$dir"
