/* ─── Know U. Learning — 从 localStorage 解析 Supabase v2 当前 userId（纯函数，便于测试）
 *
 * 背景：lib/api.js 里 callAPI 给 /api/chat 加 X-User-Id 头时，旧代码直读
 *   sb-<ref>-auth-token → t.user?.id
 * 但 @supabase/auth-js v2 已把 user 拆到独立 key（GoTrueClient._recoverAndRefresh）：
 *   sb-<ref>-auth-token          ← session（access_token / refresh_token / expires_at）
 *   sb-<ref>-auth-token-user     ← user 对象单独存
 * 旧代码读不到 user → 返回 null → /api/chat 没 X-User-Id → 被当游客走 100/h IP 限流
 * → 重度用户 5 分钟烧光、每词加载不出来（chompcloud 线上实测 429 风暴）。
 *
 * 该模块抽出纯函数 pickSupabaseUserId，覆盖新/旧两种布局，且可单测。
 * lib/api.js 在 supabase.auth 订阅缓存未就绪时用它做 fallback；订阅就绪后直接走 cache。
 * ──────────────────────────────────────────────────────────────────────── */

/**
 * 从 localStorage entries（[ [key, value], ... ]）里解析当前登录用户的 id。
 * 优先新格式（user 独立 key），其次老格式（user 内嵌在主 key）。
 * 任何一步解析失败安全跳过；都没找到 → null。
 * @param {Array<[string, string]>} entries  Object.entries(localStorage) 的输出
 * @returns {string|null}
 */
export var pickSupabaseUserId = function (entries) {
  if (!Array.isArray(entries)) return null;

  // 1) 新格式（@supabase/auth-js v2 现行）：user 拆到独立 `-auth-token-user` key
  for (var i = 0; i < entries.length; i++) {
    var pair = entries[i];
    if (!Array.isArray(pair) || pair.length < 2) continue;
    var k = pair[0], v = pair[1];
    if (typeof k !== "string" || !k.startsWith("sb-") || !k.endsWith("-auth-token-user")) continue;
    try {
      var u = JSON.parse(v || "{}");
      if (u && u.user && typeof u.user.id === "string" && u.user.id) return u.user.id;
    } catch (e) { /* fall through to next */ }
  }

  // 2) 老格式 / 嵌入式：user 内嵌在 `-auth-token` 主 key 里
  for (var j = 0; j < entries.length; j++) {
    var pair2 = entries[j];
    if (!Array.isArray(pair2) || pair2.length < 2) continue;
    var k2 = pair2[0], v2 = pair2[1];
    if (typeof k2 !== "string" || !k2.startsWith("sb-")) continue;
    if (!k2.endsWith("-auth-token") || k2.endsWith("-auth-token-user")) continue;
    try {
      var t = JSON.parse(v2 || "{}");
      if (t && t.user && typeof t.user.id === "string" && t.user.id) return t.user.id;
    } catch (e) { /* fall through */ }
  }

  return null;
};
