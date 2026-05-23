# Codex 审核：History 模块整体 SOP — 教学逻辑 + 内容生成 + 审核流程（第三方意见）

## 这次要的不是 Go/No-Go

之前的 `CODEX_AUDIT_history_teach_*` / `CODEX_AUDIT_sync_*` 都是"审一个 diff，给 go/no-go"。
**这次不一样**：我们要的是**第三方对整个体系的批判性意见**——

History 模块从 0 长到现在：15 个已上线 Topic + 22 个新生成的 base-content 草稿（dark，未上线），
一套教学法（Story-First Pedagogy v2）、一套内容生成 SOP（AUTHORING_PIPELINE 12 步 + 12 铁律）、
一套审核 SOP（Sarah Chen + 4-agent review + Willow simulator + 课纲审计 + KB fact-check）。

这套体系基本是 founder + 一串 AI agent 自己长出来的，**没有外部教育专家 / 资深工程师审视过整体设计**。
我们怕的是 **systemic blind spot**——单点都自洽，但整体方向 / 取舍 / 验证强度有结构性问题，
而我们身在其中看不见。

**请你扮演一个没有立场的第三方**（同时具备：历史教育专家 + 课程设计专家 + 资深工程师 三重视角），
对下面三层做 critique。**不要客气、不要只挑小 bug**——我们要的是"如果你是来踢馆的，你会从哪里下手"。

---

## 一、系统全貌（先理解再批判）

### 1.1 产品定位
- 受众：7-12 年级（主要 13 岁前后）在美国上学的华裔孩子 + 他们辅导不了西方史的中国家长
- 选题原则：**中国课纲不教 + 美国课纲核心 + 家长辅导盲区**（Magna Carta ✅ / 美国独立战争 ❌ 因为中国也讲）
- 运行时：DeepSeek 跑对话（便宜），Opus 写预制内容（强）
- 商业护城河假设：中美课纲交叉痛点 + 中国家长"能补位 + 接受外部监督孩子"的心智

### 1.2 三层架构（钉死，2026-04-28）
```
Layer 1 Atlas/概念图   → 抽象+术语化+脑图（AP 备考思维导图）
Layer 2 对话学习（核心）→ 生动+画面+故事化（明朝那些事儿密度）← 本次审核重点
Layer 3 Mastery 通关   → 抽象+专业+评估（AP rigor + 评分点）
```
取材分流：§1/§3/§4/§5/§6/§8 → 对话；§7/§9/§11 → Atlas+Mastery；对话 prompt **硬禁**从 §7/§9/§11 取材。

### 1.3 教学法核心（Story-First Pedagogy v2）
**最大的一个赌注**：放弃"每轮 Deliver-Provoke 必须以 Socratic 问题结尾"的 13 轮模型，
改成"沉浸式第一人称叙述 + 多视角 cosplay + 末尾才思辨"。

理由（见 docs/STORY_FIRST_PEDAGOGY.md）：
1. 用户第一次接触这段历史时**没有 schema** → 做不了 analysis 类 Socratic 题
2. **多视角 cosplay 切换本身**就是隐式思辨训练（Bruner narrative-as-thinking）
3. 明朝那些事儿密度 + cosplay 沉浸 → 大段输出不累
4. 用户好奇点不可预测 → 脚本化思辨问题反而割裂
5. Synthesis Socratic 应该在末尾（schema 建好了才适合高层思辨）

**每个 Topic = 3 个"视角"（lens）**，分别是 perpetrator-actor / lonely-mediator / receiving-end
三类角色，第一人称沉浸叙述，每 lens ~9-12 个节点，中英双语。

### 1.4 重设计后的节点弧（teach redesign，已对 41 lens rollout）
单个 lens 的节点序列，关键机关：
- **N6 检索门**（runtime 注入，RETRIEVAL_GATE_IDX=5）：lens ≥9 节时，把第 6 个阅读节点翻成"要用户输入"，
  做一次"用自己话回忆刚才"的检索练习。**不写在 storyboard 内容里**，是 runtime 注入的。
- **N10 史料桥**（runtime 注入）：若该 topic 在 sourcing-bridges.js 注册了双-lens 史料对读，
  N10 翻成输入节点，让用户对两段**真实一手史料**做 HIPP（who/purpose/POV/limitation）。
- **N(末-1) synthesis**：「一种说法 / 另一种说法 / 想 30 秒」中立双框，expectsRealAnswer:true。
- **N(末) 单写**：合并"评价 + 迁移"语义的收尾真问题，expectsRealAnswer:true。
- 其余所有节点 expectsRealAnswer:false（让用户能 advance，不被卡）。**每 lens 恰好 2 个输入节点**。
- 进度条 ProgressRail（每 lens 独立"第 X/N 节"）+ 每节点末 TakeawayCard（带走一句）。
- 3 个用户主动按钮（😴累了听就好 / 🤔我没懂换角度重讲 / ⏭️跳过），**不上 AI 自动状态机**
  （DeepSeek 诊断学生状态不可靠）。

> 历史包袱说明：本来还有个"歇脚点"（lens 中段存档点）设计，用户实测觉得现在长度不累了，**已删除**，
> 但 N6 检索门**保留**。

### 1.5 当前的规模化情境（这是审核的真实背景）
- 已上线 15 个 Topic（走完 12 步全流程，进了 TOPIC_REGISTRY）。
- **新生成 22 个 Topic 的 base-content 草稿**（narrative kernel + storyboard），覆盖 G6-G12：
  Band A 9 个（G8 美国史）/ Band B 10 个（HS+AP 世界史）/ Band C 3 个（G6 古代）。
  路线图见 docs/TOPIC_ROADMAP_G6_G12.md。
- 这 22 个是 **dark**：已注册进 storyboard index 可加载，但**没进 TOPIC_REGISTRY**，用户碰不到，
  **还没走 pipeline 第 6-10 步**（Sarah / KB / 课纲审计 / Willow / 浏览器实测）。
- 生成方式：Opus + 多个并行 agent，每个 agent 拿 AUTHORING_PIPELINE + roadmap + gold-standard
  样板（constitutional-convention-1787.js），按 12 铁律自约束生成。机械校验已过
  （node --check / import OK / 每 lens 恰 2 个 expectsRealAnswer:true / 0 节点 >480 字 / 0 em-dash 链 / defaultLens 一致）。

---

## 二、请审核的三层（核心）

### A. 教学逻辑（teaching logic）

A1. **"末尾才思辨"这个赌注成立吗？** 我们假设 13 岁第一次见这段历史没有 schema 做不了 Socratic，
   所以前 80% 纯沉浸叙述、只在末两节问真问题。但反方观点是：**没有贯穿全程的 retrieval/elaboration
   就是被动阅读**，N6 一个检索门 + 末两节写作够不够形成有效学习（vs 看一集纪录片就忘）？
   从学习科学（spacing / retrieval practice / desirable difficulty）角度，这个节点弧的"主动认知"密度够吗？

A2. **3 视角（perpetrator / mediator / receiving-end）的认知收益 vs 成本。** 一个 Topic 要跑 3 遍
   ~10 节 = 30 节才"完整"。我们赌"多视角 = 隐式思辨"。但学生真会跑完 3 个视角吗？还是跑 1 个就走？
   如果多数人只跑 1 个，那"多视角思辨"这个核心机制就落空了——单视角下这套设计还成立吗？

A3. **第一人称受害者视角的伦理/教学风险。** 22 个里大量是 receiving-end 视角的黑暗史
   （Trail of Tears、华工排华、Manzanar、刚果橡胶、Triangle 火灾）。让 13 岁"第一人称扮演受害者"
   是强代入。这是有效共情教学，还是有 trauma / 廉价情绪消费 / 把苦难变成游戏关卡的风险？边界在哪？

A4. **DeepSeek 跑对话 + 用户随时 branch 提问的 runtime 风险。** 预制内容是 Opus 写的，但运行时
   用户冒出好奇点要 DeepSeek 即兴回答（"甚至超出教材但不矛盾教材"）。这层没有预制 guard，
   DeepSeek 即兴回答历史问题的幻觉 / Whig 倾向 / 文化对应 bug 怎么兜底？现在基本靠 system prompt，够吗？

### B. 内容生成 SOP（AUTHORING_PIPELINE.md）

B1. **12 铁律是不是"在打上一场仗"？** 这 12 条几乎全是从具体事故倒推出来的（玉玺事故 → 文化禁用表；
   Tang-Song 36/0 全 true → expectsRealAnswer 默认 false；徽宗伪史料 → anti-fabrication）。
   这种"事故驱动"的规则集，优点是每条都real，缺点是**只防住已经发生过的错，对没遇到过的失效模式盲**。
   作为第三方：你能预见哪些**还没发生但结构上注定会发生**的失效模式，现在 SOP 没覆盖？

B2. **qaTemplate → 节点数映射够不够？** simple-binary=9 / multi-faction=11 / long-arc=12。
   "轮次跟着内容走，密度跟着思考走"是原则，但落地成 3 个固定档。固定档会不会让某些 Topic
   削足适履（200 年长跨度硬塞 12 节 vs 单一时刻硬撑 9 节）？

B3. **用 Opus 并行 agent 批量生成 22 个草稿，这个方法本身的系统性风险。** 每个 agent 拿同一套
   pipeline + 同一个 gold-standard 样板自约束。好处是一致性，坏处是**所有产物会继承样板的同一种
   声音/结构/盲点**（mode collapse）——22 个 Topic 读起来会不会像同一个模子？以及拿一个样板当锚，
   会不会把样板里某个**未被发现的缺陷**复制 22 份？

B4. **"明朝那些事儿密度"作为可读性标准的可验证性。** 这是核心写作公理（累不累跟字数无关跟抽象度有关），
   但它**没有可机械检测的指标**——全靠人肉判断。22 个草稿怎么客观验证都达标了？现在只有 grep
   字数/em-dash 这种表层检查。

### C. 审核 / QA SOP（这是最关键的一问）

C1. **现有 QA 强度够不够验证 22 个 AI 生成草稿？** 完整流程是：Sarah Chen 8 维（史实+China-bridging
   双一票否决）→ 课纲审计 6.5（AP CED + CA HSS）→ KB fact-check → Willow simulator 4 persona × 13 轮
   → 浏览器 5 分钟实测。这套是为"一次 ship 一个、founder 亲自盯"设计的。现在要一次验 22 个，
   **这套 SOP 会在哪里崩**？哪些步骤其实是 founder 的人肉判断在兜底、根本没法 scale？

C2. **史实精度的真实保障。** SOP 说 KB fact-check + Sarah audit 防史实错。但 KB 本身也是 AI 拉的
   （靠 Wikidata QID 校验防伪 QID），Sarah 也是个 AI persona。**全链路没有一个真人历史学家**。
   22 个 Topic（含大量有争议的黑暗史 + BCE 古代史）靠"AI 审 AI"，史实精度的真实置信度有多高？
   你会怎么设计一个 founder 单人能负担、但比"AI 审 AI"更可信的 fact-check 关口？

C3. **中立性（Rule 0）能不能被 AI 可靠审出来？** Rule 0 = "我作为中国人认为西方有制度优势，
   东方也有"，Whig 和反向 essentialism 都拒。这是产品的价值观一票否决维度。但"偏 Whig"是个
   微妙的 framing 判断，22 个草稿（尤其殖民/冷战/排华这种）里**结构性的隐性立场偏移**，
   Sarah(AI) + Willow E 维度(AI) 真审得出来吗？还是需要别的机制？

C4. **dark → 上线的 gate 应该是什么？** 22 个现在 dark。从 dark 到进 TOPIC_REGISTRY 上线，
   你认为**最小但充分**的 gate 是什么？（全套 12 步 × 22 = founder 累死；但跳步 = Crusades 翻车教训。）
   有没有"分层放行"策略——比如先放最安全的几个、黑暗史/古代史走更严的关？

---

## 三、最想要你回答的元问题

1. **这套体系最大的单点结构性风险是什么**（一个）？如果只能修一件事，修哪？
2. **教学法、生成 SOP、审核 SOP 三者里，哪一个相对另两个明显偏弱**、成为整个质量的瓶颈？
3. 一个**单人公司 + 一串 AI agent** 的现实约束下（founder 不可能逐个深读 22×30 节），
   你会怎么重新设计"生成→审核→上线"的流水线，让它既 scale 又不牺牲史实/中立底线？
4. 我们有没有在**用工程的自洽（机械校验全过）冒充教育的有效（学生真学到）**？哪里最严重？

---

## 四、文件索引（按重要性）

| 用途 | 路径 |
|---|---|
| 教学法 design doc | `docs/STORY_FIRST_PEDAGOGY.md` |
| 内容生成 SOP（12 步 + 12 铁律 + 设计哲学）| `lib/history-narratives/AUTHORING_PIPELINE.md` |
| 22 个新 Topic 路线图（3 band + 三视角 triad + 反 Whig rationale）| `docs/TOPIC_ROADMAP_G6_G12.md` |
| 审核 persona（Sarah Chen 8 维）| `docs/HISTORY_REVIEWER_PERSONA.md` |
| 已上线样板 / gold-standard storyboard | `lib/history-storyboards/constitutional-convention-1787.js` |
| 22 个草稿的注册（dark）| `lib/history-storyboards/index.js`（第 44-107 行）|
| teach 重设计的节点弧改造 + 修复 | `docs/CODEX_AUDIT_history_teach_p0.md` / `p1.md` / `p1_rollout.md` |
| runtime 节点注入（N6 门 / N10 桥）| `lib/history-runtime.js` |
| 对话渲染（ProgressRail / TakeawayCard / SourceBridgeCard）| `components/history-engine/ConversationStream.js` |
| 史料桥参考实现（真实一手史料对读）| `lib/history-storyboards/sourcing-bridges.js` |
| 一个完整 narrative kernel 样本 | `lib/history-narratives/constitutional-convention-1787.md` |

### 抽样建议
若要抽读草稿正文，建议覆盖三个 band 各 1-2 个 + 难度最高的：
- `constitutional-convention-1787.js`（样板，Band A 美国史）
- `chinese-exclusion-1882.js`（华工视角，中美交叉痛点最典型）
- `world-war-two-1942.js`（Manzanar 日裔，receiving-end 黑暗史）
- `cold-war-1962.js`（代理战争，中立性最难）
- `babylonian-exile-586bce.js` / `roman-republic-fall-44bce.js`（BCE 古代史，史料最稀）

---

## 五、约束（审核时请知悉，但不在审核范围）
- **绝不能动用户进度数据**（`backups/` 下的 user_progress*.json 是生产 PII，本任务全程不碰）。
- 22 个草稿在独立分支 `feat/topic-content-g6-g12`，main 未动。
- "基本内容" = narrative + storyboard，Companion Notebooks（Layer 1/3 配套）尚未做，**不在本次范围**。
- 我们要的是**方向性 critique + 可执行的改法**，不是逐字校对（逐字 fact-check 是另一条专门的关口要建）。
