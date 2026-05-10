// Enlightenment T7 — Lens 3: Toussaint Louverture (defaultLens)
// receiving-end | formerly enslaved | 1743-1803 Saint-Domingue / Fort de Joux
//
// Topic: Enlightenment 1689-1789 · T7
// HSS-7 · AP World 5.3 (Haitian Revolution)
//
// Lens 3 设计:
//   lensId: 'toussaint-receiving'
//   name: 'Toussaint Louverture'
//   nameCn: '图森·卢维杜尔'
//   role: 'receiving-end'
//   isDefaultLens: true
//   fictionalDisclaimer: false  ← 真实历史人物，不需要虚构声明
//
// 真实人物声明:
//   Toussaint Louverture (c.1743-1803) 是真实历史人物，不是虚构 composite。
//   所有事实来自 Laurent Dubois《Avengers of the New World》(Harvard 2004) +
//   C.L.R. James《The Black Jacobins》(1938) + Robin Blackburn《The Overthrow
//   of Colonial Slavery》(Verso 1988)。careful framing 标注见各节点 sourcingNote。
//
// 跨 lens 锁定:
//   N8 ↔ Olympe de Gouges (Lens 2) N9 — 1793 年同一个「法国」，两种命运
//   N12 ↔ Pre-Columbian Topic (Anacaona Jr.) — 1804 海地用 Taíno 语「Ayiti」命名
//
// per AUTHORING_PIPELINE.md 12 条铁律:
//   1 (cultural ban) / 2 (anti-fab) / 4 (em-dash ≤ 3 per 段, 0 段 4+ chain)
//   6 (外语 bare + inline gloss) / 11 (引号「」) / 12 (expectsRealAnswer 默认 false)
//   N11 + N12 expectsRealAnswer: true
//   fictionalDisclaimer: false (真实历史人物)

export var meta = {
  lensId: 'toussaint-receiving',
  name: 'Toussaint Louverture',
  nameCn: '图森·卢维杜尔',
  role: 'receiving-end',
  roleDescription: 'formerly enslaved who used Enlightenment language to defeat the Enlightenment\'s enforcers',
  description: 'Born enslaved in Saint-Domingue, led the only successful slave revolution in history, 1743-1803',
  descriptionCn: '生于圣多明戈奴役中，领导人类历史上唯一一次成功的奴隶革命，1743-1803',
  topicId: 'enlightenment',
  nodeCount: 12,
  isDefaultLens: true,
};

export var storyboard = [

  // ═══════════════════════════════════════════════════
  // N1 — 1743 · 出生 · Bréda 种植园 · 500,000 人里的一个
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N1',
    year: 1743,
    location: 'Saint-Domingue 北部，Bréda 种植园',
    title: {
      cn: '1743 年，我只是一个婴儿',
      en: 'In 1743, I was only an infant',
    },
    content: {
      cn: `1743 年，Saint-Domingue 北部，Bréda 种植园（Bréda plantation）。

一个婴儿出生了。没有人在档案里记录他的生日。他的父亲的名字，C.L.R. James 1938 年的书里叫 Gaou Guinou，另一些海地史料里叫 Hyppolite Thésée——两个名字来自不同来源，学界至今没有定论。关于这个父亲，还有一个家族传说：他是西非 Allada 王国（今贝宁）贵族后代，是被奴隶贸易从贵族家庭撕走的人。

这个说法可能有真实根据，也可能是家族记忆在口传中的理想化。Laurent Dubois 2004 年（《Avengers of the New World》）说：「父亲可能来自非洲精英家庭，但具体细节难以证实。」

我不知道这些。我那时候什么都不知道。

我只知道我出生在一个叫 Bréda 的种植园，在 Saint-Domingue（圣多明戈）北部。1743 年，这个岛的西半部是法国殖民地，生产全法国大约 40% 的蔗糖（sucre / sugar），大约 50% 的咖啡（café / coffee）。这些数字意味着什么？意味着这块土地上有 500,000 个被奴役的人，而我是其中之一。

500,000。

历史书喜欢说数字，然后继续往下走。但我想让你在这里停一秒：500,000 个人，每个人有父母，有被撕碎的家庭，有一个非洲的出发点，有跨越大西洋的船舱，有第一次踩上 Saint-Domingue 土地时的恐惧。

我的父亲就是这 500,000 人之一的来源。我也是。

1743 年，我只是一个种植园婴儿。历史从来不是在一开始就知道谁是主角的。`,
      en: `1743. Northern Saint-Domingue. The Bréda plantation.

A baby was born. No one recorded his birthday in any archive. His father's name appears as Gaou Guinou in C.L.R. James's 1938 book, and as Hyppolite Thésée in some Haitian historical sources — two names from different traditions, with no scholarly consensus. There is also a family story: that the father was a descendant of nobility from the Kingdom of Allada in West Africa (present-day Bénin), a man torn from an aristocratic family by the slave trade.

This account may carry real truth, or it may reflect the kind of idealization that oral memory builds over generations. Laurent Dubois (2004, *Avengers of the New World*) writes: "The father may have come from an African elite family, but the specific details are difficult to verify."

I did not know any of this. I knew nothing yet.

I only knew I was born on a plantation called Bréda, in the northern part of Saint-Domingue. In 1743, the western third of this island was a French colony that produced roughly 40 percent of France's sugar and roughly 50 percent of its coffee. What do those numbers mean? They mean this land held 500,000 enslaved people, and I was one of them.

Five hundred thousand.

History books like to state a number and then move on. But I want you to stop here for one moment. Five hundred thousand people — each one with parents, with a family that had been shattered, with a point of origin somewhere in Africa, with a ship's hold crossing the Atlantic, with the fear of first stepping onto the soil of Saint-Domingue.

My father was the source of one of those 500,000. So was I.

In 1743, I was only a plantation infant. History never knows at the beginning who its main character will be.`,
    },
    themeCn: '历史从不在起点告诉你谁是主角',
    themeEn: 'History never announces its protagonists at the starting line',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 p.10 (父亲名字 hedge); C.L.R. James 1938 (Gaou Guinou); Dubois 2004 (40% 糖, 500,000 人数)',
  },

  // ═══════════════════════════════════════════════════
  // N2 — 1750s-1760s · 识字 · 草药 · 马 · 三件工具
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N2',
    year: 1758,
    location: 'Bréda 种植园，北部省',
    title: {
      cn: '读写是工具，也是武器',
      en: 'Reading is a tool and also a weapon',
    },
    content: {
      cn: `Bréda 种植园的主人（管事）叫 Bayon de Libertat。在 Saint-Domingue 的标准里，他算是相对温和的一个——这不是什么高评价，这只是说他没有达到当时种植园主的极端暴力下限。

他允许我识字。也许是因为他看出我聪慧，也许是因为他需要一个会读写的助手。原因不重要，结果是：我在 Bréda 种植园学会了用法语读和写。

那是一个什么样的时刻——当我第一次读懂整整一页法语文字的时候？我不知道是哪一天，不知道是哪本书。但那一刻我知道：我能看见比 Bréda 种植园更大的世界了。

我还学了草药医术（herbal medicine）。种植园里没有医生，有人生病，就来找我。这让我获得了一种非正式的权威——人们需要我，这和被驱使做事完全不同。

然后是马（les chevaux / horses）。我管 Bréda 种植园的马圈。懂马、能骑马，在那时候是一件极重要的事。我当时不知道它在后来的军事生涯里会有多大价值。

三件事：识字，草药，马。

Saint-Domingue 的 500,000 个被奴役的人里，拥有这三件工具的人极少。这不是我的功劳——是一个偶然，是 Bayon 的决定，是我碰巧落在了那个位置。

给奴隶识字，种植园主究竟在赌什么？我怀疑他从没想清楚这个问题。`,
      en: `The manager of the Bréda plantation was Bayon de Libertat. By Saint-Domingue's standards, he was considered relatively moderate — which is not high praise; it only means he had not reached the extreme violent floor that most plantation owners occupied.

He allowed me to learn to read. Perhaps he saw that I was sharp-minded. Perhaps he needed a literate assistant. The reason does not matter much. What matters is: on the Bréda plantation, I learned to read and write in French.

What was it like — that moment when I read through an entire page of French and understood it? I do not know what day it was, or what book it was. But in that moment I knew: I could see a world larger than Bréda.

I also learned herbal medicine. There were no doctors on the plantation. When someone fell ill, they came to find me. This gave me a kind of informal authority — people needed me, which is entirely different from being driven to work.

Then there was the horses — les chevaux. I ran the Bréda stables. Understanding horses, being able to ride — these were important beyond measure at that time. I did not know then how much value they would carry in a military career I had not yet imagined.

Three things: literacy, herbal medicine, horses.

Among the 500,000 enslaved people of Saint-Domingue, very few held all three. That was not my achievement — it was an accident, a decision by Bayon, a position I happened to occupy.

When a plantation owner gave a slave the ability to read, what was he wagering? I suspect he never thought the question through.`,
    },
    themeCn: '给奴隶识字，种植园主在赌一件他没想清楚的事',
    themeEn: 'Teaching a slave to read is a wager the master never fully calculated',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 pp.10-12 (识字, 草药, 马圈); James 1938 (Bayon de Libertat 记录)',
  },

  // ═══════════════════════════════════════════════════
  // N3 — c.1770s · 读 Raynal · 「黑人 Spartacus」预言 · 反 Whig
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N3',
    year: 1775,
    location: 'Bréda 种植园，Saint-Domingue',
    title: {
      cn: '一本被法国查禁的书',
      en: 'A book that France itself banned',
    },
    content: {
      cn: `有一本书，也许是在 1770 年代某个时候，经由 affranchis（自由有色人种）的流通网络传到我手里。

也许。

Laurent Dubois 2004 年说：「可能读过，但不能确证。」他是对的。Saint-Domingue 1780 年代确实有印刷品流通，一个会法语的自由黑人接触到它的可能性是真实的。但「Toussaint 读过这本书」是高概率的叙事，不是铁证的事实。我必须这样告诉你。

这本书叫《Histoire des deux Indes》（两印度史），作者是 Abbé Raynal（雷纳尔神父）。1770 年出版，1781 年被法国查禁，Raynal 本人被迫流亡。

想一想这件事：如果我真的读过这本书，我学到的是启蒙思想里被自己的体制排斥的那部分——不是 Voltaire 在巴黎沙龙里谈的那种「理性」，而是一本被法国国王查禁的书里的那种「自由」。

这本书的第 10 册里有一句话：「自然欠受压迫人们的那个伟大人物在哪里？那个新的 Spartacus（斯巴达克斯）在哪里？」

C.L.R. James 1938 年把这句话当作「预言」来写。但「预言」这个框架本身是后见之明——Raynal 写这句话的时候，不知道我是谁，他是在做道德呼吁，不是在占卜。

那个「新 Spartacus」在哪里？

他在 Bréda 种植园，正在读一本被法国查禁的书。然后他用接下来 20 年证明了那句话不是预言，是一个正在发生的事实。`,
      en: `There was a book. Perhaps sometime in the 1770s, it reached me through the circulation networks of the affranchis — the free people of color.

Perhaps.

Laurent Dubois (2004) writes: "He may have read it, but this cannot be confirmed." He is right. Printed material did circulate in 1780s Saint-Domingue, and the possibility that a literate free Black man encountered it is real. But "Toussaint read this book" is a high-probability narrative, not a verified fact. I have to tell you that clearly.

The book was the *Histoire des deux Indes* (History of the Two Indies), written by Abbé Raynal. Published in 1770, banned in France in 1781, with Raynal himself forced into exile.

Think about what that means: if I truly read this book, what I learned was the part of Enlightenment thought that had been expelled by its own system — not the "reason" Voltaire discussed in Parisian salons, but the "liberty" written in a book that the French king had banned.

In the tenth volume of this book, there is a sentence: "Where is the great man whom Nature owes to her vexed, oppressed, and tormented children? Where is this new Spartacus?"

C.L.R. James in 1938 treated this sentence as a "prophecy." But the prophecy framework is itself hindsight — when Raynal wrote it, he did not know who I was. He was making a moral appeal, not a prediction.

Where was that new Spartacus?

He was on the Bréda plantation, reading a book that France itself had banned. Then he spent the next twenty years turning that sentence from a prediction into a fact.`,
    },
    themeCn: '预言者是法国人，实现者是他——这是启蒙最大的讽刺',
    themeEn: 'The prophet was French; the one who fulfilled the prophecy was not — Enlightenment\'s greatest irony',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 p.21 (Raynal hedge, 启蒙被排斥部分); James 1938 (Spartacus 引文); Raynal《Histoire des deux Indes》1770/1781',
  },

  // ═══════════════════════════════════════════════════
  // N4 — c.1776-1779 · 获得自由身 · 短暂持有奴隶 · 系统的逻辑
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N4',
    year: 1777,
    location: 'Bréda 种植园，Saint-Domingue',
    title: {
      cn: '自由了，但我进入了一个系统',
      en: 'Free — but I had entered a system',
    },
    content: {
      cn: `大约 1776 到 1779 年间，Bayon de Libertat 给了我「自由身」（manumission，法律上的释放）。

我成为了 affranchi libre——「自由黑人」。

但在 Saint-Domingue 的四层社会体制里，我的位置是这样的：白人（grands blancs + petits blancs）在顶层，自由有色人种（gens de couleur）在中层，500,000 个奴隶在底层。我从底层进入了中层——但中层里，自由黑人的地位通常还低于混血自由人（mulâtres）。

获得自由身后，我仍在 Bréda 种植园担任 commandeur（种植园监工）。这是当时 affranchi 常见的过渡性安排——自由了，但经济上还留在原地，并不稀奇。

然后是那个我不想省略的细节。

Laurent Dubois 2004（第 91 页）记录：在起义之前，Toussaint 短暂地持有过少数几个自己的奴隶，用于耕种他租来的土地。

这不是要为他辩护，也不是要谴责他。这是理解 Saint-Domingue 社会复杂性的关键：自由黑人进入了一个系统，而这个系统里连自由黑人也可以成为奴隶主。系统的逻辑不会因为你曾经是受害者而停止诱惑你。

我知道这个系统是错的。但我也进入了这个系统。

这件事，我在后来的岁月里带着。它不是我能轻易放下的东西。`,
      en: `Sometime between 1776 and 1779, Bayon de Libertat granted me manumission — legal freedom.

I became an affranchi libre — a free Black man.

But in Saint-Domingue's four-tiered social structure, my position looked like this: white colonists (grands blancs and petits blancs) at the top, free people of color (gens de couleur) in the middle, and 500,000 enslaved people at the bottom. I had moved from the bottom into the middle — but within the middle tier, free Black men typically ranked below mixed-race freedmen (mulâtres).

After receiving my freedom, I remained at the Bréda plantation as commandeur (plantation overseer). This was a common transitional arrangement for the affranchi — legally free but economically still tied to the original site. It was not unusual.

Then there is a detail I will not skip.

Laurent Dubois (2004, p. 91) documents: before the uprising, Toussaint briefly held a small number of enslaved people himself, to work a piece of rented land.

This is not a defense, and it is not a condemnation. It is a key to understanding Saint-Domingue's social complexity: a free Black man entered a system — and within that system, even a free Black man could become an enslaver. The system's logic does not stop tempting you simply because you were once its victim.

I knew the system was wrong. And I also entered the system.

I carried that with me through everything that came after. It was not something I could set down lightly.`,
    },
    themeCn: '系统的逻辑不会因为你曾是受害者而停止诱惑你',
    themeEn: 'The system\'s logic does not stop tempting you just because you were once its victim',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 p.91 (短暂持有奴隶 careful framing); Dubois 2004 (affranchi commandeur 惯例)',
  },

  // ═══════════════════════════════════════════════════
  // N5 — 1789.8.26 · 《人和公民权利宣言》抵达 · 「这句话不包括我」
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N5',
    year: 1789,
    location: 'Saint-Domingue，北部省',
    title: {
      cn: '「所有人生而自由」——这句话是为谁写的',
      en: '"All men are born free" — written for whom',
    },
    content: {
      cn: `1789 年 8 月 26 日，巴黎：《人和公民权利宣言》（Déclaration des droits de l'homme et du citoyen）通过。

第一条：「所有人生而自由，在权利上平等。」

消息跨越大西洋，传到 Saint-Domingue。

我那年 47 岁。我是一个会读法语的自由黑人，在 Saint-Domingue 四层社会体制里的第二层。我读了那份文件。

「所有人生而自由，在权利上平等。」

我读完那句话，在那个下午，我问了一个问题——不是大声问的，是对着那页纸问的：

这句话是为谁写的？

它不包括我。不是因为他们忘了——是因为他们写这句话的时候，脑子里的「人」（homme / man）根本没有包含我这个类别的人。Saint-Domingue 有 500,000 个被奴役的人。写这份宣言的人，里面有人持有奴隶，有人是奴隶贸易的受益者。

「所有人生而自由」——这是世界上最漂亮的谎言，也是世界上最重要的尚未兑现的承诺。

它两个都是，同时。

巴黎把这句话扔进了世界，然后这句话变成了爆炸物。不是礼物——是爆炸物。在 Saint-Domingue，在每一个读到它的人手里，它都是一根已经点燃的导火索。`,
      en: `August 26, 1789. Paris. The *Déclaration des droits de l'homme et du citoyen* — the Declaration of the Rights of Man and of the Citizen — was adopted.

Article 1: "All men are born free and equal in rights."

The news crossed the Atlantic and reached Saint-Domingue.

I was 47 years old. I was a literate free Black man in the second tier of Saint-Domingue's four-tiered social hierarchy. I read that document.

"All men are born free and equal in rights."

I read that sentence, and on that afternoon, I asked a question — not aloud, but directed at the page in front of me:

Who was this written for?

It did not include me. Not because they forgot. Because when they wrote the word "homme" — man — their minds never contained someone of my category. Saint-Domingue had 500,000 enslaved people. Among the men who wrote this declaration, some held enslaved people themselves. Some were beneficiaries of the slave trade.

"All men are born free" — this is the most beautiful lie in the world, and also the most important unfulfilled promise in the world.

It is both, simultaneously.

Paris threw this sentence into the world. Then the sentence became an explosive charge. Not a gift — an explosive. In Saint-Domingue, in the hands of every person who read it, it was a fuse already lit.`,
    },
    themeCn: '「所有人生而自由」——最漂亮的谎言，也是最重要的未兑现承诺',
    themeEn: '"All men are born free" — the most beautiful lie, and the most important unkept promise',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 (《宣言》传到 Saint-Domingue); 四层社会体制数据 Dubois 2004',
  },

  // ═══════════════════════════════════════════════════
  // N6 — 1790 · Ogé 起义与车裂 · 「不能把自由拆开分级争取」
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N6',
    year: 1790,
    location: 'Saint-Domingue，Cap-Français（今海地角）',
    title: {
      cn: '他的失败教会了我一件事',
      en: 'His failure taught me one thing',
    },
    content: {
      cn: `1790 年 10 月，一个叫 Vincent Ogé 的 gens de couleur（自由有色人种）领袖，带着约 300 人起义——要求实施给予有色自由人的公民权。

他是 1789 年在巴黎亲眼看见大革命的人。他向国民议会（National Assembly）请愿，要求有色自由人的权利。然后他回到 Saint-Domingue，拿起武器。

但有一个关键细节：Ogé 明确拒绝让奴隶加入他的起义。

他不是为了废奴。他是为了 gens de couleur 的政治地位——那 30,000 个自由有色人种的权利，不是那 500,000 个被奴役的人的权利。

起义在两个月内失败。Ogé 被俘。

1791 年 2 月，他在 Cap-Français（今海地角）被处以「车裂」（roue）——四匹马从四个方向撕开身体，在公众面前执行。这种刑罚在法国本土正在废除，但在 Saint-Domingue 被用来警告任何胆敢要求权利的人。

我 47 岁，看着这件事发生。

我不知道 Ogé 在那最后的时刻想什么。我知道的是，他给我上了一课——不是关于勇气的那种，他有足够的勇气。是关于策略的：

把自由拆开，分级争取，就会分开来输。

Ogé 要了有色自由人的权利，不要奴隶的自由——于是他孤立了。于是他失败了，死了。500,000 人没有加入他，因为他没有邀请他们。

这不是批评他——他在自己的时代里做了他认为可行的事。但他的失败告诉我：自由不能有等级。`,
      en: `In October 1790, a leader of the gens de couleur named Vincent Ogé took up arms with roughly 300 followers — demanding that civil rights already granted to free people of color be implemented.

He was someone who had personally witnessed the Revolution in Paris in 1789. He had petitioned the National Assembly for the rights of free people of color. Then he returned to Saint-Domingue and picked up weapons.

But there was a critical detail: Ogé explicitly refused to allow enslaved people to join his uprising.

He was not fighting for abolition. He was fighting for the political status of the gens de couleur — the rights of those 30,000 free people of color, not the rights of those 500,000 enslaved people.

The uprising failed within two months. Ogé was captured.

In February 1791, he was executed by roue — the wheel — in Cap-Français: four horses pulling the body apart from four directions, performed in public. This form of punishment was being abolished in France itself, but in Saint-Domingue it was used to warn anyone who dared to demand rights.

I was 47 years old, and I watched this happen.

I do not know what Ogé was thinking in those final moments. What I know is that he taught me something — not about courage, he had enough of that. About strategy:

If you divide freedom into tiers and fight for each tier separately, you will lose each tier separately.

Ogé asked for the rights of free people of color, but not for the freedom of the enslaved — and so he was isolated. And so he failed, and died. The 500,000 did not join him, because he had not invited them.

This is not a criticism of him — he did what he believed was possible within his time. But his failure told me: freedom cannot have a hierarchy.`,
    },
    themeCn: '把自由拆开分级争取，就会分开来输',
    themeEn: 'Divide freedom into tiers and you will lose each tier separately',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 (Ogé 起义 + 车裂); Dubois 2004 (Ogé 明确拒绝奴隶加入)',
  },

  // ═══════════════════════════════════════════════════
  // N7 — 1791.8-10 · Bois Caïman 之后 · Toussaint 的那个瞬间
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N7',
    year: 1791,
    location: 'Bréda 种植园 → 起义军营地，Saint-Domingue 北部',
    title: {
      cn: '我送 Bayon 上船的那一刻',
      en: 'The moment I helped Bayon onto the ship',
    },
    content: {
      cn: `1791 年 8 月 22 日夜晚，Saint-Domingue 北部，一片叫 Bois Caïman（鳄鱼树林）的地方，奴隶起义的领袖们聚集。Dutty Boukman（布克曼）主持仪式，起义开始。北部平原的种植园开始燃烧。

我在哪里？

这是关于我生命里最重要的那段时间，最需要诚实讲述的问题。

C.L.R. James 1938 年写我出席了那场仪式，是起义组织者之一——这个版本更英雄，但证据语焉不详。Laurent Dubois 2004 给出了更审慎的记录：起义第一夜，我在 Bréda 种植园，帮助了旧主人 Bayon de Libertat 安全撤离。Bayon 在 1791 年 10 月离开 Saint-Domingue，去往美国。我帮了他一程。

然后，大约 1791 年 10 月，我加入了起义军。

我送 Bayon 上船的那一刻——历史不知道我在想什么。一种解读：我对给了我自由身的主人有人情义务，我在履行义务。另一种解读：我在等待，在观察形势，在计算最佳时机。

两种解读都有道理。历史学家说「不知道」，这本身是答案的一部分。

Revolutionaries（革命者）不是天生就革命的。他们在某一个具体的时刻做了决定。我的那个时刻，我们不知道确切是哪一天，不知道是在什么情绪里做出的。

但结果是知道的：1791 年 10 月，我加入了起义。我会读、会写、会骑马、懂策略——在起义军里，这些是极稀缺的资源。我迅速成为了军事指挥官。

这就是我的人性所在：革命者也有一个决定前的停顿。`,
      en: `August 22, 1791. Northern Saint-Domingue. A place called Bois Caïman. The leaders of the enslaved people's uprising gathered there. Dutty Boukman led the ceremony, and the uprising began. The plantations of the northern plain started to burn.

Where was I?

This is the question that requires the most honesty about the most important period of my life.

C.L.R. James (1938) wrote that I attended that ceremony and was one of the uprising's organizers — this version is more heroic, but the evidence is vague. Laurent Dubois (2004) gives a more careful account: on the first night of the uprising, I was at the Bréda plantation, helping my former master Bayon de Libertat escape safely. Bayon left Saint-Domingue in October 1791, bound for the United States. I helped him along the way.

Then, around October 1791, I joined the uprising.

The moment I helped Bayon onto that ship — history does not know what I was thinking. One reading: I felt a debt of obligation toward the master who had given me my freedom, and I was fulfilling it. Another reading: I was waiting, watching conditions, calculating the best moment to act.

Both readings are plausible. When historians say "we don't know," that itself is part of the answer.

Revolutionaries are not born revolutionary. They make a decision at a specific, concrete moment. My moment — we don't know exactly what day it was, or what I was feeling when I made it.

But the outcome is known: in October 1791, I joined the uprising. I could read, write, ride, and think strategically — and in the uprising's ranks, these were extraordinarily scarce resources. I rapidly became a military commander.

This is where my humanity lives: even a revolutionary has a pause before the decision.`,
    },
    themeCn: '革命者不是天生就革命的——他们在某一刻做了决定，那个瞬间我们不知道',
    themeEn: 'Revolutionaries are not born that way — they make a decision at one moment, and that moment we do not know',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 (Bois Caïman careful framing); Dubois 2004 (Bayon 撤离, Toussaint 1791.10 加入)',
  },

  // ═══════════════════════════════════════════════════
  // N8 — 1793 · 投靠西班牙 → 法国 · 「Louverture」· 跨 lens ⭐⭐⭐
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N8',
    year: 1793,
    location: 'Saint-Domingue，Santo Domingo 边界地区',
    title: {
      cn: '我给自己起了一个名字，意思是「缺口」',
      en: 'I gave myself a name that means "the opening"',
    },
    content: {
      cn: `1793 年初，我带领我的部队加入了西班牙军队。

不是因为效忠西班牙——是战略计算。西班牙向加入他们的起义军承诺：你们获得自由，在西班牙国王保护下作战。法国共和国在 1793 年的立场仍然摇摆——殖民地白人议会拒绝废奴，巴黎的方向在革命派系斗争里不清晰。西班牙给了我军衔、军饷、武器。

我在西班牙旗帜下打法国军队。

然后，1794 年 2 月 4 日，法国国民公会（Convention nationale）通过决议：废除法国所有殖民地的奴隶制。这是人类历史上第一次国家级别的废奴令。

消息传来时，我在西班牙阵营里。我花了数周评估：这个废奴令是真实的政策，还是虚词？我确认它是真的之后，我带着部队离开西班牙，转投法国。

我的理由，用我自己后来说过的话：西班牙承诺的自由只给了部分人；法国国民公会用法律宣布了所有人的自由。

就在 1793 年，我签了第一份以新名字命名的声明——

**Toussaint Louverture**

「Louverture」，法语（French），意思是「开口」「破口」「缺口」。我自己起的，因为我「在敌人阵线上打出了缺口」。

现在我需要告诉你一件你可能不知道的事：同一年，同一个「法国」，1793 年 11 月 3 日，巴黎，一个叫 Olympe de Gouges（奥兰普·德·古日）的女人被同一个法国砍掉了头。她 1791 年写过《女性和女公民权利宣言》，她用启蒙的语言要求女性的权利——法国把她送上了断头台。

她不知道我的存在。我不知道她死去。

同一年，同一个「自由」，两种命运。这就是 1793 年的启蒙。`,
      en: `In early 1793, I brought my forces over to the Spanish army.

Not out of loyalty to Spain — this was a strategic calculation. Spain had promised freedom to enslaved fighters who joined them, guaranteed under the Spanish king's protection. The French Republic's position in 1793 was still unstable — the white colonial assembly refused to abolish slavery, and Paris's direction was unclear amid the factional fighting of the Revolution. Spain gave me rank, pay, and weapons.

I fought against French forces under the Spanish flag.

Then, on February 4, 1794, the French National Convention passed a resolution: slavery was abolished in all French colonies. This was the first state-level abolition decree in human history.

When the news reached me, I was in the Spanish camp. I spent several weeks evaluating: was this abolition decree a real policy, or empty words? Once I confirmed it was real, I brought my troops across and joined the French.

My reason, in words I used afterward: Spain's freedom promise covered only part of the people; the French National Convention declared the freedom of all people by law.

And it was in 1793 that I signed the first declaration under my new name —

**Toussaint Louverture**

"Louverture" — in French, it means "an opening," "a breach," "a gap." I gave myself this name because I had "opened a gap in the enemy's lines."

Now I need to tell you something you may not know. In the same year, under the same "France," on November 3, 1793, in Paris, a woman named Olympe de Gouges was beheaded by that same France. She had written the *Declaration of the Rights of Woman and of the Female Citizen* in 1791. She had used Enlightenment language to demand women's rights — and France sent her to the guillotine.

She did not know I existed. I did not know she had died.

Same year. Same "liberty." Two fates. That was the Enlightenment in 1793.`,
    },
    themeCn: '他在自己名字里藏了一个意象：他就是那个缺口本身',
    themeEn: 'He hid an image in his own name: he was himself the opening',
    crossLensHook: '跨 lens ⭐⭐⭐: 1793.11.3 Olympe de Gouges 在巴黎被同一个「法国」处死——他们同年，同一个「自由」，从未相识，两种命运。',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 pp.100-110 (1793 转投法国 careful framing); Dubois 2004 (废奴令 1794.2.4); Dubois 2004 (「Louverture」名字来源)',
  },

  // ═══════════════════════════════════════════════════
  // N9 — 1798 · 击退英军 · Maitland 协定 · 战略家的思维方式
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N9',
    year: 1798,
    location: 'Saint-Domingue，北部和西部',
    title: {
      cn: '我没有召唤黄热病，但我用了它',
      en: 'I did not summon yellow fever, but I used it',
    },
    content: {
      cn: `1793 年，英国军队以「保护英国公民」为名登陆 Saint-Domingue。他们真正的理由：这是地球上最富有的糖业殖民地，法国大革命造成的混乱是夺取它的历史机会。

有一件事必须说清楚：英国 1793 年的部队不是来废奴的。英国 1807 年才废除奴隶贸易，1834 年才废除殖民地奴隶制。1793 年入侵 Saint-Domingue 的英国军队，想要的是恢复奴隶制，让这块土地在英国旗帜下继续生产糖。

我领导的军队和他们打了五年。

但我不是孤独作战的。

加勒比的热带气候对英国士兵是致命的。黄热病（yellow fever / fièvre jaune）在英军中造成了极高死亡率。Dubois 2004 引用的估算：英国在 1793 到 1798 年间损失了超过 25,000 名士兵——其中绝大多数死于黄热病，不是战斗。

我的战术是：不跟英军在沿海正面硬碰，把他们困在炎热的港口，等黄热病做工。

1798 年，我跟英国将领 Thomas Maitland 谈判，双方签了一份协定（Maitland-Toussaint Agreement，1798 年 8 月）：英国撤军，Saint-Domingue 对英国和美国开放贸易。在那次谈判桌上，我是以一个主权国家领导人的姿态谈的——名义上我还是法国殖民地的长官。

1798 年秋，英国军队撤出 Saint-Domingue。

我没有召唤黄热病。但我利用了它——这是战略家而不是英雄的思维方式。英雄等待正面战场的胜利；战略家知道哪些力量是他的盟友，就算那些盟友不是人。`,
      en: `In 1793, British forces landed in Saint-Domingue under the pretext of "protecting British citizens." Their actual goal: this was the world's wealthiest sugar colony, and France's revolutionary chaos was a historical opportunity to seize it.

One thing must be said clearly: the British forces of 1793 were not there to abolish slavery. Britain abolished the slave trade in 1807, and colonial slavery in 1834. The British troops who invaded Saint-Domingue in 1793 wanted to restore slavery and keep this land producing sugar under a British flag.

The forces I led fought them for five years.

But I was not fighting alone.

The Caribbean's tropical climate was lethal to British soldiers. Yellow fever — fièvre jaune — caused extremely high mortality in the British ranks. Dubois (2004) cites estimates that Britain lost more than 25,000 soldiers between 1793 and 1798 — and the overwhelming majority died of yellow fever, not battle.

My tactics: avoid direct confrontation with the British on the coast; pin them in the hot harbors; let yellow fever do its work.

In 1798, I negotiated with British General Thomas Maitland. We signed an agreement (the Maitland-Toussaint Agreement, August 1798): British withdrawal, Saint-Domingue opened to trade with Britain and the United States. At that negotiating table, I conducted myself as the leader of a sovereign state — though officially I was still the military governor of a French colony.

In the autumn of 1798, British forces withdrew from Saint-Domingue.

I did not summon yellow fever. But I used it — that is how a strategist thinks, not how a hero thinks. A hero waits for victory in the open field. A strategist knows which forces are his allies, even when those allies are not human.`,
    },
    themeCn: '战略家知道哪些力量是他的盟友，就算那些盟友不是人',
    themeEn: 'A strategist knows which forces are allies — even when those allies are not human',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 pp.208-212 (Maitland 协定); Dubois 2004 (~25,000 英军死亡 careful framing); 英国废奴时间线',
  },

  // ═══════════════════════════════════════════════════
  // N10 — 1801.7.9 · 1801 宪法 · 终身总督 · 权力的引力
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N10',
    year: 1801,
    location: 'Saint-Domingue，Cap-Français',
    title: {
      cn: '革命者建立制度的那一刻',
      en: 'The moment the revolutionary built an institution',
    },
    content: {
      cn: `1801 年 7 月 9 日，我颁布了《Saint-Domingue 宪法 1801》。

主要条款：废奴永久有效；Toussaint Louverture 任终身总督，有权指定继任者；名义上仍是法国殖民地，实际独立运作。这份宪法由 Saint-Domingue 本地精英起草，未经巴黎批准，甚至没有送给 Napoleon Bonaparte（拿破仑·波拿巴）审阅就颁布。

还有一条很多人不提的：宪法里有劳动管制条款。前奴隶必须留在种植园工作。

这不是奴隶制——劳动者有工资权，有基本权利保障。但它是强制性的。

我知道没有出口糖，经济就垮——而种植园需要劳动力。这是革命领袖面对的经济约束，不是道德纯洁的问题。用 21 世纪的民主标准直接评判这个决定，是时代错置（anachronism）。

但不看那条劳动管制条款，是历史清洗。两件事都是真的。

「终身总督」——这是专制还是务实？Laurent Dubois 2004 提出了一个框架：我是「Saint-Domingue 的 Washington」（Washington 也是革命者变成威权建国者，他也拥有奴隶至死）。

还有一个背景：1801 年的 Napoleon 已经在 1799 年通过雾月政变上台，随时可能翻转法国的废奴政策。英国、美国、西班牙从四面虎视眈眈。在这个环境里，「终身总督」是政治现实主义，不只是个人独裁的欲望。

但批评者的质疑也是真实的。

革命者建立制度的那一刻，他开始成为自己批评者批评的那种人。这不是背叛——这是权力的引力，对任何人都一样。`,
      en: `On July 9, 1801, I promulgated the Constitution of Saint-Domingue 1801.

Main provisions: slavery abolished permanently; Toussaint Louverture appointed Governor-for-Life with the right to name a successor; nominally still a French colony, but functioning independently in practice. This constitution was written by Saint-Domingue's local elite, adopted without Paris's approval, and promulgated without even sending it to Napoleon Bonaparte for review.

There is also one clause many accounts omit: the constitution contained labor-control provisions. Former enslaved people were required to remain on the plantations and work.

This was not slavery — workers had rights to wages and basic legal protection. But it was compulsory.

I knew that without sugar exports, the economy would collapse — and plantations required labor. This was the economic constraint facing a revolutionary leader, not a question of moral purity. Judging this decision directly by 21st-century democratic standards is anachronism.

But to ignore that labor-control clause entirely is historical whitewashing. Both things are true simultaneously.

"Governor-for-Life" — was this despotism or pragmatism? Laurent Dubois (2004) offers a framework: I was "Saint-Domingue's Washington" (Washington was also a revolutionary who became an authoritative founding leader — and he held enslaved people until his death).

There is also context: by 1801, Napoleon had already taken power through the coup of 18 Brumaire in 1799, and could reverse France's abolition at any moment. Britain, the United States, and Spain watched from every side. Within that environment, "Governor-for-Life" was political realism, not merely personal ambition for domination.

But the critics' questions are also real.

The moment a revolutionary builds an institution, he begins to become the kind of person his own critics criticize. This is not betrayal — it is the gravitational pull of power, the same for anyone.`,
    },
    themeCn: '革命者建立制度的那一刻，他开始成为自己批评者批评的那种人',
    themeEn: 'The moment a revolutionary builds an institution, he begins to become who his critics say he is',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 pp.230-250 (1801 宪法条款); Dubois 2004 (「Saint-Domingue 的 Washington」框架); anachronism hedge',
  },

  // ═══════════════════════════════════════════════════
  // N11 — 1802.6.7 · 被捕 · 最大战略失误 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N11',
    year: 1802,
    location: 'Saint-Domingue，Brunet 将军营帐',
    title: {
      cn: '我走进了那间营帐',
      en: 'I walked into that tent',
    },
    content: {
      cn: `1802 年，Napoleon 派他的内弟 Charles Leclerc 将军率约 20,000 名法国士兵远征 Saint-Domingue。目标明确：解除我的武装，恢复法国直接控制，最终恢复种植园经济。

同年 5 月 20 日，Napoleon 正式颁令恢复法属加勒比海其他殖民地（Guadeloupe 等）的奴隶制。Saint-Domingue 的法令措辞故意模糊，但方向已经清晰。

1802 年春夏，我和 Leclerc 几度交战，几度谈判。5 月，Leclerc 提出条件：如果我同意停战 + 承认法国主权，可以保留职位和荣誉。我谈判，接受了。

然后是 1802 年 6 月 7 日。

Leclerc 的属下将领 Jean-Baptiste Brunet 邀请我前去他的营帐会面——据说是讨论当地治安事务。

我去了。

我一到达，就被逮捕了。

Dubois 2004（第 261-265 页）说：「Toussaint 当时对谈判仍有幻想——他认为只要法国不恢复奴隶制，双方有合作空间。这个幻想在 1802 年 5 月 Guadeloupe 恢复奴隶制后本应破灭，但 Toussaint 低估了 Napoleon 的意图。」

我低估了。

这是我一生最大的战略失误。我打败过西班牙、打败过英国，用的是精确的计算和对敌人意图的判断。但在 Napoleon 这里，我的判断失误了——我对启蒙承诺抱着最后一丝信任：只要法国不恢复奴隶制，谈判还有意义。

Guadeloupe 已经告诉我答案了。但我没有充分相信它。

被捕后，我被立即装船运往法国。

---

你认为，一个人在做出一生最大的错误判断之前，有没有预感？如果有，为什么他还是走进了那间营帐？`,
      en: `In 1802, Napoleon dispatched his brother-in-law General Charles Leclerc with approximately 20,000 French soldiers to Saint-Domingue. The goal was clear: disarm me, restore direct French control, and ultimately restore the plantation economy.

On May 20 of the same year, Napoleon formally decreed the restoration of slavery in France's other Caribbean colonies — Guadeloupe and others. The Saint-Domingue decree was deliberately left vague, but the direction was unmistakable.

Through the spring and summer of 1802, I alternated between fighting and negotiating with Leclerc. In May, Leclerc offered terms: if I accepted a ceasefire and acknowledged French sovereignty, I could keep my position and honors. I negotiated. I accepted.

Then came June 7, 1802.

One of Leclerc's subordinate generals, Jean-Baptiste Brunet, invited me to a meeting at his headquarters — ostensibly to discuss local security matters.

I went.

The moment I arrived, I was arrested.

Dubois (2004, pp. 261-265) writes: "Toussaint still harbored illusions about negotiation — he believed that as long as France did not restore slavery, there was room for cooperation. That illusion should have shattered when Guadeloupe restored slavery in May 1802, but Toussaint underestimated Napoleon's intentions."

I underestimated.

This was the greatest strategic error of my life. I had defeated Spain, I had defeated Britain, using precise calculation and correct reading of my enemies' intentions. But with Napoleon I made a mistake in judgment — I held onto one last thread of trust in the Enlightenment's promises: as long as France did not restore slavery, negotiation still meant something.

Guadeloupe had already given me the answer. But I did not fully believe it.

After my arrest, I was immediately put on a ship bound for France.

---

Do you think a person can have a premonition before making the greatest mistake of their life? If so, why did he still walk into that tent?`,
    },
    themeCn: '他一生最大的战略失误，来自他对启蒙诺言最后一丝信任',
    themeEn: 'His greatest strategic error came from the last thread of trust he held in the Enlightenment\'s promises',
    expectsRealAnswer: true,
    sourcingNote: 'Dubois 2004 pp.261-265 (被捕 careful framing, 「幻想」分析); Blackburn 1988 (Napoleon 恢复奴隶制意图)',
  },

  // ═══════════════════════════════════════════════════
  // N12 — 1803.4.7 · Fort de Joux · 死亡 · 反 Whig 总结 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N12',
    year: 1803,
    location: 'Fort de Joux，法国东部 Jura 山，海拔约 1,000 米',
    title: {
      cn: '用一句谎言和一个真相，他把两件事同时说清楚了',
      en: 'With a lie and a truth, he made both visible at once',
    },
    content: {
      cn: `Fort de Joux（德儒堡垒）是法国东部 Franche-Comté 地区汝拉山（Jura Mountains）里的一座石头要塞，建于 12 世纪，用于关押政治犯。海拔约 1,000 米，冬天极寒。

1802 年秋冬，我在这里被单独关押。法国当局没有指控我任何罪名，没有审判。我不断要求见 Napoleon，要求解释被捕原因——没有回应。

囚室漏风，潮湿，木柴被克扣。营养不足。

1803 年 4 月 7 日，我死在 Fort de Joux。死因：肺炎 + 胸膜炎，与囚禁环境直接相关。我 59 岁或 60 岁——档案里连我的年龄都不确定，因为我的出生没有被记录。

关于「最后遗言」，必须诚实地说：

流传最广的是：「打倒我，只是砍掉了自由之树的主干；它会从根重生，因为根又深又多。」

C.L.R. James 1938 年引用了这句话，但他的来源是 19 世纪的传记和 pamphlet（小册子）文学——不是 Toussaint 当时留下的书写记录。Dubois 2004 在第 280 页脚注里明确写：「这句话的文字形式最早见于后世文献，是否确为 Toussaint 原话无法确证——但它已成为海地革命历史记忆的核心文本。」

这不代表这句话是假的。它是口述革命传统（oral revolutionary tradition）的一部分。

我没有看到 1804 年 1 月 1 日海地独立。

但 Dessalines 在独立那天宣布的国名，用了一个 Taíno（泰诺）原住民语言里的词——「Ayiti」（多山的土地）。这是 1800 年前 Hispaniola 岛上 Taíno 人的语言：同一块土地，300 年前 Taíno 文明被摧毁，300 年后，新的共和国用那个消失文明的语言命名自己。

链条没有断。

现在，这就是我的故事的完整逻辑：

1789 年，法国写下「所有人生而自由」——这句话不包含我。1793 年，法国废奴——这个承诺是真实的，但同一个法国在同一年把 Olympe de Gouges 送上了断头台。1801 年，我颁布了宪法，建立了劳动管制——我进入了权力的引力。1802 年，我对启蒙承诺抱着最后一丝信任，走进了 Brunet 的营帐。1803 年，我死在 Jura 山里一间漏风的囚室。

我用了启蒙的语言，打败了启蒙的施害者，最终死于启蒙承诺者的囚禁。

这个结局不是失败。这是「receiving-end 用你自己的话反对你」的完整逻辑链。

---

读完 Toussaint 的 12 个节点，你认为：用自己压迫者的语言对抗压迫者，这是一种胜利，还是一种困境？为什么？`,
      en: `Fort de Joux is a stone fortress built in the 12th century in the Jura Mountains of Franche-Comté in eastern France, used for political prisoners. Elevation approximately 1,000 meters. Winters are brutally cold.

Through the autumn and winter of 1802, I was held there in solitary confinement. French authorities filed no formal charges and held no trial. I repeatedly requested an audience with Napoleon, demanding an explanation for my arrest — no response came.

The cell was drafty and damp. Firewood was withheld. Food was insufficient.

On April 7, 1803, I died at Fort de Joux. Cause of death: pneumonia and pleurisy, directly related to my conditions of confinement. I was 59 or 60 years old — even my age is uncertain in the archives, because my birth was never recorded.

About the "last words" — honesty is required here.

The most widely cited version is: "In overthrowing me, you have done no more in Saint-Domingue than cut down the trunk of the tree of liberty. It will spring back from the roots, for they are numerous and deep."

C.L.R. James (1938) cited these words, but his sources were 19th-century biographies and pamphlet literature — not a contemporaneous written record from Toussaint himself. Dubois (2004), in a footnote on p. 280, explicitly states: "The written form of this statement first appears in later documents; whether it represents Toussaint's actual words cannot be confirmed — but it has become a core text in the historical memory of the Haitian Revolution."

This does not mean the words are false. They belong to the oral revolutionary tradition.

I did not live to see Haitian independence on January 1, 1804.

But when Dessalines declared independence on that day, the name he chose for the new nation came from a word in the language of the Taíno indigenous people — "Ayiti" (land of mountains). This was the language of the people who had lived on Hispaniola before any European arrived: on the same land, 300 years after the Taíno civilization was destroyed, a new republic named itself in the language of that vanished civilization.

The chain was not broken.

Now, here is the complete logic of my story:

In 1789, France wrote "all men are born free" — and that sentence did not include me. In 1793, France abolished slavery — the promise was real, but that same France in that same year sent Olympe de Gouges to the guillotine. In 1801, I promulgated a constitution and built in labor controls — I had entered the gravitational pull of power. In 1802, I held onto one last thread of trust in Enlightenment promises, and I walked into Brunet's headquarters. In 1803, I died in a drafty cell in the Jura mountains.

I used Enlightenment language, defeated Enlightenment's perpetrators, and died in the imprisonment of Enlightenment's promisors.

That ending is not a failure. It is the complete logical chain of "the receiving-end using your own words against you."

---

Having read all twelve nodes of Toussaint's story: do you think using the language of your oppressors to resist oppression is a victory, or a trap — or something that cannot be cleanly separated into either? Why?`,
    },
    themeCn: '他用 14 年，把一句谎言和一个真相同时说清楚了',
    themeEn: 'He spent 14 years making a lie and a truth visible at the same time',
    crossTopicHook: '跨 Topic Pre-Columbian: 1804 年海地独立，国名「Haïti」来自 Taíno 语「Ayiti」——同一块土地，Anacaona Jr. (1508) 目睹 Taíno 文明终结，300 年后新共和国用 Taíno 语命名自己。链条没有断。',
    expectsRealAnswer: true,
    sourcingNote: 'Dubois 2004 pp.277-280 (Fort de Joux 死亡记录 + 最后遗言 careful framing); James 1938 ch.13; Dubois 2004 (「Ayiti」命名); Blackburn 1988',
  },

];
