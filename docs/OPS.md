# Know U. Learning — 运维交接文档

> 本文档面向运维/新接手人员。技术架构细节见 `INFRA.md`。
> 最后更新：2026-05-13

---

## 一、服务清单总览

| 服务 | 用途 | 登录账号 | 控制台入口 | 计费模式 |
|------|------|----------|-----------|----------|
| **Namecheap** | 域名注册商（持有 `knowulearning.com`） | *(确认账号)* | https://www.namecheap.com → Account → Domain List | 年费，到期续费 |
| **Cloudflare** | DNS 管理 + CDN + Zero Trust Tunnel + Access | `chompcloud@gmail.com` | https://dash.cloudflare.com | Free tier（Zero Trust 50用户免费）|
| **Vercel** | vocabspark 前端 + API 托管 | `winstonwu1996@icloud.com`（team `winstonwu1996s-projects`）| https://vercel.com/winstonwu1996s-projects/vocabspark | Free/Pro，按用量 |
| **GitHub** | 源码仓库 | `Winstonwu1996`（用 iCloud 邮箱登录）| https://github.com/Winstonwu1996/vocabspark | Free |
| **Supabase** | PostgreSQL 数据库 + Auth（OTP 登录）| *(确认账号，project ID: `pzadkflzktvppwkezwxu`)* | https://supabase.com/dashboard/project/pzadkflzktvppwkezwxu | Free tier（升 Pro 才有 daily backup）|
| **Upstash** | Redis — 限流 + Teach 内容缓存 | *(确认账号)* | https://console.upstash.com | Free 256MB |
| **DeepSeek** | AI 主 provider（`deepseek-chat`）| *(确认账号，有 KEY_1~KEY_4+)* | https://platform.deepseek.com | 按 token 计费 |
| **Google AI** | AI 备用 fallback（Gemini 2.5 Flash）| *(确认账号)* | https://aistudio.google.com/apikey | 按 token 计费 |
| **Sentry** | 错误监控 | *(确认账号，项目名 vocabspark)* | https://sentry.io | Free tier |
| **Resend** | 事务邮件（OTP + 家长周报）| *(确认账号)* | https://resend.com/emails | Free 3,000封/月 |
| **Stripe** | 支付（Test + Live 双 mode，price IDs 已配）| *(确认账号)* | https://dashboard.stripe.com | 按交易收费（2.9% + $0.30/笔）|
| **Cloudflare Tunnel** | 把 Mac 本地 Streamlit 暴露为 stock/pools 子域 | 同 Cloudflare 账号 | Zero Trust → Networks → Tunnels | 免费 |

---

## 二、域名与 DNS

### 注册商
- **Namecheap**：持有 `knowulearning.com` 注册权
- **重要**：NS 已从 Namecheap 迁移到 Cloudflare，**DNS 不在 Namecheap 管**
- Namecheap 只用于续费域名，不做 DNS 编辑

### DNS 管理（Cloudflare）
- 登录 https://dash.cloudflare.com → 选 `knowulearning.com`
- NS 服务器：`walk.ns.cloudflare.com` / `wilson.ns.cloudflare.com`

**当前 DNS 记录一览：**

| 子域 | 类型 | 指向 | 备注 |
|------|------|------|------|
| `knowulearning.com` (apex) | A | `76.76.21.21` | Vercel anycast，DNS only（灰云）|
| `www` | CNAME | `cname.vercel-dns.com` | Vercel，DNS only |
| `stock` | CNAME | `d8f758a4-*.cfargotunnel.com` | Cloudflare Tunnel → Streamlit :8501 |
| `pools` | CNAME | `d8f758a4-*.cfargotunnel.com` | Cloudflare Tunnel → http.server :8502 |
| SPF/DKIM | TXT | Resend 记录 | 邮件收发验证，**不要删** |

---

## 三、代码与部署

### 日常部署（零操作）
```
git push origin main  →  Vercel 自动触发 build + deploy（约 90s）
```
- CI/CD：Vercel auto-deploy on `main` push
- GitHub Actions（`.github/workflows/atlas-ci.yml`）：Atlas 内容 CI 校验（不部署，纯验证）
- 可在 https://vercel.com/winstonwu1996s-projects/vocabspark 查看部署状态

### 手动触发部署（无代码变更时）
```bash
vercel --prod  # 需本地安装 vercel CLI 并登录
```

### 回滚
1. Vercel Dashboard → Deployments
2. 找到上一个 READY 部署 → 右键 → **Promote to Production**
3. 即时生效，不需要 push 代码

### 本地开发
```bash
vercel env pull .env.local   # 拉取环境变量
npm install
npm run dev                  # http://localhost:3000
```

---

## 四、关键环境变量

存储位置：**Vercel Dashboard → Settings → Environment Variables**（Production/Preview/Development 三档）

```
# 数据库
NEXT_PUBLIC_SUPABASE_URL           = https://pzadkflzktvppwkezwxu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY      ← public，可见
SUPABASE_SERVICE_ROLE_KEY          ← 高权限，加密存储，不得泄漏

# AI
DEEPSEEK_API_KEY                   ← 主 key
DEEPSEEK_API_KEY_2                 ← 备用（加 _3/_4 继续轮询扩容）
GOOGLE_AI_API_KEY                  ← Gemini 2.5 Flash fallback

# 缓存/限流
UPSTASH_REDIS_REST_URL             = https://logical-anteater-107597.upstash.io
UPSTASH_REDIS_REST_TOKEN           ← 加密

# 邮件
RESEND_API_KEY                     ← re_ 开头
RESEND_FROM                        = Know U. Learning <noreply@knowulearning.com>

# 支付
STRIPE_SECRET_KEY                  ← 本地 sk_test_*  生产 sk_live_*
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ← 本地 pk_test_*  生产 pk_live_*
STRIPE_WEBHOOK_SECRET              ← whsec_* 加密，Webhook 必须

# 监控
NEXT_PUBLIC_SENTRY_DSN             ← https://cfa850fa...ingest.us.sentry.io/...

# Feature flags / 内部
NEXT_PUBLIC_ENABLE_STREAMING       = "true"（生产）
CRON_SECRET                        ← 保护 /api/cron/* 定时任务
PARENT_EMAIL_TEST_TOKEN            ← 触发 /api/parent-email/test 的临时 token
```

**Stripe Live Price IDs**（`lib/stripe-prices.js`）：

| 档位 | 周期 | Price ID | 金额 |
|------|------|----------|------|
| basic | monthly | `price_1TGPWlPfpKaWPg8IuipOYjOH` | $20/mo |
| basic | yearly | `price_1TGPWmPfpKaWPg8Ivt2bqIJq` | $192/yr |
| basic | monthly BYO | `price_1TGPWmPfpKaWPg8IOiwttXs3` | $10/mo |
| basic | yearly BYO | `price_1TGPWmPfpKaWPg8IKywe2zww` | $96/yr |
| pro | monthly | `price_1TGPWmPfpKaWPg8IQPHcv2yY` | $50/mo |
| pro | yearly | `price_1TGPWmPfpKaWPg8IbhWAq6B1` | $480/yr |
| pro | monthly BYO | `price_1TGPWmPfpKaWPg8Izc867VdH` | $25/mo |
| pro | yearly BYO | `price_1TGPWnPfpKaWPg8IntINYiKR` | $240/yr |

**修改变量后需 redeploy 才生效**（Vercel → Deployments → Redeploy）

---

## 五、数据库操作

### 进入 Supabase SQL 编辑器
https://supabase.com/dashboard/project/pzadkflzktvppwkezwxu/sql

### 关键表
| 表 | 用途 |
|----|------|
| `user_progress` | 每用户一行，存全量学习进度 JSON |
| `user_progress_history` | 每次 sync 自动快照，最近 20 + 每日 30 天 |
| `user_subscriptions` | 订阅状态 |
| `chat_threads` | 聊天记录 |

### 回滚用户数据（紧急）
```sql
-- 查某用户最近快照
SELECT id, version, snapshotted_at, reason
FROM user_progress_history
WHERE user_id = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
ORDER BY snapshotted_at DESC LIMIT 10;

-- 回滚到指定快照
UPDATE user_progress
SET progress_data = (
  SELECT progress_data FROM user_progress_history WHERE id = '<snapshot_id>'
),
version = version + 1,
updated_at = NOW()
WHERE user_id = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
```

---

## 六、Mac 本地服务（Cloudflare Tunnel 依赖）

`stock.knowulearning.com` 和 `pools.knowulearning.com` 运行在 Mac 本地，通过 Cloudflare Tunnel 对外暴露。**Mac 关机则这两个子域不可访问**。

### 守护进程（LaunchAgents）
| 服务 | plist 路径 | 端口 |
|------|-----------|------|
| Cloudflare Tunnel | `~/Library/LaunchAgents/com.cloudflare.cloudflared.plist` | — |
| Streamlit (stock) | `~/Library/LaunchAgents/com.quantslowbull.streamlit.plist` | :8501 |
| HTTP Server (pools) | `~/Library/LaunchAgents/com.quantslowbull.pools.plist` | :8502 |

### 重启命令
```bash
# 重启 tunnel
launchctl kickstart -k gui/$(id -u)/com.cloudflare.cloudflared

# 重启 Streamlit
launchctl kickstart -k gui/$(id -u)/com.quantslowbull.streamlit

# 重启 pools server
launchctl kickstart -k gui/$(id -u)/com.quantslowbull.pools

# 验证
curl -sI https://stock.knowulearning.com | head -3
curl -sI https://pools.knowulearning.com/live_pools.json | head -3
```

### 查看日志
```bash
tail -f /tmp/cloudflared.log     # tunnel 日志（路径视 plist 配置而定）
```

### Tunnel 配置文件
- `~/.cloudflared/config.yml` — ingress 路由规则
- Tunnel ID：`d8f758a4-0a1c-457d-b90e-190f93e39e62`（name: `stock-quant-slowbull`）

---

## 七、监控入口

| 监控项 | 入口 | 说明 |
|--------|------|------|
| 部署状态 | https://vercel.com/winstonwu1996s-projects/vocabspark | 看最新部署是否 READY |
| 运行时日志 | Vercel Dashboard → Logs tab | API 调用日志，5 分钟延迟 |
| 错误告警 | https://sentry.io | 前端 + API 错误，需登录 |
| DB 健康 | https://supabase.com/dashboard/project/pzadkflzktvppwkezwxu | 查询/连接数 |
| Redis 使用量 | https://console.upstash.com | 命中率 + 内存 |
| AI 用量 | https://platform.deepseek.com / https://aistudio.google.com | token 消耗 + 余额 |
| 邮件送达 | https://resend.com/emails | OTP 发送成功率 |
| Cloudflare 流量 | https://dash.cloudflare.com → Analytics | 子域请求量 |

---

## 八、常见问题处理

### 站点打不开
1. 检查 Vercel 最新部署状态（是否 READY）
2. `dig knowulearning.com A +short` → 应返回 `76.76.21.21`
3. `curl -sI https://knowulearning.com` → 应返回 `200`
4. 若域名解析异常 → 登录 Cloudflare 检查 DNS 记录

### AI 生成变慢/失败
1. 检查 DeepSeek 账号余额
2. 检查 Vercel 运行时日志有无 429 / 5xx
3. 短期备用：`GOOGLE_AI_API_KEY` 仍配置，Gemini 会自动顶上（circuit breaker 机制）

### 用户数据丢失报告
1. 用上面的 SQL 查 `user_progress_history` 找最近快照
2. 核对版本号和时间戳
3. 确认后执行回滚 SQL

### stock.knowulearning.com 无法访问
1. 检查 Mac 是否在线
2. `launchctl kickstart -k gui/$(id -u)/com.cloudflare.cloudflared`
3. `launchctl kickstart -k gui/$(id -u)/com.quantslowbull.streamlit`
4. 验证：`curl -sI https://stock.knowulearning.com`

### 限流触发 429（用户反馈太多）
- 登录 → 200 req/min（一般不会触发）
- 游客 IP → 100 req/h（家庭 NAT 5-10 人同用时可能触发）
- 调整位置：`lib/ratelimit.js` → `checkPerIpLimit` 和 `checkPerUserLimit`

---

## 九、计费/续费清单

> 建议在日历加提醒

| 服务 | 到期/计费周期 | 备注 |
|------|------------|------|
| Namecheap 域名 | 年费（确认到期日）| 到期前 30 天 Namecheap 会发邮件提醒 |
| DeepSeek API | 按用量，余额不足时停服 | 定期检查余额，余额 < $10 充值 |
| Vercel | 当前 Free/Pro | 超出 Free 配额（100GB bandwidth/月）自动升级 |
| Supabase | Free（500MB DB）| 超出自动暂停项目，需升 Pro $25/月 |
| Upstash Redis | Free（256MB）| 超出按量计费 |
| Stripe | **Live mode 已配**，按交易 2.9%+$0.30 | Stripe Dashboard → Billing |

---

## 十、账号待确认清单

以下账号登录信息需要补充（方括号内为待填写项）：

- [ ] **Namecheap**：登录邮箱 `___`，密码保存在 `___`
- [ ] **Supabase**：登录邮箱 `___`
- [ ] **Upstash**：登录邮箱 `___`
- [ ] **Sentry**：登录邮箱 `___`，项目名 `vocabspark`
- [ ] **Resend**：登录邮箱 `___`
- [ ] **Stripe**：登录邮箱 `___`
- [ ] **DeepSeek**：登录邮箱 `___`，当前 key 数量 `___`
- [ ] **Google AI Studio**：登录邮箱 `___`

已确认：
- **GitHub**：`Winstonwu1996`（`winstonwu1996@icloud.com`）
- **Vercel**：`winstonwu1996@icloud.com`，团队 `winstonwu1996s-projects`
- **Cloudflare**：`chompcloud@gmail.com`

---

*技术架构详情见 `docs/INFRA.md`。*
