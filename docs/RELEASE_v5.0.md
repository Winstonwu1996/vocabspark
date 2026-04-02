# Release v5.0 — 云端同步架构重构

_发布时间: 2026-04-02_
_回滚: `npx vercel rollback`_

---

## 为什么重构

v4.x 的同步机制存在严重的数据丢失风险：
- 客户端合并逻辑（`deepMergeProgress`，80 行）太复杂，边界条件多
- 空数据可以覆盖非空数据（导致用户 chompcloud 的 13,234 词丢失）
- 没有版本号，并发写互相覆盖
- `saveSession` 不推云端，学习进度只在 localStorage
- 没有同步状态指示，用户不知道数据是否安全

## 新架构设计

### 核心原则：服务端权威

```
之前: 本地 + 云端 → 客户端合并 → 推云端（70% 的 bug 出在这里）
现在: 登录时拉云端 → 覆盖本地。学习时写本地 → 推云端。冲突时服务端赢。
```

### 变更详情

#### 1. Supabase 表结构
```sql
ALTER TABLE user_progress ADD COLUMN version INTEGER NOT NULL DEFAULT 0;
```
每次成功写入 `version + 1`，客户端带 `clientVersion` 推送。

#### 2. sync API（`/api/sync`）
```
POST { userId, data, clientVersion }
→ 200 { ok, version }          // 写入成功
→ 409 { serverData, version }   // 版本冲突，返回最新数据
```

#### 3. load API（`/api/load`）
```
GET ?userId=xxx
→ 200 { data, version }
```

#### 4. 客户端同步层
- **删除** `deepMergeProgress`（65 行复杂合并逻辑）
- **新增** `_applyCloudData()`：将云端数据直接应用到 React state
- **新增** 版本冲突处理：409 时自动拉取最新数据
- **新增** 指数退避重试：失败后 2s → 4s → 8s，最多 3 次
- **新增** 同步状态追踪：`idle → syncing → synced / error`

#### 5. 统一存储（schema v2）
- `wordStatusMap` 和 `reviewWordData` 不再存独立 localStorage key
- 全部统一到 `vocabspark_v1` 中
- `loadSave()` 自动一次性迁移旧格式
- 删除了 8 处 `localStorage.setItem(WORD_STATUS_KEY)` 直接调用

#### 6. 同步状态指示器
导航栏用户头像旁：
- ⟳ 同步中
- ✓ 已同步（绿色，3s 后淡出）
- ⚠ 同步失败（红色，提醒用户）

#### 7. Auth 事件去重
`_authHandled` ref 防止 `getSession` + `onAuthStateChange` 双重触发 `handleAuthUser`。

---

## 场景覆盖验证

| 场景 | v4.x | v5.0 |
|---|---|---|
| 学完直接关机 | ⚠ debounce 可能没触发 | ✅ visibilitychange + keepalive |
| 新设备登录 | ❌ 空本地可能覆盖云端 | ✅ 直接拉云端覆盖本地 |
| 两台设备交替使用 | ❌ 客户端合并可能丢数据 | ✅ 版本号冲突检测 + 服务端赢 |
| 设备共享（不同用户） | ❌ 前用户数据混入 | ✅ 登出清理 localStorage |
| 同步失败 | ❌ 静默吞错 | ✅ 指数退避重试 + 状态指示 |
| 并发 sync 调用 | ❌ 后调用覆盖前调用 | ✅ 串行队列 |

---

## 删除的代码

| 函数 | 行数 | 原因 |
|---|---|---|
| `deepMergeProgress` | 65 行 | 客户端合并是数据丢失根因 |
| `doSave` 空值保护逻辑 | 15 行 | 不再需要（不会有空数据覆盖场景） |
| `WORD_STATUS_KEY` 直接写入 | 8 处 | 统一到 doSave |
| `REVIEW_WORD_DATA_KEY` 直接写入 | 3 处 | 统一到 doSave |

净变化：`+170 -147`（净增 23 行，但功能完整度大幅提升）

---

## 回滚方式

```bash
npx vercel rollback
```

Supabase `version` 列是 `DEFAULT 0`，旧版本代码不传 `clientVersion`，sync API 会按 `null` 处理（兼容 LWW 模式），不会报错。

## 数据兼容性

- `progress_data` JSONB 结构完全不变
- localStorage key `vocabspark_v1` 不变
- `schemaVersion: 1` 自动迁移到 `2`（合并独立 key）
- 现有用户数据无需任何手动操作
