# Codex 审计：Step 2 — 自动去重 + 退役排查按钮 + 废 index<=idx

## 背景
你审 sync UX 重构时建议：Step 1（同步徽章）单独部署、Step 2 单独走。Step 1 已部署（含你指出的 idle 文案修正 + 老用户用云端 updatedAt 初始化 lastSyncAt）。现在 Step 2 单独分支 `sync-autodedup`（基于含 Step 1 的新 main），请审。**不改代码出结论。**

目标：把为排查 chompcloud 临时加的"云端恢复""去重词库"按钮退役、改自动处理，用户零理解成本。

## 改动

### (a) 废掉 `getAutoWordStatus` 的 `index <= idx`（行为变化，重点）
- 旧：无 manual 状态时 `index <= idx ? "learning" : "unlearned"`。`index` 是 `parseWordsFromInput(wordInput)` 位置，`idx` 是 `wordList`（学习 session 列表）指针——两个不同数组 index 混用，本就不准；去重 wordInput 会让位置错位、把没学的词误显示 learning。
- 新：`return learned.includes(word) ? "learning" : "unlearned"`（[pages/vocab.js](../pages/vocab.js) `getAutoWordStatus`）。
- 同步改词表行 `learnedWord = s !== "unlearned"`（s = row.status）。
- 依据：学完的词都写 `wordStatusMap`（`getWordStatus` 优先 manual 分支，不到此函数）；`learned` 在学习完成 setLearned 累积。

### (b) 守卫改按 distinct 词数（[lib/progressMergePolicy.js](../lib/progressMergePolicy.js) `applyProgressGuards`）
- 旧 `iWi.length < cWi.length`（字符长度）→ 纯去重被误拦。
- 新 `countDistinctWordsForGuard(iWi) < countDistinctWordsForGuard(cWi)`：纯去重（distinct 不变）放行；真删词（distinct 减少）仍需 intent。

### (c) 自动去重 wordInput（`_dedupeWordInputStr` = `canonicalizeProgress` dedupe）
- 加载（`_applyCloudData` / mount loadSave / import queue）+ 上传 + 预设导入 时 stable dedupe（保留首次出现 + 原始大小写）。
- textarea onChange 不去重（不打断输入）。

### (d) 移除"云端恢复" + "去重词库"按钮及面板（保留"重置进度"）
- 云端恢复：作用已被 recency 合并 + 死锁修复覆盖。
- 去重词库：被 (c) 替代。
- 已确认无 helpTip cloud-restore/dedup-words 残留引用。

## 请重点验证你上轮列的 4 点
1. **已学词状态不回退**：废 index<=idx 改 learned-only 后，已学词（有 wordStatusMap）走 manual 分支不受影响；无状态词显示是否合理（没学过=unlearned 是更准的）。有无场景导致已学词显示退化？
2. **session 的 wordList / idx 不被去重打乱**：去重只改 wordInput（textarea 词库），不碰 `session.wordList`/`idx`（学习流程独立数组）。确认去重不影响正在进行的学习 session。
3. **reviewWordData / wordStatusMap 按 word key 保留**：去重只动 wordInput 字符串，reviewWordData/wordStatusMap 是 word-keyed dict，不受影响。确认。
4. **去重不误触发 wordInput shrink 保护**：守卫已改 distinct 比较，纯去重 distinct 不变 → 放行。确认 (b) 正确，且自动去重不会被服务端守卫拦/被 mergeStates 取较长还原。

另外：
5. 移除按钮无残留引用、UI 无悬挂面板。
6. go/no-go（合并部署）。

## 测试
- `node scripts/test-progress-merge-policy.mjs`：78/78（含 distinct 守卫 case：纯去重放行 / 真删词拦 / intent 放行）
- `node scripts/test-sync-api.mjs`：14/14
- `node scripts/verify-sync-realdata.mjs`：12/12
- `npm run build`：通过
- 注：状态判定 + 去重时机是 React 运行时，纯函数测不到；建议部署后目测词表状态显示 + chompcloud 自动去重生效（13249→去重后）。

## 范围
- 分支 `sync-autodedup`，相对 main 仅这一个 feat commit（Step 2）。
- 仍未做（第三批余项）：mergeStates 层 dedupe、getDailyPlan/startLearning/startScreening 下游 distinct（但加载已去重，影响小）、可观测性 breadcrumb、残余 P2/P3。
