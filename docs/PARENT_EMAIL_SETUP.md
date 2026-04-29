# Parent Email 系统环境变量设置指南

**目标**：把 Phase B 的家长邮件系统从代码就绪 → 真能发邮件 → 周一早 8 自动跑。

**总用时**：~30 分钟
**总成本**：$0（Resend 免费 3000 封/月，Vercel Cron 已包含）

---

## Step 1：注册 Resend 账号（5 分钟）

### 1.1 注册

1. 打开 https://resend.com/signup
2. 用 **chompcloud@gmail.com**（或任何工作邮箱）注册
3. 验证邮箱

### 1.2 拿 API Key

1. 登入后进 https://resend.com/api-keys
2. 点 **"Create API Key"**
3. Name: `Know U. Production`
4. Permission: **Sending access**
5. Domain: 留 **All domains**（之后会限定到验证过的域名）
6. 点 **"Add"** —— **复制 key**（格式 `re_xxxxxxx`，**只显示一次**）

📋 **保存这个 key**，下面要用。

### 1.3 决定 From 地址

**两个选择**：

**选项 A（最快，推荐先用这个测试）**：
- 用 Resend 内置 `onboarding@resend.dev` —— **不用验证域名**
- 缺点：收件人会看到邮件来自 `onboarding@resend.dev`（不太正式）
- 适合：第一周测试 + 自己邮箱测试

**选项 B（生产推荐）**：
- 验证你自己的域名（如 `knowulearning.com`）
- Resend → Domains → Add Domain → 跟着加 DNS 记录（DKIM / SPF / DMARC）
- 验证后可用 `noreply@knowulearning.com` 发件

**这一轮先用选项 A**——验证整个流程跑通后再切选项 B。

---

## Step 2：本地测试（5 分钟）

先在你电脑上跑一封测试邮件——确认 Resend 集成没问题。

### 2.1 在 `.env.local` 加变量

在项目根目录（`/Users/williamai/projects/vocabspark/`）的 `.env.local` 文件**末尾**加：

```bash
# Parent Email System (Phase B)
RESEND_API_KEY=re_你的_resend_key_粘贴这里
RESEND_FROM=Know U. Learning <onboarding@resend.dev>
PARENT_EMAIL_TEST_TOKEN=5a883de16b6c89e64e2983eff5d33450810664de3e55db6d925d6e6751622482
CRON_SECRET=8ba355afd07baf564807edb7cbc213149450401c55ad9dab40e37fe7accf048e
```

⚠️ **注意**：上面 `PARENT_EMAIL_TEST_TOKEN` 和 `CRON_SECRET` 是我已经随机生成好的强 secret——你可以**直接复制粘贴**，**不要用其他短的**（rng 短的会被暴力破解）。

### 2.2 重启 dev server

```bash
# 停掉现在的 dev server（Ctrl+C），重新跑：
npm run dev:fresh
# 或：
npm run dev
```

（环境变量改了 Next.js 必须重启才能读到。）

### 2.3 跑第一封测试邮件

把下面命令的 `your@email.com` 改成**你自己的邮箱**（chompcloud@gmail.com 或别的），跑：

```bash
curl -X POST http://localhost:3000/api/parent-email/test \
  -H "Content-Type: application/json" \
  -H "X-Test-Token: 5a883de16b6c89e64e2983eff5d33450810664de3e55db6d925d6e6751622482" \
  -d '{"to":"your@email.com","type":"ping"}'
```

预期返回：
```json
{"success":true,"resendId":"xxx-xxx-xxx"}
```

✅ **检查你的收件箱**——应该收到一封 **"📧 邮件基础设施测试通过"**邮件，10 秒内到。

### 2.4 测 summary + wakeup 模板

继续测两种正式模板（同样改 `your@email.com`）：

```bash
# Summary 模板（有学习记录时发的）
curl -X POST http://localhost:3000/api/parent-email/test \
  -H "Content-Type: application/json" \
  -H "X-Test-Token: 5a883de16b6c89e64e2983eff5d33450810664de3e55db6d925d6e6751622482" \
  -d '{"to":"your@email.com","type":"summary"}'

# Wakeup 模板（无学习记录时发的）
curl -X POST http://localhost:3000/api/parent-email/test \
  -H "Content-Type: application/json" \
  -H "X-Test-Token: 5a883de16b6c89e64e2983eff5d33450810664de3e55db6d925d6e6751622482" \
  -d '{"to":"your@email.com","type":"wakeup"}'
```

✅ **看你邮箱**——应该收到 3 封邮件：ping / summary / wakeup 各一封。

**Summary 邮件你打开后**，特别看：
- 📌 "给爸妈的晚饭桌问题"段——这是中国家长杠杆的核心
- 🎯 "认知亮点"段
- 🚨 "需要你关注"段

如果你看到这 3 段，**Resend + 模板渲染 + 发送链路全通**。

---

## Step 3：Vercel 生产环境部署（10 分钟）

### 3.1 在 Vercel 设置环境变量

1. 进 https://vercel.com/dashboard
2. 找到 vocabspark 项目 → **Settings** → **Environment Variables**
3. 加 4 个变量（每个都选 **All Environments**：Production / Preview / Development）：

| Key | Value |
|---|---|
| `RESEND_API_KEY` | 你的 `re_xxx` key |
| `RESEND_FROM` | `Know U. Learning <onboarding@resend.dev>` |
| `PARENT_EMAIL_TEST_TOKEN` | `5a883de16b6c89e64e2983eff5d33450810664de3e55db6d925d6e6751622482` |
| `CRON_SECRET` | `8ba355afd07baf564807edb7cbc213149450401c55ad9dab40e37fe7accf048e` |

⚠️ **Supabase Service Role Key 应该已经有**——确认一下 `SUPABASE_SERVICE_ROLE_KEY` 在 Vercel 已设置。如果没有：
- Supabase Dashboard → Project Settings → API → 找 **service_role** secret（不是 anon key）
- 复制到 Vercel 同名变量

### 3.2 触发 redeploy

加完变量后 **Vercel 必须重新部署**才能读到新变量：

```bash
# 选 1：直接 git push（已经 push 过的话，touch 一个文件再 push）
git commit --allow-empty -m "chore: trigger redeploy for parent email env"
git push

# 选 2：在 Vercel dashboard 手动 redeploy
# Deployments → 最近一次 deploy → 右边 ... → Redeploy
```

### 3.3 测试生产环境的 endpoint

部署完成后（~2 分钟），用 production URL 跑测试：

```bash
# 把 your-app.vercel.app 换成你的 production URL
curl -X POST https://your-app.vercel.app/api/parent-email/test \
  -H "Content-Type: application/json" \
  -H "X-Test-Token: 5a883de16b6c89e64e2983eff5d33450810664de3e55db6d925d6e6751622482" \
  -d '{"to":"your@email.com","type":"ping"}'
```

✅ 收到邮件 = **生产环境邮件链路已通**。

---

## Step 4：测 Vercel Cron 周一自动触发（5 分钟）

Vercel Cron 自动按 `vercel.json` 配置每周一 16:00 UTC（PT 8:00）跑——
**但你也可以现在手动触发**测试它。

### 4.1 手动触发 cron endpoint

```bash
curl -X POST https://your-app.vercel.app/api/cron/weekly-parent-benchmark \
  -H "Authorization: Bearer 8ba355afd07baf564807edb7cbc213149450401c55ad9dab40e37fe7accf048e"
```

预期返回 JSON：
```json
{
  "timestamp": "2026-04-29T...",
  "eligible": 1,        // 设了 parent_email 的用户数
  "total_users": N,     // 总用户数
  "sent": 1,
  "failed": 0,
  "skipped": 0,
  "details": [...]
}
```

✅ **关键检查**：
- `eligible >= 1` —— 至少 1 个用户设了 parent_email（先你自己设一个）
- `sent` 等于 `eligible` —— 全部发送成功
- `failed: 0` —— 没失败

如果 `eligible: 0`：你还没在 Know U. App 里设过 parent_email——
打开 App → User Center → "爸妈周报" → 添加邮箱 → 保存。

### 4.2 验证 Vercel Cron 真会按时跑

进 Vercel Dashboard → 项目 → **Crons** tab —— 应该看到：

```
/api/cron/weekly-parent-benchmark
Schedule: 0 16 * * 1  (Every Mon at 16:00 UTC)
Last run: never (or last run timestamp)
Next run: 2026-XX-XX 16:00:00 UTC
```

✅ 这页存在 = Vercel 已识别 cron。

**实际验证要等到下周一**——但你也可以**强制下次部署后立即触发一次**：
- Vercel → Crons → 该 cron 行 → 三个点菜单 → **"Run now"**

---

## Step 5：把家长邮箱设进自己账号（用 App 测）

打开你的 Know U. App：

1. 登入你自己的账号（chompcloud@gmail.com 那个）
2. 进 **User Center**（点头像）
3. 滚到 **"爸妈周报"** section
4. 点 **"添加"**
5. 输入 parent email（可以是你自己的另一个邮箱测试，或者真的家长邮箱）
6. 勾选 **"订阅周一周报"**
7. 点 **"保存"**

✅ **下次 cron 跑（或你手动 4.1 触发），这个邮箱就会收到周报**。

---

## Step 6：监控 + 故障排查

### Resend Dashboard

进 https://resend.com/emails —— 看到所有发出去的邮件：
- 状态：Delivered / Bounced / Complained
- 打开率（如果 Resend Pro）
- 失败原因

### Vercel Logs

如果发送失败：
1. Vercel Dashboard → Deployments → 最新部署 → **Functions** tab
2. 找 `/api/cron/weekly-parent-benchmark` —— 看 log
3. 错误 case：
   - `RESEND_API_KEY not set` → Vercel 环境变量没加
   - `listUsers failed` → SUPABASE_SERVICE_ROLE_KEY 错或没设
   - `unauthorized` → CRON_SECRET 不对（Vercel Cron 自动加，手动 curl 要带）

---

## 你需要做 vs 我已经做了

| 步骤 | 谁做 | 状态 |
|---|---|---|
| 写 Resend wrapper / 模板 / cron / aggregator | ✅ 我做完了 | committed `9221162` + `24f88fa` |
| UI "爸妈周报" section | ✅ 我做完了 | committed `9221162` |
| `vercel.json` cron 配置 | ✅ 我做完了 | committed `9221162` |
| **生成 secrets（PARENT_EMAIL_TEST_TOKEN / CRON_SECRET）** | ✅ 我做完了 | 见上面 Step 2.1 |
| **注册 Resend + 拿 API key** | ⚠️ **你做** | Step 1 |
| **在 .env.local 加 4 个变量** | ⚠️ **你做** | Step 2.1 |
| **本地测试 ping/summary/wakeup** | ⚠️ **你做** | Step 2.4 |
| **在 Vercel Dashboard 加同样 4 个变量** | ⚠️ **你做** | Step 3.1 |
| **触发 redeploy** | ⚠️ **你做** | Step 3.2 |
| **生产环境测试 + 手动触发 cron** | ⚠️ **你做** | Step 3.3 + 4.1 |
| **在 App 里设你自己的 parent_email** | ⚠️ **你做** | Step 5 |

---

## 真实周一发邮件那天 — 你会看到什么

第一次真实 cron 跑（周一早 8 PT）后：
- 你的家长邮箱收到一封"Willow 这周学习简报"或"Willow 这周还没打开"
- Resend Dashboard 显示该邮件 sent
- Vercel Functions log 显示 cron 跑了 N 次

**如果第一次有内容不对**（aggregator 数据 schema 不匹配 / 文案怪 / 等等）——
告诉我哪里不对，**Phase B5（迭代）**：
- 修 aggregator 拉真数据的方式
- 调整模板措辞
- 加新字段

---

## 之后的演进路径

**Phase B5 v1**（看真实周报 1-2 次后做）：
- 真精确数据 schema 对齐（vocab/writing/history 模块的实际 progress 字段）
- 用 Opus 实时生成"认知亮点"段（替换现在的 stub）
- A/B 测两种 subject line

**Phase B6**（家长反馈数据后做）：
- 加家长直接回信的反馈通道
- 加家长 dashboard（不只邮件）
- 加多语言（英文版 / 简体中文 / 繁体）

**Phase B7**（用户量起来后）：
- 自定义域名（onboarding@resend.dev → noreply@knowulearning.com）
- DKIM/SPF/DMARC 完整配置
- 邮件送达率监控
