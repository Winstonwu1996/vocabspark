# Know U. Learning — 项目交接文档

_Last updated: 2026-03-28_

## 1. 产品概览

**Know U. Learning** 是一个 AI 驱动的个性化语言学习平台，面向 K12 学生（尤其是备考 SSAT/ISEE/SAT/TOEFL/IELTS 的华人家庭）。

已上线模块：
- **Vocab** — AI 词汇学习（快筛、精读、间隔重复复习）
- **Writing** — 写作练习（导航栏已预留入口，标记 "Soon"）

核心差异化：用户填写「学习画像」（兴趣、朋友、生活细节），AI 用真实生活场景生成例句和课件。

---

## 2. 技术栈

| 层 | 技术 | 说明 |
|---|---|---|
| 框架 | Next.js 14 (Pages Router) | 非 App Router |
| 前端 | React 18, 纯 inline styles | 无 CSS 框架，样式对象 `S`，颜色常量 `C` |
| AI | DeepSeek Chat API + Google Gemini | 多 provider 轮询 + 429 重试 |
| Auth | Supabase Auth (Magic Link OTP) | Email 验证码登录，无密码 |
| 数据库 | Supabase (PostgreSQL) | 单表 `user_progress`，JSON 存储 |
| 部署 | Vercel | CLI 部署，域名 knowulearning.com |
| 包管理 | npm | 无 yarn/pnpm |

---

## 3. 仓库与部署

```
本地路径: ~/projects/vocabspark
GitHub:   https://github.com/Winstonwu1996/vocabspark (main)
Vercel:   winstonwu1996 scope, project "vocabspark"
域名:     https://knowulearning.com
```

### 部署命令

```bash
# 标准部署（带缓存）
npx vercel deploy --prod

# 强制全量重建（解决缓存不更新问题）
rm -rf .next && npx vercel deploy --prod --force
```

### 已知部署陷阱
- Vercel 构建缓存有时不更新，必须用 `--force`
- macOS 文件系统大小写不敏感，Vercel Linux 大小写敏感 — 文件名必须严格匹配代码引用

---

## 4. 代码地图

### 前端
| 文件 | 说明 |
|---|---|
| `pages/index.js` | **Vocab 完整应用**（~4400 行单文件 SPA） |
| `pages/_app.js` | App shell + `@vercel/analytics` |
| `styles/globals.css` | 全局样式（动画 keyframes 等） |
| `lib/supabase.js` | Supabase 客户端初始化 |

### API 路由
| 文件 | 说明 |
|---|---|
| `pages/api/chat.js` | AI 聊天代理 — DeepSeek 双 key 轮询 + Gemini 兜底，429 自动重试 |
| `pages/api/tts.js` | 文本转语音代理 |
| `pages/api/describe-photo.js` | Gemini Vision 图片描述（用于照片日记） |

### 静态资源
| 文件 | 说明 |
|---|---|
| `public/logo.png` | 品牌 Logo（蓝橙渐变 U 盾牌 + 闪电，143KB） |
| `public/ai-illustration.png` | AI 核心功能插图（344KB） |

---

## 5. 环境变量

文件：`.env.local`（不提交到 Git）

| 变量 | 用途 |
|---|---|
| `DEEPSEEK_API_KEY` | DeepSeek Chat API 主 key |
| `DEEPSEEK_API_KEY_2` | DeepSeek Chat API 备用 key（负载均衡） |
| `GOOGLE_AI_API_KEY` | Google Gemini API（兜底 + 图片描述） |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 项目 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase 匿名 key（受 RLS 保护） |

**注意：** 目前没有 Supabase Service Role Key。如需后台数据操作，需从 Supabase Dashboard → Settings → API 获取。

Vercel 和 GitHub token 通过系统环境变量提供，不在 `.env.local` 中。

---

## 6. 数据库结构 (Supabase)

### 表：`user_progress`

| 列 | 类型 | 说明 |
|---|---|---|
| `user_id` | UUID (PK) | 关联 Supabase Auth user |
| `progress_data` | JSONB | 所有用户数据（见下） |
| `updated_at` | TIMESTAMP | 最后同步时间 |

### `progress_data` JSON 结构

```js
{
  wordInput: "word1\nword2\n...",     // 用户词表（换行分隔）
  profile: "用户画像文本",
  studyGoal: "ssat",                  // 学习目标 key
  dailyNewWords: 10,                  // 每日新词数
  stats: {
    correct: 0, total: 0,             // 答题统计
    streak: 0, bestStreak: 0,         // 连续正确
    xp: 0                             // 经验值
  },
  wordStatusMap: { "word": "mastered" },  // 手动状态覆盖
  reviewWordData: {                       // 复习数据（按词）
    "word": {
      stage: 2,                       // SRS 阶段 (0-4)
      nextReviewDate: "2026-03-30",
      reviewHistory: [
        { mode: "quick", date: "2026-03-28", result: "correct" }
      ]
    }
  },
  updatedAt: "ISO timestamp"
}
```

### Auth 方式
- `supabase.auth.signInWithOtp({ email })` — 发送验证码
- `supabase.auth.verifyOtp({ email, token, type: 'email' })` — 验证
- `supabase.auth.signOut()` — 登出

---

## 7. 设计体系

### 色板（60-30-10 原则）

```js
var C = {
  // 60% — 暖白灰底
  bg: "#f7f6f3",        // 页面背景
  card: "#ffffff",       // 卡片背景
  border: "#e5e2dd",     // 边框

  // 30% — 蓝灰（知性、信任）
  teal: "#4a6d8c",       // 主要蓝灰
  tealLight: "#f0f4f7",  // 蓝灰浅底

  // 10% — 暖橙（活力、行动）
  accent: "#c46b30",     // 主强调色（CTA按钮、active状态）
  accentLight: "#fdf1e8", // 橙色浅底

  // 功能色
  purple: "#6c5ce7",     // 精读模式
  green: "#22a06b",      // 正确/已掌握
  red: "#e53e3e",        // 错误/易错
  gold: "#c8922e",       // XP/成就

  // 文字
  text: "#2c2e33",       // 主文字
  textSec: "#6b7280",    // 次要文字
};
```

### 字体
```js
var FONT = "'DM Sans','Noto Sans SC',sans-serif";
```

### 阴影
```js
shadow: "0 2px 12px rgba(44,36,32,0.10)"  // 卡片统一阴影
```

### 关键 UI 组件（在 pages/index.js 中）

| 组件 | 行号 | 说明 |
|---|---|---|
| `BrandUIcon` | ~316 | Logo 渲染（drop-shadow，圆角） |
| `BrandNavBar` | ~333 | 顶部导航栏（Logo + 产品名 + Vocab/Writing 切换 + 统计胶囊） |
| `BrandSparkIcon` | ~323 | 居中大 Logo（用于弹窗等） |

### 导航栏设计
- Logo 38px，带蓝橙双色 drop-shadow
- "Know U." fontWeight:800 + "Learning" fontWeight:500，带 text-shadow
- 副标题 "Personal AI Language Tutor"
- 底部 16px 圆角 + boxShadow 浮起效果
- 右侧：Vocab（active，accent 色下划线）、Writing（Soon badge，teal 色实心标签）

---

## 8. Vocab 核心业务逻辑

### 学习流程
1. 用户填写画像 → 上传/输入词表 → 设置学习目标
2. **快筛模式**：5 选 1 快速判断认识/不认识
3. **精读模式**：AI 生成个性化例句 + 上下文 + 语境填空
4. **间隔重复**：答对后按 `[1, 3, 7, 14, 30]` 天递增复习间隔，答错重置为 1 天

### 关键状态
```js
wordStatus: "unlearned" | "learning" | "mastered" | "uncertain" | "error" | "skipped"
```

### 每日限制
- 游客：10 词/天（`DAILY_LIMIT`，localStorage 计数）
- 登录用户：无限制（推广期免费）

### 预设词表
- `PRESETS_BY_GOAL` 按学习目标提供推荐词表（SSAT/ISEE/SAT/TOEFL/IELTS）
- 用户上传自己的词表后隐藏预设

---

## 9. AI API 调用模式 (chat.js)

```
前端 fetch('/api/chat', { messages, mode })
  → chat.js 构建 provider 列表 [deepseek-a, deepseek-b, gemini]
  → 轮询尝试，provider 级别 pacing（180ms/350ms 间隔）
  → 429 时自动切换下一个 provider
  → 全部失败时返回错误
```

模型使用：
- DeepSeek: `deepseek-chat`
- Gemini: `gemini-2.5-flash-lite`

---

## 10. 开发 Writing 模块的建议

### 架构
- 新建 `pages/writing.js` 作为独立路由
- 复用：`lib/supabase.js`、`.env.local`、`pages/api/chat.js`
- 共享设计体系：将 `C`（颜色）、`FONT`、`S`（样式）提取到 `lib/theme.js`

### 需要的改动
1. **导航栏**：`BrandNavBar` 提取为共享组件，Writing Soon → 真实链接
2. **数据库**：`user_progress.progress_data` 中新增 `writingData` 字段，或创建独立表 `user_writing`
3. **API**：`chat.js` 可直接复用，Writing 的 prompt 不同但调用方式一致

### 提取共享代码的优先级
1. `lib/theme.js` — 颜色 `C`、字体 `FONT`、基础样式 `S`
2. `components/BrandNavBar.js` — 导航栏（支持 active tab 参数）
3. `lib/auth.js` — Auth hooks（login/logout/sync）

---

## 11. 安全规则

- 密钥仅存在 `.env.local` 和 Vercel 环境变量中，不提交到 Git
- 文档中只记录变量名，不记录值
- `NEXT_PUBLIC_*` 前缀的变量会暴露到前端，仅用于 Supabase 公开 key
- Supabase RLS 保护数据，anon key 只能访问当前登录用户的数据

---

## 12. 常用命令速查

```bash
# 开发
npm run dev                          # 本地开发服务器 :3000

# 构建检查
npm run build                        # 本地构建验证

# 部署
rm -rf .next && npx vercel deploy --prod --force

# Git
git log --oneline -10                # 最近提交
git diff HEAD~1 --stat               # 上次改了什么

# Supabase Dashboard
# https://supabase.com/dashboard/project/pzadkflzktvppwkezwxu
```
