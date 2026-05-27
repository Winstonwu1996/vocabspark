# Codex 闭环复核 prompt — History 会员体系 v1.2(必改落地检查 only)

你是独立代码审核员。这是 **v1.2 闭环复核**,不是重新审计,也不是新一轮挑刺。**唯一问题**:commit `e3a6f65` 是否真的把上轮 v1.1 delta 复核给出的 **6 必改 + 4 小歧义**实质落到文档,使项目可以进入 Step 0A 实施。

不要:
- 重审 tier 矩阵 / 8 门白名单 / 价位等 v1/v1.1 已通过的设计决定
- 提新的 P0 / P1 / 改造建议(除非是 v1.2 改动**引入**的全新结构性问题)
- 重新讨论 6 天 vs 9 天 vs 12 天估时

要做的就是逐条核对:**「上轮我说要改 X,v1.2 真改了吗,改对了吗」**。

## 审核范围(单 commit diff)

```bash
git diff a177a65..e3a6f65 -- docs/HISTORY_MEMBERSHIP_PLAN.md
```

辅助参考(只读,验证 v1.2 引用的代码符号 / 路径是否存在):
- `lib/history-storage.js` — `saveAll()` / `bridgeReviewToVocab()` / `learningReceipts`
- `lib/progressMergePolicy.js` — 字段允许 list 现状
- `lib/history-runtime.js` — `effectiveTurns` / step engine
- `components/AtlasLabPage.js` — `setEmbedUrl()` 位置
- `pages/history/[topicId].js` — mount effect / `conversationLog`

## 6 必改逐条核对(请逐项答 landed / partially landed / not landed)

### M1 — §9 Step 0 拆 0A / 0B-gate / 0B
**上轮要求**:vocab-only 抽离 + 观察 ≥3 天 + history 接入,回归即 revert 写进**实施步骤**(不是只在风险章)。
**v1.2 §9 实施表**(查 Step 0A / 0B-gate / 0B 三行)。
判定要点:
- 是否拆成独立 3 行进入工程清单(不是合并在一行写注释)
- 0A vocab 抽离是否标了独立估时 + 独立 ship 节点
- 0B-gate 是否标为「阻断 buffer」非开发工作
- 回归即 revert 是否明确写「history sync 不上线 + 配额降级到仅本地」
- §1「注册即同步」承诺是否在 v1.2 §11 下一步条目明示「revert 时必须从 /plan + Upgrade modal + landing page 全部移除」

→ landed / partially landed / not landed + 1 句理由

### M2 — §6 quota merge + Sidekick eventIds
**上轮要求**:`dailyLensUsage.usedLensIds` 同日 union;Sidekick 不用 `{date,count}` 改事件 ID 列表 / 等价去重结构。
**v1.2 §6 Storage 结构 + Quota merge 规则**。
判定要点:
- Sidekick 是否真的改 `eventIds: []`(不是仍 `count`)
- `mergeDailyQuota` 伪代码是否覆盖「同日 union / 跨日取较新 date」两个分支
- 是否点名 `lib/progressMergePolicy.js` 需新增字段允许 list(§9 Step 0B 应有)
- `eventIds` 写入时机是否明确「每次 Sidekick 调用前生成 uuid」(不是事后写,事后写会丢)

→ landed / partially landed / not landed + 1 句理由

### M3 — §6 multi-tab / 显式接受 / 游客→注册继承
**上轮要求**:多 tab local lock/BroadcastChannel、游客清 localStorage 改时钟显式接受、游客注册时当天 quota union 继承。
**v1.2 §6 Multi-tab 防双扣 + 显式接受的绕过路径 + 游客→注册当天配额继承**。
判定要点:
- `navigator.locks` + 不支持 fallback CAS + 跨 tab `BroadcastChannel` 三层是否都写到
- 「游客清 storage / 改时钟」是否明确写「接受」(不是只「容忍」 — 容忍是默认,接受是产品决策)
- 注册用户改时钟绕过是否说清「sync pull 拿云端 dailyLensUsage,merge 取较新 date 拒旧客户端重置」 — 这是 §6 «显式接受的绕过路径» 「注册用户」分支
- 游客→注册继承是否点明「拉云端 + 与本地游客 union + 推回」三步 + 「用 1 视角注册后剩 2 视角」具体例子

→ landed / partially landed / not landed + 1 句理由

### M4 — §6 「第一次有效对话」硬定义
**上轮要求**:= 第一条非 fallback AI bubble 写入 `conversationLog`,或用户首次有效输入,先到者扣一次。
**v1.2 §6 扣减时机**。
判定要点:
- 二条件是否都列出 + 「先到者扣一次」明示
- 「非 fallback」是否给判定字段(应是 `bubble.fallback !== true` 或等价)
- 「有效输入」是否给判定标准(`expectsRealAnswer=true` 节点 + `input.trim().length > 0` + 非纯 emoji)
- 「秒退误扣」是否明示「0.5s 内退出 + 无 bubble + 无 input → 不扣」

→ landed / partially landed / not landed + 1 句理由

### M5 — §7 / §8 / §9 Step 4 Atlas iframe gate
**上轮要求**:父页 AtlasLabPage 在 `setEmbedUrl()` 前 gate;iframe 子页 mount 后二次 gate;`loading` 只 skeleton,不创建播放器。
**v1.2 §7 Atlas iframe gate + §8 Atlas Lab chip + 单课页 + §9 Step 4**。
判定要点:
- 父页路径是否精确写「在 `setEmbedUrl()` 前」「绝不调 `setEmbedUrl()` 创建 iframe」
- 子页二次 gate 是否明确「独立调 `useUserTier()` + `canAccessTopic` 防直链绕父页」
- 直链 `/history/<HS-course>` 是否单独说明(不是只「同理」)
- `loading` 期是否在 §7 状态表 + §8 + §9 Step 4 三处都强调「绝不创建播放器/iframe」
- §8「永远不能出现 iframe 已加载 Pro 课内容,事后才发现 tier 不够」是否写硬

→ landed / partially landed / not landed + 1 句理由

### M6 — §7 `active → free/guest/error` 状态切换
**上轮要求**:若当前 topic/lens 超出新 tier,立刻暂停后续推进 + 弹 upgrade;已生成 transcript view-only 但不能继续生成 Pro 内容。
**v1.2 §7 active → free/guest/error 状态切换处理**。
判定要点:
- 检测机制是否给(Supabase realtime 或 30s 轮询)
- 「正在学 transcript」三条:view-only 保留 / `expectsRealAnswer` 输入禁用 / non-dismissable Upgrade modal — 是否都写到
- 「`history-runtime` 收到 `tierLost` 信号」这个 hook 是否在 §9 Step 1 hook 实现注明 — 查 §9 Step 1 是否写「`active → free/guest/error` 监听 + tierLost 信号」
- `error` 是否单独说明「不踢出,自动重试 3 次」(避免暂态网络抖动误踢付费用户)

→ landed / partially landed / not landed + 1 句理由

## 4 小歧义逐条核对

### A1 — §7 「4 状态」→「5 状态」
查 §7 章节首行。是否真的写 **5 状态**(`loading/active/free/guest/error` 全数)。  
→ landed / not landed

### A2 — §10 D 改为「vocab resolver 接受 bridgeQueue」
查 §10 D。是否完全删除「点击直接加入主词单」+ 新文案明确「history 不直接写 `wordInput`」。  
→ landed / not landed

### A3 — §10 G 用 `learningReceipts[topicId][lensId]` lens-level grandfather
查 §10 G。是否:
- 旧「`hasCompletedAnyLens` topic-level」表述完全消失
- 新规则明确 lens-level(`hasCompletedLens(topicId, lensId)`)
- 明示「不能用 `completedTopics` 整门 grandfather」  
→ landed / not landed

### A4 — HS preview 走 truncated `effectiveTurns` 不计时器
查 §3 + §9 Step 8。是否:
- 「end-of-preview 强制升级 Pro」措辞消失
- 新方案明确「预生成 `previewStoryboards/cold-war-1962-preview.js`」+ 「走标准 runtime → `allDone → CompletionScreen`」
- 显式写「不用计时器中途强切 runtime」  
→ landed / not landed

## 输出格式(严格遵守)

```md
## VERDICT
[ ] Go to Step 0A  (all 6 + 4 landed; no new structural issues introduced)
[ ] Go with cosmetic tightening (1-2 measure not 100% landed but not blocking; list under "Pre-Step-0A Tightening")
[ ] No-Go  (≥1 必改 not landed; or v1.2 改动引入新 P0)

## 6 必改 Landing Check
M1: landed / partially landed / not landed — <1 句>
M2: landed / partially landed / not landed — <1 句>
M3: landed / partially landed / not landed — <1 句>
M4: landed / partially landed / not landed — <1 句>
M5: landed / partially landed / not landed — <1 句>
M6: landed / partially landed / not landed — <1 句>

## 4 小歧义 Landing Check
A1: landed / not landed
A2: landed / not landed
A3: landed / not landed
A4: landed / not landed

## v1.2 改动引入的新结构性问题(if any)
- ...(只列 v1.1 → v1.2 新增内容里的问题,不要倒车追究 v1 v1.1 已通过的点)

## Pre-Step-0A Tightening(if Go with cosmetic)
- §X: 当前措辞「<原文>」→ 建议改成「<更紧措辞>」
- ...
```

## 关键提示

- 这是 closure check,**判定门槛比上轮 delta 复核更高**:只要 6 必改全 landed + 4 歧义全 landed + 无新结构性问题 → 必须 Go to Step 0A,不能因「还可以再写更硬」降到 cosmetic
- 「partially landed」必须给出**确定的「补这句话就 landed」**句子,不接受泛泛
- 「not landed」必须**精确引用 v1.2 文档原文证明没改到**,不接受主观印象
- 若你想 push 任何 v1.1 已通过的设计点 → 请抑制,本轮 scope 是 closure,不是 re-audit
