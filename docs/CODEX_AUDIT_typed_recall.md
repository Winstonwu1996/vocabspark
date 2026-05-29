# Codex 审计：手填中文回忆测试（typed recall，复习阶段，零 LLM）

## 背景
创始人女儿反馈：现在的选词/词形/谐音题（recognition）可以"凭感觉推理"选对，不需要真记住含义。需要一个 **production（主动产出）**测试：给英文 → 手填中文，空输入框逼出真实回忆。

**方向（创始人拍板）**：手填 + 自评（**零 LLM**）· **只复习阶段 + 重点词**。
- 不用 LLM 批改的理由：中文近义词太多（抗毒素/解毒剂/中和毒素的物质），自动判分要么误判（打击孩子）要么得调 LLM——加重限流/延迟/抽风，正是这周一直在修的几个 bug 的来源。
- 本地已存标准释义（reviewWordData[w].meaning）→ 揭晓免费瞬时离线。
- 流程：先手打中文（强制产出）→ 揭晓时"你写的 ↔ 标准释义"并排 → 自评。先打字再揭晓 = 答案锁定后才看参考，没法骗自己；12 岁判断"抓没抓住意思"可靠（Anki 模型）。

## 实现

### lib/typedRecall.js（新纯函数）
- `hasUsableMeaning(meaning)`：释义是否真实可用（非空、非 3 种占位文案、含中文字符）。集中了原本在 vocab.js 内联 3 处的"释义是否就绪"判断。
- `shouldRequireTypedRecall(item)`：有可用释义 → 走手填；无释义 → 回退旧"翻转查看"闪卡（没标准答案没法对照）。
- `normalizeTypedAnswer` / `hasTypedAnswer`：手填输入归一化 + 非空判断（仅显示/门控用，不参与判分）。

### pages/vocab.js — `quick_review` 屏
- 新 state `quickReviewTyped`，在 `startQuickReview` + `markQuickReview`-next 处复位（与 `quickReviewFlipped` 同生命周期）。
- 渲染分两条路径：
  - **typed 模式**（`shouldRequireTypedRecall(qr)` 真）：
    - 未揭晓：文本输入框 + 「对答案 👆」（空时禁用）+「想不起，直接看答案 →」逃生口（清空 typed 直接揭晓，自评走 forgot/fuzzy）。Enter 也可提交。
    - 已揭晓：「你写的 ↔ 参考释义」并排卡 + 自评按钮。
  - **回退模式**（无可用释义）：保留原「翻转查看」闪卡 + 揭晓 + 自评。
- 自评按钮（🟢彻底掌握/🟡仍不确定/🔴面临易错）抽成共用块 `qrSelfGradeButtons`，两条路径复用。
- **`markQuickReview` 自评逻辑零改动**——typed 答案只用于展示对照，不改 SRS 判分。

## 请重点验证
1. **自评逻辑没被动到**：`markQuickReview`（SRS 升降级 / reviewLevel / nextReviewDate / status 映射）完全没改，typed 答案不进 SRS 计算。确认。
2. **typed 答案不持久化、不进 sync**：`quickReviewTyped` 是纯 UI state，提交后不写 reviewWordData、不进 progress_data。确认没有意外把用户手打内容塞进同步数据（避免 PII / 数据膨胀）。
3. **回退路径完整**：无释义的词（占位文案 / 纯英文 / 缺字段）走旧闪卡，行为跟改动前一致。`hasUsableMeaning` 的占位文案列表（3 条）与 vocab.js 里实际用到的占位是否一致？有没有漏的占位会被误判成"真释义"。
4. **state 复位无残留**：切下一词 / 重开复习时 `quickReviewTyped` 复位为空，不会把上一词的答案带到下一词。确认两个复位点（startQuickReview / markQuickReview-next）覆盖所有路径（含"想不起直接看"逃生口走的也是 markQuickReview）。
5. **门槛设计**：MVP 门槛 = 有可用释义就手填（复习队列本身=已学重点词）。创始人提到"只重点词"——我理解复习队列即重点词集合；若将来想进一步收窄到只 focus（🟡🔴）词，typedRecall 里加 status 白名单即可（item 已带 status）。这个 MVP 门槛是否合理，还是该一开始就收窄？
6. **UX 语义**：手填模式下"想不起直接看"逃生口会不会被孩子滥用绕过打字？我保留它是为了不卡住（想不起时硬要打字是惩罚），且它清空 typed → 揭晓后并排显示"（没作答）"+ 自评，仍是诚实的。请评估这个取舍。

## 测试
- `node scripts/test-typed-recall.mjs`：**23/23**（hasUsableMeaning 占位/英文/空/中文边界 + shouldRequireTypedRecall 门控 + normalize/hasTypedAnswer）
- 回归：merge-policy 97/97、learn-status 28/28、guess-sanitize 21/21、morph-fill 19/19、sync-api 14/14
- `npm run build`：通过
- UI 行为（输入 → 对答案 → 并排 → 自评 / 逃生口 / 回退闪卡）靠代码审查 + 部署后女儿真用验证

## 范围
分支 `typed-recall-review`（基于最新 origin/main），相对 origin/main 3 文件 + 本文档：
- `lib/typedRecall.js`（新）
- `scripts/test-typed-recall.mjs`（新）
- `pages/vocab.js`（quick_review 屏 + state + import）
- `docs/CODEX_AUDIT_typed_recall.md`（本文档）

不动 sync/auth/storage/守卫/学习流/markQuickReview 判分。零 LLM、零 DB 写入。

## 请给结论
落实是否到位（重点 #1 自评零改动、#2 typed 不进 sync、#3 占位列表完整性）+ 整体合并部署 go/no-go。
