# Codex 审计：词形辨析（morph_fill）题闭眼选 bug

## 线上事故
chompcloud 截图：词形辨析题 `antitoxin`：
- 标题：`antitoxin` + 定义 `a substance that stops the effect of a poison in the body` + 中文 `抗毒素`
- 「🧬 词根拆解」卡（题前）：`anti- (对抗) + -tox- (毒) + -in (名词后缀，指物质) → 对抗毒的物质 = 抗毒素`
- scenario（中文画像化）：`Willow 昨天和薛薛视频时...Willow 开玩笑说幸好你没遇到需要打 antitoxin 的情况——但下周科学课 quiz 有道题让她卡住了。`
- sentence（英文填空）：`To neutralize the snake venom..., the scientist urgently needed an ___ that could bind to the poison molecules.`
- options：A `antitoxin` ✓ / B `antitoxic` / C `antitoxically` / D `antitoxinate`

学生在见到选项之前**已经被告知答案 3 次**（标题 + morph 卡 + scenario 中文 verbatim），整道题闭眼选 A、无教学意义。用户原话："Bug 又出现，单词和选项一致，闭眼选"。

## 跟之前 guess sanitize 的区别
之前 `lib/guessSanitize.js` 修的是 **guess 阶段**的题：4 个选项是同义干扰项，目标词不该出现在 options 里（出现 = 送分题 + 偶尔伴随 `(this is correct)` 泄题）。

这次是 **teach 阶段后**的 **morph_fill 词根填空**：4 个选项都是目标词的同根词形，正解 IS 目标词本身（这是题型本意——"哪个 POS 形式适合这个句子"）。问题不在 options，而在**题前剧透**（morph 卡 + scenario 把答案给露了）。两个 bug 是不同题型、不同修法。

## 修复（三道防线）

### (1) Prompt 强化：`buildMorphFillPrompt` 加硬约束
[pages/vocab.js](../pages/vocab.js) ~line 881。新增「❗❗ 严禁泄答案」段，4 条：
1. scenario 严禁包含目标词的英文 verbatim（含大小写变体）
2. scenario 严禁包含目标词的中文翻译/含义（如目标词 antitoxin → 不能写"打抗毒素"）
3. scenario 用上位概念/间接描述（"她需要一种能中和毒素的物质"，不是"她需要打 antitoxin"）
4. sentence 留空格 `___`，周围必须中性英文（不能 collocation 暗示）

示例（comprehend 题）下方加注解强调"上面 scenario 中没有 comprehend 这个词、也没有'理解/搞懂'等直接翻译"——把合规示范说透。

### (2) 渲染顺序：morph 卡片从题前移到 submitted 后 explanation
[pages/vocab.js](../pages/vocab.js) `MorphFillGame` (~line 2175)。
- 之前：题前显示 `🧬 词根拆解` 卡 + scenario + sentence + options。
- 现在：题前只显示 scenario + sentence + options；morph 卡片移到 `submitted && ...` 解析块里，跟 explanation 一起展示。
- 顶部副标题改为「读场景 + 句子，选对的词形填空（提交后看词根拆解）」明确流程。

这一改单独就能堵住绝大部分泄题（即使 LLM 还有点小瑕疵，学生在答题时也看不到词根分解了）。

### (3) 客户端兜底校验：`lib/morphFillSanitize.js`（新）+ 重试链
新纯函数：
- `sceneContainsWord(scenario, word)`：词边界检查（不让 antitoxinate 误命中 antitoxin），大小写不敏感，含简单屈折（+s/+ed/+ing），短词 <3 char 跳过避免误伤。**有意保留保守边界**：不处理辅音 doubling（run→running），因为 LLM 泄题主要泄原形，复杂屈折漏判可接受、误报反而更糟。
- `checkMorphFill(data, word)`：scenario 含目标词 → `{leaked:true, reason:"scenario_contains_target_word"}`；options 结构残缺 → `{leaked:true, reason:"options_missing_X"}`。

接入点 [pages/vocab.js loadBatch spectrum 拉取处](../pages/vocab.js) (~line 4848)：原来 `then(raw => dataCache.current[word].spectrum = tryJSON(raw))` 一次性写入。改为 `doSpectrumAttempt(2)` 重试链：
- 解析后若 `type === "morph_fill"` 跑一遍 `checkMorphFill`。
- 命中 leaked + 还有重试次数 → 等 800ms 重新调 LLM。
- 重试耗尽仍 leaked → **丢弃 spectrum（设 null）**，让用户跳过这关 morph 题直接进 next word。理由：给学生看泄题题（闭眼选）比跳过该关 worse。

与 guess 重试同一种模式（`doGuessAttempt` 也是这个套路）。

## 请重点验证
1. **Prompt 加约束不会影响 morph_fill 题的整体生成质量**：扩出来的硬约束 + 示例注解，会不会让 LLM 出错率上升（即使无泄题，但题不通顺）？我的判断：约束聚焦 scenario 与 sentence 措辞，options/answer 不动；提高 LLM "重新写场景"的难度但不影响题型本意。
2. **渲染顺序改动的语义对齐**：morph 卡片现在只在答题后展示，老用户首次看到这个新顺序会不会觉得"不告诉我词根就让我选？"——副标题已经预告"提交后看词根拆解"，应该够。请复核 UX 语义。
3. **`sceneContainsWord` 词边界正确性**：注意 antitoxinate 不该命中 antitoxin（已加测试覆盖），但 antitoxins 应该命中（也加了测试）。还有别的边界情况漏吗？
4. **重试耗尽时丢 spectrum 的取舍**：耗尽（连 2 次 LLM 都泄题）就跳过 morph 关。会不会被滥用造成学生少了一道学习题？我的判断：泄题题没学习价值（闭眼选），跳过更诚实。但请复核——是否该改成"fallback 到另一种题型（如 mnemonic_fill）"而不是直接跳？
5. **没碰别的题型**：mnemonic_fill / gradient_choice / collocation_fill / context_choice 都没改。确认没有同类问题（其它题型的 prompt + 渲染我没审）——是否需要顺手 audit？

## 测试
- `node scripts/test-morph-fill-sanitize.mjs`：**19/19**（含线上 antitoxin case 复现 + 词边界 + 辅音 doubling 保守边界）
- 回归：merge-policy 97/97、sync-api 14/14、learn-status 28/28、guess-sanitize 21/21、auth-userid 14/14、realdata 11/11
- `npm run build`：通过
- 新行为靠代码审查 + 部署后让 chompcloud 再学几个词验证（不再看到 scenario 里出现目标词；morph 拆解只在答题后展示）

## 范围
分支 `fix-morph-fill-leak`（基于最新 origin/main），相对 origin/main 4 个文件：
- `pages/vocab.js`：prompt + render + spectrum 重试
- `lib/morphFillSanitize.js`：新纯函数
- `scripts/test-morph-fill-sanitize.mjs`：新测试
- `docs/CODEX_AUDIT_morph_fill_leak.md`：本文档

不动 sync/auth/storage/守卫/guess 任何路径。

## 请给结论
3 处修是否落实到位（重点 #2 渲染语义、#4 fallback 取舍）+ 整体合并部署 go/no-go。
