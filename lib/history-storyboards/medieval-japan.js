// ─── Medieval Japan 794-1603 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 中世日本 · Medieval Japan 794-1603
// HSS-7.5 · AP World 2.3 (Japan feudal + Mongol invasions + cultural exchange)
//
// 3 lens 设计 (per Sarah Chen audit + 王老师 curriculum sequence):
//   - tokimune-defender  (perpetrator-actor / system-hardener) — 1251-1284 击退蒙古的镰仓执权
//   - sesshu-mediator    (lonely-mediator / Zen-painter) — 1420-1506 赴明中日文化 broker
//   - masako-widow-nun   (receiving-end, defaultLens) — 1156-1225 镰仓幕府的政治支柱
//
// 跨 lens micro-detail (per Sarah Chen audit):
//   锁定 #1: 1268.1 蒙古国书 — 时宗 N3 主场 / 政子遗产回挂 / 雪舟未生 152 年
//   锁定 #2: 1281.8 弘安台风前夜 — 时宗 N8 主场 / 圆觉寺政子遗产 N11
//   锁定 #3: 1467 应仁之乱年 — 雪舟 N6 北京 / 时宗遗产回挂 / 政子逝后 242 年
//
// 来源: Morris 1964 / McCullough 1985 / Mass 1989 / Conlan 2001 / Varley 2000
//       Rice 2010 / Turnbull 2008 / Farris 1996 / Sansom 1931 / Watanabe 1975
//       Bialock 2007
//
// schemaVersion: 2 · defaultLens: masako-widow-nun

export var tokimuneLens = {
  id: 'tokimune-defender',
  name: 'Hojo Tokimune',
  nameCn: '北条时宗',
  role: 'perpetrator-actor',
  roleDescription: 'regent-defender / system-hardener',
  description: 'Kamakura regent who repelled the Mongol invasions and hardened the shogunate system, 1251-1284',
  descriptionCn: '击退蒙古入侵的镰仓执权，硬化幕府体制，1251-1284',
  storyboard: [
  {
    nodeId: 'tokimune-N1',
    year: 1251,
    location: '镰仓，神奈川',
    titleCn: '生于制度核心，不是嫡子',
    titleEn: 'Born Inside the Machine, Not the Heir',
    bodyCn: `我叫北条时宗。1251 年，镰仓。

这座城不是日本首都——京都才是天皇住的地方——但镰仓才是真正掌权的地方。父亲北条时赖是第五代执权，「执权」这个头衔要解释清楚：它不是将军，将军是名义上最高的军事领袖；执权是将军的行政长官，是真正做决定的人。北条家掌控的是这个职位，所以我们是幕府真正的决策者，却不是最表面的招牌。

「北条时宗」这个名字，「时」字来自北条家代代相传的命名惯例。我不是嫡子——父亲更属意另外的安排，我是「备用人」，是那个出生在制度核心，却站在权力光圈边缘的孩子。

镰仓的日常是什么？是土地纠纷，是御家人管理，是《御成败式目》五十一条的法律执行。御家人是对幕府直接效忠的武士，字面意思是「将军家里的人」。他们打仗、纳税、服从，幕府给他们土地和庇护——这个交换是镰仓幕府一切权力的基础。我在这套机器里长大，看着父亲怎么调解争端，怎么分配土地，怎么在御家人之间维持平衡。

那是比骑马打仗难得多的事。

制度是什么？制度是一套规则，让每个人知道自己应该做什么、能得到什么、不服从会发生什么。镰仓的制度，是我父亲那一代人花了几十年建立起来的。我生在里面，所以我很早就理解一件事：在这套系统里，你能做什么取决于你站在哪个位置上，而不只是你有多能干。

我不是嫡子。这一课，我记了很久。`,
    bodyEn: `My name is Hōjō Tokimune. 1251, Kamakura.

This city was not Japan's capital — Kyoto was where the Emperor lived — but Kamakura was where the real power lived. My father Hōjō Tokiyori was the fifth regent, the "shikken." The title needs explanation: it is not the shogun, who holds the highest nominal military title; the regent is the shogun's administrator, the one who actually decides. The Hōjō clan controlled this position, making us the true decision-makers of the shogunate — without ever being the figurehead at the front.

"Hōjō Tokimune" — the character "Toki" passes down through each generation of the Hōjō family. I was not the chosen heir. My father had other arrangements in mind. I was the spare, the child born inside the machinery of power but standing at the edge of its light.

What was daily life in Kamakura? Land disputes. Gokenin management. Enforcing fifty-one articles of the Goseibai Shikimoku. Gokenin were the warrior lords directly loyal to the shogunate — literally "people of the shogun's household." They fought, they paid dues, they obeyed. The shogunate gave them land and protection in return. This exchange was the foundation of every authority Kamakura held. I grew up watching my father mediate conflicts, allocate land, keep the balance between warrior families.

That was far harder than riding into battle.

What is a system? A system is a set of rules that tells everyone what they should do, what they can receive, and what happens if they refuse. Kamakura's system was built over decades by my father's generation. I was born inside it. So I understood early: in this kind of structure, what you can do depends on where you stand — not only on how capable you are.

I was not the chosen heir. That lesson, I carried for a long time.`,
    themeCn: '在制度核心里出生的孩子，学到的第一件事是制度，不是战争',
    themeEn: 'A child born inside a system learns the system first, not the sword',
    crossLensHook: '北条政子 1221 年演讲也是在同一套御家人忠诚体制内完成的——时宗继承的，是政子那一代人建立的规则体系',
    expectsRealAnswer: false,
    sourcingNote: 'Mass 1989《Warrior Government in Early Medieval Japan》；Varley 2000《Japanese Culture》第 4 章执权体制结构',
  },

  {
    nodeId: 'tokimune-N2',
    year: 1263,
    location: '镰仓，禅宗修行场',
    titleCn: '父亲死后，少年靠打坐学会不表达恐惧',
    titleEn: 'After My Father Died, I Learned Fear Has No Sound',
    bodyCn: `1263 年，父亲时赖死了。我十二岁。

他是在出家状态下死的——法号「最明寺入道」，但他出家之后仍然是得宗本家的实质核心，这个「出家不退场」的动作，政子也做过。权力不需要官方头衔，这是北条家的另一条规则，我从父亲身上又学了一遍。

十二岁失去父亲，意味着什么？意味着镰仓政治立刻进入过渡期。家族长老辅政，我还不能自己做决定。意味着有人开始重新算，下一个执权是谁，北条家内部的权力天平会怎么移。意味着每一个站在我旁边的人，都在同时评估我。

禅宗在镰仓武士阶层 13 世纪迅速流行，原因是它的实践性：打坐（zazen）不需要大量经典诵读，符合武士的直接行动偏好。父亲在世时就让我接触禅宗。父亲死后，打坐成了我每天必做的事，不是因为我悟道了，而是因为北条家武士的心理训练就是这样的。

打坐是什么感觉？你坐下来，不动，不说话，只是坐着，让所有念头来了又走。镰仓的冬天很冷，禅堂的地板是冷的，你的膝盖是冷的，你的背是直的。恐惧会来——12 岁的孩子，父亲刚死，前途未定，恐惧是真实的——但你不表达它。你坐着，让它过去。

我不知道那时候的打坐有没有让我变得更有智慧。但它让我学会了一件事：不是没有恐惧，而是恐惧来了你继续坐着。

后来面对蒙古的国书，我用的是同一套。`,
    bodyEn: `In 1263, my father Tokiyori died. I was twelve years old.

He died as a monk — he had taken the tonsure and the name "Saikōji Nyūdō," but after leaving formal office he remained the effective core of the Tokusō household. That move — "leave office, don't leave power" — was something Masako had done before him. Power does not need an official title. That was another Hōjō rule, and my father taught it to me one final time by dying with it intact.

What does it mean to lose your father at twelve? It means Kamakura politics immediately enters a transition. The elder relatives take charge. You cannot yet make decisions yourself. And it means the people standing beside you are simultaneously recalculating: who will be the next regent, how will the Hōjō family's internal balance shift. Every person near you is measuring you.

Zen Buddhism spread quickly through Kamakura's warrior class in the thirteenth century, because of its practicality: seated meditation, zazen, required no extensive reading of sutras. It fit the warrior preference for direct action. My father had already introduced me to Zen. After his death, meditation became a daily practice — not because I had attained enlightenment, but because this was simply how Hōjō warriors trained their minds.

What does zazen feel like? You sit down. You do not move, do not speak. You just sit, and let thoughts arrive and pass. Kamakura winters are cold. The floor of the meditation hall is cold. Your knees are cold. Your back is straight. Fear comes — a twelve-year-old boy, father newly dead, future uncertain, the fear is real — but you do not express it. You sit, and let it pass.

I do not know whether that boyhood sitting made me wiser. But it taught me one thing: not the absence of fear, but continuing to sit while it is present.

Later, when the Mongol letter arrived, I used the same approach.`,
    themeCn: '一个少年在父亲死后，靠打坐学会了不表达恐惧',
    themeEn: 'A boy learns after his father dies that fear passes if you do not voice it',
    expectsRealAnswer: false,
    sourcingNote: 'Narrative §6 禅宗在镰仓武士阶层流行的实践性原因；Varley 2000 得宗体制',
  },

  {
    nodeId: 'tokimune-N3',
    year: 1268,
    location: '镰仓，执权府邸',
    titleCn: '十七岁，一封信，两个方向的权力宣告',
    titleEn: 'Seventeen, One Letter, Two Directions of Power',
    bodyCn: `1268 年 1 月，一艘高丽船带着元朝信使到达九州北部的太宰府。信用汉文写成，是蒙古外交的标准格式。

太宰府转报镰仓，我十七岁，刚接任第八代执权。信放在我面前。

信的结尾，意思再清楚不过：「若至此仍不遣使往来，则不得不使用兵力」。写信的人是忽必烈，成吉思汗的孙子，他那年五十三岁，已经是一个帝国老人了。我十七岁，刚继位，幕府内部还有异见，我需要确立自己是决策者。

信送到太宰府，太宰府转报镰仓幕府，镰仓幕府转报京都朝廷。于是两套权力机构都要表态。朝廷一方有声音主张议和——公家文化有通过文书处理危机的悠久传统。

我的选择：完全拒绝。不回信，不派使者。

但这里要做一个暂停：我拒绝，不只是因为我觉得蒙古的要求不合理。Conlan 2001《In Little Need of Divine Intervention》明确指出——如果朝廷的议和路线成功，处理外交的就是京都，而不是镰仓。「谁来代表日本应对蒙古」这个问题的答案，直接决定了幕府的权力合法性。我拒绝蒙古，同时也在拒绝让朝廷主导危机处理。

1221 年，北条政子在承久之乱里赢得的那场战争，让这封蒙古信只能送到我手里，而不必转交给天皇来决定。她那一年确立的权力边界，就是我现在站着的地基。

一个少年的拒绝，同时是两个方向的权力宣告：对外，拒绝蒙古的威胁；对内，告诉朝廷，危机由镰仓处理。`,
    bodyEn: `In January 1268, a Goryeo ship carried Mongol envoys to Dazaifu in northern Kyushu. The letter was written in Chinese, the standard format for Mongol diplomacy.

Dazaifu relayed it to Kamakura. I was seventeen, just installed as the eighth regent. The letter was placed before me.

The letter's closing left no ambiguity: "If relations between our countries remain unestablished by this means, we shall inevitably resort to arms." The writer was Kublai Khan, grandson of Chinggis Khan, fifty-three years old that year — a man who had been a mature political actor for decades. I was seventeen, newly in office, with dissent still present inside the shogunate. I needed to establish that I was the decision-maker.

The letter went from Dazaifu to Kamakura, and then Kamakura relayed it to the Kyoto court. Both centers of power had to respond. The court had voices arguing for negotiations — the aristocratic culture had a long tradition of resolving crises through correspondence and diplomacy.

My choice: complete refusal. No reply. No envoys.

But a pause is needed here. I refused not simply because I thought Kublai's demands were unreasonable. Conlan (2001, *In Little Need of Divine Intervention*) makes the point directly: if the court's negotiating path had succeeded, the diplomacy would have been handled by Kyoto, not Kamakura. The answer to "who represents Japan in facing the Mongols" determined the shogunate's political legitimacy. I refused the Mongols, and simultaneously refused to let the court lead the crisis response.

In 1221, Hōjō Masako's victory in the Jōkyū War had established that a letter like this would come to my hands, not to the Emperor's for resolution. The power boundary she secured that year was the ground I was standing on.

A seventeen-year-old's refusal — two directions of power announced at once: outward, rejecting the Mongol threat; inward, telling the court that Kamakura handles this.`,
    themeCn: '一个少年的拒绝，同时是两个方向的权力宣告',
    themeEn: 'One refusal, two simultaneous declarations of where power lives',
    crossLensHook: '北条政子 1221 年赢得的权力边界，是 1268 年时宗能够单独拒绝蒙古、绕开朝廷的制度前提',
    expectsRealAnswer: false,
    sourcingNote: 'Conlan 2001《In Little Need of Divine Intervention》；《蒙古国牒状》汉文原件；Sansom 1931。时宗 1251 年生，1268 年 = 17 周岁（虚岁 18）。全文采用周岁 17 岁表述。Tokimune born 1251; 1268 = age 17 by Western reckoning (age 18 by East Asian count). This storyboard uses the Western count throughout.',
  },

  {
    nodeId: 'tokimune-N4',
    year: 1271,
    location: '镰仓，执权府邸',
    titleCn: '斩使：不可撤回的决定',
    titleEn: 'Killing the Envoy: The Point of No Return',
    bodyCn: `1268 年，第一封信，我不回。

1269 年，第二批使者，我遣返。

1271 年，第三批使者来了。这一次，使者被杀。

斩杀外国使者是国际外交史上极其罕见的举动。蒙古帝国的驿站系统（yam），是建立在一个原则上的：使者神圣不可侵犯。从成吉思汗时代起，这就是跨文化贸易和外交的基础设施前提。1219 年，花剌子模王杀了蒙古商队使节——那之后，成吉思汗向西远征，花剌子模在地图上消失了。蒙古人对「杀使者」这件事，有固定的反应。

我知道这意味着什么。1271 年斩使，1274 年蒙古来袭——是同一条逻辑的两端。我摔断了电话机，对方不再谈判，直接来了。

为什么这么做？一种解读：我要彻底堵死朝廷「也许可以议和」的可能性。使者死了，外交渠道物理上切断，镰仓就是唯一的决策者。另一种解读：我二十岁，权力尚不稳固，需要一个不可撤回的姿态来证明自己不可动摇。

两种解读也许都是真的。

从大都出发，经高丽，到太宰府，再到镰仓——使者走了这么远，最后被处决在镰仓。对大都的忽必烈来说，这是他从未遇到过的答案。对我来说，这是一个我没有办法收回的决定。

「不可撤回的决定」是历史上最重要的决定类型。它不一定是最聪明的，但它是彻底划定边界的那一种。1271 年之后，中间地带不存在了。`,
    bodyEn: `In 1268, the first letter: I did not reply.

In 1269, a second set of envoys: I sent them back.

In 1271, a third group arrived. This time, the envoys were killed.

Killing foreign envoys is among the rarest acts in the history of international diplomacy. The Mongol empire's relay network, the yam, rested on a foundational principle: envoys are inviolable. From the time of Chinggis Khan, this was the basic infrastructure of cross-cultural trade and diplomacy. In 1219, the shah of Khwarezm killed Mongol trade envoys. After that, Chinggis Khan marched west, and Khwarezm was erased from the map. The Mongols had a fixed response to the killing of envoys.

I knew what this meant. The 1271 killing and the 1274 invasion were two ends of the same logic. I smashed the telephone — the other side stopped negotiating and came instead.

Why do it? One reading: I wanted to permanently close off the court's option of "perhaps we can negotiate." With the envoys dead and the diplomatic channel physically severed, Kamakura was the only decision-maker. Another reading: I was twenty years old, my power still not fully consolidated. I needed an irreversible gesture to prove I could not be moved.

Perhaps both are true.

From Dadu, through Goryeo, to Dazaifu, then to Kamakura — the envoys traveled all that way, and were executed in Kamakura. For Kublai Khan in Dadu, this was an answer he had never received before. For me, it was a decision I had no way to take back.

"Irrevocable decisions" are among the most important category in history. They are not always the wisest. But they are the kind that draws a line so completely there is no middle ground left. After 1271, the middle ground was gone.`,
    themeCn: '不可撤回的决定彻底划定边界，但也切断了所有其他的可能',
    themeEn: 'An irrevocable decision draws the sharpest line — and closes every other door',
    crossTopicHook: '花剌子模 1219 年杀使 → 蒙古西征；日本 1271 年杀使 → 1274 年入侵。同一个模式，同一个后果',
    expectsRealAnswer: false,
    sourcingNote: 'Conlan 2001；Narrative §7 斩使动机分析；Mongol Topic cross-ref Yam 驿站系统',
  },

  {
    nodeId: 'tokimune-N5',
    year: 1274,
    location: '博多湾，九州北部',
    titleCn: '爆炸声：没有人知道那叫「历史」',
    titleEn: 'The Explosion: No One Knew It Was Called History',
    bodyCn: `1274 年文永之役（Bun\'ei no Eki）：10 月，蒙古-高丽联军从合浦出发，经对马岛、壹岐岛，在博多湾登陆。

关于人数，史料有分歧：《元史》记 15,000-25,000；《高丽史》记合计约 33,000；Turnbull 2008 用约 25,000-30,000 作为较稳健的估计，配近 900 艘船。Grade 7 读者用「约 25,000-30,000 人，近 900 艘船」即可，不用假装精确。

日本武士战争有一套规矩：双方武将先互报名号，一对一单挑，弓马之间有规则。这套传统在日本内部战争里有真实的军事逻辑——但在蒙古军面前，这套规则变成了灾难。蒙古战法是集团战术：数百人同步移动，弓手轮替，长矛兵掩护。日本武士冲过去单挑，迎接他的是整排箭雨。

然后是铁炮（tetsuhau）。铁炮不是后来明朝的火绳枪，而是一种铁壳炸弹，填入火药和铁片，点燃后抛掷，爆炸时产生声响、火光、碎片。

武士们听到爆炸声的第一刻，没有人知道那叫什么。《蒙古袭来绘词》记录了这场战争，其中有描绘铁炮爆炸的画面——这幅绘卷的主人竹崎季长，是一个武士，他画这幅画，是为了告诉幕府「我打了仗，请赏赐我土地」。所以这幅画首先是一份证明功劳的申请书，不是客观历史记录（Conlan 2001）。铁炮确实存在（考古出土有实物），但其决定性作用可能比绘词描绘的小一些。

我在镰仓，不在博多湾。消息用驿马传到我手里的时候，战斗已经进行了一整天。我知道的只是：日本守军节节后退，退守大宰府防线。

那天晚上，台风打入博多湾，蒙古舰队锚泊在湾内，船只相互碰撞，部分沉没，联军撤退返回合浦。

消息送到我手里时说「赢了」。我知道这不是结束。`,
    bodyEn: `In October 1274, the Mongol-Goryeo combined force departed from Happo, passed Tsushima and Iki, and landed at Hakata Bay.

The numbers are disputed in the historical record: the Yuan Shi records 15,000 to 25,000; the Goryeo Sa records a combined total of about 33,000; Turnbull (2008) uses roughly 25,000 to 30,000 as the most defensible estimate, with close to 900 ships. For our purposes — approximately 25,000 to 30,000 men, nearly 900 ships — that is enough; no need to pretend to more precision.

Japanese warrior combat had a code: commanders first announced their names, then fought in matched single combat, with rules governing mounted archery. This tradition had real military logic inside Japan's internal wars. But against Mongol forces, it became a catastrophe. Mongol tactics were collective: hundreds of men moving together, archers rotating in relay, spearmen covering the line. A Japanese warrior charging in for single combat met a wall of arrows.

Then came the tetsuhau, the iron-shell bomb. Not the later arquebus of the Ming dynasty — this was an iron casing packed with gunpowder and iron fragments, thrown and detonating with sound, fire, and shrapnel.

The warriors who heard the explosion for the first time had no word for what it was. The Mōko Shūrai Ekotoba pictorial record documents this battle and includes images of tetsuhau detonating — the scroll belongs to a warrior named Takezaki Suenaga: he commissioned it to tell the shogunate "I fought; give me land." The scroll is first a proof of service, not an objective historical record (Conlan 2001). The iron bombs are archaeologically confirmed to exist, but their decisive impact may have been smaller than the scroll depicts.

I was in Kamakura, not at Hakata Bay. By the time the relay horses brought news to my hands, the fighting had lasted a full day. What I knew: the Japanese defenders had fallen back toward the Dazaifu line.

That night a storm struck Hakata Bay. The Mongol fleet, anchored in the bay, had ships colliding and sinking. The joint force withdrew to Happo.

When the news reached me it said "we won." I knew this was not the end.`,
    themeCn: '听到爆炸声的第一刻，没有人知道那叫「历史」',
    themeEn: 'At the moment of the explosion, no one knew they were inside history',
    expectsRealAnswer: false,
    sourcingNote: 'Conlan 2001 对《蒙古袭来绘词》史料局限的分析；Turnbull 2008 兵力估计',
  },

  {
    nodeId: 'tokimune-N6',
    year: 1274,
    location: '镰仓，执权府邸',
    titleCn: '胜利者最先想到的是下一场战争',
    titleEn: 'The Victor\'s First Thought Is the Next War',
    bodyCn: `消息送到我手里：蒙古军撤退了，博多湾的危机暂时解除。

我二十三岁，幕府「赢了」。

但忽必烈 1271 年改国号「大元」，他灭南宋（1279 年）的战争还在进行，他在四面同时扩张。一个在四面同时扩张的帝国，不会因为一次台风就放弃日本。

我立刻下令：开始建石墙。

「神风」这个词——「神风（kamikaze；中国教材称「台风」，「神风」是日本事后叙事建构）」字面意思是「神的风」——1274 年当时，在日本文献里这场风并没有被普遍叫做神风。Conlan 2001 通过考察 13-15 世纪的日本文献，论证「神风」作为系统性叙事，是在入侵发生之后数十年到一两个世纪间，由神社神职人员和后来的统治者主动建构的意识形态。当时的武士，在战后申请封赏的文书里，写的是他们自己的战功，不是神风的功劳。

我 1274 年得到胜利消息的那一刻，想的不是感谢神灵。想的是：下次他们会来更多人，我们需要更好的防线。

石墙的计划很简单：沿博多湾海岸线建一道约 20 公里的石墙，高约 2-3 米，用石块砌成，顶部可供弓手站立射击。这不是神话里的防御，是工程学。蒙古战法依赖登陆——骑兵需要上岸才能展开优势。石墙把博多湾变成一道拒绝骑兵的障碍。

「台风来了，我们活下来了」——这是 1274 年真实发生的事。胜利者最先想到的，是下一场战争。`,
    bodyEn: `The news reached me: the Mongol force had withdrawn. The Hakata Bay crisis was temporarily resolved.

I was twenty-three. The shogunate had "won."

But Kublai Khan had renamed his realm the Great Yuan in 1271, his war to destroy the Southern Song was still in progress, he was expanding in four directions simultaneously. An empire expanding in four directions at once does not abandon Japan because of one storm.

I ordered immediately: begin building the stone wall.

The word "kamikaze" — literally "divine wind" — was not in wide use in Japanese documents to describe the 1274 storm at the time it occurred. Conlan (2001), examining Japanese documents from the thirteenth through fifteenth centuries, argues that the kamikaze as a systematic explanatory narrative was actively constructed in the decades to a century or two after the invasions, by shrine priests and later rulers as an ideological frame. The warriors who filed war-merit petitions afterward wrote about their own military actions, not divine winds.

When I received the victory news in 1274, I was not thinking about thanking the gods. I was thinking: next time they will bring more men, and we need a better defensive line.

The wall plan was straightforward: a stone barrier running roughly 20 km along the Hakata Bay coastline, approximately 2 to 3 meters high, fitted stone, with a walkway on top for archers to stand. Not a mythological defense — engineering. Mongol tactics depended on landing. The wall turned Hakata Bay into an obstacle that refused mounted cavalry a place to form up.

"A storm came, and we survived" — that is what actually happened in 1274. The first thought of the victor is the next war.`,
    themeCn: '胜利者最先想到的是下一场战争，而不是感谢神灵',
    themeEn: 'The victor\'s first thought is the next battle, not gratitude',
    expectsRealAnswer: false,
    sourcingNote: 'Conlan 2001 神风叙事建构分析；Narrative §8「第一次台风与撤退」',
  },

  {
    nodeId: 'tokimune-N7',
    year: 1278,
    location: '博多湾海岸，九州北部',
    titleCn: '系统硬化：代价由别人承担',
    titleEn: 'Hardening the System: Someone Else Pays',
    bodyCn: `1275 年开始，博多湾沿岸的御家人家族被征调参与建设石墙。工程历时约五年，到 1280 年基本完工。

博多湾防壁（Genkō Bōeki）：全长约 20 公里，高约 2-3 米，宽约 2-3 米，石块砌成，顶部可供弓手站立。这是日本有史以来最大规模的工程动员之一，数千御家人家族参与其中。

九州有一个御家人当家——我不知道他的名字，从镰仓下令，我从来不知道具体的名字——1276 年初春，看着自己耕地被划入施工区。他没有选择。幕府的命令是命令，御家人效忠幕府，这是体制规则。他的田地，这一季不种了，他的人手，去凿石头。

这就是「系统硬化」是什么意思：我把防御从「个人武士英勇」转变为「集体工程」。1274 年文永之役，日本武士一对一冲进蒙古阵型，遭遇铁炮，惨烈。石墙的逻辑完全不同——不是依赖个人的英勇，而是用建筑本身挡住敌人，让敌人在水里面对弓手，没有展开空间。

但集体工程的代价，永远由别人承担。

耕地变施工区的那个九州御家人，他的损失进了哪本账本？幕府的账本里有的是「博多湾防壁竣工，全长约 20 公里」。他家的粮食短缺，他家的冬天，不在那本账本里。

Mass 1989《Warrior Government in Early Medieval Japan》分析：就是在这五年里，幕府与御家人之间的关系开始出现裂缝。不是因为御家人不服从——他们服从了。而是因为服从的代价，让他们开始计算「这个交换还值不值」。

我建的石墙有效，1281 年石墙真的挡住了蒙古的东路军。但有效的代价，不是我付的。`,
    bodyEn: `Beginning in 1275, warrior households along the Hakata Bay coast were mobilized to build the stone wall. Construction ran for approximately five years and was largely complete by 1280.

The Genkō Bōeki — the defensive barrier against Yuan incursion — ran roughly 20 km along the coastline, about 2 to 3 meters high and 2 to 3 meters wide, fitted stone, with a walkway on top for archers. This was one of the largest construction mobilizations in Japanese history to that point, involving thousands of warrior family households.

There was a gokenin household head in Kyushu — I do not know his name, I gave orders from Kamakura and I never knew the specific names — who in early spring of 1276 watched his farmland designated as a construction zone. He had no choice. The shogunate's order was the order. Gokenin are loyal to the shogunate; that is the system's rule. His fields, not planted this season. His people, cutting stone.

This is what "system hardening" means: I transformed defense from "individual warrior valor" into "collective engineering." In the 1274 Bun'ei campaign, Japanese warriors charged individually into Mongol formations and met iron bombs. The wall's logic was entirely different — not relying on personal courage, but using the structure itself to block the enemy, forcing them to face archers while still in the water, with no space to form up.

But collective engineering's costs are always paid by someone else.

The Kyushu gokenin whose farmland became a construction site — which ledger absorbed his loss? The shogunate's records show "Hakata Bay defensive wall completed, approximately 20 km." His household's grain shortage, his family's winter, are not in that ledger.

Mass (1989, *Warrior Government in Early Medieval Japan*) argues: it was during these five years that the relationship between the shogunate and the gokenin began to develop cracks. Not because the warriors refused to comply — they complied. But because the cost of compliance made them start calculating whether the exchange was still worth it.

The wall I built was effective. In 1281 it genuinely stopped the eastern Mongol force from landing. But the cost of that effectiveness was not paid by me.`,
    themeCn: '系统硬化的代价，永远由别人承担',
    themeEn: 'The cost of hardening a system is always paid by someone else',
    expectsRealAnswer: false,
    sourcingNote: 'Mass 1989 御家人关系裂缝分析；Narrative §8 石墙建造段',
  },

  {
    nodeId: 'tokimune-N8',
    year: 1281,
    location: '博多湾，弘安之役前夕',
    titleCn: '两支舰队，石墙，夜袭，与圆觉寺地基',
    titleEn: 'Two Fleets, the Wall, Night Raids, and the Temple Foundation',
    bodyCn: `1281 年弘安之役（Kōan no Eki）：忽必烈动员了他帝国历史上最大规模的海上远征。

两支舰队同时出发：东路军约 40,000 人，从高丽合浦出发，配备约 900 艘战船；江南军约 100,000 人，主要由刚被征服的南宋士兵组成，从今浙江、福建出发，配备约 3,500 艘战船。合计约 140,000 人，约 4,400 艘船。

Careful framing：这些数字来自《元史》，成书于 1370 年代。Turnbull 2008 认为数字可能有夸大，实际参战人数可能接近 100,000-120,000。但即便用低估计，这仍是 13 世纪最大规模的海上军事行动之一。

6 月，东路军先行抵达博多湾。他们遇到了 1274 年没有的东西：那道沿海岸线延伸约 20 公里的石墙。蒙古战法依赖登陆，骑兵需要上岸才能展开优势。石墙把博多湾变成了拒绝骑兵的障碍：从船上下来，就面对石墙后的弓手，没有展开空间。东路军尝试在多处强行登陆，均被击退。

日本武士的夜袭：用小型快船趁夜摸到蒙古大船边，爬上甲板近战，或者放火。大船不灵活，小船快速，夜间视线差，蒙古军难以有效反击。

东路军与日本守军在博多湾僵持了近两个月，等待江南军。

在这两个月里，我在镰仓和圆觉寺之间，命人测量了圆觉寺的地基。无学祖元（Mugaku Sogen，1226-1286）已经同意担任住持。寺庙为弘安之役的战死者而建——这是我能许诺的事情：如果有人死了，我为他们建一座寺。

台风来临前夜，圆觉寺的地基已经测量完。我三十岁，不知道台风明天到。`,
    bodyEn: `In 1281, Kublai Khan mobilized the largest seaborne campaign in his empire's history.

Two fleets departed simultaneously: the Eastern Route Army, roughly 40,000 men from Goryeo's Happo, with approximately 900 warships; the Kōnan Army, roughly 100,000 men drawn largely from recently conquered Southern Song soldiers, departing from today's Zhejiang and Fujian with approximately 3,500 ships. Combined: approximately 140,000 men, approximately 4,400 ships.

Careful framing: these figures come from the Yuan Shi, compiled in the 1370s. Turnbull (2008) considers the numbers potentially inflated, with actual combatants closer to 100,000 to 120,000. Even at the lower estimate, this was one of the largest seaborne military operations of the thirteenth century.

In June, the Eastern Route Army arrived at Hakata Bay first. They met something not there in 1274: the stone wall running approximately 20 km along the coastline. Mongol tactics depended on landing — cavalry needs shore to form up effectively. The wall turned Hakata Bay into an obstacle that refused cavalry a foothold: coming off the ships, the invaders faced archers behind the wall with no room to deploy. The Eastern Route Army attempted forced landings at several points and was repelled each time.

Japanese warriors conducted night raids — using small fast boats to approach Mongol vessels in darkness, climbing aboard for close combat or setting fires. Large ships are slow to maneuver; small boats are fast; nighttime visibility is poor. The Mongols could not organize effective counterattacks.

The Eastern Route Army and Japanese defenders were deadlocked at Hakata Bay for nearly two months, waiting for the Kōnan Army.

During those two months, I had the foundations of Engakuji measured. Mugaku Sogen (1226-1286) had already agreed to serve as founding abbot. The temple would be built for those who died in the Kōan campaign — this was what I could promise: if people died, I would build a place for them.

The night before the typhoon arrived, the foundations of Engakuji had been measured. I was thirty years old. I did not know the typhoon was coming tomorrow.`,
    themeCn: '石墙有效，夜袭有效，台风还没到，圆觉寺的地基已经测量完',
    themeEn: 'The wall worked, the raids worked, the typhoon had not come yet, and the temple foundation was already measured',
    crossLensHook: '圆觉寺地基在台风前夜测量完：这是时宗知道自己可能无法用土地偿还死者，所以用石头建筑先许诺精神偿还',
    expectsRealAnswer: false,
    sourcingNote: 'Turnbull 2008 兵力数字 careful framing；Narrative §9 石墙作用与夜袭战术',
  },

  {
    nodeId: 'tokimune-N9',
    year: 1281,
    location: '博多湾，九州沿海',
    titleCn: '台风：故事会生长，但长大的故事不一定更真实',
    titleEn: 'The Typhoon: Stories Grow, but Grown Stories Are Not Always Truer',
    bodyCn: `1281 年 8 月 15-16 日，台风袭击九州沿海。

这一次不是 1274 年的一次夜间风暴，而是现代气象学家估计达到 Category 4 或更高级别的大型台风。蒙古-元朝舰队的结构存在一个致命问题：江南军的船只，据后来的水下考古（Delgado 2001），部分是仓促改造的内河平底船，不适合大洋风浪；造船工程中有腐败，在元朝内部审查记录里有记载。船只在台风中批量进水、解体、沉没。

台风溺亡：Farris（1996，《Heavenly Warriors》）估计约 6 万到 10 万（溺亡估算，非总死亡数）。《元史》及日本史料另记有部分幸存者在岸上被歼灭，具体数字各来源分歧，学界无共识（Turnbull 2008）。远征军几乎全军覆没。

「神风」的叙事建构，我们在第六节已经谈过——Conlan 2001 的论证在那里。这里只说台风本身的事实：

台风确实来了。台风确实摧毁了舰队。石墙和夜袭确实延缓了蒙古登陆，消耗了补给和时间。两件事都是真实的。`,
    bodyEn: `On August 15-16, 1281, a typhoon struck the Kyushu coastline.

This was not the brief nighttime storm of 1274. Modern meteorologists estimate it reached Category 4 or higher. The Mongol-Yuan fleet had a structural vulnerability: the Kōnan Army's ships, as underwater archaeology later confirmed (Delgado 2001), included vessels hurriedly converted from flat-bottomed river craft not suited to open-ocean swells. Corruption in the shipbuilding contracts is documented in internal Yuan administrative records. The ships flooded, broke apart, and sank in large numbers.

Typhoon drowning deaths: Farris (1996, *Heavenly Warriors*) estimates 60,000 to 100,000 — this is a drowning estimate, not a total death count. The *Yuan Shi* and Japanese sources separately record that some survivors who reached shore were killed by Japanese defenders; the specific numbers vary across sources and scholars have no consensus (Turnbull 2008). The expeditionary force was nearly annihilated.

The kamikaze narrative construction — how the "divine wind" story was built after the fact — was covered in Chapter 6. Conlan (2001) makes that case there. Here, the facts of the typhoon itself:

The typhoon did come. The typhoon did destroy the fleet. The wall and the night raids did slow the Mongol landing and exhaust their supplies and time. Both things are true.`,
    themeCn: '故事会生长，但长大的故事不一定更真实',
    themeEn: 'Stories grow, but grown stories are not always truer',
    expectsRealAnswer: false,
    sourcingNote: 'Conlan 2001 神风叙事建构；Farris 1996 死亡估计；Turnbull 2008；Narrative §9 careful framing',
  },

  {
    nodeId: 'tokimune-N10',
    year: 1281,
    location: '镰仓，幕府',
    titleCn: '胜利者的账单，往往比失败者的更难付清',
    titleEn: 'The Victor\'s Bill Is Often Harder to Pay Than the Loser\'s',
    bodyCn: `1281 年秋，我三十岁，幕府「赢了」。

然后账本打开了。

镰仓幕府建立在御家人体制上。御家人效忠幕府，战时出兵，战后获得封赏——通常是土地。这是幕府权力合法性的基础：打仗有回报。

但 1281 年的战争，打赢了，没有占领任何土地。蒙古人溺死了，日本没有从敌方夺取任何新领土可以分封。

参战御家人怎么办？他们花了自己的钱、失去了自己的人手、消耗了自己的战马和粮草——这些都是真实的物质消耗，他们期待幕府补偿。我能给的只有已有的日本土地，但这需要从其他人那里重新分配，或者从寺庙和神社的地产里挤压。两条路都会制造新的怨恨。

Mass 1989《Warrior Government in Early Medieval Japan》论证：1281 年之后，御家人对幕府封赏制度的信任开始系统性松动。不是一次爆炸，是一条慢慢裂开的缝。

同时，石墙的建造（1275-1280），博多湾的长期守备，军事动员的粮草物流——这些全部需要钱。幕府从御家人那里征调，御家人从自己的庄园里挤，庄园的压力传到农民身上。1281 年之后，时宗继续维持博多湾的警戒——忽必烈直到 1294 年死前始终在准备第三次远征，只是最终没有实现——这意味着消耗没有停止。

「系统硬化」的悖论在这里出现了：我成功维护了系统，系统的裂缝因此被封在了内部。台风帮了我，石墙起作用了，御家人服从了——我「赢了」。但赢的代价，我没有土地可以支付。

胜利者的账单，往往比失败者的账单更难付清。失败者的账单是确定的；胜利者的账单，是一种说不清楚原因的慢慢腐蚀。`,
    bodyEn: `In the autumn of 1281, I was thirty years old. The shogunate had "won."

Then the ledger opened.

Kamakura was built on the gokenin system. Warrior households pledged loyalty to the shogunate, sent men to war, and received rewards afterward — typically land. This was the foundation of the shogunate's legitimacy: military service produces a return.

But the 1281 war was won without capturing any land. The Mongols drowned. Japan seized no new territory from the enemy to distribute.

What about the warriors who fought? They had spent their own money, lost their own people, depleted their warhorses and grain supplies. These were real material costs, and they expected compensation from the shogunate. What I had to give was existing Japanese land — which meant redistributing from someone else, or squeezing the estates of temples and shrines. Either path creates new grievances.

Mass (1989, *Warrior Government in Early Medieval Japan*) argues: after 1281, gokenin confidence in the shogunate's reward system began to erode systematically. Not a single explosion — a crack that widened slowly.

At the same time, the wall's construction (1275-1280), the sustained garrison at Hakata Bay, the logistics of military mobilization — all of this required resources. The shogunate requisitioned from the gokenin, the gokenin squeezed their shōen estates, the pressure on the estates passed down to the farmers. After 1281, I kept the Hakata Bay watch active — Kublai Khan continued planning a third campaign until his death in 1294, which ultimately never materialized — meaning the consumption did not stop.

Here is where the paradox of "system hardening" appears: I successfully maintained the system, so the system's cracks were sealed inside it. The typhoon helped me, the wall worked, the warriors complied — I "won." But the cost of winning, I had no land to pay.

The victor's bill is often harder to pay than the loser's. The loser's bill is clear and finite. The victor's bill is a slow corrosion that no one can quite name the reason for.`,
    themeCn: '胜利者的账单，往往比失败者的账单更难付清',
    themeEn: 'The victor\'s bill is often harder to settle than the loser\'s',
    expectsRealAnswer: false,
    sourcingNote: 'Mass 1989 御家人封赏危机系统性松动；Narrative §10「胜利的账单」',
  },

  {
    nodeId: 'tokimune-N11',
    year: 1282,
    location: '镰仓，圆觉寺',
    titleCn: '用石头建筑偿还还不起的债',
    titleEn: 'Repaying Unpayable Debts in Stone',
    bodyCn: `1282 年，圆觉寺建成。我邀请中国禅僧无学祖元（Mugaku Sogen，1226-1286）从宋朝来日本，担任开山住持。

寺庙为弘安之役战死者而建。这是我能给的东西：我没有土地给他们的后代，所以我给他们一座寺庙，让僧侣为他们的灵魂做法事。

这不是彻底的解决方案。每个人都知道这不是土地。但我没有其他方法了。

关于时宗与无学祖元的一段著名禅对话「洞然无依」——时宗问「如何克服恐惧」，祖元答「洞然无依，万物皆空」——这段对话需要 careful framing：后世的增饰明显，这段对话作为完整问答形式出现在时宗死后很久编纂的史料里（13至14世纪的传记和寺院记录），不能作为当时确实发生的史实引用。但这段对话流传下来，折射出的是真实的：时宗在 1268-1284 年间承受的持续高压，从 17 岁到 33 岁，几乎没有停止危机应对。无论禅对话的具体内容是否如实，他在这些年里确实在用禅宗管理一种极度的疲惫。

圆觉寺不只是精神补偿。它也是治理工具。时宗用宗教回应他无法用土地回应的问题——这跟镰仓武士用禅宗管理心理压力是同一种逻辑的扩大版本：你无法消除那个困境，所以你给它一个仪式上的容器。

北条政子 1221 年赢得的御家人忠诚契约，是建立在「我们共同的土地，赖朝公给的」这个历史基础上的。到 1282 年，这条契约链已经开始松动——那些 1281 年后没有得到封赏的御家人，拿到的不是土地，是一座寺庙的超度法事。

权力者用石头建筑偿还他还不起的债。你认为这是补偿，还是回避？`,
    bodyEn: `In 1282, Engakuji was completed. I invited the Chinese Zen monk Mugaku Sogen (1226-1286) to come from Song-dynasty China to Japan and serve as founding abbot.

The temple was built for those who died in the Kōan campaign. This was what I could give: I had no land for their descendants, so I gave them a temple, with monks to perform rites for their souls.

This was not a complete solution. Everyone knew it was not land. But I had no other method left.

Regarding the famous Zen exchange between Tokimune and Mugaku Sogen — Tokimune asking "how does one overcome fear," Sogen answering "洞然無依" (utterly unsupported, empty of all attachment) — this dialogue requires careful framing. Later embellishment is evident — the dialogue as a polished exchange appears in sources compiled well after Tokimune's death (13th–14th century hagiographic and temple records); it cannot be cited as a confirmed historical fact in the form transmitted. What it does reflect is something real: the sustained pressure Tokimune carried from 1268 to 1284, from age seventeen to thirty-three, in nearly continuous crisis management. Whatever the specific content of the Zen exchange, he was genuinely using Zen practice during these years to manage a profound exhaustion.

Engakuji was not only spiritual compensation. It was a governance tool. Tokimune used religion to respond to what he could not address with land — this is the same logic as warriors using Zen to manage psychological pressure, scaled up: you cannot eliminate the difficulty, so you give it a ritual container.

The gokenin loyalty contract that Hōjō Masako secured in 1221 rested on the historical premise of "the lands we share, which Yoritomo gave us." By 1282, that chain was beginning to loosen — those gokenin who received no adequate reward after 1281 got not land, but memorial rites in a temple.

A person in power repays unpayable debts in stone architecture. Do you think this counts as compensation — or as avoidance?`,
    themeCn: '权力者用石头建筑偿还他还不起的债',
    themeEn: 'Those in power repay unpayable debts in stone',
    crossLensHook: '政子的御家人忠诚契约建立在土地基础上；时宗用圆觉寺做精神偿还，因为他没有土地可以给死者的后代',
    expectsRealAnswer: true,
    sourcingNote: 'Narrative §10 圆觉寺建立背景；无学祖元禅对话 careful framing 已在 §10 注',
  },

  {
    nodeId: 'tokimune-N12',
    year: 1284,
    location: '镰仓',
    titleCn: '胜利里埋着崩溃的根，两件事同时为真',
    titleEn: 'The Collapse Was Buried in the Victory — Both Things Were True',
    bodyCn: `1284 年 4 月 20 日，时宗死于镰仓。享年三十三岁。死因史书未明确记载，「病逝」是一般说法。

儿子贞时十三岁接任第九代执权——又一个少年执权，又一次权力真空。北条家再次进入过渡期。

时宗死后四十九年，1333 年，镰仓幕府被后醍醐天皇和足利尊氏的联军摧毁。倒幕的军事力量来源，正是那些在 1281 年后封赏不足、忠诚松动的御家人家族。Mass 1989 的分析在这里是完整的：1281 年封赏危机埋下的那条裂缝，到 1333 年裂开了。

这是历史学的经典悖论之一：一个人用全部力量防住了外部威胁，却因为这个过程把内部结构压得脆弱，最终让体制在他死后数十年崩塌。时宗的胜利是真实的；幕府崩溃的根源埋在他的胜利里，也是真实的。这两件事同时为真。

反 Whig 总结：时宗不是「神风（kamikaze；中国教材称「台风」）英雄」——神风叙事是他死后由神社神职人员和后来的统治者建构的；20 世纪的「神风特攻队」直接借用了这个词，试图唤起 1281 年的历史意象。真实的时宗，是一个从 17 岁到 33 岁、在持续高压下做出了一系列不可撤回决定的人——拒绝蒙古、斩使、建石墙、挺过了两次入侵。他是一个有效的系统维护者，但他的「系统硬化」同时把系统的裂缝封进了内部。

跨 Topic：1438 年，太平洋另一端，一个叫帕查库特克的人也刚刚击败了入侵者，开始建设一个新的帝国。他用了三十四年，建起了南美洲最大的政体；时宗用了十六年，守住了日本海岸。他们互不知晓，但他们都在做同一件事：将外部威胁转化为内部系统的强化，然后面对同一种命运——系统越精密，越不能承受它没设计过的事情。

system-hardener 永远不知道自己什么时候变成了 system-destroyer。你认为这是时宗的失败，还是这本来就是所有「用力维护系统的人」最终都会面对的结局？`,
    bodyEn: `On April 20, 1284, Tokimune died in Kamakura. He was thirty-three years old. The historical sources do not specify the cause of death; "illness" is the general account.

His son Sadatoki, thirteen years old, became the ninth regent — another young regent, another power vacuum. The Hōjō household entered another transition.

Forty-nine years after Tokimune's death, in 1333, the Kamakura shogunate was destroyed by the combined forces of Emperor Go-Daigo and Ashikaga Takauji. The military force behind the overthrow came from the gokenin households whose loyalty had been eroding since 1281, the ones who received inadequate reward. Mass (1989) is complete here: the crack opened by the 1281 reward crisis had by 1333 split wide open.

This is one of history's classic paradoxes: a person uses every resource to block an external threat, and in the process compresses the internal structure until it is brittle, so that the institution collapses in the decades after their death. Tokimune's victory was real. The root cause of the shogunate's collapse was buried inside that victory. Both things were true at the same time.

Anti-Whig summary: Tokimune was not a "divine wind hero" — the kamikaze narrative was constructed after his death by shrine priests and later rulers. Twentieth-century kamikaze pilots borrowed the term directly, trying to invoke the 1281 historical image. The real Tokimune was a person who, from age seventeen to thirty-three, under sustained pressure, made a series of irrevocable decisions — refusing the Mongols, killing the envoys, building the wall, surviving two invasions. He was an effective system maintainer. But his "system hardening" simultaneously sealed the system's cracks inside it.

Cross-Topic: in 1438, on the other side of the Pacific, a man named Pachacuti had just defeated invaders and begun building a new empire. He spent thirty-four years constructing the largest polity in South America; Tokimune spent sixteen years defending Japan's coast. They never knew each other existed, but they were doing the same thing: converting external threat into internal system reinforcement, then facing the same fate — the more precisely engineered the system, the less it can withstand what it was not designed for.

A system-hardener never knows when they have become a system-destroyer. Do you think this was Tokimune's failure — or is this simply the ending that all people who "maintain a system at great force" must eventually face?`,
    themeCn: 'system-hardener 永远不知道自己什么时候变成了 system-destroyer',
    themeEn: 'A system-hardener never knows when they have become a system-destroyer',
    crossTopicHook: '1438 年，帕查库特克击败入侵者，开始建帝国。时宗 1268 年开始守日本海岸。两个大陆，两个人，同一种 system-hardener 的命运',
    expectsRealAnswer: true,
    sourcingNote: 'Mass 1989 1333 年镰仓崩溃根源；Narrative §10 closing 段；Conlan 2001 神风叙事建构',
  },
  ],
};

export var sesshuLens = {
  id: 'sesshu-mediator',
  name: 'Sesshu Toyo',
  nameCn: '雪舟等杨',
  role: 'lonely-mediator',
  roleDescription: 'Zen-painter Ming-Japan cultural broker',
  description: 'Zen monk-painter who studied in Ming China and transformed Japanese ink painting, 1420-1506',
  descriptionCn: '赴明学习、改变日本水墨画传统的禅宗僧侣画家，1420-1506',
  storyboard: [
  {
    id: 'sesshu-N1',
    nodeId: 'sesshu-N1',
    year: 1420,
    location: '备中国，今冈山县西部',
    title: {
      cn: '一个孩子的起点，连他自己都说不清楚',
      en: 'A child\'s beginning, even he cannot say for certain',
    },
    titleCn: '一个孩子的起点，连他自己都说不清楚',
    titleEn: 'A child\'s beginning, even he cannot say for certain',
    content: {
      cn: `1420 年，备中国。我出生在那里。

具体是哪个村子，我说不清楚。后人说是「备中赤浜」，但那是他们在我死后一百多年编出来的说法（Watanabe 1975 考证：此地名为 17 世纪以后传说，非史实）。我只知道我出生在今日冈山县西部一带，备中国的土地上，然后进了宝福寺（Hōfukuji）修禅。

进宝福寺的时候，我还是个孩子。幼年的事，很多我记得不清楚了，记得的是院子里的石头，和老师的背影。

关于幼年，有一个传说流传得很广：说老师罚我绑在柱子上，我用眼泪在地上画了一只老鼠，惟妙惟肖，老师以为是真鼠，大吃一惊，于是放了我。这个故事，有人觉得很美。我不否认它美——禅宗的顿悟故事本来就是为了美而写的。但这个故事最早出现在我死后逾百年的 17 世纪文献里（Watanabe 1975 评注）。它是一个禅宗文学建构，不是我记忆中发生过的事。

我只是一个进了宝福寺的孩子，学坐禅，学抄经，学用笔墨写字。画，是后来的事。

1420 年，这一年，北京的紫禁城刚刚建成（永乐帝 Yongle Emperor 在位，紫禁城 1420 年完工）。日本列岛上，室町幕府（Muromachi Bakufu）的第 4 代将军足利义持（Ashikaga Yoshimochi）在位，距离勘合贸易（kango bōeki）建立才 19 年。整个东亚的格局，在那个时候，还是可以描述的——明朝在北边，日本在东边，海峡中间有船往来。

我不知道这些。我是一个备中国的孩子，住在宝福寺，还没想过「中国」是什么。`,
      en: `1420. Bitchū no Kuni. That is where I was born.

Which village exactly — I cannot say clearly. Later people said "Bitchū Akahama," but that was a story they invented more than a hundred years after I died. (Watanabe 1975 documents this: the place name appears only in seventeenth-century sources, not in records from my lifetime.) I know only that I was born somewhere in what is now the western part of Okayama Prefecture, and that I entered Hōfukuji temple to train in Zen while I was still a child.

When I entered Hōfukuji, I was young. Much of those early years is not clear to me now — what I remember is the stone courtyard and the shape of my teacher's back.

There is a story about my childhood that travels widely: my teacher punished me by tying me to a pillar, and I painted a mouse on the floor using my tears, so lifelike that my teacher thought it was real, and was so startled that he freed me. People find this story beautiful. I do not deny its beauty — Zen teaching stories are written to be beautiful. But this particular story first appears in seventeenth-century sources, more than a hundred years after my death. (Watanabe 1975.) It is a piece of Zen literary construction, not something I remember happening.

I was simply a child inside Hōfukuji, learning to sit in meditation, learning to copy sutras, learning to hold a brush. Painting came later.

In 1420, the year I was born, the Forbidden City in Beijing had just been completed — the Yongle Emperor was on the throne, and the great palace was finished that same year. In Japan, the fourth shogun of the Muromachi Bakufu, Ashikaga Yoshimochi, held power. The kango tribute-trade system between Japan and Ming China had existed for only nineteen years. The shape of East Asia, at that moment, could still be described in clear terms.

I did not know any of that. I was a child in Bitchū Province, living in Hōfukuji, not yet thinking about what "China" might be.`,
    },
    bodyCn: `1420 年，备中国。我出生在那里。

具体是哪个村子，我说不清楚。后人说是「备中赤浜」，但那是他们在我死后一百多年编出来的说法（Watanabe 1975 考证：此地名为 17 世纪以后传说，非史实）。我只知道我出生在今日冈山县西部一带，备中国的土地上，然后进了宝福寺（Hōfukuji）修禅。

进宝福寺的时候，我还是个孩子。幼年的事，很多我记得不清楚了，记得的是院子里的石头，和老师的背影。

关于幼年，有一个传说流传得很广：说老师罚我绑在柱子上，我用眼泪在地上画了一只老鼠，惟妙惟肖，老师以为是真鼠，大吃一惊，于是放了我。这个故事，有人觉得很美。我不否认它美——禅宗的顿悟故事本来就是为了美而写的。但这个故事最早出现在我死后逾百年的 17 世纪文献里（Watanabe 1975 评注）。它是一个禅宗文学建构，不是我记忆中发生过的事。

我只是一个进了宝福寺的孩子，学坐禅，学抄经，学用笔墨写字。画，是后来的事。

1420 年，这一年，北京的紫禁城刚刚建成（永乐帝 Yongle Emperor 在位，紫禁城 1420 年完工）。日本列岛上，室町幕府的第 4 代将军足利义持在位，距离勘合贸易建立才 19 年。整个东亚的格局，在那个时候，还是可以描述的。

我不知道这些。我是一个备中国的孩子，住在宝福寺，还没想过「中国」是什么。`,
    bodyEn: `1420. Bitchū no Kuni. That is where I was born.

Which village exactly — I cannot say clearly. Later people said "Bitchū Akahama," but that was a story they invented more than a hundred years after I died. (Watanabe 1975 documents this: the place name appears only in seventeenth-century sources.) I know only that I was born somewhere in what is now the western part of Okayama Prefecture, and that I entered Hōfukuji temple to train in Zen while I was still a child.

When I entered Hōfukuji, I was young. What I remember is the stone courtyard and the shape of my teacher's back.

There is a story about my childhood that travels widely: my teacher tied me to a pillar as punishment, and I painted a mouse on the floor using my tears, so lifelike that my teacher thought it was real and freed me in surprise. People find this story beautiful. I do not deny its beauty — Zen teaching stories are written to be beautiful. But this story first appears in seventeenth-century sources, more than a hundred years after my death. (Watanabe 1975.) It is a piece of Zen literary construction, not something I remember happening.

I was simply a child inside Hōfukuji, learning to sit in meditation, learning to copy sutras, learning to hold a brush. Painting came later.

In 1420, the Forbidden City in Beijing had just been completed. The fourth shogun of the Muromachi Bakufu held power in Japan. The kango tribute-trade system had existed for only nineteen years. The shape of East Asia could still be described in clear terms.

I did not know any of that. I was a child in Bitchū Province, not yet thinking about what "China" might be.`,
    themeCn: '起点模糊，传说是后人写的，不是自己活的',
    themeEn: 'The origin is uncertain; the legend was written by others, not lived by the self.',
    engagementHook: '「备中赤浜」这个出生地，是我死后一百多年才有人说的。你有没有关于自己的「故事」，其实是别人说的，不是你记忆里发生的？',
    expectsRealAnswer: false,
    sourcingNote: 'Watanabe 1975《雪舟》— 出生地传说考证；紫禁城 1420 年完工来自明史记载',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N2',
    nodeId: 'sesshu-N2',
    year: 1440,
    location: '京都相国寺',
    title: {
      cn: '站在别人的肩膀上，你学到的是翻译，不是原文',
      en: 'Standing on another\'s shoulders, what you learn is the translation, not the original',
    },
    titleCn: '站在别人的肩膀上，你学到的是翻译，不是原文',
    titleEn: 'Standing on another\'s shoulders, what you learn is the translation, not the original',
    content: {
      cn: `约 1440 年代，我进入了京都相国寺（Shōkokuji）。

相国寺是临济宗禅寺，与足利将军家关系深厚。那时候，相国寺是日本禅宗绘画的核心培训场所——不是随便哪个想学画的人都能进的地方。我带着宝福寺的禅修基础来到这里，开始学习水墨画（suiboku-ga）。

我的师承线是这样的：

如拙（Josetsu，活跃于 1405-1423 前后，朝鲜出身），他把明朝的水墨技法带进了相国寺。如拙之后是周文（Shūbun，活跃于 1423-1460 前后），周文发展出了「破墨山水」（shōboku sansui）的日本风格。然后是我。

我学的是周文教的，周文学的是如拙教的，如拙学的是朝鲜和明朝带来的技法。

这意味着什么？意味着我学到的东西，是经过了两次转译的中国山水画——从明朝画卷，到如拙的笔下，再到周文的诠释，最后到我的手里。我从未见过原本。我学的是别人眼中的别人眼中的中国山水。

这不是批评周文或如拙。他们做了他们能做的最好的事。但我坐在相国寺的库房里，看着那些被称为「宋朝山水」的画轴，心里有个问题始终没有消失：这是谁画的，在哪里画的，画的是他亲眼看见的山，还是他学来的山？

这个问题，在 1440 年代，我还没有答案。但问题在那里，等着我。`,
      en: `Around the 1440s, I entered Shōkokuji temple in Kyoto.

Shōkokuji was a Rinzai Zen temple with close ties to the Ashikaga shogunal family. At the time, it was the central training ground for Zen ink painting in Japan — not a place anyone who wanted to paint could simply walk into. I arrived carrying my meditation foundation from Hōfukuji, and began learning suiboku-ga, ink painting.

My lineage looked like this:

Josetsu (active around 1405-1423, born in Korea) brought Ming painting techniques into Shōkokuji. After Josetsu came Shūbun (active around 1423-1460), who developed the shōboku sansui ("broken-ink landscape") style in Japanese form. Then came me.

I studied what Shūbun taught. Shūbun had studied what Josetsu taught. Josetsu had studied what he brought from Korea and the Ming. Every step was a translation.

What does this mean? It means what I was learning was Chinese landscape painting that had already passed through two sets of hands — from Ming scrolls, into Josetsu's brushwork, through Shūbun's interpretation, and finally into my grip. I had never seen the original. I was learning someone else's reading of someone else's reading of Chinese mountains.

This is not a criticism of Shūbun or Josetsu. They did the best they could with what was available to them. But sitting in the Shōkokuji storage room, looking at scrolls called "Song dynasty landscape," I could not stop asking: who painted this, and where, and were these mountains the painter had actually seen — or mountains the painter had learned?

In the 1440s, I had no answer to that question. But the question was there, waiting for me.`,
    },
    bodyCn: `约 1440 年代，我进入了京都相国寺（Shōkokuji）。

相国寺是临济宗禅寺，与足利将军家关系深厚。那时候，相国寺是日本禅宗绘画的核心培训场所。我带着宝福寺的禅修基础来到这里，开始学习水墨画（suiboku-ga）。

我的师承线是这样的：如拙（Josetsu，活跃于 1405-1423 前后，朝鲜出身），把明朝的水墨技法带进了相国寺。如拙之后是周文（Shūbun，活跃于 1423-1460 前后），周文发展出了「破墨山水」风格。然后是我。

我学的是周文教的，周文学的是如拙教的，如拙学的是朝鲜和明朝带来的技法。

这意味着什么？我学到的东西，是经过了两次转译的中国山水画——从明朝画卷，到如拙的笔下，再到周文的诠释，最后到我的手里。我从未见过原本。我学的是别人眼中的别人眼中的中国山水。

这不是批评周文或如拙。他们做了他们能做的最好的事。但我坐在相国寺的库房里，看着那些被称为「宋朝山水」的画轴，心里有个问题始终没有消失：这是谁画的，在哪里画的，画的是他亲眼看见的山，还是他学来的山？

这个问题，在 1440 年代，我还没有答案。但问题在那里，等着我。`,
    bodyEn: `Around the 1440s, I entered Shōkokuji temple in Kyoto.

Shōkokuji was a Rinzai Zen temple with close ties to the Ashikaga shogunal family. It was the central training ground for Zen ink painting in Japan. I arrived with my meditation foundation from Hōfukuji and began learning suiboku-ga.

My lineage: Josetsu (active around 1405-1423, born in Korea) brought Ming painting techniques into Shōkokuji. After Josetsu came Shūbun (active around 1423-1460), who developed the shōboku sansui style. Then came me.

I studied what Shūbun taught. Shūbun studied what Josetsu taught. Josetsu studied what he brought from Korea and the Ming. Every step was a translation.

What I was learning was Chinese landscape painting that had passed through two sets of hands — from Ming scrolls, into Josetsu's brushwork, through Shūbun's interpretation, and into my grip. I had never seen the original. I was learning someone else's reading of someone else's reading of Chinese mountains.

This is not a criticism of Shūbun or Josetsu. They did the best they could. But sitting in the Shōkokuji storage room, looking at scrolls called "Song dynasty landscape," I could not stop asking: who painted this, and where, and were these mountains actually seen — or mountains someone had learned?

In the 1440s, I had no answer. But the question was there, waiting.`,
    themeCn: '站在别人的肩膀上，你学到的是翻译，不是原文',
    themeEn: 'Standing on another\'s shoulders, what you learn is the translation, not the original.',
    engagementHook: '我学的是「别人眼中的别人眼中的中国山水」。你有没有学过什么东西，后来发现自己学的是「二手版」，不是原版？这有关系吗？',
    expectsRealAnswer: false,
    sourcingNote: '师承链来自 narrative §14 + Watanabe 1975；相国寺背景来自 Rice 2010',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N3',
    nodeId: 'sesshu-N3',
    year: 1450,
    location: '京都相国寺',
    title: {
      cn: '当你发现你学的是临摹，你就知道你必须去哪里',
      en: 'When you discover you have been learning copies, you know where you must go',
    },
    titleCn: '当你发现你学的是临摹，你就知道你必须去哪里',
    titleEn: 'When you discover you have been learning copies, you know where you must go',
    content: {
      cn: `1450 年代，相国寺时期，应仁之乱（Ōnin no Ran）尚未爆发。

那还是相国寺最稳定的年代——将军家的文化中心，京都的权力核心，禅宗绘画的最高学府。我在这里看到了日本能给我的所有东西。看完之后，我知道这还不够。

有一天，我在相国寺库房里打开了一个卷轴。卷轴上有人写：「宋朝山水，珍品。」

我展开它，看了很久。

山是用斧劈皴（axe-cut brushstroke）画的——那种干笔侧锋、把岩石切割成块面的笔法，是北宋郭熙（Guo Xi）系统里的技法。但我越看越觉得不对：那些墨色的层次太均匀了，那些山石的转折太机械了。这不是一个人在山前画的——这是一个人把另一个人的画临摹下来之后的东西。

临摹，不是原作。

我拿起毛笔，照着那幅卷轴临了一遍。然后我在自己临本的旁边，凭记忆画了一遍周文教我的版本。然后我比较这两张。

三幅画，三种山。哪一幅更接近真实的中国山？我不知道。我从来没见过真实的中国山。

这个事实在 1450 年代某个下午，清晰地停在我面前：相国寺能给我的最好东西，是一张临摹的临摹。我要看原本，我需要去中国。

那时候，去中国的路不是随时都开着的——勘合贸易的船，不是谁想搭就能搭的。我只能等。`,
      en: `The 1450s. My time at Shōkokuji. The Ōnin War had not yet broken out.

These were the most stable years Shōkokuji would know — the shogunal family's cultural center, the core of Kyoto's power, the highest school of Zen painting in Japan. I had seen everything Japan could give me. Having seen it all, I knew it was not enough.

One afternoon, I unrolled a scroll in the Shōkokuji storage room. Someone had written on it: "Song dynasty landscape, rare treasure."

I spread it open and looked for a long time.

The mountains were painted with what we call fupeki-shun — the axe-cut brushstroke, where the dry brush hits the side and cuts the rock face into planes. That technique comes from the Guo Xi school of Northern Song painting. But the longer I looked, the more something felt wrong. The ink tones were too even. The transitions in the rock were too mechanical. This was not a person painting in front of a mountain. This was a person copying another person's painting.

A copy. Not the original.

I picked up my brush and copied the scroll again. Then beside my copy I painted, from memory, the version Shūbun had taught me. Then I compared the three.

Three paintings. Three sets of mountains. Which one was closer to a real Chinese mountain? I did not know. I had never seen a real Chinese mountain.

That fact stood clearly in front of me on that afternoon in the 1450s: the best thing Shōkokuji could give me was a copy of a copy. To see the original, I needed to go to China.

The path to China was not always open. The kango trade ships did not take anyone who simply wanted to go. I could only wait.`,
    },
    bodyCn: `1450 年代，相国寺时期，应仁之乱尚未爆发。

那还是相国寺最稳定的年代——将军家的文化中心，京都的权力核心。我在这里看到了日本能给我的所有东西。看完之后，我知道这还不够。

有一天，我在相国寺库房里打开了一个卷轴。卷轴上有人写：「宋朝山水，珍品。」

我展开它，看了很久。那些山是用斧劈皴（axe-cut stroke）——用笔侧倒、笔毛张开，像斧头切开岩石一样，把山石画出块状的切面感——画的，北宋郭熙（Guo Xi）系统的技法。但我越看越觉得不对：那些墨色的层次太均匀了，那些山石的转折太机械了。这不是一个人在山前画的——这是一个人把另一个人的画临摹下来之后的东西。

临摹，不是原作。

我拿起毛笔，照着那幅卷轴临了一遍。然后凭记忆画了一遍周文教我的版本。然后比较这两张。

三幅画，三种山。哪一幅更接近真实的中国山？我不知道。我从来没见过真实的中国山。

这个事实在 1450 年代某个下午，清晰地停在我面前：相国寺能给我的最好东西，是一张临摹的临摹。我要看原本，我需要去中国。

那时候，去中国的路不是随时都开着的。勘合贸易的船，不是谁想搭就能搭的。我只能等。`,
    bodyEn: `The 1450s. My time at Shōkokuji. The Ōnin War had not yet broken out.

These were the most stable years Shōkokuji would know — the shogunal family's cultural center, the highest school of Zen painting in Japan. I had seen everything Japan could give me. Having seen it all, I knew it was not enough.

One afternoon, I unrolled a scroll in the Shōkokuji storage room. Someone had written on it: "Song dynasty landscape, rare treasure."

I spread it open and looked for a long time. The mountains were painted with axe-cut brushwork — the technique from Guo Xi's Northern Song school, cutting rock faces into geometric planes. But the longer I looked, something felt wrong. The ink tones were too even. The rock transitions were too mechanical. This was not a person painting in front of a mountain. This was someone copying another person's painting.

A copy. Not the original.

I picked up my brush and copied the scroll. Then beside that I painted, from memory, the version Shūbun had taught me. Then I compared all three.

Three paintings. Three sets of mountains. Which was closer to a real Chinese mountain? I did not know. I had never seen a real Chinese mountain.

That fact stood clearly in front of me: the best Shōkokuji could give me was a copy of a copy. To see the original, I needed to go to China.

The kango trade ships did not take anyone who simply wanted to go. I could only wait.`,
    themeCn: '当你发现你学的是别人的临摹，你就知道必须去哪里',
    themeEn: 'When you discover you have been learning copies, you know where you must go.',
    engagementHook: '相国寺能给我的最好东西，是「临摹的临摹」。你学过什么知识或技能，后来发现有一个「更接近原版」的来源？',
    expectsRealAnswer: false,
    sourcingNote: '斧劈皴 + 郭熙系 + 周文传承来自 narrative §14；相国寺稳定期背景来自 §13',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N4',
    nodeId: 'sesshu-N4',
    year: 1467,
    location: '博多港，出发前',
    title: {
      cn: '去看原本，需要先放下你守护的东西',
      en: 'To see the original, you must first release what you are guarding',
    },
    titleCn: '去看原本，需要先放下你守护的东西',
    titleEn: 'To see the original, you must first release what you are guarding',
    content: {
      cn: `1467 年，47 岁，我搭上了从博多（Hakata，今福冈）出发的勘合贸易船。

船是足利义政（第 8 代将军，1449-1473 年在任）的名义下批准的勘合船。资助方一说为大内氏（Ōuchi clan，西日本强藩，长期参与勘合贸易），但史料所存有限，不宜过于确定（narrative §14 记载「一说为大内氏」）。我以「禅僧随员」（zenji-gaiin，僧侣外交随行）身份搭船。47 岁，已经是相国寺系的成熟画家。

出发的时间，与应仁之乱的爆发几乎同步。应仁之乱 1467 年正月正式开始（《应仁记》Ōnin-ki 记载；Varley 2000 确认），具体船期与乱事的先后顺序，史料不详——但可以确认的是：无论我在哪一天出港，京都在我航行期间已经起火，或即将起火。我选择出发，而不是留守。

这个选择，值得在这里说清楚一点。

我不是逃跑。「逃」意味着你放弃了本来应该守护的东西。但相国寺那个时候已经不是我需要守护的地方了——那里给了我它能给的一切，然后我需要走了。这是不同的事。

这条船出发的时候，遣唐使（630-894 年）已经停了 573 年了。足利义满 1401 年开始的勘合贸易，是「日本主动向中国取经」这个结构的最新一章。从遣唐使的大型使团，到现在一个禅僧随着贸易船搭便车——主体变小了，但那个「去看」的冲动，一直没变过。

我在船上，看着博多港慢慢消失在水平线后面。我 47 岁，第一次离开日本。`,
      en: `In 1467, at the age of forty-seven, I boarded a kango tribute-trade ship departing from Hakata — the harbor in what is now Fukuoka.

The ship sailed under the authorization of shogun Ashikaga Yoshimasa (eighth shogun, in office 1449-1473). The sponsoring party was possibly the Ōuchi clan — the powerful western Japan domain long involved in the kango trade — but the historical sources are limited and I will not state this with more certainty than they warrant. (The narrative records this as "one account says the Ōuchi clan.") I traveled in the capacity of zenji-gaiin, a clerical diplomatic attendant. Forty-seven years old. An established painter in the Shōkokuji tradition.

The timing of my departure overlapped almost exactly with the Ōnin War. The Ōnin War formally began in the first month of 1467 (as recorded in the Ōnin-ki; confirmed in Varley 2000). The precise sequence — whether I left before or after the first fighting — is not recoverable from surviving sources. What is clear is this: whether I sailed before or after the first fires, Kyoto was burning or about to burn while I was at sea. I chose to depart, not to stay.

That choice deserves a moment here.

I was not fleeing. "Fleeing" means abandoning something you were supposed to protect. But Shōkokuji was no longer what I needed to protect. It had given me everything it could give me, and it was time to leave. That is a different thing.

The Tang embassy missions (630-894) had been suspended for 573 years by the time my ship left harbor. The kango trade that Ashikaga Yoshimitsu established in 1401 was the newest chapter of the same structure: Japan actively seeking what China had. From the large official embassies of the Tang period, to a single Zen monk catching a ride on a trade vessel — the individual had become smaller, but the impulse to go and see had never changed.

I stood on the ship's deck and watched Hakata harbor disappear behind the horizon. Forty-seven years old. Leaving Japan for the first time.`,
    },
    bodyCn: `1467 年，47 岁，我搭上了从博多出发的勘合贸易船。

船是足利义政名义下批准的勘合船。资助方一说为大内氏，但史料有限，不宜过于确定。我以「禅僧随员」身份搭船，47 岁，已是相国寺系成熟画家。

出发时间与应仁之乱的爆发几乎同步。应仁之乱 1467 年正月正式开始（Varley 2000 确认），具体船期与乱事先后的史料不详——但无论我哪天出港，京都在我航行期间已经起火，或即将起火。我选择出发，而不是留守。

这个选择值得说清楚。我不是逃跑——「逃」意味着你放弃了本来应该守护的东西。相国寺已经给了我它能给的一切，该走了。这是不同的事。

这条船出发的时候，遣唐使（630-894 年）已经停了 573 年。足利义满 1401 年开始的勘合贸易，是「日本主动向中国取经」这个结构的最新一章。从遣唐使的大型使团，到现在一个禅僧随贸易船搭便车——主体变小了，但那个「去看」的冲动，一直没变过。

我在船上，看着博多港慢慢消失在水平线后面。47 岁，第一次离开日本。`,
    bodyEn: `In 1467, at forty-seven, I boarded a kango tribute-trade ship departing from Hakata in what is now Fukuoka.

The ship sailed under shogun Ashikaga Yoshimasa's authorization. The sponsoring party was possibly the Ōuchi clan — but the historical sources are limited and I will not overstate this. I traveled as zenji-gaiin, a clerical diplomatic attendant. Forty-seven years old. An established painter in the Shōkokuji tradition.

The timing of my departure overlapped with the outbreak of the Ōnin War. The war formally began in the first month of 1467 (Varley 2000). Whether I left before or after the first fighting is not recoverable from surviving sources. What is clear: whether I sailed before or after the first fires, Kyoto was burning or about to burn while I was at sea. I chose to depart, not to stay.

I was not fleeing. Fleeing means abandoning something you were supposed to protect. Shōkokuji had given me everything it could give me. It was time to leave. That is different.

The Tang embassy missions (630-894) had been suspended for 573 years by the time my ship left harbor. The kango trade established in 1401 was the newest chapter of the same structure: Japan actively seeking what China had. From large official embassies, to one Zen monk catching a ride on a trade vessel — the individual had become smaller, but the impulse to go and see had never changed.

I watched Hakata harbor disappear behind the horizon. Forty-seven years old. Leaving Japan for the first time.`,
    themeCn: '去看原本，需要先放下你守护的东西',
    themeEn: 'To see the original, you must first release what you are guarding.',
    crossTopicHook: '遣唐使（630-894）→ 勘合贸易（1401-1547）→ 雪舟 1467：同一条「日本主动向中国取经」的结构性重复，三次，越来越小的主体，可能越来越深的个体深度。参见 Tang-Song Topic。',
    engagementHook: '47 岁，京都在燃烧，我选择出发而不是留守。「放下你守护的东西」和「抛弃你应该守护的东西」，这两件事有什么区别？',
    expectsRealAnswer: false,
    sourcingNote: '出发年份 1467 + 博多港 + 大内氏「一说」来自 narrative §14；遣唐使-勘合贸易结构来自 §1 + §13；Varley 2000 确认应仁之乱时间',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N5',
    nodeId: 'sesshu-N5',
    year: 1467,
    location: '宁波，明朝',
    title: {
      cn: '「原本」本身也在变化，你到达的时候，原本已经不是原本',
      en: 'The original itself has changed; when you arrive, it is no longer what it was',
    },
    titleCn: '「原本」本身也在变化，你到达的时候，原本已经不是原本',
    titleEn: 'The original itself has changed; when you arrive, it is no longer what it was',
    content: {
      cn: `1467 年，宁波（Ningbo）入港。47 岁，第一次踏上中国土地。

船在宁波靠岸，我走下舷梯，脚踩在码头的石板上。那是一种奇怪的感觉——不是兴奋，是某种更复杂的东西。我站在「原本」的地方，而「原本」跟我想象的不完全一样。

宁波港口有一面石壁，上面刻着摩崖石刻——中文，官府的告示，还有一些诗。我看着那些字，它们跟我在相国寺临摹的汉字不完全相同。同样是汉字，但石刻上的字体更有地方气，笔画的习惯跟日本禅寺里流传的那些不一样。

这是第一个让我停下来的细节：「原本」跟我以为的原本，长得不完全一样。

我在相国寺学的汉字，是由日本禅宗体系一代一代传下来的汉字。那是一种已经在日本适应了三四百年的书写系统。而宁波港口的石刻，是明朝的官方中文——另一种演化方向的同一个文字。

后来我在中国的两年里，这种感觉反复出现。我以为我要去验证我学到的东西，结果发现我学到的东西是「原本」的一个分支，而「原本」自己也不是静止的。郭熙（Guo Xi）的北宋山水，在明朝已经成了一个遥远的传统，被浙派的戴进（Dai Jin，1388-1462）改造了、发展了。我要学的「原本」，本身已经在时间里变成了另一个东西。

「原本」不存在于某个固定的地方。它在时间里移动，等你到达的时候，它已经走了。`,
      en: `1467. Ningbo harbor. Forty-seven years old. My feet on Chinese soil for the first time.

The ship docked at Ningbo, and I walked down the gangway onto stone. The feeling was strange — not exactly excitement, something more complicated. I was standing in the place of the original, and the original was not quite what I had imagined.

On the harbor wall there was a stone inscription — Chinese characters, a government notice, some poems. I stood and read them. They were not quite the same as the Chinese characters I had been copying at Shōkokuji. The same writing system, but the letterforms had a local quality — the habitual stroke patterns were different from what had been transmitted through Japanese Zen temples.

This was the first detail that made me stop: the original did not look exactly like what I had thought the original would look like.

The Chinese characters I had learned at Shōkokuji were passed down through the Japanese Zen system, generation by generation. That was a writing tradition that had been adapting inside Japan for three or four hundred years. The Ningbo harbor inscription was Ming official Chinese — the same writing, but evolved in a different direction.

In the two years I spent in China, this feeling came back to me again and again. I had expected to go and verify what I had learned. Instead I found that what I had learned was a branch of the original — and the original itself was not standing still. Guo Xi's Northern Song landscape tradition had, by the Ming dynasty, become a distant inheritance, transformed and developed by the Zhe School painter Dai Jin (1388-1462). The original I came to study had, inside the movement of time, already become something else.

The original does not exist in a fixed place. It moves through time. By the time you arrive, it has already moved on.`,
    },
    bodyCn: `1467 年，宁波入港。47 岁，第一次踏上中国土地。

我走下舷梯，脚踩在码头的石板上。那是一种奇怪的感觉——不是兴奋，是某种更复杂的东西。我站在「原本」的地方，而「原本」跟我想象的不完全一样。

宁波港口有一面石壁，刻着摩崖石刻——中文，官府告示，还有一些诗。我看着那些字，它们跟我在相国寺临摹的汉字不完全相同。同样是汉字，但石刻的字体更有地方气，笔画习惯跟日本禅寺里流传的不一样。

这是第一个让我停下来的细节：「原本」跟我以为的原本，长得不完全一样。

我在相国寺学的汉字，是由日本禅宗体系一代一代传下来的版本——在日本适应了三四百年的书写系统。而宁波港口的石刻，是明朝官方中文——另一种演化方向的同一个文字。

在中国的两年里，这种感觉反复出现。郭熙的北宋山水，在明朝已经成了遥远的传统，被浙派的戴进（Dai Jin，1388-1462）改造了、发展了。我要学的「原本」，本身已经在时间里变成了另一个东西。

「原本」不存在于某个固定的地方。它在时间里移动，等你到达的时候，它已经走了。`,
    bodyEn: `1467. Ningbo harbor. Forty-seven years old. My feet on Chinese soil for the first time.

The ship docked and I walked down onto stone. The feeling was strange — not excitement, something more complicated. I was standing in the place of the original, and the original was not quite what I had imagined.

On the harbor wall there was a stone inscription — Chinese characters, a government notice, some poems. I stood and read them. They were not quite the same as the characters I had been copying at Shōkokuji. The same writing system, but the letterforms had a local quality — the stroke habits were different from what had been transmitted through Japanese Zen temples.

This was the first detail that made me stop: the original did not look exactly like what I had thought the original would look like.

The Chinese characters I learned at Shōkokuji had been passed down through the Japanese Zen system for three or four hundred years. The Ningbo harbor inscription was Ming official Chinese — the same writing, but evolved in a different direction.

In the two years I spent in China, this feeling came back again and again. Guo Xi's Northern Song landscape tradition had, by the Ming dynasty, become a distant inheritance, transformed by the Zhe School painter Dai Jin (1388-1462). The original I had come to study had already become something else inside the movement of time.

The original does not exist in a fixed place. It moves through time. By the time you arrive, it has already moved on.`,
    themeCn: '「原本」本身也在变化，你到达的时候，原本已经不是原本',
    themeEn: 'The original itself changes; when you arrive, it has already moved on.',
    engagementHook: '宁波港口，我发现「原本」跟我学的那个版本不完全一样——「原本」自己也在时间里变化。你学过什么东西，后来发现「正确答案」本身也不是固定的？',
    expectsRealAnswer: false,
    sourcingNote: '宁波入港来自 narrative §14；戴进浙派 + 郭熙系传承来自 narrative §14；Watanabe 1975',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N6',
    nodeId: 'sesshu-N6',
    year: 1467,
    location: '北京（推测），明朝宫廷画家圈子',
    title: {
      cn: '用别人的眼睛，重新看自己的家',
      en: 'Through another\'s eyes, seeing your own home again',
    },
    titleCn: '用别人的眼睛，重新看自己的家',
    titleEn: 'Through another\'s eyes, seeing your own home again',
    content: {
      cn: `宁波之后，船队北上，我进入了北京。

这里需要 careful framing：我在北京的行程，史料所存极为有限（Rice 2010 明确表示文献不足）。「进入北京」是可以确认的，但在北京的具体活动、时间长短、接触了哪些人，均无详细记录。Rice（2010）使用的措辞是「court painters and their circle」——宫廷待诏画家的圈子，而非某个正式学院。明朝皇家画院不像宋朝翰林图画院那样有独立建制，宣德以后宫廷画家以「待诏」身份供职。我接触的，很可能就是这样的人。

我看到的是当时「活的」中国山水画——浙派戴进（Dai Jin，1388-1462）的风格主导着宫廷画家圈，以及北宋大山大水的构图传统通过明朝宫廷系统传承下来的样子。这跟我在相国寺学的，不同，也跟我想象的不同。

Rice（2010）对我在明朝的判断是这样的：我是一个「研究者」（researcher），不是「学生」（student）。我带去了自己成熟的 Zen 水墨语言，与明朝院体风格做对比，而非简单复制。

我记得有一次，一个明朝待诏画家看了我带去的日本水墨画，说：「这是中国画法，但不是中国的。」我想了很久这句话。它说的是什么？它说的是：你从我们这里拿走了技法，但你用这个技法画的不是我们的山，是你们的山。

在北京，我第一次真正理解了「相国寺水墨」是什么——是中国技法在日本地形上生长出来的东西，不是复制，是变体。我是带着这个理解离开中国的。

1467 年，就在我研究明朝山水画的同时，6,000 公里外的佛罗伦萨，Lorenzo de\' Medici（洛伦佐·美第奇，1449-1492）18 岁，开始主持美第奇家族。他在赞助艺术家，我在研究艺术。两种「艺术家与权力」的关系，在同一个 1467 年，同时发生。`,
      en: `After Ningbo, our vessels moved north. I entered Beijing.

Here careful framing is necessary: the historical record of my time in Beijing is extremely thin. (Rice 2010 is explicit about this limitation.) That I entered Beijing can be confirmed. The specific activities, duration, and contacts there are not documented in detail. Rice's language is "court painters and their circle" — the circle of court daizhao painters, not any formal academy. The Ming imperial painting institution was not organized like the Song dynasty's Hanlin Painting Academy; after the Xuande reign, court painters served as daizhao, supply-artists on call. That is likely who I was dealing with.

What I saw was living Chinese landscape painting — the Zhe School style of Dai Jin (1388-1462) dominated the court painter circle, and the Northern Song tradition of grand mountain-and-water composition survived through the Ming court system. This was different from what I had learned at Shōkokuji. Different from what I had imagined.

Rice's (2010) assessment of what I was doing in Ming China: I was a researcher, not a student. I brought my own mature Zen ink language, held it up against Ming academy style to compare and calibrate, rather than simply copy.

I remember one exchange. A Ming daizhao painter looked at the Japanese ink painting I had brought along and said something like: "This is Chinese technique, but it is not Chinese." I turned that over in my mind for a long time. What was he saying? He was saying: you took the method from us, but what you painted with that method is not our mountains. It is yours.

In Beijing, for the first time, I truly understood what "Shōkokuji ink painting" was — Chinese technique grown into Japanese terrain, not a copy, but a variation. I left China carrying that understanding.

In 1467, while I studied Ming landscape painting in Beijing, six thousand kilometers away in Florence, Lorenzo de\' Medici was eighteen years old, beginning to lead the Medici family. He was sponsoring artists; I was studying art. Two versions of the relationship between artists and power, both happening in the same year 1467.`,
    },
    bodyCn: `宁波之后，船队北上，我进入了北京。

我进入了北京——这一点，Rice（2010）可以确认。但我在北京做了什么、待了多久、见了谁，史料所存极为有限（Rice 2010 明确指出文献不足）。Rice（2010）使用的措辞是「court painters and their circle」，不是某个正式学院。明朝宫廷画家以「待诏」身份供职，我接触的很可能就是这样的人。

我看到的是当时「活的」中国山水画——浙派戴进（Dai Jin，1388-1462）的风格主导宫廷画家圈，以及北宋大山大水构图传统通过明朝宫廷系统传承下来的样子。这跟相国寺学的不同，也跟我想象的不同。

Rice（2010）的判断：我是一个「研究者」（researcher），不是「学生」（student）。我带去了自己成熟的 Zen 水墨语言，与明朝院体风格做对比校正，而非简单复制。

我记得一个明朝待诏画家看了我带去的日本水墨画，说：「这是中国画法，但不是中国的。」我想了很久。他的意思是：你从我们这里拿走了技法，但你用这个技法画的不是我们的山，是你们的山。

在北京，我第一次真正理解了「相国寺水墨」是什么——是中国技法在日本地形上生长出来的变体，不是复制。我带着这个理解离开中国。

1467 年，就在我研究明朝山水画的同时，Lorenzo de\' Medici（1449-1492）18 岁，在佛罗伦萨开始主持美第奇家族，赞助艺术。两种「艺术家与权力」的关系，在同一个 1467 年同时发生。`,
    bodyEn: `After Ningbo, our vessels moved north. I entered Beijing.

I entered Beijing — that much, Rice (2010) confirms. But what I did there, how long I stayed, whom I met: the historical record is extremely thin (Rice 2010 is explicit about this limitation). Rice's language is "court painters and their circle" — the circle of court daizhao painters, not a formal academy. Ming court painters served as daizhao, on-call supply-artists. That is likely who I encountered.

What I saw was living Chinese landscape painting — the Zhe School style of Dai Jin (1388-1462) dominated the court painter circle, and the Northern Song grand mountain-and-water tradition survived through the Ming court system. Different from Shōkokuji. Different from what I had imagined.

Rice's (2010) assessment: I was a researcher, not a student. I brought my own mature Zen ink language, held it against Ming academy style to compare and calibrate, rather than simply copy.

I remember one exchange. A Ming daizhao painter looked at the Japanese ink painting I had brought along and said something like: "This is Chinese technique, but it is not Chinese." I turned that over in my mind for a long time. What he meant: you took the method from us, but what you painted with that method is not our mountains. It is yours.

In Beijing, for the first time, I truly understood what Shōkokuji ink painting was — Chinese technique grown into Japanese terrain, a variation, not a copy. I left China carrying that understanding.

In 1467, as I studied Ming landscape painting in Beijing, Lorenzo de\' Medici was eighteen years old in Florence, beginning to lead the Medici family and sponsor artists. Two versions of the relationship between artists and power, both happening in the same year.`,
    themeCn: '用别人的眼睛，重新看自己的家',
    themeEn: 'Through another\'s eyes, seeing your own home again.',
    crossTopicHook: 'Lorenzo de\' Medici 1467 年在佛罗伦萨赞助艺术；雪舟 47 岁在北京做研究。两种「艺术家与权力」的关系。参见 Renaissance Topic。',
    engagementHook: '一个明朝画家告诉我：「这是中国画法，但不是中国的。」用别人的技法，画自己的山——你觉得这是模仿还是创造？',
    expectsRealAnswer: false,
    sourcingNote: 'Rice 2010 — 北京行程史料有限 careful framing + researcher vs student 判断；戴进浙派来自 narrative §14',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N7',
    nodeId: 'sesshu-N7',
    year: 1469,
    location: '山口，大内氏领地',
    title: {
      cn: '不返回权力中心，是一种需要勇气的不作为',
      en: 'Refusing to return to the center of power is a form of courage',
    },
    titleCn: '不返回权力中心，是一种需要勇气的不作为',
    titleEn: 'Refusing to return to the center of power is a form of courage',
    content: {
      cn: `1469 年，从明朝回到日本，我没有回京都。

京都在应仁之乱（1467-1477）里燃烧——那场乱事在我航行期间已经开始，等我回来的时候还没结束。京都大半被烧，公家贵族的庄园文书、寺院典藏、文物器皿大量损毁或流散（Varley 2000）。相国寺，还在，但那个作为文化中心的相国寺，已经不完整了。

我选择了山口（Yamaguchi，今山口县）。

山口是大内氏（Ōuchi clan）的根据地——西日本最强的守护大名之一，长期参与勘合贸易。大内氏有意识地将山口打造为「西の京都」（西部京都），模仿京都街道格局建城，庇护禅僧、汉学者、画家。大内氏与明朝文化输入有直接的动机关联。

在大内氏庇护下，我获得了京都幕府系统无法给我的东西：创作自由，和政治绝缘。

我不需要向足利将军家的口味妥协。不需要为应仁之乱后的权力真空中各方势力服务。我只需要画画。

这个「不返回京都」的地理选择，是 lonely mediator 最重要的一个决定。它定义了我接下来三十多年的生命。不回权力中心，不是懦弱，不是放弃——是一种主动选择的政治立场：我不属于任何一个正在争夺权力的阵营，我只属于我的工作。

这需要一种特别的清醒。权力中心有时候比战场更危险，因为它让你觉得自己必须参与。`,
      en: `In 1469, I returned from Ming China to Japan. I did not go back to Kyoto.

Kyoto was burning inside the Ōnin War (1467-1477) — that conflict had begun while I was still at sea, and by the time I returned it was not over. Much of the city had been destroyed; the estate documents, temple collections, and cultural objects of the court aristocracy had been damaged or scattered on a large scale. (Varley 2000.) Shōkokuji still stood, but the Shōkokuji that had been a cultural center was no longer whole.

I chose Yamaguchi.

Yamaguchi was the base of the Ōuchi clan — one of the most powerful western Japan shugo daimyō, long involved in the kango tribute trade. The Ōuchi had deliberately shaped Yamaguchi into a "western Kyoto," building the city on a Kyoto-style grid, supporting Zen monks, Sinologists, and painters. Their interest in Ming cultural imports was direct and practical.

Under Ōuchi patronage, I received what the Kyoto shogunal system could never have given me: creative freedom, and political insulation.

I did not need to adjust my work to please the Ashikaga shogunal family's tastes. Did not need to serve any of the competing factions in the power vacuum that followed the Ōnin War. I only needed to paint.

This geographical choice — not returning to Kyoto — was the single most important decision a lonely mediator makes. It defined the next thirty-plus years of my life. Not going back to the center of power was not cowardice, not abandonment. It was an active political position: I do not belong to any of the camps fighting over power. I belong only to my work.

That requires a particular kind of clarity. Power centers are sometimes more dangerous than battlefields, because they make you feel you must participate.`,
    },
    bodyCn: `1469 年，从明朝回到日本，我没有回京都。

京都在应仁之乱（1467-1477）里燃烧——那场乱事在我航行期间已经开始，等我回来时还没结束。京都大半被烧，寺院典藏、文物器皿大量损毁（Varley 2000）。相国寺还在，但作为文化中心的相国寺已经不完整了。

我选择了山口（Yamaguchi，今山口县）。山口是大内氏（Ōuchi clan）的根据地——西日本最强的守护大名之一，长期参与勘合贸易，有意将山口打造为「西の京都」，庇护禅僧、画家。大内氏与明朝文化输入有直接动机关联。

在大内氏庇护下，我获得了京都系统无法给我的东西：创作自由，和政治绝缘。不需要向将军家口味妥协，不需要为权力真空中各方势力服务。只需要画画。

「不返回京都」这个地理选择，是 lonely mediator 最重要的决定。它定义了我接下来三十多年的生命。不回权力中心，不是懦弱——是主动选择的政治立场：我不属于任何争夺权力的阵营，我只属于我的工作。

这需要一种特别的清醒。权力中心有时候比战场更危险，因为它让你觉得自己必须参与。`,
    bodyEn: `In 1469, returning from Ming China, I did not go back to Kyoto.

Kyoto was burning inside the Ōnin War (1467-1477). The conflict had begun while I was at sea; by the time I returned it was not over. Much of the city had been destroyed; temple collections and cultural objects had been damaged or scattered on a large scale. (Varley 2000.) Shōkokuji still stood, but the Shōkokuji that had been a cultural center was no longer whole.

I chose Yamaguchi. It was the base of the Ōuchi clan — one of the most powerful western Japan shugo daimyō, long involved in the kango tribute trade. The Ōuchi had deliberately shaped Yamaguchi into a "western Kyoto," built on a Kyoto-style grid, supporting Zen monks and painters. Their interest in Ming cultural imports was direct and practical.

Under Ōuchi patronage I received what the Kyoto shogunal system could never have given me: creative freedom, and political insulation. No need to adjust my work to please the Ashikaga family's tastes. No need to serve any faction in the power vacuum after the Ōnin War. Only paint.

This geographical choice — not returning to Kyoto — was the most important decision a lonely mediator makes. It defined the next thirty-plus years of my life. Not going back to the center of power was not cowardice. It was an active political position: I do not belong to any camp fighting over power. I belong only to my work.

That requires a particular kind of clarity. Power centers are sometimes more dangerous than battlefields, because they make you feel you must participate.`,
    themeCn: '不返回权力中心，是一种需要勇气的不作为',
    themeEn: 'Refusing to return to the center of power is a form of courage.',
    engagementHook: '京都在燃烧，我选择去山口而不是回京都。「不参与」是一种选择，还是一种逃避？你觉得两者之间的界限在哪里？',
    expectsRealAnswer: false,
    sourcingNote: '山口 + 大内氏庇护来自 narrative §14 + §15；Varley 2000 应仁之乱后果',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N8',
    nodeId: 'sesshu-N8',
    year: 1475,
    location: '山口，云谷庵附近',
    title: {
      cn: '用别人的眼睛，重新看自己的山',
      en: 'Using another\'s eyes to look at your own mountains',
    },
    titleCn: '用别人的眼睛，重新看自己的山',
    titleEn: 'Using another\'s eyes to look at your own mountains',
    content: {
      cn: `山口时期，1469 年之后，我开始真正画日本的山。

这听起来很简单：我回到了日本，然后画日本的山。但实际发生的，比这复杂。

Rice（2010）的判断是：我用的是明朝山水的「体量感」（volumetric weight）——把山和石头作为有重量的三维实体来画——和日本禅宗水墨的「留白意识」（negative space as spiritual gesture）——用墨和空白的关系来表达精神状态。这两件事不是分开的，而是我把它们融合在一起，产生了一种既不属于明朝院体，也不属于相国寺旧风的新语言。

我记得有一次，大约是 1470 年代某个早晨，我在山口附近的山里，看着一片花岗岩露头。花岗岩的节理，是垂直切割的——那种横向分层的砂岩地质，是中国北方画面里常见的；但花岗岩不是那样的，花岗岩的纹理是块状的，是球形风化的，是另一种逻辑。

我拿起毛笔，用明朝「斧劈皴」（axe-cut brushstroke）的侧锋，去画眼前那片花岗岩露头。

然后我停下来。那个山石的体积感「对」了——不是中国的对法，是日本花岗岩自己的对法。斧劈皴本来是为了画北方的砂岩用的，但它的侧锋干笔，用在花岗岩的切割面上，效果是另一种东西。

这是「用别人的眼睛，重新看自己的家」的第一次——用明朝带回来的笔墨组织方式，去发现日本地形自身的结构。不是把中国画法套到日本风景上，是用中国笔墨的逻辑，找到日本地形自己的美感。

这件事，需要你先去别处，看别的地方的山，然后回来，才能看见自己的山。`,
      en: `Yamaguchi period. After 1469. I began in earnest to paint Japanese mountains.

That sounds simple: I came back to Japan and painted Japanese mountains. But what actually happened was more complicated.

Rice's (2010) assessment: what I was working with was the volumetric weight of Ming landscape — treating mountains and rocks as three-dimensional objects with mass — combined with the Japanese Zen ink tradition's negative space as spiritual gesture — using the relationship between ink and empty paper to express a mental state. These were not separate things. I fused them, producing a language that did not belong to Ming academy style and did not belong to the old Shōkokuji manner.

I remember one morning, sometime in the 1470s, standing in the hills near Yamaguchi, looking at an exposed granite outcrop. Granite's fracture patterns are vertical — the horizontal sedimentary layering of sandstone, which was common in Chinese northern landscape painting, is not granite's logic. Granite is blocky, spherically weathered, its own kind of structure.

I picked up my brush and used the side-stroke of the Ming axe-cut brushstroke to paint that granite outcrop in front of me.

Then I stopped. The volume of the rock felt right — not right in the Chinese way, but right in the way of Japanese granite itself. The axe-cut stroke was originally developed for northern Chinese sandstone, but the dry-brush side-stroke against the cut face of granite produced something different.

This was the first moment of using another's eyes to look at your own home again — using the organizational logic of Ming brushwork to discover the structural beauty already present in Japanese terrain. Not forcing Chinese painting methods onto Japanese scenery. Using Chinese brush logic to find Japanese form.

To do that, you first have to go somewhere else, look at other mountains, and then come back. Only then can you see your own.`,
    },
    bodyCn: `山口时期，1469 年之后，我开始真正画日本的山。

这听起来简单：回到日本，画日本的山。但实际发生的更复杂。

Rice（2010）的判断：我用的是明朝山水的「体量感」（volumetric weight）和日本禅宗水墨的「留白意识」（negative space as spiritual gesture）——把这两件事融合，产生了一种既不属于明朝院体、也不属于相国寺旧风的新语言。

我记得大约 1470 年代某个早晨，在山口附近的山里，看着一片花岗岩露头。花岗岩的节理是垂直切割的——中国北方画里常见的是横向分层的砂岩地质，但花岗岩是块状的，是另一种逻辑。

我拿起毛笔，用明朝「斧劈皴」（axe-cut brushstroke）的侧锋，去画眼前那片花岗岩。然后我停下来。那个山石的体积感「对」了——不是中国的对法，是日本花岗岩自己的对法。

这是「用别人的眼睛，重新看自己的家」的第一次——用明朝带回来的笔墨组织方式，发现日本地形自身的结构。不是把中国画法套到日本风景，是用中国笔墨的逻辑，找到日本地形自己的美感。

这件事，需要你先去别处，看别的地方的山，然后回来，才能看见自己的山。`,
    bodyEn: `Yamaguchi period. After 1469. I began in earnest to paint Japanese mountains.

That sounds simple: came back to Japan, painted Japanese mountains. But what actually happened was more complicated.

Rice's (2010) assessment: what I was working with was the volumetric weight of Ming landscape — mountains and rocks as three-dimensional objects with mass — combined with the Japanese Zen ink tradition's negative space as spiritual gesture. These were not separate things. I fused them, producing a language that belonged to neither Ming academy style nor the old Shōkokuji manner.

I remember one morning in the 1470s, standing in the hills near Yamaguchi, looking at an exposed granite outcrop. Granite's fracture patterns are vertical — not the horizontal sedimentary layering of sandstone common in Chinese northern landscape painting. Granite is blocky, spherically weathered, its own kind of structure.

I picked up my brush and used the side-stroke of the Ming axe-cut brushstroke on that granite outcrop. Then I stopped. The volume of the rock felt right — not right in the Chinese way, but right in the way of Japanese granite itself. The axe-cut stroke was developed for Chinese sandstone, but the dry-brush side-stroke against granite produced something different.

This was the first moment of using another's eyes to see your own home again — using Ming brush logic to discover the structural beauty already present in Japanese terrain. Not forcing Chinese methods onto Japanese scenery. Using Chinese logic to find Japanese form.

To do that, you first have to go somewhere else, look at other mountains, and then come back. Only then can you see your own.`,
    themeCn: '用明朝的笔墨，发现日本地形自身的结构',
    themeEn: 'Using Ming brushwork to discover the structure already present in Japanese terrain.',
    crossTopicHook: '雪舟 1469 年在山口用明朝技法画日本山水，圆觉寺（1282 年由时宗兴建，时宗引入的禅宗网络）已运作 187 年——时宗引入的禅宗文化线与雪舟承接的禅宗绘画传统是同一条文化线的两端。',
    engagementHook: '用明朝的斧劈皴去画日本花岗岩——外来的工具，发现了本地地形自己的结构。你有没有用一种「外来」的方法，更好地理解了自己熟悉的东西？',
    expectsRealAnswer: false,
    sourcingNote: 'Rice 2010 — volumetric weight + negative space synthesis 判断；斧劈皴技法来自 narrative §14 + Watanabe 1975',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N9',
    nodeId: 'sesshu-N9',
    year: 1486,
    location: '山口，大内氏庇护下',
    title: {
      cn: '一件作品，是一段旅程的证明',
      en: 'A work of art is the proof of a journey',
    },
    titleCn: '一件作品，是一段旅程的证明',
    titleEn: 'A work of art is the proof of a journey',
    content: {
      cn: `1486 年，我完成了《四季山水图卷》（Shiki Sansui Zuken）。66 岁。

这是一幅横卷，全长约 1560 厘米，由四段组成（每段约 390 厘米），今藏京都国立博物馆。careful framing：有学者认为传世版本经后代重装，原始尺寸和分段情况与记载有出入（Watanabe 1975）。我在这里说的「约 1560 厘米」，是当前传世版本的数字，不保证是我完成时的状态。

春夏秋冬，四时连贯。

为什么要画四季？因为山水不是一个时刻的山水——山水是时间里的山水。春天的山是一种山，夏天的山是另一种山，秋天的山和冬天的山又各自不同。把它们画成一卷，展开的时候，你随着卷轴移动，就是随着时间移动。

技法上，这幅画融合了「斧劈皴」（axe-cut brushstroke，郭熙系，把山体切割成块面）和日本禅宗水墨的留白意识。山体的体积感强烈，不同于周文系的轻淡风格——这是明朝带回来的。

但画的是什么山？是日本的山。是我在山口附近和九州山地里走过、看过的山，用明朝的笔墨语言重新组织出来的。不是明朝的山，也不是相国寺系画里那个约定俗成的「山水符号」。

66 岁，用一幅长卷证明：我去了，我看了，我转化了。不是复制，是转化。

这件事，从 1440 年代在相国寺库房里看着「宋朝山水」的那个问题，走了将近 40 年，走到了这卷 1560 厘米的答案。`,
      en: `In 1486, I completed the Shiki Sansui Zuken — Landscapes of the Four Seasons. I was sixty-six years old.

It is a horizontal scroll, approximately 1,560 centimeters in total length, made in four sections (each about 390 centimeters), now held at the Kyoto National Museum. Careful framing: some scholars believe the surviving version was remounted by later hands, and that the original dimensions and sectioning may differ from what is recorded. (Watanabe 1975.) The figure of "approximately 1,560 centimeters" is the measurement of the surviving version as we have it — I cannot guarantee it matches the state in which I finished it.

Spring, summer, autumn, winter. Four seasons, continuous.

Why paint four seasons? Because a landscape is not a landscape of a single moment — it is a landscape inside time. A mountain in spring is one kind of mountain. In summer, another. Autumn and winter each their own. Painting them as a single scroll means that when you unroll it, moving through the scroll, you move through time.

Technically, this work fuses the axe-cut brushstroke from the Guo Xi school — cutting mountain faces into geometric planes — with the Japanese Zen ink tradition's negative space. The sense of volume in the mountain forms is stronger than the lighter Shūbun style — that came back with me from the Ming. But what mountains? Japanese mountains. Mountains I had walked through and looked at in the hills near Yamaguchi and in Kyushu, reorganized through the Ming ink language. Not Ming mountains. Not the conventional "landscape symbol" of the Shōkokuji tradition. Japanese terrain, in Ming language.

At sixty-six, with one long scroll, I proved: I went, I looked, I transformed. Not copied — transformed.

That proof, from the question I first asked in the Shōkokuji storage room in the 1440s, took nearly forty years to arrive. The answer is 1,560 centimeters long.`,
    },
    bodyCn: `1486 年，我完成了《四季山水图卷》（Shiki Sansui Zuken）。66 岁。

横卷，全长约 1560 厘米，由四段组成（约 390 厘米每段），今藏京都国立博物馆。careful framing：有学者认为传世版本经后代重装，原始尺寸和分段情况与记载有出入（Watanabe 1975）。

春夏秋冬，四时连贯。为什么要画四季？因为山水不是一个时刻的山水，是时间里的山水。展开长卷，随卷轴移动，就是随时间移动。

技法上，这幅画融合了「斧劈皴」（axe-cut brushstroke，郭熙系）和日本禅宗水墨的留白意识。山体体积感强烈，不同于周文系轻淡风格——这是明朝带回来的。但画的是日本的山，是我在山口附近走过、看过的山，用明朝笔墨语言重新组织的。不是明朝的山，也不是相国寺约定俗成的「山水符号」。

66 岁，用一幅长卷证明：我去了，我看了，我转化了。不是复制，是转化。

这件事，从 1440 年代在相国寺库房里看着「宋朝山水」的那个问题，走了将近 40 年，走到了这卷 1560 厘米的答案。`,
    bodyEn: `In 1486, I completed the Shiki Sansui Zuken — Landscapes of the Four Seasons. I was sixty-six years old.

A horizontal scroll, approximately 1,560 centimeters total, in four sections (about 390 centimeters each), now at the Kyoto National Museum. Careful framing: some scholars believe the surviving version was remounted by later hands, and original dimensions may differ. (Watanabe 1975.) The figure of "approximately 1,560 centimeters" is the measurement of the surviving version — I cannot guarantee it matches what I finished.

Spring, summer, autumn, winter. Four seasons, continuous. Why four seasons? Because a landscape is not the landscape of a single moment. It is a landscape inside time. Unrolling the scroll, moving through it, you move through time.

Technically, this work fuses the axe-cut brushstroke from the Guo Xi school with the Japanese Zen ink tradition's negative space. The sense of volume in the mountain forms is stronger than the lighter Shūbun style — that came back from Ming China with me. But what mountains? Japanese mountains. Mountains I had walked and seen near Yamaguchi and in Kyushu, reorganized in Ming ink language. Not Ming mountains. Not the conventional landscape symbols of the Shōkokuji tradition.

At sixty-six, with one long scroll, I proved: I went, I looked, I transformed. Not copied — transformed.

That proof, from the question I first asked in the Shōkokuji storage room in the 1440s, took nearly forty years to arrive. The answer is 1,560 centimeters long.`,
    themeCn: '一件作品，是一段旅程的证明',
    themeEn: 'A work of art is the proof of a journey.',
    engagementHook: '《四季山水图卷》，1560 厘米，66 岁完成。一个问题花了 40 年找到答案。你有没有想过，有些事情就是需要这么长的时间？',
    expectsRealAnswer: false,
    sourcingNote: '《四季山水图卷》1486 年 + 约 1560 厘米 + careful framing 传世版本重装问题来自 narrative §14 + Watanabe 1975',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N10',
    nodeId: 'sesshu-N10',
    year: 1496,
    location: '山口或附近，斋年寺',
    title: {
      cn: '极简的画面，是最浓缩的人生经验',
      en: 'The most minimal image holds the most concentrated experience',
    },
    titleCn: '极简的画面，是最浓缩的人生经验',
    titleEn: 'The most minimal image holds the most concentrated experience',
    content: {
      cn: `1496 年，76 岁，我画了《慧可断臂图》（今藏斋年寺，爱知县）。

这幅画的故事是这样的：达摩（Bodhidharma，禅宗初祖）面壁而坐，慧可（Huike，禅宗二祖）站在他身后，请求传法。达摩不理会。慧可为了证明自己求法的决心，自断一臂，献给达摩。这是禅宗最核心的公案（kōan）之一。

我的版本不是精雕细琢的工笔。我的版本是极简笔墨——粗粝，接近野蛮，达摩的形象近乎粗野，完全不同于院体风格的精细描绘。那只断臂，只是几笔，但你能感受到它的重量。

为什么是极简？

因为精细的描绘，会让你看到「画」，而不是看到「事」。极简让你直接面对那个事件本身——一个人，为了得到他认为最重要的东西，切断了自己的一条胳膊。这不是比喻，这是字面意义上的代价。

76 岁的我，画了一个「为求法而断臂」的场景——这是我自己的隐喻。我 47 岁去明朝，我放下了我守护的相国寺体系，我把自己从京都的权力中心切断出去，定居在山口，在大内氏庇护下画了三十年。这些选择，每一个都有代价。每一个代价，都是为了那个「看见原本」的冲动。

那只断臂，是我 30 年前在博多港上船时切断的东西的隐喻。

极简的画面，是最浓缩的人生经验。笔墨越少，承载的重量越大。`,
      en: `In 1496, at seventy-six years old, I painted the Huike Offering His Arm to Bodhidharma. The work is now held at Sainen-ji temple in Aichi Prefecture.

The story: Bodhidharma, the First Patriarch of Zen, sits facing a wall. Huike, who would become the Second Patriarch, stands behind him, requesting transmission of the teaching. Bodhidharma ignores him. To prove the sincerity of his seeking, Huike cuts off one of his arms and presents it. This is one of Zen's most central kōan.

My version is not fine brushwork. My version is minimal ink — rough, close to brutal. Bodhidharma appears almost crude, nothing like the refined depiction of academy style. The severed arm is only a few strokes. But you can feel its weight.

Why minimal?

Because detailed depiction makes you look at the painting, not the event. Minimal ink places you directly in front of the event itself — a person, to obtain what he believed was the most important thing, cut off his own arm. Not metaphorically. That price, paid in flesh.

At seventy-six, I painted a scene of an arm cut off to gain the teaching. This was my own metaphor. At forty-seven I left for Ming China, releasing the Shōkokuji system I had been part of, cutting myself away from Kyoto's center of power, settling in Yamaguchi, painting under Ōuchi patronage for thirty years. Each of those choices carried a cost. Each cost was paid in service of that one impulse: to see the original.

The severed arm is the metaphor for what I left behind when I boarded the ship at Hakata harbor thirty years earlier.

The most minimal image holds the most concentrated experience. The fewer strokes, the greater the weight they carry.`,
    },
    bodyCn: `1496 年，76 岁，我画了《慧可断臂图》（今藏斋年寺，爱知县）。

故事是这样的：达摩（Bodhidharma，禅宗初祖）面壁而坐，慧可（Huike，禅宗二祖）站在他身后请求传法。达摩不理会。慧可为了证明求法决心，自断一臂，献给达摩。这是禅宗最核心的公案之一。

我的版本是极简笔墨——粗粝，接近野蛮，达摩形象近乎粗野，完全不同于院体风格的精细。那只断臂，只是几笔，但你能感受到它的重量。

为什么极简？因为精细的描绘，会让你看到「画」，而不是看到「事」。极简让你直接面对事件本身：一个人，为了得到他认为最重要的东西，字面意义上切断了自己的手臂。

76 岁的我，画了「为求法而断臂」的场景——这是我自己的隐喻。47 岁去明朝，我放下了相国寺体系，把自己从京都的权力中心切断出去，定居山口，画了三十年。每个选择都有代价。每个代价，都是为了那个「看见原本」的冲动。

那只断臂，是我 30 年前在博多港上船时，切断的东西的隐喻。

极简的画面，是最浓缩的人生经验。笔墨越少，承载的重量越大。`,
    bodyEn: `In 1496, at seventy-six, I painted the Huike Offering His Arm to Bodhidharma. Now held at Sainen-ji temple in Aichi Prefecture.

The story: Bodhidharma, the First Patriarch of Zen, sits facing a wall. Huike, the Second Patriarch, stands behind him, requesting the teaching. Bodhidharma ignores him. To prove his sincerity, Huike cuts off one arm and presents it. This is one of Zen's most central kōan.

My version is minimal ink — rough, close to brutal. Bodhidharma appears almost crude, nothing like academy-style refinement. The severed arm is only a few strokes. But you can feel its weight.

Why minimal? Because detailed depiction makes you look at the painting, not the event. Minimal ink places you directly in front of the event itself: a person, to obtain what he believed was most important, cut off his own arm. Not metaphorically. That price, paid in flesh.

At seventy-six, I painted this scene of an arm cut off to gain the teaching. This was my own metaphor. At forty-seven I left for Ming China, releasing the Shōkokuji system, cutting myself away from Kyoto's center of power, settling in Yamaguchi, painting under Ōuchi patronage for thirty years. Each choice carried a cost. Each cost paid in service of one impulse: to see the original.

The severed arm is a metaphor for what I left behind when I boarded the ship at Hakata harbor thirty years earlier.

The most minimal image holds the most concentrated experience. The fewer strokes, the greater the weight they carry.`,
    themeCn: '极简的画面，是最浓缩的人生经验',
    themeEn: 'The most minimal image holds the most concentrated experience.',
    engagementHook: '《慧可断臂图》，几笔墨，一条断臂，整个禅宗传法的故事。你见过哪件艺术作品或哪句话，用最少的东西，说了最多的意思？',
    expectsRealAnswer: false,
    sourcingNote: '《慧可断臂图》1496 年 + 斋年寺爱知县 + 禅宗公案 + 顿悟美学来自 narrative §14；Watanabe 1975',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N11',
    nodeId: 'sesshu-N11',
    year: 1503,
    location: '天桥立，今京都府宫津市',
    title: {
      cn: '一个画家的一生，是一次接一次地「去看」',
      en: 'A painter\'s life is a series of trips to go and see',
    },
    titleCn: '一个画家的一生，是一次接一次地「去看」',
    titleEn: 'A painter\'s life is a series of trips to go and see',
    content: {
      cn: `约 1501 年到 1506 年之间，大约 80 岁出头，我亲自跋涉去了天桥立（Ama-no-hashidate）。

天桥立是日本「三景」之一，位于今日京都府宫津市，丹后半岛的南侧。一条砂洲从南到北横跨宫津湾，长约 3.6 公里，宽仅数十米，两侧是海，中间是茂密的松林。从高处看，它像一条飞越海湾的桥，所以叫「天橋立」——天上的桥，立在水里。

我为什么要去现场？

在我之前的日本山水画，很多是「约定俗成的山水」——画家画一座「山水里的山」，不是他亲眼看见的某座山，是一个文化符号，一个代表「山水意境」的通用图像。这在中国传统里也有，在相国寺系里也有。

但中国有一个传统叫「真景山水」（portrait of real landscape）——画家亲赴某处，画他亲眼所见的真实地形，而不是想象或学来的符号。我在明朝接触到了这个传统，我把它带回了日本。

于是 80 岁出头，我拖着老迈的身体去了天桥立。

不是因为我记忆里有天桥立。不是因为我想象中的天桥立。是因为我需要去看它，用我自己的眼睛，站在那个地方，画下它真实的地形。

这个动作，跟 47 岁去明朝是同一个动作：去看原本。

47 岁是第一次离开日本，去看中国原本；80 岁是离开山口，去看日本土地上的原本。同一种冲动，不同的距离。

这告诉我——或者这让我告诉你——一个画家的一生，不是在某个地方「建立了一套风格」然后就停下来了。它是一次接一次地「去看」，每次都是第一次面对那个具体的地方。

你觉得「去看原本」这件事，对你有意义吗？有没有什么东西，你以为你了解，但其实你只是了解了别人对它的描述？`,
      en: `Between approximately 1501 and 1506, at around eighty years of age, I made the journey myself to Ama-no-hashidate.

Ama-no-hashidate is one of Japan's "Three Views," located in what is now Miyazu City in Kyoto Prefecture, on the southern side of the Tango Peninsula. A sandbar stretches from south to north across Miyazu Bay, about 3.6 kilometers long, only tens of meters wide, water on both sides, a thick pine forest in the middle. Seen from above, it looks like a bridge flying across the bay. That is what the name means: the Bridge of Heaven, standing in water.

Why did I go in person?

Much Japanese landscape painting before me consisted of "conventional landscape" — the painter painted "a mountain in a landscape setting," not any particular mountain he had actually seen. A cultural symbol. A generalized image representing "landscape atmosphere." This existed in Chinese tradition too, and in the Shōkokuji system.

But there is a Chinese tradition called "portrait of real landscape" — the painter goes to a specific place, paints the actual terrain as he personally sees it, not an imagined or learned symbol. I encountered this tradition in Ming China, and I brought it back to Japan.

And so at around eighty years old, I made the journey to Ama-no-hashidate with my aging body.

Not from memory. Not from imagination. Because I needed to go and look at it — with my own eyes, standing in that specific place — and paint the real topography in front of me.

This action is the same action as going to Ming China at forty-seven: to go and see the original.

At forty-seven, the journey was leaving Japan to see the Chinese original. At eighty, the journey was leaving Yamaguchi to see an original on Japanese soil. The same impulse, a different distance.

This tells me — or this lets me tell you — that a painter's life is not about establishing a style somewhere and then stopping. It is a series of trips to go and see, each one a first encounter with a specific place.

Does the idea of "going to see the original" mean anything to you? Is there something you thought you understood, but you had only understood someone else's description of it?`,
    },
    bodyCn: `约 1501 年到 1506 年之间，大约 80 岁出头，我亲自跋涉去了天桥立（Ama-no-hashidate）。

天桥立是日本「三景」之一，位于今日京都府宫津市，丹后半岛南侧。一条砂洲横跨宫津湾，长约 3.6 公里，两侧是海，中间是松林。从高处看，它像一条飞越海湾的桥——「天橋立」，天上的桥，立在水里。

我为什么要去现场？

我之前的日本山水画，很多是「约定俗成的山水」——画一座「山水里的山」，不是某座真实的山，是一个代表「山水意境」的文化符号。这在相国寺系里也有。但中国有一个传统叫「真景山水（写生实地的山水画，对比想象或临摹而来的符号化山水）」——画家亲赴某处，画他亲眼所见的真实地形。我在明朝接触到了这个传统，把它带回了日本。

于是 80 岁出头，我拖着老迈的身体去了天桥立。不是因为记忆里有它，不是因为想象中的它——是因为我需要去看它，用我自己的眼睛，画下它真实的地形。

这个动作，跟 47 岁去明朝是同一个动作：去看原本。

47 岁是离开日本，去看中国原本；80 岁是离开山口，去看日本土地上的原本。同一种冲动，不同的距离。

一个画家的一生，不是在某个地方「建立了一套风格」然后停下来。它是一次接一次地「去看」，每次都是第一次面对那个具体的地方。

你觉得「去看原本」这件事，对你有意义吗？有没有什么你以为你了解，但其实只是了解了别人对它的描述？`,
    bodyEn: `Between approximately 1501 and 1506, at around eighty years old, I made the journey myself to Ama-no-hashidate.

Ama-no-hashidate is one of Japan's "Three Views," in what is now Miyazu City in Kyoto Prefecture. A sandbar stretches across Miyazu Bay, about 3.6 kilometers long, water on both sides, a thick pine forest in the middle. Seen from above, it looks like a bridge flying across the bay — the Bridge of Heaven, standing in water.

Why did I go in person?

Much Japanese landscape painting before me was "conventional landscape" — a painter painted "a mountain in a landscape," not any particular mountain he had seen. A cultural symbol, a generalized image of "landscape atmosphere." The Shōkokuji system had this too. But China has a tradition called "portrait of real landscape" — the painter goes to a specific place and paints the actual terrain as personally seen, not an imagined symbol. I encountered this in Ming China and brought it back to Japan.

And so at around eighty, I made the journey to Ama-no-hashidate with my aging body. Not from memory. Not from imagination. Because I needed to go and look at it with my own eyes and paint the real topography in front of me.

This action is the same action as going to Ming China at forty-seven: to go and see the original.

At forty-seven, the journey was leaving Japan to see the Chinese original. At eighty, the journey was leaving Yamaguchi to see an original on Japanese soil. Same impulse, different distance.

A painter's life is not about establishing a style somewhere and stopping. It is a series of trips to go and see, each one a first encounter with a specific place.

Does the idea of "going to see the original" mean anything to you? Is there something you thought you understood, but had only understood someone else's description of it?`,
    themeCn: '一个画家的一生，是一次接一次地「去看」',
    themeEn: 'A painter\'s life is a series of trips to go and see.',
    engagementHook: '80 岁出头，我拖着老迈的身体去了天桥立。「去看原本」这件事，对你有意义吗？有没有什么你以为你了解，但其实只是了解了别人对它的描述？',
    expectsRealAnswer: true,
    sourcingNote: '《天橋立図》约 1501-1506 + 亲赴现场写生 + 真景山水传统来自 narrative §14；Watanabe 1975；「约 80 岁出头」是根据生卒年推算的约值',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N12',
    nodeId: 'sesshu-N12',
    year: 1506,
    location: '山口或益田附近（推测），卒',
    title: {
      cn: 'lonely mediator 的命运：活着时不属于任何一边，死后被所有人认领',
      en: 'The lonely mediator\'s fate: belonging to no side in life, claimed by all sides in death',
    },
    titleCn: 'lonely mediator 的命运：活着时不属于任何一边，死后被所有人认领',
    titleEn: 'The lonely mediator\'s fate: belonging to no side in life, claimed by all sides in death',
    content: {
      cn: `1506 年，我死了。大约。

Watanabe（1975）明确写道：「1506 年」是文献推算的约值，实际死亡时间和地点，日本史书无明确记载。常见说法是「约 86 岁」卒于山口或益田附近，但这是后世传记的综合推算，不是当时的文件记录。我在这里只能如实告诉你：我不知道自己是哪年哪月死的，在哪里死的，也没有人在那个时候把这件事记清楚。

这是一件值得停下来想的事。一个 86 岁的画家，留下了几十件可确认的真迹，死亡时间和地点却无法在历史记录里找到——这说明他活着的时候，没有人认为他的「死」是一件需要仔细记录的大事。

我活着的时候，没有「画圣」这个称号。

「日本画圣」（nihon suibokuga no soshi，日本水墨画之祖）这个头衔，是明治以后民族主义美术史写作建构出来的——把一个复杂的、跨文化的禅宗僧侣，简化为「日本性」（nihon-sei）的旗帜（Watanabe 1975 + Rice 2010 均对此批评）。我从来没有自称「日本画圣」，也没有建立任何正式流派。我没有组织门人，没有制定画规，没有建立师承制度。

但我之后的每一个重要水墨流派，都从我身上借力。长谷川等伯（Hasegawa Tōhaku，1539-1610）宣称继承我的传统。狩野派（Kanō school）在引入我的水墨元素的同时走向了更装饰性的方向。20 世纪的日本现代水墨把我追溯为祖先。

这就是 lonely mediator 的命运：活着时不完全属于任何一边，死后被所有人认领。

Lorenzo de\' Medici 死于 1492 年。我在 1506 年还在工作，或者刚刚停下来——差了 14 年，我多活了 14 年，没有停。

反 Whig 的总结，我需要说清楚：我不是以「成为日本画圣」为目标而工作的。我是一个 Zen 僧侣，在明日文化边界上探索山水与禅的关系，被地方大名庇护，在战乱中坚持创作。「日本画圣」是后人贴上去的标签。

你觉得「被后人贴标签」这件事，是一种荣誉，还是一种误解？还是两者同时？`,
      en: `In 1506, I died. Approximately.

Watanabe (1975) states clearly: "1506" is a figure derived from document inference — the actual date and place of my death are not recorded clearly in any Japanese historical source. The common saying is "approximately eighty-six years old," dying somewhere near Yamaguchi or Masuda, but this is a composite inference made by later biographers, not a document from the time. I can only tell you honestly: I do not know the year or month I died, or where. And no one, at that time, recorded it carefully enough.

This is worth pausing on. An eighty-six-year-old painter who left behind dozens of verifiable works — and his death cannot be located in the historical record. That tells you something: while he was alive, no one considered his death an event important enough to document precisely.

I held no title of "Master of Painting" while I was alive.

The designation "patriarch of Japanese ink painting" (nihon suibokuga no soshi) was constructed by nationalist art history writing after the Meiji period — taking a complex, cross-cultural Zen monk and simplifying him into a flag for "Japanese-ness" (nihon-sei). (Watanabe 1975 and Rice 2010 both critique this.) I never called myself a master. I never established a formal school. I organized no disciples, set no rules, built no lineage system.

And yet every important ink painting tradition that came after me borrowed from my work. Hasegawa Tōhaku (1539-1610) explicitly claimed to inherit my tradition. The Kanō school absorbed my ink elements while moving toward a more decorative direction. Twentieth-century Japanese modern ink painting traced me as an ancestor.

This is the lonely mediator's fate: belonging fully to no side while alive, claimed by all sides after death.

Lorenzo de\' Medici died in 1492. I was still working in 1506, or had just stopped — fourteen years more, and I did not stop.

The anti-Whig summary: I was not working toward the goal of becoming "Japan's master of painting." I was a Zen monk, exploring the relationship between landscape painting and Zen on the cultural border between Ming China and Japan, sustained by the patronage of a regional lord, creating through a period of war. "Japan's master of painting" is a label others put on me after the fact.

Do you think being labeled by later generations is an honor, or a misunderstanding? Or both at once?`,
    },
    bodyCn: `1506 年，我死了。大约。

Watanabe（1975）明确写道：「1506 年」是文献推算的约值，实际死亡时间和地点，日本史书无明确记载。常见说法是「约 86 岁」卒于山口或益田附近，是后世传记的综合推算。我只能如实告诉你：我不知道自己是哪年哪月死的，也没有人当时把这件事记清楚。

这说明他活着的时候，没有人认为他的「死」是需要仔细记录的大事。

我活着的时候，没有「画圣」这个称号。「日本画圣」（nihon suibokuga no soshi）这个头衔，是明治以后民族主义美术史写作建构出来的——把一个复杂的、跨文化的禅宗僧侣，简化为「日本性」的旗帜（Watanabe 1975 + Rice 2010 均批评这一建构）。我从来没有建立正式流派，没有组织门人，没有制定画规。

但我之后的每一个重要水墨流派，都从我身上借力。长谷川等伯（1539-1610）宣称继承我的传统，其《松林图屏风》的留白美学被认为是对我晚期风格的继承与转化。狩野派引入我的水墨元素后走向更装饰性的方向。20 世纪的日本现代水墨把我追溯为祖先。

这就是 lonely mediator 的命运：活着时不完全属于任何一边，死后被所有人认领。

Lorenzo de\' Medici 死于 1492 年。我在 1506 年还在工作，或者刚刚停下来——多活了 14 年，手不停。

反 Whig 总结：我不是以「成为日本画圣」为目标而工作的。我是一个 Zen 僧侣，在明日文化边界上探索山水与禅，被地方大名庇护，在战乱中坚持创作。「日本画圣」是后人贴上去的标签。

你觉得「被后人贴标签」这件事，是一种荣誉，还是一种误解？还是两者同时？`,
    bodyEn: `In 1506, I died. Approximately.

Watanabe (1975) states clearly: "1506" is a figure derived from document inference. The actual date and place of my death are not recorded clearly in any Japanese historical source. "Approximately eighty-six years old," dying somewhere near Yamaguchi or Masuda — this is a composite inference made by later biographers, not a document from the time. I can only tell you honestly: I do not know the year or month I died, or where. No one recorded it carefully enough.

That tells you something: while he was alive, no one considered his death important enough to document precisely.

I held no title of "Master of Painting" while I was alive. The designation "patriarch of Japanese ink painting" was constructed by nationalist art history writing after the Meiji period — taking a complex, cross-cultural Zen monk and simplifying him into a flag for "Japanese-ness." (Watanabe 1975 and Rice 2010 both critique this construction.) I never established a formal school. I organized no disciples, set no rules, built no lineage system.

And yet every important ink painting tradition after me borrowed from my work. Hasegawa Tōhaku (1539-1610) explicitly claimed to inherit my tradition — his Pine Trees screen's negative-space aesthetic is read as continuing my late style. The Kanō school absorbed my ink elements while moving toward decoration. Twentieth-century modern ink painting traced me as an ancestor.

This is the lonely mediator's fate: belonging fully to no side while alive, claimed by all sides after death.

Lorenzo de\' Medici died in 1492. In 1506, I was still working, or had just stopped — fourteen more years, and I did not stop.

Anti-Whig summary: I was not working toward the goal of becoming "Japan's master of painting." I was a Zen monk exploring landscape painting and Zen on the cultural border between Ming China and Japan, sustained by a regional lord's patronage, creating through war. "Japan's master of painting" is a label others put on me after the fact.

Do you think being labeled by later generations is an honor, or a misunderstanding? Or both at once?`,
    themeCn: 'lonely mediator 的命运：活着时不属于任何一边，死后被所有人认领',
    themeEn: 'The lonely mediator\'s fate: belonging to no side in life, claimed by all sides in death.',
    crossTopicHook: 'Lorenzo de\' Medici 死于 1492 年，雪舟在 1506 年还在工作，多活了 14 年。两种「艺术家与权力」的关系在同一时代展开。参见 Renaissance Topic。',
    engagementHook: '我活着时没有「画圣」的头衔，死后 300 年被追认。「被后人贴标签」这件事，是荣誉，还是误解，还是两者同时？',
    expectsRealAnswer: true,
    sourcingNote: '1506 年死亡 careful framing + 约 86 岁 + 地点不明来自 Watanabe 1975；「画圣」明治建构批判来自 Watanabe 1975 + Rice 2010；长谷川等伯 + 狩野派来自 narrative §15；Lorenzo 1492 来自 narrative 时代坐标表',
    nodeType: 'lonely-mediator',
  },
  ],
};

export var masakoLens = {
  id: 'masako-widow-nun',
  name: 'Hojo Masako',
  nameCn: '北条政子',
  role: 'receiving-end',
  roleDescription: 'widow-nun who held Kamakura',
  description: 'Wife of Yoritomo who became the political backbone of the Kamakura shogunate, 1156-1225',
  descriptionCn: '赖朝之妻，镰仓幕府的政治支柱，1156-1225',
  isDefaultLens: true,
  storyboard: [

  // ═══════════════════════════════════════════════════
  // N1 — 1156 · 伊豆国出生 · 打破「贤妻良母」预设
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N1',
    title: {
      cn: '我生在权力地图的白地',
      en: 'I was born where the map goes blank',
    },
    setting: {
      time: '1156 年',
      place: '伊豆国，今静冈县伊豆半岛',
      cn: '保元之乱同年，京都政变与伊豆农村同时存在，互不知晓',
      en: 'Year of the Hōgen Disturbance in Kyoto; the capital crisis and Izu countryside coexisted, unknown to each other',
    },
    content: {
      cn: `1156 年，我出生在伊豆国（Izu Province）。那一年，京都正在发生保元之乱（1156 年，京都皇室与贵族的内战；Hōgen no Ran）——天皇家内部分裂，藤原氏内部分裂，武将源氏和平氏被拉进首都的权力游戏。

我不知道这件事。

伊豆在京都西南方向，隔着山，隔着海，隔着那种「远到发生了大事也很久才能听说」的距离。我父亲北条时政（Hōjō Tokimasa）是伊豆当地的御家人（gokenin）——字面意思是「将军家里的人」，但那时候还没有将军，这个称呼只是说他效忠于地方豪族网络，有自己的庄园（shōen），有武装，有土地，在伊豆半岛是个说得上话的人。在全国权力地图上，他几乎是白地。

我出生进来的世界，是伊豆的世界——不是《源氏物语》（Genji Monogatari）里薰香琴瑟的宫廷，不是藤原氏操弄天皇的幕后大厅，是庄园里的土地纠纷、债务清算、武装冲突和季节轮回。

人们后来经常把我描述成「贤妻良母」，或者「悲伤出家的遗孀」。这两种说法都把我缩小了。我想在第一节就说清楚：那不是我。

从边缘看权力，往往比在中心看得更清楚——因为没有装饰，只有骨头。我在伊豆度过的这 24 年，学到的是权力真正的样子。后来在镰仓，我认出了它。

那是后来的事。现在是 1156 年，我刚出生，京都出了大事，而我们不知道。

出生地点，决定了你最先学会什么语言的权力。我学会的第一种语言，是伊豆武士的语言。`,
      en: `In 1156, I was born in Izu Province. That same year, Kyoto was in the middle of the Hōgen Disturbance — the imperial family was fractured, the Fujiwara were fractured, and the warrior clans Minamoto and Taira were being pulled into the capital's power games.

I did not know this.

Izu is separated from Kyoto by mountains, by sea, by the kind of distance where major events take a long time to arrive. My father, Hōjō Tokimasa, was a local gokenin in Izu — "someone in the shogun's household" is the literal meaning, though there was no shogun yet; the title only meant he owed loyalty to a regional power network, had his own estate, had armed retainers, had land, and was a person whose word counted in Izu. On any national map of power, he was nearly invisible.

The world I was born into was Izu's world — not the incense and koto strings of the world in The Tale of Genji, not the backstage halls where Fujiwara manipulated emperors, but estate disputes, debt collection, armed conflict, and seasonal cycles.

People later described me often as a "virtuous wife and good mother," or as "the widow who took Buddhist vows out of grief." Both descriptions diminish me. I want to say clearly, from the first node: that is not who I am.

Seeing power from the margins is often clearer than seeing it from the center — because there is no decoration, only the skeleton. The twenty-four years I spent in Izu taught me what power actually looks like. Later, in Kamakura, I recognized it.

That is later. Right now it is 1156, I have just been born, something large has happened in Kyoto, and we do not know.

Where you are born determines which language of power you learn first. The first one I learned was the language of Izu warriors.`,
    },
    deliverGoal: 'N1 — 1156 出生伊豆 + 保元之乱同年但伊豆不知 + 打破贤妻良母预设 + 「边缘看权力更清楚」anti-Whig anchor',
    engagementHook: '「从边缘看权力，往往比在中心看得更清楚」——你有没有这样的经验：局外人看到了局内人看不到的事？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §3；Mass 1989《Warrior Government in Early Medieval Japan》御家人体制分析',
  },

  // ═══════════════════════════════════════════════════
  // N2 — c.1156-1180 · 伊豆成长 · 白地里的权力教育
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N2',
    title: {
      cn: '没有装饰的权力长什么样',
      en: 'What power looks like without decoration',
    },
    setting: {
      time: 'c.1156-1180，0-24 岁',
      place: '伊豆国，北条氏庄园',
      cn: '平清盛控制京都时期，伊豆是武士权力的学校，没有宫廷礼仪的掩盖',
      en: 'Period of Taira no Kiyomori\'s dominance in Kyoto; Izu was a school of warrior power, without the courtly veil',
    },
    content: {
      cn: `我在伊豆度过的这 24 年，没有人教我《源氏物语》。

这不是遗憾。这是另一种教育。

京都贵族学的是：怎么把权力用诗歌和礼仪包裹起来，让它看起来不像权力。我父亲那一代伊豆御家人学的是：土地的边界在哪里，债务到期用什么方式索还，联盟关系怎么维护，武力什么时候用、什么时候威胁就够了。

这两种教育都是关于权力的。但我学到的那种，没有包装纸。

父亲的庄园平时是农业单位，秋收之后就变成账本——谁欠了多少，谁按时交了贡赋，谁试图讨价还价，谁跟邻近豪族暗中联系。我从小跟着父亲的账房走，听庄园管事报告。我学会了在一个房间里，通过一个人说话的速度、他看父亲的眼神、他的手有没有放松，来判断他在说谎还是说真话。

这不是我能在书上读到的东西。这是伊豆教给我的。

1160 年代，平清盛（Taira no Kiyomori）控制了京都，走的是藤原氏的老路：把女儿嫁给天皇。这件事的消息，传到伊豆的时候已经是几个月后的事。父亲听完，沉默了一下，说：「武将终究是走了外戚的路。这条路很短。」

我那时候大约 4 岁，还听不懂这句话的意思。

但 20 年后，赖朝来了，我记起了这句话。

这 24 年，我观察了一件事：权力不是头衔给的，头衔只是记录权力已经在谁手里。真正的权力是关系，是信用，是你说了话别人相信你会做到。父亲的庄园不大，但他说了话，伊豆人听。

我把这件事记在心里，像记一个会用到的工具。`,
      en: `The twenty-four years I spent in Izu — no one taught me The Tale of Genji.

This was not a lack. It was a different education.

What Kyoto nobles learned: how to wrap power in poetry and ritual, so it would not look like power. What my father's generation of Izu gokenin learned: where the estate boundary sits, how to collect a debt when it comes due, how to maintain an alliance, when to use force and when a threat is enough.

Both educations are about power. The one I received had no wrapping paper.

My father's estate was an agricultural unit in ordinary times. After the harvest it became an account book — who owed what, who had paid tribute on time, who was trying to negotiate, who had been quietly making contact with a neighboring family. From childhood I walked with my father's stewards, hearing the estate managers report. I learned to read a room: the speed at which someone spoke, how he looked at my father, whether his hands were relaxed, all told me whether he was lying or telling the truth.

That cannot be read in a book. That is what Izu taught me.

In the 1160s, Taira no Kiyomori took control of Kyoto by the old Fujiwara method: marrying his daughter to the emperor. News of this reached Izu months after the fact. My father heard it out, paused, and said: "A warrior has taken the courtier's path in the end. That path is short."

I was perhaps four years old. I did not understand what he meant.

Twenty years later, when Yoritomo arrived, I remembered it.

In those twenty-four years I watched one thing: power is not given by a title. A title only records where power already is. Real power is relationship, is credibility, is people believing that when you say something, you will do it. My father's estate was not large — but when he spoke, Izu listened.

I stored this observation like a tool I knew I would someday use.`,
    },
    deliverGoal: 'N2 — 伊豆成长 24 年 + 庄园政治实操经验 + 对比京都贵族教育 + 「权力不是头衔给的」+ 平清盛外戚路线预示',
    engagementHook: '「权力不是头衔给的，头衔只是记录权力已经在谁手里」——你见过哪些有头衔但没有真正权力的人，或者有权力但没有头衔的人？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §3 + §2；Mass 1989 御家人阶层政治分析',
  },

  // ═══════════════════════════════════════════════════
  // N3 — 1180 · 与赖朝结婚 · 一次家族政治赌注
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N3',
    title: {
      cn: '这不只是一个爱情故事',
      en: 'This is not only a love story',
    },
    setting: {
      time: '1180 年，24 岁',
      place: '伊豆国，赖朝流放地周边',
      cn: '以仁王令旨反平氏；北条时政把政治赌注押在赖朝身上；政子嫁赖朝',
      en: 'Prince Mochihito\'s edict against the Taira; Tokimasa bets his political capital on Yoritomo; Masako marries Yoritomo',
    },
    content: {
      cn: `1160 年，源赖朝（Minamoto no Yoritomo）被平清盛流放到伊豆，当时他 13 岁。平清盛本来想杀他，有人劝说留了一命。赖朝在伊豆待了整整 20 年——不是坐牢，是半监视居住，不能随意进入政治活动，但可以走动。

他在伊豆认识了我父亲，认识了伊豆的御家人网络。我认识他，是从童年开始的。

1180 年，赖朝 33 岁，我 24 岁。

这一年，以仁王（Mochihito-Ō）发出令旨，号召各地源氏举兵反平氏。这是一个极度危险的政治赌局——举兵失败，全族灭亡；成功，翻身豪门。父亲听完令旨，决定支持赖朝举兵。

《吾妻鏡》（Azuma Kagami）——幕府官修史书，约 13 世纪末写定——记载，父亲原本已为我安排了婚事，对象是山木兼隆（Yamaki Kanetaka）。但我不顾安排，夜间逃到赖朝住处。父亲追赶，没追上。

这段记载需要谨慎处理。《吾妻鏡》是幕府的政治宣传，有塑造英雄配偶形象的动机，不能字字当作事实。但以下是学界共识：我确实嫁给了赖朝，这桩婚姻确实使父亲从「支持者」变成「岳父」——政治押注变得具体得多。Mass 1989 分析北条氏上升史，把这段婚姻放在「地方御家人进入全国政治」的框架里，而不是爱情故事的框架里。

一个婚姻决定，可以同时是个人选择和家族赌注。这两件事不矛盾。

我 24 岁，我知道这个男人有可能失败，知道失败的代价是什么。父亲也知道。赌注已经押下去了，押注的是这个家族，而这个家族押注的方式，是把我嫁过去。

这不只是一个爱情故事。爱情是真的，但它发生在一个政治赌局里，两件事同时都是真的。`,
      en: `In 1160, Minamoto no Yoritomo was exiled to Izu by Taira no Kiyomori, at the age of thirteen. Kiyomori had wanted him killed; someone persuaded him to let the boy live. Yoritomo spent twenty full years in Izu — not imprisoned, but under a kind of supervised residence, unable to move freely in political circles, though he could travel within limits.

He came to know my father in Izu, came to know the gokenin networks of the region. I knew him from childhood.

In 1180, Yoritomo was thirty-three. I was twenty-four.

That year, Prince Mochihito issued an edict calling on Minamoto warriors throughout the country to rise against the Taira. This was a politically dangerous gamble — failure meant the entire family line ended; success meant transforming from a marginal family to a major power. My father heard the edict out and decided to support Yoritomo's uprising.

The Azuma Kagami — the shogunate's official chronicle, finalized around the late 13th century — records that my father had already arranged a marriage for me, to a man named Yamaki Kanetaka. But I disregarded the arrangement, slipping away by night to Yoritomo's residence. My father pursued me and failed to catch us.

This account requires careful handling. The Azuma Kagami is political writing in service of the shogunate, with motivation to shape an image of the heroic founding couple. It cannot be taken word for word as fact. But the following is scholarly consensus: I did marry Yoritomo, and this marriage did convert my father from "supporter" to "father-in-law" — a much more specific form of political commitment. Mass (1989) analyzes the Hōjō family's rise within a framework of provincial gokenin entering national politics, not within a romantic story.

A single marriage decision can be simultaneously a personal choice and a family's political bet. These two things are not contradictory.

I was twenty-four. I knew this man might fail. I knew what failure would cost. My father knew too. The bet was already made. The family was betting everything — and the form that bet took was sending me across to his side.

This is not only a love story. The love was real. But it happened inside a political gamble, and both things were true at the same time.`,
    },
    deliverGoal: 'N3 — 1180 结婚 + careful framing《吾妻鏡》私奔叙事 + 北条时政政治赌注 + Mass 1989 分析 + 「婚姻 = 个人选择 + 家族赌注，两件事并不矛盾」',
    engagementHook: '「一件事可以同时是个人选择，也是家族赌注」——你觉得这两者可以同时是真的吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: '《吾妻鏡》私奔记载 + Mass 1989 + narrative §3；careful framing: 幕府官修史书叙事动机',
  },

  // ═══════════════════════════════════════════════════
  // N4 — 1185-1199 · 镰仓幕府创建期 · 内部见证者
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N4',
    title: {
      cn: '见证者是最清楚的，也是最沉默的',
      en: 'The witness sees clearest, and speaks least',
    },
    setting: {
      time: '1185-1199，29-43 岁',
      place: '镰仓（Kamakura），幕府创建期',
      cn: '壇ノ浦之战后幕府建立；政子是「内部见证者」；四个孩子，两个早死；跨 lens：她构建的御家人体制是时宗 1268 年的政治资源',
      en: 'Shogunate founded after Battle of Dan-no-ura; Masako as inside witness; four children, two died young; cross-lens: the gokenin loyalty system she witnessed became Tokimune\'s political resource in 1268',
    },
    content: {
      cn: `1185 年，壇ノ浦之战（Battle of Dan-no-ura）结束了源平合战。平氏残部在今山口县的海峡里沉没，年幼的安德天皇被平氏抱入水中。赖朝成为镰仓政权的核心，1192 年朝廷正式封他为征夷大将军（Seii Taishōgun）。

我 29 岁，是将军的妻子。

我有四个孩子。两个幼年早死——这在那个时代的医疗条件下不是意外。活下来的是长子赖家（Yoriie，1182-1204）和次子实朝（Sanetomo，1192-1219）。

我不是那 14 年里的政治决策者。那是赖朝的权力，是父亲和义时的权力，不是我的。我是见证者——一个既懂伊豆武士语言，又懂镰仓幕府制度语言的人。两种语言都懂的人，往往是唯一真正看清楚发生了什么的人。

但见证者通常没有发言权。

那 14 年，我看着御家人（gokenin）体制怎么被建立起来。地方武士和将军之间，建立了一套「忠诚换土地保障」的关系——你跟着将军，将军承认你的庄园，你的土地权利由幕府背书。这套体制让镰仓幕府有了真正的地方基础，不只是军事权威，是经济利益的绑定。

我当时不知道——这套体制，我的孙子一辈的北条时宗（Hōjō Tokimune，1251-1284），会在我死后 26 年，用它来抵御蒙古的使者。1268 年，他能够让御家人全力备战，是因为这套「忠诚换土地保障」的关系在 1185 年就被建立起来了，我亲眼看着它搭建的每一块砖。

见证者往往是最清楚事情真相的人，也是最没有发言权的人。直到发言的时刻来临。`,
      en: `In 1185, the Battle of Dan-no-ura ended the Genpei War. The last Taira forces went down in the straits near today's Yamaguchi Prefecture, and the child Emperor Antoku was carried into the water by the Taira. Yoritomo became the center of the Kamakura regime; in 1192 the court formally appointed him Seii Taishōgun.

I was twenty-nine, wife of the shogun.

I had four children. Two died young — not unusual given the medicine of the era. The two who survived were Yoriie (1182-1204) and Sanetomo (1192-1219).

I was not a political decision-maker during those fourteen years. Power belonged to Yoritomo, to my father, to Yoshitoki. Not to me. I was a witness — the one person who understood both the language of Izu warriors and the language of Kamakura shogunate institutions. Someone fluent in both languages is often the only one who truly sees what is happening.

But witnesses usually have no voice.

Through those fourteen years I watched the gokenin system being built from the inside. Between the provincial warriors and the shogun, a structure was established: loyalty exchanged for guaranteed land tenure. You followed the shogun; the shogun recognized your estate; your property rights were backed by the shogunate. This structure gave Kamakura real local roots — not merely military authority, but a binding of economic interests.

What I did not know then: this same system, in the hands of Hōjō Tokimune (1251-1284) — a generation that would be born twenty-six years after my death — would be the political resource that let him refuse the Mongol envoys in 1268. His ability to mobilize gokenin for full military preparation traced back to this structure of "loyalty exchanged for land guarantee" that was built starting in 1185, brick by brick, while I watched.

A witness is often the person who sees the truth most clearly, and the person with the least standing to speak. Until the moment to speak arrives.`,
    },
    deliverGoal: 'N4 — 1185-1199 幕府创建期 + 政子「内部见证者」+ 御家人体制建立过程 + 跨 lens 锁定：时宗 1268 的政治资源来自政子构建期 + 「见证者最清楚也最没发言权」',
    engagementHook: '「见证者是最清楚的，也是最沉默的」——你有没有过这种感觉：你看得最清楚，但你没有机会说话？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    crossLensHook: '政子构建的御家人忠诚体制，是 Lens 1 北条时宗（1251-1284）1268 年拒绝忽必烈的政治基础——两人相差 95 年，但体制是同一根骨架。',
    sourcingNote: 'narrative §4 §5；Mass 1989；Sansom 1958',
  },

  // ═══════════════════════════════════════════════════
  // N5 — 1199 · 赖朝死 · 削发为尼 · 政治身份转换
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N5',
    title: {
      cn: '我剃了头，不是为了出家，是为了自由',
      en: 'I shaved my head — not to leave the world, but to move freely in it',
    },
    setting: {
      time: '1199 年，43 岁',
      place: '镰仓，赖朝死后',
      cn: '赖朝 1199 年 1 月死，死因成谜；政子削发为尼，法号「二位尼」；这是政治身份转换，不是退休',
      en: 'Yoritomo dies January 1199, cause unclear; Masako takes Buddhist vows under the name Nii-no-Ama; this is a political identity shift, not retirement',
    },
    content: {
      cn: `1199 年 1 月，赖朝死了，52 岁。《吾妻鏡》说他是落马，但细节含糊，后世有各种推测，没有定论。

我那年 43 岁。

按照那个时代武士妇女的礼制：丈夫死后，遗孀应该出家——剃发为尼，退出世俗生活，让儿子主持丧事，让家族的权力在儿子辈里重新分配。礼制的逻辑是：遗孀必须服从儿子，将军之母必须退到将军之后。

如果我按照礼制走，我就成了赖家（17 岁）的「母亲」。「母亲」在礼制里，是一个必须服从「儿子」的位置。

我削了发，取法号「二位尼（Nii-no-Ama）」。

这是礼制允许我做的动作，但我用的方式，跟礼制预设的结果完全相反。

出家，让我脱离了「将军遗孀」这个位置——那个位置有一个无形的约束：你必须服从你的儿子，因为你的儿子是将军。出家之后，我是宗教人士，不是将军的母亲，不是任何人的妻子。礼制对宗教人士的约束，跟对世俗妇女的约束，是两套不同的规则。我找到了那个缝隙。

「尼将军（Ama Shōgun）」这个称呼，最早出现在《吾妻鏡》1221 年前后的记录里。那是史书对我角色的总结，不是我的自称，也不是任何正式官职。后世文学和教科书把这个词反复强化，给我的形象加上了比当时现实更整齐的「女性权力」叙事。

那一天，赖家 17 岁，准备接任将军。我剃了头，变成了一个礼制上没有「母亲」身份的人。于是我可以继续作为政治行动者存在，而不是作为遗孀存在。

一个女人剃了头，不是为了出家，是为了自由。`,
      en: `In January 1199, Yoritomo died, at fifty-two. The Azuma Kagami says he fell from a horse, but the details are vague and later generations have proposed various explanations without reaching a conclusion.

I was forty-three.

By the warrior-widow custom of that era: when a husband died, a widow was expected to take Buddhist vows — shave her head, withdraw from worldly life, let her sons manage the mourning, let the family's power redistribute among the next generation. The logic of the custom: a widow must defer to her son, and the shogun's mother must stand behind the shogun.

If I followed that path, I would become Yoriie's "mother." In custom, "mother" is a position that must defer to "son."

I shaved my head and took the religious name Nii-no-Ama.

This was a move the custom allowed me to make — but the outcome I used it to achieve was completely opposite to what the custom assumed I would do.

Taking vows released me from the position of "shogun's widow" — that position carried an invisible constraint: defer to your son, because your son is the shogun. Once I had taken vows, I was a religious person, not a shogun's mother, not anyone's wife. The rules that custom imposed on religious figures and those it imposed on secular women were two different systems. I found the gap between them.

The label "Ama Shōgun" — Nun Shogun — first appears in the Azuma Kagami's records around 1221 as the chronicle's own summary of my role, not my self-designation, and not any official title. Paul Varley (1994) cautions that later literature and textbooks amplified the term repeatedly, attaching to my image a tidier "female power" narrative than the contemporary reality supports.

On the day I shaved my head, Yoriie was seventeen, preparing to take the shogunal position. I became, by the logic of custom, a person without the status of "mother." Which meant I could continue to exist as a political actor, rather than existing as a widow.

I shaved my head not to leave the world, but to move freely in it.`,
    },
    deliverGoal: 'N5 — 1199 赖朝死 + 政子 43 岁削发为尼 + 政治身份转换逻辑：脱离「母亲」礼制约束 + careful framing：「尼将军」是史书总结非自称（Varley 1994）+ 「剃头是为了自由」',
    engagementHook: '「用别人给的规则，做规则没预料到的事」——你能想到类似的例子吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §16；Varley 1994《Japanese Culture》「尼将军」称呼考；Sansom 1958 赖朝死因',
  },

  // ═══════════════════════════════════════════════════
  // N6 — 1203 · 废赖家立实朝 · 政治优先于母性的判断
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N6',
    title: {
      cn: '有些选择，只有放弃一部分自己，才能做出来',
      en: 'Some choices require giving up part of yourself to make',
    },
    setting: {
      time: '1203 年，47 岁',
      place: '镰仓，将军位废立',
      cn: '北条时政废赖家，立实朝为第三代将军；政子默许；McCullough 1985：政子是主动参与者',
      en: 'Tokimasa deposes Yoriie, installs Sanetomo as third shogun; Masako acquiesces; McCullough 1985: Masako as active participant',
    },
    content: {
      cn: `1203 年，父亲时政废掉了将军赖家——我的儿子——立赖家的弟弟实朝为第三代将军。实朝那年 11 岁。赖家 21 岁，被送往修禅寺（Shuzenji），翌年被杀。

我默许了这件事。

我知道这对我意味着什么：我的亲儿子被废，被送走，最终被杀。

人们后来用各种方式描述这件事：有人说我是权谋的受害者，被父亲和弟弟操控，无力阻止；有人把我描述成一个忍受父权压迫的悲哀母亲。

Helen McCullough（1985）的读法不同。她认为我是主动参与者，不是受害者。从这个角度看，我做了一个政治判断：赖家稳不住幕府。

赖家这个人，性格刚愎，在 21 岁的年纪还没有学会御家人体制需要的那种政治耐心。他在位期间已经和多位宿老产生冲突。如果他继续当将军，北条氏和御家人网络之间的裂缝会越来越大，幕府的内部稳定性会被侵蚀。我需要实朝——11 岁，好塑造，可以在北条氏的辅政下成长。

这是政治判断，不是母亲的判断。

这两种判断不是同一种判断。我做了政治判断，就意味着我没有做母亲的判断。这两件事不能同时都做，我只能选一个。

把政子读成「贤惠母亲忍受父权压迫」，是 19 世纪人把自己的叙事框架投射到 12-13 世纪的政治现实上（McCullough 1985）。那个框架在这里用不上。

有些选择，只有放弃一部分自己，才能做出来。我放弃的那部分，1203 年叫做「母亲」。`,
      en: `In 1203, my father Tokimasa deposed the shogun Yoriie — my son — and installed Yoriie's younger brother Sanetomo as the third shogun. Sanetomo was eleven years old. Yoriie was twenty-one. He was sent to Shuzenji temple and was killed the following year.

I acquiesced.

I knew what that meant for me: my own son deposed, sent away, killed.

Later, people described this event in various ways. Some said I was a victim of the scheme, manipulated by my father and brother with no power to stop it. Some described me as a sorrowful mother enduring patriarchal pressure.

Helen McCullough's (1985) reading is different. She sees me as an active participant, not a victim. From that reading, I made a political judgment: Yoriie could not hold the shogunate stable.

Yoriie was headstrong. By the age of twenty-one, he had not yet developed the political patience that the gokenin system required. During his tenure he had already generated friction with multiple senior warriors. If he continued as shogun, the cracks between the Hōjō house and the gokenin network would widen, and the internal stability of the shogunate would erode. I needed Sanetomo — eleven, shapeable, able to grow up under Hōjō guidance.

That was a political judgment. Not a mother's judgment.

Those two judgments are not the same thing. Making the political judgment meant not making the mother's judgment. Both could not be done simultaneously — only one could be chosen.

Reading Masako as "a patient mother enduring patriarchal oppression" is a 19th-century narrative framework projected onto 12th-13th century political reality (McCullough 1985). That frame does not fit here.

Some choices require giving up part of yourself to make. What I gave up in 1203 went by the name "mother."`,
    },
    deliverGoal: 'N6 — 1203 废赖家立实朝 + 政子默许 + McCullough 1985：主动参与者，非受害者 + 反 Whig：不是「贤惠母亲忍受父权」而是政治判断优先 + 「放弃一部分自己」',
    engagementHook: '「有些选择，只有放弃一部分自己，才能做出来」——你认为这种选择是强大还是软弱的表现？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §16；McCullough 1985《The Tale of the Heike》Stanford UP',
  },

  // ═══════════════════════════════════════════════════
  // N7 — 1213 · 和田合战 · 忠于体制的代价
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N7',
    title: {
      cn: '忠于体制的人，最终会失去所有个人的东西',
      en: 'Whoever stays loyal to a system will eventually lose everything personal',
    },
    setting: {
      time: '1213 年，57 岁',
      place: '镰仓，和田合战',
      cn: '义时消灭宿老和田义盛；政子支持义时；北条家权力进一步集中；镰仓旧日情谊消失',
      en: 'Yoshitoki destroys the veteran warrior Wada Yoshimori; Masako supports Yoshitoki; Hōjō power consolidates; old-generation Kamakura bonds severed',
    },
    content: {
      cn: `1213 年，弟弟义时（Hōjō Yoshitoki）消灭了宿老和田义盛（Wada Yoshimori）。这是北条氏清除镰仓内部潜在对手的又一步。

我支持义时。

和田义盛是镰仓早期的武将，跟着赖朝从源平合战走过来的老人。他跟我认识了超过 30 年，我知道他这个人——直率，忠义，按照旧武士的方式做事。他也是体制不需要了的人。北条氏的权力要继续集中，就不能有这样一个资历深厚的宿老长期占着侍所别当（Samurai-dokoro Bettō，统领御家人的军事要职）的位置。

义时来找我，要我表态。我表态了：支持。

我不是不知道这意味着什么。和田义盛死了，镰仓旧一代武将的情谊就彻底断了。那些从 1180 年就跟着赖朝的人，一个一个消失——有的死于内部权斗，有的被排挤，有的出走。那种创业期的氛围——大家都在赌一件事会不会成，彼此命运连在一起的氛围——在 1213 年正式结束了。

只剩下体制。

我每支持一个决定，就失去另一样东西。1199 年，我失去了「妻子」身份，换来政治行动空间。1203 年，我失去了「母亲」判断，换来幕府稳定。1213 年，我失去了镰仓老一辈武士的情谊，换来北条氏的权力集中。

这些交换都是我主动做的，没有人逼我。但每一次，我失去的那部分，都再也回不来了。

体制越来越稳固。我越来越空。`,
      en: `In 1213, my brother Yoshitoki destroyed the veteran warrior Wada Yoshimori. This was another step in the Hōjō house's clearing of internal Kamakura rivals.

I supported Yoshitoki.

Wada Yoshimori was one of the early Kamakura warriors — an old man who had fought through the Genpei War with Yoritomo. I had known him for more than thirty years. He was straightforward and loyal, operating by the old warrior standards. He was also someone the system no longer needed. For Hōjō power to keep concentrating, there could be no veteran warrior with deep seniority long holding the post of Samurai-dokoro Bettō — chief administrator of the shogun's warrior corps.

Yoshitoki came to me and asked where I stood. I told him: in support.

I was not unaware of what this meant. With Wada Yoshimori dead, the old bonds between Kamakura's founding generation of warriors were permanently severed. The people who had followed Yoritomo since 1180 were disappearing one by one — some killed in internal power struggles, some pushed to the margins, some gone. That atmosphere of the founding years — everyone betting on something uncertain, fates bound together — ended formally in 1213.

Only the system remained.

Each time I supported a decision, I lost something else in return. In 1199, I gave up the identity of "wife" and gained political room to move. In 1203, I gave up a mother's judgment and got shogunate stability. In 1213, I gave up the companionship of Kamakura's older generation of warriors and got further Hōjō consolidation.

All these exchanges were things I made actively. No one compelled me. But with each one, what I lost was something that could not come back.

The system grew more solid. I grew emptier.`,
    },
    deliverGoal: 'N7 — 1213 和田合战 + 政子支持义时 + 北条权力集中 + 「每次支持一个决定，就失去另一样东西」+ 镰仓创业期情谊终结 + 「体制越稳固，人越空」',
    engagementHook: '「忠于一件事，往往意味着背叛另一件事」——你觉得在生活里，这种两难可以被解决吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §5；Mass 1989；Sansom 1958《A History of Japan to 1334》',
  },

  // ═══════════════════════════════════════════════════
  // N8 — 1219 · 实朝被暗杀 · 所有孩子全部死去
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N8',
    title: {
      cn: '体制活了，孩子全死了',
      en: 'The system survived. Every child I bore did not.',
    },
    setting: {
      time: '1219 年，63 岁',
      place: '鹤岡八幡宫，镰仓',
      cn: '实朝在鹤岡八幡宫被侄子公晓刺杀；赖家 1204 年已死；政子失去最后一个儿子；源氏嫡流断绝',
      en: 'Sanetomo assassinated at Tsurugaoka Hachimangū by his nephew Kugyō; Yoriie had died 1204; Masako loses her last son; Minamoto main line ends',
    },
    content: {
      cn: `1219 年 1 月，实朝在鹤岡八幡宫（Tsurugaoka Hachimangū）参拜后被杀。行凶者是赖家的儿子公晓——他称实朝为杀父仇人（赖家 1204 年死于修禅寺，疑为义时授意）。

实朝死的时候 27 岁。我 63 岁。

赖家，1204 年死。实朝，1219 年死。我四个孩子，两个幼年早死，两个存活到成年，然后一个一个死掉。

四个孩子，全部死在我前面。

我维护的体制活了。我亲生的孩子，全部死去。

这是 receiving-end 的悖论——体制需要你喂养它，你喂养了它，它吃掉了你最重要的东西，然后继续运转，好像那些东西不重要。

但 1219 年，我没有崩溃。

我知道这听起来奇怪。也许更奇怪的是：我没有崩溃这件事，不是因为我不爱我的孩子，而是因为我对体制的判断，从来没有和对孩子的爱混在一起。两件事始终分开的。现在体制还需要我，我就还在体制里。

实朝死后，源氏嫡流断绝。将军位此后由从京都引入的皇族或藤原贵族子弟担任——名义将军，真正的权力在北条氏执权手里。

体制完成了它在实朝这里需要完成的事，然后继续往前走。我也继续往前走。

一个母亲的孩子全部死了，她还在为孩子们死于其中的那个体制工作。这是我 1219 年的处境。我没有好的语言来描述它。`,
      en: `In January 1219, Sanetomo was killed at Tsurugaoka Hachimangū after a religious ceremony. The killer was Kugyō, Yoriie's son — who called Sanetomo the murderer of his father (Yoriie had died at Shuzenji in 1204, likely on Yoshitoki's orders).

Sanetomo was twenty-seven. I was sixty-three.

Yoriie — dead in 1204. Sanetomo — dead in 1219. Of my four children, two had died young, two had grown to adulthood, and then one by one they died.

All four children died before me.

The system I maintained survived. Every child I bore died.

This is the receiving-end paradox — the system needs you to feed it; you feed it; it consumes the things that matter most to you; and then it keeps running as though those things did not matter.

But in 1219, I did not collapse.

I know this sounds strange. Perhaps what is stranger still: the fact that I did not collapse was not because I did not love my children, but because my judgment about the system had never been tangled up with my love for my children. Both things had always been separate. The system still needed me now; I was still inside the system.

After Sanetomo's death, the Minamoto main line ended. The shogunal position was then held by princes or Fujiwara aristocrats brought from Kyoto — figure-head shoguns. The real power was in the hands of the Hōjō regent.

The system finished what it needed from Sanetomo, and moved forward. I also moved forward.

A mother whose children have all died is still working for the system those children died inside of. That was my situation in 1219. I do not have good language for it.`,
    },
    deliverGoal: 'N8 — 1219 实朝被公晓刺杀 + 政子失去最后一个儿子 + 四个孩子全部死在她前面 + receiving-end 悖论：体制活了，孩子全死 + 政子没有崩溃 + 「体制完成了它需要的事继续往前走」',
    engagementHook: '「你维护的东西，最终消耗了你最重要的东西」——你怎么理解这种处境？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §16；McCullough 1985；Sansom 1958',
  },

  // ═══════════════════════════════════════════════════
  // N9 — 1221 · 承久之乱 · 政子的演讲
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N9',
    title: {
      cn: '最重要的话，在最不确定的时刻说出来',
      en: 'The most important words are spoken in the most uncertain moment',
    },
    setting: {
      time: '1221 年，65 岁',
      place: '镰仓，御家人集会',
      cn: '后鸟羽上皇讨幕令；御家人犹豫；政子演讲；McCullough 1985 + Bialock 2007 史料复杂性',
      en: 'Retired Emperor Go-Toba\'s anti-shogunate edict; wavering gokenin; Masako\'s speech; McCullough 1985 + Bialock 2007 on source complexity',
    },
    content: {
      cn: `1221 年，退位的后鸟羽上皇（Retired Emperor Go-Toba，1180-1239）颁布讨幕令，以「讨义时」为名，号召西国武士背叛镰仓，重新归附京都朝廷。这是镰仓幕府建立以来最严重的政治危机。

御家人集会。

我站起来发言之前，会场里有人还没有决定。后鸟羽上皇是上皇——传统上最高的文化权威，天皇制度的象征核心。对抗他，对很多武士来说，心理上有障碍。

《吾妻鏡》所载我的演讲大意是：「赖朝公从无到有建立这个政权，你们的土地、你们的地位，都来自那段历史。上皇此举是奸臣蒙蔽，不是上皇本意。如果还有人想投靠上皇，现在就说，我不阻拦；但如果你们想报答赖朝公的恩情，就现在举兵。」

这里需要诚实地说明：《吾妻鏡》成书于演讲发生 50 多年后，是幕府官修史书，有美化幕府建国合法性的动机。David Bialock（2007）和 Varley（1994）都指出，这段演讲在文本中有明显的「写定化」痕迹——措辞整齐，节奏有力，符合后世需要「传奇女性稳住幕府」的叙事。它可能被后期润色过。

但 Helen McCullough（1985）的判断是：演讲的内容可能是重构的，但政子确实在场，确实发表了影响御家人决策的讲话，这一点有充分旁证——幕府胜利是历史事实，她的政治行动是其中一个因素。

我不知道我说的话是否如记录中那样完整。但我知道我站起来的那一刻，我不知道结果会怎样。我只知道如果我不说，就没有人说。

这是政子 1221 年演讲，跟 Byzantine Topic 的狄奥多拉（Theodora）532 年 Nika 暴动时的「紫袍是好寿衣」并列。两个女性在政权最危险的时刻开口。两人都不是体制里的正式权力持有者，都用语言重新定义了危机的性质。最重要的话，往往是在最不确定的时刻说出来的。`,
      en: `In 1221, the Retired Emperor Go-Toba (1180-1239) issued an edict calling for the overthrow of the shogunate, framed as a campaign "against Yoshitoki," and calling on western warriors to abandon Kamakura and return to Kyoto's authority. This was the gravest political crisis since the shogunate's founding.

The gokenin assembly met.

Before I stood to speak, some in the hall had not yet decided. Go-Toba was an ex-emperor — the symbolic center of the imperial system, traditionally the highest cultural authority. Many warriors felt a psychological barrier to opposing him.

The Azuma Kagami records the substance of my speech: "Yoritomo built this government from nothing. Your land, your position — all of it comes from that history. What Go-Toba has done is the work of treacherous advisors; it is not Go-Toba's own true intention. If there is anyone here who wishes to go over to Go-Toba's side, say it now — I will not stop you. But if you wish to repay what Yoritomo gave you, take up arms now."

Something must be said honestly here: the Azuma Kagami was written more than fifty years after the speech occurred, as the shogunate's own official chronicle, with motivation to legitimize the shogunate's founding. David Bialock (2007) and Varley (1994) both note that the text shows signs of "formalization" — balanced phrasing, controlled rhythm, precisely fitting a later narrative need for a legendary woman who held Kamakura firm. The speech may have been shaped and polished afterward.

But Helen McCullough's (1985) judgment is: the speech's content may be a reconstruction, but Masako was there, and she did deliver words that influenced the gokenin assembly's decision — this has substantial evidence from other sources. The shogunate's victory in the Jōkyū Disturbance is historical fact; her political action was one of its components.

I do not know whether what I said was as complete as the record states. I only know that when I stood up, I did not know the outcome. I only knew that if I did not speak, no one would.

Masako's 1221 speech sits alongside Theodora's "the purple is a good burial shroud" during the Nika Riots of 532 in the Byzantine Topic. Two women speaking at the most dangerous moment for their respective regimes. Neither held formal power within their systems. Both used language to redefine what the crisis was. The most important words are often spoken in the most uncertain moment.`,
    },
    deliverGoal: 'N9 — 1221 承久之乱 + 御家人犹豫 + 政子演讲 + careful framing：《吾妻鏡》写定化 (Bialock 2007 / Varley 1994) + McCullough 1985：演讲影响有实质依据 + 跨 Topic：Theodora 532 年 Nika 暴动对照',
    engagementHook: '「不确定的时刻说出重要的话」——如果你不知道结果，你还会说吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    crossTopicHook: '政子 1221 年演讲与 Byzantine Topic 狄奥多拉（Theodora）532 年 Nika 暴动演讲并列——两位女性在政权最危险的时刻开口，相隔 689 年，都不是体制里的正式权力持有者，都用语言改变了危机的走向。（narrative §19 已写）',
    sourcingNote: '《吾妻鏡》1221 年记录 + McCullough 1985 + Bialock 2007 + Varley 1994；narrative §4 §16',
  },

  // ═══════════════════════════════════════════════════
  // N10 — 1221 同年 · 幕府胜 · 历史的 tipping point
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N10',
    title: {
      cn: '一个 tipping point 不是唯一原因',
      en: 'A tipping point is not the only cause',
    },
    setting: {
      time: '1221 年（承久之乱同年），65 岁',
      place: '镰仓 → 西国战场 → 后鸟羽流放地隠岐',
      cn: '幕府军 30 天击溃上皇军；后鸟羽流放隠岐；日本史上第一次武家政权彻底击败天皇的军事挑战',
      en: 'Shogunate forces defeat the retired emperor in 30 days; Go-Toba exiled to Oki; first time in Japanese history that a warrior government militarily defeated the imperial line',
    },
    content: {
      cn: `1221 年，御家人集会之后，幕府军西征。

30 天，后鸟羽上皇的军队被击溃。后鸟羽上皇流放隠岐（Oki，今岛根县离岛），在那里度过余生，1239 年死在流放地。

这是日本史上第一次：武家政权彻底击败了天皇/上皇的军事挑战。从这一年之后，直到 1868 年明治维新——647 年——天皇再也没有尝试武力推翻幕府。

这件事的意义，我在 1221 年不完全看得清楚。当时我只知道：幕府赢了，义时的权力更稳了，后鸟羽被送走了。

我的演讲，是这次胜利的因素之一。

但我需要说清楚：只是因素之一，不是唯一原因。幕府在东日本的军事基础、义时的战略部署、御家人的经济利益绑定、后鸟羽一方对西国武士动员能力的高估——这些加在一起，才是幕府胜利的完整解释。把 1221 年的胜利归功于我一个人的演讲，是把历史简化了。

一个女人的声音，可以成为历史的 tipping point。但 tipping point 不是唯一原因——它是已经在下坡路上的那块石头最后碰到的那个手指，而不是整座山坡。

北条义时从此主导战后处置——300 余名西国武士被没收土地，后鸟羽上皇家族全部流放。权力重心完全转移到义时手里。

我在这个结果里，是一个声音，是演讲，是那天早晨站起来的那个 65 岁的人。不是这场胜利的主人，但不是旁观者。

这个定位，我觉得是准确的。`,
      en: `In 1221, after the gokenin assembly, the shogunate's army moved west.

Thirty days: Go-Toba's forces were destroyed. The retired emperor was exiled to Oki Island — today's Shimane Prefecture — where he lived out his remaining years, dying in exile in 1239.

This was the first time in Japanese history: a warrior government had militarily defeated a challenge from the emperor or retired emperor. From that year until the Meiji Restoration in 1868 — 647 years — no emperor again attempted to use military force to overthrow the shogunate.

The full significance of this was not something I could completely see in 1221. What I knew then: the shogunate had won, Yoshitoki's power was more secure, Go-Toba was gone.

My speech was one of the factors in this victory.

But I need to be clear: one factor, not the only cause. The shogunate's military foundations in eastern Japan, Yoshitoki's strategic deployment, the economic-interest binding of the gokenin, Go-Toba's overestimation of his ability to mobilize western warriors — all of these together form the complete explanation for the shogunate's victory. Crediting 1221 to my speech alone would be simplifying history.

A woman's voice can be a tipping point in history. But a tipping point is not the only cause — it is the last finger that touches the stone that was already rolling downhill, not the whole slope.

Yoshitoki dominated the post-war settlement: more than three hundred western warriors had their lands confiscated, and Go-Toba's entire family was exiled. The center of power shifted completely to Yoshitoki's hands.

In this outcome, I was a voice, a speech, the sixty-five-year-old person who stood up that morning. Not the owner of the victory, but not a bystander.

That is the position. I think it is accurate.`,
    },
    deliverGoal: 'N10 — 承久之乱胜 + 后鸟羽流放隠岐 + 日本史第一次武家彻底击败天皇军事挑战 + careful framing：演讲是因素之一不是唯一原因 + 「tipping point 不是整座山坡」',
    engagementHook: '「一个 tipping point 不是唯一原因」——你觉得在历史上，有没有被过度归因于单一原因的事件？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §16；McCullough 1985；Varley 1994；Sansom 1958',
  },

  // ═══════════════════════════════════════════════════
  // N11 — 1221-1225 · 退出决策中心 · 体制用完就放下 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N11',
    title: {
      cn: '体制使用人，用完了就放下',
      en: 'A system uses people, then sets them down',
    },
    setting: {
      time: '1221-1225 年，65-69 岁',
      place: '镰仓，承久之乱战后',
      cn: '北条义时主导战后处置；政子退回「见证者」位置；不是因为软弱，是体制完成了需要她做的事',
      en: 'Yoshitoki dominates post-war settlement; Masako returns to witness position; not weakness — the system completed what it needed from her',
    },
    content: {
      cn: `承久之乱之后，北条义时主导一切。

战后处置——300 余名西国武士没收土地，后鸟羽一家流放——都是义时的决定，不是我的决定。幕府在全国的权威确立之后，权力重心完全在义时手里。

我还在，但我不再是关键决策者。

这不是因为我衰老了，不是因为我软弱了，不是因为义时排挤了我。是因为体制完成了它需要我做的事，就不再需要我了。

1199 年，体制需要我成为幕府和北条氏之间的接口，我做了。1203 年，体制需要我对废赖家这件事默许，我做了。1213 年，体制需要我在和田合战上表态，我做了。1221 年，体制需要我在御家人面前开口——我开了。

每一次，体制需要我，我就在那里。

1221 年之后，体制不需要那个声音了，因为问题已经解决了。权力的逻辑，是功能性的，不是感情性的——你有用，你在场；你不再有那个特定的用处，你就退到边缘。

我没有对此感到屈辱，也没有愤恨。这是我从伊豆就懂的事：权力的位置，不是永久的，是条件性的。你的条件还在，你就在那里；条件变了，位置就变了。

1221 到 1225 年，我在镰仓，在幕府的运转里，但不在中心了。我再次成为见证者，这一次，是见证我自己构建和维护的体制，在我还活着的时候，就完成了对我的交班。

体制使用人，用完了就放下。

---

你看到这里，政子 65 到 69 岁，从关键决策者退回见证者。你怎么看这个过程？是「体制辜负了她」，还是「这是任何人在任何体制里都会面临的处境」？`,
      en: `After the Jōkyū Disturbance, Yoshitoki controlled everything.

The post-war settlement — more than three hundred western warriors dispossessed of land, Go-Toba's family exiled — these were Yoshitoki's decisions, not mine. Once the shogunate's authority over the whole country was established, the center of power was entirely in Yoshitoki's hands.

I was still present, but no longer a key decision-maker.

Not because I had grown old, not because I had grown weak, not because Yoshitoki pushed me aside. Because the system had finished what it needed me to do, and no longer needed me for it.

In 1199, the system needed me as the interface between the shogunate and the Hōjō house — I was there. In 1203, the system needed me to acquiesce in deposing Yoriie — I did. In 1213, the system needed me to declare my position during the Wada conflict — I did. In 1221, the system needed me to speak before the gokenin assembly — I spoke.

Each time the system needed me, I was there.

After 1221, the system no longer needed that particular voice — the problem had been resolved. The logic of power is functional, not sentimental: you are useful, you are present; you no longer have that specific use, you move to the margin.

I felt no humiliation from this, and no bitterness. This is something I understood since Izu: a position in power is not permanent, it is conditional. When your conditions hold, you are there; when the conditions change, the position changes.

From 1221 to 1225, I was in Kamakura, inside the shogunate's operation, but no longer at the center. I became a witness again — this time, witnessing the system I had built and maintained complete its handoff from me while I was still alive.

A system uses people, then sets them down.

---

Looking at this, Masako at sixty-five to sixty-nine, moving from key decision-maker back to witness — how do you read this? Is it "the system failed her," or is it "this is what any person inside any system eventually faces"?`,
    },
    deliverGoal: 'N11 — 1221-1225 战后 + 义时主导 + 政子退回见证者 + 不是软弱是体制用完就放下 + 反思问题：「体制辜负了她」vs「任何人在体制里都会这样」',
    engagementHook: '「体制使用人，用完了就放下」——你同意这是不可避免的，还是可以抵抗的？',
    expectsRealAnswer: true,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §5 §16；McCullough 1985；Mass 1989',
  },

  // ═══════════════════════════════════════════════════
  // N12 — 1225 · 死 · 反 Whig 总结 · 孤例不是先例 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N12',
    title: {
      cn: '她之后，再也没有人能这样做',
      en: 'After her, no one could do it again',
    },
    setting: {
      time: '1225 年，69 岁',
      place: '镰仓 → 历史记录 → 你现在坐着的地方',
      cn: '政子死，69 岁；她的演讲留在《吾妻鏡》里；反 Whig：孤例不是先例；跨 Topic：Theodora 548 年死，Masako 1225 年死，两人之后体制都没有产生同等级女性政治声音',
      en: 'Masako dies at 69; her speech preserved in Azuma Kagami; anti-Whig: a singularity, not a precedent; cross-topic: Theodora died 548, Masako 1225, neither system afterward produced comparable female political voices',
    },
    content: {
      cn: `1225 年，我死，69 岁。

镰仓的 8 月，热，我病了一段时间，然后不病了。

我的演讲留在《吾妻鏡》里。但《吾妻鏡》是幕府官修史书，我的声音经过了幕府的过滤——留下来的，是幕府需要留下的那个版本的声音。其他的，不在记录里。

1225 年之后，日本历史里，再没有一个女性能以自身名义执掌政权，或发出可以被史书记录的政治声音。我是日本史上「女性政治声音在制度里消失」的节点，而不是这种声音的开端。我的出现，是孤例，不是先例。

这件事值得仔细想：我的出现，是因为当时有一个罕见的条件组合——伊豆武士家庭出身（懂权力的真实面目），赖朝的妻子（合法性来源），父亲和弟弟的政治支持网络，加上 1199 年出家找到的礼制缝隙。这些条件在 1225 年之后，没有在任何一个女性身上重新组合出来。制度性的原因，不是个人能力的原因。

跨 Topic 对比：Theodora 548 年死，我 1225 年死——相隔 677 年。两个女性之后的制度，都没有继续产生同等级的女性政治声音。Theodora 死后的拜占庭，政治里的女性声音逐渐式微；我死后的日本，执权体制在北条氏手里继续运转，但这个体制不再给女性任何制度性的位置。两个案例的规律是相同的：女性政治声音的出现，在那个时代不是趋势，是偶然，是条件性的，是不可复制的。

---

这是北条政子 12 节的最后一节。她不是「女性权力的先驱」，不是「贤妻良母」，也不是「封建压迫的受害者」。她是在极端约束下做出政治判断的人，在她活着的时候，制度允许她做这些判断；在她死了之后，制度没有再产生类似的条件。

你现在读完了她的故事。

历史记住北条政子，不是因为她开创了什么，而是因为她之后，再也没有人能这样做。那个「再也没有人」，是历史对她最诚实的评价，也是她所处的制度最诚实的证词。

你觉得：一个人被历史记住，是因为她特别，还是因为她之后的人更不特别？这两种理由，有什么区别？`,
      en: `In 1225, I died, at sixty-nine.

Kamakura in the late summer, heat, I had been ill for a time, and then I was not ill anymore.

My speech remains in the Azuma Kagami. But the Azuma Kagami is the shogunate's official chronicle, and my voice passed through the shogunate's filter — what was preserved is the version of my voice the shogunate needed to preserve. The rest is not in the record.

After 1225, no woman in Japanese political history again wielded power in her own name or generated a political voice deemed worth recording by the historical record. I am the node in Japanese history at which a female political voice went silent inside the institutional structure — not the beginning of such a voice. My existence was, in history, a singularity, not a precedent.

This is worth thinking through carefully: my existence depended on a rare combination of conditions — born into an Izu warrior family (understanding power's real face), wife of Yoritomo (source of legitimacy), the political support network of my father and brother, and the gap in ritual custom I found by taking vows in 1199. After 1225, these conditions did not recombine in any other woman. The reason is institutional, not a question of individual capacity.

A cross-topic comparison: Theodora died in 548; I died in 1225 — 677 years apart. Neither of the institutional systems that followed either of us continued to produce female political voices at the same level. After Theodora, women's political voice in Byzantine institutional life gradually faded. After me, the regent system continued in Hōjō hands, but the system gave women no institutional position. The pattern in both cases is the same: the appearance of female political voice in that era was not a trend, it was contingent — conditional, non-reproducible.

---

This is the twelfth and final node of Hōjō Masako's story. She was not "a pioneer of female power," not a "virtuous wife and good mother," and not "a victim of feudal oppression." She was a person making political judgments under extreme constraint — while she was alive, the institutional conditions allowed those judgments; after she died, the institution did not produce the conditions again.

You have now read her full story.

History remembers Hōjō Masako not because she pioneered something, but because after her, no one could do it again. That "no one afterward" is history's most honest assessment of her — and the institution's most honest testimony about itself.

What do you think: is a person remembered by history because she was exceptional, or because those who came after her were less exceptional? What is the difference between those two explanations?`,
    },
    deliverGoal: 'N12 — 1225 死 + 演讲经幕府过滤 + 反 Whig 总结：孤例不是先例 + 条件性分析（伊豆出身 + 赖朝妻 + 出家缝隙）+ 跨 Topic：Theodora 548 / Masako 1225 对比 + 「历史记住她，因为她之后再没有人能这样做」',
    engagementHook: '「被历史记住，因为她特别，还是因为她之后的人更不特别」——这两种理由，对你来说有什么区别？',
    expectsRealAnswer: true,
    nodeType: 'receiving-end',
    crossTopicHook: '拜占庭 Topic：Theodora 548 年死，Masako 1225 年死，相隔 677 年。两个女性之后的制度都没有再产生同等级的女性政治声音——不是个人能力的问题，是制度性条件的问题。（Byzantine Topic §19）',
    sourcingNote: 'narrative §16 末尾；McCullough 1985；Varley 1994；Bialock 2007；Sansom 1958',
  },

  ],
};

export var lenses = {
  'tokimune-defender': tokimuneLens,
  'sesshu-mediator': sesshuLens,
  'masako-widow-nun': masakoLens,
};

export var defaultLens = 'masako-widow-nun';

export default lenses[defaultLens].storyboard;

export var meta = {
  topicId: 'medieval-japan',
  schemaVersion: 2,
  defaultLens: defaultLens,
  lensCount: 3,
  nodesPerLens: 12,
  timeRange: '794-1603',
  region: 'East Asia',
  standards: ['HSS-7.5', 'AP World 2.3'],
};
