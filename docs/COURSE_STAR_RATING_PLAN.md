# 课程考试重要性打星方案 — 2026-06

> AP 考试专家 + 历史老师/课程专家 双盲打分 → 综合。供创始人审阅。
> 落地前方案, 实现见 lib/history-grade-map.js examStars 字段。

The distribution is healthy (5★ 12, 4★ 20, 3★ 26, 2★ 9, 1★ 4) — clear gradient, weight on 3-4★, exam-importance legible. Here is the final plan.

---

# Know U. 历史 71 门课 · 考试重要性最终评分方案

合并两位专家评分（AP 考试专家 + 历史老师/课程专家），产出可直接落地的统一星级体系。

---

## 1. 最终 Rubric（统一 1-5★ 定义）

**合并逻辑**：创始人要的是「考试重要性一眼可辨」，所以**默认以 AP 考试权重为主、教学地基为辅**。具体规则：

- **基线 = AP 考试专家分**（考试视角是这套星标的主轴）。
- **教学专家分作为「加权放大器」**：当某课在 AP 上是中等、但在 through-line 枢纽性 / 跨主题迁移上明显更强（教学分 +1 以上），且该课**确实落在考纲内**，允许向上微调 1 星。
- **G6 古代文明的分歧（两专家系统性差 2 星）单独裁决**：取折中但保留考试 ROI 的可辨性——真正的概念枢纽课（希腊/秦/罗马/两河/农业革命）抬到 3★（地基价值认账），纯切片/可被母课承接的（汉谟拉比/巴比伦囚/印度河/笈多）压到 1-2★（考试 ROI 如实低）。**不因「文明地基」整体抬星**，地基价值属初中课程价值，不混入 AP 考试价值。

| 星级 | 一句话定义 |
|------|-----------|
| **5★** | AP 高权重单元（World U3-U6 / APUSH P3-P8）× DBQ/LEQ 最高频 through-line 锚点。考生不会就直接丢分，必学扎实。 |
| **4★** | 高权重单元里的重要考点，或两考双覆盖的强项；独立出题频率略低于 5★，常作比较题一极。学扎实回报很高。 |
| **3★** | 在考纲内但属中低权重单元，或重单元里的背景/支线考点；作情境知识有用，直接命题概率中等。该学。 |
| **2★** | 单一考纲边缘支线、与相邻课叙事高度重叠的颗粒度课，或仅作背景铺垫极少独立命题。该学但不该花最多时间。 |
| **1★** | 不在 AP World（1200 起）/ APUSH 直接命题范围的纯古代文明地基课，或纯拓展边缘主题。考试 ROI 最低（地基价值在初中课程，不在 AP）。 |

---

## 2. 最终星级表（71 门，按星数从高到低分组）

### ⭐⭐⭐⭐⭐ 5★ — 必学核心高频（12 门）

| ID | 最终依据 |
|----|---------|
| age-of-exploration-1492 | World U4 + APUSH P1 双覆盖，哥伦布交换/全球白银是最高频 DBQ/CCOT 锚点。 |
| french-revolution-1789 | World U5 革命时代核心 + 所有后续革命/民族主义母版，大西洋革命链最高频锚点。 |
| industrial-revolution-1800 | World U5/U6 跨段第一主干，工业化是帝国主义/阶级/全球化总因，迁移价值全站最高。 |
| scramble-for-africa-1884 | World U6 新帝国主义核心，DBQ/LEQ 最高频（动机/正当化）。 |
| **asian-imperialism-1839** | World U6 必考（鸦片战争/英属印度）+ 华裔近代史开端，DBQ/LEQ 高频。**两专家分歧裁决见 §4。** |
| world-war-two-1942 | World U7 + APUSH P7 双轨高频，20 世纪总转折，全题型覆盖。 |
| cold-war-1962 | World U8 + APUSH P8 双轨，两考共有最长 through-line，战后全球秩序总框架。 |
| **enlightenment** | World U5 + APUSH P3 双覆盖，革命时代意识形态总源头，DBQ 高频。**裁决见 §4。** |
| **constitutional-convention-1787** | APUSH P3 + AP Gov 地基，美国政府结构总枢纽，迁移到所有后续美国史。**裁决见 §4。** |
| **slavery-abolition-1850** | APUSH P5 内战前因核心，奴隶制/废奴/种族 through-line，DBQ 最高频。**裁决见 §4。** |
| civil-war-1861 | APUSH P5 体量最大锚点，全题型高频，重建与种族史总前置。 |
| civil-rights-1965 | APUSH P8 当代美国最高频 through-line，全题型必考。 |

### ⭐⭐⭐⭐ 4★ — 核心骨干（20 门）

| ID | 最终依据 |
|----|---------|
| tang-song-china | World U1 核心，唐宋商业革命/科举/儒学，U1 最常考中国内容 + 华裔强关联。 |
| renaissance-1500 | World U3 起点，人文主义→科革→启蒙链开端，HSS 高中骨干。 |
| reformation-1517 | World U3 高权重，宗教分裂→民族国家 through-line，DBQ 高频。 |
| islamic-rise | World U1 核心，Dar al-Islam 是 1200 段宗教/贸易/知识传播关键 through-line。 |
| mongol-empire | World U2 标志，蒙古连通欧亚是网络交流最高频因果/CCOT 考点。 |
| trade-networks-1200 | World U2 核心框架课（整合丝路/印度洋/跨撒哈拉），comparison/causation 高频，当前最大结构缺口。 |
| gunpowder-empires-1600 | World U3 陆基帝国核心，火药三帝国是比较题高频锚点。 |
| world-war-one-1914 | World U7 + APUSH P7 双覆盖，全球冲突起点 through-line。 |
| decolonization-1960 | World U8 核心，殖民秩序瓦解 through-line，DBQ 高频。 |
| haitian-revolution-1791 | World U5 大西洋革命链关键一环，2024 真题考过，唯一成功奴隶革命高价值比较点。 |
| meiji-restoration-1868 | World U6 非西方成功工业化标杆，与中国洋务失败强对照（华裔必考），比较题高频。 |
| russian-revolution-1917 | World U7 + APUSH P7，共产主义兴起是冷战总前置，意识形态迁移高。 |
| latin-american-independence-1810 | World U5 大西洋革命四件套之一，AP World 革命比较题高频。 |
| hamilton-jefferson-1790s | APUSH P3 高权重，两党起源/金融体系/外交常考点。 |
| american-revolution-1776 | APUSH P3 必考，建国 through-line 主干，DBQ/LEQ 高频。 |
| reconstruction-1877 | APUSH P5 重建，修正案/种族秩序直通 Plessy→Brown→民权长链。 |
| gilded-age-1890 | APUSH P6 高权重，工业化/垄断/劳工/民粹经济社会主干。 |
| progressive-era-1910 | APUSH P7 进步改革，国家建设 through-line 高频 DBQ。 |
| great-depression-1933 | APUSH P7 大萧条/新政，政府角色扩张 through-line 高频锚点。 |
| vietnam-war-1965 | APUSH P8 体量最大段高频 through-line（越战 + 1960s 动荡），DBQ/LEQ 常考。**裁决见 §4。** |

### ⭐⭐⭐ 3★ — 标准课（26 门）

| ID | 最终依据 |
|----|---------|
| magna-carta-1215 | World U1 法治起源，宪政 through-line 背景，比较题能当一极，少独立命题。 |
| crusades-1099 | World U1 跨文化接触背景，可被 islamic/byzantine 承接，非枢纽。 |
| black-death-1347 | World U2 网络交流后果经典案例，偶入因果题，中权重。 |
| mali-empire-1235 | World U2 跨撒哈拉贸易代表，出题集中但中权重，可被贸易网络课承接。 |
| byzantine-rise | World U1 文化延续考点，中权重独立命题中等。 |
| medieval-japan | World U1 封建比较题相关，区域专题非全局枢纽。 |
| pre-columbian | World U2 + APUSH 前置，哥伦布交换另一端，标准课非枢纽。 |
| scientific-revolution | World U5 思想背景，启蒙前因，多作因果链一环少直接命题。 |
| native-americans-pre1500 | World U2 + APUSH P1 背景（P1 仅 4-6%），多作情境。 |
| globalization-1995 | World U9 + APUSH P9 双低权重，当代收口，内容未固化。 |
| **ancient-greece-480bce** | G6 但民主/公民/西方政治思想 through-line 源头，迁移到宪法/启蒙极高，古文明枢纽性最强。**裁决见 §4。** |
| **qin-china-221bce** | G6 但中央集权/统一国家形成枢纽，与罗马/波斯行政对照高频 + 华裔强关联。**裁决见 §4。** |
| **roman-republic-fall-44bce** | G6 但共和→帝制 CCOT 是政治制度迁移核心（建国者反复援引）。**裁决见 §4。** |
| **roman-empire-peak-117** | G6/U1 帝国治理/罗马法/基督教兴起 through-line，共和→帝国 CCOT。**裁决见 §4。** |
| jackson-indian-removal-1830 | APUSH P4 民主扩张/印第安政策，与西扩多课重叠，集中度中等。 |
| manifest-destiny-1845 | APUSH P4 扩张/Wilmot Proviso 因果链，与西扩重叠集中度中等。 |
| reform-movements-1840 | APUSH P4 改革运动，与奴隶制课重叠，中频。 |
| chinese-exclusion-1882 | APUSH P6 移民/排外 + 华裔切身，单一立法专题非全局枢纽。 |
| womens-suffrage-1920 | APUSH P7 妇女参政，常作进步运动支线，独立 LEQ 中等。 |
| thirteen-colonies-1700 | APUSH P2（6-8%）殖民基础，多作 P3 革命前因情境。 |
| road-to-revolution-1763 | APUSH P3 革命前因（七年战争/帝国危机），常作 american-revolution 前置。 |
| colonial-america-1650 | APUSH P2 殖民深化（大觉醒/三角贸易），权重偏低，与 thirteen-colonies 重叠。 |
| early-republic-1800 | APUSH P4 填断层（1812/市场革命/密苏里），常并入 Jackson 段命题。 |
| spanish-american-war-1898 | APUSH P7 海外帝国开场 + 门户开放桥接瓜分中国，单一战争专题。 |
| cold-war-home-front-1950 | APUSH P8 国内维度（McCarthyism/郊区化），冷战支线常并入冷战命题。 |
| interwar-totalitarianism-1919 | World U7 极权兴起填 WWI→WWII 断档，中权重常并入两战命题。 |

### ⭐⭐ 2★ — 次要/边缘（9 门）

| ID | 最终依据 |
|----|---------|
| **ancient-egypt-2550bce** | G6 河谷文明经典案例 + 初中骨干，但早于 AP World 1200 不直接命题。**裁决见 §4。** |
| **mauryan-india-261bce** | G6 古印度地基（阿育王/佛教），文明对照价值，AP 不命题。**裁决见 §4。** |
| **mesopotamia-3500bce** | G6 文明总开篇地基（四要素/最早城市文字），AP 不命题。**裁决见 §4。** |
| **early-humans-10000bce** | G6 古代轨开篇（农业革命=文明前提最高阶概念），早于考纲。**裁决见 §4。** |
| han-china-130bce | G6 古代，汉/罗马比较是经典背景对照，AP 不考汉朝本身。 |
| ancient-israel-1000bce | G6 一神教起源，是伊斯兰/十字军/宗教改革 through-line 远端源头，AP 不直接考。 |
| persian-empire-550bce | G6 阿契美尼德行政是古典帝国比较背景，AP 不直接考。 |
| westward-expansion-1869 | APUSH P6 西扩，与 manifest-destiny/jackson/native 四件套叙事重叠，冗余颗粒度。 |
| contemporary-us-1980 | APUSH P9（4-6%）最低权重时期，独立命题概率低，拓展性质。 |

### ⭐ 1★ — 纯地基/拓展（4 门）

| ID | 最终依据 |
|----|---------|
| hammurabi-code-1754bce | G6 法典切片，应被 mesopotamia 母课承接，纯初中地基不在考纲。 |
| babylonian-exile-586bce | G6 一神教专题切片，应被 ancient-israel 承接，AP 不考。 |
| indus-valley-2600bce | G6 印度河起点（遗存少/迁移点弱），可被 mauryan/gupta 承接，AP 不考。 |
| gupta-india-320 | G6 印度黄金时代专题，古典印度可被 mauryan 承接，AP 不命题。 |

---

## 3. 分布检查

| 星级 | 门数 | 占比 | 目标区间 | 状态 |
|------|------|------|---------|------|
| 5★ | 12 | 17% | 10-15 门 | 略高于上限，但 12 门均为双覆盖/最高频锚点，可接受 |
| 4★ | 20 | 28% | 18-24 门 | ✅ 健康 |
| 3★ | 26 | 37% | 主峰，25-30 门 | ✅ 健康（重心在考纲内中权重） |
| 2★ | 9 | 13% | 8-12 门 | ✅ 健康 |
| 1★ | 4 | 6% | 3-8 门（长尾） | ✅ 健康 |

**结论**：梯度拉开充分，主峰在 3★，没有堆在 4-5★。两专家原始分布的最大差异（AP 专家给 12 门 1★、教学专家只给 2 门）在合并后收敛到 1★ 4 门 + 2★ 9 门——既保留「纯切片课考试 ROI 最低」的诚实信号，又不把有概念枢纽价值的地基课误杀。

**对比两专家原始分布**：

| | 5★ | 4★ | 3★ | 2★ | 1★ |
|--|--|--|--|--|--|
| AP 考试专家 | 8 | 19 | 23 | 9 | 12 |
| 教学专家 | 9 | 24 | 30 | 6 | 2 |
| **最终方案** | **12** | **20** | **26** | **9** | **4** |

最终 5★ 比两人都高（12），因为合并规则在「双覆盖且教学也认可」处放行了 enlightenment / constitutional-convention / slavery-abolition / asian-imperialism——这 4 门 AP 专家给 4★ 但教学专家给 5★ 或同为高频枢纽，向上取整合理。

---

## 4. 分歧清单（两专家差 ≥2 星）+ 裁决

全部 8 处分歧都落在 **G6 古代文明**，且方向一致（AP 专家压低、教学专家抬高，差 2 星）。这是两套 rubric 的本质张力：AP 视角「1200 前不命题→ROI 最低」 vs 教学视角「文明四要素/国家形成/农业革命是高阶迁移母概念」。

**裁决原则**：默认偏向考试权重（创始人要可辨性），但承认教学专家的关键论点——「初中没把母概念学扎实，高中 AP 比较/因果题搭不起框架」。所以**真正的概念枢纽课折中抬到 3★，纯切片课守在 2★**，让 G6 内部也有梯度。

| ID | AP | 教学 | **最终** | 裁决理由 |
|----|----|----|--------|---------|
| ancient-greece-480bce | 2 | 4 | **3** | 民主/公民/政治思想是宪法/启蒙的远端源头，古文明里枢纽性最强；折中抬到 3★ 但不给 4★（AP 仍不直接命题）。 |
| qin-china-221bce | 2 | 4 | **3** | 中央集权/郡县制是古典帝国行政比较题常引背景 + 华裔强关联，折中 3★。 |
| roman-republic-fall-44bce | 2 | 4 | **3** | 共和→帝制 CCOT 是政治制度迁移核心（建国者援引），折中 3★。 |
| roman-empire-peak-117 | 2 | 4 | **3** | 已挂 U1 标签 + 罗马法/帝国治理 through-line，是 8 门里唯一非纯 G6（有 apWorld:U1），折中 3★。 |
| ancient-egypt-2550bce | 1 | 3 | **2** | 河谷文明经典案例有初中骨干价值，但无明确 AP 迁移枢纽，从地板抬一格到 2★ 即可。 |
| mauryan-india-261bce | 1 | 3 | **2** | 阿育王/佛教传播有对照价值但 AP 不命题，2★。 |
| mesopotamia-3500bce | 1 | 3 | **2** | 文明总开篇（四要素/文字起源）是地基母课，比可被承接的切片课高一格，2★。 |
| early-humans-10000bce | 1 | 3 | **2** | 农业革命是文明前提最高阶迁移概念（教学专家强论点成立），从地板抬到 2★；但 AP 完全不考，不给 3★。 |

**未列入分歧但需说明的一致下调**：hammurabi / babylonian / indus / gupta 两专家都判为「可被母课承接的切片」（AP 给 1★、教学给 1-2★），最终统一 1★——这是两人**共识**的纯地基长尾，不是分歧。

---

## 5. UI 落地建议（可执行）

### 5.1 数据存储 — 加 `examStars` 到 grade-map

**推荐位置**：`/Users/williamai/projects/vocabspark/lib/history-grade-map.js` 的 `COURSE_GRADE_MAP`，每门课加一个 `examStars` 字段。理由：

- 该文件已是「年级/AP 单元」的单一权威映射表，星标本质同源（都是课程元数据，非内容），放一起维护成本最低。
- `getGradeTags(topicId)`（line 123）是课卡唯一读取入口，加字段后 `tags.examStars` 自动可用，**零额外接线**。
- 不污染 `history-topics.js`（2790 行的内容中枢），也不需要 runtime 解析 notebook。

具体改法（每行追加 `examStars`，示例）：

```js
'age-of-exploration-1492':   { grade: 'G7', apWorld: 'U4', apush: 'P1', g5: true, examStars: 5 },
'civil-war-1861':            { grade: 'G8', apWorld: null, apush: 'P5', examStars: 5 },
'hammurabi-code-1754bce':    { grade: 'G6', apWorld: null, apush: null, examStars: 1 },
// ... 71 门全部补齐
```

并在文件里同步加一个元数据常量供 tooltip 用：

```js
export var EXAM_STARS_META = {
  5: { cn: '必学核心高频', en: 'Core · High-Yield',     hint: 'AP 高权重单元 × DBQ/LEQ 最高频锚点，必学扎实' },
  4: { cn: '核心骨干',     en: 'Key Pillar',            hint: '高权重重要考点或双考覆盖，学扎实回报高' },
  3: { cn: '标准课',       en: 'Standard',              hint: '考纲内中权重，该学，直接命题概率中等' },
  2: { cn: '次要/边缘',    en: 'Secondary',             hint: '边缘支线或叙事重叠，该学但不该花最多时间' },
  1: { cn: '地基/拓展',    en: 'Foundation',            hint: 'AP 不直接命题的古代地基课，考试 ROI 最低' },
};
```

### 5.2 课程卡（CourseBrowser.js line 120-122 chip 区）

在现有 `grade / AP World / APUSH` chip 旁加一个星标 chip。**注意**：用实心★显示星数，不要显示「2/5」分数感（避免学生误读成「这门课只值 2 分别学」）。配色按档位渐变（5★ 暖橙 = 主推，1★ 灰 = 弱化）：

```jsx
{tags.examStars && (
  <span style={chipStyle(starColor(tags.examStars))} title={EXAM_STARS_META[tags.examStars].hint}>
    {'★'.repeat(tags.examStars)} {EXAM_STARS_META[tags.examStars].cn}
  </span>
)}
```

- `starColor(5)` → `HC.accent`（暖橙，最显眼）；`starColor(1)` → 中性灰。
- 5★ 课卡额外加一个「考点必学 / Must-Know」角标，做视觉锚。

### 5.3 排序与筛选

- **AP 考试 Tab（CourseBrowser line 244-265）**：在每个 Unit/Period 分组内，二级排序按 `examStars` 降序（line 189 现有 `byGrade[g].sort` 同款），让高星课自动浮到组内顶部。
- 加一个「**只看 4★+**」快捷筛选 chip，给备考冲刺的学生一键聚焦。

### 5.4 「先学 5★」引导文案（中英）

**课程浏览器顶部 banner（首次进入）**：
- 中：「时间有限？先学 ★★★★★ 的课——这些是 AP 考试里反复出题、不会就直接丢分的核心考点。」
- EN: "Short on time? Start with the ★★★★★ courses — these are the high-yield topics AP exams test again and again. Miss them and you lose points."

**详情页 5★ 课头部标语**：
- 中：「核心高频考点 · AP 必考 · 建议优先掌握」
- EN: "Core High-Yield · AP Essential · Master This First"

**1-2★ 课头部（管理预期，不劝退）**：
- 中：「打地基的拓展课 · AP 不直接考，但帮你看懂后面的历史」
- EN: "Foundation course · Not directly tested on AP, but it makes everything after it click."

### 5.5 落地顺序（MVP）

1. `history-grade-map.js`：71 门加 `examStars` + `EXAM_STARS_META`（纯数据，10 分钟，零风险）。
2. `CourseBrowser.js`：课卡加星标 chip + tooltip（line 120 附近）。
3. AP Tab 组内按星降序 + 顶部 banner 文案。
4. （可选）详情页头部标语 + 「只看 4★+」筛选。

第 1 步是纯数据补全、无逻辑改动、不碰 sync/auth/payment 高危区，可直接 ship。第 2-4 步是 UI 增量，建议 `/codex-review` 跨模型过一遍即可，无需 workflow。

---

**关键文件路径**：
- 评分存储与元数据（建议改）：`/Users/williamai/projects/vocabspark/lib/history-grade-map.js`
- 课卡渲染与排序（建议改）：`/Users/williamai/projects/vocabspark/components/history-engine/CourseBrowser.js`（line 81 读 tags、120-122 chip 区、189 组内排序、244-265 AP Tab）
- 内容中枢（**不建议改**，避免污染）：`/Users/williamai/projects/vocabspark/lib/history-topics.js`

---

## 附: AP 考试专家 rubric

纯 AP 考试视角 rubric (AP 相关性第一位)。评分先看「这门课对应的 AP CED 单元/时期的考试权重 (%)」, 再叠加「该主题在 DBQ/LEQ 的出题频率 + 是否核心 through-line + 是否必考锚点」, 最后看「是否进入华裔主升学路径 AP World/APUSH 的考纲范围」。

5★ 必学扎实的核心高频: 落在 AP 高权重单元 (AP World U3/U4/U5/U6 各 12-15%, APUSH P3-P8 各 10-17%) 且本身是 DBQ/LEQ 反复考的 through-line 锚点。AP 考生不会就直接丢分。例: 工业革命/法国大革命/帝国主义/内战/进步时代/两次大战/冷战。
4★ 高权重单元里的重要考点, 或两考都覆盖的强项, 但在 DBQ/LEQ 的独立出题频率略低于 5★, 或常作为比较题的一极。例: 文艺复兴/宗教改革/探索时代/重建/镀金时代/启蒙。
3★ 在 AP 考纲内但属中低权重单元 (AP World U1/U2/U7/U8/U9 各 8-10%, APUSH P1/P2/P9 各 4-6%), 或虽在重单元但属背景/支线考点。作为情境知识有用, 直接命题概率中等。例: U1/U2 各帝国、殖民地早期、当代美国。
2★ 单一考纲的边缘支线、或与其他课高度叙事重叠的颗粒度课、或仅作背景铺垫极少独立命题的主题。该学但不该花最多时间。例: 西扩冗余课、某些 U1 区域帝国。
1★ 不在 AP World (1200 起) / APUSH 考纲直接命题范围内的纯古代文明地基课 (G6), 或纯拓展/边缘主题。考试 ROI 最低。

G6 古代文明判断: 我按纯 AP 考试权重压低到 1-2★ (AP World 从 1200 起, 这些主题在 AP 考试不直接命题), 但对「在 AP 古典帝国比较题/欧洲一神教 through-line 里能当对照背景」的主题 (希腊/罗马/波斯/以色列) 给到 2★ 而非 1★。理由: 创始人要的是「考试重要性」一眼可辨, G6 课的真实 AP 命题 ROI 客观就是最低, 用 1-2★ 如实反映, 不因「文明地基」人为抬星——地基价值属于初中课程价值, 不是 AP 考试价值, 两者要分清。

## 附: 历史老师 rubric

评分视角=教学与课程设计 (非纯应试)。核心问题不是「考多少分」, 而是「这门课是不是理解后续历史的地基/through-line 枢纽、加州 HSS 的核心骨架、跨主题迁移价值高」。维度: (A) through-line 枢纽性——不学它后面学不懂吗? (B) 加州 HSS 框架核心程度——是骨干单元还是拓展; (C) 跨主题迁移价值——它建立的概念/比较模型(国家形成、革命模板、工业化、帝国主义)能反复复用吗; (D) AP CED 单元体量与 DBQ/LEQ 高频角度(作为放大器, 非唯一标尺); (E) 华裔升学路径(AP World+APUSH)上的真实曝光。\n\n5★=地基中的地基/最高频枢纽: 不学整条线断, AP 必考且 DBQ/LEQ 反复出现, 迁移价值最高 (如工业革命、法国大革命、二战、冷战、宪法、内战、启蒙)。\n4★=核心骨干: HSS 主干 + AP 高频, 是某一时段的支柱课, 学扎实回报很高 (如文艺复兴、宗教改革、探索时代、一战、罗马、唐宋、美国革命、镀金/进步时代)。\n3★=标准课: 该学, AP/HSS 有覆盖但非枢纽, 或虽重要但偏专题/可被相邻课承接 (多数中段美国史专题、多数 G6 古文明地基课、区域帝国课)。\n2★=次要/边缘: 拓展或颗粒度补充, 与相邻课叙事重叠, AP 权重低, 跳过不致命 (如西扩冗余四件套中的补充课、单一战争专题、当代细分)。\n1★=拓展/选修: AP 几乎不直接考、HSS 非要求、迁移价值低、主要服务兴趣或填空白 (极少数, 如纯当代/高度专题)。