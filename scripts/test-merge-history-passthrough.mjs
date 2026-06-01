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
import { pruneCompletedInProgress } from "../lib/syncMerge.js";

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

console.log("\n[7] R5: learningReceipts / reviewPool / sidekickLogs field-level union (不丢另一端)");
{
  // localNewer 判定靠 updatedAt: local 较新
  var local = { updatedAt: "2026-05-30T10:00:00Z", historyData: {
    learningReceipts: { topicA: { lens1: { done: true } } },
    reviewPool: { words: [{ word: "alpha" }], concepts: [{ conceptId: "c1" }] },
    sidekickLogs: { topicA: [{ q: "a1" }] },
  } };
  var server = { updatedAt: "2026-05-30T09:00:00Z", historyData: {
    learningReceipts: { topicA: { lens2: { done: true } }, topicB: { lens1: { done: true } } },
    reviewPool: { words: [{ word: "beta" }], concepts: [{ conceptId: "c2" }] },
    sidekickLogs: { topicB: [{ q: "b1" }] },
  } };
  var m = mergeProgress(local, server).historyData;

  // learningReceipts: 两层 union — topicA 的 lens1+lens2 + topicB.lens1 都在
  ok("receipts: topicA.lens1 保留 (local 侧)", !!(m.learningReceipts.topicA && m.learningReceipts.topicA.lens1));
  ok("receipts: topicA.lens2 保留 (server 侧, 不被 newer 整体盖掉)", !!m.learningReceipts.topicA.lens2);
  ok("receipts: topicB.lens1 保留 (server 独有 topic)", !!(m.learningReceipts.topicB && m.learningReceipts.topicB.lens1));

  // reviewPool: 两端 words / concepts union
  var ws = m.reviewPool.words.map(function (w) { return w.word; });
  ok("reviewPool.words union (alpha+beta)", ws.indexOf("alpha") !== -1 && ws.indexOf("beta") !== -1);
  var cs = m.reviewPool.concepts.map(function (c) { return c.conceptId; });
  ok("reviewPool.concepts union (c1+c2)", cs.indexOf("c1") !== -1 && cs.indexOf("c2") !== -1);

  // sidekickLogs: union by topic — topicA(local) + topicB(server) 都在
  ok("sidekickLogs: topicA 保留 (local)", Array.isArray(m.sidekickLogs.topicA));
  ok("sidekickLogs: topicB 保留 (server, 不被 newer 整体盖掉)", Array.isArray(m.sidekickLogs.topicB));
}

console.log("\n[8] R5 直接测 mergeHistoryData: 单边缺失 + dup word newer 赢 metadata");
{
  // 单边缺失不报错 / 返回另一边
  ok("local 无 historyData → 返回 server", mergeHistoryData(null, { reviewPool: { words: [{ word: "x" }] } }, false).reviewPool.words.length === 1);
  // dup word: 两端都有 'dup', newer (local) 的 metadata 赢, 且只出现一次
  var l = { reviewPool: { words: [{ word: "dup", note: "new" }], concepts: [] } };
  var s = { reviewPool: { words: [{ word: "dup", note: "old" }], concepts: [] } };
  var rp = mergeHistoryData(l, s, true).reviewPool; // localNewer=true
  ok("dup word 去重为 1 条", rp.words.filter(function (w) { return w.word === "dup"; }).length === 1);
  ok("dup word newer metadata 赢 (note=new)", rp.words.find(function (w) { return w.word === "dup"; }).note === "new");
}

console.log("\n[9] R5 P1: inProgress 同 topic 取 savedAt 较新 (不被 blob updatedAt 误判)");
{
  // local 的 blob 较新 (做了 vocab → updatedAt 12:30), 但它的 lesson savedAt 较旧 (10:00, turn 9);
  // server lesson savedAt 较新 (11:45, turn 11)。应取 server 的 turn 11 (最近在这门课上动的赢)。
  var local = { updatedAt: "2026-05-31T12:30:00Z", historyData: {
    inProgress: { topicX: { turnIndex: 9, lensId: "l1", savedAt: "2026-05-31T10:00:00Z" } } } };
  var server = { updatedAt: "2026-05-31T11:45:00Z", historyData: {
    inProgress: { topicX: { turnIndex: 11, lensId: "l1", savedAt: "2026-05-31T11:45:00Z" } } } };
  var m = mergeProgress(local, server).historyData;
  ok("同 topic: savedAt 较新的 turn 11 赢 (blob 较新的 local 不靠 updatedAt 抢)", m.inProgress.topicX.turnIndex === 11);

  // 不同 topic → union 都在
  var l2 = { updatedAt: "2026-05-31T12:00:00Z", historyData: { inProgress: { A: { turnIndex: 2, savedAt: "2026-05-31T12:00:00Z" } } } };
  var s2 = { updatedAt: "2026-05-31T11:00:00Z", historyData: { inProgress: { B: { turnIndex: 3, savedAt: "2026-05-31T11:00:00Z" } } } };
  var m2 = mergeProgress(l2, s2).historyData;
  ok("不同 topic 都保留 (A+B)", m2.inProgress.A && m2.inProgress.B);

  // savedAt 缺失 → 退回 localNewer (local 较新 → local 赢)
  var l3 = { updatedAt: "2026-05-31T12:00:00Z", historyData: { inProgress: { Z: { turnIndex: 5 } } } };
  var s3 = { updatedAt: "2026-05-31T11:00:00Z", historyData: { inProgress: { Z: { turnIndex: 7 } } } };
  var m3 = mergeProgress(l3, s3).historyData;
  ok("savedAt 缺失 → 退回 localNewer (local turn 5 赢)", m3.inProgress.Z.turnIndex === 5);
}

console.log("\n[10] R5 P1: userWorldview 累积数组 union (不丢另一端 selfDisclosure)");
{
  var local = { updatedAt: "2026-05-31T12:00:00Z", historyData: { userWorldview: {
    reasoningStyle: { pattern: "newest" },
    selfDisclosure: [{ topic: "t1", turn: 2, content: "我喜欢历史", at: "2026-05-31T10:00:00Z" }],
    valueEmphasis: ["collective"], topicsCompleted: ["t1"] } } };
  var server = { updatedAt: "2026-05-31T11:00:00Z", historyData: { userWorldview: {
    reasoningStyle: { pattern: "older" },
    selfDisclosure: [{ topic: "t2", turn: 3, content: "我在中国长大", at: "2026-05-31T09:00:00Z" }],
    valueEmphasis: ["individual"], topicsCompleted: ["t2"] } } };
  var m = mergeProgress(local, server).historyData.userWorldview;
  ok("selfDisclosure union (两条都在, 不丢)", m.selfDisclosure.length === 2);
  ok("valueEmphasis union (collective+individual)", m.valueEmphasis.indexOf("collective") !== -1 && m.valueEmphasis.indexOf("individual") !== -1);
  ok("topicsCompleted union (t1+t2)", m.topicsCompleted.indexOf("t1") !== -1 && m.topicsCompleted.indexOf("t2") !== -1);
  ok("reasoningStyle 标量字段 newer 赢 (newest)", m.reasoningStyle.pattern === "newest");

  // selfDisclosure dedupe: 同一条 (相同 topic|turn|content) 两端都有 → 去重为 1
  var l2 = { updatedAt: "2026-05-31T12:00:00Z", historyData: { userWorldview: {
    selfDisclosure: [{ topic: "t1", turn: 2, content: "同一句", at: "2026-05-31T10:00:00Z" }] } } };
  var s2 = { updatedAt: "2026-05-31T11:00:00Z", historyData: { userWorldview: {
    selfDisclosure: [{ topic: "t1", turn: 2, content: "同一句", at: "2026-05-31T10:00:00Z" }] } } };
  var m2 = mergeProgress(l2, s2).historyData.userWorldview;
  ok("selfDisclosure 重复条目去重 (1 条)", m2.selfDisclosure.length === 1);

  // 单边缺 userWorldview → 返回另一边 (不报错)
  var m3 = mergeHistoryData({ userWorldview: { selfDisclosure: [{ topic: "x", turn: 1, content: "c" }] } }, {}, true);
  ok("单边缺 userWorldview → 保留有的那边", m3.userWorldview.selfDisclosure.length === 1);
}

console.log("\n[11] 初始 seed 不得覆盖真实 worldview 标量 (Codex P2: 新设备先开 /history 点同步)");
{
  // local = 新设备 mount 刚 seed 的 placeholder (initialSeed, updatedAt 更新), server = 真实已演化画像 (较旧)
  var localSeed = { updatedAt: "2026-05-31T12:00:00Z", historyData: { userWorldview: {
    initialSeed: true,
    reasoningStyle: { pattern: "unknown — placeholder 假设" },
    knowledgeAnchors: { "x": { strength: "likely-strong" } },
    selfDisclosure: [{ topic: "fresh", turn: 1, content: "本设备刚说的", at: "2026-05-31T11:30:00Z" }],
    valueEmphasis: [] } } };
  var serverReal = { updatedAt: "2026-05-31T09:00:00Z", historyData: { userWorldview: {
    reasoningStyle: { pattern: "deductive, 已观察 8 课" },
    knowledgeAnchors: { "x": { strength: "confirmed-strong" } },
    selfDisclosure: [{ topic: "t-real", turn: 4, content: "真实披露", at: "2026-05-30T10:00:00Z" }],
    valueEmphasis: ["collective"] } } };
  var w = mergeProgress(localSeed, serverReal).historyData.userWorldview;
  ok("真实 reasoningStyle 标量赢 (seed 不靠更新 updatedAt 抢)", w.reasoningStyle.pattern === "deductive, 已观察 8 课");
  ok("真实 knowledgeAnchors 标量赢", w.knowledgeAnchors.x.strength === "confirmed-strong");
  ok("本设备新 selfDisclosure 仍 union 进来 (不丢)", w.selfDisclosure.some(function(d){return d.content==="本设备刚说的";}));
  ok("真实 selfDisclosure 也在", w.selfDisclosure.some(function(d){return d.content==="真实披露";}));
  ok("真实端 valueEmphasis 不被 seed 空数组清掉", w.valueEmphasis.indexOf("collective") !== -1);
  ok("合并结果不再标记 initialSeed (已含真实数据)", w.initialSeed === undefined);

  // 两端都 seed → 维持 newer 赢 (不被新规则干扰)
  var both1 = { updatedAt: "2026-05-31T12:00:00Z", historyData: { userWorldview: { initialSeed: true, reasoningStyle: { pattern: "newer-seed" } } } };
  var both2 = { updatedAt: "2026-05-31T09:00:00Z", historyData: { userWorldview: { initialSeed: true, reasoningStyle: { pattern: "older-seed" } } } };
  var wb = mergeProgress(both1, both2).historyData.userWorldview;
  ok("两端都 seed → newer 赢 + 仍是 seed", wb.reasoningStyle.pattern === "newer-seed" && wb.initialSeed === true);

  // 两端都非 seed → 行为不变 (newer 赢), 既有用户零回归
  var real1 = { updatedAt: "2026-05-31T12:00:00Z", historyData: { userWorldview: { reasoningStyle: { pattern: "newer-real" } } } };
  var real2 = { updatedAt: "2026-05-31T09:00:00Z", historyData: { userWorldview: { reasoningStyle: { pattern: "older-real" } } } };
  var wr = mergeProgress(real1, real2).historyData.userWorldview;
  ok("两端都非 seed → newer 赢 (零回归)", wr.reasoningStyle.pattern === "newer-real" && wr.initialSeed === undefined);
}

console.log("\n[12] pruneCompletedInProgress: 已完成课的过期续点丢弃, 重学续点保留 (Codex P2)");
{
  // 续点早于完成 → 过期, 丢弃
  var d1 = { historyData: {
    completedTopics: { "qin": { completedAt: "2026-05-31T12:00:00Z" } },
    inProgress: { "qin": { savedAt: "2026-05-31T10:00:00Z", turn: 3 } } } };
  pruneCompletedInProgress(d1);
  ok("续点早于 completedAt → 丢弃", d1.historyData.inProgress.qin === undefined);

  // 重学: 续点晚于完成 → 保留
  var d2 = { historyData: {
    completedTopics: { "qin": { completedAt: "2026-05-31T10:00:00Z" } },
    inProgress: { "qin": { savedAt: "2026-05-31T12:00:00Z", turn: 1 } } } };
  pruneCompletedInProgress(d2);
  ok("重学续点 (savedAt > completedAt) → 保留", d2.historyData.inProgress.qin !== undefined);

  // 未完成的课 → 续点保留
  var d3 = { historyData: {
    completedTopics: {},
    inProgress: { "han": { savedAt: "2026-05-31T10:00:00Z" } } } };
  pruneCompletedInProgress(d3);
  ok("未完成课的续点 → 保留", d3.historyData.inProgress.han !== undefined);

  // 时间戳缺失 + 已完成 → 视为过期丢弃 (无法证明晚于完成)
  var d4 = { historyData: {
    completedTopics: { "tang": { completedAt: "2026-05-31T10:00:00Z" } },
    inProgress: { "tang": { turn: 2 } } } };
  pruneCompletedInProgress(d4);
  ok("续点缺 savedAt + 已完成 → 丢弃", d4.historyData.inProgress.tang === undefined);

  // 缺字段 / 空 → 不报错
  ok("无 historyData → 原样返回不抛", pruneCompletedInProgress({}) !== undefined);
  ok("无 inProgress → 不抛", pruneCompletedInProgress({ historyData: { completedTopics: {} } }) !== undefined);
}

console.log("\n[13] placeholder historyData.profile 不得覆盖真实云端 profile (Codex P2)");
{
  // local = atlas/sample 流自动存的 placeholder profile (updatedAt 更新), server = 真实填写 (较旧)
  var locP = { updatedAt: "2026-05-31T12:00:00Z", historyData: { profile: { placeholder: true, grade: "7", name: "" } } };
  var srvP = { updatedAt: "2026-05-31T09:00:00Z", historyData: { profile: { grade: "8", name: "Willow", interests: ["history"] } } };
  var p = mergeProgress(locP, srvP).historyData.profile;
  ok("真实 profile 赢 (placeholder 不靠更新 updatedAt 抢)", p.name === "Willow" && !p.placeholder);
  ok("真实 profile 字段完整保留", Array.isArray(p.interests) && p.interests[0] === "history");

  // 两端都真实 → newer 赢 (零回归)
  var r1 = { updatedAt: "2026-05-31T12:00:00Z", historyData: { profile: { name: "newer-real" } } };
  var r2 = { updatedAt: "2026-05-31T09:00:00Z", historyData: { profile: { name: "older-real" } } };
  ok("两端都真实 → newer 赢 (零回归)", mergeProgress(r1, r2).historyData.profile.name === "newer-real");

  // 单边缺 profile → 保留有的那边
  var m = mergeHistoryData({ profile: { name: "only-local" } }, {}, true);
  ok("单边缺 profile → 保留有的那边", m.profile.name === "only-local");
}

console.log("\n──────────────────────────");
console.log("PASS " + pass + " / FAIL " + fail);
process.exit(fail === 0 ? 0 : 1);
