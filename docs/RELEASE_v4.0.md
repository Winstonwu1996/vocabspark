# Release v4.0 — 营销首页 + 用户中心 + 生态闭环 + 路由迁移

_发布时间: 2026-03-30_
_部署: knowulearning.com (dpl_4GxuTv762WGmjDqgWWzYgRW5Ydeq)_
_回滚: `npx vercel rollback`_

---

## 变更总览

这是一次 **产品架构升级** — 从单页应用演变为多模块平台，新增营销首页作为品牌入口。

---

## 一、营销首页 (`pages/home.js`)

### 新增 8 个 Section

| Section | 内容 | 营销目的 |
|---|---|---|
| Hero | Logo 浮动动画 + 品牌名 + "每个单词都是你的故事" + CTA | 第一印象 + 行动引导 |
| 为什么选 Know U. | abandon 传统 vs 个性化对比 | **核心差异化展示** |
| 三个教学理念 | 千人千面 / 直击考试 / 科学记忆 | 建立信任 |
| 三位一体闭环 | Vocab ⇄ Reading ⇄ Writing 可视化 | 产品生态展示 |
| 产品卡片 | 三张卡片各有状态（已上线/Beta/即将上线） | 功能导览 |
| 与众不同 | vs 百词斩 / ChatGPT / Duolingo 对比 | 竞品差异化 |
| 创作故事 | "爸爸为女儿写的工具" | 情感共鸣 |
| 推广期 CTA | "全部免费" + 注册/方案按钮 | 转化 |

### 技术特点
- 滚动渐入动画（IntersectionObserver）
- Logo 浮动动画（@keyframes floatLogo）
- 纯静态页面，仅检测 Auth 状态用于用户中心
- 响应式：auto-fit grid，移动端自动竖排

---

## 二、用户中心 (`components/UserCenter.js`)

### 右上角头像图标
- **未登录**：灰色 👤 圆形图标
- **已登录**：用户首字母头像（accent 渐变背景）

### 侧边抽屉内容

**已登录状态：**
- 头像 + 用户名 + 邮箱
- 等级 Badge（Free · 推广期）
- 快速统计：XP / 连续天数 / 正确率
- 学习设定：目标 / 每日新词 / 每日攻克
- 我的课程：Vocab / Writing / Reading(即将上线)
- 账户管理：升级方案 / 隐私声明
- 退出登录

**未登录状态：**
- 登录/注册引导 + 权益说明
- 课程快捷入口

---

## 三、Reading 模块预宣传

- 导航栏新增 "Reading" + "Soon" 上标
- 首页产品卡片：📚 Reading · 阅读课（即将上线）
- 功能预告：AI 推荐阅读材料、生词一键收藏、金句收藏供 Writing 引用
- 按钮显示 "敬请期待"（disabled 状态）

---

## 四、路由迁移

| 变更前 | 变更后 | 说明 |
|---|---|---|
| `/` → Vocab 主页 | `/` → 营销首页 | rewrite 规则 |
| 无独立路由 | `/vocab` → Vocab | 文件重命名 |
| BrandNavBar `href="/"` | `href="/vocab"` | 链接更新 |
| plan.js `href="/"` | `href="/vocab"` | 链接更新 |
| Logo 无链接 | Logo → `/`（首页）| 品牌入口 |

### 欢迎弹窗优化
- 从首页 CTA 进入（`/vocab?from=home`）→ 跳过欢迎弹窗
- 直接访问 `/vocab` → 正常显示欢迎弹窗

---

## 五、文案优化（9 处）

| 修复前 | 修复后 | 原因 |
|---|---|---|
| "P0/P1/P2 阶段看板" | "📋 学习进度看板" | 技术术语 |
| "Action Items" | "⚡ 学习建议" | 英文混合 |
| "危险区域 (Danger Zone)" | "⚠️ 数据管理" | 吓人+英文 |
| "别断了！" | "再来一把？" | 压力语气 |
| "便宜 90%"（5处） | "效果堪比真人私教" | 廉价感 |
| "推广期福利" | "推广期免费体验" | 商业语气 |
| "P0 ✅ · P1 ⏳ · P2 ⏳" | "基础学习 ✅ · 复习计划 ⏳ · 统计管理 ⏳" | 技术术语 |

---

## 六、安全保证

- **用户云端数据结构完全未改动** — 无 Supabase 表/列/RLS 变更
- `progress_data` JSON 结构不变
- Auth 逻辑不变（Magic Link OTP）
- localStorage key 不变
- 所有改动仅涉及前端 UI 和路由

---

## 回滚方式

```bash
npx vercel rollback
# 或指定版本
npx vercel promote dpl_EDkuzfeqLRdEJqiKULwsZKmjQvky  # v3.30
```

## 文件变更清单

| 文件 | 操作 |
|---|---|
| `pages/home.js` | 新建 — 营销首页 |
| `components/UserCenter.js` | 新建 — 用户中心抽屉 |
| `pages/index.js` → `pages/vocab.js` | 重命名 + 欢迎弹窗 + 文案优化 |
| `components/BrandNavBar.js` | Logo链接 + 用户中心 + Reading tab |
| `next.config.js` | rewrite "/" → "/home" |
| `pages/plan.js` | "/" → "/vocab" |
| `pages/index.js.v3.bak` | 删除（旧备份） |
