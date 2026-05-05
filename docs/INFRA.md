# Know U. Learning — Infrastructure Reference

vocabspark（vocab 模块）+ history 模块的所有基础设施 / 集成 / 复用模式。新项目（`stock.knowulearning.com` 等）直接基于此文件搭建，避免重复踩坑。

最后更新：2026-05-05
当前部署 branch：`feat/sync-reliability-v5`（注意：不是 `main`）

---

## 1. 代码与部署

| 类别 | 信息 |
|------|------|
| GitHub | `git@github.com:Winstonwu1996/vocabspark.git` |
| Vercel 项目 | `winstonwu1996s-projects/vocabspark`（project_id `prj_BdrsZGe1R2zS46L1T8flGUKFRbP`）|
| 生产域名 | `www.knowulearning.com`（Vercel 托管 SSL）|
| 框架 | Next.js 14.2 **Pages Router**（不是 App Router）|
| Runtime | Node + Edge 混合，按 API 路由各自 `export const config` 决定 |
| CI/CD | Vercel auto-deploy on push（无 GitHub Actions）|
| Cron | `vercel.json` 定义；密钥保护用 `CRON_SECRET` |

**为什么是 Pages Router 不是 App Router**：Sentry @sentry/nextjs v8 与 App Router + SSG 有兼容性问题；Pages Router 更稳。新项目如果不需要 streaming SSR 也可以选 Pages Router。

---

## 2. 数据库 / 认证 — Supabase

| 项 | 值 |
|----|-----|
| Project ID | `pzadkflzktvppwkezwxu` |
| Region | us-west-2 |
| DB Host | `db.pzadkflzktvppwkezwxu.supabase.co` |
| Postgres | 17.6.1 |
| Public URL | `https://pzadkflzktvppwkezwxu.supabase.co` |
| Dashboard | https://supabase.com/dashboard/project/pzadkflzktvppwkezwxu |
| Plan | Free tier（升 Pro 才有 daily backup / PITR）|

**Supabase Auth + OTP**：通过 Resend SMTP 发邮件验证码登录。client SDK 把 token 存在 `localStorage` 的 `sb-{ref}-auth-token` key 里。

**关键表**：
- `user_progress`：单行 jsonb 状态
- `user_progress_history`：每次 sync 自动快照（L2 防御）
- `chat_threads` / `ideas`：内容
- `user_subscriptions`：订阅状态

新项目可以用同一个 Supabase project（共享 auth），或开新 project 单独管理。共享 auth 的好处是 SSO；开新 project 更解耦。

---

## 3. KV / Cache — Upstash Redis

REST API（不用 SDK，纯 fetch 兼容 Edge Runtime）。

用途：
- **Rate limit**（`lib/ratelimit.js`）：sliding window via sorted sets。登录用户 200/min，游客 IP 100/h
- **Teach cache**（`lib/teachCache.js`）：30 天 TTL，prefix `tc:`

Plan：Free tier 256MB（够前期）。

---

## 4. AI Providers

| Provider | 用途 | 模型 |
|----------|------|------|
| DeepSeek（主）| 主要生成 | `deepseek-chat` |
| Gemini（fallback）| 备用 | `gemini-2.5-flash-lite`（OpenAI 兼容接口）|

**多 key 轮询**：`DEEPSEEK_API_KEY` + `DEEPSEEK_API_KEY_2/3/4...`，自动扫描注册（`pages/api/chat.js` 的 `collectDeepSeekKeys`）。每 key 独立 60 RPM，加 key 即扩容。

**熔断**：per-instance 内存 circuit breaker，连续 5 次失败 → 跳过该 provider 60s。

---

## 5. 错误监控 — Sentry

| 项 | 值 |
|----|-----|
| SDK | `@sentry/nextjs` v8（**v10 不兼容 Pages Router + SSG**）|
| 配置文件 | `sentry.client.config.js` / `sentry.server.config.js` / `sentry.edge.config.js` |
| DSN env | `NEXT_PUBLIC_SENTRY_DSN` |
| 采样率 | trace 10%，error 100% |
| Graceful degrade | DSN 没配 → 不初始化，应用照常跑 |

---

## 6. 邮件 — Resend

| 项 | 值 |
|----|-----|
| SDK | `resend` v6 |
| From 默认 | `Know U. Learning <noreply@knowulearning.com>` |
| 域名验证 | `knowulearning.com` SPF/DKIM 已配 |
| 用途 | OTP 登录邮件 + 家长周报 |

**重要**：不要直接复用 vocabspark 的 Resend API key 给新项目。在 Resend Dashboard 创建第二个 API key（每个项目独立 key）方便审计 + 出问题独立吊销。

---

## 7. 支付 — Stripe

| 项 | 值 |
|----|-----|
| 当前模式 | Test mode（pk_test_*, sk_test_*）|
| Webhook | 已配，密钥 `STRIPE_WEBHOOK_SECRET` |
| SDK | `stripe` v21 server + `@stripe/stripe-js` v9 client |

---

## 8. 完整环境变量清单

存储在 **Vercel project env**（Production / Preview / Development 三档）+ 本地 `.env.local`。

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL          公开（plain）
NEXT_PUBLIC_SUPABASE_ANON_KEY     公开（plain）
SUPABASE_SERVICE_ROLE_KEY         Encrypted

# AI Providers
DEEPSEEK_API_KEY                  Encrypted
DEEPSEEK_API_KEY_2                Encrypted（多 key 轮询，可继续加 _3/_4）
GOOGLE_AI_API_KEY                 Encrypted

# Upstash Redis
UPSTASH_REDIS_REST_URL            Encrypted
UPSTASH_REDIS_REST_TOKEN          Encrypted

# Sentry
NEXT_PUBLIC_SENTRY_DSN            Encrypted（虽然 NEXT_PUBLIC_ 也加密存储）

# Resend
RESEND_API_KEY                    Encrypted
RESEND_FROM                       Encrypted

# Stripe
STRIPE_SECRET_KEY                 Encrypted
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY Encrypted
STRIPE_WEBHOOK_SECRET             Encrypted

# 内部
CRON_SECRET                       Encrypted（保护 /api/cron/* 端点）
PARENT_EMAIL_TEST_TOKEN           Encrypted
NEXT_PUBLIC_ENABLE_STREAMING      Encrypted（feature flag）
```

**本地拉取**：
```bash
vercel env pull .env.local                                      # development
vercel env pull .env.production.local --environment=production  # production
```

警告：从 Vercel 拉下来的 .env 偶尔包含 literal `\n` bytes（特定 token 字段），如果 shell `source` 报 parse error，用 `grep + cut + tr -d '\n'` 手动提取。

---

## 9. 域名 / DNS

主域名 `knowulearning.com`：
- **注册商 + DNS Provider**：Namecheap（https://www.namecheap.com/）
- 管理面板：登录 Namecheap → Account → Domain List → 找 `knowulearning.com` → 点 **Manage**
- DNS 编辑：在 Manage 页内点 **Advanced DNS** tab

当前 DNS 记录：
- `www.knowulearning.com` → Vercel `vocabspark` 项目（CNAME 到 `cname.vercel-dns.com`）
- `noreply@knowulearning.com` 收发 → Resend SMTP（DKIM/SPF TXT 已配 + 验证）
- `hello@knowulearning.com` → 收信地址

### 给新项目配 stock.knowulearning.com 的步骤（Namecheap 操作）

**Step 1：Namecheap 加 CNAME 记录**

1. 登录 Namecheap → Domain List → `knowulearning.com` → **Manage**
2. **Advanced DNS** tab → 滚到 "HOST RECORDS" 区
3. 点 **ADD NEW RECORD**
4. 填：
   ```
   Type:        CNAME Record
   Host:        stock
   Value:       cname.vercel-dns.com.       ← 末尾的点很关键，Namecheap 自动补
   TTL:         Automatic
   ```
5. 点绿色对勾 ✓ 保存
6. 等 ~5-30 分钟 DNS 全球传播（Namecheap 一般 5 分钟内）

**Step 2：Vercel 新项目 Add Domain**

1. Vercel Dashboard → 新项目 → Settings → Domains → **Add Domain**
2. 输入 `stock.knowulearning.com`
3. Vercel 自动验证 DNS + 签 SSL（Let's Encrypt）
4. 等到看到 ✅ Valid Configuration

**Namecheap 不需要关 proxy**（不像 Cloudflare）—— Namecheap 没有 proxy 功能，CNAME 直接生效。

### 验证 DNS 是否传播

```bash
dig stock.knowulearning.com CNAME +short
# 应返回：cname.vercel-dns.com.
```

或用 https://dnschecker.org 输入 `stock.knowulearning.com` 选 CNAME 看全球节点。

### 如果 CNAME 不工作（罕见），改用 A 记录

```
Type:   A Record
Host:   stock
Value:  76.76.21.21
TTL:    Automatic
```

---

## 10. 复用工程模式（新项目可直接抄）

vocabspark 已经踩过的坑沉淀成的模式：

### 10.1 同步可靠性：3 层防御架构

任何"客户端 push state 到云端"的产品都该照搬。详情参考 commit `77adaae` + `dbe7ae7`。

- **L1 服务端字段级硬守卫**（`pages/api/sync.js`）：incoming 比 cloud 缩水的字段直接拒绝、保留云端值。零容忍。
- **L2 服务端历史快照**（表 `user_progress_history`）：每次 sync INSERT 一份。最近 20 + 每日 30 天保留。任意时刻可一键 SQL 回滚。
- **L3 客户端 intent 标记**：用户主动操作（删词 / 上传 / 重置）时设 `_intentRef`，sync 携带 intent 给服务端解锁缩水保护。

### 10.2 Rate limit（lib/ratelimit.js）

Upstash REST + sliding window via sorted sets。50 行搞定。

```js
ZREMRANGEBYSCORE  -- 清窗口外
ZADD              -- 加新条目
ZCARD             -- 数当前窗口
PEXPIRE           -- 续 TTL
```

Pipeline 一次 round-trip。500ms 超时 fail-open（不阻塞主请求）。

### 10.3 Edge Runtime SSE 流式（pages/api/chat-stream.js）

Pages Router 用 `export const config = { runtime: "edge", maxDuration: 180 }` + `ReadableStream` 实现 SSE。Vercel Pages Router Node Runtime 会 buffer，必须 Edge。

### 10.4 软认证（lib/api.js）

客户端从 supabase localStorage 读 user.id 给服务端做 user-level 限流（Header `X-User-Id`），**不严验证 token**。安全模型：攻击者伪造别人 user.id 只会用掉别人 quota，不会突破上限。代价是不能用于真授权（重要操作仍需服务端 verify token）。

```js
var k = Object.keys(localStorage).find(x =>
  x.startsWith('sb-') && x.endsWith('-auth-token')
);
var uid = JSON.parse(localStorage.getItem(k)).user?.id;
```

### 10.5 多 key 轮询 + 熔断（pages/api/chat.js）

`DEEPSEEK_API_KEY` + 自动扫描 `DEEPSEEK_API_KEY_2..20`。timestamp 轮询起点（避免 race condition）。per-instance 熔断 5 次失败 60s 跳过。

### 10.6 localStorage partial merge（pages/vocab.js loadSave / doSave）

```js
var doSave = async (d) => {
  var existing = JSON.parse(localStorage.getItem(SKEY) || '{}');
  var merged = { ...existing, ...d, updatedAt: new Date().toISOString() };
  localStorage.setItem(SKEY, JSON.stringify(merged));
};
```

只 merge 不替换。`doSave({ pet: x })` 不会冲掉 `wordStatusMap`。

### 10.7 5 分钟时钟漂移容忍 + 字段级 merge（handleAuthUser）

登录时如果 local.updatedAt 比 cloud 新 5 分钟以上，用 `mergeStates(local, cloud)` 字段级合并而不是粗暴覆盖。避免移动设备时钟漂移误判 newer-wins。

---

## 11. 监控 / 调试入口

| 工具 | URL |
|------|-----|
| Vercel Dashboard | https://vercel.com/winstonwu1996s-projects/vocabspark |
| Vercel Logs | `vercel logs https://www.knowulearning.com`（不存 POST body）|
| Supabase Dashboard | https://supabase.com/dashboard/project/pzadkflzktvppwkezwxu |
| Sentry Issues | https://sentry.io（项目名 vocabspark，需登录查看）|
| Stripe Dashboard | https://dashboard.stripe.com（Test mode）|
| Resend Dashboard | https://resend.com/emails |
| Upstash Console | https://console.upstash.com |

---

## 12. 已知踩坑（避免重复）

1. **Sentry v10 + Pages Router + SSG 不兼容** → 锁 v8
2. **Vercel Pages Router Node Runtime buffer SSE** → 必须 Edge Runtime
3. **`AbortSignal.timeout(25000)` 对 SSE 会切断** → 不能用，改 maxDuration + 服务端不强切
4. **Vercel CDN 缓存 `/vocab` 静态页 3 小时** → deploy 后用户 hard refresh 也可能拿不到新版本，需要等 CDN 失效
5. **Vercel env pull 偶尔在 token 字段写入 literal `\n`** → 本地 source .env 报 parse error，要手动清
6. **Supabase Free tier 没 PITR/backup** → 全靠应用层做快照（已实现 L2）
7. **Cloudflare proxied DNS 阻挡 Vercel SSL 验证** → 子域必须 DNS only（**当前域在 Namecheap 不涉及，但若未来迁 CF 注意**）
8. **Namecheap CNAME 末尾要带点** → `cname.vercel-dns.com.` 而非 `cname.vercel-dns.com`（Namecheap UI 会自动补，但手动复制粘贴时容易丢）

---

## 13. 给新 Claude 的 onboarding hints

如果你是新项目的 Claude，先做这几件事：

1. 读这份文件（你已经在读了）
2. 读 `pages/api/sync.js` 看 3 层防御实现
3. 读 `pages/vocab.js` 的 `loadSave` / `doSave` / `_doSync` / `handleAuthUser` 看客户端架构
4. 读 `lib/ratelimit.js` 看 Upstash 用法
5. 不要重新发明轮子——上面 §10 里列的模式都可直接复用
6. 不要把 secret key 提交到 git——`.env.local` 已 gitignore，新加的 key 也别忘记 ignore
