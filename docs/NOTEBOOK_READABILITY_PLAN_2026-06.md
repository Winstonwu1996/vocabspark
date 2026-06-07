# 考点卡/仿真练习 可读性修复方案 — 2026-06

> 学生 + 老师 Agent 双视角诊断 → 收口。阶段一(渲染)已上线 ca42311; 阶段二(内容改写)待启动。

All claims verified against the actual code and content. I have what I need: render bug confirmed (pre-wrap, no parser), `**` is 17,390 occurrences across 66/72 notebooks, tables in 9 files, `——` in 69 files, `『』` in 15 files, IPA in many, exam-bank rubric jargon isolated to 3 files. Here is the executable fix plan.

---

# 考前复习笔记修复方案(考点卡 + AP 仿真)

两个 Agent 的诊断我逐条核对了源码,全部属实。下面是定性 → 技术决定 → 改写规则 → 示范 → 落地节奏。

---

## 1. 问题定性:两种病,别混为一谈

| 病 | 根因 | 渲染能不能救 | 影响范围(已实测) |
|---|---|---|---|
| **A. 字面星号 `**`** | 正文用 `whiteSpace:'pre-wrap'` 当纯文本直出,没接任何 markdown 解析器(确认:ConceptReview.js L217、L235;ExamBankSection.js L32、L41) | **能,纯渲染漏洞** | **全站通病**:72 个 notebook 里 66 个有 `**`,共 **17,390 处**(civil-war 一门就 452 处) |
| **B. markdown 表格塌成竖线** | 同上,pre-wrap 下 `\| --- \|` 直出 | 渲染 + 内容**双修** | **9 个 notebook** 有 markdown 表格 |
| **C. 全角破折号 `——` 滥用** | 内容写法病,一句塞 2-3 个 | 救不了 | **69 个 notebook**(civil-war 41 处) |
| **D. 半角方块引号 `『』`** | 内容写法病 | 救不了(但 CSS 无关,纯文本替换) | **15 个 notebook** |
| **E. IPA 音标 `/ˈeɪbrəhæm/`** | 内容里硬塞音标字符串,无发音功能 | 救不了(需产品决定:删 or 加 TTS) | **几十个 notebook** |
| **F. rubric 黑话 HIPP/CCOT/Thesis** | 把 AP 评分大纲术语当学习内容,放错受众 | 救不了 | **仅 3 个 exam-bank 文件**(civil-war / age-of-exploration / industrial-revolution) |
| **G. 一句塞多点 / 抽象名词 / 论文腔** | 内容写法病 | 救不了 | 全站,但密度因课而异 |
| **H. apSkill / confidence:high 等字段名漏到正文** | 字段渲染位置错(受众错) | 改组件/改字段 | exam-bank 3 文件 |

**一句话定性**:A 和 B 是"软件看着像崩了",学生以为遇到 bug,**最伤信任、ROI 最高、必须先修**;C–H 是"文字本身写得不像跟 12 岁说话",渲染救不了,要批量重写内容。

**关键判断**:学生说"读考点卡还行,读到练习那块就想划走"——意味着 exam-bank(F/H)是体验断崖,但它**只有 3 个文件**,人工精修即可,不必上 agent 批跑。而 `**` 是全站 17K 处,**只能靠渲染层一次性解决,绝不可能手改**。

---

## 2. 渲染层修复(快速止血,先做)

### 技术决定:接一个**极简内联 markdown 渲染**,不去掉 `**`

理由:
- `**加粗**` 这个排版意图本身是对的——帮 ESL 扫读重点。问题是没人解析它,不是它不该存在。
- 去掉全站 17,390 处 `**` 等于手改 66 个文件,既慢又会误删,还丢了加粗这个有用信号。
- **不要引入 `react-markdown`/`marked`**:它们体积大、会把我们不想要的语法(`#` 标题、`-` 列表、链接)也一起解析,行为不可控,且和现有 inline style 卡片布局打架。我们只需要 `**bold**` + 表格两种语法。

### 落地做法(MVP,3 步)

**Step 1 — 写一个 ~30 行的 `lib/history-engine/inlineMd.js`**,只解析三样东西:
1. `**x**` → `<strong>x</strong>`
2. 换行保留(继续用 `white-space: pre-wrap` 或 `<br>`)
3. (可选,Step 2 才做)markdown table → 卡片

故意**不支持**标题、列表、链接、斜体——范围越小越可控。返回 React 元素数组,不用 `dangerouslySetInnerHTML`(避免 XSS,内容虽是我们自己的但养成习惯)。

**Step 2 — 替换 4 处正文渲染点**(全部已定位):
- `ConceptReview.js` L217-221(故事卡正文 `xiaoweiNote` / mini-lesson `standaloneText`)
- `ConceptReview.js` L235(小 U 批注 `miniNote`)
- `ExamBankSection.js` L32(`q.stem` 题干)
- `ExamBankSection.js` L41(`modelAnswerPoints` 的 `<li>{p}</li>`)

把 `{text}` 换成 `{renderInlineMd(text)}`。**这一步一改,全站 66 门课的 17K 个脏星号同时消失**——这是整个方案 ROI 最高的一刀。

**Step 3 — 表格双修**(9 个文件,优先级低于 Step 1/2):
- 渲染侧:`inlineMd.js` 加一个 table 分支(检测 `|---|` 行 → 画 `<table>` 或对比卡片)。
- 内容侧:更稳的是把这 9 处 markdown 表格字符串改成结构化数组(`rows: [...]`),让组件画移动端友好的对比卡片。**建议:渲染先兜底(别再塌成竖线),内容改写时顺手把表格转成数组**。移动端 markdown table 体验差,卡片更好。

**验收**:Step 1+2 做完,civil-war 那张解放宣言卡的 `**` 必须在真机/截图上显示成粗体,不是星号。截图为证再说 done。

> ⚠️ 这块碰 4 个渲染点 + 全站内容显示,属于跨课通用组件改动。改完建议 `/codex-review` 过一遍 inlineMd 的解析边界(嵌套 `**`、未闭合 `**`、`**` 在中文标点旁的处理),别引入新乱码。

---

## 3. 内容改写硬规则(给批量改写用,7 年级 ESL 口径)

老师那版规则我提炼成**可机械执行的 9 条**,每条都能让改写 agent 自查:

1. **一句一个点。** 看到分号 `；` 或破折号 `——` 连着两个意思,就拆成两句。考点关键句最多一个主谓,多的拆成 2-3 条编号短句。

2. **术语第一次出现,当场一句大白话解释,再用括号给英文。** 模板:`南方各州想退出美国、自己另立一国。这叫脱离(secession)。` 禁止"先甩英文,指望学生去查下面的 keyTerms 列表"。

3. **抽象名词换成"动作 + 具体的人"。**
   - `核心制度张力` → `两边吵的就是这个`
   - `道德控诉者` → `他自己当过奴隶,所以他站出来说:奴隶制是错的`
   - `能动推动者` → `自由不是别人白送的,是他们自己上战场拼出来的`

4. **数字和对比要画面化,不要表格术语。** `白 13 / 黑 7` → `白人兵一个月拿 13 块,黑人兵只拿 7 块。一样打仗、一样会死,钱却少一半。`

5. **rubric 术语(HIPP / CCOT / contextualization / thesis)不直接给学生。** 两条出路二选一:
   - 翻成人话动作:`Thesis → 怎么写开头`、`Contextualization → 先交代背景`、`Sourcing(HIPP) → 想想这材料是谁写的、为什么写、写给谁看`
   - 或挪到只给老师/家长看的字段(见第 4 节 exam-bank 处理)。

6. **口语化"你/我们"视角。** 小 U 是同龄同伴:`你猜怎么着`、`这里我当时也搞混了`、`记住一个就行`。**全程统一这个口气,中途不准切成考试说明书的官腔。**(学生原话:"像两个人在写")

7. **破折号 `——` 限一句一个**(只用来引出结果/转折)。嵌套括号(括号里又套定义)拆成单独一句。

8. **长定义切三步,每步一行短句**:先说是什么 → 再说为什么重要 → 最后一句考点提醒。别压成一个长句。

9. **保留 `**加粗**` 标重点(对 ESL 扫读有用),但前提是第 2 节渲染已上线。** 渲染没上线前别在新内容里堆 `**`。

**附加 4 条(学生直接点名的符号问题)**:
- `『』` 半角方块引号 → 全换成 `「」` 或普通双引号,**一页里只用一种引号**。(15 个文件)
- IPA 音标 `/ˈeɪbrəhæm/`:**产品决定**——MVP 阶段先**从正文删掉裸音标**(它对不会读 IPA 的 12 岁就是乱码)。要发音功能就走 wishList 的"小喇叭 + Web Speech API",但那是独立任务,别卡在这次改写里。
- `36°30'` 这类坐标:保留没问题,但前面加一句话点明`(这是地图上的一条纬线)`,别让学生以为是错字。
- 圈数字 `①②③` 和间隔点 `·` 别混用,统一成一种列表风格。

---

## 4. exam-bank 专项(3 个文件,人工精修)

这是学生"想划走"的重灾区,但**范围极小,不上 agent**,创始人/人工逐张过:

- **题干 `stem`**:中文在上、英文在下。中文版**也要去学术化**——`Evaluate the extent to which...` 的中文别写成"评估在多大程度上",写成"`你觉得这句话对不对、有多对:______?`"。英文原句保留(AP 备考有用),但放下面、标小字。
- **`modelAnswerPoints`**:按规则 5,要么把 HIPP/CCOT/Thesis 翻成人话动作,要么——更干净的做法——**把整段 rubric 要点搬到一个 `teacherNotes` 字段,组件里只在"家长/老师视图"显示**,学生正文只留人话版要点。
- **`apSkill` / `confidence:high` 等字段名漏进正文**:确认是渲染/字段位置错(ExamBankSection.js L30 把 `q.apSkill` 当 chip 显示是可以的,但内容里若把 `confidence:high` 写进了 `theme`/`stem` 文本就是脏数据)——逐个文件 grep 清掉混进文本的字段名。

---

## 5. 一段 before → after 示范(最糟的:解放宣言考点关键句)

这一段四宗罪齐了:字面星号 + 一句塞 6 点 + `commander in chief` 不解释 + 破折号黏连。

**Before(学生屏幕上实际看到的,因为 `**` 没渲染):**

> 考点关键句:`**Emancipation Proclamation 凭总统作为 commander in chief 的战争权力发布(不是国会立法),只覆盖反叛州、有军事工具性质,但它首次授权黑人参军,是从"保联邦"转向"保联邦 + 废奴"的关键转折。**`

**After(渲染层已解析 bold;内容拆成一句一点 + 术语给人话):**

> **这张宣言要记 4 件事:**
> 1. 这是 **Lincoln 一个人签的命令**,不是国会通过的法律。他靠的是总统打仗时的特权(commander in chief = 总司令,军队最高头儿)。
> 2. 它只放了 **南方那些还在反抗的州** 的奴隶。留在林肯这边的蓄奴州,一个都没放。(对,他管得到的地方不放、管不到的才放——下一张卡专门讲这个反讽。)
> 3. 一开始它更像 **一招打仗的棋**:抽空南方的劳力、让黑人能参军。不只是为了做好事。
> 4. 但它头一次让黑人能正式当兵。从这天起,这场仗的目标从"只为保住国家"变成"保住国家 + 废掉奴隶制"。**这是最大的转折点。**

同样手法套到全部 8 张卡的"考点关键句":凡分号链一律拆编号短句,每句一个考点,术语后跟一句人话。

---

## 6. 落地建议(节奏 + 范围 + 风险闸)

**两阶段,先止血再治本:**

### 阶段一:渲染止血(先做,1 次改动覆盖全站)
- 改 `inlineMd.js`(新建)+ 4 个渲染点 → 全站 66 门课 17K 个 `**` 同时变粗体。
- 表格渲染兜底(别再塌竖线)。
- **这一步最值:一次改动,全站受益,且不碰任何课的内容文字**,回归风险低。先发这个,用户立刻不再觉得"软件崩了"。

### 阶段二:内容批量重写(分批,要不要上 agent?)

**要上 agent,但分两档跑,别一锅端:**

| 范围 | 量 | 怎么跑 |
|---|---|---|
| **exam-bank 3 文件**(F/H,学生最想划走的) | 3 个文件 | **不上 agent,人工/创始人逐张过**。量小、受众判断要人拍板(哪些挪 teacherNotes)。 |
| **`『』`→「」、`——` 减重、`①②③` 统一** | 15 + 69 文件,但纯机械替换 | **半自动**:写个脚本做安全替换(`『』` → `「」` 可脚本化),`——` 拆句需语义判断,这部分交 agent。 |
| **考点关键句去学术化 / 拆句 / 术语加人话 / IPA 删除**(G + IPA) | 全站 ~66 文件,语义改写 | **上 agent 批跑**,但**按第 3 节 9 条规则做 system prompt**,**每门课产出 diff 让人审**(改的是教学内容,错了误导学生)。**先跑 civil-war 一门当 pilot,创始人验收口径满意,再批量铺**。 |

**强烈建议的风险闸**:
- 内容改写是**跨 60+ 文件的教学内容大改**,命中 CLAUDE.md 的"改动跨 5 个以上文件" + "改教学内容会误导学生"。**阶段二批跑前,建议先 pilot 一门(civil-war)走 workflow 多维度审查**(口径一致性 / 史实没改坏 / ESL 可读性 / 术语解释正确性 并行扫描),口径锁定再批量。
- **绝不让 agent 改史实**,只改表达。prompt 里硬约束:"只改写句式和措辞,不增删任何史实/年份/人名/因果"。
- 阶段一(渲染)和阶段二(内容)**分 PR**,别混。渲染回归看截图,内容回归看 diff,两套验收标准。

---

**相关文件路径(均为绝对路径):**
- 渲染组件(要改 4 处):`/Users/williamai/projects/vocabspark/components/history-engine/ConceptReview.js`(L217-221、L235)、`/Users/williamai/projects/vocabspark/components/history-engine/ExamBankSection.js`(L32、L41)
- 新建渲染器:`/Users/williamai/projects/vocabspark/lib/history-engine/inlineMd.js`(待建)
- 内容主目录(66/72 含 `**`):`/Users/williamai/projects/vocabspark/lib/history-storyboards/notebooks/`
- exam-bank(3 文件专项):`/Users/williamai/projects/vocabspark/lib/history-exam-bank/civil-war-1861.js`、`age-of-exploration-1492.js`、`industrial-revolution-1800.js`
- pilot 内容样本:`/Users/williamai/projects/vocabspark/lib/history-storyboards/notebooks/civil-war-1861.js`(452 处 `**`、41 处 `——`、解放宣言考点关键句在 emancipation 卡)