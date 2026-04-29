# Parent Benchmark — 跨模块家长周报 / 唤醒邮件系统架构

**Status**：架构设计 v1（2026-04-29）· 等 founder approve 后实施
**Owner**：Winston（创始人）
**核心目的**：把"家长监督孩子学习"从中国家长**愿意 buy in 但西方 AI 教育产品没做**的盲区，变成 Know U. 的护城河

---

## 战略定位

### 为什么这是护城河

中美 AI 教育产品差异：

| | 美国主流（Khan Academy / Duolingo） | Know U.（我们） |
|---|---|---|
| 家长角色 | 被动看 dashboard（家长要主动登入） | **主动推送给家长**（每周邮箱） |
| 数据视图 | 学习时长 + 完成度（数字） | **晚饭桌可问的具体题 + AI 给爸妈的话术** |
| 不在状态时 | 不联系（"放手让孩子自己学"） | **自动唤醒邮件**（"Willow 这周没打开，可能因为..."） |
| 文化默认 | 美式：学习是孩子自己的事 | 中式：**家长 + 孩子合作**（华人家长更接受） |

**这不是功能差异，是文化差异**。中国移民家长**愿意为这个付费**，因为他们要的就是这个。

### 双效

- **学习成效**：家长每周读一封"具体可问的题"邮件 → 孩子下周表现感受到家长 awareness → 下周更投入
- **续费杠杆**：家长每周收到一封邮件 = **每周一次**强制 product re-engagement → 远超 LTV 平均水平

---

## 系统架构

```
┌──────────────────────────────────────────────────────────────┐
│  Vercel Cron（周一 早 8:00 PT）                               │
│  POST /api/cron/weekly-parent-benchmark                       │
└──────────────────────────────────────────────────────────────┘
              │
              ↓
┌──────────────────────────────────────────────────────────────┐
│  Aggregation Layer（跨模块数据汇总）                          │
│  for each user with parent_email:                             │
│    - Vocab: 本周学词数、accuracy、最难词                      │
│    - History: 完成 Topic、mastery 分、卡点                     │
│    - Writing: 完成 essay、AI 反馈关键点                       │
│    - Reading: 完成段、词汇覆盖（待实现）                       │
│  → returns 7d_activity object                                 │
└──────────────────────────────────────────────────────────────┘
              │
              ↓
┌──────────────────────────────────────────────────────────────┐
│  Branching                                                    │
│  IF activity > threshold (e.g. ≥ 1 module action):            │
│    → Generate Summary Email                                   │
│  ELSE:                                                        │
│    → Generate Wakeup Email（含上次活动回顾 + 友好原因猜测）   │
└──────────────────────────────────────────────────────────────┘
              │
              ↓
┌──────────────────────────────────────────────────────────────┐
│  Email Render & Send                                          │
│  - Resend API（最简）/ Postmark / SendGrid                     │
│  - HTML 模板：summary.html / wakeup.html                       │
│  - 含微信小程序唤起 link / 取消订阅 link                       │
└──────────────────────────────────────────────────────────────┘
              │
              ↓
┌──────────────────────────────────────────────────────────────┐
│  Logging                                                      │
│  - Supabase: parent_email_log（发送时间、类型、open rate？）   │
│  - 失败重试 + alert                                           │
└──────────────────────────────────────────────────────────────┘
```

---

## 数据模型新增

### 用户表新字段

```sql
ALTER TABLE users ADD COLUMN parent_email TEXT;
ALTER TABLE users ADD COLUMN parent_email_subscribed BOOLEAN DEFAULT TRUE;
ALTER TABLE users ADD COLUMN parent_email_locale TEXT DEFAULT 'zh-CN';
```

### 新表：邮件发送日志

```sql
CREATE TABLE parent_email_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  parent_email TEXT NOT NULL,
  email_type TEXT NOT NULL,  -- 'weekly-summary' | 'wakeup' | 'manual-test'
  subject TEXT,
  status TEXT NOT NULL,      -- 'sent' | 'failed' | 'bounced'
  resend_id TEXT,            -- 第三方 email 服务的 message id
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  error_message TEXT,
  metadata JSONB             -- 邮件实际内容快照（用于审计）
);

CREATE INDEX idx_parent_email_log_user ON parent_email_log(user_id, sent_at DESC);
```

---

## Email 模板设计

### Summary Email（有学习记录）

**Subject**：Willow 这周学习简报 · {{date_range}}

```
[brand header]

王先生 / 王女士：

Willow 这周用 Know U. 学了：

📚 词汇模块
- 学了 {{vocab.new_count}} 个新词（accuracy {{vocab.accuracy}}%）
- 这周最难的词："{{vocab.hardest}}" {{vocab.hardest_status}}
- 建议：周末抽 5 分钟用她学的词造 1 句话{{vocab.suggested_topic}}

📜 历史模块
- 完成 Topic：{{history.topic_title}}（{{history.mastery}}%）
- 卡点：{{history.stuck_point}}
- 给爸妈的晚饭桌问题（看她能不能答出来）：
  ① "{{history.q1.question}}"
     → 目标答案：{{history.q1.target_answer}}
  ② "{{history.q2.question}}"
     → 目标答案：{{history.q2.target_answer}}

✍️ 写作模块（如果有）
- {{writing.summary}}

🎯 这周认知亮点
- {{cognitive_highlight}}

🚨 需要你关注（如果有）
- {{concerns}}

[link: 完整 dashboard]
[link: 调整频率 / 取消]
```

### Wakeup Email（无学习记录）

**Subject**：Willow 这周还没打开 Know U.

```
[brand header]

王先生 / 王女士：

Willow 这周（{{date_range}}）没用过 Know U.。
我们想了几个可能原因，给您做参考：

🌟 上次她用是 {{last_activity_date}} — 学的是 {{last_topic}}，
   完成度 {{last_completion}}%
   {{last_topic_followup_suggestion}}

📅 学校最近忙吗？她有别的 priority？

💡 如果她需要一点动力，可以说：
   "{{specific_hook_from_last_session}}"

🤔 如果她对内容不感兴趣 / 觉得难，
   回信告诉我们一句话——我们立刻调整。

—— Know U. Learning

[link: 提交 feedback]
[link: 调整频率 / 取消]
```

---

## 邮件服务选型

**推荐：Resend**

| 选项 | 价格 | 易用 | 中文支持 |
|---|:-:|:-:|:-:|
| **Resend** | 免费 3000/月，$0.0008/email | ⭐⭐⭐⭐⭐ | ✅ |
| Postmark | $15/月起 | ⭐⭐⭐⭐ | ✅ |
| SendGrid | 免费 100/天，$19.95/月起 | ⭐⭐⭐ | ✅ |
| AWS SES | 极便宜但配置复杂 | ⭐⭐ | ✅ |

理由：Resend 是 Next.js 友好、API 简洁、React Email 模板支持，3000 封免费足够前期 ~500 用户。

---

## 实施排期（4 phase × ~12-16 小时）

### Phase B1（now，~2-3 小时）— UI 按钮 + 字段准备
1. ✅ history conversation 页加 3 按钮（😴 累 / 🤔 没懂 / ⏭️ 跳过）
2. ✅ 按钮触发对应 prompt 分支（VIVID 风格 + 不同 mode）
3. ✅ 添加 parent_email 字段到用户 settings 页

### Phase B2（~3-4 小时）— Email 基础设施
1. 集成 Resend API（环境变量 + 简单 wrapper）
2. 创建 parent_email_log 表（Supabase migration）
3. 实现 sendParentEmail() 公共函数
4. 写 manual trigger endpoint 测试发邮件

### Phase B3（~3-4 小时）— Cron + 模板
1. Vercel Cron 配置（vercel.json + /api/cron/weekly-parent-benchmark）
2. Summary email 模板（React Email 或 HTML）
3. Wakeup email 模板
4. 跑一次 manual test 给自己邮箱

### Phase B4（~3-4 小时）— 跨模块 aggregation
1. Vocab 模块数据聚合函数
2. History 模块数据聚合函数（含晚饭桌问题生成）
3. Writing 模块数据聚合函数（如果有）
4. Cognitive highlight 生成（用 Opus 简短分析）

### Phase C（~6-8 小时）— Narrative 全量拓展
1. Magna §3 其他人物：King John / Stephen Langton / 25 Barons / Tom 全部到明朝那些事儿密度
2. Magna §4：5 个 plot beats 全部加场景细节
3. Magna §5：Clause 39 / 40 / 12 / 61 文件深读加现代化解读
4. Crusades §3：Pope Urban II / Saladin / Bohemond / Godfrey / Alexios / Anna Komnene / Yusuf / Layla 全部
5. Crusades §4：1071 Manzikert / 1095 / 1099 / 1187 / 1204 / 1291 全部场景化
6. Crusades §5：Urban II 演讲 + Ibn al-Athir + Anna Komnene 三方原文加解读
7. 跑 simulator 验证密度提升后是否进一步推分

### Phase D（按 5-7h/Topic）— 下一个 Topic
1. Black Death（1347）— 多势力（瘟疫学 / 宗教 / 经济）+ 死亡人口规模 + 中国对照（中国黑死病记录）
2. 或 Renaissance（1500）— Florence + 美第奇 + 艺术 + 中国明代对照
3. 走完 12 步流水线

**总时长**：~30-40 小时全力工作，分散到 1-2 周。

---

## 隐私 + 合规考虑

- **儿童隐私（COPPA）**：Willow 12 岁——美国 COPPA 要求 13 岁以下家长同意。家长邮件订阅本身就是 COPPA 友好（家长是主动的）
- **GDPR**：parent_email 字段遵循 GDPR + 提供取消订阅
- **中国数据**：如果中国家长，需考虑《个人信息保护法》——家长邮件不存储在墙外可能更稳
- **邮件鉴权**：parent_email_subscribed 字段允许家长任何时候取消

---

## Marketing 维度

家长报告**本身就是营销材料**：

- 第一封发出后，家长**很可能截图发到家长群**
- "晚饭桌问题"是家长群最容易传播的 format（具体、有趣、家长会用）
- 唤醒邮件读起来像**真朋友写的**，不是机器人——会被分享

→ 这一个功能 = 推荐裂变 + 留存 + 续费 三合一

---

## 我的判断

**Phase B1（按钮 UI + parent_email 字段）现在就做**——~2-3 小时，立竿见影。

**Phase B2-B4（email 系统）我建议这一周内推完**——10-12 小时分散在 2-3 个工作 session。一旦 ship，**每周都有自动家长触达**。

**Phase C 同步推**——narrative 密度拓展给所有 Topic 立 standard。

**Phase D 下个 Topic 等 C 完成后**——确保有完整模板再批量。

确认按这个排期跑吗？我现在开始 Phase B1。
