import { createSyncClient } from './lib/sync-client.js';

// 模拟history的saveLocalSnapshot
let sharedBlob = { historyData: { inProgress: { topic1: {} }, completedTopics: ['tA'] }, wordStatusMap: { word1: 2 } };

const historyCallbacks = {
  getAuthHeaders: async () => new Headers(),
  getUser: () => ({ id: 'user1' }),
  loadLocalSnapshot: async () => {
    console.log('[history] loadLocalSnapshot called, blob is:', JSON.stringify(sharedBlob).substring(0, 80));
    return sharedBlob;
  },
  saveLocalSnapshot: async (d) => {
    console.log('[history] saveLocalSnapshot called');
    sharedBlob = d;
  },
  onCloudData: (d) => {
    console.log('[history] onCloudData called');
  },
  onSyncStatus: (status) => {
    console.log('[history] onSyncStatus:', status);
  },
  detectSyncGate: () => ({ blocked: false }),
  trackEvent: () => {}
};

const vocabCallbacks = {
  getAuthHeaders: async () => new Headers(),
  getUser: () => ({ id: 'user1' }),
  loadLocalSnapshot: async () => {
    console.log('[vocab] loadLocalSnapshot called, blob is:', JSON.stringify(sharedBlob).substring(0, 80));
    return sharedBlob;
  },
  saveLocalSnapshot: async (d) => {
    console.log('[vocab] saveLocalSnapshot called');
    sharedBlob = d;
  },
  onCloudData: (d) => {
    console.log('[vocab] onCloudData called - WRONG! This should be history!');
  },
  onSyncStatus: (status) => {
    console.log('[vocab] onSyncStatus:', status);
  },
  detectSyncGate: () => ({ blocked: false }),
  trackEvent: () => {}
};

let _activeCallbacks = historyCallbacks;

function getSyncClient(callbacks) {
  _activeCallbacks = callbacks;
  return client;
}

const proxied = {
  __getActiveCallbacks: () => _activeCallbacks,
  leadingGapMs: 500,  // 较短以便5_doSync同步触发
};

['getAuthHeaders', 'getUser', 'loadLocalSnapshot', 'saveLocalSnapshot', 'onCloudData', 'onSyncStatus', 'detectSyncGate', 'trackEvent'].forEach(k => {
  proxied[k] = function() {
    return _activeCallbacks && _activeCallbacks[k] && _activeCallbacks[k].apply(null, arguments);
  };
});

const client = createSyncClient(proxied);

async function test() {
  console.log('\n=== 初始状态 ===');
  console.log('Shared blob:', sharedBlob);
  
  console.log('\n=== 模拟enablePushFromCloud完成后的状态 ===');
  console.log('History已落盤mixed blob（假设历史拉云后），现在切页到vocab');
  
  // 更新_activeCallbacks为vocab
  _activeCallbacks = vocabCallbacks;
  console.log('Switched to vocab, _activeCallbacks updated');
  
  console.log('\n=== 等待2s后... ===');
  console.log('假设lastSyncAt在2s之前，publicSyncToCloud()会直接调_doSync()');
  console.log('如果lastSyncAt在2s之内，会debounce，giving user time to switch pages');
  
  // 直接调syncToCloud
  console.log('\nCalling client.syncToCloud()...');
  client.syncToCloud();
  
  // 等待一下，让async完成
  await new Promise(r => setTimeout(r, 1000));
  
  console.log('\n=== 最终状态 ===');
  console.log('onCloudData was called on which page? (看上面的日志)');
}

test().catch(console.error);
