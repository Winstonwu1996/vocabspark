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
  ok("history stats 累加取 max（totalXp=30）", m.historyData.stats.totalXp === 30);
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

console.log("\n[4] vocab 字段行为不回归（historyData 修复不影响主业）");
{
  var local = { updatedAt: "2026-05-22T10:00:00Z", stats: { xp: 50 }, wordStatusMap: { a: 1, b: 1 }, reviewWordData: {} };
  var server = { updatedAt: "2026-05-22T09:00:00Z", stats: { xp: 70 }, wordStatusMap: { a: 1 }, reviewWordData: {} };
  var m = mergeProgress(local, server);
  ok("stats.xp 仍取 max（70）", m.stats.xp === 70);
  ok("wordStatusMap 仍 union（a+b）", keys(m.wordStatusMap).length === 2);
  ok("无 historyData 时不引入该键", !("historyData" in m));
}

console.log("\n──────────────────────────");
console.log("PASS " + pass + " / FAIL " + fail);
process.exit(fail === 0 ? 0 : 1);
