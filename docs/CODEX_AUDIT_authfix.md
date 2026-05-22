# Codex 审计：authfix — Supabase onAuthStateChange 死锁修复（已部署，补审）

## 状态
**已修复 + 已直接部署 + 实测验证通过**（commit `280ae64`，在 `main`）。本次审计是**补审**：确认修复无边界副作用、是否需要补强。不是阻塞性 go/no-go（已上线且实测有效）。

## 背景：这是 version 冻结的真正根因
前三批（合并 policy / recency / intent / 闸门 recover / loadFromCloud 结构化）都是真 bug 修复，但**都没解决 version 冻结**——因为冻结的根因在更底层：**Supabase v2 `onAuthStateChange` 回调死锁**。

### 死锁机制
旧代码：
```js
supabase.auth.onAuthStateChange(async function(event, session) {
  await handleAuthUser(u, event);   // handleAuthUser 内部 await supabase.auth.getSession()
});
```
`handleAuthUser` 内部有两处 `await supabase.auth.getSession()`：
- [pages/vocab.js:3963](../pages/vocab.js)（cache token，在拉云之前）
- [pages/vocab.js:3419](../pages/vocab.js) `getAuthHeaders`（被 `loadFromCloud` 调用）

Supabase v2 的 `onAuthStateChange` 回调**持有 auth 内部锁**；在回调里 await 其他 `supabase.auth` 方法（getSession）会等同一把锁 → **永久死锁、promise 永不 resolve**。`handleAuthUser` 卡在第一个 getSession（3963），永远到不了 `_applyCloudData` → `_cloudReadyRef` 永不解锁 → 之后所有 sync 被 `_doSync` 的 `if (!_cloudReadyRef.current)` 闸门挡在发请求之前 → **永不上云**。死锁静默（promise 挂起不抛错）。

### 时序竞态（为什么不是 100% 复现）
有两条 handleAuthUser 入口：
- `getSession().then(...)`（[pages/vocab.js:4183](../pages/vocab.js)）—— 不在 onAuthStateChange 回调内，**不死锁**
- `onAuthStateChange` 回调（[pages/vocab.js:4192](../pages/vocab.js)）—— 死锁

两者抢 `_authHandled` 锁（3957）。谁先跑谁拉云。onAuthStateChange 先跑 → 死锁 + 锁住另一条 → 永冻结。chompcloud 这台设备踩中，故 5-17 起冻结。

## 修复（commit 280ae64）
```js
supabase.auth.onAuthStateChange(function(event, session) {   // 改普通函数（非 async）
  var u = session?.user || null;
  setTimeout(function() { handleAuthUser(u, event); }, 0);    // 推到回调外执行
});
```
`setTimeout(0)` 把 `handleAuthUser` 移出 onAuthStateChange 回调栈，auth 锁先释放，内部 getSession 不再死锁。这是 Supabase 社区/官方推荐的标准解法。

## 实测验证（最强证据）
| 证据 | 死锁状态 | 修复后 |
|---|---|---|
| bundle | af9269（旧） | 6858713（新） |
| `/api/load` | 无 | 200, 75KB, 3.6s ✅ |
| `/api/sync` | 无 | 多次 200 ✅ |
| console | 只刷 `[sync] blocked` | `[auth] local newer than cloud, merging both` |
| 调用栈 | — | onAuthStateChange → setTimeout → handleAuthUser ✅ |
| **version** | **冻结 1127（5-17）** | **1130（刚刚更新）** ✅ |
| reviewWordData / wsm | — | 573 / 717（不丢不暴涨）✅ |

## 请审计

1. **修复正确性**：`setTimeout(0)` 是否正确、彻底解除死锁（标准做法确认）。

2. **边界副作用（重点）**：
   - **unmount 时机**：`setTimeout` 在组件 unmount 后才 fire → `handleAuthUser` 在 unmounted 组件上 setState。vocab 页几乎不 unmount（主学习页），但严谨上是否该在 effect cleanup 里 clear 这个 timer？（我倾向低风险但想听评估）
   - **`_authHandled` 锁**：现在 getSession().then 路径（即时）与 onAuthStateChange 路径（setTimeout 延迟）的相对时序变了。两条路径抢 `_authHandled` 是否仍能正确防双重拉云？会不会两条都拉云（重复 /api/load）？
   - **handleAuthUser 不再被 await**：回调改非 async，有无地方依赖它的 await 完成顺序。
   - **高频 event**：TOKEN_REFRESHED 等频繁触发 → 大量 setTimeout 排队 + handleAuthUser 重入？`_authHandled` 3 秒锁是否够。

3. **漏网检查**：确认没有其他 `onAuthStateChange` 回调内 await `supabase.auth`。（已查：全文仅此一处 onAuthStateChange 回调，已修；其余 supabase.auth 调用在登录表单/登出/getSession.then，均不在回调内。）

4. **go/no-go**：确认无需回滚；列出建议补强（如 unmount clear timer / 用 `_authHandled` 更稳的锁）。

## 代码位置
- onAuthStateChange + setTimeout 修复：[pages/vocab.js:4192-4201](../pages/vocab.js)
- handleAuthUser：[pages/vocab.js:3953](../pages/vocab.js)，`_authHandled` 锁 3957
- 死锁点 getSession：3419（getAuthHeaders）、3963（cache token）
- getSession().then 入口：4183
