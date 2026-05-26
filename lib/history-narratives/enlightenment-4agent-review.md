# Enlightenment 4-Agent Review (Aggregated)

**Date**: 2026-05-09
**File**: `lib/history-storyboards/enlightenment.js` (2087 行 / 3 lens × 12 nodes = 36 nodes)
**Schema**: v2 · defaultLens: toussaint-receiving
**Reviewers**:
- 小 U (12 岁 7 年级 ABC) — 8.5/10
- Dr. Park (AP World History teacher) — 8.0/10
- Maria (ESL specialist) — 7.5/10
- 赵老师 (中国初中历史 18 年) — 7.0/10

---

## 综合评价（4 reviewer 共识）

这是 4 个审核者见过的 36-node 3-lens 格式中，**careful framing 执行密度最高**的一份 storyboard。五个核心 hedge 节点（Compagnie des Indes 知情程度、Bois Caïman 史料批判、Toussaint 短暂持有奴隶、Gouges 最后遗言来源、Toussaint「最后遗言」来源）全部到位，且都到了 Dubois 2004 / Blanc 2003 / Cronk 2009 具体页码级别。1793 三个月差跨 lens 时刻（Gouges N11 + Toussaint N8 + Voltaire N12）结构清晰、精确，是 cross-lens 设计的样本。

主要问题集中在三个方向：(1) 几处史实需要精确修正；(2) Bois Caïman 最早书面来源 Moreau de Saint-Méry 1797 未出现；(3) Toussaint N8 内部时间线有一处关键错误——1793 年初投靠西班牙 vs 1794.2.4 法国废奴令时间描述混乱。

---

## P0 — Ship-Blocker 级别

### P0-1 · Toussaint N8 — 法国废奴令时间混乱 ⚠️ 最严重

**Dr. Park**：N8 内部存在严重时间线矛盾。

N8 正文（CN + EN 均如此）写：
- 「1793 年初，我带领我的部队加入了西班牙军队」
- 「然后，1794 年 2 月 4 日，法国国民公会通过决议：废除法国所有殖民地的奴隶制」
- 「消息传来时，我在西班牙阵营里。我花了数周评估……我带着部队离开西班牙，转投法国」

但 N8 的 crossLensHook 写：
> 「跨 lens ⭐⭐⭐: 1793.11.3 Olympe de Gouges 在巴黎被同一个「法国」处死——他们同年，同一个「自由」，从未相识，两种命运。」

以及 N8 正文 bodyCn 末尾写：
> 「就在 1793 年，我签了第一份以新名字命名的声明——Toussaint Louverture」
> 「现在我需要告诉你一件你可能不知道的事：同一年，同一个「法国」，1793 年 11 月 3 日，巴黎，一个叫 Olympe de Gouges 的女人被同一个法国砍掉了头。」

**问题所在**：N8 的第一人称叙事声音混合了两个年份：

1. 「我投靠西班牙」= 1793 年初 ✓
2. 「我转投法国」= 1794 年初（废奴令 1794.2.4 之后）✓
3. 但 N8 标题 year 字段 = `1793`，正文结尾的 cross-lens 1793 Gouges 时刻是正确的

**但**：N8 cross-lens 写「就在 1793 年，我签了第一份以新名字命名的声明」并在同一 N8 内引出 Gouges 1793.11 被处死——然后又在正文前段说「1794 年 2 月 4 日废奴令……我花了数周评估……带着部队离开西班牙」。这让读者困惑：他 1793 年还在西班牙阵营，Gouges 就已经死了，他的 1793 cross-lens 感知是什么时候发生的？

更准确的历史时间线（Dubois 2004）：
- 1793 年初：Toussaint 投靠西班牙
- **1793 年 8 月 29 日**：Saint-Domingue 北部总督 Sonthonax 宣布当地废奴（先于国民公会）
- **1794 年 2 月 4 日**：国民公会正式立法全国废奴
- 1794 年 5 月：Toussaint 带部队转投法国

N8 的 year 字段 = 1793 且跨 lens hook = 1793 没错，但正文内部的「1794.2.4 废奴令 → 几周后转投」叙事在同一个 node 里造成时间混乱。

**Fix**：将 N8 正文「然后，1794 年 2 月 4 日……」的段落拆出，注明这是此后发生的事（N8 的叙事声音应止于 1793 年末），并在 N8 的 sourcingNote 加注：「Sonthonax 1793.8.29 北省先行废奴是 Toussaint 在 1793 年内转向的直接触发因素（Dubois 2004 pp.100-103），国民公会 1794.2.4 立法是全国确认」。或将 N8 拆为两个时间层（1793 行动 / 1794 转投）并在 N9 之前澄清。

---

### P0-2 · Toussaint N3 — Raynal 查禁年份错误

**Dr. Park**：N3 sourcingNote 和正文均写「Raynal《Histoire des deux Indes》1770 年出版，**1781 年被法国查禁**」。

历史事实（Robertson 2005 / Israel 2001）：《Histoire des deux Indes》第一版 1770，**第三版 1780**（最激进版本，增加了 Raynal 本人和 Diderot 的大量反殖民内容），查禁令为 **1781 年**——查禁的是第三版，不是第一版。Raynal 本人流亡时间为 1781 年后。

这个细节本身没错（1781 查禁正确），但 N3 正文写「1770 年出版，1781 年被法国查禁」中间跳过了 1780 第三版这个关键版本——读者会误以为一本书出版 11 年后才被查禁，逻辑显奇怪。

另外，Toussaint 可能读到的版本更可能是 1780 第三版（最激进版，Spartacus 那段出自 Diderot 的增补，不是 Raynal 原作），这在史学界是重要区分（Robertson 2005 pp.389-392）。

**Fix**：N3 加一句：「这本书 1770 年出版后多次增修，**1780 年第三版**加入了大量来自 Diderot 的反殖民内容——正是这个版本在 1781 年被查禁，Raynal 被迫流亡。Toussaint 若读到它，读的很可能是 1780 年的那个版本（Robertson 2005）。」

---

### P0-3 · Toussaint N7 — Bois Caïman 1797 Moreau 最早书面来源缺失

**Dr. Park**：N7 对 Bois Caïman 的 careful framing 整体优秀（James 1938 vs Dubois 2004 对比清楚），但缺少**最重要的史学脚注**：Bois Caïman 仪式最早的书面记录来自 **Moreau de Saint-Méry，1797 年**（*Description topographique, physique, civile, politique et historique de la partie française de l'isle Saint-Domingue*）。

这个来源的重要性在于：Moreau de Saint-Méry 是 **殖民地白人视角**、**事后约 6 年**的二手描述，且他有充分的政治动机将起义神秘化（将其描述为「巫术仪式」而非政治组织行为）。这是 AP World History anti-fab 教学的关键材料——不提这个来源，读者无法理解「为什么 Bois Caïman 的历史叙述需要谨慎」。

目前 N7 只写「C.L.R. James 1938 年写我出席了那场仪式，是起义组织者之一——这个版本更英雄，但证据语焉不详。Laurent Dubois 2004 给出了更审慎的记录」，但没有解释最早书面来源的性质。

**Fix**：N7 sourcingNote 加：「Bois Caïman 最早书面来源：Moreau de Saint-Méry 1797（事后 6 年，殖民地白人作者，政治立场决定了他对仪式的神秘化描写是有动机的）。Dubois 2004 pp.72-74 对 Moreau 文本做了来源批判。」并在 N7 正文的 careful framing 段加一句：「最早记录这个仪式的是一个叫 Moreau de Saint-Méry 的殖民地白人作者，他在事后 6 年才写下这件事——他对『巫术仪式』的描绘背后，有他自己的政治目的。」

---

### P0-4 · Gouges N10 — 死亡年龄错误（45 岁应为 45 岁，但内部不一致）

**Dr. Park + 赵老师**：Gouges N10 正文写「1793 年 11 月 3 日，我走上断头台。**45 岁**。」

Gouges 生年 1748 年 5 月 7 日（Blanc 2003 确认），1793 年 11 月 3 日去世，享年 **45 岁**（1793-1748=45，未满 46 岁）。这个数字本身是对的。

但 Gouges lens 的 lens-level `description` 字段写：「French playwright who declared women rights and died for it, **1748-1793**」——没有问题。

**问题所在**：N10 正文（CN）写「我走上断头台。45 岁。」正确；但 Gouges N7 sourcingNote 写「Scott 1996：献词政治逻辑分析，p. 30-35」——Scott 1996 实际上关于这段内容的主要分析在 **pp. 28-35**，引 p.30-35 范围稍窄但无严重错误，不是 P0。

**实际 P0**：N10 正文 EN 版写「I was **45**.」而根据 1748.5.7 → 1793.11.3，年龄应为 45 岁 5 个月多，写 45 岁完全正确。但 Gouges N1 的 year 字段写 `1748`，且 setting.time 写 `1748 年 5 月 7 日`——所以全文生年为 1748，N10 死年为 1793.11.3，45 岁正确。

**重新标记**：此项降级为 P1，无 P0 级别年龄错误。

---

### P0-4（重编号） · Voltaire N8 — 「conscience」中英混写

**Maria**：N8 bodyCn 末尾写：「这件事让我的**conscience** 可以保持安静。」直接用英文单词嵌入中文正文，不符合中文写作规范，且前后文均无类似混写。

**Fix**：改为「这件事让我的**良知**可以保持安静。」或「这件事让我的内心可以保持安静。」

---

### P0-5 · Toussaint N6 — Ogé 被捕年份内部矛盾

**Dr. Park**：N6 写「1790 年 10 月，一个叫 Vincent Ogé 的 gens de couleur 领袖，带着约 300 人起义」，然后写「**1791 年 2 月，他在 Cap-Français（今海地角）被处以『车裂』（roue）**」。

历史事实（Dubois 2004）：Ogé 起义 1790 年 10 月，失败后逃往西班牙，被引渡回 Saint-Domingue，**1791 年 2 月 25 日**处决。N6 的描述正确。

但 N6 正文（CN）写「我 **47 岁**，看着这件事发生。」Toussaint 生年 1743，1791 年 = 47 或 48 岁（取决于月份，其出生月份不详）。1791 年他 47-48 岁，写 47 岁是可接受的近似，但注意：N5 中写「我那年 **47 岁**」时间为 1789 年（「我那年 47 岁。我是一个会读法语的自由黑人」）——1789 年 47 岁意味着生年约 1742，与全文锁定的 1743 矛盾。

**具体错误**：N5（year: 1789）写「我那年 47 岁」→ 1789-1743=46，应为 **约 46 岁**，不是 47 岁。

N6（year: 1791）写「我 47 岁，看着这件事发生」→ 1791-1743=48，应为 **约 48 岁**，不是 47 岁。

两处年龄都偏差 1 岁，且方向相反（N5 偏高 1，N6 偏低 1），怀疑作者在 N5/N6 写作时使用的基数不同。

**Fix**：N5「我那年 47 岁」→「我那年约 46 岁」；N6「我 47 岁」→「我约 48 岁」。（注：Toussaint 的精确出生年月本身存疑，「约」字是必要的 careful framing。）

---

### P0-6 · Voltaire N1 — 母亲死亡年份错误

**Dr. Park**：N1 正文写「七岁那年，母亲死了」，sourcingNote 写「母亲死亡 **1701 年确认**」。Voltaire 生年 1694 年 11 月 21 日，1701 年则为 6 岁或 7 岁（取决于月份）。Davidson 2010 p.9 的记录：母亲 Marie Marguerite Daumard 死于 **1701 年**，Voltaire 当时 **6 岁**（1694.11 → 1701，未满 7 周岁）。

N1 正文「七岁那年」是不准确的。Davidson 2010 明确写 6 岁。

**Fix**：N1 CN + EN 正文「七岁那年，母亲死了」→「六岁那年，母亲死了」。对应 EN：「When I was seven, my mother died」→「When I was six, my mother died」。

---

## P0 — 缺失内容（赵老师 + Dr. Park 共识）

### P0-7 · Toussaint lens — Saint-Domingue 四层社会结构中文解释不完整

**赵老师 + Maria**：Toussaint N4 CN 版对四层社会结构的描述是：「白人（grands blancs + petits blancs）在顶层，自由有色人种（gens de couleur）在中层，500,000 个奴隶在底层」——这是**三层**，不是四层。

N4 EN 版写「four-tiered social structure」但 CN 版描述的层次是「白人顶层 / gens de couleur 中层 / 奴隶底层」= 三层。实际的 Saint-Domingue 四层结构（Dubois 2004）：
1. grands blancs（大白人，plantation owners + 大商人）
2. petits blancs（小白人，artisans + 小商人 + 下层白人）
3. gens de couleur libres（自由有色人种，含 affranchi）
4. esclaves（奴隶，约 500,000 人）

CN 版把 grands blancs + petits blancs 合并为「白人」一层，与 EN「four-tiered」不对应，跨语言语义不等值。

**Fix**：N4 CN 改为「白人分两层：grands blancs（种植园主和大商人）在最顶层，petits blancs（工匠、小商人等普通白人）在其下；再往下是自由有色人种（gens de couleur）；最底层是约 500,000 个被奴役的人——这是四层」。EN 版「four-tiered」描述已正确，CN 需补齐。

---

### P0-8 · Gouges N6 — 「homme」词义辩论 CN 版缺少法语关键词说明

**Maria**：Gouges N6 是全 storyboard 里最重要的语言分析节点，EN 版处理得很好（「In French, the word *homme* carries two meanings: 'human being' (generic) and 'man' (male)」），但 CN 版写的是「法语里，'homme' 这个词有两种意思：'人'（generic human being）和'男人'（male person）」——在括号里用英文注释 generic human being / male person，而不是用中文注释。

对于 12 岁中文读者，括号里的英文 gloss 反而造成理解障碍：她要先理解法语 homme，再理解英文括注，才能理解中文论点。

**Fix**：CN 版改为「法语里，『homme』（阿曼，这个词）有两种意思：泛指的『人』（不分性别的人类）和特指的『男人』（男性）。起草这份文件的人心里想的，是有财产的法国男性公民。」删去括号英文，改为中文释义。

---

## P1 — 建议修（不 block ship）

### P1-1 · Voltaire N8 — Compagnie des Indes 持股期间「无批评文字」表述需要加 hedge

**Dr. Park**：N8 正文和 N9 都对「持股期间无公开批评奴贸文字」这一点作了清楚说明，Cronk 2009 hedge 在位。但 N8 bodyCn 写「西非奴隶贸易中间商关联」一句——历史上 Compagnie des Indes 的奴贸介入程度，学界有争议（它主要是纺织品和茶叶贸易公司，奴贸关联是间接的，通过 profit-sharing arrangement 而非直接经营）。Cronk 2009 对此是有 hedge 的。目前 CN 版本这句话读起来像铁证，应加 hedge。

**Fix**：CN「以及通过利润分成合同与西非奴隶贸易中间商关联」→「以及据信通过利润分成合同与殖民地贸易网络（包括奴隶贸易中间商）有间接关联——但这个关联的直接程度，Cronk 2009 hedge 未能确证」。

---

### P1-2 · Voltaire N11 — Hertzberg 1968 引文位置 hedge 不足

**Dr. Park**：N11 写 Hertzberg 的关键论断「我这个条目，是世俗/族裔反犹主义（secular/ethnic antisemitism）的早期模板」，这是 Hertzberg 1968 的核心论点，引用正确。但学界对此有争议——Adam Sutcliffe 2003 等学者认为 Hertzberg 的论断过于强烈，Voltaire 的反犹主义是宗教批判和文化偏见的混合，不能简单等同于 19-20 世纪的种族反犹主义。

目前 N11 呈现方式是「Hertzberg 的分析让我不舒服，因为他是对的」——用第一人称接受了 Hertzberg 的论断，但未注明学界争议。

**Fix**：N11 sourcingNote 加：「Hertzberg 1968 论断有学界讨论：Sutcliffe 2003 等认为将 Voltaire 直接等同于现代种族反犹主义是 anachronism；Hertzberg 的论断在「世俗反犹主义的思想来源」这个有限范围内被广泛引用，但不应理解为等同于纳粹意识形态。」正文第一人称接受论断本身是合理的叙事选择，P1 级别。

---

### P1-3 · 小 U视角 — Toussaint N1 开场能量不够

**小 U**：Toussaint 是 defaultLens，N1 是第一个接触点。N1 的开场「1743 年，Saint-Domingue 北部，Bréda 种植园。一个婴儿出生了。」是克制的、史学风格的——这对 AP World 学生很好，但对 12 岁第一次接触这段历史的学生，「婴儿出生了，没有档案记录生日」的开篇缺少情感钩子。

对比 Voltaire N1「我叫 François-Marie Arouet。1694 年 11 月 21 日，巴黎。」——Voltaire 的 N1 立刻建立了声音。Toussaint N1 的第一人称声音在「我不知道这些。我那时候什么都不知道」才出现，前面大段是全知叙述者视角。

**Fix（可选）**：考虑将 N1 开场第一句改为第一人称内视角，如：「我出生的那一天，没有人在档案里写下我的名字。」（仿照 Gouges N1 的开场策略）。这是 P1 级别的建议，不强制。

---

### P1-4 · 小 U视角 — Voltaire N8 「conscience」段落对 12 岁读者的挑战

**小 U**：N8 的「我没有追踪每一笔红利的来源。这件事让我的 conscience 可以保持安静。但钱在那里运转，不管我的 conscience 安不安静。」这个逻辑对成年读者清晰有力，但「conscience 可以保持安静」这个结构对 12 岁读者理解「知而不为」vs「不知而受益」的区分可能有难度。

N8 的知识密度峰值（彩票套利 + Compagnie des Indes 结构 + 奴贸利润链 + 知情程度 hedge）对 7 年级来说是信息过载风险点。

**Fix（可选）**：N8 末尾加一句桥接：「你有没有过这种经历——知道一件事可能不对，但选择不去想它？Voltaire 管这个叫让良知安静。你会怎么叫它？」将认知重心从历史分析转向个人共鸣，降低认知负荷。

---

### P1-5 · 赵老师 — 「lonely-mediator」概念需要中文锚定

**赵老师**：全文出现 `lonely mediator` 9 次，CN 版没有给出中文对应，始终以英文出现在中文段落里（「lonely mediator 知道自己的声音会消失在空气里」）。7 年级 CN 读者——尤其是在中国的中文读者——对这个角色类型的理解需要一个中文锚点。

**Fix**：在 Gouges N2 或 N3 首次叙述 lonely mediator 概念时，加注：「这类处境——同时被两个阵营排除在外、站在中间无法被任何一方完整接受——我们在这里叫它『孤立中间人』（lonely mediator）。」之后正文可以 CN/EN 并用。

---

### P1-6 · 赵老师 — 「人教版译名」核查

**赵老师**：三个主要人物译名：
- 伏尔泰 ✓（人教版规范）
- 奥兰普·德·古热 ✓（虽非高频词，Blanc 2003 标准译名）
- 图森·卢维杜尔 ✓（人教版/历史学界通用）

启蒙运动核心概念 CN 出现情况：
- 理性（raison/reason）✓ 多处出现
- 自然权利（droits naturels/natural rights）——未以完整词组出现，只有「权利」「人的权利」；建议在 Voltaire N5（英国段）加「自然权利（natural rights / 自然权利，启蒙核心概念）」首次出现 gloss
- 社会契约（contrat social/social contract）——全文未出现 ⚠️

「社会契约」是人教版 7-8 年级启蒙运动必考词汇。全文 2087 行，Rousseau 完全未出现，社会契约概念缺席。虽然这个 storyboard 不以 Rousseau 为 lens，但作为启蒙运动主题，完全不提社会契约是人教版对接的空白。

**Fix**：在 Voltaire N12 或 Toussaint N10 的 cross-topic hook 里加一句：「这个 1793 年的框架——谁有资格说话、谁代表'人民意志'——是 Rousseau（卢梭）在《社会契约论》（Du contrat social, 1762）里核心问题的暴力实验场。社会契约（contrat social/social contract）的理念，在 1793 年同时被 Jacobin 用来处死 Gouges，被 Toussaint 用来建立 Saint-Domingue 宪法。」

---

### P1-7 · Maria — Toussaint lens EN 版「affranchis」首次出现需 gloss

**Maria**：Toussaint N3（EN）首次出现「affranchis」（「reached me through the circulation networks of the affranchis — the free people of color」），有 inline gloss，合格。

但 N4（EN）写「I became an affranchi libre — a free Black man」——「affranchi libre」有 gloss（「a free Black man」），合格。

N5（EN）写「I was a literate free Black man in the second tier of Saint-Domingue's four-tiered social hierarchy」——合格，已用英文解释，不再重复法语词。

**实际问题**：N6（EN）引入「gens de couleur」有括号注「the free people of color」，合格；但同一节点「mulâtres」（N4 EN）无括号注——「mulâtres」= mixed-race freedmen，N4 EN 已经注了（「mixed-race freedmen (mulâtres)」顺序反了，建议改为「mulâtres (mixed-race freedmen)」法语先英语后，符合 EN 学术写作惯例）。

**Fix**：N4 EN「free Black men typically ranked below mixed-race freedmen (mulâtres)」→「free Black men typically ranked below mulâtres (mixed-race free persons)」。Minor P1。

---

### P1-8 · Dr. Park — Voltaire N10 引用 Bien 1960 年份需核实

**Dr. Park**：N10 引用「David Bien 在《The Calas Affair》（1960）」。David D. Bien 的 *The Calas Affair: Persecution, Toleration, and Heresy in Eighteenth-Century Toulouse* 出版年份为 **1960**（Princeton University Press），这是正确的。✓

但 N10 叙事里 Toussaint 的年龄参照：「那年……Toussaint Louverture 大约 20 岁，在甘蔗田里劳动」——1762 年，Toussaint 出生 1743 年，1762-1743=19 岁，写「约 20 岁」可接受（「约」覆盖了出生月份不确定的误差）。✓

无 P1 以上问题，此项关闭。

---

### P1-9 · 赵老师 — 「受益者」vs「知情」中文区分

**赵老师**：Voltaire N8 CN 版末尾：「知情（哪怕是不完整的知情）和受益可以同时成立。」这句话的中文表达是准确的，不是西式中文。但「知情」在中文语境里（尤其 7 年级）更常指法律意义上的「知道情况」（比如知情同意），用在这里语义略生。

建议改为「知道（哪怕是一知半解的知道）和受益，可以同时成立」——更口语，更贴近 7 年级 CN 读者。

---

## 优点清单（4 reviewer 共识，保留）

### 1. 1793 三个月差跨 lens 时刻——执行完美

- Voltaire N12：「1793 年，Jacobin 法庭用'理性'的语言建构他们的合法性——而这个'理性'正在处死 Olympe de Gouges（1793 年 11 月）」✓
- Gouges N11：「她死的那天是 1793 年 11 月 3 日，Paris。大西洋另一边，1793 年 8 月，Toussaint Louverture……」✓ 月份精确到 8 月 vs 11 月
- Toussaint N8：「就在 1793 年，我签了第一份以新名字命名的声明——Toussaint Louverture……1793 年 11 月 3 日，巴黎，一个叫 Olympe de Gouges 的女人被同一个法国砍掉了头」✓

三条线同时锁住，月份精确，是此类 cross-lens 设计的样本。

### 2. Toussaint 短暂持有奴隶（N4）——P0 级别 careful framing 完整执行

- 「Laurent Dubois 2004（第 91 页）记录：在起义之前，Toussaint 短暂地持有过少数几个自己的奴隶，用于耕种他租来的土地」✓
- Dubois 2004 p.91 原始页码引用 ✓
- 「这不是要为他辩护，也不是要谴责他」框架 ✓
- 第一人称自白「我知道这个系统是错的。但我也进入了这个系统」✓

### 3. Gouges 贵族父亲传说（N1）——Blanc 2003 hedge 完整

- 「Olivier Blanc 在 2003 年做了详细考证，他的结论是：这个传说无法证实」✓
- N1 sourcingNote：「Blanc 2003：出生日期确证，贵族父亲传说考证后 hedge，无文件基础」✓

### 4. Toussaint「最后遗言」（N12）——Dubois 2004 p.280 hedge 到位

- 「C.L.R. James 1938 年引用了这句话，但他的来源是 19 世纪的传记和 pamphlet 文学——不是 Toussaint 当时留下的书写记录」✓
- 「Dubois (2004)，在脚注 p. 280，明确写：……是否确为 Toussaint 原话无法确证」✓
- 「这不代表这句话是假的。它是口述革命传统的一部分」✓

### 5. Voltaire Compagnie des Indes 时间线（N9）——Cronk 2009 hedge 精确

- 「Cronk 2009（p.20）明确注明：我的 Compagnie des Indes 持股高峰在 1720 年代到 1750 年代，而《Candide》的苏里南段落写于 1759 年——我的持股期已经基本清盘」✓
- 「历史学家无法确认这是偶然时间差还是有意回避」✓

### 6. expectsRealAnswer 分布合理

- Voltaire: N11(true), N12(true) — 共 2 个 ✓
- Gouges: N11(true), N12(true) — 共 2 个 ✓
- Toussaint: N11(true), N12(true) — 共 2 个 ✓
- 6/36 nodes = 16.7% expectsRealAnswer，符合规范（不超过 1/5）✓

---

## P0 汇总（Ship-blocker 级别）

| # | Lens | 节点 | 问题 | 修复难度 |
|---|------|------|------|----------|
| P0-1 | Toussaint | N8 | 法国废奴令时间线内部矛盾（1793 vs 1794 声音混乱）| 中 |
| P0-2 | Toussaint | N3 | Raynal 版本澄清缺失（1780 第三版是被查禁的版本，含 Diderot Spartacus 段）| 低 |
| P0-3 | Toussaint | N7 | Bois Caïman 最早书面来源 Moreau de Saint-Méry 1797 缺失 | 低 |
| P0-4 | Voltaire | N8 | CN 正文「conscience」英文嵌入中文 | 极低 |
| P0-5 | Toussaint | N5, N6 | 年龄计算错误（N5：47→46；N6：47→48）| 极低 |
| P0-6 | Voltaire | N1 | 母亲死亡年龄错误（七岁→六岁）| 极低 |
| P0-7 | Toussaint | N4 | Saint-Domingue 四层社会结构 CN/EN 不对应（CN 只写三层）| 低 |
| P0-8 | Gouges | N6 | 「homme」词义辩论 CN 版括注英文，造成理解障碍 | 极低 |

**P0 总计：8 个**

---

## Ship Readiness

**当前状态**：P0 × 8，P1 × 9

**路径**：
- P0-1 修复（Toussaint N8 时间线，最复杂）：约 1 小时
- P0-2 至 P0-8（其余 7 个均为小修）：约 1-2 小时合计
- P1 部分修（P1-6 社会契约缺席最重要，建议 ship 前修）：约 1 小时

**P0 全修 → 7.5+ ship-ready**
**P0 + P1-6（社会契约词汇）全修 → 8.0+ ship-ready**

整体质量显著高于 Scientific Revolution storyboard（后者 P0 × 25），本 storyboard P0 主要是几处精确度问题而非结构性缺陷。careful framing 执行是全套 storyboard 中目前见过的最高水平。

---

*审核人：小 U · Dr. Park · Maria · 赵老师 — 综合报告 2026-05-09*
