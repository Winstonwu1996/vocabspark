# Codex 审计：修复"猜错新词→error→反复重学"（数据流失/重复学习根因）

## 背景（真实用户实测）
chompcloud（user d3906a86…）反馈：今天学了 ~30 个词，系统只认 ~9 个，且把"已学过的词又让学一遍"。

线上数据排查结论（Supabase 实查）：
- version 1196 正常增长、wsm 750 / xp 22805 都在涨 → **不是同步问题、不是数据丢失**。
- wordInput 零重复（12482 全 distinct）→ 与近期 sync 第三批去重改动无关（对该用户 no-op）。
- 出问题代码行 `git blame` = 2026-04-21，**一个多月前就存在**。

## 根因
学习流程 `goNextWord`（[pages/vocab.js](../pages/vocab.js)）：
```js
if (guessCorrect === true)  → "mastered"
else if (guessCorrect === false) → "error"   // ★ 新词猜错被标 error
else → "learning"
```
- 新词第一次本就不该会，猜错是正常的，却被标 `"error"`。
- `startLearning`（原 5126）`!s || unlearned || error` → error 词被当未学**重新进新词学习** → 猜错的新词无限回收。
- 叠加陷阱：`shouldUpdateStatus = !s || unlearned || skipped` → 一旦 error，之后**猜对也升不回 mastered**（实测 `unfavorable` guessCorrect=true 仍卡 error）。
- 回收的 error 词 `firstLearnedAt` 已存在 → 不再 `consumeNewWordQuota` → 不计入"今日新学" → "学了30只认9"。

数据佐证：当前 5 个 error 词（tenacious/toast/unfathomable/unfavorable/unfortunate）全部 `guessCorrect:false`（unfavorable 例外=true 但卡死）。

## 修复（综合，2 处）
### (1) 新词猜错/跳过猜词 → "learning"，不再 "error"
```js
if (guessCorrect === true) updateManualWordStatus(currentWord, "mastered");
else updateManualWordStatus(currentWord, "learning");
```
`"error"` 只保留给**复习时 forgot** 的词（review 的 `forgot→error` 映射 6038/6505 **不变**）。

### (2) startLearning 新词池只挑 unlearned/null，剔除 error
```js
var unlearned = rawWords.filter(w => { var s = wordStatusMap[w]; return !s || s === "unlearned"; });
```
error（复习忘记）归**深度复习**处理（deepPool 5637 `s==="error"` 不变，且 deep review `remembered→mastered` 可恢复 → 单向陷阱随之解除）。

## 请重点验证
1. **"error" 语义收敛是否完整**：我核对的 error 产出点 = 此 bug(5395) + review forgot(6038/6505) + 手动批量🔴(7415)；**无 LLM-失败→wordStatusMap=error 的遗留路径**（5123 注释提的是历史行为）。故移除 startLearning 的 error 纳入安全。请独立复核有没有遗漏的 error 产出点会因此被"困住"。
2. **error 词仍可被复习/恢复**：剔除出新词学习后，error 词仍进 deepPool(5637)/focus(5957,6082)，deep review remembered→mastered 能恢复。确认没有"error 词从此无处可达"的死角。
3. **不影响 mastered/learning 不回退**：`shouldUpdateStatus` 仅对 unlearned/skipped/null 生效（保护已 mastered/learning 不被新词流程降级），此次未改该判定。确认。
4. **今日新学计数**：`consumeNewWordQuota` 在 `isFirstLearnToday` 时触发（status 分支之前），与本次改动无耦合；修复后用户不再被回收旧词占用 session → 计数自然回归真实。确认无副作用。
5. **跳过猜词 vs 猜错**：现都 → learning。是否需要区分（猜错的给更强复习）？我倾向不区分（reviewWordData 已记 guessCorrect，SRS 可后续利用），但想听你判断。

## 数据清理（部署后单独执行，不在本 commit）
chompcloud 5 个卡住 error 词：guessCorrect=true → mastered，其余 → learning。用 `jsonb_set` 只改这 5 个 key + version+1（不整块覆盖，避免与在线用户竞态；客户端 rank 合并 mastered/learning>error 会保住清理结果）。**先部署代码再清数据**（否则线上旧代码会把它们重新标 error）。

## 测试
- `npm run build`：通过。
- 注：学习状态判定是 React 运行时（goNextWord 内联），纯函数测不到；靠代码审查 + 线上数据已确证根因。如你认为值得，可建议把状态判定抽成纯函数补单测（scope 评估）。

## 请给结论
两处修复的 go/no-go + 数据清理方案是否认可 + 是否需要抽纯函数补测。
