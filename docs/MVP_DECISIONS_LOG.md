# MVP 自主决策日志（待 Winston 确认）

_Created: 2026-04-25 凌晨, Winston 授权全权推进至 MVP 完成_
_他醒后逐一 review_

每条决策都标注：
- **决策内容**
- **替代方案**
- **我选这个的原因**
- **Winston 醒后改的话需要的工作量**

---

## 📋 决策清单

### D1. 文件组织 — 内联 vs 拆组件
**决策**：MVP 阶段所有 UI 组件**内联**在 `pages/history.js` 单文件（仿 `pages/vocab.js` 风格）。
**替代**：拆 `components/HistoryConversation.js` / `HistoryGeography.js` / `HistoryMasteryGate.js`。
**原因**：(1) 与项目现有约定一致（vocab/writing 都是单文件 SPA）；(2) MVP 阶段调试改动方便，不用跨文件跳；(3) 组件抽离等到第二个 Topic 时再做有意义。
**改回成本**：低 — 拆组件是机械工作。

### D2. Geography Section 位置
**决策**：固定在页面顶部，**始终可见但默认折叠**（只显示 World Orient 迷你框 + Topic title）。Turn 7 自动展开。用户可随时点击 Re-展开/折叠。
**替代**：(a) Turn 7 才显示；(b) 永远展开占大屏；(c) 弹窗/抽屉。
**原因**：13 岁孩子的耐心 — 让她随时能看到地理参考；但默认折叠避免干扰对话流。Turn 7 自动展开是教学时机。
**改回成本**：低。

### D3. 对话气泡布局
**决策**：AI 气泡居左（暖羊皮纸色），用户气泡居右（accent 橙色）。每个气泡有头像（AI 用 🦉 猫头鹰；用户用 PetAvatar 当前心情 — 跟 vocab 一致）。
**替代**：(a) 像 ChatGPT 那种全宽 alternating；(b) 都居左统一栏。
**原因**：跟孩子熟悉的微信/iMessage 一致，左右双栏让对话感更强；用 PetAvatar 复用现有宠物经济视觉。
**改回成本**：低。

### D4. Source Card（Clause 39 / 40 显示）
**决策**：Turn 8 时**插入一张大卡片**显示原文 + 简化英文 + 中文 gloss。卡片在对话流中占据 1 个气泡的位置（不是模态）。鼠标 hover/tap 关键英文词显示词根+中文气泡。
**替代**：模态弹窗 / 抽屉式底部弹起。
**原因**：让史料感觉是对话的一部分而不是"打断"。卡片有羊皮纸装饰让她感受到"800 年的真东西"的仪式感。
**改回成本**：低。

### D5. Mastery Gate 触发位置
**决策**：Turn 14 完成后，**底部出现"开始记忆考核"大按钮**，不是自动跳。她按了才进 mastery gate（spelling + definition + application 三关）。
**替代**：(a) Turn 14 自动跳 gate；(b) 完全可跳过；(c) 强制不能退出。
**原因**：(a) 让她有心理准备，不被突袭；(c) 严格但不残忍。Winston 已拍板严格制 + 即时重试不允许跳过。
**改回成本**：低。

### D6. Spelling 测试 UI
**决策**：每题独立一屏（不批量），输入框 + 提交 + 即时反馈（对/错 + 正确答案）。错了 5 秒后自动给下一题，但记入"错过的"待重测。
**替代**：(a) 全部 6 题一屏 (b) 像 vocab 的快筛 5 选 1 (c) 拖拽拼字
**原因**：拼写要专注 — 一屏一题最少干扰。即时反馈是 13 岁孩子的反馈感。
**改回成本**：中（如果改全部一屏 UI 要重做）。

### D7. Definition 测试 — AI 评估
**决策**：让 AI 用 lenient 评分 — 抓住核心意思就给过，不要求完美英文。具体打分由 AI 在 streaming response 里给出。
**替代**：(a) 严格关键词匹配 (b) 多选题 (c) 不评分让她自己看正确答案。
**原因**：跟产品哲学一致 — "AI 共情，不是老师下结论"。lenient 评分让 ESL 孩子不会被语法卡死。
**改回成本**：低（改 prompt 即可）。

### D8. Application 题 — 1 题随机
**决策**：每次 Topic 完成只考 1 道 application（共 3 道题库）。不强制全做。
**替代**：(a) 3 道全做 (b) 用户选难度。
**原因**：避免审美疲劳；3 道随机抽 1 题保证她下次重学时是新题。
**改回成本**：低。

### D9. 深度可选 checks（teach-back / counterfactual / geo-inference）
**决策**：MVP 阶段**全部跳过**，留 α 阶段加。MVP 只做必过 3 项。
**替代**：MVP 加 1 项可选（最简单的 teach-back）。
**原因**：MVP 范围控制；这 3 项会显著增加 AI 评估复杂度。先把端到端流程跑通再加深度。
**改回成本**：中。

### D10. XP 经济 — 完整规则 vs 简化
**决策**：MVP 阶段**简化**：基础 100 XP（难度 3）+ 必过 gate 完成给 75 XP 一次性 = 175 XP。**不实施消费侧**（中文助词 XP 兑换）。
**替代**：完整 §9.3 公式（含 1.5x noChineseHelp / 1.3x onePass / 1.1x voice 三个倍率）。
**原因**：消费侧需要"中文助词"按钮 UI + token 化逻辑，工程量大。MVP 先建立 XP 池，消费侧 α 加。
**改回成本**：高（消费侧是大功能）。

### D11. userWorldview — 简化 schema
**决策**：MVP 阶段**实现核心字段**：profile-derived seed + selfDisclosure + reasoningStyle。不做 valueEmphasis / unansweredHooks（需要更复杂的 AI 后处理）。
**替代**：完整 §11.2 数据结构。
**原因**：核心字段已经能让"我记得你"的感觉立起来；其他字段在第 2-3 个 Topic 时再加。
**改回成本**：中。

### D12. 对话历史持久化
**决策**：MVP **localStorage 单 key 存档**：`vocabspark_history_v1`。每完成一个 Topic 写入一份完整 transcript + worldview snapshot。
**替代**：(a) 不持久化（每次新会话）(b) 直接 Supabase。
**原因**：必须持久化（不然 worldview 没法跨 Topic）；Supabase α 再加（按 §8.2 MVP plan）。
**改回成本**：中。

### D13. 视觉风格 — 历史模块 vs Vocab 模块
**决策**：复用现有 `lib/theme.js` 的 C 色板，但 history 模块**多用 `parchment` 暖米色 + `pinFill` 古典印章红 + `pinStroke` 深棕**作为副色调，呼应 SVG 地图风格。
**替代**：完全用 vocab 的色板（accent + teal）。
**原因**：让 history 模块视觉上有自己的"古典感"特征，跟现代感的 vocab 区分；但底层调色板复用避免风格分裂。
**改回成本**：低。

### D14. 移动端适配
**决策**：默认设计目标 mobile（375-414px 宽），桌面端自然放大。地图缩放比例自适应。
**替代**：桌面端优先。
**原因**：13 岁孩子主要用 iPad 或手机，桌面是次要。
**改回成本**：高（要全 UI 重排）。

### D15. AI 回答风格控制
**决策**：System prompt 里明确指令 — "朋友语气，不老师下结论；中文为主，核心英文词嵌入；50-150 字 / turn"。AI 自由发挥但有边界。
**替代**：完全脚本化（用 §6 文案直接回放）。
**原因**：完全脚本化失去了"AI 用她的世界讲历史"的核心价值；纯自由生成又不可控。给指令但让 AI 用 profile 自然写出，是平衡点。
**改回成本**：低（改 prompt 即可）。

### D16. 错误处理 / Fallback
**决策**：AI 调用失败时显示「网络不稳，重试」按钮 + 显示原始 ai_seed 文案作为兜底（这样体验降级但仍可用）。
**替代**：纯重试 / 跳过该轮。
**原因**：13 岁孩子遇到加载失败容易放弃 — 给 fallback 让她仍能继续；但显示的是 ai_seed 不会暴露内部 prompt。
**改回成本**：低。

### D17. Pet 集成
**决策**：MVP 阶段**完成 Topic 时调用 `triggerPetCelebrate`**（已存在的 vocab 系统 API），但**不显示宠物喂养按钮**（消费侧不实施）。
**替代**：完全不接 pet / 完整接入喂养商店。
**原因**：复用现有激励循环（XP 池共享），但避免分散她对历史内容的注意力。
**改回成本**：低。

### D18. 老师 / Toast 提示
**决策**：复用 `setPetToast` 风格（vocab 已有）— 用一只猫头鹰图标 🦉 而不是宠物，做"小博士"角色。
**替代**：用现有 PetAvatar 当 toast 角色。
**原因**：猫头鹰是历史/学问的视觉符号（教育产品惯例）；跟 vocab 的宠物区分，让 history 有自己的"小老师"感。
**改回成本**：低。

### D19. Beta tag
**决策**：BrandNavBar 的 history tab 加 `Beta` 上标（紫色），跟 writing tab 的样式一致。
**替代**：不加 / 加 "Soon" / 加 "α"。
**原因**：让用户知道这是测试版；跟 writing 风格统一。
**改回成本**：低。

### D20. 入口与导航
**决策**：路由 `/history`（裸路径）。从 BrandNavBar 进入。**不动 home 页 hero**，等 α 稳定再上首页。
**替代**：home 页 hero 加 "Try History"。
**原因**：Winston §9 第 6 项已拍板。
**改回成本**：低。

### D21. iOS Safari 视频/音频
**决策**：MVP **不放视频/音频**。BL 那个 90s 动画留 β。
**替代**：嵌入 BL 动画的 iframe。
**原因**：BL 视频要外链 + 移动端体验 spotty + 跑题。MVP 先做对话 + 地图 + 史料三件足够。
**改回成本**：低。

### D22. 数据库迁移
**决策**：MVP **不接 Supabase**（按 §8.2 MVP scope）。所有数据在 localStorage。
**替代**：直接接 Supabase。
**原因**：Winston §9 第 4 项已拍板。
**改回成本**：中。

---

## 🎨 视觉优化清单

### V1. 字体
- AI 文本用 FONT（Inter + 中文 fallback）
- 标题用 FONT_DISPLAY（Fraunces + 中文 fallback）— 给"古典"感
- 史料原文用 monospace 风格 serif（强调"古老文档"）

### V2. 色调
- 页面背景：偏暖的 parchment off-white
- 对话区背景：纯白 card
- AI 气泡：parchment-light 暖米色
- 用户气泡：accent 橙色 with white text
- 史料卡：parchment with 深棕边框 + 古典装饰

### V3. 动画
- 气泡淡入：0.3s opacity + slight Y translate
- 流式文字：character-by-character 显示
- 地图 flip：0.85s cubic-bezier (已实现)
- 完成 Topic 时：confetti effect (复用现有 sfx)

### V4. 装饰元素
- 史料卡角落：手绘卷轴边角装饰 (复用 SVG 库的 corner)
- mastery gate 通过：金色印章 stamp 动画
- 通史脉络挂回：发光线条连接已学 Topic

### V5. 响应式
- < 640px: 单栏布局，地图全宽
- 640-1024px: 单栏 + 边距收紧
- ≥ 1024px: 居中 max-width 880px

---

## 🚧 已知 MVP 限制（α 阶段补）

1. ❌ 语音输入（Web Speech API）
2. ❌ 多 Topic（只有 Magna Carta）
3. ❌ Reading/Vocab/Writing 模块联动
4. ❌ 通史脉络图持久化展示
5. ❌ Seminar 预演独立入口
6. ❌ 中文助词 XP 兑换消费侧
7. ❌ 深度 mastery checks（teach-back / counterfactual / geo-inference）
8. ❌ 时间滑块地图
9. ❌ 跨 Topic 的 callback "我记得你"（需要至少 2 个 Topic）
10. ❌ Family dashboard（按 §9 决策不做）

---

_持续更新中。Winston 醒来后逐项确认。_
