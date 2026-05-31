/* ─── lib/sync-client-singleton.js — 单一共享同步客户端 (方案1) ──────────
   设计 doc: docs/STEP_0B_SYNC_REDESIGN.md §1。

   问题: vocabspark_v1 是 vocab + history 共享的单一 blob + 单一 user_progress 行。
   给 history 挂「第二个」独立 sync client → 两个 version/merge 争一个 blob → 双向污染
   (已被 workflow 证实)。根因: 一个 blob 不能有两个独立同步真相源。

   方案: 把 createSyncClient 的「实例」从「每页各建」改为「全 app(每 tab) 一个」。
   - 首次 getSyncClient(callbacks) 建唯一实例, 业务回调代理到模块级 _activeCallbacks。
   - 之后任何页 getSyncClient(callbacks) 只更新 _activeCallbacks (同一时刻只一页 mounted),
     返回同一实例 → version / BroadcastChannel / cloudReady / intent 全程单一, 根治双真相源。
   - 跨 tab 仍是每 tab 一个实例, 靠 BroadcastChannel + 服务端 union merge 协调 (与今天 vocab 多 tab 同款)。

   附带修复: vocab 旧代码每次页面 remount 都 createSyncClient 新建 (无 unmount 清理) → 残留
   多个 client 的 timer/BC 可能并发推送。单例让 remount 复用同一实例, 消除该既存隐患。 */

import { createSyncClient } from './sync-client.js';

// createSyncClient 的「业务回调」字段 (由活跃页注入); 其余是配置项 (首次取定)。
var CB_KEYS = ['getAuthHeaders', 'getUser', 'loadLocalSnapshot', 'saveLocalSnapshot', 'onCloudData', 'onSyncStatus', 'detectSyncGate', 'trackEvent'];

var _instance = null;
var _activeCallbacks = null;
var _ownerLabel = null;

/**
 * 取共享同步客户端。首次按 options 建唯一实例, 之后只切换活跃回调并返回同一实例。
 * @param {object} options  createSyncClient 的全部 options (回调 + 配置)。额外可带 ownerLabel ('vocab'|'history')。
 * @param {function} [_factory]  仅测试注入 (默认 createSyncClient); 生产勿传。
 */
function getSyncClient(options, _factory) {
  options = options || {};
  // 当前活跃页注入它的业务回调 (闭包到该页 state)。必须在 createSyncClient 之前设好,
  // 以防实例创建时同步回调读到 null。
  var cbs = {};
  CB_KEYS.forEach(function (k) { cbs[k] = options[k]; });
  _activeCallbacks = cbs;
  _ownerLabel = options.ownerLabel || null;

  if (_instance) return _instance;

  // 首次创建: 业务回调全部代理到 _activeCallbacks (后续切页只换它, 实例本身不变)。
  // 配置项取首次传入 (vocab+history 同 /api/sync /api/load knowu_sync, 一致)。
  var proxied = {
    channelName: options.channelName,
    maxRetries: options.maxRetries,
    debounceMs: options.debounceMs,
    leadingGapMs: options.leadingGapMs,
    syncApiPath: options.syncApiPath,
    loadApiPath: options.loadApiPath,
  };
  CB_KEYS.forEach(function (k) {
    proxied[k] = function () {
      var cb = _activeCallbacks && _activeCallbacks[k];
      if (typeof cb !== 'function') return undefined;
      return cb.apply(null, arguments);
    };
  });
  _instance = (_factory || createSyncClient)(proxied);
  return _instance;
}

// 当前活跃 owner 标签 (调试 / 诊断用)。
function getActiveOwner() { return _ownerLabel; }

// 测试 teardown (生产不调)。
function __resetSyncClientSingleton() { _instance = null; _activeCallbacks = null; _ownerLabel = null; }

export { getSyncClient, getActiveOwner, __resetSyncClientSingleton };
