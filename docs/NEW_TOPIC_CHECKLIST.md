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

## Phase 3 — 注册到 UI（4 处必改）

- [ ] **`data/atlas/views/<topic>.js`**（5-5 加机制）：
  - 加 `deepLearnEnabled: true` + `deepLearnUrl: '/history?topicId=<topic-id>&from=atlas&atlasId=<atlas-id>'`
  - **不要** hardcode `keyFigures: [...]` ——5-5 起 deepLearn Topic 的 keyFigures 自动从 lens 派生
  - 用注释代替 keyFigures：`// 关键人物自动派生自 lib/history-storyboards/<topic-id>.js 的 lenses object`
  - 这是机制护城河 — 防 atlas 5 角色 vs lens 3 lens 不通信事故（5-5 founder 抓到）
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

## Phase 5.5 — Audio 预生成（5-4 加；5-5 升级 hash check + 纪律）

> ⚠️ **严格纪律**：audio 是 **content-derived static asset**——只在内容 ship-ready
> 时跑。**不能** 在 iteration phase 跑（5-4 第一次跑 Agnolo lens 8/12 后用户提醒：
> "如果后面我们改动了文字，不是白做了吗"）。

**前置硬条件**（必须**全部**满足才跑 audio）：
- [ ] Phase 1 narrative kernel + Sarah audit pass
- [ ] Phase 2 lens 起草 + 4-agent review + **所有 P0 修完**
- [ ] Phase 5 Willow simulator + founder 实测 5 分钟 pass
- [ ] **若 PIPELINE 第 7/8 条加了新规则**——已经 retro-pass 应用（Phase 7.5 纪律）
- [ ] **content lock 决定**——明示"这一版 ship-ready，audio 可生"

### 跑 audio（idempotent — 5-5 加 hash check）

```bash
# 1. lib/audio/voice-map.json 加新角色 → voice 映射
# 2. 跑生成（已有 hash 的节点会 skip；内容变了的会自动重生）
node scripts/generate-audio.mjs --topic <topic-id>
```

**Hash check 机制**（5-5 加）：
- 每个生成的 audio 旁边存一个 `.hash` 文件 = sha256(EN_text + voice_name)
- 重新跑脚本时:
  - hash 匹配 → skip（"已存在 + hash 匹配"）
  - hash 不匹配 → 重生（"内容/voice 变了 → 重生"）
  - 文件不存在 → 生成
- 可选 voice：en-Carter / en-Davis / en-Frank / en-Mike / en-Emma / en-Grace（仅 6 EN voices）
- 跨 Topic voice 重用 OK（用户单 Topic navigate）

时间：M1/M2 约 10-15 分钟 / lens（12 节点 × ~5-6 min）

### 完工后

- [ ] **验证文件**：`public/audio/<topic-id>/<lens-id>/n1.mp3` ~ `n12.mp3` + `.hash` 全部存在
- [ ] **commit `public/audio/<topic-id>/` 进 git**（必跟 ship 一起）

### 内容更新后必做（5-5 纪律）

如果 ship 之后**又改了** lens 内容（任何 P1 fix / retro-pass / typo 修），audio 就脏了。
**必须**：
1. 重跑 `node scripts/generate-audio.mjs --topic <topic-id>` — 自动只重生 hash 不匹配的节点
2. commit 新 audio 文件
3. 不允许 ship 有 audio 但内容已变 — 这等于"用户听到的 voice 跟读到的字不一致"

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

### 7.5 — **Retro-pass 已有内容**（5-3 加，关键漏洞修复）

> 当 Phase 7 给规则库加了**新规则**，**已有内容必须 retro-pass 重新过一遍**。
> 否则会发生："规则修过了，为什么后面生成的还是有？" —— 真实事故见 5-3 Black Death em-dash。

- [ ] **判断**：刚加的规则是否影响**已 ship 的内容**？
  - 影响：Voice / em-dash / 文化禁用 / 角色称谓 / synthesis 标签——这种是 content-level，已有内容受影响
  - 不影响：Topic 元数据字段 / 流程步骤 / lens card description——这种只影响新写
- [ ] **关键纪律：覆盖所有节点，不只是触发点**（5-4 第四轮加，Agnolo N5 二次事故教训）：
  - **不允许** 只修用户指出的那个节点（如只修 N2 / 不扫 N3-N12）
  - **必须** 写 grep query 扫**全 Topic 所有节点 + 全 lens**，找完所有 hit 一次修干净
  - 具体例子：5-4 加规则 J（anti-fab framing 不进角色 monologue）后只修 Agnolo N2
    没扫 N5/N6/N8——结果 Agnolo N5 再次出现 meta 撞断 character voice 事故
  - **grep 模板**：
    ```bash
    grep -nE "documented record|这一节最难写|重要史实校对|这个 lens|这个视角 [让给]|lens 让你|Agnolo 自己" lib/history-storyboards/*.js
    # 应该返回 0 lines（除头注释 + narrativeRef 元数据）
    ```
- [ ] **如果影响**：开 retro-pass task：
  - 列出已 ship 的所有 Topic（这次新规则要 retro 的）
  - **优先级**：按"用户最近 / 最常用"排序——例 5-3 Black Death 是 founder 正在测，最优先
  - 写 retro-prompt（参考 lens-author.md §V，但任务是"应用规则 X 到已有内容 Y"，不是从头起草）
  - Spawn agent 跑 retro-pass，落盘**不 commit**
  - 主线前台过一遍（同 Phase 2 纪律）
  - commit
- [ ] **回流 checklist 本身**：把 retro-pass 步骤纪律写进规则文档——下次新规则加时自动 trigger

**为什么这是机制最关键的 missing piece**：
没有 retro-pass step，**每次新规则**只覆盖**新内容**，已有内容 silent drift。
用户测试已有内容时会反复抓到"修过又有"——破坏对机制的信任。

**Retro-pass 的频次**：
- 新规则一加进 PIPELINE/lens-author，**当天**对最常用 Topic 跑 retro
- 其他 Topic 在下次实测前跑 retro
- 不要积累"历史债"——3 个规则更新后再 retro 4 个 Topic 是噩梦

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
