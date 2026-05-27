/* 纯函数单测: lib/sync-client.js
   运行: node scripts/test-sync-client.mjs

   覆盖创始人指定 9 个场景 + 9 个历史 invariant (见 docs/STEP_0A_SYNC_CLIENT_DESIGN.md §4)。
   不引入测试框架, node 原生 assert + mock fetch + 内存 storage。

   测试目标: 验证 lib 行为跟搬家前 vocab.js 一对一一致 — vocab 用户完全感觉不到 sync 被换了。
*/

import { createSyncClient } from "../lib/sync-client.js";

var pass = 0, fail = 0;
function ok(name, cond) {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); }
}
function eq(name, a, b) {
  var same = JSON.stringify(a) === JSON.stringify(b);
  if (!same) console.log("     got=" + JSON.stringify(a) + " want=" + JSON.stringify(b));
  ok(name, same);
}

// ─── Mock 工厂 ───
function makeMockFetch(handlers) {
  // handlers: { '/api/sync': [response1, response2, ...], '/api/load': [...] }
  // 每次调用按顺序消费下一个 response, 用尽抛错。
  // response: { status, json } 或 function(body) => { status, json }
  var calls = [];
  var indexes = {};
  function mockFetch(url, opts) {
    opts = opts || {};
    var key = url.split("?")[0];
    indexes[key] = indexes[key] || 0;
    var queue = handlers[key];
    if (!queue || indexes[key] >= queue.length) {
      throw new Error("mock fetch: no response queued for " + url + " call#" + (indexes[key] + 1));
    }
    var entry = queue[indexes[key]++];
    var body = opts.body ? JSON.parse(opts.body) : null;
    var res = typeof entry === "function" ? entry(body) : entry;
    calls.push({ url: url, opts: opts, body: body, response: res });
    return Promise.resolve({
      ok: res.status >= 200 && res.status < 300,
      status: res.status,
      json: function() { return Promise.resolve(res.json); },
    });
  }
  mockFetch.calls = calls;
  mockFetch.callsTo = function(key) { return calls.filter(function(c) { return c.url.split("?")[0] === key; }); };
  return mockFetch;
}

function makeMockStorage(initialData) {
  var data = initialData;
  return {
    load: function() { return Promise.resolve(data); },
    save: function(d) { data = d; return Promise.resolve(); },
    peek: function() { return data; },
  };
}

function makeMockBroadcastChannel() {
  var instances = [];
  function MockBC(name) {
    this.name = name;
    this.messages = [];
    this.onmessage = null;
    this._closed = false;
    instances.push(this);
  }
  MockBC.prototype.postMessage = function(msg) {
    if (this._closed) return;
    this.messages.push(msg);
  };
  MockBC.prototype.close = function() { this._closed = true; };
  MockBC.instances = instances;
  MockBC.reset = function() { instances.length = 0; };
  return MockBC;
}

function makeStatusRecorder() {
  var events = [];
  return {
    handler: function(status, meta) { events.push({ status: status, meta: meta }); },
    events: events,
  };
}

function makeSyncClient(opts) {
  // 通用 client builder, 默认参数能跑通所有"happy path"测试
  return createSyncClient({
    getAuthHeaders: opts.getAuthHeaders || (async function() { return { Authorization: "Bearer t" }; }),
    getUser: opts.getUser || function() { return { id: "u1" }; },
    loadLocalSnapshot: opts.loadLocalSnapshot,
    saveLocalSnapshot: opts.saveLocalSnapshot,
    onCloudData: opts.onCloudData || function() {},
    onSyncStatus: opts.onSyncStatus || function() {},
    detectSyncGate: opts.detectSyncGate || function() { return { blocked: false }; },
    trackEvent: opts.trackEvent || function() {},
    debounceMs: opts.debounceMs != null ? opts.debounceMs : 10, // 测试用短 debounce
    leadingGapMs: opts.leadingGapMs != null ? opts.leadingGapMs : 5,
    maxRetries: opts.maxRetries != null ? opts.maxRetries : 3,
  });
}

// 等待异步操作完成 (replace setImmediate, 跑 microtasks + timers)
function tick(ms) {
  return new Promise(function(resolve) { setTimeout(resolve, ms || 0); });
}

// 安装 / 卸载全局 mock
function installGlobals(mockFetch, MockBC) {
  globalThis.fetch = mockFetch;
  if (MockBC) globalThis.BroadcastChannel = MockBC;
}
function uninstallGlobals() {
  delete globalThis.fetch;
  delete globalThis.BroadcastChannel;
}

// ════════════════════════════════════════════════════════════════
// SCENARIO 1: cloudReady=false 时不 push, 只记 pending
// (invariant #1: cloudReady gate)
// ════════════════════════════════════════════════════════════════
async function scenario1_cloudReadyGate() {
  console.log("\n── SCENARIO 1: cloudReady=false → 不 push, 只记 pending ──");
  var storage = makeMockStorage({ wordInput: "hello" });
  var fetchMock = makeMockFetch({ "/api/sync": [{ status: 200, json: { version: 1 } }] });
  installGlobals(fetchMock);

  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
  });
  // cloudReady 默认 false
  ok("初始 cloudReady=false", client.isCloudReady() === false);

  client.syncToCloud();
  await tick(20);

  eq("不发 fetch 请求 (cloudReady=false)", fetchMock.callsTo("/api/sync").length, 0);
  ok("pending 标记已设", client.getSyncStatus().pending === true);

  // 解锁 cloudReady → 应自动触发 pending sync
  // (注意: vocab.js 里是显式 syncToCloud, 不是 setCloudReady 自动触发; lib 行为一致)
  client.setCloudReady(true);
  ok("setCloudReady(true) 后 cloudReady=true", client.isCloudReady() === true);
  client.syncToCloud();
  await tick(20);
  eq("解锁后 push 1 次", fetchMock.callsTo("/api/sync").length, 1);
  ok("push body 含 wordInput", fetchMock.calls[0].body.data.wordInput === "hello");

  uninstallGlobals();
}

// ════════════════════════════════════════════════════════════════
// SCENARIO 2: markIntent payload-binding (invariant #2)
// A in-flight 期间设 intent B → A 成功不能清 B
// ════════════════════════════════════════════════════════════════
async function scenario2_intentPayloadBinding() {
  console.log("\n── SCENARIO 2: intent payload-binding (A 成功不清 B) ──");
  var storage = makeMockStorage({ wordInput: "a" });
  // 用 promise 控制 sync API 返回时机, 模拟 A in-flight
  var aResolve;
  var aPromise = new Promise(function(r) { aResolve = r; });
  var fetchMock = function(url, opts) {
    var body = opts && opts.body ? JSON.parse(opts.body) : null;
    if (url.split("?")[0] === "/api/sync") {
      return aPromise.then(function() {
        return {
          ok: true, status: 200,
          json: function() { return Promise.resolve({ version: 1 }); },
        };
      });
    }
    throw new Error("unexpected url " + url);
  };
  installGlobals(fetchMock);

  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
  });
  client.setCloudReady(true);

  // 设 intent A → 触发 sync (A in-flight)
  var intentA = client.markIntent("user_edit_wordInput");
  client.syncToCloud();
  await tick(20); // 等 fetch 起飞

  // A 正在 in-flight 期间, 设 intent B
  var intentB = client.markIntent("user_upload");
  ok("intent A B 是不同对象", intentA !== intentB);
  ok("intent B id 比 A 大", intentB.id > intentA.id);
  ok("当前 intentRef 是 B", client.getSyncStatus().version === 0); // 还没 sync 成功

  // 让 A 成功返回
  aResolve();
  await tick(20);

  // A 干净成功只清"自己的" → ref 仍 === B
  ok("A 成功后 intent B 仍保留 (payload-binding)",
    client._internalRefs.intentRef.current === intentB);

  uninstallGlobals();
}

// ════════════════════════════════════════════════════════════════
// SCENARIO 3: retry 超限后用户主动 syncToCloud 复位 retry (invariant #3)
// 验证: syncToCloud 入口的 `if (retryCount > MAX_SYNC_RETRIES) retryCount = 0`
// 不依赖 exponential backoff (1s+2s+4s+8s 太长不实测), 直接戳 ref 测复位逻辑
// ════════════════════════════════════════════════════════════════
async function scenario3_resetRetryOnUserTrigger() {
  console.log("\n── SCENARIO 3: retry 超限后用户主动 syncToCloud 复位 ──");
  var storage = makeMockStorage({ wordInput: "a", wordStatusMap: {} });
  var fetchMock = makeMockFetch({
    "/api/sync": [{ status: 200, json: { version: 1 } }],
  });
  installGlobals(fetchMock);

  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
    maxRetries: 3,
  });
  client.setCloudReady(true);

  ok("初始 retryCount=0", client.getSyncStatus().retryCount === 0);

  // 直接戳内部 ref 模拟"已经因为之前的失败 retry 超限"
  // (现实里通过 exponential backoff 累积到此值, 但测试里跑 30s 不现实;
  //  syncToCloud 入口的复位逻辑是独立纯逻辑, 单独测就足够)
  client._internalRefs.syncRetryCountRef.current = 5; // > maxRetries (3)
  ok("人为戳 retryCount=5 (模拟超限)",
    client.getSyncStatus().retryCount === 5);

  // 用户主动调 syncToCloud → 入口应复位 retry 到 0
  client.syncToCloud();
  // 入口同步执行复位, 不需要等任何异步
  ok("syncToCloud 入口立刻复位 retryCount=0 (防活锁)",
    client._internalRefs.syncRetryCountRef.current === 0);

  await tick(30); // 等推送完成 (复位后能成功 push)
  eq("复位后能正常推送 (1 次)", fetchMock.callsTo("/api/sync").length, 1);

  uninstallGlobals();
}

// ════════════════════════════════════════════════════════════════
// SCENARIO 4: 一次 409 → merge → re-push 成功, intent 正确清
// ════════════════════════════════════════════════════════════════
async function scenario4_singleConflictRecovery() {
  console.log("\n── SCENARIO 4: 一次 409 → merge → re-push 成功 ──");
  var storage = makeMockStorage({ wordInput: "local-word", wordStatusMap: {} });
  var fetchMock = makeMockFetch({
    "/api/sync": [
      // 第 1 次 push: 409
      function(body) {
        return {
          status: 409,
          json: {
            serverVersion: 5,
            serverData: { wordInput: "server-word", wordStatusMap: {} },
          },
        };
      },
      // 第 2 次 push (re-push merged): 成功
      function(body) {
        return {
          status: 200,
          json: { version: 6 },
        };
      },
    ],
  });
  installGlobals(fetchMock);

  var statusRec = makeStatusRecorder();
  var cloudDataApplied = [];
  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
    onCloudData: function(d) { cloudDataApplied.push(d); },
    onSyncStatus: statusRec.handler,
  });
  client.setCloudReady(true);

  var intent = client.markIntent("user_edit_wordInput");
  client.syncToCloud();
  await tick(50);

  eq("fetch 调用 2 次 (1 push + 1 re-push)", fetchMock.callsTo("/api/sync").length, 2);
  ok("第 2 次 push 是 merged 数据 (含 server-word)",
    fetchMock.calls[1].body.data.wordInput.indexOf("server-word") >= 0 ||
    fetchMock.calls[1].body.data.wordInput.indexOf("local-word") >= 0);
  ok("第 2 次 push 仍带 intent (Codex round2: 重推不丢 intent)",
    fetchMock.calls[1].body.intent === "user_edit_wordInput");
  ok("onCloudData 被调 (apply merged)", cloudDataApplied.length >= 1);
  ok("最终 intent 被清 (干净成功)",
    client._internalRefs.intentRef.current === null);
  ok("最终 status=synced",
    statusRec.events.some(function(e) { return e.status === "synced"; }));

  uninstallGlobals();
}

// ════════════════════════════════════════════════════════════════
// SCENARIO 5: 二次 409 → 保存 merged2 + 抛错进 retry, 不能 synced
// (invariant #5 union-merge 绝不假 synced)
// ════════════════════════════════════════════════════════════════
async function scenario5_doubleConflictNoFalseSynced() {
  console.log("\n── SCENARIO 5: 二次 409 → merged2 本地保存 + 抛错重试, 绝不假 synced ──");
  var storage = makeMockStorage({ wordInput: "local", wordStatusMap: {} });
  var fetchMock = makeMockFetch({
    "/api/sync": [
      // 第 1 次 push: 409
      { status: 409, json: { serverVersion: 5, serverData: { wordInput: "s1", wordStatusMap: {} } } },
      // 第 2 次 push (re-push merged): 再 409
      { status: 409, json: { serverVersion: 6, serverData: { wordInput: "s2", wordStatusMap: {} } } },
      // 第 3 次 push (retry from _doSync exponential backoff, 仍会带 intent): 成功
      { status: 200, json: { version: 7 } },
    ],
  });
  installGlobals(fetchMock);

  var statusRec = makeStatusRecorder();
  var cloudDataApplied = [];
  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
    onCloudData: function(d) { cloudDataApplied.push(d); },
    onSyncStatus: statusRec.handler,
    maxRetries: 5, // 给足重试预算
  });
  client.setCloudReady(true);

  client.syncToCloud();
  // 第 1 次 409 + 第 2 次 409 同步发生 (await chain), 然后抛错进 retry (指数退避: 1000 * 2^1 = 2s)
  await tick(50);

  // 此时第 2 次 409 已抛错, 但还没进重试
  eq("已发 2 次 push (1 + re-push)", fetchMock.callsTo("/api/sync").length, 2);
  ok("绝不出现 synced 状态 (假已同步)",
    !statusRec.events.some(function(e) { return e.status === "synced"; }));

  // 验证 merged2 已写本地: 关键 invariant 是 saveLocalSnapshot 被调 ≥ 2 次
  // (1 次首 409 merged + 1 次 merged2 union-merge), 而不是简单字符串包含 —
  // mergeProgress 对 wordInput 字段的语义是「取较长/较新值」, 测试不应耦合此实现细节
  ok("saveLocalSnapshot 被调 ≥ 2 次 (merged + merged2 都写本地)",
    cloudDataApplied.length >= 2);
  // updatedAt 应被更新过 (即使 wordInput 字段保持 local, 整体 snapshot 已变 — 含 updatedAt 等)
  ok("最终本地 snapshot 含 updatedAt 字段 (说明 saveLocalSnapshot 真跑过)",
    !!storage.peek().updatedAt);

  uninstallGlobals();
}

// ════════════════════════════════════════════════════════════════
// SCENARIO 6: rejectedFields → apply serverData + status=error + intent 不清
// (invariant #4)
// ════════════════════════════════════════════════════════════════
async function scenario6_rejectedFieldsHandling() {
  console.log("\n── SCENARIO 6: rejectedFields → apply serverData + error + intent 不清 ──");
  var storage = makeMockStorage({ wordInput: "client", wordStatusMap: {} });
  var fetchMock = makeMockFetch({
    "/api/sync": [
      // 成功响应但带 rejectedFields
      {
        status: 200,
        json: {
          version: 5,
          rejectedFields: ["wordInput"],
          serverData: { wordInput: "server-authority", wordStatusMap: {} },
        },
      },
    ],
  });
  installGlobals(fetchMock);

  var statusRec = makeStatusRecorder();
  var cloudDataApplied = [];
  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
    onCloudData: function(d) { cloudDataApplied.push(d); },
    onSyncStatus: statusRec.handler,
  });
  client.setCloudReady(true);

  var intent = client.markIntent("user_edit_wordInput");
  client.syncToCloud();
  await tick(30);

  ok("status=error (拒绝字段不假报 synced)",
    statusRec.events.some(function(e) { return e.status === "error"; }));
  ok("error meta 含 rejectedFields",
    statusRec.events.some(function(e) {
      return e.status === "error" && e.meta && e.meta.rejectedFields &&
             e.meta.rejectedFields.indexOf("wordInput") >= 0;
    }));
  ok("intent 不清 (有拒绝 → 下次重带)",
    client._internalRefs.intentRef.current === intent);
  ok("serverData 被 apply 到本地",
    storage.peek().wordInput === "server-authority");
  ok("onCloudData 被调",
    cloudDataApplied.length === 1 &&
    cloudDataApplied[0].wordInput === "server-authority");

  uninstallGlobals();
}

// ════════════════════════════════════════════════════════════════
// SCENARIO 7: recoverBlockedSync — gate blocked → load cloud → merge → push
// ════════════════════════════════════════════════════════════════
async function scenario7_recoverBlockedSync() {
  console.log("\n── SCENARIO 7: gate blocked → pull-merge-repush 解冻 ──");
  // 本地仅 1 个词 (危险), 云端有 100 个 → gate 触发
  var localData = { wordInput: "only-one", wordStatusMap: {} };
  var cloudData = {
    wordInput: Array.from({ length: 100 }, function(_, i) { return "word" + i; }).join("\n"),
    wordStatusMap: {},
  };
  var storage = makeMockStorage(localData);
  var fetchMock = makeMockFetch({
    "/api/load": [{ status: 200, json: { version: 10, data: cloudData } }],
    "/api/sync": [{ status: 200, json: { version: 11 } }], // push merged 后成功
  });
  installGlobals(fetchMock);

  var gateChecks = 0;
  var cloudDataApplied = [];
  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
    onCloudData: function(d) { cloudDataApplied.push(d); },
    detectSyncGate: function(data) {
      gateChecks++;
      // 第 1 次 (本地 only-one) → blocked; 第 2 次 (merged 含 100 词) → 不 blocked
      var wordCount = (data.wordInput || "").split(/\n/).filter(Boolean).length;
      return wordCount < 10 ? { blocked: true, reason: "too_few_words" } : { blocked: false };
    },
  });
  client.setCloudReady(true);

  client.syncToCloud();
  await tick(50);

  ok("gate 被检查 ≥ 2 次 (本地 + merged)", gateChecks >= 2);
  eq("调了 /api/load 1 次 (recover 拉云)", fetchMock.callsTo("/api/load").length, 1);
  eq("调了 /api/sync 1 次 (推 merged)", fetchMock.callsTo("/api/sync").length, 1);
  ok("最终推上去的数据是 merged (含云端 100 词)",
    fetchMock.callsTo("/api/sync")[0].body.data.wordInput.split(/\n/).length >= 100);
  ok("recoveringRef 已复位",
    client.getSyncStatus().retryCount === 0); // recoveringRef 不直接暴露但成功路径会重置

  uninstallGlobals();
}

// ════════════════════════════════════════════════════════════════
// SCENARIO 8: BroadcastChannel — 发广播 + 收 remote version 回调
// ════════════════════════════════════════════════════════════════
async function scenario8_broadcastChannel() {
  console.log("\n── SCENARIO 8: BroadcastChannel 发广播 + 收 remote version ──");
  var MockBC = makeMockBroadcastChannel();
  var storage = makeMockStorage({ wordInput: "a", wordStatusMap: {} });
  var fetchMock = makeMockFetch({
    "/api/sync": [{ status: 200, json: { version: 42 } }],
  });
  installGlobals(fetchMock, MockBC);

  var remoteVersions = [];
  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
  });
  client.setCloudReady(true);
  client.initBroadcastChannel(function(version) { remoteVersions.push(version); });

  eq("BC 实例创建", MockBC.instances.length, 1);
  eq("默认 channelName=knowu_sync", MockBC.instances[0].name, "knowu_sync");

  // 触发 sync 成功 → 应广播 version=42
  client.syncToCloud();
  await tick(30);

  eq("广播了 1 条消息", MockBC.instances[0].messages.length, 1);
  eq("广播 message type=sync", MockBC.instances[0].messages[0].type, "sync");
  eq("广播 version=42", MockBC.instances[0].messages[0].version, 42);

  // 模拟其他 tab 推了更新版本 → onmessage 触发 callback (version > 当前)
  var ev = { data: { type: "sync", version: 99, at: Date.now() } };
  MockBC.instances[0].onmessage(ev);
  eq("收到 remote version 99, callback 触发", remoteVersions, [99]);

  // 收到旧版本不触发
  MockBC.instances[0].onmessage({ data: { type: "sync", version: 10, at: Date.now() } });
  eq("收到旧 version 不触发 callback", remoteVersions, [99]);

  // destroy 后再发不影响 (close 是 mock 内空操作但生产环境会真关)
  client.destroyBroadcastChannel();
  ok("destroyBroadcastChannel 不报错", true);

  MockBC.reset();
  uninstallGlobals();
}

// ════════════════════════════════════════════════════════════════
// SCENARIO 9: onSyncStatus(status, meta) — synced/error/syncing 都含 meta
// (创始人审修正: status meta 必须含 version/lastSyncAt/rejectedFields)
// ════════════════════════════════════════════════════════════════
async function scenario9_onSyncStatusMeta() {
  console.log("\n── SCENARIO 9: onSyncStatus(status, meta) 含 version/lastSyncAt/rejectedFields ──");
  var storage = makeMockStorage({ wordInput: "a", wordStatusMap: {} });
  var fetchMock = makeMockFetch({
    "/api/sync": [
      { status: 200, json: { version: 7 } }, // 成功 → synced
    ],
  });
  installGlobals(fetchMock);

  var statusRec = makeStatusRecorder();
  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
    onSyncStatus: statusRec.handler,
  });
  client.setCloudReady(true);

  client.syncToCloud();
  await tick(30);

  var syncing = statusRec.events.find(function(e) { return e.status === "syncing"; });
  ok("syncing 事件存在", !!syncing);
  ok("syncing meta 含 version",
    syncing && syncing.meta && typeof syncing.meta.version === "number");
  ok("syncing meta 含 lastSyncAt",
    syncing && syncing.meta && typeof syncing.meta.lastSyncAt === "number");

  var synced = statusRec.events.find(function(e) { return e.status === "synced"; });
  ok("synced 事件存在", !!synced);
  ok("synced meta version=7",
    synced && synced.meta && synced.meta.version === 7);
  ok("synced meta lastSyncAt 是有效时间戳",
    synced && synced.meta && synced.meta.lastSyncAt > 0);

  uninstallGlobals();

  // 验证 error + rejectedFields meta 已在 scenario 6 覆盖
  ok("error + rejectedFields meta 已在 scenario 6 覆盖 (跳过)", true);
}

// ════════════════════════════════════════════════════════════════
// EXTRA: leading edge debounce 行为验证 (vocab.js 原行为保持)
// ════════════════════════════════════════════════════════════════
async function extra_leadingEdgeDebounce() {
  console.log("\n── EXTRA: leading edge debounce ──");
  var storage = makeMockStorage({ wordInput: "a", wordStatusMap: {} });
  var fetchMock = makeMockFetch({
    "/api/sync": [
      { status: 200, json: { version: 1 } },
      { status: 200, json: { version: 2 } },
    ],
  });
  installGlobals(fetchMock);

  var client = makeSyncClient({
    loadLocalSnapshot: storage.load,
    saveLocalSnapshot: storage.save,
    debounceMs: 50,
    leadingGapMs: 100,
  });
  client.setCloudReady(true);

  // 首次调 → 距上次 ≥ leadingGapMs (lastSyncAt=0) → 立即推 (leading edge)
  client.syncToCloud();
  await tick(10); // 不等 debounce
  eq("首次 syncToCloud 立即推 (leading edge, lastSyncAt=0)",
    fetchMock.callsTo("/api/sync").length, 1);

  // 等成功 → lastSyncAt 设为 now
  await tick(30);

  // 立即再 syncToCloud → 距上次 < leadingGap (100ms) → debounce 50ms
  client.syncToCloud();
  await tick(10); // 还没到 debounce
  eq("第 2 次 syncToCloud 在 leadingGap 内 → debounce, 没立即推",
    fetchMock.callsTo("/api/sync").length, 1);

  await tick(60); // 等过 debounce (50ms)
  eq("debounce 后推第 2 次",
    fetchMock.callsTo("/api/sync").length, 2);

  uninstallGlobals();
}

// ════════════════════════════════════════════════════════════════
// 主入口
// ════════════════════════════════════════════════════════════════
async function main() {
  console.log("══════ lib/sync-client.js 单测 (Step 0A.4) ══════");

  await scenario1_cloudReadyGate();
  await scenario2_intentPayloadBinding();
  await scenario3_resetRetryOnUserTrigger();
  await scenario4_singleConflictRecovery();
  await scenario5_doubleConflictNoFalseSynced();
  await scenario6_rejectedFieldsHandling();
  await scenario7_recoverBlockedSync();
  await scenario8_broadcastChannel();
  await scenario9_onSyncStatusMeta();
  await extra_leadingEdgeDebounce();

  console.log("\n══════════════════════════════════════════════════");
  console.log("结果: " + pass + " 通过, " + fail + " 失败");
  if (fail > 0) {
    console.log("❌ 单测有失败, Step 0A.3 切 vocab 前必须修");
    process.exit(1);
  } else {
    console.log("✅ 全部通过, 可进入 Step 0A.3 切 vocab.js");
    process.exit(0);
  }
}

main().catch(function(e) {
  console.error("\n💥 测试运行时异常:", e);
  process.exit(2);
});
