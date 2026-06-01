/* ─── Know U. Learning — History 会员 paywall feature flag ───
 *
 * Step 4a: 默认 OFF. flag off 时 history 模块行为跟 paywall 上线前逐字一致
 * (CourseBrowser 走原 CourseBrowserBase, 不调 useUserTier, 0 新网络调用)。
 *
 * 2026-05-31 正式上线: 全部 step 完成 + flag-on 预览 canary 验证整条付费漏斗 OK (创始人拍板)。
 * 默认改为 ON。保留 kill switch: 在 Vercel 设 NEXT_PUBLIC_ENABLE_HISTORY_PAYWALL=false 即可关掉
 * (NEXT_PUBLIC_ 构建期注入, 改后需重新部署生效); 或直接 revert 本次提交。
 *
 * 上线前节奏 (创始人定): lib 基础设施先发 → UI gate 分批接 + flag 守门 → 每批 flag off 验证 →
 * 全部完成 + canary 验证 → 默认翻 on (本次)。
 */
export var ENABLE_HISTORY_PAYWALL =
  !(typeof process !== 'undefined' &&
    process.env &&
    process.env.NEXT_PUBLIC_ENABLE_HISTORY_PAYWALL === 'false');
