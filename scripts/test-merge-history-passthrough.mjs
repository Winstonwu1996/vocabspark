/* ─── 回归测试：mergeProgress 不再丢 historyData / bridgeQueue / studyGoal ───
   修复前：mergeProgress `var merged = {}` 按白名单重建 → 409 冲突/登录合并整体丢
   历史进度。本测试锁定修复，防回归。
   跑：node scripts/test-merge-history-passthrough.mjs
*/
import {
  mergeProgress,
  mergeHistoryData,
  mergeBridgeQueue,
  validateProgressMerge,
  applyProgressGuards,
} from "../lib/progressMergePolicy.js";

var pass = 0, fail = 0;
function ok(name, cond) {
  if (cond) { pass++; console.log("  ✓ " + name); }
  else { fail++; console.log("  ✗ FAIL: " + name); }
}
function keys(o) { return Object.keys(o || {}); }

console.log("\n[1] mergeProgress 保留 historyData（核心回归）");
{
  // 两设备：local 完成 topicA，server 完成 topicB —— 合并后两个都要在
  var local = {
    updatedAt: "2026-05-22T10:00:00Z",
    stats: { xp: 100 }, wordStatusMap: { a: 1 }, reviewWordData: {},
    historyData: {
      completedTopics: { "magna-carta-1215": { completedAt: "2026-05-20", xpEarned: 30 } },
      inProgress: { "crusades-1099": { savedTurnIndex: 4 } },
      transcripts: { "magna-carta-1215": [{ t: "x" }] },
      userWorldview: { stance: "local-newer" },
      stats: { totalXp: 30, topicsCompleted: 1 },
    },
    bridgeQueue: { history: { "magna-carta-1215": { words: ["charter"] } } },
    studyGoal: "AP World",
  };
  var server = {
    updatedAt: "2026-05-22T09:00:00Z",
    stats: { xp: 80 }, wordStatusMap: { a: 1, b: 1 }, reviewWordData: {},
    historyData: {
      completedTopics: { "black-death-1347": { completedAt: "2026-05-19", xpEarned: 25 } },
      inProgress: { "renaissance-1500": { savedTurnIndex: 2 } },
      transcripts: { "black-death-1347": [{ t: "y" }] },
      userWorldview: { stance: "server-older" },
      stats: { totalXp: 25, topicsCompleted: 1 },
    },
    bridgeQueue: { history: { "black-death-1347": { words: ["plague"] } } },
    studyGoal: "",
  };
  var m = mergeProgress(local, server);
  ok("merged.historyData 存在（修复前是 undefined）", !!m.historyData);
  ok("completedTopics union 两个 topic 都在",
    m.historyData.completedTopics["magna-carta-1215"] && m.historyData.completedTopics["black-death-1347"]);
  ok("inProgress union 两个 topic 都在",
    m.historyData.inProgress["crusades-1099"] && m.historyData.inProgress["renaissance-1500"]);
  ok("transcripts union 两个 topic 都在",
    m.historyData.transcripts["magna-carta-1215"] && m.historyData.transcripts["black-death-1347"]);
  ok("history stats 重算: topicsCompleted=2 (union 完成数)", m.historyData.stats.topicsCompleted === 2);
  ok("history stats 重算: totalXp=55 (union xpEarned 求和, Codex P2)", m.historyData.stats.totalXp === 55);
  ok("userWorldview newer 赢（local 较新）", m.historyData.userWorldview.stance === "local-newer");
  ok("bridgeQueue.history union 两个都在",
    m.bridgeQueue.history["magna-carta-1215"] && m.bridgeQueue.history["black-death-1347"]);
  ok("studyGoal non-empty 兜底（local 较新且非空）", m.studyGoal === "AP World");
}

console.log("\n[2] 单边缺失不报错");
{
  var onlyLocal = { updatedAt: "2026-05-22T10:00:00Z", historyData: { completedTopics: { x: {} } } };
  var noHist = { updatedAt: "2026-05-22T09:00:00Z" };
  var m = mergeProgress(onlyLocal, noHist);
  ok("server 无 historyData 时保留 local 的", m.historyData && m.historyData.completedTopics.x);
  var m2 = mergeProgress(noHist, onlyLocal);
  ok("local 无 historyData 时保留 server 的", m2.historyData && m2.historyData.completedTopics.x);
  var m3 = mergeProgress({ updatedAt: "z" }, { updatedAt: "y" });
  ok("两边都无 historyData → merged 也不含（不无中生有）", !("historyData" in m3));
}

console.log("\n[3] validateProgressMerge 抓 historyData 缩水");
{
  var server = { historyData: { completedTopics: { a: {}, b: {} } }, bridgeQueue: { history: { a: {} } } };
  var goodMerge = { historyData: { completedTopics: { a: {}, b: {}, c: {} } }, bridgeQueue: { history: { a: {} } } };
  var badMerge = { historyData: { completedTopics: { a: {} } }, bridgeQueue: { history: {} } }; // 丢了 b + bridge
  ok("union 后 completedTopics 不缩水 → valid", validateProgressMerge(goodMerge, server) === true);
  ok("completedTopics 缩水 → invalid（触发回退 serverData）", validateProgressMerge(badMerge, server) === false);
}

console.log("\n[3b] validateProgressMerge 抓 inProgress / transcripts 缩水 (Codex P3)");
{
  var server = { historyData: { completedTopics: { a: {} }, inProgress: { x: {}, y: {} }, transcripts: { a: {}, b: {} } } };
  var dropIn = { historyData: { completedTopics: { a: {} }, inProgress: { x: {} }, transcripts: { a: {}, b: {} } } };
  var dropTr = { historyData: { completedTopics: { a: {} }, inProgress: { x: {}, y: {} }, transcripts: { a: {} } } };
  ok("inProgress 缩水 → invalid", validateProgressMerge(dropIn, server) === false);
  ok("transcripts 缩水 → invalid", validateProgressMerge(dropTr, server) === false);
}

console.log("\n[4] vocab 字段行为不回归（historyData 修复不影响主业）");
{
  var local = { updatedAt: "2026-05-22T10:00:00Z", stats: { xp: 50 }, wordStatusMap: { a: 1, b: 1 }, reviewWordData: {} };
  var server = { updatedAt: "2026-05-22T09:00:00Z", stats: { xp: 70 }, wordStatusMap: { a: 1 }, reviewWordData: {} };
  var m = mergeProgress(local, server);
  ok("stats.xp 仍取 max（70）", m.stats.xp === 70);
  ok("wordStatusMap 仍 union（a+b）", keys(m.wordStatusMap).length === 2);
  ok("无 historyData 时不引入该键", !("historyData" in m));
}

console.log("\n[5] applyProgressGuards 服务端守 historyData 缩水 (Codex P1)");
{
  // Codex 验证的边界：cloud {a,b}, incoming {a} → 旧守卫 rejected:[], safe 只剩 a
  var cloud = { historyData: { completedTopics: { a: { xpEarned: 30 }, b: { xpEarned: 25 } }, transcripts: { a: {} } } };
  var incoming = { historyData: { completedTopics: { a: { xpEarned: 30 } }, transcripts: { a: {} } } };
  var r = applyProgressGuards(incoming, cloud, undefined);
  ok("completedTopics 缩水被拦 → rejected 含 historyData", r.rejected.indexOf("historyData") !== -1);
  ok("保守 union → safe 保留 a+b（不丢 b）", keys(r.safe.historyData.completedTopics).length === 2);

  // 正常完成：completedTopics 增长 + inProgress 合法缩水 → 不应误伤
  var cloud2 = { historyData: { completedTopics: { a: {} }, inProgress: { topicX: {} }, transcripts: {} } };
  var incoming2 = { historyData: { completedTopics: { a: {}, topicX: {} }, inProgress: {}, transcripts: {} } };
  var r2 = applyProgressGuards(incoming2, cloud2, undefined);
  ok("正常完成 (inProgress 合法清空) → 不 reject historyData", r2.rejected.indexOf("historyData") === -1);
  ok("正常完成 → safe 保留 incoming 的 completedTopics(a+topicX)", keys(r2.safe.historyData.completedTopics).length === 2);

  // cloud 无 historyData → 守卫不触发
  var r3 = applyProgressGuards({ historyData: { completedTopics: {} } }, { stats: { xp: 1 } }, undefined);
  ok("cloud 无 historyData → 不 reject", r3.rejected.indexOf("historyData") === -1);

  // Codex Round 3 P1：guard 触发时不能丢 cloud 独有子字段 (base 必须是 cloud)
  var cloud4 = { historyData: {
    completedTopics: { a: {}, b: {} }, transcripts: { a: {} },
    userWorldview: { stance: "x" }, profile: "cloud-profile", curriculum: { grade: 8 },
    stats: { totalXp: 99 }, englishLevel: "B2", reviewPool: { p: 1 }, sidekickLogs: { s: 1 } } };
  var incoming4 = { historyData: { completedTopics: { a: {} }, profile: "new-profile" } }; // 缩水 + 缺一堆字段
  var r4 = applyProgressGuards(incoming4, cloud4, undefined);
  ok("guard 触发", r4.rejected.indexOf("historyData") !== -1);
  ok("completedTopics 仍 union (a+b)", keys(r4.safe.historyData.completedTopics).length === 2);
  ok("incoming 较新字段仍赢 (profile=new-profile)", r4.safe.historyData.profile === "new-profile");
  ["userWorldview", "curriculum", "stats", "englishLevel", "reviewPool", "sidekickLogs"].forEach(function (f) {
    ok("cloud 独有子字段保留: " + f, r4.safe.historyData[f] !== undefined);
  });
}

console.log("\n[6] mergeHistoryData stats 一致性 + passthrough 安全 (Codex P2)");
{
  var local = { updatedAt: "2026-05-22T10:00:00Z", historyData: {
    completedTopics: { A: { xpEarned: 30 } }, stats: { totalXp: 30, topicsCompleted: 1, customField: "keep-me" } } };
  var server = { updatedAt: "2026-05-22T09:00:00Z", historyData: {
    completedTopics: { B: { xpEarned: 25 } }, stats: { totalXp: 25, topicsCompleted: 1 } } };
  var m = mergeProgress(local, server);
  var hs = m.historyData.stats;
  ok("topicsCompleted = union 完成数 (2, 不再是 max(1,1)=1)", hs.topicsCompleted === 2);
  ok("totalXp ≥ union xpEarned 之和 (≥55)", hs.totalXp >= 55);
  ok("stats 其它子字段 passthrough 不丢 (customField)", hs.customField === "keep-me");
}

console.log("\n──────────────────────────");
console.log("PASS " + pass + " / FAIL " + fail);
process.exit(fail === 0 ? 0 : 1);
