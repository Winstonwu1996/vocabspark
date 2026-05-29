// ─── history-engine: CourseBrowserPaywall (flag on 才懒加载) ──────────
// Step 4a P0-1 修 (Codex): paywall 相关依赖 (useUserTier → membership → supabase,
// + UpgradeModal + useRouter) 全部隔离在本文件。CourseBrowser.js 用 next/dynamic
// 懒加载本文件, flag off 时 import() 永不触发 → supabase auth client 不会被初始化进
// /history 首页 → 「flag off 零 runtime」成立。
//
// 本文件只在 ENABLE_HISTORY_PAYWALL=true 时才被加载执行。
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TOPIC_REGISTRY } from '../../lib/history-topics';
import { useUserTier } from '../../lib/membership';
import { getTopicAccessTier, getAccessibleTopicCounts } from '../../lib/history-tiers';
import { UpgradeModal } from './UpgradeModal';
import { CourseBrowserBase } from './CourseBrowser';

// flag on 时的 paywall 包装 — 算 tier + 锁课点击弹 UpgradeModal。
export function CourseBrowserPaywall(props) {
  var tierInfo = useUserTier();
  var router = useRouter();
  var [lockedTopicId, setLockedTopicId] = useState(null);

  // tier loading/error → userTier=null → CourseBrowserBase 不锁任何课 (浏览乐观, 真 gate 在进课时 Step 4b)
  var userTier = tierInfo.isActive ? tierInfo.tier
    : (tierInfo.state === 'free' ? 'free'
    : (tierInfo.state === 'guest' ? 'guest' : null));

  var availableIds = (TOPIC_REGISTRY || []).filter(function (r) { return r.available; }).map(function (r) { return r.id; });
  var counts = getAccessibleTopicCounts(availableIds);

  return (
    <React.Fragment>
      <CourseBrowserBase
        {...props}
        userTier={userTier}
        onLockedClick={setLockedTopicId}
      />
      {lockedTopicId && (
        <UpgradeModal
          reason="locked-course"
          requiredTier={getTopicAccessTier(lockedTopicId)}
          counts={counts}
          onClose={function () { setLockedTopicId(null); }}
          onUpgrade={function () { router.push('/plan'); }}
        />
      )}
    </React.Fragment>
  );
}

export default CourseBrowserPaywall;
