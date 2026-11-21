#!/bin/bash
# 给一次驱动开一个新的证据目录，打印路径。  new-run.sh <功能名>
# 目录名带进程号，同一秒开两次也不会撞；目录已存在就报错，不覆盖旧证据。
source "$(dirname "$0")/_common.sh"
cd "$ROOT"
feature="${1:?用法: new-run.sh <功能名，和 features/ 下的文件名一致>}"
[ -f "$(dirname "$0")/../features/$feature.md" ] || die "features/$feature.md 不存在"
mkdir -p "$EVIDENCE_ROOT"
dir="$EVIDENCE_ROOT/$(date +%Y%m%d-%H%M%S)-$feature-$$"
mkdir "$dir" || die "$dir 已存在，不覆盖"
set -o noclobber
{
  echo "# $feature 验证记录"
  echo
  echo "- 时间：$(date '+%Y-%m-%d %H:%M:%S %Z')"
  echo "- 提交：$(git rev-parse --short HEAD)（$(git log -1 --format=%s | cut -c1-60)）"
  echo "- 构建：$(cat "$RUN/started-build-id" 2>/dev/null || echo 未知)，提交 $(cut -c1-7 .next/verify-commit 2>/dev/null || echo 未知)"
  echo "- 地址：$BASE_URL"
  echo
  echo "## 步骤和观察"
  echo
} >"$dir/proof.md"
echo "$dir"
