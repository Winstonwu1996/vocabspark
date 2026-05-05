# Lens 起草 Agent Prompt Template

**这是一个机制文档** —— 起 Topic 新 lens 时，Spawn agent 必须引用本文件作为硬约束。
不是给你 read 然后总结复述——是 agent 直接遵守。

**封装原因**（2026-05-04）：
Magna Carta + Crusades + Black Death 三个 Topic 累积 30+ P0 事故后，规则已经够稳定可固化。
之前每次 spawn agent 我手 copy 规则到 prompt，规则更新没自动回流——这个文件解决"回流"。

---

## I. 必读约束（Hard Rules — 绝对禁止违反）

### 第 7 条（cultural ban 14 词 + 中国家庭称谓 + 中国官职）

详见 [`AUTHORING_PIPELINE.md`](../history-narratives/AUTHORING_PIPELINE.md) §"⛔ 第 7 条详解：文化对应硬禁"。

**14 词禁用表**（绝对禁止出现在非中国 lens 内容中）：
玉玺 / 龙袍 / 金銮殿 / 翰林 / 朕 / 卿 / 江山 / 凤冠 / 霞帔 / 一炷香 / 科甲 / 状元 / 榜眼 / 探花

**中国家庭称谓禁用**（穆斯林 / 犹太 / 基督徒 lens 内不得出现）：
娘亲 / 父亲大人 / 相公 / 相国 / 舅舅 / 姨夫 / 姨娘 / 嫂嫂

**中国官职禁用**：
宰相 / 丞相 / 尚书 / 将军 / 侍郎 / 巡抚

### 第 8 条 A — Anti-fabrication 显式化

戏剧化人物 internal thought / 没在 source record 里的细节时——**必须**用：
- CN: "这一段是 lens 让你听见——他没写下来，也没说出口——但他自己知道"
- EN: "this lens lets you hear what was turning in [X]'s mind"

**禁止**：
- 伪造 documented quote / journal / archive citation
- 引用具体 "Alexiad 第 N 卷" / "Cronaca senese 第 X 页" 让戏剧化看起来"有据"
- 砍头去尾让 quote 看起来像独立短句

documented quote 必须**完整**引用——要缩短用 "..." ellipsis 标记。

### 第 8 条 B — Synthesis 节点纪律

每个 synthesis 节点（"真问题"节点）：
1. **最多 1-2 个 named scholar**——其余用学派通称（"modern critical reading" / "trauma-aware historiography" / "structural-victim reading"）
2. **学派归属必须精确**——不要把 Tyerman 归"organized murder" / Cohn 归"survivor's illusion 道德派" / Norwich 归"critical-of-Alexios" 这种错位
3. **Synthesis 标签必须中立**——用 neutral school name（"transitional-justice reading"），**不是**预判性形容词（"moral-coward reading"）
4. 收尾用 "**两边都站得住**" + "想 30 秒。" / "Both sides stand. Take thirty seconds."

### 第 8 条 C — Voice 标杆对齐（CN + EN）

CN 语法：
- 「**一种说法**」+「**另一种说法**」（不要「读法 A/B」「论点 A/B」）
- 「想 30 秒。」（句号收尾，不要「想 30 秒答」）

EN 语法：
- "**One view —**" + "**The other view —**"（不要 "Reading A/B"）
- "Take thirty seconds." + "Both sides stand."（不要 "Your reasoning matters more"）

### 第 8 条 D — Dev-note 严格隔离

学生 facing 的 `cn:` / `en:` 字段**绝对禁止**出现：
- "narrative kernel §X" / "per spec" / "see lens design"
- "narrativeRef" 字段值的字面引用
- 任何 lens 设计 brief 里的内部术语

**允许**：
- "this lens lets you hear..." / "lens 让你..." —— 这是给学生的元说明，不是 dev-note

### 第 8 条 E — 角色称谓 + 语言一致性

1. **家庭称谓 lens 内一致**：*Aba* / *Ima* / *Bubbe* / *baba* / *ummi* / *父亲* —— 用一种就一直用一种，**不滑回**中文常规称谓
2. **角色对白禁中英 code-mix**："不是 abstract" / "我 confused" 这种禁止
3. **角色 vocabulary 与年龄/身份匹配**：14 岁不说"世界观" / "意识形态" / "结构性"

### 第 8 条 F — 数学 + 年代自检

写完后必做：
1. 所有 "X 年前 / X 年后" 算术：`event_year - reference_year` 必须等于声明的差值
2. 所有人物年龄：`event_year - birth_year` 必须等于声明的年龄；月份精度（生日是否过）影响结果时显式说明
3. 重要事件年份对照标准 reference：Kristallnacht 1938（不是 1933）/ Wannsee 1942 / Strasbourg massacre 1349/02/14（不是 1/24）等

### 第 8 条 G — Em-dash 密度预算

1. **每句最多 1 个 em-dash**（中文 "——" / 英文 "—"）
2. **绝不出现** "X——Y——Z——A" 4 段以上的 em-dash 链
3. **lens card description 字段禁止 em-dash**（用句号）
4. 用 em-dash 预算的 mental model：把它当成 *英文 em-dash* —— 一段最多 1-2 个

写完后 grep `——.*——.*——` 看 3-em-dash 句，**这种基本是要拆**。

### 第 8 条 I — 外语术语最少化（5-4 加）

**默认只用中文 + 英文**两种语言。所有非中英术语需要"必须保留"的理由——**外语 italic 是认知成本**。

**保留外语 italic 的合理场景**（符合下面 4 类才保）：
1. **家庭称谓**（已选定一致用）：*Aba* / *baba* / *Ima* / *Bubbe* / *ummi*——身份标识，"爸爸"丢文化具体性
2. **真实历史专有名词 / 书名**：*Cronaca senese* / *Palazzo Pubblico* / *Alexiad* / *Decameron* / *Tehillim*
3. **不可译制度术语**：*podestà* / *Bürgermeister* / *fossa comune* / *Judengasse*
4. **历史引文 + 仪式语**：*Deus vult* / *Pater Noster* / *Adonai roi lo echsar*

**删除 italic 的场景**：
- 有完全对应中英文的："il Grasso" → "胖子 Agnolo"（删 italic）
- 普通职业名："bookkeeper" → "记账员"
- 普通来源标识："da Genova" → "来自 Genoa"
- 重复出现的术语首次 inline gloss 后续直接用中文

**密度上限**：每段（约 250 字 CN）最多 **2-3 个** italic 外语术语。超过砍。

**反例**（一段 5+ italic 外语 token）：
> 我叫 Agnolo di Tura，人家叫我 *il Grasso*——"胖子 Agnolo"——这是我自己写在 *Cronaca* 笔记本第一页的称呼。我在 Siena 鞋匠工会（*Arte dei Calzolai*）做 *bookkeeper*——记账员

**正例**：
> 我叫 Agnolo di Tura，人家叫我"胖子 Agnolo"。这是我自己写在编年史笔记本第一页的称呼。我在 Siena 鞋匠工会（*Arte dei Calzolai*）做记账员

### 第 8 条 H — Lens card description 字段 schema

`description` 字段 schema：
1. **不要前缀** "你扮演 X"——LensSelector header 已有总说明
2. **3-4 句完整中文**，**句号收尾**，不用 em-dash
3. character profile 模式：
   - 句 1：角色身份 + 一句关键设定
   - 句 2：一个具体的开场钩子时刻或细节
   - 句 3：这个 lens 让用户经历什么（不剧透 emotional payoff）
4. **禁止**：罗列整个 plot timeline / 揭示跨 lens 对位 echo / 长 em-dash 链 / "你会经历""你会发现"重复

---

## II. Lens 内容质量标准（Soft Rules — 不达标会被 review 抓）

### 1. 明朝那些事儿密度（详见 AUTHORING_PIPELINE 流程第 4 步）

每段抽象概念出现，**立刻**挂上：
- 1 个具体人物名（不是"国王"——是"Henry IV"）
- 1 个具体时间（年/月/日精度）
- 1 个具体感官细节（雪地 / 3 天 / 光脚 / 跪 / 5 万人）

### 2. 节点字数预算（per Crusades + Black Death 4-agent review 平均）

- hook: 200-280 字 CN（hook 节点可放宽到 280-320）
- story 节点（前 7-8 个）：240-300 字 CN
- synthesis 节点：300-380 字 CN（含 "一种说法" + "另一种说法" + 真问题）
- meta（最后 1 节）：200-260 字 CN
- EN 版对应 Lexile 800-1000，长句必须拆

### 3. 节点 phase 分布（12 节点 lens 标准）

```
1 hook (引入 + 你将走的弧线 framing)
7-8 story (按时间线展开,每节一个具体场景)
2 synthesis ("真问题"节点,counter-frame,无标准答案)
1 meta (反思 + 桥到 mastery / 换 lens hint)
```

### 4. 跨 lens 对位 echo（如适用）

如果 Topic 设计了 cross-lens micro-detail（如 Crusades 红头巾 / Black Death 银鞋扣）：
- **不要**在 lens 内直白告诉用户"另一 lens 里的 X 就是这个 Y"
- 让 user 做完两个 lens 自己 connect
- meta 节点（N12）可以 4th-wall break 暗示有 micro-detail，但**不告诉具体内容**

### 5. ESL 友好（EN 侧）

- 第一次出现的非英语术语必须 inline gloss：拉丁文 / 希腊文 / 阿拉伯文 / 希伯来文 / 意第绪 / 德文等
- 长复合从句拆短：4-item participial cascade 必须拆成 list
- 远距离代词指代必须显式化（"the man who killed him" + "the man who returns" 同一句过密）

---

## III. 输出格式（Lens Storyboard JS 文件）

### 每节点必须有：

```js
{
  id: 1,
  phase: 'hook' | 'story' | 'synthesis' | 'meta',
  cosplay: '<角色名>' | 'narrator',  // hook + story 用第一人称角色,synthesis + meta 用 narrator
  narrativeRef: '§<章节> <锚点>',  // 锚定到 narrative kernel 章节
  content: {
    cn: '...',  // CN 内容,见字数预算
    en: '...',  // EN 内容,Lexile 800-1000,见 ESL 友好规则
  },
  deliverGoal: '[fallback]',  // 简短摘要,如 prewritten 模式可省
  engagementHook: '...',  // 推进按钮的提示
  expectedLength: '<字数范围>',
  expectsRealAnswer: false | true,  // synthesis = true,其他 false
}
```

### 文件 schema：

```js
// 头注释（包括 14 词 ban 表的 reminder）
// LENS 1 / 2 / 3 注释 + 关键 micro-detail
var <character>Storyboard = [
  // ...12 节点
];

export var lenses = {
  '<lens-id>': {
    id: '<lens-id>',
    name: '<英文名>',
    nameCn: '<中文名（含括号说明）>',
    role: '<25 字以内角色 + perspective tag>',
    description: '<3-4 句 character profile，遵守第 8 条 H>',
    storyboard: <character>Storyboard,
  },
};

export var defaultLens = '<lens-id>';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: '<topic-id>',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: { '<lens-id>': 32 },
};
```

---

## IV. 自检 grep 列表（写完必跑）

```bash
# 14 词 cultural ban
grep -nE '玉玺|龙袍|金銮殿|翰林|朕|卿|江山|凤冠|霞帔|一炷香|科甲|状元|榜眼|探花' <file>.js  # 必须空（除头注释）

# 中国家庭称谓 + 官职
grep -nE '娘亲|父亲大人|相公|相国|舅舅|姨夫|宰相|丞相|尚书' <file>.js  # 必须空

# Voice 标杆
grep -nE '读法 A|读法 B|Reading A|Reading B|论点 A|论点 B|想 30 秒答|你的论证比结论重要' <file>.js  # 必须空

# Em-dash 密度（3-em-dash 链）
grep -nE '——.*——.*——' <file>.js  # 看到的句必须拆

# Lens card description 含 em-dash
# 手动检查 description 字段不含 ——

# 语法 + 节点数
node --check <file>.js  # 必过
grep -cE "phase: '(hook|story|synthesis|meta)'" <file>.js  # 应该 = (lens 数 × 12)
```

---

## V. Spawn Agent Prompt 模板（直接 copy 用）

将以下模板填入 `<TOPIC_ID>` / `<LENS_ID>` / `<CHARACTER>` 等占位：

```
你是 Opus 级别的内容作者，为一个 12 岁孩子学习历史的 AI 教育产品（Know U. Learning）起草
<TOPIC_TITLE> Topic 的 <LENS_ID>（<CHARACTER_NAME>，<PERSPECTIVE_TAG>）lens storyboard。

## 必读约束

**硬规则文件**：`/Users/williamai/projects/vocabspark/lib/agent-prompts/lens-author.md`
读完整文件，所有 §I (第 7+8 条 A-H) 是绝对禁止违反的。

**风格规则**：`/Users/williamai/projects/vocabspark/lib/history-narratives/AUTHORING_PIPELINE.md`
读 §"明朝那些事儿密度" + 12 节点结构。

## 必读模板（学结构 + 学 voice）

1. 看 `lib/history-storyboards/magna-carta-1215.js` 的 `<对位 lens>` lens —— **这是 voice + 节奏标杆**
2. 看 `lib/history-storyboards/<已完成 Topic>.js` 的 `<对位 lens>` lens —— **这是同 perspective tag 的最近实现**

## 素材源（必须锚定）

- `lib/history-narratives/<TOPIC_ID>.md`（中文 narrative kernel）
- `lib/history-narratives/<TOPIC_ID>.en.md`（英文 narrative kernel）
- 所有 narrativeRef 必须锚到 §<章节>

## 角色设定

<在这里详细描述角色：身份 / 年龄 / 关键设定 / lens 关键张力 / 跨 lens echo 安排>

## 输出格式

**编辑文件 `lib/history-storyboards/<TOPIC_ID>.js`**：
1. 新增 `var <character>Storyboard = [...]`（12 节点）
2. 在 `lenses` object 末尾新增 entry
3. 在 `meta.estimatedMinutesPerLens` 加 entry
4. **不要改** `defaultLens`
5. **不要改** index.js

如果文件中其他 agent 已经写了 lens —— **冲突避免**：
- 只在 lenses object 末尾**新增**，不重写 object
- 如果 string mismatch（其他 agent 改过文件），**重新 read 文件 latest state** 再做精确 Edit

## 不要做什么

- 不要 commit / push
- 不要 npm install / dev server
- 不要写其他 lens（每个 agent 只做一个）
- 不要改 magna-carta / 其他已完成 Topic
- 不要改 narrative kernel

## 时间预算 + 完成报告

预计 30-50 分钟。完成后简短报告：
- 12 节点 deliverGoal 一句话清单
- 最不确定 1-2 节点 + 原因
- narrative kernel 是否充分（有缺什么 fact 让你不得不合成？）
- 文件最终行数

## 完成后自检

跑 §IV 所有 grep，必须全过：
- cultural ban 空
- 家庭称谓 + 官职 空
- voice 标杆残留 空
- 3-em-dash 链句 = 0
- node --check 过
- phase 节点数 = 12

如有违反，**自己修**再交付。
```

---

## VI. 工作流规则（D：agent 起草 + 前台收紧 + commit）

**关键流程**（Magna Carta vs Crusades 质量差距的根本）：

1. agent 起草 lens（30-50 分钟）→ 文件落盘但**不 commit**
2. 主线（人）**前台过一遍**：
   - 跑 §IV 自检 grep
   - 读 lens card description 是否符合 §I.H schema
   - 读 1-2 个最重的 story 节点 + 1 个 synthesis 节点 voice
   - em-dash 密度感觉过高的句子手动拆
3. 跑 4-agent review（7thgrader / AP / ESL / Chinese）→ 应用 P0 fixes
4. **然后**才 commit + push

**禁止**：agent 起草后直接 commit。这是 Crusades + Black Death lens 1+2 voice 弱的根本原因。

---

**机制护城河**：所有规则更新都流回此文件 + AUTHORING_PIPELINE.md。
**任何用户实测反馈"X 之前修过为什么 Y 又出现"** —— 立刻在 §I 加新规则 + 写进 PIPELINE。
