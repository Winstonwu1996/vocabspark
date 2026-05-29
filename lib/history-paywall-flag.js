/* ─── Know U. Learning — History 会员 paywall feature flag ───
 *
 * Step 4a: 默认 OFF. flag off 时 history 模块行为跟 paywall 上线前逐字一致
 * (CourseBrowser 走原 CourseBrowserBase, 不调 useUserTier, 0 新网络调用)。
 *
 * 翻开方式: Vercel env 设 NEXT_PUBLIC_ENABLE_HISTORY_PAYWALL=true (无需改代码)。
 * NEXT_PUBLIC_ 前缀 = 客户端可读 (Pages Router 标准)。
 *
 * 上线节奏 (创始人定): lib 层基础设施先发 (已完成), UI gate 分批接 + flag 守门,
 * 每批先 flag off 验证生产无变化, 再按计划逐步翻 on。
 */
export var ENABLE_HISTORY_PAYWALL =
  typeof process !== 'undefined' &&
  process.env &&
  process.env.NEXT_PUBLIC_ENABLE_HISTORY_PAYWALL === 'true';
