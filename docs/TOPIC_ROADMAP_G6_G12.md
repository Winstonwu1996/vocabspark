# Topic Roadmap — Grade 6 → Grade 12 (US History + World + Gov/Econ + AP)

**作者**: K-12 + AP 历史课程架构师 agent
**日期**: 2026-05-22
**用途**: 在已 ship 的 15 个 Grade-7 Topic 之上，规划 Grade 8 / 高中 9-12 / Grade 6 的扩展 spine。仅做内容规划，不写 narrative / storyboard。
**遵循格式**: `lib/history-narratives/PHASE_1_T4_T7_PLAN.md`（每 Topic：Role | 主角 | 生卒 | Tag 表 + defaultLens + 跨 Topic micro-detail + 反 Whig）
**遵循选题标准**: `AUTHORING_PIPELINE.md` 第 1 步（中国课纲不教 + 美国课纲核心 + 家长辅导不了 + AP 反复考 + 反 Whig 三透镜三角）

---

## 0. 总览

### 总数与分布

本 roadmap 提议 **22 个新 Topic**，叠加现有 15 个 Grade-7 Topic，构成 **37 个 Topic** 的完整 K-12 spine（与 pipeline 目标 ~38 高度吻合，不凑数）。

| Band | 课纲范围 | 新 Topic 数 | 生成优先级 |
|---|---|---|---|
| **Band A — Grade 8 (US History 1780s–1914)** | CA HSS Grade 8 + APUSH Period 3-7 + AP Gov 基础 | **9** | 第一批 |
| **Band B — High School 9-12 (World / US / Gov-Econ)** | AP World Modern gaps + AP Euro + APUSH 20c + AP Gov + AP Macro/Micro | **10** | 第二批 |
| **Band C — Grade 6 (Ancient Civilizations)** | CA HSS Grade 6 + AP World 起点（c.1200 之前的根） | **3** | 最后回填 |

### AP 覆盖如何穿线

现有 15 个 Topic 已覆盖 **AP World Modern Unit 1-3**（c.1200-1750：宋元、伊斯兰、马里、拜占庭、蒙古、文艺复兴、宗教改革、大航海、科学革命、启蒙）。本 roadmap 补齐：

- **APUSH（美国史）全 9 个 Period** — Band A 覆盖 Period 3-7（建国到镀金时代），Band B 覆盖 Period 7-9（一战到当代）。这是现有 15 个 Topic **完全没碰**的考试，是最大缺口。
- **AP World Modern Unit 4-9（1750-现在）** — Band B 补工业革命、帝国主义、一战二战、冷战、去殖民化。现有只到 Unit 3。
- **AP European History** — Band B 补法国大革命/拿破仑、两次大战的欧洲视角（与 AP World 共享 Topic 但 lens 侧重欧洲）。
- **AP US Government & Politics** — Band A 的宪法 Topic（费城制宪 + Federalist/Anti-Federalist）+ Band B 的 Civil Rights / 三权分立判例 Topic 直接服务。
- **AP Macroeconomics / Microeconomics** — Band B 收尾 1 个经济史 Topic（大萧条 + 凯恩斯 vs 哈耶克），服务高三 Gov/Econ + AP Econ 入门。

### 反 Whig 总策略

全 spine 共享 Rule 0 中性原则。Band A（美国史）反 Whig 难度最高——美国课堂天然偏胜利叙事（"自由不断扩张"）。本 roadmap 每个美国 Topic 都选**才华 + 权力 + 暴力同体**的 perpetrator-actor（Jefferson 蓄奴写自由 / Jackson 推 Indian Removal / 进步时代改革者同时是优生学者），并用 receiving-end lens（被驱逐的原住民、被奴役者、被排华法案挡在门外的华工）压住凯歌叙事。

---

# Band A — Grade 8: US History 1780s–1914（9 个新 Topic）

> CA HSS Grade 8 = 美国建国到一战前。这是**中国家长最大盲区**：中国课纲对美国史只讲独立战争 + 南北战争两个点，且立场化（"资产阶级革命"）。APUSH 的 Period 3-7 几乎全在这个 band，是 AP 主战场。生成顺序按"宪法地基 → 西扩与原住民 → 奴隶制与内战 → 工业化与移民"的因果链。

---

## A1. The Constitutional Convention 1787（费城制宪）

- **topicId**: `constitutional-convention-1787`
- **grade/unit**: 8.2 / APUSH Period 3 / AP Gov Foundational Documents
- **AP exam(s)**: APUSH（Period 3，Required Doc: Federalist 10/51）+ AP US Gov（必考 Foundational Document）
- **qaTemplate**: `multi-faction`（大州 vs 小州 vs 蓄奴州 vs 反联邦派，4+ 势力博弈，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | James Madison | 1751-1836 | "宪法之父" + 弗吉尼亚蓄奴庄园主 + 起草 3/5 妥协 |
| lonely-mediator | Roger Sherman | 1721-1793 | 康涅狄格鞋匠出身，唯一签三份建国文件，调停 Great Compromise |
| receiving-end | Mum Bett / Elizabeth Freeman | c.1744-1829 | 被奴役女性，1781 用马萨诸塞州宪"生而自由"条款打赢自由诉讼 |

**defaultLens**: `mum-bett-receiving-end`

**跨 Topic micro-detail**:
- Madison 读 Montesquieu 三权分立 → 现有 `enlightenment`（Voltaire/Gouges/Toussaint）直挂；Madison 的 checks-and-balances 是 Montesquieu 的美国落地
- "rule of law / 国王也守法" 链 → 现有 `magna-carta-1215`（Clause 39 → 美国宪法 5th Amendment 的 due process）回扣
- Mum Bett "生而自由" 诉讼 → A4 `slavery-abolition` 的 receiving-end + 现有 `enlightenment` Toussaint（同代奴隶读启蒙文本翻身）对位

**反 Whig rationale**: 选 Madison 不选 Washington——Madison 同时是"宪法之父"与 3/5 妥协的技术设计者，把"被奴役者算 3/5 个人来给蓄奴州多分国会席位"写进文本。展示美国建国天才与制度性暴力同体，避免"国父们缔造自由"的凯歌叙事。

**中美课纲交叉痛点**: 中国课纲完全不讲费城制宪的内部博弈（只说"1787 年宪法确立资产阶级专政"），家长无法解释 federalism / separation of powers / 3/5 compromise。这是 AP US Gov **逐字考** Foundational Documents 的核心，且是理解整个美国政治结构的地基。

---

## A2. Hamilton vs Jefferson — The First Party System 1790s（建国财政与党争）

- **topicId**: `hamilton-jefferson-1790s`
- **grade/unit**: 8.3 / APUSH Period 3 / AP Gov（联邦制张力）
- **AP exam(s)**: APUSH（Period 3，Washington's Cabinet / 弹性条款）+ AP US Gov（federalism, implied powers）
- **qaTemplate**: `simple-binary`（联邦党 vs 民主共和党的二元世界观对撞，9-13 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Alexander Hamilton | 1755/57-1804 | 私生子移民→财长，建国家银行+承债，死于决斗 |
| lonely-mediator | Benjamin Banneker | 1731-1806 | 自由黑人天文学家+测绘师，写信质问 Jefferson 自由与蓄奴的矛盾 |
| receiving-end | 一个宾州西部威士忌酒农（composite，明标合成） | c.1760-1820 | Whiskey Rebellion 1794 被联邦军镇压的边疆小农 |

**defaultLens**: `whiskey-farmer-receiving-end`

**跨 Topic micro-detail**:
- Hamilton 国家银行 + 信用体系 → Band B `industrial-revolution` 的金融资本前史；与现有 `renaissance-1500`（Medici 银行）对照（私人 vs 国家信用）
- Banneker 写信给 Jefferson → A1 `constitutional-convention`（Mum Bett）+ 现有 `enlightenment`（自由话语 vs 蓄奴现实的同代裂缝）
- Whiskey Rebellion 联邦军镇压 → A3 Jackson 的"普通人 vs 中央"民粹张力前奏

**反 Whig rationale**: 不把 Hamilton 浪漫化为"移民英雄"（Broadway 叙事），也不把 Jefferson 浪漫化为"民主之父"。用 Banneker 的信让两人都接受质询：Jefferson 写"人人生而平等"却蓄奴 600 人，Hamilton 反奴隶制却为蓄奴妻家管理奴隶交易。才华、理想、伪善同体。

**中美课纲交叉痛点**: 中国课纲零覆盖美国"两党制怎么来的"。家长无法解释 implied powers / strict vs loose construction——而这是 AP US Gov 联邦制单元的源头判例（McCulloch v. Maryland 的思想前史）。

---

## A3. Andrew Jackson & Indian Removal 1830（杰克逊民主与印第安人迁移）

- **topicId**: `jackson-indian-removal-1830`
- **grade/unit**: 8.5 / APUSH Period 4 / AP Gov（行政权 vs 司法权）
- **AP exam(s)**: APUSH（Period 4，Jacksonian Democracy + Trail of Tears）+ AP US Gov（Worcester v. Georgia 行政蔑视司法）
- **qaTemplate**: `multi-faction`（白人移民 vs 联邦 vs 最高法院 vs 切罗基民族内部主战/主和派，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Andrew Jackson | 1767-1845 | "平民总统"+蓄奴者+无视最高法院签 Indian Removal Act |
| lonely-mediator | John Ross | 1790-1866 | 1/8 切罗基血统首领，受过西式教育，法庭路线抗争失败 |
| receiving-end | Quatie Ross（John Ross 之妻）/ 泪之路上的切罗基母亲（半合成） | c.1791-1839 | 1838-39 Trail of Tears 死于途中的切罗基平民 |

**defaultLens**: `quatie-trail-of-tears`

**跨 Topic micro-detail**:
- Jackson 无视最高法院（"John Marshall 做了判决，让他自己去执行"）→ A1 `constitutional-convention`（三权分立的设计 vs 现实失效）回扣
- John Ross 受西式教育用对方武器抗争 → 现有 `pre-columbian`（Malintzin 跨文化中介）+ 现有 `enlightenment`（Toussaint 读启蒙文本反抗）对位
- Trail of Tears 强制迁移 → 现有 `mongol-empire`（Sorghaghtani / 蒙古迁徙暴力）+ Band C `mesopotamia` 的人口迁徙母题

**反 Whig rationale**: 选 Jackson 不选某个明确的恶棍——Jackson 是美国民主**扩大**（白人男性普选权）与原住民**清除**的同一个人。展示"民主深化"与"种族暴力"不是两条故事线而是同一只手。打破"美国自由不断进步"的线性叙事。

**中美课纲交叉痛点**: 中国课纲对美国西进运动只一句"领土扩张"，完全不讲原住民代价，家长无认知框架。AP 反复考 Worcester v. Georgia（行政权蔑视司法的经典案例）+ Trail of Tears 作为 DBQ 素材。

---

## A4. Slavery, Abolition & the Underground Railroad 1830-1860（奴隶制与废奴）

- **topicId**: `slavery-abolition-1850`
- **grade/unit**: 8.7 / APUSH Period 4-5 / AP Gov（公民不服从）
- **AP exam(s)**: APUSH（Period 4-5，废奴运动 + Fugitive Slave Act）
- **qaTemplate**: `multi-faction`（蓄奴种植园主 vs 废奴主义者 vs 逃奴 vs 北方默许者，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | John C. Calhoun | 1782-1850 | 副总统+理论家，把奴隶制论证为"positive good"，州权理论奠基 |
| lonely-mediator | Frederick Douglass | 1818-1895 | 逃奴→演说家+报人，与白人废奴派 Garrison 决裂走政治路线 |
| receiving-end | Harriet Tubman | c.1822-1913 | 逃奴后 13 次返南方救约 70 人，地下铁路"摩西" |

**defaultLens**: `tubman-receiving-end`

**跨 Topic micro-detail**:
- Calhoun "positive good" 理论 vs Douglass 自传 → 现有 `enlightenment`（自由话语的工具性，谁有资格"生而自由"）
- Douglass 与 Garrison 决裂走政治路线 → A2 `hamilton-jefferson`（理念派 vs 行动派的美国式分歧母题）
- Tubman 地下铁路网络 → A2 Banneker（自由黑人的隐性网络）+ 现有 `scientific-revolution` Mersenne 通信网（隐秘协作网络结构对照）

**反 Whig rationale**: 不把废奴写成"善良北方解放受害南方"。Calhoun 是耶鲁毕业的一流政治理论家——智识与为奴隶制辩护同体；北方多数人对奴隶制冷漠或经济上获益。Douglass 与白人废奴派的决裂也展示"盟友"内部的种族张力。

**中美课纲交叉痛点**: 中国课纲讲南北战争为"资产阶级 vs 种植园经济"，把奴隶制简化为经济制度，家长无法讲 states' rights 理论、Fugitive Slave Act、道德 vs 宪法的张力。AP DBQ 高频主题。

---

## A5. The Civil War — A House Divided 1861-1865（南北战争）

- **topicId**: `civil-war-1861`
- **grade/unit**: 8.10 / APUSH Period 5
- **AP exam(s)**: APUSH（Period 5，内战原因 + Emancipation Proclamation + 总统战时权力）
- **qaTemplate**: `long-arc`（1850 妥协破裂→分裂→四年战争→解放宣言转向，13-17 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Abraham Lincoln | 1809-1865 | 为保联邦而战，初期不为废奴，中途以战略转向解放 |
| lonely-mediator | Robert E. Lee | 1807-1870 | 反对脱离却因效忠弗吉尼亚而领南军，悲剧性选择 |
| receiving-end | 一个加入北军的获释黑人士兵（基于第 54 麻省团，半合成） | c.1840-1865 | 18 万黑人士兵之一，同工不同酬，被俘即处死风险 |

**defaultLens**: `usct-soldier-receiving-end`

**跨 Topic micro-detail**:
- Lincoln "保联邦优先于废奴" → A4 `slavery-abolition`（道德 vs 实用的延续）；解放宣言的战略性回扣 Douglass 的施压
- Lee 效忠州 vs 国 → A3 `jackson`（联邦 vs 州权张力的暴力顶点）
- 黑人士兵参战 → A6 重建（参战换公民权的逻辑）+ 现有 `byzantine-rise`（Justinian 军队与公民身份对照）

**反 Whig rationale**: 不写成"伟大解放者 Lincoln"。Lincoln 1862 年仍公开说若能保联邦而不解放任一奴隶他也愿意；解放宣言只解放邦联境内（联邦控制不到的地方）的奴隶，是军事工具而非纯道德行为。Lee 不写成纯恶人——展示忠诚的悲剧结构。

**中美课纲交叉痛点**: 中国课纲讲内战为"美国资本主义扫清障碍"，把 Lincoln 神化或工具化。家长无法讲 Emancipation Proclamation 的有限性、总统战时权力扩张、为何"保联邦"先于"废奴"。APUSH Period 5 核心。

---

## A6. Reconstruction & Its Betrayal 1865-1877（重建与背叛）

- **topicId**: `reconstruction-1877`
- **grade/unit**: 8.11 / APUSH Period 5-6 / AP Gov（14th/15th Amendment）
- **AP exam(s)**: APUSH（Period 5-6，重建修正案 + Jim Crow 起源）+ AP US Gov（14th Amendment Equal Protection）
- **qaTemplate**: `long-arc`（1865 解放→黑人参政高峰→1877 妥协→Jim Crow，13-17 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Andrew Johnson | 1808-1875 | 否决重建法案、被弹劾、为南方白人复权铺路 |
| lonely-mediator | Hiram Revels | 1827-1901 | 首位非裔美国参议员（密西西比），温和路线很快被反扑淹没 |
| receiving-end | 一个 1867 首次投票、1877 后被剥夺权利的南方黑人佃农（composite） | c.1840-1910 | 短暂参政→sharecropping→Jim Crow 的一生 |

**defaultLens**: `freedman-sharecropper-receiving-end`

**跨 Topic micro-detail**:
- 14th/15th 修正案的"纸面权利 vs 现实剥夺" → 现有 `magna-carta-1215`（Clause 39 普世措辞 vs 实际受益人的同一悖论）强对位
- Hiram Revels 短暂高峰 → A4 Douglass（黑人政治领袖的反复受挫母题）
- Sharecropping 债务束缚 → 现有 `black-death-1347`（劳动力短缺后的人身束缚）+ Band B `industrial-revolution`（工资奴役对照）

**反 Whig rationale**: 重建是美国史上"自由扩张然后被强行收回"的最清晰反例，天然反 Whig。选 Johnson 展示总统如何主动逆转进步；用佃农 lens 展示 1877 后黑人实际地位倒退到接近奴役。打破"内战后一切向好"的线性叙事。

**中美课纲交叉痛点**: 中国课纲对重建几乎零覆盖。家长完全不知道 Jim Crow、Black Codes、为何 14th Amendment 写了 Equal Protection 却 90 年不兑现。AP US Gov 考 14th Amendment 的核心，APUSH DBQ 高频。

---

## A7. The Transcontinental Railroad & Chinese Exclusion 1869-1882（铁路华工与排华法案）

- **topicId**: `chinese-exclusion-1882`
- **grade/unit**: 8.12 / APUSH Period 6 / 加州 HSS 特色考点
- **AP exam(s)**: APUSH（Period 6，移民 + 西部经济 + 排外主义）
- **qaTemplate**: `multi-faction`（铁路资本 vs 白人工会 vs 华工 vs 立法者，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Leland Stanford | 1824-1893 | 中央太平洋铁路巨头+加州州长，雇华工又支持排华政治 |
| lonely-mediator | Wong Chin Foo | 1847-1898 | 早期华裔民权活动家+记者，创"Chinese American"一词办报抗争 |
| receiving-end | 一个修内华达山隧道的广东台山籍铁路华工（composite，基于真实劳工史） | c.1845-1900 | 悬崖凿洞、雪崩丧生、完工后被法案禁入籍的工人 |

**defaultLens**: `taishan-railroad-worker-receiving-end`

**跨 Topic micro-detail**:
- 台山华工 → 现有 `tang-song-china` / Band C `early-china`（华工的中国根，让中国学生直接共情自己祖辈可能的迁徙史）——**这是全 spine 对中国学生情感锚最强的一条线**
- Wong Chin Foo 创 "Chinese American" 身份话语 → 现有 `pre-columbian` Malintzin（跨文化身份建构）+ A4 Douglass（少数族裔自我命名抗争）
- Stanford 雇华工又排华 → A2 Hamilton（资本逻辑 vs 政治民粹的张力）

**反 Whig rationale**: 1882 Chinese Exclusion Act 是美国史上首个针对特定族裔的移民禁令——"机会之地"叙事的直接反证。选 Stanford 展示资本与种族主义的共谋（用华工建国家动脉，建完就立法把他们挡在公民权外）。这是"美国自由扩张"叙事最锋利的反 Whig 切口。

**中美课纲交叉痛点**: 中国课纲零覆盖（华工史在中美双方课堂都被边缘化）。这恰是**加州 HSS 明列考点**，且对华裔学生有直接身份意义——家长可能听过"卖猪仔"但讲不清排华法案的法律机制与长尾（直到 1943 才废除）。

---

## A8. The Gilded Age — Robber Barons & Labor 1870-1900（镀金时代与劳工）

- **topicId**: `gilded-age-1890`
- **grade/unit**: 8.12 / APUSH Period 6 / AP 经济史前史
- **AP exam(s)**: APUSH（Period 6，工业巨头 + 劳工运动 + Social Darwinism）
- **qaTemplate**: `multi-faction`（资本家 vs 工会 vs 移民工人 vs 政府，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Andrew Carnegie | 1835-1919 | 钢铁大王+慈善家，写《财富的福音》同时 1892 Homestead 镇压罢工 |
| lonely-mediator | Samuel Gompers | 1850-1924 | AFL 创始人，犹太移民雪茄工，走"务实工会"路线排斥激进派 |
| receiving-end | 一个 Homestead 罢工中被 Pinkerton 私兵射杀的钢厂工人（composite） | c.1860-1892 | 1892 年 7 月 Homestead 流血冲突中的工人 |

**defaultLens**: `homestead-striker-receiving-end`

**跨 Topic micro-detail**:
- Carnegie《财富的福音》Social Darwinism → 现有 `scientific-revolution`（科学被权力挪用，Newton→Spencer 的"适者生存"误用）+ B5 进步时代优生学
- Gompers 犹太移民工人 → 现有 `black-death-1347`（Devorah，犹太离散史）+ A7 排华（移民工人内部的种族分层）
- Homestead 私兵镇压 → A2 Whiskey Rebellion（资本/国家对工人的暴力延续）

**反 Whig rationale**: 选 Carnegie 不选某个明确恶棍——Carnegie 捐建 2500 座图书馆**同时**用 Pinkerton 私兵镇压自己工厂的罢工致死。慈善与剥削同体。打破"工业进步=人民富裕"的凯歌，展示财富集中与劳工苦难的同源。

**中美课纲交叉痛点**: 中国课纲讲镀金时代为"垄断资本主义"标签化，家长讲不清 trust / Social Darwinism / 劳工运动的具体机制。APUSH Period 6 核心，且是理解今日美国不平等辩论的历史地基。

---

## A9. Women's Suffrage — Seneca Falls to the 19th Amendment 1848-1920（妇女选举权）

- **topicId**: `womens-suffrage-1920`
- **grade/unit**: 8.8 → 跨到 11 / APUSH Period 4-7 / AP Gov（19th Amendment）
- **AP exam(s)**: APUSH（Period 4-7，改革运动长弧）+ AP US Gov（选举权扩大）
- **qaTemplate**: `long-arc`（1848 Seneca Falls→分裂→1920 修正案，13-17 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Elizabeth Cady Stanton | 1815-1902 | 运动奠基者，但反对 15th Amendment 先给黑人男性投票，发种族主义言论 |
| lonely-mediator | Frances Ellen Watkins Harper | 1825-1911 | 非裔女诗人+活动家，"我们都被绑在一起"调停种族与性别两条战线 |
| receiving-end | Ida B. Wells | 1862-1931 | 反私刑记者，1913 游行被要求走在队尾，拒绝，挤进白人队伍 |

**defaultLens**: `ida-b-wells-receiving-end`

**跨 Topic micro-detail**:
- Stanton 反对先给黑人投票 → A6 `reconstruction`（15th Amendment）+ A9 内部种族裂缝，与现有 `enlightenment` Gouges（女权先驱的局限性）强对位
- Frances Harper 双战线调停 → A4 Douglass（Douglass 实际支持女权，跨议题盟友母题）
- Ida B. Wells 拒绝走队尾 → A7 Wong Chin Foo（少数族裔在"进步运动"内部仍被边缘）+ 现有 `byzantine-rise` Theodora（女性政治声音的代价）

**反 Whig rationale**: 不写成"姐妹团结争取自由"。Stanton/Anthony 主流派为争取白人女性选票，对黑人女性和黑人男性投票权采取排斥甚至种族主义立场。用 Ida B. Wells 的 lens 展示"进步运动"内部的种族等级——女权与种族正义并非天然同盟。

**中美课纲交叉痛点**: 中国课纲零覆盖美国妇女参政史。家长讲不清为何 19th Amendment 拖到 1920，更讲不清运动内部的种族分裂。APUSH 改革运动长弧 + AP US Gov 选举权扩大考点。

---

# Band B — High School 9-12: World / US 20c / Gov-Econ（10 个新 Topic）

> 9-10 年级 World History（AP World Modern Unit 4-9 + AP Euro）/ 11 年级 US History（APUSH Period 7-9）/ 12 年级 Gov & Econ（AP US Gov + AP Macro/Micro）。生成顺序按时间线推进：工业革命/法革→帝国主义→两次大战→冷战/民权/去殖民→经济史收尾。

---

## B1. The Industrial Revolution 1760-1840（工业革命）

- **topicId**: `industrial-revolution-1800`
- **grade/unit**: HS 9-10 / AP World Unit 5 / AP Euro
- **AP exam(s)**: AP World Modern（Unit 5，工业化）+ AP European History
- **qaTemplate**: `long-arc`（200 年技术+社会转型，13-17 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Richard Arkwright | 1732-1792 | 水力纺纱厂创始人，发明工厂制度+12 小时童工班 |
| lonely-mediator | Robert Owen | 1771-1858 | 工厂主转乌托邦改革者，New Lanark 模范工厂实验 |
| receiving-end | 一个曼彻斯特棉纺厂的 9 岁童工（composite，基于 1832 Sadler 报告证词） | c.1820-1850 | 每天 14 小时、被机器致残的工厂童工 |

**defaultLens**: `manchester-child-worker-receiving-end`

**跨 Topic micro-detail**:
- Arkwright 工厂制度 → 现有 `scientific-revolution`（Newton 力学→蒸汽机的科学应用链）+ A8 镀金时代（工厂制度的美国延续）
- Owen 乌托邦实验 → B9 经济史（社会主义思想源头）+ 现有 `reformation-1517`（理想社区实验母题）
- 曼彻斯特童工 → A8 Homestead 工人 + 现有 `black-death-1347`（劳动力与人身价值的转变）

**反 Whig rationale**: 不写成"技术进步带来繁荣"。工业革命同时是 GDP 暴涨与童工、寿命缩短、城市贫民窟的诞生。选 Arkwright（工厂制度=效率+剥削同体的发明者）而非某个纯善发明家。展示进步的人力成本。

**中美课纲交叉痛点**: 中国课纲讲工业革命较多，但**立场化**（"为殖民扩张提供基础""资本主义矛盾"），且不讲英国国内劳工代价的一手证词（Sadler 报告）。家长讲得了"蒸汽机"讲不了 enclosure / 工厂制度的社会重组。AP World Unit 5 核心。

---

## B2. The French Revolution & Napoleon 1789-1815（法国大革命与拿破仑）

- **topicId**: `french-revolution-1789`
- **grade/unit**: HS 9-10 / AP World Unit 5 / AP Euro
- **AP exam(s)**: AP World Modern（Unit 5，大西洋革命）+ AP European History（核心单元）
- **qaTemplate**: `multi-faction`（君主 vs 吉伦特 vs 雅各宾 vs 平民 vs 拿破仑，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Maximilien Robespierre | 1758-1794 | "不可腐蚀者"，用恐怖统治捍卫美德，最终上自己造的断头台 |
| lonely-mediator | Marquis de Lafayette | 1757-1834 | 跨美法两场革命的贵族自由派，两边都不容 |
| receiving-end | 一个 1789 攻巴士底狱、1793 排队买面包的巴黎女工（composite） | c.1760-1800 | 从革命希望到恐怖时期的巴黎平民妇女 |

**defaultLens**: `paris-washerwoman-receiving-end`

**跨 Topic micro-detail**:
- Robespierre 美德恐怖 → 现有 `enlightenment` Gouges（Olympe de Gouges 正是死于此时的断头台，直接时空咬合）——**强烈建议 B2 复用 enlightenment 的 Gouges 细节**
- Lafayette 跨美法革命 → A1/A2 美国建国（Lafayette 是华盛顿副手）+ 现有 `enlightenment`（理念跨大西洋传播）
- 巴黎女工面包游行 → B1 工业革命童工（平民承受变革代价的母题）

**反 Whig rationale**: 不写成"自由战胜暴政"。法国大革命同时产出《人权宣言》与断头台恐怖。选 Robespierre 展示"为最纯粹的理想可以杀最多的人"——启蒙理性的暴力面。Gouges 写《女权宣言》却被革命政府处死，是革命排斥女性的铁证。

**中美课纲交叉痛点**: 中国课纲讲法革为"资产阶级革命典范"，立场化且不讲恐怖时期的内在逻辑。家长讲不清 Jacobin vs Girondin、为何革命吃掉自己的孩子。AP Euro 核心单元 + AP World 大西洋革命比较。

---

## B3. The Scramble for Africa & New Imperialism 1870-1914（瓜分非洲与新帝国主义）

- **topicId**: `scramble-for-africa-1884`
- **grade/unit**: HS 9-10 / AP World Unit 6
- **AP exam(s)**: AP World Modern（Unit 6，帝国主义）+ AP Euro
- **qaTemplate**: `multi-faction`（欧洲列强 vs 传教士 vs 非洲王国 vs 被殖民者，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Leopold II of Belgium | 1835-1909 | 把刚果作为私人产业，橡胶暴政致数百万死 |
| lonely-mediator | George Washington Williams | 1849-1891 | 非裔美国记者+牧师，1890 公开信首次向世界揭发刚果暴行 |
| receiving-end | 一个被砍手的刚果橡胶采集村民（composite，基于真实照片记录） | c.1870-1905 | 完不成橡胶配额被殖民军砍手的村民 |

**defaultLens**: `congo-rubber-villager-receiving-end`

**跨 Topic micro-detail**:
- Leopold "文明使命"话语 → 现有 `age-of-exploration-1492`（Columbus/Las Casas，殖民暴力与"教化"修辞的延续）强对位
- George W. Williams 揭发 → A4 Douglass（非裔美国人的跨国人权视野）+ 现有 `scientific-revolution`（证据/记录作为武器）
- 刚果橡胶暴政 → B1 工业革命（橡胶供给汽车轮胎的工业需求驱动）+ 现有 `mali-empire-1235`（同一片非洲，前殖民的繁荣 vs 殖民暴力，反殖民史观锚）

**反 Whig rationale**: 新帝国主义是欧洲"文明进步"叙事的最黑暗反面。选 Leopold 展示"私人慈善家"面具下的种族灭绝级暴行。用刚果村民 lens + 与 `mali-empire` 的非洲前殖民繁荣对照，彻底拆解"欧洲给非洲带来文明"的 Whig 谎言。

**中美课纲交叉痛点**: 中国课纲讲帝国主义为"资本主义最高阶段"标签化，不讲刚果具体暴行与揭发史。家长讲不清 Berlin Conference 怎么用尺子在地图上划国界（今日非洲冲突的根源）。AP World Unit 6 核心。

---

## B4. World War I — The Great War 1914-1918（第一次世界大战）

- **topicId**: `world-war-one-1914`
- **grade/unit**: HS 10-11 / AP World Unit 7 / APUSH Period 7 / AP Euro
- **AP exam(s)**: AP World Modern（Unit 7）+ APUSH（Period 7，美国参战 + Wilson）+ AP Euro
- **qaTemplate**: `multi-faction`（同盟国 vs 协约国 vs 殖民地兵 vs 平民，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Woodrow Wilson | 1856-1924 | "十四点"理想主义者+在国内推种族隔离的种族主义者 |
| lonely-mediator | Gavrilo Princip | 1894-1918 | 19 岁刺杀斐迪南的塞族青年，点燃战争却死于狱中肺结核 |
| receiving-end | 一个在西线战壕的法属塞内加尔狙击兵（tirailleur，composite） | c.1895-1918 | 被法国征召、为宗主国送命的西非殖民地士兵 |

**defaultLens**: `senegalese-tirailleur-receiving-end`

**跨 Topic micro-detail**:
- Wilson 十四点 vs 国内隔离 → A6 `reconstruction`（Wilson 重新隔离联邦机构，反 Jim Crow 倒退）+ A9 妇女参政（同代理想/伪善）
- Princip 刺杀连锁反应 → B3 帝国主义（殖民竞争+联盟体系的张力顶点）
- 塞内加尔狙击兵 → B3 刚果（殖民地为宗主国流血的延续）+ 现有 `mali-empire-1235`（西非人的另一种命运）

**反 Whig rationale**: 选 Wilson 不选某个明确侵略者——Wilson 既是"为民主而战""民族自决"的理想主义者，又是在白宫重新推行种族隔离、放映《一个国家的诞生》的种族主义者。理想与伪善同体。用殖民地士兵 lens 揭示"为自由而战"背后被征召送死的非欧洲人。

**中美课纲交叉痛点**: 中国课纲讲一战为"帝国主义重新瓜分世界"，且重点在巴黎和会中国外交失败（五四运动）——但不讲战争本身的体验、Wilson 理想主义的内在矛盾、殖民地兵的代价。AP 三门考试（World/APUSH/Euro）共同核心。

---

## B5. The Progressive Era 1890-1920（进步时代）

- **topicId**: `progressive-era-1910`
- **grade/unit**: HS 11 / APUSH Period 7 / AP US Gov
- **AP exam(s)**: APUSH（Period 7，改革 + 反垄断 + 第 16/17/18/19 修正案）+ AP US Gov
- **qaTemplate**: `multi-faction`（改革者 vs 资本 vs 移民 vs 优生学者，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Theodore Roosevelt | 1858-1919 | 反垄断+保护自然的改革总统，同时持帝国主义+优生学倾向 |
| lonely-mediator | Jane Addams | 1860-1935 | Hull House 创办者，移民安置先驱，1931 诺贝尔和平奖 |
| receiving-end | 一个 1911 Triangle 工厂大火中跳楼的犹太/意大利移民女工（composite） | c.1895-1911 | 146 名死于被锁工厂门的制衣女工之一 |

**defaultLens**: `triangle-fire-worker-receiving-end`

**跨 Topic micro-detail**:
- TR 反垄断 → A8 镀金时代（Carnegie 等 trust 的直接回应）；TR 优生学倾向 → 现有 `scientific-revolution`（科学被挪用为种族等级，Newton→Galton 链）
- Jane Addams Hull House → A7 排华 + B4 移民（移民安置 vs 排外的张力）
- Triangle 火灾 → A8 Homestead + B1 曼彻斯特童工（劳工安全的血泪代价母题）

**反 Whig rationale**: 进步时代是"美国自我修复"的高光叙事，但选 TR 揭示同一批改革者同时是优生学、科学种族主义、帝国主义的推手——"进步"对谁进步？用 Triangle 火灾移民女工 lens 展示改革滞后的人命代价（火灾后才有工厂安全法）。

**中美课纲交叉痛点**: 中国课纲零覆盖美国进步时代。家长讲不清 muckraking / trust-busting / 直接民主改革（initiative/referendum），更讲不清进步主义与优生学的黑暗联系。APUSH Period 7 核心 + AP US Gov 改革修正案。

---

## B6. World War II & the Holocaust 1939-1945（二战与大屠杀）

- **topicId**: `world-war-two-1942`
- **grade/unit**: HS 10-11 / AP World Unit 7 / APUSH Period 7-8 / AP Euro
- **AP exam(s)**: AP World Modern（Unit 7）+ APUSH（Period 7-8，珍珠港+日裔拘留+原子弹）+ AP Euro
- **qaTemplate**: `multi-faction`（轴心 vs 同盟 vs 被占领民 vs 受害者，13-17 轮，long-arc 倾向）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Albert Speer | 1905-1981 | 希特勒的建筑师+军备部长，纽伦堡认"罪"却淡化知情，"好纳粹"神话制造者 |
| lonely-mediator | Chiune Sugihara | 1900-1986 | 日本驻立陶宛领事，违令签发数千份签证救犹太人，战后被解职 |
| receiving-end | 一个被关进 Manzanar 的日裔美国少女（composite，基于真实拘留营记录） | c.1928-2010 | 1942 Executive Order 9066 下被拘留的二代日裔美国公民 |

**defaultLens**: `manzanar-nisei-girl-receiving-end`

**跨 Topic micro-detail**:
- Speer "好纳粹"神话 → 现有 `black-death-1347` Konrad（普通人如何参与暴行的 Arendt 平庸之恶母题，直接续接）——**强烈建议复用 black-death Konrad 的 synthesis 框架**
- Sugihara 违令救人 → A4 Tubman（违法救人的道德勇气）+ B3 George W. Williams（个人对抗体制暴行）
- Manzanar 日裔拘留 → A7 排华法案（美国制度性反亚裔的延续，对华裔/亚裔学生强身份锚）+ Korematsu v. US 判例桥 AP Gov

**反 Whig rationale**: 二战是美国"善的战争"最强叙事，但用 Manzanar 日裔拘留 lens 揭示美国同时在国内对自己公民施行种族拘留（Korematsu v. US 最高法院还判合宪）。选 Speer 而非希特勒，处理"受过良好教育的人如何为暴行服务"——避免把纳粹简化为"疯子"，展示平庸之恶。

**中美课纲交叉痛点**: 中国课纲讲二战重在中国战场+反法西斯，对大屠杀机制、日裔拘留、原子弹伦理覆盖浅。家长讲不清 Holocaust 的工业化机制、Manzanar、Korematsu。AP 三门共同核心，且 Manzanar 对亚裔美国学生有身份意义。

---

## B7. The Cold War — Two Worlds 1947-1991（冷战）

- **topicId**: `cold-war-1962`
- **grade/unit**: HS 10-11 / AP World Unit 8 / APUSH Period 8
- **AP exam(s)**: AP World Modern（Unit 8，冷战+代理战争）+ APUSH（Period 8）
- **qaTemplate**: `long-arc`（1947 杜鲁门主义→古巴危机→越战→1991 解体，13-17 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | John F. Kennedy | 1917-1963 | 古巴导弹危机中的冷峻博弈者，也是猪湾入侵+越南升级的推手 |
| lonely-mediator | Vasili Arkhipov | 1926-1998 | 苏联潜艇副长，1962 古巴危机中拒绝发射核鱼雷"救了世界" |
| receiving-end | 一个被卷入代理战争的危地马拉/越南农民（composite） | c.1940-1980 | 在超级大国博弈中失去家园的第三世界平民 |

**defaultLens**: `proxy-war-peasant-receiving-end`

**跨 Topic micro-detail**:
- JFK 古巴博弈 → B6 二战（核武器从 B6 的原子弹到 B7 的相互确保毁灭，直接续接）
- Arkhipov 拒绝发射 → B6 Sugihara（个人在体制内的关键抗命，决定历史走向的母题）
- 代理战争农民 → B3 刚果 + B4 塞内加尔兵（大国博弈中第三世界承受代价的延续）+ B8 去殖民化

**反 Whig rationale**: 冷战的美式叙事是"自由世界 vs 极权"。用代理战争平民 lens + Arkhipov（救世界的是个苏联军官）打破"美国是无条件正义方"。选 JFK 展示理想总统也搞猪湾入侵、暗杀计划、越南升级——超级大国的暴力不分意识形态。

**中美课纲交叉痛点**: 中国课纲讲冷战有自己的立场框架（两极格局+第三世界），且中国在其中位置特殊。家长的冷战叙事与美国课堂版本差异极大——这恰是孩子最需要双视角的 Topic。AP World Unit 8 + APUSH Period 8 核心。

---

## B8. Decolonization & the Non-Aligned World 1947-1975（去殖民化）

- **topicId**: `decolonization-1960`
- **grade/unit**: HS 10 / AP World Unit 8
- **AP exam(s)**: AP World Modern（Unit 8，去殖民化）
- **qaTemplate**: `multi-faction`（殖民母国 vs 民族主义者 vs 冷战大国 vs 普通民众，13-15 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Winston Churchill | 1874-1965 | 反纳粹英雄+顽固帝国主义者，1943 孟加拉饥荒中拒援致 300 万死 |
| lonely-mediator | Ralph Bunche | 1904-1971 | 非裔美国外交官，联合国斡旋员，1950 诺贝尔和平奖（去殖民调停） |
| receiving-end | 一个 1947 印巴分治中失去一切的旁遮普难民（composite） | c.1920-1990 | 分治大迁徙中数百万流离失所、死于教派暴力者之一 |

**defaultLens**: `partition-refugee-receiving-end`

**跨 Topic micro-detail**:
- Churchill 帝国主义面 → B3 Leopold + B4 Wilson（"英雄"的殖民暴力同体母题，反 Whig 一致策略）
- Ralph Bunche → A4 Douglass + B3 George W. Williams（非裔美国人的全球人权角色长链）
- 印巴分治难民 → B3 Berlin Conference 划界（殖民者画的线如何制造永久冲突）+ B7 冷战（新国家被卷入两极）

**反 Whig rationale**: 去殖民化常被讲成"自由的胜利"，但选 Churchill 展示反法西斯英雄同时是拒绝放弃帝国、对孟加拉饥荒负责的人。用印巴分治难民 lens 展示独立的暴力代价（分治死亡可能超百万）——独立不等于美好结局。

**中美课纲交叉痛点**: 中国课纲讲亚非拉民族解放运动有自己框架，但不讲分治暴力、不结盟运动的复杂性、Churchill 的另一面。家长讲不清为何独立后立刻陷入冲突。AP World Unit 8 核心，与中国"第三世界"叙事形成有益张力。

---

## B9. The Civil Rights Movement 1954-1968（民权运动）

- **topicId**: `civil-rights-1965`
- **grade/unit**: HS 11 / APUSH Period 8 / AP US Gov（判例 + 立法）
- **AP exam(s)**: APUSH（Period 8）+ AP US Gov（Brown v. Board, Letter from Birmingham Jail 必读文献）
- **qaTemplate**: `long-arc`（1954 Brown→1963 Birmingham→1965 Selma/投票权法，13-17 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | George Wallace | 1919-1998 | 阿拉巴马州长"挡校门"，"永远隔离"演说，后期忏悔 |
| lonely-mediator | Bayard Rustin | 1912-1987 | MLK 的策略大脑+非暴力导师，因同性恋身份被运动边缘化 |
| receiving-end | 一个 1965 Selma 桥上"血腥星期日"被警棍打的青少年游行者（composite） | c.1948-2020 | 为投票权游行被殴打的黑人青少年 |

**defaultLens**: `selma-teen-marcher-receiving-end`

**跨 Topic micro-detail**:
- Wallace 挡校门 vs Brown v. Board → A6 `reconstruction`（14th Amendment Equal Protection 终于在 90 年后被激活，强闭环）
- Bayard Rustin 被边缘化 → A9 Ida B. Wells + B5（运动内部对"不够体面"成员的排斥母题）
- Selma 青少年游行者 → A4 Tubman + B7 代理战争平民（普通人/年轻人承受历史重量的一致 receiving-end 设计）

**反 Whig rationale**: 民权运动是美国最强的"自由进步"叙事。反 Whig 处理：用 Bayard Rustin（运动的策略核心，却因性取向被自己人雪藏）揭示进步运动内部的排斥；选 Wallace 不写成纯恶人而展示其后期忏悔（人会变）；强调投票权法案后种族不平等并未消失（避免"问题已解决"的凯歌）。

**中美课纲交叉痛点**: 中国课纲对美国民权运动覆盖浅（多停在 MLK"我有一个梦想"）。家长讲不清 Brown v. Board 的法律机制、非暴力策略的设计、Bayard Rustin 这样的隐形人物。AP US Gov 必读 Letter from Birmingham Jail + Brown 判例。

---

## B10. The Great Depression & the New Deal 1929-1939（大萧条与新政）

- **topicId**: `great-depression-1933`
- **grade/unit**: HS 11-12 / APUSH Period 7 / AP US Gov（联邦权扩张）/ AP Macroeconomics
- **AP exam(s)**: APUSH（Period 7）+ AP US Gov（New Deal 联邦权扩张）+ AP Macroeconomics（财政政策入门）
- **qaTemplate**: `long-arc`（1929 崩盘→1933 新政→最高法院冲突→1939，13-17 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Franklin D. Roosevelt | 1882-1945 | 新政缔造者，扩张联邦权，但排除黑人佃农+签 9066 拘留日裔 |
| lonely-mediator | Frances Perkins | 1880-1965 | 首位女性内阁部长（劳工部长），社会保障法主设计者 |
| receiving-end | 一个被新政农业补贴挤出土地的南方黑人佃农（composite） | c.1900-1970 | AAA 减产补贴付给地主、佃农被赶走的受害者 |

**defaultLens**: `displaced-sharecropper-receiving-end`

**跨 Topic micro-detail**:
- FDR 新政联邦权扩张 → A2 Hamilton（联邦权 vs 州权的百年张力顶点）+ A8/B5（对镀金时代不平等的制度回应）
- Frances Perkins 社保法 → A9 妇女参政（女性进入权力核心的延续）+ B1 Owen（社会安全网思想源头）
- 被挤出的黑人佃农 → A6 `reconstruction`（sharecropping 的延续与新政的种族盲点，强闭环）

**反 Whig rationale**: 新政是"政府拯救人民"的高光叙事。反 Whig：FDR 的新政系统性排除黑人（社保最初不覆盖农业/家政工=多数黑人就业），农业补贴付给地主反而赶走黑人佃农。用被挤出的佃农 lens + 经济史双视角（凯恩斯 vs 哈耶克：政府干预是救命还是延长萧条？）保持中立，不预设"大政府=好"。

**中美课纲交叉痛点**: 中国课纲讲大萧条+罗斯福新政较多，但**高度立场化**（"国家垄断资本主义""暂时缓和矛盾"），且不讲新政的种族盲点、凯恩斯主义经济学辩论。家长讲不清财政政策、社会保障的设计逻辑。APUSH + AP US Gov + AP Macro 三重考点。

---

# Band C — Grade 6: Ancient Civilizations（3 个新 Topic，最后回填）

> CA HSS Grade 6 = 古代文明（美索不达米亚、埃及、以色列/库施、印度、早期中国、希腊、罗马）。回填理由：① 古代史中国课纲覆盖度较高（埃及/希腊/罗马中国孩子多少接触过），痛点弱于 G8/HS；② 但有 3 个 Topic 满足"中国不教 + 美国核心 + 家长盲区"——选这 3 个，不做全 7 文明（其余文明痛点不足，见末尾排除说明）。本 band 是 AP World 的史前根（c.1200 之前），也服务部分 AP World Unit 1 的更早背景。

---

## C1. Mesopotamia & Hammurabi's Code c.1754 BCE（美索不达米亚与汉谟拉比法典）

- **topicId**: `hammurabi-code-1754bce`
- **grade/unit**: 6.2 / AP World 史前根（成文法起源）
- **AP exam(s)**: 间接服务 AP World（早期国家+法律比较）；主要为 CA HSS Grade 6
- **qaTemplate**: `simple-binary`（单一法典文本 + 阶级差等正义的二元张力，9-13 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Hammurabi | r.1792-1750 BCE | 巴比伦王，刻 282 条法典于石柱，"正义"按阶级差等 |
| lonely-mediator | 一个刻写法典的书吏（scribe，composite，基于楔形文字职业史） | c.1770 BCE | 在湿泥板上记录、夹在王权与百姓间的识字阶层 |
| receiving-end | 一个受 awilum/mushkenum/wardum 三等正义不同对待的平民女性（composite） | c.1750 BCE | 同样伤害因阶级不同赔偿天差地别的受害者 |

**defaultLens**: `babylonian-commoner-woman-receiving-end`

**跨 Topic micro-detail**:
- Hammurabi 成文法"以眼还眼" → 现有 `magna-carta-1215`（成文法约束 vs 不约束统治者的对比，Magna Carta narrative 已提"law of the land"可前挂到此源头）
- 书吏阶层 → 现有 `scientific-revolution` Mersenne / 现有 `mali-empire` 廷巴克图抄书人（识字者作为知识中介的跨文明母题）
- 三等差等正义 → A4 美国奴隶制（法律下人不平等的古今对照）

**反 Whig rationale**: 不把汉谟拉比法典写成"人类法治第一步"的进步起点。法典明文规定 awilum（贵族）、mushkenum（平民）、wardum（奴隶）三等人同罪不同罚——成文不等于平等。展示"法律"从一开始就是权力工具，与正义的关系复杂。

**中美课纲交叉痛点**: 中国课纲对两河文明覆盖极浅（多一句"四大文明古国"带过）。家长讲不清楔形文字、汉谟拉比法典的阶级结构。CA HSS Grade 6 核心单元，也是理解成文法起源的世界史地基。

---

## C2. Ancient Israel & the Babylonian Exile c.586 BCE（古以色列与巴比伦之囚）

- **topicId**: `babylonian-exile-586bce`
- **grade/unit**: 6.3 / AP World 史前根（一神教起源）
- **AP exam(s)**: 间接服务 AP World（宗教传统起源）；主要为 CA HSS Grade 6
- **qaTemplate**: `simple-binary`（征服 vs 信仰存续的二元张力，9-13 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Nebuchadnezzar II | r.605-562 BCE | 新巴比伦王，毁第一圣殿，将犹太精英掳至巴比伦 |
| lonely-mediator | 先知 Jeremiah（耶利米） | c.650-570 BCE | 警告灭国却被同胞视为叛徒，主张在流亡中保存信仰 |
| receiving-end | 一个被掳到巴比伦河边的犹太少年（composite，基于《诗篇》137 篇） | c.600-540 BCE | "我们在巴比伦河边坐下哭泣"的流亡一代 |

**defaultLens**: `exiled-judean-youth-receiving-end`

**跨 Topic micro-detail**:
- 巴比伦之囚 → 现有 `black-death-1347` Devorah（犹太离散史的源头，Devorah 1349 Strasbourg 是这条 2000 年离散线的延续，强闭环）——**这是把 C2 接进现有 spine 最有力的一条线**
- Jeremiah 不被同胞接受的先知 → 现有 `reformation-1517`（Luther 挑战正统的母题）
- 流亡中保存信仰（成文经典化）→ C1 书吏（文字保存文明的跨文明母题）

**反 Whig rationale**: 不写成"上帝选民的苦难与救赎"的宗教凯歌，也不写成征服者的单纯暴行。展示一神教、希伯来圣经的成文，恰恰是在亡国流亡的创伤中被锻造——文明韧性的复杂起源。保持对犹太信仰传统的文化精度（参考第 8 条 E 角色称谓 + 文化敏感）。

**中美课纲交叉痛点**: 中国课纲完全不讲古以色列史/一神教起源（无对应概念）。这是家长最大盲区之一，却是理解犹太教-基督教-伊斯兰教共同根的关键。CA HSS Grade 6 明列，且现有 spine 有 Crusades / Black Death / Reformation 等大量宗教 Topic 需要这个源头。

---

## C3. The Roman Republic & Its Fall c.509-27 BCE（罗马共和国与崩溃）

- **topicId**: `roman-republic-fall-44bce`
- **grade/unit**: 6.7 / AP World 史前根（共和制起源）
- **AP exam(s)**: 间接服务 AP World + AP US Gov（美国国父借鉴罗马共和）；主要为 CA HSS Grade 6
- **qaTemplate**: `long-arc`（共和制建立→格拉古→凯撒→共和崩溃，13-17 轮）

| Role | 主角 | 生卒 | Tag |
|---|---|---|---|
| perpetrator-actor | Julius Caesar | 100-44 BCE | 才华横溢的将军/政治家，跨过卢比孔河终结共和，死于元老院 |
| lonely-mediator | Cicero | 106-43 BCE | 雄辩家+共和派，想用言辞挽救共和，最终被处死割舌 |
| receiving-end | 一个无地的罗马平民/退伍兵（composite，基于格拉古改革背景） | c.130-44 BCE | 土地兼并下失地、把选票卖给军阀的平民 |

**defaultLens**: `landless-plebeian-receiving-end`

**跨 Topic micro-detail**:
- 罗马共和制 senate/consul/checks → A1 `constitutional-convention`（美国国父直接借鉴罗马共和设计，Madison 读 Polybius，强闭环）+ 现有 `magna-carta-1215`（Aristotle "law should govern" 引文已在 Magna Carta turn 12，可前挂罗马源头）
- Cicero 用言辞救共和 → A2 Hamilton/Jefferson（雄辩与党争的西方政治传统母题）
- 失地平民卖选票 → A8 镀金时代（财富集中腐蚀民主的古今对照）

**反 Whig rationale**: 不写成"罗马给世界共和制"的进步起点。罗马共和的崩溃恰恰展示：共和制可以从内部被财富集中、军阀化、民粹腐蚀。选 Caesar（才华+僭越同体）+ 用失地平民 lens 展示共和"民主"从来只属于部分人。给美国学生一面镜子：共和制不是终点，会死。

**中美课纲交叉痛点**: 中国课纲对罗马覆盖浅且偏帝国（不讲共和制机制）。家长讲不清 senate/consul/tribune 制衡设计、共和如何崩溃。CA HSS Grade 6 核心，且是 AP US Gov 理解美国宪法设计来源的关键（国父自比罗马共和）。

---

# 排除说明（BORDERLINE Topic — 考虑过但排除）

以下 Topic 在选题筛选中被**主动排除**，因为它们违反第 1 步标准中的"中国课纲不教 + 家长辅导不了"——它们要么中国课纲也讲且立场清晰、要么家长能辅导、要么长尾意义在现有 spine 中已被其他 Topic 覆盖：

**美国独立战争（American Revolution 1776）**——pipeline 第 1 步已明确列为反例（"中国课纲也讲，家长辅导得了"）。中国课纲把它作为"资产阶级革命"重点讲，家长有现成框架，故排除；其制度遗产由 A1 费城制宪承接。**古埃及（Ancient Egypt）**——虽是 CA HSS Grade 6 核心，但中国孩子对金字塔/法老/木乃伊接触度高（科普/影视/旅游饱和），痛点不足；其"成文制度起源"功能由 C1 美索不达米亚更锋利地承担。**古印度/早期中国（CA HSS 6.5/6.6）**——早期中国对中国学生毫无盲区（本国史）；古印度的种姓/佛教中国孩子经佛教文化间接接触较多，痛点弱于两河/以色列。**古希腊单列 Topic（雅典民主）**——雅典民主作为概念中国课纲会提及，且其"共和/制衡"长尾已由 C3 罗马共和（更直接对接美国宪法）+ 现有 Magna Carta 的 Aristotle 引文覆盖，单列性价比低。**冷战中的越南战争单列**——已并入 B7 冷战的代理战争 lens，单列会与 B7 重复，违反"每个 Topic 必须 earn its place"。**第二次世界大战的太平洋战场/中国战场单列**——中国战场是中国课纲重点（家长熟、立场化强），不符合"家长盲区"标准；二战的反 Whig 价值已由 B6 的 Manzanar 日裔拘留 + Holocaust 机制承担。
