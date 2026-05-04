# New Topic Authoring Checklist

**用法**：起新 Topic 时从头到尾走一遍这个 checklist。每一步打 ✓ 才进下一步。
**机制原则**：每次 Topic 工作 = 完善机制。任何 review 反馈 / 用户实测 fail 必须流回 [`AUTHORING_PIPELINE.md`](../lib/history-narratives/AUTHORING_PIPELINE.md) 第 8 条新规则。

---

## Phase 0 — 选题 + 确定 lens 设计

- [ ] **选题** per AUTHORING_PIPELINE 第 1 步标准（中国课纲不教 + 美国核心 + 家长盲区）
- [ ] **决定 qaTemplate** per 第 2 步（`simple-binary` / `multi-faction` / `long-arc`）
- [ ] **lens 设计**（3 lens 标准 — perpetrator-actor / lonely mediator / receiving-end commoner）：
  - 列出 3 个候选角色
  - 每个角色 1 句 perspective tag
  - 列出至少 1 个跨 lens 的 micro-detail（如红头巾 / 银鞋扣）—— 这是教学最强一击
- [ ] founder approve 选题 + lens 设计

---

## Phase 1 — Narrative kernel 起草

- [ ] **KB 拉相关实体** per 第 3 步 (`npm run kb:fetch` + Wikidata QID 校验)
- [ ] **Opus 起 narrative**（`lib/history-narratives/<topic-id>.md`）per 第 4 步
  - 12 节结构（教材锚 / 一句话 / 舞台 / 主角 / 故事 / 一手史料 / 影响 / DBQ / 同代中国 / historiography / 误解 / 思考问题）
  - §3-§5 必须达到"明朝那些事儿密度"
  - Per AUTHORING_PIPELINE 第 7 条 grep cultural ban 14 词 = 0 hits
- [ ] EN 版 `<topic-id>.en.md` 同步起
- [ ] **Sarah Chen audit**（per 第 6 步 8 维度）
- [ ] 应用 Sarah 修订 → SHIP-WITH-FIXES 通过 → 进 Phase 2

---

## Phase 2 — Lens storyboard 起草（**关键流程：agent 起草 + 前台收紧**）

- [ ] **每个 lens 单独 spawn agent**：
  - Prompt 引用 [`lib/agent-prompts/lens-author.md`](../lib/agent-prompts/lens-author.md) 作为硬约束
  - Agent 写完落盘**不 commit**
- [ ] **前台手动过一遍**（这是 Magna Carta vs Crusades 质量差距的根本）：
  - 跑 `lens-author.md` §IV 自检 grep（cultural ban / 家庭称谓 / voice 标杆 / 3-em-dash 链 / phase 节点数）
  - 读 lens card description 是否符合 §I.H schema（character profile，3-4 句，0 em-dash，不剧透）
  - 读 1-2 个 story 节点 + 1 个 synthesis 节点，手动拆 em-dash 密度过高的句
- [ ] **跑 4-agent review**（per Magna Carta + Crusades + Black Death 流程）：
  - 7thgrader（承受度 + 理解度 + 兴趣度）
  - AP teacher（事实精度 + historiography + DBQ rigor）
  - ESL teacher（Lexile 800-1000 + inline gloss）
  - Chinese teacher（翻译腔 + voice + 文化术语）
- [ ] **应用所有 P0 + 关键 P1**
- [ ] **跨 lens 对位 echo 验证**（如设计了）：
  - 至少 1 处 micro-detail（如红头巾 / 银鞋扣）在 2-3 个 lens 中以不同视角出现
  - meta 节点（N12）4th-wall break 暗示有 micro-detail，不直白告诉

---

## Phase 3 — 注册到 UI（3 处必改）

- [ ] **`lib/history-topics.js`**：
  - 加 `<TOPIC>` 完整元数据 export（参考 `lib/history-topics/_template.js` 模板）
  - 加到 `HISTORY_TOPICS` object
  - `TOPIC_REGISTRY` 数组加 entry：`{ id, available: true, unit, order, narrativeRequired: true }`
  - **必须填**字段（不补会运行时报错）：title / oneLineHook / hssStandard / difficulty / curriculumUnit / year / throughLine / estimatedMinutes / xpRewards / mustMemorize.vocab / mustMemorize.concepts / masteryChecks.required / familyQuestion
- [ ] **`lib/history-storyboards/index.js`**：
  - `import * as <topic>Module from './<topic-id>.js';`
  - 加到 `STORYBOARDS` object
  - 更新顶部进度注释
- [ ] **`pages/history.js` LensSelector**（如有 lens 数 ≥ 2）：
  - 加 `lensIcon` 表 entries（每 lens 一个 emoji）
  - 加 `firstChoiceHint` 表 entry（按戏剧性 / 入门难度选第一推荐 lens）

---

## Phase 4 — 模块加载验证

- [ ] **Syntax check 全过**：
  ```bash
  node --check lib/history-topics.js
  node --check lib/history-storyboards/<topic-id>.js
  node --check lib/history-storyboards/index.js
  node --check pages/history.js
  ```
- [ ] **Module load test 全过**：
  ```bash
  node --input-type=module -e "import('lib/history-storyboards/index.js').then(m => { ... })"
  # 验证: Topic 数 + lens 数 + 节点数 全对
  ```
- [ ] **Topic 元数据完整性检查**：
  ```bash
  node --input-type=module -e "import('lib/history-topics.js').then(m => {
    var t = m.getTopic('<topic-id>');
    console.log('xpRewards:', !!t.xpRewards);
    console.log('mustMemorize.vocab:', t.mustMemorize?.vocab?.length);
    console.log('mustMemorize.concepts:', t.mustMemorize?.concepts?.length);
    console.log('masteryChecks.required:', t.masteryChecks?.required?.length);
    console.log('familyQuestion:', !!t.familyQuestion);
  })"
  ```

---

## Phase 5 — Willow simulator + 实测

- [ ] **`npm run test:willow <topic-id> all`** per 第 9 步
- [ ] 4 persona 平均 ≥ 80% pass
- [ ] **founder 实测 5 分钟**（Anti-Guessing + Voice + UI 流畅度）
- [ ] 任何"我女儿觉得别扭" → 回 Phase 2 修

---

## Phase 6 — Ship

- [ ] **Commit 单一**：
  ```bash
  git add lib/history-narratives/<topic-id>.md \
    lib/history-narratives/<topic-id>.en.md \
    lib/history-storyboards/<topic-id>.js \
    lib/history-storyboards/index.js \
    lib/history-topics.js \
    pages/history.js  # 如有 lensIcon + firstChoiceHint 改动
  
  git commit -m "feat(history): <topic-id> ships — <key insight>"
  git push
  ```
- [ ] **Verify on user's dev server**（HMR 应该自动 reload）
- [ ] 通知 founder + Willow

---

## Phase 7 — **机制完善**（关键！每个 Topic 必走）

> "每次 Topic 工作 = 完善机制" —— Topic 是 reps，机制是 deliverable。

- [ ] **Review fixes 流回规则**：
  - 4-agent review 抓的 P0 是否暴露**新 systemic 错误**（跨 Topic 一致 + 机械可检测）？
  - 如是 → 写进 [`AUTHORING_PIPELINE.md`](../lib/history-narratives/AUTHORING_PIPELINE.md) 第 8 条 + 同步 [`lib/agent-prompts/lens-author.md`](../lib/agent-prompts/lens-author.md) §I
  - 例：5-3 加的 G (em-dash 密度) + H (lens card schema) 就是这种回流
- [ ] **用户实测反馈**（如 founder/Willow/太太）流回规则：
  - 任何"X 之前修过为什么 Y 又出现"—— **不允许** "下次注意"。**必须**写进 PIPELINE 第 8 条
  - 任何"质量比上一个 Topic 弱"—— 找差距点写进规则
- [ ] **流程 gap 流回 checklist**：
  - 任何"漏掉 X 字段导致 runtime error" → 加进 `_template.js` 必填字段注释
  - 任何"漏掉 X 步导致问题" → 加进本 checklist

---

## 规则护城河 — 三层封装

```
┌─────────────────────────────────────────────┐
│  Layer 1: AUTHORING_PIPELINE.md              │  ← 设计哲学 + 12 步流程 + 第 7-8 条硬规则
│  做什么 / 为什么 / 不可妥协的红线              │
├─────────────────────────────────────────────┤
│  Layer 2: lens-author.md                     │  ← Spawn agent 时直接引用的 prompt template
│  agent 必读硬约束 + 起草 brief 模板           │
├─────────────────────────────────────────────┤
│  Layer 3: NEW_TOPIC_CHECKLIST.md (本文件)    │  ← 7 phase 流程清单 + 每 phase 验证步骤
│  机制操作手册 + 所有反馈回流入口              │
└─────────────────────────────────────────────┘
```

**触发回流的 trigger**：
1. 4-agent review 抓到 systemic 错误 → Layer 1 + 2 更新
2. 用户实测发现"修过又出现" → Layer 1 + 2 更新
3. Runtime error / 漏字段 → Layer 3 + `_template.js` 更新
4. 流程 gap → Layer 3 更新

---

**最重要的一句话**（来自 founder 5-4 directive）：
> 后续打磨和测试具体的章节，都是为了完善一个机制。
