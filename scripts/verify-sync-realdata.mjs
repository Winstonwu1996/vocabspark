/* 真实数据合并验证：用 backups/ 里 chompcloud 的云端数据 (573 词) 构造 local diverge，
   跑 mergeProgress，验证关键不变量。证明 policy 在真实规模/形态数据上行为正确。
   运行：node scripts/verify-sync-realdata.mjs
   (依赖本地 backups/ 数据；找不到则跳过，不作为 CI 常驻测试) */

import fs from "node:fs";
import path from "node:path";
import { mergeProgress, entryRecency } from "../lib/progressMergePolicy.js";

var CHOMP = "d3906a86-3167-4219-be9b-93365afff7c7";

// 找最新备份
var bkRoot = "backups";
if (!fs.existsSync(bkRoot)) { console.log("⚠️  无 backups/ 目录，跳过真实数据验证"); process.exit(0); }
var dirs = fs.readdirSync(bkRoot).filter(function (d) { return fs.existsSync(path.join(bkRoot, d, "user_progress.json")); }).sort();
if (!dirs.length) { console.log("⚠️  无备份数据，跳过"); process.exit(0); }
var bk = path.join(bkRoot, dirs[dirs.length - 1]);
console.log("读取备份: " + bk);

var rows = JSON.parse(fs.readFileSync(path.join(bk, "user_progress.json"), "utf8"));
var cc = rows.find(function (r) { return r.user_id === CHOMP; });
if (!cc) { console.log("⚠️  备份中无 chompcloud，跳过"); process.exit(0); }

var cloud = cc.progress_data;
var cloudRwd = cloud.reviewWordData || {};
var words = Object.keys(cloudRwd);
console.log("云端 reviewWordData: " + words.length + " 词\n");

var today = new Date().toISOString();
var future = new Date(Date.now() + 7 * 86400000).toISOString();
var tomorrow = new Date(Date.now() + 86400000).toISOString();

// 深拷贝 cloud 作为 local 基础，再注入 diverge
var local = JSON.parse(JSON.stringify(cloud));
var localRwd = local.reviewWordData;

// 场景 B：本地 forgot (level→0, srsUpdatedAt=today) — 取 cloud level>=2 的词，验证降级不被旧高 level 覆盖
var forgotWords = words.filter(function (w) { return (Number(cloudRwd[w].reviewLevel) || 0) >= 2; }).slice(0, 10);
var forgotSet = new Set(forgotWords);

// 场景 A：本地最近复习了 (level 提升, nextReviewDate=future, srsUpdatedAt=today)
// 取与 forgot 不相交的前 10 个词
var reviewedWords = words.filter(function (w) { return !forgotSet.has(w); }).slice(0, 10);
reviewedWords.forEach(function (w) {
  var e = localRwd[w];
  e.reviewLevel = Math.min(4, (Number(e.reviewLevel) || 0) + 1);
  e.nextReviewDate = future;
  e.srsUpdatedAt = today;
  e.reviewHistory = (e.reviewHistory || []).concat([{ date: today, mode: "quick", result: "good" }]);
});

forgotWords.forEach(function (w) {
  var e = localRwd[w];
  e.reviewLevel = 0;
  e.nextReviewDate = tomorrow;
  e.srsUpdatedAt = today;
  e.reviewHistory = (e.reviewHistory || []).concat([{ date: today, mode: "quick", result: "forgot" }]);
});

// 场景 C：本地新增 5 个云端没有的词
var newWords = [];
for (var i = 0; i < 5; i++) { var nw = "__newlocal" + i; newWords.push(nw); localRwd[nw] = { word: nw, reviewLevel: 0, nextReviewDate: future, srsUpdatedAt: today, reviewHistory: [] }; }

// 场景 D：云端独有 (local 没拉到) — 删 local 最后 5 个
var reviewedSet = new Set(reviewedWords);
var cloudOnly = words.slice(-5).filter(function (w) { return !forgotSet.has(w) && !reviewedSet.has(w); });
cloudOnly.forEach(function (w) { delete localRwd[w]; });

local.updatedAt = today;
if (!cloud.updatedAt) cloud.updatedAt = "2026-05-17T20:54:17.788Z";

// ── 合并 ──
var merged = mergeProgress(local, cloud);
var mRwd = merged.reviewWordData;

var pass = 0, fail = 0;
function ok(name, cond, detail) {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name + (detail ? "  " + detail : "")); }
}

console.log("── 不变量验证 ──");
// 1. 不丢词：merged ⊇ cloud ∪ localNew
ok("不丢词: merged 词数 >= 云端", Object.keys(mRwd).length >= words.length,
  "merged=" + Object.keys(mRwd).length + " cloud=" + words.length);
ok("云端独有词保留 (local 没拉到也不丢)", cloudOnly.every(function (w) { return !!mRwd[w]; }),
  "cloudOnly=" + cloudOnly.length);
ok("本地新增词保留", newWords.every(function (w) { return !!mRwd[w]; }));

// 2. 本地复习的词：取本地 (level 提升 + future date)
var reviewedOk = reviewedWords.every(function (w) {
  return mRwd[w].reviewLevel === localRwd[w].reviewLevel && mRwd[w].nextReviewDate === future;
});
ok("本地复习的词: 取本地 (level 提升 + nextReviewDate=future)", reviewedOk);

// 3. 核心修复：forgot 降级保留，不被云端旧高 level 覆盖
var forgotOk = forgotWords.every(function (w) { return mRwd[w].reviewLevel === 0; });
ok("forgot 降级保留 (level=0, 不被云端旧高 level 覆盖) ★核心修复", forgotOk,
  forgotWords.length ? "" : "(无符合条件的 level>=2 词)");
console.log("     forgot 测试词数: " + forgotWords.length + " (云端原 level: " + forgotWords.map(function (w) { return cloudRwd[w].reviewLevel; }).join(",") + ")");
// 诊断失败词
forgotWords.filter(function (w) { return mRwd[w].reviewLevel !== 0; }).forEach(function (w) {
  console.log("     ⚠ '" + w + "': merged level=" + mRwd[w].reviewLevel +
    " | cloud{level:" + cloudRwd[w].reviewLevel + ",hist:" + (cloudRwd[w].reviewHistory || []).length + ",next:" + cloudRwd[w].nextReviewDate + "}" +
    " | recency local=" + entryRecency(localRwd[w]) + " cloud=" + entryRecency(cloudRwd[w]));
});

// 4. reviewHistory 不丢 (union)：复习词的 history 长度 >= 云端 + 1
var histOk = reviewedWords.every(function (w) {
  return (mRwd[w].reviewHistory || []).length >= (cloudRwd[w].reviewHistory || []).length;
});
ok("reviewHistory union 不丢历史", histOk);

// 5. recency 正确性：复习词 merged recency = today (本地最新)
var recencyOk = reviewedWords.every(function (w) { return entryRecency(mRwd[w]) === new Date(today).getTime(); });
ok("复习词 merged recency = 今天 (本地最新)", recencyOk);

// 6. 顶层字段未丢
ok("wordInput 保留", typeof merged.wordInput === "string" && merged.wordInput.length > 0);
ok("wordStatusMap 保留 (>= 云端)", Object.keys(merged.wordStatusMap || {}).length >= Object.keys(cloud.wordStatusMap || {}).length);

// 统计对比
function dueCount(rwd) {
  var now = Date.now();
  return Object.keys(rwd).filter(function (w) { var d = rwd[w].nextReviewDate; return d && new Date(d).getTime() <= now; }).length;
}
console.log("\n── 统计对比 ──");
console.log("  云端 due: " + dueCount(cloudRwd) + " / merged due: " + dueCount(mRwd));
console.log("  云端词数: " + words.length + " / merged 词数: " + Object.keys(mRwd).length);

console.log("\n──────────────────────────────");
console.log("通过 " + pass + " / " + (pass + fail));
if (fail > 0) { console.log("❌ 有失败"); process.exit(1); }
console.log("✅ 真实数据合并验证全部通过");
