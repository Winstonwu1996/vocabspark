# Release v3.30 — API 稳定性加固 + 前端校验强化

_发布时间: 2026-03-29_
_部署: knowulearning.com (dpl_EDkuzfeqLRdEJqiKULwsZKmjQvky)_
_回滚: `npx vercel rollback` 或指定前一个 deployment ID_

---

## 变更总览

本次发布聚焦 **基础功能稳定性**，修复了 3 个 API 文件 + 前端校验 + 文案一致性问题。

---

## 一、API 稳定性 (chat.js)

### 1. Provider 轮询竞态修复
**问题**: 全局变量 `providerStartCursor` 在多个并发请求间共享，导致竞态条件，两个请求可能选到同一个 provider。
**修复**: 改用 `Math.floor(Date.now() / 1000) % length` 基于时间戳轮询，无状态，无竞态。

### 2. 超时动态计算
**问题**: 固定 30s/provider 超时，3 个 provider fallback 可能总耗时 >60s 超过 Vercel maxDuration。
**修复**: 总预算 55s（留 5s 缓冲），按 provider 数量均分：`min(20s, 55s/N)`。

### 3. Timeout 重试
**问题**: `callWithRetry` 只对 429 重试，AbortError（超时）直接 fallover 到下一个 provider，但同 provider 重试可能成功。
**修复**: `AbortError` 也触发重试（最多 2 次），和 429 同等处理。

### 4. 错误信息脱敏
**问题**: 500 响应暴露 provider 名称和内部错误详情给客户端。
**修复**: 返回通用中文错误 "AI 服务暂时不可用，请稍后重试"，详情只在服务端 console.error。

### 5. Gemini model 可配置
**改进**: 从硬编码 `gemini-2.5-flash-lite` 改为 `process.env.GEMINI_MODEL || "gemini-2.5-flash-lite"`，无需改代码即可切换模型。

---

## 二、TTS 稳定性 (tts.js)

### 1. 超时延长
8s → 15s，减少长句发音超时失败。

### 2. 429 重试
Google Translate TTS 返回 429 时，等 2s 重试一次（之前直接失败）。

### 3. 错误分类
区分超时 (504) / 限流 (503) / 服务错误 (502) / 内部错误 (500)，返回中文错误信息。

### 4. 空响应检测
检查 `arrayBuffer` 是否为空，避免返回 0 字节的空音频。

---

## 三、图片描述稳定性 (describe-photo.js)

### 1. 超时保护
新增 25s AbortSignal 超时，防止 Gemini API hang 导致请求永不返回。

### 2. MIME 类型校验
只允许 JPEG/PNG/GIF/WebP，拒绝其他格式（之前无限制）。

### 3. 图片大小限制
Base64 > 10MB 直接拒绝（之前依赖 bodyParser 15MB 限制，但 Gemini 可能更严格）。

### 4. 错误日志增强
API 错误、空描述、超时分别记录 console.error/warn，便于排查。

---

## 四、前端校验 (pages/index.js)

### 1. Cloze/Review 解析强化
**问题**: `tryJSON(raw)` 返回有 `questions` 字段但内容异常时（空数组、缺 answer/options），UI 崩溃。
**修复**: 校验 `Array.isArray(questions) && length > 0 && every(q => q.answer && q.options)`，校验失败则跳过进入下一词。

### 2. DAILY_LIMIT 未定义 bug
**问题**: 学习页面 banner 引用 `DAILY_LIMIT`（不存在），应为 `DAILY_LIMIT_GUEST`。
**影响**: 游客学习时 banner 文字显示 `undefined`。
**修复**: 替换为正确变量名。

---

## 五、文案一致性

**问题**: 多处写 "每日无限学习" 但注册用户实际是 10 词/天。

| 位置 | 修复前 | 修复后 |
|---|---|---|
| 登录弹窗 | "每日无限学习" | "每日 10 词" |
| 设置页账户 | "推广期·每日无限学习" | "推广期·每日 10 词" |
| 照片上传提示 | "解锁每日无限学习" | "解锁每日 10 词学习 + 云同步" |
| 学习页 banner | "DAILY_LIMIT 词" (undefined) | "5 词已学完·注册后每日 10 词" |

---

## 回滚方式

```bash
# 查看历史部署
npx vercel ls vocabspark --prod

# 回滚到上一个版本
npx vercel rollback

# 或指定 deployment
npx vercel promote dpl_<previous_id>
```

## 文件变更

| 文件 | 改动 |
|---|---|
| `pages/api/chat.js` | 重写 provider 轮询、超时、重试、错误处理 |
| `pages/api/tts.js` | 重写错误处理和重试逻辑 |
| `pages/api/describe-photo.js` | 加超时/MIME校验/大小限制 |
| `pages/index.js` | cloze/review 校验 + DAILY_LIMIT bug + 文案对齐 |
| `lib/supabase.js` | placeholder fallback（linter 自动修复） |
