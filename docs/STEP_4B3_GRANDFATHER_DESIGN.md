# Step 4b-3 设计 — grandfather view-only 渲染 + 降级暂停推进

> 送审稿(代码前)。Step 4b 拆 3 子步的第 3 步(最后一步)。
> 前置:4b-1 + 4b-2 已合入 main(`5c4e9f4`),flag off 生产休眠。

## 0. 两个目标

- **(A) grandfather view-only 渲染**:已学过的 lens 永久可见。目前 4b-1 把 `view-only-grandfathered`
  和 `allow` 一样处理(直接进正常对话)。要改成只读呈现 + 「重新学需 Basic/Pro」。
- **(B) active→降级 暂停推进**:用户在 over-tier 课**对话中途** tier 掉档(退订/过期),暂停推进。

## 1. 侦察结论(影响设计的硬事实)

1. **`view-only-grandfathered` 现状**:`[topicId].js` line 948/976 把它和 `allow` 合并 → 进正常对话。
2. **存档结构关键限制**:
   - `learningReceipts[topicId][lensId]` 只存**元数据**(时间戳/source),**不含 transcript**。
   - transcript 存在 `historyData.transcripts[topicId]` —— **只按 topicId 存,不按 lensId**,后学的 lens
     覆盖前一个。**→ 现有数据无法可靠回放「某个具体已学 lens 的原始对话」**(多 lens topic 只剩最后一个)。
3. **降级基建已就绪**:`useUserTier` 每 30s 轮询,`active→free/guest/error` 时置 `tierLost=true`;
   `CourseGate` 每次 access 变化经 `onAccessChange` 上报 → 页面 `gateResult` 更新。但**无人消费** ——
   `advanceTurn`(line 754)无 tier 检查,页面没监听 `gateResult`/`tierLost` 做中途反应。

## 2. 待定 — 决策 1:view-only 渲染深度(核心,受存档限制制约)

- **方案 A(MVP 占位,推荐)**:`view-only-grandfathered` → 进一个**只读占位屏**:
  「✓ 你已学过这个视角」+ lens 标题/简介 + 「重新学需要 Basic/Pro(弹升级)」。**不回放原始对话**。
  - ＋ 零存档改动、零迁移、对所有历史完成记录都成立、诚实(不假装能回放)。
  - － 看不到当时的对话记录。
- **方案 B(真回放,需存档改造)**:把 transcript 改成按 `topicId+lensId` 存,只读渲染 ConversationStream。
  - ＋ 能重看当时对话。
  - － 要改存储 + 迁移;**老完成记录无 lens 级 transcript**(只能对改造后新完成的 lens 生效),体验割裂;
    工作量大,且要再过一遍 sync/存储审计(高风险区)。

**推荐 A**。理由:① 存档现实使 B 对历史数据无效,价值打折;② MVP 优先(CLAUDE.md);③ grandfather 的
核心承诺是「不剥夺已学者的可见性 + 给重学入口」,占位屏已满足;B 可留作后续增强(真有用户要求再做)。

## 3. 待定 — 决策 2:降级暂停推进 UX

中途 tier 掉档,且当前(未完成)lens 变 over-tier(`gateResult.access` 变 `deny`)时:
- **方案 X(拦推进 + 升级 modal,推荐)**:不破坏当前屏,但**拦 `advanceTurn`**(点「下一步」无效)+ 弹一次
  升级 modal(可关,关后停在当前轮,不能再推进)。已完成的 lens 走 grandfather(view-only,不受影响)。
- **方案 Y(硬暂停)**:立即弹**不可关** modal 盖住对话,必须升级/刷新才能动。

**推荐 X**(温和、不惊吓、与「暂停推进」字面一致;硬暂停体验过激)。

## 4. 硬约束(同 4b-1/4b-2,直接定)

- flag-off 字节级不变;view-only / 降级逻辑全部 `ENABLE_HISTORY_PAYWALL` 短路。
- 复用 `computeGateAccess` 输出的 `view-only-grandfathered` / `deny`;不在播放器静态路径引入 membership
  (判定已在懒加载 CourseGate 内,页面只读 `gateResult`)。
- 降级检测复用既有 `gateResult`(已每 30s 更新),**不**新增轮询。

## 5. 决策后实现清单(以 A + X 为例)

1. `[topicId].js`:`gatedEnter`/挂起解析里把 `view-only-grandfathered` 从 `allow` 拆出 → 进新只读分支
   (新 phase `"viewonly"` 或在 intro 显示只读占位 + 重学 CTA→弹升级)。
2. 降级监听:`useEffect` watch `freshGateAccess()`,在 `phase==="conversation"` 且变 `deny` 时置
   `pauseProgression`;`advanceTurn` 开头 `if (pauseProgression) { setShowUpgradeGate(true); return; }`。
3. flag-off 短路;build + 隔离 + Codex 审 + canary(降级 modal、view-only 屏)。

## 6. 验证计划

- Codex gate-only 复审(隔离 worktree)。
- Canary:① 模拟已学 lens → 验只读占位 + 重学弹升级;② 模拟中途降级(gateResult→deny)→ 验拦推进 + modal。
- flag-off:player chunk 零 membership 字节级隔离保持。
