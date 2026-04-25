# Know U. Learning — History 模块开发交接文档

_Created: 2026-04-24 by Winston + Claude_  
_Predecessor docs to read first: `docs/HANDOFF.md` (基础架构) + `pages/vocab.js` (参考实现)_

## 0. 给新对话 Claude 的第一段话

你好。这个文档是 **History（历史课）** 模块的开发交接 — Winston 想给女儿 Willow（6 年级，备考 SSAT，主要测试用户）开发学习世界历史/美国历史的功能。先做以下三件事再开干：

1. 读 [`docs/HANDOFF.md`](./HANDOFF.md) 了解基础技术栈、部署、API 调用模式
2. **不要** 全文读 `pages/vocab.js`（7700 行）— 太大，按需 grep 查
3. 读本文档第 5-7 节理解必须复用什么、不能重复造什么

Winston 风格：决策果断、迭代快、不要啰嗦总结。先思考方案 → 他拍板 → 立即开干。

---

## 1. 产品身份与核心理念（一定要继承）

| 维度 | 已确立的原则 |
|---|---|
| **Slogan** | 『AI 用你的故事教英语』(History 应延续：『AI 用你的世界讲历史』) |
| **目标用户** | K12 中国学生（尤其备考 SSAT/SAT/TOEFL 家庭），首位用户是 6 年级女儿 Willow |
| **核心机制** | **千人千面** — 用学习画像 (`profile`) 把内容编进学生自己的世界 |
| **科学方法** | SRS 间隔重复 1/3/7/14/30 天 + 多模态语境 |
| **教学哲学** | "不是批改/灌输，是引导/共情"。Vocab 是上下文猜词，Writing 是苏格拉底式提问，History 也应是**让学生自己想出来**而非记忆 |
| **激励层** | 宠物养成（4 阶段进化 + 6 心情 + 8 配饰）+ XP 经济 + celebrate 反馈 |
| **闭环目标** | Vocab/Writing/Reading/History 互相赋能（历史里学的人物名/术语 → 自动推到 Vocab；写作时可引用历史观点） |

不要做反面：题海软件（百词斩式）、通用 AI 套娃（ChatGPT 包壳）、纯讲解（Khan Academy 式）。

## 2. 必须复用的现有架构（不要重复造）

### 2.1 共享 UI（直接用，不要再做）

```js
import { BrandNavBar } from '../components/BrandNavBar';
// 用 activeTab="history" — 但 nav 里目前没有 history tab，需新增
import UserCenter from '../components/UserCenter';
import { PetAvatar, moodFromLabel, ACCESSORY_CATALOG } from '../components/PetAvatar';
import { C, FONT, FONT_DISPLAY, NUM, S, globalCSS } from '../lib/theme';
import { callAPI, callAPIFast, callAPIStream, tryJSON, parsePartialJSON } from '../lib/api';
import { loadLearningTime, formatTime } from '../lib/learningTimer';
import { supabase } from '../lib/supabase';
```

### 2.2 共享数据 / 状态（跨模块共用）

| 数据 | 存储 key / 路径 | 用途 |
|---|---|---|
| 学习画像 | `vocabspark_v1.profile` (string) | 学生兴趣/朋友/常去地方 — 历史模块也读它 |
| 考试方向 | `vocabspark_v1.studyGoal` ("ssat"/"sat"/etc) | 影响内容难度 |
| 用户姓名 | profile 里第一行通常含名字 (如"我叫 Willow") | closing 直呼姓名时用 |
| 学习画像年龄 | profile 里的"🎂 我是 X 年级" | 重要，决定语言难度 |
| stats.xp | `vocabspark_v1.stats.xp` | 全局 XP 池，历史答对加同一池 |
| pet | `vocabspark_v1.pet` | 全局宠物，历史答对也喂同一只 |
| 学习时间 | `knowu_learning_time` (lib/learningTimer.js) | 全局活跃时间 |

### 2.3 必须复用的机制

- **SRS 间隔重复**：`REVIEW_INTERVAL_DAYS = [1, 3, 7, 14, 30]` (vocab.js 顶部)
- **AI 调用**：`callAPIFast(systemPrompt, userPrompt)` 单次 / `callAPIStream` 流式 / `callClassify` 轻量分类
- **JSON 解析**：`tryJSON` (完整) / `parsePartialJSON` (流式渐进)
- **JWT 验证**：所有需要保护的 API 端点用 `requireUser(req, res, claimedUserId)` (lib/auth-server.js)
- **宠物激励**：`triggerPetCelebrate(ms)` 短暂触发星星眼大笑（答对/完成时调用）
- **toast 提示**：`setPetToast(msg)` + 2-3 秒清除
- **学习画像引导**：参考 vocab.js 的『我是谁』tab — 5 选年龄 chip + 兴趣 chip + 引导卡

## 3. 文件结构（建议新增）

```
pages/
  history.js                    # 新增主页面（参考 vocab.js 的 phase 状态机模式）
  api/
    chat.js                     # 已有，复用（无需改）
components/
  HistoryTimeline.js            # 新增：可视时间线 SVG 组件
  HistoryEventCard.js           # 新增：事件卡（如果反复用）
lib/
  history-prompts.js            # 新增：buildHistoryGuessPrompt / buildHistoryTeachPrompt 等
docs/
  HANDOFF_HISTORY_MODULE.md     # 本文档
```

**localStorage key**：`vocabspark_history_v1` (跟 vocab/writing 同前缀风格)

数据结构建议：
```js
{
  version: 1,
  events: {
    [eventId]: {
      id: "us-1776-independence",
      title: "美国独立宣言",
      year: 1776,
      region: "north-america",
      category: "modern", // ancient/medieval/modern/contemporary
      mainFigures: ["Thomas Jefferson", "John Adams"],
      keywords: ["independence", "tyranny", "unalienable"], // 自动推到 vocab
      difficulty: 3, // 1-5
      reviewLevel: 0, // 0-4 → REVIEW_INTERVAL_DAYS index
      nextReviewDate: "2026-04-25",
      reviewHistory: [{ date, mode, result }],
      masteryLevel: 30, // 0-100
      firstLearnedAt: "...",
    }
  },
  stats: { correct, total, xp }, // 跟 vocab 共享 stats.xp 池
  // 时间线视图状态
  timelineFilter: { region, category, year_range },
}
```

## 4. 历史模块功能设计（推荐方案 — 待 Winston 拍板）

### 4.1 学习单位 = 历史事件
不像单词那样原子化。一个 event 可能要分多次学（背景 → 经过 → 影响）。建议：
- **每次学习聚焦一个 event 的一个维度**（背景 / 关键人物 / 因果链 / 现代影响）
- 4 个维度全部 mastered（≥70%）才算 event 完成

### 4.2 4 步学习循环（对标 vocab 的"猜→讲→排序→复习"）

| 阶段 | UI | 设计要点 |
|---|---|---|
| **猜一猜 Guess** | 给一个事件描述（含空格），4 选 1 猜年份/地点/主角 | 用 profile 句式："就像 [Willow 的某朋友] 在 [她常去的地方] 突然 ___ 一样" |
| **讲一讲 Teach** | AI 讲解，**用 Willow 自己的世界类比** | 关键：『独立战争 = 班级里小组要从大组分出来 + 12 条具体规则』 |
| **排一排 Timeline** | 拖拽 5 个事件按时间顺序 | 替代 vocab 的"光谱排序" — 时间维度更适合历史 |
| **复习 Review** | SRS 调度，问"如果 [当时角色] 是你，你会..." | 角色代入比直接回答更深刻 |

### 4.3 closing 风格延续 5 种轮换
继承 vocab 的 closing rotation（『金句对比/场景应用/联想触发/直呼姓名/反向提问』），但适配历史：
- 金句对比：「你以前可能觉得历史就是死记硬背，其实独立宣言就是 [Willow 经验里类比]」
- 反向提问：「如果你是 Jefferson 那天的家人，你会支持她去签宣言吗？」

### 4.4 跟 Vocab 的双向打通
- 历史 event 里出现的关键英文词（tyranny, unalienable）→ 自动加到 Vocab 待学列表（与现有 wordInput 合并）
- Vocab 学过的高级词（perpetual, abandon）→ History closing 文案里优先使用，强化"复用"感

## 5. 关键参考代码（grep 模式）

```bash
# 看猜词阶段 phase 状态机
grep -n "phase === \"guess\"" pages/vocab.js

# 看 SRS 调度
grep -n "REVIEW_INTERVAL_DAYS\|nextReviewDate\|reviewLevel" pages/vocab.js

# 看 prompt engineering 模式
grep -n "buildGuessPrompt\|buildTeachPrompt\|CLOSING_STYLES" pages/vocab.js

# 看画像系统
grep -n "profile\|PROFILE_DEFAULT_EXAMPLE\|GOAL_DIRECTIVES" pages/vocab.js

# 看宠物 celebrate 触发
grep -n "triggerPetCelebrate" pages/vocab.js

# 看 toast 模式
grep -n "setPetToast\|setError" pages/vocab.js
```

## 6. 必须改的现有文件（接驳点）

| 文件 | 改动 |
|---|---|
| `components/BrandNavBar.js` | 加 History tab（带 Beta sup，跟 Writing 一致风格） |
| `pages/home.js` | EcosystemArt SVG 加历史图标 + ECOSYSTEM section 产品卡加 History 卡 |
| `pages/plan.js` | features 数组加"History 模块" |
| `components/UserCenter.js` | "我的课程" section 加 History 行 |

## 7. 已知陷阱（vocab 踩过的坑，历史别再踩）

1. **字段写入只在一处** — vocab.js 的 `meaning` 字段只在 guess 阶段写入（line 4231），导致快速复习时所有词都没释义。**历史模块设计字段时，每个写入路径都要 upsert，不要假设用户走完整流程**。

2. **JSON parsing 容错** — LLM 偶尔返回 \`\`\`json\`\`\` 包裹。用 `tryJSON` 而非 `JSON.parse`。

3. **streaming JSON 渐进渲染** — `callAPIStream` 时用 `parsePartialJSON` 让 UI 边到边显示。

4. **build vs dev cache** — `npm run build` 会让 dev server 报 "Cannot find module ./chunks/vendor-chunks/next.js"。解：`rm -rf .next` 让 dev 重编。

5. **中文字符串内嵌套双引号** — JS 解析为 syntax error。用「」或单引号。

6. **emoji 在 SVG `<text>` 内** — iOS/macOS 渲染不可靠，用纯 SVG path。

7. **userId 越权** — 所有 API 路由用 `requireUser(req, res, body.userId)` 双重验证（token 必须跟 body.userId 匹配）。

8. **localStorage 同步写** — 不要 chain `await loadSave().then(doSave)`，会丢数据。直接 `localStorage.setItem(KEY, JSON.stringify(state))`。

9. **跳页导航竞态** — `setShowModal(false) + window.location.href` 同步连续调有竞态。改用 `location.href` 让整页 unmount 处理。

10. **closing 单一模板审美疲劳** — 同样的鼓励话看 50 条就跳过。**5 风格随机轮换** 已是验证有效的方案。

11. **男女平衡** — Willow 是女儿但产品要男生也用。配饰系统已平衡 (4 女 / 4 男向)。历史内容也要避免性别偏好（不要全选某性别历史人物）。

12. **JWT 验证 + sendBeacon** — beacon 不能带 header，token 必须放 body._authToken（lib/auth-server.js 已支持）。

## 8. 快速开发流程

```bash
# 本地开发
npm run dev          # localhost:3000
# 等 ready，浏览器去 /history (404 直到你创建 pages/history.js)

# 构建验证
npm run build        # 必须通过才能部署
rm -rf .next         # build 后清缓存让 dev 重编

# 部署
git checkout -b feat/history-module
git add -A && git commit -m "feat(history): xxx"
git push origin feat/history-module
vercel deploy --prod --yes  # 部署到 prod
curl https://www.knowulearning.com/history  # 验证

# 提交规范
feat(history): 新功能
fix(history): bug 修复
refactor(history): 重构
fix(home/nav/plan): 跨模块改动
```

## 9. Winston 偏好备忘

- **决策果断** — 提方案给他拍板，不要犹豫太多
- **简短进度报告** — 不要冗长总结，1-2 句话说改了什么 + 部署 URL
- **重视女儿的反馈** — 她的"赶时间会跳过"、"审美疲劳"是产品改进信号
- **营销感不要 cheesy** — Hero 极简、不要 emoji 散落，配饰要平衡男女
- **中文 UI 文案** — "懂年轻人的口吻"，不要"老师下结论"
- **不要过度工程化** — 三行重复 > 早抽象。bug 修复不带"顺便重构"

## 10. 当前已上线核心功能清单（避免你重复做）

✅ Vocab 模块（猜→讲→排→复习四步循环）  
✅ Writing 模块 Beta（六维能力雷达）  
✅ 宠物系统（4 阶段 × 6 心情 × 8 配饰 SVG）  
✅ XP 经济（喂养正餐/零食 + 配饰商店）  
✅ Celebrate 触发器（答对/升级/喂养）  
✅ SRS 间隔重复 1/3/7/14/30 天  
✅ 学习画像 + 5 选年龄 chip 引导  
✅ 5 风格 closing rotation（金句/场景/联想/呼名/提问）  
✅ JWT API 验证（sync/load/reset）  
✅ 营销首页（hero 极简 + 3 SVG 大插画 + 4 差异化卡 + 家长对话轮播）  
✅ Plan 页（free/basic/pro + 早鸟 EARLYBIRD + 已订阅致谢卡）  
✅ UserCenter 抽屉（升级 Pro 渐变 CTA）

需要 history 模块去**衔接**而不是**重做**这些。

---

## 11. 给新对话的开场示范

把这段话喂给新对话：

> 你好 Claude。这个项目叫 Know U. Learning（vocabspark），我（Winston）现在要给女儿 Willow 开发历史课模块。请先读以下两份文档了解项目，再回来跟我讨论设计方案：
> 1. `docs/HANDOFF.md` — 项目基础架构
> 2. `docs/HANDOFF_HISTORY_MODULE.md` — 历史模块特定指引（核心理念 + 必须复用的架构 + 设计推荐 + 已知陷阱）
>
> 读完后告诉我两件事：
> 1. 你打算怎么设计历史模块的"猜→讲→排→复习"四步循环（特别是怎么让 AI 用 Willow 的世界讲历史）
> 2. 第一个 MVP 你建议先做哪个子功能（半天能做完那种）
>
> 我会拍板，然后你立即开干。
