/* 单测: lib/sync-client-singleton.js — 唯一实例 + 回调代理切换。
   用注入 factory 避免依赖真 createSyncClient (它需 BroadcastChannel)。
   跑: node scripts/test-sync-client-singleton.mjs */

import { getSyncClient, getActiveOwner, resetCloudReadyOnSignOut, __resetSyncClientSingleton } from '../lib/sync-client-singleton.js';

var pass = 0, fail = 0;
function ok(name, cond) { if (cond) { pass++; console.log('  ✓ ' + name); } else { fail++; console.log('  ✗ FAIL: ' + name); } }

// factory: 把收到的 proxied options 原样返回, 便于直接调代理回调验证路由。
var factoryCalls = 0;
function recordingFactory(proxied) { factoryCalls++; return { proxied: proxied, _id: factoryCalls }; }

console.log('\n[1] 同一实例: 多次 getSyncClient 只创建一次');
{
  __resetSyncClientSingleton();
  factoryCalls = 0;
  var a = getSyncClient({ ownerLabel: 'vocab', getUser: function () { return 'U1'; } }, recordingFactory);
  var b = getSyncClient({ ownerLabel: 'history', getUser: function () { return 'U2'; } }, recordingFactory);
  ok('factory 只被调用 1 次', factoryCalls === 1);
  ok('两次返回同一实例', a === b);
}

console.log('\n[2] 回调代理路由到「最新活跃页」回调');
{
  __resetSyncClientSingleton();
  var inst = getSyncClient({ ownerLabel: 'vocab', getUser: function () { return 'vocab-user'; }, onCloudData: function (d) { return 'vocab-applied:' + d; } }, recordingFactory);
  ok('代理 getUser → vocab 回调', inst.proxied.getUser() === 'vocab-user');
  ok('代理 onCloudData → vocab 回调', inst.proxied.onCloudData('X') === 'vocab-applied:X');

  // 切到 history 页 (同实例, 只换活跃回调)
  getSyncClient({ ownerLabel: 'history', getUser: function () { return 'history-user'; }, onCloudData: function (d) { return 'history-applied:' + d; } }, recordingFactory);
  ok('切页后代理 getUser → history 回调 (同一代理函数, 路由变了)', inst.proxied.getUser() === 'history-user');
  ok('切页后代理 onCloudData → history 回调', inst.proxied.onCloudData('Y') === 'history-applied:Y');
  ok('activeOwner = history', getActiveOwner() === 'history');
}

console.log('\n[3] 缺失回调安全 (代理返回 undefined, 不抛)');
{
  __resetSyncClientSingleton();
  var inst = getSyncClient({ ownerLabel: 'vocab' }, recordingFactory); // 没传任何回调
  var threw = false, r;
  try { r = inst.proxied.getUser(); } catch (e) { threw = true; }
  ok('调用未提供的回调 → 不抛', threw === false);
  ok('返回 undefined', r === undefined);
}

console.log('\n[4] 配置项取首次传入 (proxied 含 channelName/paths)');
{
  __resetSyncClientSingleton();
  var inst = getSyncClient({ ownerLabel: 'vocab', channelName: 'knowu_sync', syncApiPath: '/api/sync', loadApiPath: '/api/load' }, recordingFactory);
  ok('channelName 透传', inst.proxied.channelName === 'knowu_sync');
  ok('syncApiPath 透传', inst.proxied.syncApiPath === '/api/sync');
  // 第二次传不同配置 → 被忽略 (实例已建)
  getSyncClient({ ownerLabel: 'history', channelName: 'OTHER' }, recordingFactory);
  ok('二次配置被忽略 (实例不重建, channelName 仍 knowu_sync)', inst.proxied.channelName === 'knowu_sync');
}

console.log('\n[5] resetCloudReadyOnSignOut: 重锁 push 闸门 + 清版本 (Codex P1)');
{
  __resetSyncClientSingleton();
  var calls = { cloudReady: [], version: [] };
  var clientFactory = function () {
    return {
      setCloudReady: function (v) { calls.cloudReady.push(v); },
      setSyncVersion: function (v) { calls.version.push(v); },
    };
  };
  getSyncClient({ ownerLabel: 'vocab' }, clientFactory);
  resetCloudReadyOnSignOut();
  ok('setCloudReady(false) 被调用', calls.cloudReady.indexOf(false) !== -1);
  ok('setSyncVersion(0) 被调用', calls.version.indexOf(0) !== -1);
  // 无实例时不抛
  __resetSyncClientSingleton();
  var threw = false;
  try { resetCloudReadyOnSignOut(); } catch (e) { threw = true; }
  ok('无实例时 reset 不抛', threw === false);
}

console.log('\n──────────────────────────');
console.log('PASS ' + pass + ' / FAIL ' + fail);
if (fail > 0) process.exit(1);
