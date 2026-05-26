# History 模块 · 下一轮路线图

**当前状态(2026-05-25)**:51 门 `available` 课程上线;三段式 IA 完成(`/history` 首页 → `/history/<id>` 单课页 → `/atlas-lab` 探索视图);Hero / 6 卖点 / 三 Mode 筛选(年级/AP/脉络)落地;Codex + user-smoke 双轮已修。

本文档由历史老师 + 升学规划专家 Agent 双盲验证给出,**经创始人确认纳入工作**。

---

## 1. 课纲覆盖度 · 当前 baseline

升学规划专家 2026-05-25 覆盖度审计(以 Irvine USD / Cupertino USD / SCUSD 2026 现行 pacing guide 为口径):

| 课纲 / 阶段 | 当前覆盖 | 关键旗舰课 | 备注 |
|---|---|---|---|
| **CA HSS G6 古代文明** | ≥ 95% | ancient-egypt / hammurabi / ancient-greece / qin-china / han-china / roman-republic-fall / roman-empire-peak | 9 门 |
| **CA HSS G7 中世纪与早期近代世界** | ≈ **95%** | **magna-carta / tang-song-china**(双旗舰) + crusades / black-death / renaissance / reformation / age-of-exploration / mali-empire / mongol / medieval-japan / byzantine / islamic | 15 门,内容最强桶 |
| **CA HSS G8 美国史** | ≈ **90%** | thirteen-colonies / american-revolution / constitutional-convention / civil-war / reconstruction / civil-rights …… | 17 门;**断层警告**:Industrialization → Gilded Age → Progressive Era 这条 G8 核心 essay 区已有课但需要保证深度学版强壮 |
| **AP World History (Modern)** | ≈ **85%** | U1-U9 全有覆盖;旗舰:age-of-exploration / french-revolution / cold-war / globalization | **缺口**:U5 Haitian Revolution / U6 Meiji Restoration / U7 Russian Revolution |
| **APUSH (Period 1-9)** | ≈ **90%** | P1-P8 完整;**缺口**:P9 1980-now(Reagan/911/Obama)无单课,P9 在真考占比 ~5% 较小,但是是断层 |

**核心结论**:
- G7 + G8 + AP World U1-U4 已是中国家长付费的**刚需区**,1:1 对应充分;首页可以放心打"学校学到哪我们对得上"。
- 4 个真实缺口已识别,下一轮路线图明确(见 §2)。

---

## 2. 下一轮内容路线图 · 4 门新课

已加入 `lib/history-topics.js` TOPIC_REGISTRY 作为 `available: false` 占位,自动出现在首页「🔒 即将上线」区(透明承诺)。

| ID(已注册) | 课名 | 课纲位 | 优先级 | 理由 |
|---|---|---|---|---|
| `haitian-revolution-1791` | 海地革命 | AP World U5 / HS world history | **高** | 2024 AP World 真题高频;革命链(美→法→海地→拉美独立)上的关键空缺;DBQ 黑人能动性题必考 |
| `meiji-restoration-1868` | 明治维新 | AP World U6 / HS world history | **高** | 亚洲学生 AP World 必考点;**跟洋务运动对照极强**(中国孩子 home advantage 大杀器) |
| `russian-revolution-1917` | 俄国革命 | AP World U7 / APUSH P7 | 中 | 当前被 WWII 课捎带提,应独立成课;LEQ「20 世纪革命」高频 |
| `contemporary-us-1980` | 当代美国 1980-now(Reagan/911/Obama) | APUSH P9 | 低-中 | P9 真考占比 ~5% 较低,但是断层;11 年级 APUSH 决战家长会问"为啥没有" |

**统一标准**:每门按现行 SOP 完成 storyboard(3-lens)+ notebook(8 mainConcepts + 3 thinkingQuestions + standardRef + 中国对照)+ narrative(Fact Ledger 校验)+ Gate 3 smoke。

**节奏建议**:Haitian / Meiji 优先(高优 + 中国对照强);Russian / Contemporary 跟在后面。每门约 1-2 天工作量(参照 globalization-1995 实际节奏)。

---

## 3. 「考前 1 小时速览卡」PDF 物料

**升学规划专家强烈推荐物料**,**数据 100% 已在 notebook**,工程量约 **1 天**。

### 为什么做这个

家长付费意愿排第二的痛点是"考前能不能给孩子点能直接用的"。当前每门课的 notebook 数据(`mainConcepts × 8` + `examFrequency` ★ + `keyTerms` + `keyFigures` + `thinkingQuestions × 3`)结构化完整,但**没有任何可下载、可分享、可线下用**的物料形态。

PDF 速览卡可以填这个洞,**而且不破坏产品三视角苏格拉底引擎的定位**(它是补充,不是替代)。

### 每张卡的内容(基于 notebook 已有字段)

```
┌─────────────────────────────────────────────────────┐
│  Magna Carta 大宪章 (1215)                            │
│  考前 1 小时速览                                       │
│  CA HSS 7.6.5 · AP World U1                          │
├─────────────────────────────────────────────────────┤
│  8 个核心考点(按 examFrequency ★ 频率排序)           │
│  ★★★★★  约翰王 / 大宪章签署                          │
│  ★★★★★  Clause 39 / 王权限制                         │
│  ★★★★   朗顿 / 教权与王权                            │
│  ★★★★   议会起源 (Model Parliament 1295)             │
│  ★★★★   农奴 Tom 视角 / 谁真正受益                   │
│  ★★★    封建制度                                     │
│  ★★★    大宪章的现代遗产 / 法治                       │
│  ★★      普通法 / 习惯法                              │
├─────────────────────────────────────────────────────┤
│  3 张关键人物名片(IPA + 1 句定位)                    │
│  King John /dʒɒn/ — 被逼签字的英王                   │
│  Stephen Langton /ˈlæŋtən/ — 教权与王权间的中间人    │
│  Tom — 农奴视角(合成人物代表真实群体)                │
├─────────────────────────────────────────────────────┤
│  3 个 DBQ 思考题(写作素材库)                         │
│  · 大宪章是"自由的开端"还是"贵族的特权状"?            │
│  · 朗顿:从"叛徒主教"到"宪政之父"?                   │
│  · 1215 年的条款,今天还在管你的什么生活?              │
├─────────────────────────────────────────────────────┤
│  中国对照锚点                                         │
│  唐宋"皇权 vs 相权"——同一道墙,英国靠贵族扳手腕,    │
│  中国靠制度内分权。                                   │
└─────────────────────────────────────────────────────┘
```

### 工程清单(估 1 天)

- [ ] 新增 `/api/exam-cheatsheet?topicId=X` 接口:从 notebook 读取已有字段渲染为 HTML
- [ ] PDF 生成方式选型:服务端 `@react-pdf/renderer` vs 客户端 `html2pdf.js`(权衡:服务端 PDF 大小 + 服务端依赖,vs 客户端纯 print 但格式可控差)
- [ ] 课页 completion 屏 + 单课页顶部加「📄 下载考前速览卡」按钮
- [ ] 中英双版(英文版给孩子,中文版给家长)
- [ ] 文件名 `cheatsheet-<topicId>-<lang>.pdf`,便于家长群分享
- [ ] (可选)首页 hero 第 3 张卖点卡(「学校学到哪」)加一行小字:"每节课带可下载的考前速览 PDF"

### 决策点(留给创始人定)

- 仅做免费 vs 部分课免费/部分课付费?
- 是否带水印(防止 PDF 被剥离品牌后倒卖)?
- 与"应试焦虑"语调的拿捏:速览卡定位是"复习辅助",不是"必杀考题"

---

## 4. 不在本路线图但已在 backlog 的事项

- 单课页:为 32 个无 `topic.geography` 的 atlas-backed 课,把「在地图上看」按钮做得更显眼(当前已有 fallback,但默认折叠后不易发现)
- 旧 15 门长格式老课的节点长度返工(`check-node-length.mjs` GRANDFATHERED_MAJOR 名单)
- 旧 15 门 storyboard `content.cn` 里残留的「Lens N」架构泄漏(`check-cn-lens-leak.mjs` 已标 backlog)

---

**最后更新**:2026-05-25(IA step5 之后)
**下次评估时机**:首批真实用户(Willow + 创始人朋友圈 5-10 个家庭)在线上跑完 2 周后,看实际转化 + 留存 + 反馈再决定 PDF 速览卡和 4 门新课的实施顺序。
