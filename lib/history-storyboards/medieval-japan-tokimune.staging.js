// Medieval Japan T4 — Lens 1: Hōjō Tokimune (北条时宗)
// perpetrator-actor | regent-defender / system-hardener | Kamakura 1268-1284
//
// Topic: Medieval Japan 794-1603
// 时宗为镰仓幕府第 8 代执权，在位 1268-1284，享年 33 岁
// 主要事件：两次拒绝并斩杀蒙古使者，指挥文永之役 (1274) + 弘安之役 (1281)
//           博多湾石墙建设，圆觉寺建立，33 岁早死
//
// 来源: Conlan 2001《In Little Need of Divine Intervention》
//       Turnbull 2008《The Mongol Invasions of Japan》
//       Farris 1996《Heavenly Warriors》
//       Mass 1989《Warrior Government in Early Medieval Japan》
//       Sansom 1931 (1268 使者信件)
//
// 跨 lens micro-detail:
//   N3: 政子 1221 年承久之乱 ↔ 时宗 1268 年拒绝蒙古（权力同构）
//   N8: 圆觉寺地基测量 ↔ 台风前夜（cross-lens 时刻）
//   N11: 政子御家人忠诚契约 ↔ 圆觉寺精神偿还
//   N12: cross-Topic Pre-Columbian 帕查库特克对照
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N11+N12 only true)
// em-dash 规范: 单段最多 3 个

export var meta = {
  lensId: 'tokimune-defender',
  name: 'Hōjō Tokimune',
  nameCn: '北条时宗',
  role: 'perpetrator-actor',
  roleDescription: 'regent-defender / system-hardener',
  description: 'Kamakura regent who repelled the Mongol invasions, 1268-1284',
  descriptionCn: '击退蒙古入侵的镰仓执权，1268-1284',
  topicId: 'medieval-japan',
  nodeCount: 12,
};

export var storyboard = [
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
    sourcingNote: 'Conlan 2001《In Little Need of Divine Intervention》；《蒙古国牒状》汉文原件；Sansom 1931',
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
    bodyCn: `1274 年 10 月，蒙古-高丽联军从合浦出发，经对马岛、壹岐岛，在博多湾登陆。

关于人数，史料有分歧：《元史》记 15,000-25,000；《高丽史》记合计约 33,000；Turnbull 2008 用约 25,000-30,000 作为较稳健的估计，配近 900 艘船。Grade 7 读者用「约 25,000-30,000 人，近 900 艘船」即可，不用假装精确。

日本武士战争有一套规矩：双方武将先互报名号，一对一单挑，弓马之间有规则。这套传统在日本内部战争里有真实的军事逻辑——但在蒙古军面前，这套规则变成了灾难。蒙古战法是集团战术：数百人同步移动，弓手轮替，长矛兵掩护。日本武士冲过去单挑，迎接他的是整排箭雨。

然后是铁炮（tetsuhau）。铁炮不是后来明朝的火绳枪，而是一种铁壳炸弹，填入火药和铁片，点燃后抛掷，爆炸时产生声响、火光、碎片。

武士们听到爆炸声的第一刻，没有人知道那叫什么。《蒙古袭来绘词》记录了这场战争，其中有描绘铁炮爆炸的画面——要 careful framing：Conlan 2001 详细分析，这幅绘卷是战后绘制，部分画面为颂扬参战武士的英勇而有夸张成分；绘词的赞助者竹崎季长是为了向幕府证明自己的战功以获封赏，绘词首先是一份战功申诉材料。铁炮确实存在（考古出土有实物），但其决定性作用可能比绘词描绘的小一些。

我在镰仓，不在博多湾。消息用驿马传到我手里的时候，战斗已经进行了一整天。我知道的只是：日本守军节节后退，退守大宰府防线。

那天晚上，台风打入博多湾，蒙古舰队锚泊在湾内，船只相互碰撞，部分沉没，联军撤退返回合浦。

消息送到我手里时说「赢了」。我知道这不是结束。`,
    bodyEn: `In October 1274, the Mongol-Goryeo combined force departed from Happo, passed Tsushima and Iki, and landed at Hakata Bay.

The numbers are disputed in the historical record: the Yuan Shi records 15,000 to 25,000; the Goryeo Sa records a combined total of about 33,000; Turnbull (2008) uses roughly 25,000 to 30,000 as the most defensible estimate, with close to 900 ships. For our purposes — approximately 25,000 to 30,000 men, nearly 900 ships — that is enough; no need to pretend to more precision.

Japanese warrior combat had a code: commanders first announced their names, then fought in matched single combat, with rules governing mounted archery. This tradition had real military logic inside Japan's internal wars. But against Mongol forces, it became a catastrophe. Mongol tactics were collective: hundreds of men moving together, archers rotating in relay, spearmen covering the line. A Japanese warrior charging in for single combat met a wall of arrows.

Then came the tetsuhau, the iron-shell bomb. Not the later arquebus of the Ming dynasty — this was an iron casing packed with gunpowder and iron fragments, thrown and detonating with sound, fire, and shrapnel.

The warriors who heard the explosion for the first time had no word for what it was. The Mōko Shūrai Ekotoba pictorial record documents this battle and includes images of tetsuhau detonating — but careful framing is needed: Conlan (2001) analyzes in detail that this scroll was painted after the battle, partly to celebrate the sponsor Takezaki Suenaga's personal valor for a war-merit claim to the shogunate. The scroll is first a petition document. The iron bombs are archaeologically confirmed to exist, but their decisive impact may have been smaller than the scroll depicts.

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

「神风」这个词——「神风（kamikaze）」字面意思是「神的风」——1274 年当时，在日本文献里这场风并没有被普遍叫做神风。Conlan 2001 通过考察 13-15 世纪的日本文献，论证「神风」作为系统性叙事，是在入侵发生之后数十年到一两个世纪间，由神社神职人员和后来的统治者主动建构的意识形态。当时的武士，在战后申请封赏的文书里，写的是他们自己的战功，不是神风的功劳。

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
    bodyCn: `1281 年，忽必烈动员了他帝国历史上最大规模的海上远征。

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

关于死亡人数：Farris 1996《Heavenly Warriors》估计台风造成的溺亡约 60,000-100,000 人；《元史》等记载部分幸存者登岸后遭日本守军歼灭，具体数字各史料不一。总损失估计与入侵规模上下限之间有算术张力，学界对具体分项数字没有共识（Turnbull 2008；Farris 1996）。远征军几乎全军覆没。

「神风」叙事是怎么建构的？

1281 年台风发生之后，首先是神社和寺庙——幕府命令全国举行祈祷感谢仪式，神职人员有动机把台风解释为他们祈祷的成果。然后是「神国（Shinkoku）」意识形态：13-15 世纪，统治者越来越多使用「日本是神佑之国」的话语，蒙古入侵的失败成了论证这个说法的主要证据——但这是事后把台风塞进了已有神学框架。

武士竹崎季长的战功申请书，写的是他的骑马冲锋和他斩杀的蒙古兵，没有提神风。如果「神风」当时是共识解释，你不会在战功申请书里不提它。

给 Grade 7 的表述：第一代人说「风暴来了，我们活下来了」；到了第三代变成「神送来了风暴」；到了第五代变成「这就证明了我们是神选之家」。故事会生长，但长大的故事不一定更真实。

台风确实来了。台风确实摧毁了舰队。石墙和夜袭确实延缓了蒙古登陆，消耗了补给和时间。两件事都是真实的。`,
    bodyEn: `On August 15-16, 1281, a typhoon struck the Kyushu coastline.

This was not the brief nighttime storm of 1274. Modern meteorologists estimate it reached Category 4 or higher. The Mongol-Yuan fleet had a structural vulnerability: the Kōnan Army's ships, as underwater archaeology later confirmed (Delgado 2001), included vessels hurriedly converted from flat-bottomed river craft not suited to open-ocean swells. Corruption in the shipbuilding contracts is documented in internal Yuan administrative records. The ships flooded, broke apart, and sank in large numbers.

On casualties: Farris (1996, *Heavenly Warriors*) estimates typhoon drownings at roughly 60,000 to 100,000. The Yuan Shi and other sources record that some survivors who reached shore were killed by Japanese defenders, but the specific numbers vary across sources. There is arithmetical tension between total loss estimates and the upper and lower bounds of the invasion force's scale — scholars have no consensus on the individual figures (Turnbull 2008; Farris 1996). The expeditionary force was nearly annihilated.

How was the kamikaze narrative constructed?

In the aftermath, first the shrines and temples: the shogunate ordered nationwide prayers of thanksgiving, and shrine priests had institutional incentive to frame the typhoon as the product of their intercessions. Then came the "divine nation" (Shinkoku) ideology: in the thirteenth through fifteenth centuries, rulers increasingly deployed the language of "Japan as a divinely protected land," and the Mongol failure became the primary evidence for this claim — but this was inserting the typhoon into a pre-existing theological frame after the fact.

Warrior Takezaki Suenaga's war-merit petition describes his cavalry charges and the Mongol soldiers he killed. It does not mention divine winds. If kamikaze had been the consensus explanation at the time, you would not omit it from a war-merit petition.

For Grade 7: the first generation says "a storm came and we survived." By the third generation it becomes "the gods sent the storm." By the fifth generation it becomes "this proves our family is divinely chosen." Stories grow, but grown stories are not always truer.

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

关于时宗与无学祖元的一段著名禅对话「洞然无依」——时宗问「如何克服恐惧」，祖元答「洞然无依，万物皆空」——这段对话需要 careful framing：后世的增饰明显，不能直接作为确定发生过的史实引用。但这段对话流传下来，折射出的是真实的：时宗在 1268-1284 年间承受的持续高压，从 17 岁到 33 岁，几乎没有停止危机应对。无论禅对话的具体内容是否如实，他在这些年里确实在用禅宗管理一种极度的疲惫。

圆觉寺不只是精神补偿。它也是治理工具。时宗用宗教回应他无法用土地回应的问题——这跟镰仓武士用禅宗管理心理压力是同一种逻辑的扩大版本：你无法消除那个困境，所以你给它一个仪式上的容器。

北条政子 1221 年赢得的御家人忠诚契约，是建立在「我们共同的土地，赖朝公给的」这个历史基础上的。到 1282 年，这条契约链已经开始松动——那些 1281 年后没有得到封赏的御家人，拿到的不是土地，是一座寺庙的超度法事。

权力者用石头建筑偿还他还不起的债。你认为这是补偿，还是回避？`,
    bodyEn: `In 1282, Engakuji was completed. I invited the Chinese Zen monk Mugaku Sogen (1226-1286) to come from Song-dynasty China to Japan and serve as founding abbot.

The temple was built for those who died in the Kōan campaign. This was what I could give: I had no land for their descendants, so I gave them a temple, with monks to perform rites for their souls.

This was not a complete solution. Everyone knew it was not land. But I had no other method left.

Regarding the famous Zen exchange between Tokimune and Mugaku Sogen — Tokimune asking "how does one overcome fear," Sogen answering "洞然無依" (utterly unsupported, empty of all attachment) — this dialogue requires careful framing. Later embellishment is evident; it cannot be cited as a confirmed historical fact exactly as told. What it does reflect is something real: the sustained pressure Tokimune carried from 1268 to 1284, from age seventeen to thirty-three, in nearly continuous crisis management. Whatever the specific content of the Zen exchange, he was genuinely using Zen practice during these years to manage a profound exhaustion.

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

反 Whig 总结：时宗不是「神风英雄」——神风叙事是他死后由神社神职人员和后来的统治者建构的；20 世纪的「神风特攻队」直接借用了这个词，试图唤起 1281 年的历史意象。真实的时宗，是一个从 17 岁到 33 岁、在持续高压下做出了一系列不可撤回决定的人——拒绝蒙古、斩使、建石墙、挺过了两次入侵。他是一个有效的系统维护者，但他的「系统硬化」同时把系统的裂缝封进了内部。

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
];
