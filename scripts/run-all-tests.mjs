/* 测试聚合入口：npm test
 *
 * 跑 scripts/test-*.mjs 里所有「纯函数单测」（不需要 API key / 不需要命令行参数的）。
 * 判定标准是进程退出码 —— 各测试文件输出格式不统一，靠 stdout 文本判定不可靠。
 *
 * 需要外部依赖的测试（DEEPSEEK_API_KEY / 必填参数）默认跳过，
 * 用 --all 强制全跑（CI 里配好 env 时使用）。
 */

import { readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const runAll = process.argv.includes("--all");

// 需要 API key 或命令行参数，默认不在回归集里
const NEEDS_EXTERNAL = new Set([
  "test-narrative-batch.mjs",   // 需 DEEPSEEK_API_KEY
  "test-narrative-prompt.mjs",  // 需 <topicId> <turnIndex> 参数
]);

const files = readdirSync(scriptsDir)
  .filter((f) => f.startsWith("test-") && f.endsWith(".mjs"))
  .sort();

let pass = 0, fail = 0, skip = 0;
const failed = [];

for (const f of files) {
  if (!runAll && NEEDS_EXTERNAL.has(f)) {
    console.log(`  ⊘ ${f}  (需外部依赖，--all 可强制跑)`);
    skip++;
    continue;
  }
  const r = spawnSync(process.execPath, [path.join(scriptsDir, f)], {
    encoding: "utf8",
    env: { ...process.env, NODE_NO_WARNINGS: "1" },
  });
  if (r.status === 0) {
    console.log(`  ✓ ${f}`);
    pass++;
  } else {
    console.log(`  ✗ ${f}  (exit ${r.status})`);
    const detail = `${r.stdout || ""}${r.stderr || ""}`
      .split("\n")
      .filter((l) => /fail|✗|error|assert/i.test(l))
      .slice(0, 5);
    detail.forEach((l) => console.log(`      ${l.trim()}`));
    failed.push(f);
    fail++;
  }
}

console.log(`\n${pass} passed, ${fail} failed, ${skip} skipped`);
if (failed.length) {
  console.log(`失败: ${failed.join(", ")}`);
}
process.exit(fail === 0 ? 0 : 1);
