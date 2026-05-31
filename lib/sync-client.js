/* ═══════════════════════════════════════════════════════
   lib/sync-client.js — 通用云端同步客户端

   Step 0A 抽离自 pages/vocab.js (创始人 2026-05-26 拍板)。
   目标: vocab 用户完全感觉不到 sync 被换了, 只是代码搬家了。

   设计 doc: docs/STEP_0A_SYNC_CLIENT_DESIGN.md
   规划 doc: docs/HISTORY_MEMBERSHIP_PLAN.md v1.2 §9 Step 0A

   核心原则 (跟搬家前 vocab.js 一对一保持):
   1. 每次变更 → 立即写 localStorage → debounce 推云端
   2. 服务端有版本号, 客户端带版本号推送
   3. 版本冲突时拉服务端 → mergeStates → 重推 (含 union-merge 第三批)
   4. _cloudReadyRef 闸门 — 登录用户必须等 onCloudData 完成才能 push
   5. intent payload-binding — 防 in-flight sync A 误清 sync B 的 intent
   6. detectSyncGate 触发 → recoverBlockedSync (pull-merge-repush 解冻)
   7. BroadcastChannel 多 tab 协调

   保留的 9 个历史 invariant 见 design doc §4。
   ═══════════════════════════════════════════════════════ */

import { mergeStates, validateMerged } from './syncMerge.js';

/**
 * 创建一个同步客户端实例 (factory pattern, 非 React hook)。
 * 调用方在 React mount effect 里调一次, 实例存到 ref。
 *
 * @param {object} options
 *   必传 callbacks (由 caller 注入业务逻辑):
 *   @param {function} options.getAuthHeaders  async (includeContentType?) => Headers
 *   @param {function} options.getUser         () => { id: string } | null
 *   @param {function} options.loadLocalSnapshot  async () => object | null
 *   @param {function} options.saveLocalSnapshot  async (data) => void
 *   @param {function} options.onCloudData     (cloudData) => void  应用云端数据到 caller state
 *   @param {function} options.onSyncStatus    (status, meta) => void
 *                                              status: 'idle' | 'syncing' | 'synced' | 'error'
 *                                              meta: { version, lastSyncAt, rejectedFields? }
 *                                              创始人审修正: 必须含 meta, 否则导航栏 lastSyncAt 不刷新
 *   @param {function} options.detectSyncGate  (data) => { blocked: boolean, reason?: string }
 *   @param {function} options.trackEvent      (event, props?) => void
 *
 *   可选配置 (有默认值, 跟 vocab.js 原值一致):
 *   @param {string}   [options.channelName='knowu_sync']
 *   @param {number}   [options.maxRetries=3]
 *   @param {number}   [options.debounceMs=500]
 *   @param {number}   [options.leadingGapMs=2000]
 *   @param {string}   [options.syncApiPath='/api/sync']
 *   @param {string}   [options.loadApiPath='/api/load']
 *
 * @returns SyncClient 实例 (见底部 return 块)
 */
export function createSyncClient(options) {
  var getAuthHeaders = options.getAuthHeaders;
  var getUser = options.getUser;
  var loadLocalSnapshot = options.loadLocalSnapshot;
  var saveLocalSnapshot = options.saveLocalSnapshot;
  var onCloudData = options.onCloudData;
  var onSyncStatus = options.onSyncStatus;
  var detectSyncGate = options.detectSyncGate;
  var trackEvent = options.trackEvent || function() {};

  // 单一共享客户端 (sync-client-singleton) 下, 活跃页回调会随页面切换。__getActiveCallbacks 让本客户端
  // 在「每次同步操作开始时」把当前活跃页回调钉死一份, 用于整个操作 —— 防 in-flight/debounce 期间用户
  // 切页导致单次操作前半用 A 页快照、后半用 B 页 getUser/saveLocalSnapshot/onCloudData (Codex P1)。
  // 操作经 in-flight 锁串行 → 同一时刻只一操作 → 重赋闭包变量即「按操作钉死」安全。直接 (非单例) 调用方
  // 不传 __getActiveCallbacks → 本函数 no-op, 行为 byte-identical。
  var _getActiveCallbacks = typeof options.__getActiveCallbacks === 'function' ? options.__getActiveCallbacks : null;
  function _pinCallbacks() {
    if (!_getActiveCallbacks) return;
    var c = _getActiveCallbacks();
    if (!c) return;
    if (typeof c.getAuthHeaders === 'function') getAuthHeaders = c.getAuthHeaders;
    if (typeof c.getUser === 'function') getUser = c.getUser;
    if (typeof c.loadLocalSnapshot === 'function') loadLocalSnapshot = c.loadLocalSnapshot;
    if (typeof c.saveLocalSnapshot === 'function') saveLocalSnapshot = c.saveLocalSnapshot;
    if (typeof c.onCloudData === 'function') onCloudData = c.onCloudData;
    if (typeof c.detectSyncGate === 'function') detectSyncGate = c.detectSyncGate;
    if (typeof c.onSyncStatus === 'function') onSyncStatus = c.onSyncStatus;
    if (typeof c.trackEvent === 'function') trackEvent = c.trackEvent;
  }

  var channelName = options.channelName || 'knowu_sync';
  var MAX_SYNC_RETRIES = options.maxRetries != null ? options.maxRetries : 3;
  var SYNC_DEBOUNCE_MS = options.debounceMs != null ? options.debounceMs : 500;
  var SYNC_LEADING_GAP_MS = options.leadingGapMs != null ? options.leadingGapMs : 2000;
  var SYNC_API_PATH = options.syncApiPath || '/api/sync';
  var LOAD_API_PATH = options.loadApiPath || '/api/load';

  // ─── 内部 refs (跟 vocab.js useRef 一对一, 用 {current} 对象模拟) ───
  var _syncTimerRef = { current: null };
  var _syncInFlightRef = { current: false };
  var _syncPendingRef = { current: false };
  var _syncRetryCountRef = { current: 0 };
  var _syncStatusTimerRef = { current: null };
  var _lastSyncAtRef = { current: 0 };
  // chompcloud 2026-04-30 修复: 登录用户的首次 sync 必须等 onCloudData 完成。
  // 否则 mount 创建的 default pet 会在云端 pet 拉到之前被 push 上云端覆盖真实进度。
  var _cloudReadyRef = { current: false };
  // L3: 用户主动操作时设此 intent, sync 时一起发给服务端解锁字段守卫
  var _intentRef = { current: null };
  var _intentSeqRef = { current: 0 };
  var _bcRef = { current: null };
  // 创始人 2026-05-26 修正: syncVersionRef 进 lib (409/load/broadcast/success 都依赖, 不能分裂)
  var _syncVersionRef = { current: 0 };
  // 创始人 2026-05-26 修正: recoveringRef 进 lib (gate recovery 是 orchestration 状态机)
  var _recoveringRef = { current: false };

  // ─── 内部 helpers ───

  // 统一的"synced → idle"切换 (vocab.js setSyncSynced 等价物)
  function _setSyncSynced() {
    onSyncStatus('synced', {
      version: _syncVersionRef.current,
      lastSyncAt: Date.now(),
    });
    if (_syncStatusTimerRef.current) clearTimeout(_syncStatusTimerRef.current);
    _syncStatusTimerRef.current = setTimeout(function() {
      _syncStatusTimerRef.current = null;
      onSyncStatus('idle', {
        version: _syncVersionRef.current,
        lastSyncAt: _lastSyncAtRef.current,
      });
    }, 2500);
  }

  // BroadcastChannel: sync 成功后通知其他 tab 拉新数据
  function _broadcastSync(version) {
    try {
      if (_bcRef.current) {
        _bcRef.current.postMessage({ type: 'sync', version: version, at: Date.now() });
      }
    } catch (e) {}
  }

  // 统一的"sync 成功响应"处理 — 正常 push 与 409 重推共用
  // Codex 复审 P1: 409 重推路径原先直接 setSyncSynced(), 没消费 rejectedFields/serverData
  // → 服务端拒字段时谎报 synced、本地继续 diverge。
  async function _applySyncSuccess(result) {
    _syncVersionRef.current = result.version;
    _syncRetryCountRef.current = 0;
    _lastSyncAtRef.current = Date.now();
    if (result.rejectedFields && result.rejectedFields.length > 0) {
      // 服务端守卫拒绝部分字段: serverData 是权威, 应用回本地避免继续推 diverged
      console.warn('[sync] guard rejected fields:', result.rejectedFields.join(', '));
      trackEvent('sync_guard_rejected', {
        fields: result.rejectedFields.join(','),
        version: result.version,
      });
      if (result.serverData) {
        try {
          await saveLocalSnapshot(result.serverData);
          onCloudData(result.serverData);
        } catch (applyErr) {
          console.warn('[sync] apply serverData after rejection failed:', applyErr.message);
        }
      }
      _broadcastSync(_syncVersionRef.current);
      onSyncStatus('error', {
        version: _syncVersionRef.current,
        lastSyncAt: _lastSyncAtRef.current,
        rejectedFields: result.rejectedFields,
      });
      return false; // 有拒绝 → 非干净成功 (intent 不清, 下次重带)
    } else {
      _broadcastSync(_syncVersionRef.current);
      _setSyncSynced();
      return true; // 干净成功 → caller 据此清对应 intent (身份匹配)
    }
  }

  // 推送一份完整快照到云端: 含 409 冲突合并 + 重推 + 成功响应处理
  // 正常 _doSync 与 _recoverBlockedSync 共用。intent 跟随本次 payload, 409 重推继续携带
  // (Codex round2: 避免重推丢 intent 导致合法缩减被守卫拦截)。
  async function _pushSnapshot(dataToPush, intent) {
    var u = getUser();
    if (!u) return;
    var intentType = intent && intent.type;
    // 干净成功后只清"本次捕获的 intent", 避免误清 in-flight 期间用户新设的 intent (P1)
    var _clearIntentIfMine = function() {
      if (_intentRef.current === intent) _intentRef.current = null;
    };
    dataToPush.updatedAt = new Date().toISOString();
    // 第三批可观测性: push 前留 breadcrumb
    trackEvent('sync_push', {
      version: _syncVersionRef.current,
      intent: intentType || 'none',
      wsm: Object.keys(dataToPush.wordStatusMap || {}).length,
      rwd: Object.keys(dataToPush.reviewWordData || {}).length,
      word_input_len: (dataToPush.wordInput || '').length,
    });
    var r = await fetch(SYNC_API_PATH, {
      method: 'POST',
      headers: await getAuthHeaders(true),
      body: JSON.stringify({
        userId: u.id,
        data: dataToPush,
        clientVersion: _syncVersionRef.current,
        intent: intentType,
      }),
    });
    if (r.status === 409) {
      var conflict = await r.json();
      console.warn(
        '[sync] version conflict: client=' + _syncVersionRef.current +
        ' server=' + conflict.serverVersion + ' — merging'
      );
      trackEvent('sync_conflict_409', {
        client_version: _syncVersionRef.current,
        server_version: conflict.serverVersion,
      });
      if (conflict.serverData) {
        var merged;
        try {
          merged = mergeStates(dataToPush, conflict.serverData);
          if (!validateMerged(merged, conflict.serverData)) merged = conflict.serverData;
        } catch (mergeErr) {
          console.warn('[sync] merge threw, fallback to server:', mergeErr.message);
          merged = conflict.serverData;
        }
        _syncVersionRef.current = conflict.serverVersion;
        await saveLocalSnapshot(merged);
        onCloudData(merged);
        var r2 = await fetch(SYNC_API_PATH, {
          method: 'POST',
          headers: await getAuthHeaders(true),
          body: JSON.stringify({
            userId: u.id,
            data: merged,
            clientVersion: _syncVersionRef.current,
            intent: intentType,
          }),
        });
        if (r2.ok) {
          var clean2 = await _applySyncSuccess(await r2.json());
          if (clean2) _clearIntentIfMine();
        } else if (r2.status === 409) {
          var conflict2 = await r2.json();
          console.warn('[sync] re-merge still 409 — union-merge 保本地, 交给重试机制 (不谎报 synced)');
          trackEvent('sync_conflict_409', {
            client_version: _syncVersionRef.current,
            server_version: conflict2.serverVersion,
            attempt: 2,
          });
          if (conflict2.serverData) {
            // 第三批: union-merge 保住用户本轮 merged 的改动到本地 (不丢词)
            var merged2;
            try {
              merged2 = mergeStates(merged, conflict2.serverData);
              if (!validateMerged(merged2, conflict2.serverData)) merged2 = conflict2.serverData;
            } catch (e2) {
              console.warn('[sync] final merge threw, fallback to server:', e2.message);
              merged2 = conflict2.serverData;
            }
            _syncVersionRef.current = conflict2.serverVersion;
            await saveLocalSnapshot(merged2);
            onCloudData(merged2);
          }
          // Codex P1: merged2 还没推上云 → 绝不 setSyncSynced / clearIntent (否则假"已同步"、
          // intent 丢、autosave 因本地已一致不再触发 → 云端永远缺这次 union)。
          // 抛错进 _doSync 指数退避: 下轮 loadSave 读到 merged2 + 仍带 intent 重推。
          throw new Error('re-merge still 409 (max contention) — retry scheduled');
        } else {
          throw new Error('re-push failed: ' + r2.status);
        }
      }
      _syncRetryCountRef.current = 0;
    } else if (r.ok) {
      var clean = await _applySyncSuccess(await r.json());
      if (clean) _clearIntentIfMine();
    } else {
      throw new Error('sync failed: ' + r.status);
    }
  }

  // 闸门触发后的恢复流程 (第二批: 打破活锁)
  // detectSyncGate 触发说明本地快照看似危险 (race/mount bug 让本地比云端少)。
  // 旧逻辑直接 setSyncStatus("error") + return → 永久不同步 (version 冻结元凶)。
  // 新逻辑: 拉云端 → 合并 → 推 merged。merged 含云端数据, 不会再触发闸门 → 解冻。
  async function _recoverBlockedSync(reason, localData, intent) {
    if (_recoveringRef.current) return;
    _recoveringRef.current = true;
    try {
      console.warn('[sync] gate triggered (' + reason + '), pull-merge-repush 尝试解冻');
      trackEvent('sync_gate_blocked', { reason: reason });
      var u = getUser();
      if (!u) return;
      var cloudRes = await loadFromCloudInternal(u.id);
      if (!cloudRes.ok) {
        // 拉云失败 → 不强推 (避免覆盖云端), 抛错交给 _doSync 重试 (指数退避 + MAX 上限)
        console.warn('[sync] recover: cloud load failed, will retry:', cloudRes.error);
        throw new Error('recover_cloud_load_failed:' + cloudRes.error);
      }
      if (!cloudRes.data) {
        // 云端无数据 → 没有可保护的数据, 闸门是误判, 直接推本地建立初始数据
        await _pushSnapshot(localData, intent);
        return;
      }
      var merged;
      try {
        merged = mergeStates(localData, cloudRes.data);
        if (!validateMerged(merged, cloudRes.data)) merged = cloudRes.data;
      } catch (e) {
        merged = cloudRes.data;
      }
      // merged 仍触发闸门? 说明云端本身也异常 → 真 block (但把云端数据合进本地, 至少本地不丢)
      var reGate = detectSyncGate(merged);
      if (reGate.blocked) {
        console.warn('[sync] recover: merged 仍触发闸门 (' + reGate.reason + '), 真 block');
        await saveLocalSnapshot(merged);
        onCloudData(merged);
        onSyncStatus('error', {
          version: _syncVersionRef.current,
          lastSyncAt: _lastSyncAtRef.current,
        });
        return;
      }
      _syncVersionRef.current = cloudRes.version;
      await saveLocalSnapshot(merged);
      onCloudData(merged);
      await _pushSnapshot(merged, intent);
    } finally {
      _recoveringRef.current = false;
    }
  }

  // 内部 loadFromCloud (供 _recoverBlockedSync 调; 也作为公共 API 暴露)
  // 结构化返回 (第二批): 区分"云端无数据(首次用户)"与"读取失败"。
  //   { ok:true, data, version, hasData }  ← 成功 (data 可能为 null = 首次用户)
  //   { ok:false, error }                  ← 读取失败 (网络/HTTP/解析)
  async function loadFromCloudInternal(userId) {
    _pinCallbacks(); // Codex P1: 拉云+应用整段用同一组活跃页回调 (onCloudData/saveLocalSnapshot)
    try {
      var r = await fetch(LOAD_API_PATH + '?userId=' + userId, {
        headers: await getAuthHeaders(false),
      });
      if (!r.ok) {
        console.warn('[loadFromCloud] http ' + r.status);
        return { ok: false, error: 'http_' + r.status };
      }
      var json = await r.json();
      _syncVersionRef.current = json.version || 0;
      return {
        ok: true,
        data: json.data || null,
        version: json.version || 0,
        hasData: !!json.data,
      };
    } catch (e) {
      console.warn('[loadFromCloud] failed:', e.message);
      return { ok: false, error: e.message || 'network' };
    }
  }

  // 真正推送的内部函数
  async function _doSync() {
    if (_syncInFlightRef.current) {
      _syncPendingRef.current = true;
      return;
    }
    _pinCallbacks(); // Codex P1: 操作开始即钉死当前活跃页回调, 整个 push/409/retry 用同一组
    var u = getUser();
    if (!u) {
      // Codex P2: 单例下 debounce 计时器触发时若刚切到的活跃页 user 还没 resolve (如 vocab 改动后
      // 500ms 内切到 /history, history getUser 异步未就绪) → 不静默丢弃排队的 sync, 标 pending,
      // 下次 syncToCloud (用户就绪后的任意触发) 会接着推 (读最新 localStorage, 改动不丢)。不自启定时器避免空转。
      _syncPendingRef.current = true;
      return;
    }
    // chompcloud 2026-04-30 修复闸门: 登录用户在 onCloudData 完成前不允许 push
    if (!_cloudReadyRef.current) {
      console.warn(
        '[sync] blocked: onCloudData not yet completed; preventing default-state overwrite'
      );
      _syncPendingRef.current = true;
      return;
    }
    _syncInFlightRef.current = true;
    onSyncStatus('syncing', {
      version: _syncVersionRef.current,
      lastSyncAt: _lastSyncAtRef.current,
    });
    try {
      var fullData = await loadLocalSnapshot();
      if (!fullData) {
        _syncInFlightRef.current = false;
        onSyncStatus('idle', {
          version: _syncVersionRef.current,
          lastSyncAt: _lastSyncAtRef.current,
        });
        return;
      }
      var intent = _intentRef.current; // 不在此清空; 成功后才清 (第二批)

      // 反数据丢失闸门 (第二批): 触发不再静默 return (活锁 → version 冻结),
      // 改为 pull-merge-repush 解冻。detectSyncGate 是 caller 提供, 可单测。
      var gate = detectSyncGate(fullData);
      if (gate.blocked) {
        await _recoverBlockedSync(gate.reason, fullData, intent);
        return;
      }

      await _pushSnapshot(fullData, intent);
    } catch (e) {
      console.warn('[sync] error:', e.message);
      _syncRetryCountRef.current++;
      if (_syncRetryCountRef.current <= MAX_SYNC_RETRIES) {
        setTimeout(function() {
          _doSync();
        }, 1000 * Math.pow(2, _syncRetryCountRef.current));
        onSyncStatus('syncing', {
          version: _syncVersionRef.current,
          lastSyncAt: _lastSyncAtRef.current,
        });
      } else {
        onSyncStatus('error', {
          version: _syncVersionRef.current,
          lastSyncAt: _lastSyncAtRef.current,
        });
      }
    } finally {
      _syncInFlightRef.current = false;
      if (_syncPendingRef.current) {
        _syncPendingRef.current = false;
        publicSyncToCloud();
      }
    }
  }

  // syncToCloud: leading edge debounce
  //   距上次成功 sync ≥ SYNC_LEADING_GAP_MS (2s) 时立即推, 否则 debounce 500ms
  //   这样"用户答完一题立刻 sync", 连续操作时不会一直被推迟
  function publicSyncToCloud() {
    if (_syncTimerRef.current) clearTimeout(_syncTimerRef.current);
    // 用户主动触发 (非自动重试) 时复位重试计数, 让本次有机会推送
    // 原问题: 重试计数超过 MAX_SYNC_RETRIES 后, 用户操作也无法触发新的推送
    if (_syncRetryCountRef.current > MAX_SYNC_RETRIES) {
      _syncRetryCountRef.current = 0;
    }
    var sinceLast = Date.now() - _lastSyncAtRef.current;
    if (sinceLast >= SYNC_LEADING_GAP_MS) {
      // 距上次成功 sync 已 ≥ 2s, 立即推 (leading edge)
      _doSync();
    } else {
      // 否则 debounce 500ms (trailing edge)
      _syncTimerRef.current = setTimeout(function() {
        _syncTimerRef.current = null;
        _doSync();
      }, SYNC_DEBOUNCE_MS);
    }
  }

  // ─── 公共 API ───
  return {
    /**
     * leading edge debounce 推送。caller 在 saveLocalSnapshot 后调。
     */
    syncToCloud: publicSyncToCloud,

    /**
     * 标记用户意图 (如 'user_edit_wordInput' / 'user_upload')。
     * 返回 intent 对象 {type, id}, intent 跟随当前 in-flight push,
     * 成功后只清"自己的" (payload-binding 防 sync A 误清 sync B 的 intent)。
     */
    markIntent: function(type) {
      _intentRef.current = { type: type, id: ++_intentSeqRef.current };
      return _intentRef.current;
    },

    /**
     * 设置/解锁云端 ready 闸门。
     * login + onCloudData 完成后 → setCloudReady(true) 解锁 push
     * logout → setCloudReady(false) 锁回去
     */
    setCloudReady: function(val) {
      _cloudReadyRef.current = !!val;
    },

    /**
     * 读云端 ready 状态。
     */
    isCloudReady: function() {
      return _cloudReadyRef.current;
    },

    /**
     * 拉云端数据。结构化返回区分"云端无数据"与"读取失败"。
     */
    loadFromCloud: loadFromCloudInternal,

    /**
     * 初始化 BroadcastChannel 多 tab 协调。
     * @param {function} onRemoteVersion (version) => void
     *   收到其他 tab 推送的新 version 时调; caller 决定是否 pull (如 vocab 调 _maybePullCloud)
     */
    initBroadcastChannel: function(onRemoteVersion) {
      if (typeof BroadcastChannel === 'undefined') return;
      try {
        _bcRef.current = new BroadcastChannel(channelName);
        _bcRef.current.onmessage = function(ev) {
          var msg = ev && ev.data;
          if (msg && msg.type === 'sync' && typeof msg.version === 'number' &&
              msg.version > _syncVersionRef.current) {
            console.log('[bc] other tab synced version=' + msg.version + ', pulling');
            if (typeof onRemoteVersion === 'function') onRemoteVersion(msg.version);
          }
        };
      } catch (e) {
        console.warn('[bc] init failed:', e.message);
      }
    },

    /**
     * 关闭 BroadcastChannel (unmount 时调)。
     */
    destroyBroadcastChannel: function() {
      if (_bcRef.current) {
        try { _bcRef.current.close(); } catch (e) {}
        _bcRef.current = null;
      }
    },

    /**
     * 读当前 sync 状态 (仅读, 供 caller debug / UI 显示)。
     */
    getSyncStatus: function() {
      return {
        version: _syncVersionRef.current,
        lastSyncAt: _lastSyncAtRef.current,
        retryCount: _syncRetryCountRef.current,
        cloudReady: _cloudReadyRef.current,
        inFlight: _syncInFlightRef.current,
        pending: _syncPendingRef.current,
      };
    },

    /**
     * 设置 server version (caller 在 handleAuthUser 拉到 cloud 后用,
     * 或 sync API 响应回调里同步)。
     */
    setSyncVersion: function(v) {
      _syncVersionRef.current = v;
    },

    /**
     * 内部 refs 暴露 (仅供 vocab.js 兼容性 — 旧代码里有少数地方直接读 ref)。
     * 新代码不应该用这个; 应用 getSyncStatus / setSyncVersion。
     * Step 0A: 保留是为了让 vocab.js 切换时最小改动; Step 0B 完成后可考虑删。
     */
    _internalRefs: {
      syncInFlightRef: _syncInFlightRef,
      syncVersionRef: _syncVersionRef,
      intentRef: _intentRef,
      syncRetryCountRef: _syncRetryCountRef,
    },
  };
}
