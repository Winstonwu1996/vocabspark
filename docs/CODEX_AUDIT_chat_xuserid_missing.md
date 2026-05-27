# Codex 审计：/api/chat 漏发 X-User-Id 头 → 重度登录用户被 100/h IP 限流

## 线上事故（实测）
chompcloud 反馈"今天学习每个词加载很久 / 加载不出来"。线上日志（Vercel runtime, /api/chat status=429）：
- 5 分钟一个 burst（如 03:32:07-11 出 50+ 个、04:05:42-43 又一波），同一 IP `136.52.8...`（美西，匹配 chompcloud 位置）。
- **全部 `"hasUid":false`**——服务端走的是 IP 限流分支，不是 user 限流分支。
- chompcloud 是登录用户、正常学习，理应走 user-level 200/min；却被打到 IP-level 100/h（[lib/ratelimit.js:112-130](../lib/ratelimit.js)）→ 一个 5 词 batch 约 25 次 /api/chat（5 classify + 5 guess + 5 teach[stream 有缓存] + 5 spectrum + 1 review/cloze），4 个 batch (~20 词) 就烧光，剩下整小时全 429。

## 根因
[lib/api.js:39-47（旧）](../lib/api.js) `getCurrentUserId`：
```js
var k = Object.keys(localStorage).find(x => x.startsWith('sb-') && x.endsWith('-auth-token'));
if (!k) return null;
var t = JSON.parse(localStorage.getItem(k) || '{}');
return t.user?.id || null;
```
但 `@supabase/auth-js` v2（项目用 supabase-js `^2.100`）已经把 user **拆到独立 key**（[node_modules/@supabase/auth-js/dist/main/GoTrueClient.js `_recoverAndRefresh`](../node_modules/@supabase/auth-js)）：
- `sb-<ref>-auth-token` ← **只存** session（access_token / refresh_token / expires_at），**不再含 user**
- `sb-<ref>-auth-token-user` ← user 对象单独存

老逻辑只看主 key → `t.user` 是 undefined → 返回 null → callAPI 不发 `X-User-Id` 头 → /api/chat handler ([pages/api/chat.js:170-197](../pages/api/chat.js)) 走 `checkPerIpLimit(ip)` 分支（100/h）→ 重度用户分分钟烧光。

**影响范围**：所有登录用户（长期潜伏）。轻度用户每小时打不满 100 次没事；chompcloud 学得猛 + 多设备 + 前一天 _invalidOptions 重试放大，把 100/h 一直击穿，所以才显化为"每词加载不出来"。

服务端 sync/load 没受影响——它们用 `supabase.auth.getSession()`（[pages/vocab.js getAuthHeaders](../pages/vocab.js)），权威拿到 user。问题只在 `lib/api.js` 这条独立的"轻量 header 注入"路径。

## 修复（分支 `fix-chat-xuserid-missing`，1 个 commit `2c682c6`）

### (1) 新增 [lib/getAuthUserId.js](../lib/getAuthUserId.js)：纯函数 `pickSupabaseUserId(entries)`
- 入参：`Object.entries(localStorage)` 这类 `[ [key, value], ... ]`。
- 优先扫 `-auth-token-user` 后缀（v2 现行）→ `JSON.parse(v).user.id`。
- 兜底扫 `-auth-token` 主 key（v1 / 嵌入式）→ `JSON.parse(v).user.id`。
- 任何 JSON 解析失败、字段缺失、id 非字符串/空串 → 安全跳过；都没找到 → null。
- 纯函数，无 window / supabase 依赖，可单测。

### (2) 改 [lib/api.js getCurrentUserId](../lib/api.js)
```js
import { supabase } from './supabase';
import { pickSupabaseUserId } from './getAuthUserId';

var _cachedUserId = null;
if (typeof window !== "undefined") {
  // 初次读取
  try {
    supabase.auth.getSession().then(res => {
      var u = res?.data?.session?.user;
      if (u && typeof u.id === "string") _cachedUserId = u.id;
    }).catch(() => {});
  } catch (e) {}
  // 订阅：登录/登出/refresh 时刷新缓存。回调内只赋变量、不 await supabase 方法
  // （避免 onAuthStateChange 死锁，参考 vocab.js authfix 经验）。
  try {
    supabase.auth.onAuthStateChange((_event, session) => {
      var u = session?.user;
      _cachedUserId = u && typeof u.id === "string" ? u.id : null;
    });
  } catch (e) {}
}

var getCurrentUserId = function() {
  if (_cachedUserId) return _cachedUserId;
  if (typeof window === "undefined") return null;
  try { return pickSupabaseUserId(Object.entries(localStorage)); } catch (e) { return null; }
};
```
- 主路径：订阅 supabase.auth → 同步可读，跟随 supabase-js 版本升级。
- Fallback：缓存未就绪时（mount 极早期）扫 localStorage，新/旧两种 key 布局都覆盖。
- `rateLimitHeaders()` 保持同步签名不变；所有调用点（callAPI / callAPIFast / callAPIStream / callClassify 等）不需要改。

## 请重点验证
1. **死锁风险**：onAuthStateChange 回调内只 `_cachedUserId = ...`，**不 await 任何 supabase 方法**。确认这一点（参考之前 vocab.js authfix：在回调里 await getSession 会卡死 auth 内部锁）。
2. **SSR 安全**：`typeof window !== "undefined"` 守卫订阅；`getCurrentUserId` SSR 路径返回 null。确认。
3. **回调清理**：onAuthStateChange 返回的 `unsubscribe` 在这里**没有 cleanup**（lib/api.js 是模块单例，没有 unmount 概念）。是否需要？我的判断：单例订阅生命周期 = 页面生命周期，浏览器关页面自动释放，不需 cleanup；强行 cleanup 反而可能在路由切换时把 listener 拆掉。请复核此取舍。
4. **fallback 优先级**：`pickSupabaseUserId` 先看 `-user` 后缀再看主 key。如果用户的 localStorage 同时有新+老两份（极少），优先采用新版（更准确）。确认。
5. **不影响 BYO**：BYO 用户在 [chat.js:172](../pages/api/chat.js) 直接 `isBYO` 跳过 rate limit，整条路径绕过 X-User-Id，本次改动对 BYO 零影响。确认。
6. **没碰服务端**：服务端 [pages/api/chat.js](../pages/api/chat.js) / [pages/api/chat-stream.js](../pages/api/chat-stream.js) / [lib/ratelimit.js](../lib/ratelimit.js) 都不动；只修客户端 header 注入。
7. **预期效果**：部署后 chompcloud（和其他登录重度用户）的 /api/chat 头会带上 X-User-Id → 走 user-level 200/min，正常学习不会再触发 429。

## 测试
- `node scripts/test-get-auth-userid.mjs`：**14/14**
  - 新格式 v2（user 在 -user key）→ ✓
  - **线上 case 回归**：主 key 不含 user（v2 现行）→ 仍能从 -user key 拿到 id ✓
  - 老格式（嵌入式 user）→ ✓
  - 新+老同时存在 → 优先新版 ✓
  - 无关 sb- key 不被误读、entry 非法、value 非 JSON、user.id 非 string/空、缺字段 → 全部安全跳过 ✓
- `node scripts/test-progress-merge-policy.mjs`：97/97（回归）
- `node scripts/test-sync-api.mjs`：14/14（回归）
- `node scripts/test-learn-status.mjs`：28/28（回归）
- `node scripts/test-guess-sanitize.mjs`：21/21（回归）
- `node scripts/verify-sync-realdata.mjs`：11/11（回归）
- `npm run build`：通过
- 注：supabase.auth 订阅是浏览器运行时，纯函数已覆盖；订阅缓存路径靠代码审查 + 部署后看 /api/chat 日志 `hasUid:true` 出现。

## 范围
分支 `fix-chat-xuserid-missing`（基于最新 origin/main），相对 origin/main 仅 3 文件 + 本文档：
- `lib/getAuthUserId.js`（新）
- `lib/api.js`（改 import + getCurrentUserId）
- `scripts/test-get-auth-userid.mjs`（新）
- `docs/CODEX_AUDIT_chat_xuserid_missing.md`（本文档）

不动服务端、不动存储层、不动 sync 合并逻辑。

## 请给结论
3 处修复的 go/no-go（重点 #1 死锁风险、#3 回调清理取舍、#7 预期效果链路）+ 整体部署 go/no-go。
