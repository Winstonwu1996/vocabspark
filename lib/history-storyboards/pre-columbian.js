// ─── Pre-Columbian Americas 1000-1532 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 前哥伦布美洲 · Pre-Columbian Americas 1000-1532
// HSS-7.7 · AP World 1.4 (Americas civilizations + 1492 contact)
//
// 3 lens 设计 (per Sarah Chen audit + 王老师 curriculum sequence):
//   - pachacuti-inca      (perpetrator-actor / empire-builder) — c.1418-1472 Tawantinsuyu 建立者
//   - malintzin-mediator  (lonely-mediator / Nahua-translator) — c.1500-1529 三语 broker
//   - ix-mutal-weaver     (receiving-end / fictional-composite) — c.1480-1545 Postclassic Maya 织者
//
// 跨 lens micro-detail (per Sarah Chen audit):
//   锁定 #1 1521.11: Pachacuti mummy N11 / Malintzin 1521.8.13 N9 / Ix Mutal 1521.11 N7
//   锁定 #2 1518-1520 天花: Malintzin N4 / Ix Mutal N6
//
// 来源: Rostworowski 1999 / Hemming 1970 / Julien 2000 / Rowe 1946 / MacQuarrie 2007
//       D'Altroy 2002 / Townsend 2006 / Schroeder 2005 / Clendinnen 1991
//       Cook 1998 / Restall 2003 / Sharer 2006 / Rice 2004
//
// schemaVersion: 2 · defaultLens: ix-mutal-weaver

export var pachacutiLens = {
  id: 'pachacuti-inca',
  name: 'Pachacuti Inca Yupanqui',
  nameCn: '帕查库特克·印加·尤潘基',
  role: 'perpetrator-actor',
  roleDescription: 'empire-builder / system-hardener',
  description: {
    cn: '他是安第斯山一个小城邦里的次子，父亲属意的是他哥哥，Cusco 城里的人朝哥哥鞠躬，他站在旁边，没人看他。这一遍让你跟他走到那个春天，敌人的大军翻过西边山脊，父亲转身带哥哥逃，把他一个人丢在这座马上要变成帝国的小城里。',
    en: 'He is the second son in a small Andean city ringed by mountains, the boy his father does not choose, who watches Cusco bow to his older brother and learns power by standing to one side and reading it. This pass walks with him to the spring an enemy army crests the western ridge and his father turns to flee, leaving him alone in a town about to become an empire.',
  },
  descriptionCn: '他是安第斯山里一座小城邦的次子,父亲选的继承人是他哥哥,他从小站在一边看 Cusco 城里的人朝那一对父子鞠躬,学到的不是命令而是观察。这一遍让你跟他走完那些安静的年头,直到一支敌军翻过西边山脊那个春天,父亲转身要逃,留他一个人站在一座马上要变成帝国的城里。',
  storyboard: [
  {
    id: 'N1',
    title: {
      cn: '次子，不被看好',
      en: 'The Second Son, the Overlooked One',
    },
    setting: {
      time: 'c.1418',
      place: 'Cusco',
      cn: '约 1418 年，Cusco',
      en: 'c.1418, Cusco',
    },
    content: {
      cn: `我叫 Cusi Yupanqui。生在 Cusco——那时还是一座被山包围的小城，不是帝国，不是传说，只是安第斯山脉里几十个城邦里一个说得过去的。

我父亲是第 8 任 Sapa Inca，名叫 Viracocha。"Sapa Inca"——"唯一的王"——这个头衔听着很威严，但那时候我们管的地方，骑马一天就能绕完。

我不是嫡子。父亲看中的继承人是我哥哥 Inca Urco——他好看，他话多，他出现在父亲左右。我？我在旁边，没人注意。

Andean 文化里有个字叫 ayllu，扩展亲属社区，几十到几百户人家共享土地和祖先。我的 ayllu 当然是王室，但王室里的权力也是一棵树——阳光只照最中间那根枝。我不是那根枝。

十几岁的我，看着父亲处理政务，看着哥哥站在父亲右手边，看着 Cusco 城里的百姓朝他们鞠躬。我没有鞠躬——我在学。

权力是怎么运作的？靠的不是你能干什么，靠的是别人以为你能干什么。父亲选了哥哥，不因为哥哥真的比我强——而是因为哥哥先被看见。

这一课，我记了很久。后来我改变整个大陆的时候，还是从这里出发的。`,
      en: `My name was Cusi Yupanqui. I was born in Cusco — not yet an empire, not yet a legend, just one city-state among dozens tucked in the Andes, manageable enough that a man on foot could walk its borders in a day.

My father was the 8th Sapa Inca, Viracocha. "Sapa Inca" — "Unique King" — a title that sounded weighty. But the kingdom it named was modest.

I was not the chosen heir. My father favored my older brother, Inca Urco — he stood at my father's right hand, visible, selected. I stood to one side. No one particularly noticed me.

Andean society is built on the ayllu, the extended kin community of dozens to hundreds of households sharing land and a common ancestor. My ayllu was the royal household itself — but even inside a royal family, power is a tree. Sunlight only reaches the central branch. I was not that branch.

In my early years I watched my father govern, watched my brother stand beside him, watched Cusco's people bow. I did not bow. I watched and learned.

Power works not by what you can actually do — but by what others believe you can do. My father chose my brother not because my brother was truly more capable, but because my brother was seen first.

I kept that lesson for a long time. When I later reshaped an entire continent, I started from exactly this place.`,
    },
    deliverGoal: 'N1 hook — c.1418 出生次子背景 + Viracocha 第 8 任 Sapa Inca + 嫡子制度 + ayllu 亲属社区 + 「不被选中的人怎么看权力运作」内核',
    engagementHook: '我不是嫡子，不被父亲看好——但我在旁边观察权力怎么运作。你见过谁明明很有能力，却因为「不被看见」而被忽视？最后怎么了？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N2',
    title: {
      cn: '父亲转身的那一刻',
      en: 'The Moment My Father Turned Away',
    },
    setting: {
      time: '1438 春，Chanca 军逼近 Cusco 前夕',
      place: 'Cusco 城内',
      cn: '1438 年春，Cusco 城内',
      en: 'Spring 1438, Cusco',
    },
    content: {
      cn: `Chanca 人从西北来了。

Chanca 是 Andean 山地的强部族，一直想吞掉 Cusco。那年春天，他们的大军逼近城郊——数量比我们的守备多，士气比我们高。

我父亲 Viracocha 在大殿里做了一个决定：撤。

他带上我哥哥 Inca Urco，带上王室大部分人，撤到东北山上的要塞 Caquia Xaquixaguana。撤退时他没有回头。

Cusco 城里留下了什么？几百个不肯走的人，一批不知道逃去哪里的平民，还有我——次子，不是嫡子，父亲没有带走的那个。

我不是被忘了。我是被放弃了。

父亲转身的那一刻，我站在 Cusco 的石路上，看着他的背影消失进山。那一刻我想：如果 Cusco 今天亡了，亡在谁手里？亡在嫡子跑路的父亲手里。

但 Cusco 没有亡。因为我留下来了。

被遗弃创造了空间。父亲不在，哥哥不在，王室的权威拿走了——但权威的空缺，是召唤另一个人的时刻。

我开始召集人。我去找西南的 Quechua 部，去找南边的 Cana 部——「Chanca 要来灭我们，你们跑了也一样完蛋，不如一起守。」他们来了。`,
      en: `The Chanca came from the northwest.

The Chanca were a powerful Andean highland people, long eyeing Cusco. That spring their army closed on the city's outskirts — larger than our garrison, with better morale.

My father Viracocha made a decision in the great hall: he would withdraw.

He took my brother Inca Urco, took most of the royal household, and retreated to the fortress of Caquia Xaquixaguana in the hills to the northeast. He did not look back.

What stayed behind in Cusco? A few hundred people who would not flee, some ordinary citizens with nowhere to go, and me — the second son, not chosen, not taken.

I was not forgotten. I was left.

My father turned. His figure disappeared into the hills. I stood on Cusco's stone road and thought: if Cusco falls today, it falls under a father who ran with his chosen heir.

But Cusco did not fall. Because I stayed.

Abandonment makes a vacancy. When a father leaves and a brother leaves and royal authority is removed — the gap left behind summons whoever remains.

I began to gather people. I went to the Quechua to the southwest, to the Cana in the south. "The Chanca will destroy us — and if Cusco falls, you fall next. Better to stand together." They came.`,
    },
    deliverGoal: 'N2 1438 Chanca 大军逼近 + Viracocha 携嫡子 Inca Urco 出逃 + Cusi Yupanqui 留守 + 召集 Quechua + Cana 两部族 + 权力空缺如何召唤另一个人',
    engagementHook: '父亲带哥哥逃走，把我留在城里。如果你是我，你第一个念头是什么——逃？守？还是别的？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N3',
    title: {
      cn: '血原反败为胜，改名「时间转折者」',
      en: 'Reversal on the Plain of Blood — I Rename Myself',
    },
    setting: {
      time: '1438，Yahuarpampa「血原」',
      place: 'Cusco 城外平原',
      cn: '1438 年，Yahuarpampa，Cusco 城外',
      en: '1438, Yahuarpampa, outside Cusco',
    },
    content: {
      cn: `Yahuarpampa——「yahuar」= 血，「pampa」= 平原。血原。这块地已经见过血，很快还要见更多。

1438 年，我和凑来的 Quechua + Cana 联军，在城外迎击 Chanca 大军。我们打赢了。

这不是神话。1438 Yahuarpampa 反败为胜是 Inca 历史的核心事实。但要小心：后世的王朝叙事（Sarmiento de Gamboa 1572）加了一段——「平原上的石头变成战士 pururaucas」。石头变战士是后人写的 PR：框架是真，细节是神话化。

打完仗，我做的第一件事不是庆祝，是改名。

Cusi Yupanqui——这是次子、父亲没带走的那个孩子的名字。我不要它了。

新名字：**Pachacuti**。「pacha」= 时间 / 大地，「kuti」= 翻转。合起来：时间转折者，大地震荡者。

胜利者做的第一件事，是重新讲自己的故事。我宣布自己是第 9 任 Sapa Inca——父亲在山上，哥哥在山上，王位空在 Cusco。我拿走了它。

Genghis Khan 1206 年在 Onon 河源头被尊号「成吉思汗」，花十年重建草原政治地图。我 1438 年改名 Pachacuti，花三十四年重建整个南美洲。同一个动作：先给自己命名，再去建造命名承诺的东西。`,
      en: `Yahuarpampa — Quechua: yahuar = blood, pampa = plain. Plain of Blood. This ground had already seen blood. It was about to see more.

In 1438, the combined Quechua and Cana forces I had gathered faced the Chanca army outside Cusco. We won. The Chanca retreated.

This is not myth. The 1438 Yahuarpampa reversal is solid Inca history. But one detail needs care: later dynastic narratives (Pedro Sarmiento de Gamboa, Historia índica, 1572) added that mid-battle, the stones on the plain turned into warriors, pururaucas, joining our side. Stones turning into warriors is dynastic PR added by later historians. The core event is real; the dramatic details are mythologized.

After the battle I did not celebrate. I changed my name.

Cusi Yupanqui — the name of a second son, the child a father did not take. I did not want it.

New name: **Pachacuti**. pacha = time / earth, kuti = overturn. Together: Overturner of Time, Earth-Shaker.

The first thing victors do is retell their own story.

I renamed myself — declared myself the 9th Sapa Inca — my father on a hill, my brother on a hill, the throne empty in Cusco. I took it.

Genghis Khan received his title on the Onon River in 1206, then spent years rebuilding the steppe's political map. I renamed myself Pachacuti in Cusco in 1438, then spent 34 years rebuilding an entire continent. Two men, two continents, the same move: name yourself first, then build what the name promises.`,
    },
    deliverGoal: 'N3 1438 Yahuarpampa 反败为胜 + careful framing「石头变战士」是后世 PR + 改名 Pachacuti 「时间转折者」+ 自立第 9 任 Sapa Inca + cross-Topic Genghis Khan 1206 对照',
    engagementHook: '打赢之后，我做的第一件事是改名——不是宴庆，不是追击，而是先给自己起一个新名字。你觉得为什么这一步最重要？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N4',
    title: {
      cn: '美洲豹形 Cusco：城市设计就是政治宣言',
      en: 'Cusco as Puma: City Design Is Political Statement',
    },
    setting: {
      time: '1438-1445，Cusco 重建期',
      place: 'Cusco 城心',
      cn: '1438-1445 年，Cusco 城心',
      en: '1438-1445, Cusco city center',
    },
    content: {
      cn: `一座城市怎么被人记住？靠它的形状。

我拿下王位之后，第一件事不是扩张，是重建 Cusco。

旧 Cusco 是自然生长的山地小城——房子沿沟谷堆，路随地形弯，没有图纸。我要改。

我走到城心，叫来工匠和贵族，指着四周山脉说：这座城要重新规划，形状是美洲豹（puma）。城北高地的要塞 Saqsaywaman 是豹头——zigzag 巨石城墙就是豹的利齿，石块重 100 到 200 吨，不用砂浆，拼接到刀片插不进去。城心是豹的心腹——那里建 Coricancha，太阳神 Inti 的神殿。

这不是审美决定，是政治宣言。美洲豹在 Andean 文化里象征力量、王权、山脉。住在 Cusco 的人，每天都活在一个关于王权的隐喻里。

Coricancha——「Quri Kancha」= 黄金围院——内墙镀金板，庭院里有真人大小的金制玉米秆、金制羊驼（西班牙人 1533 年来，全融了拿走）。太阳节，Inti 的金像摆在正中，正午阳光从特定角度射进来，整个殿堂燃起金光。

我主持第一次仪式。我知道这是 PR。但我也开始感觉到某种更重的东西——或许真的是 Inti 在看。

一个统治者能说什么？「我建了神殿，神住在里面，我是神的儿子，你们要听我的。」如果神殿建得足够金光闪闪、足够让人喘不过气，这句话会被相信很多很多年。`,
      en: `How does a city get remembered? By its shape.

The first thing I did after securing the throne was not expand. It was rebuild Cusco.

The old Cusco was a natural mountain settlement — houses stacked along ravines, roads bending with terrain, unplanned. I would change that.

I walked to the city center, summoned architects and nobles, and pointed at the surrounding ridgelines. This city would be redesigned in the shape of a puma. The fortress on the high ground to the north — Saqsaywaman — was the puma's head, its zigzag megalithic walls the puma's teeth, stones of 100 to 200 tons fitted to razor-blade precision without any mortar. The city center was the puma's heart and belly — where I ordered Coricancha built, the temple of the sun god Inti.

This was not an aesthetic decision. It was a political statement. In Andean culture the puma means power, royalty, the mountains. The people who lived in Cusco spent every day inside a metaphor about kingship.

Coricancha — Quri Kancha, "Golden Enclosure" — walls plated in gold, courtyards holding life-sized maize stalks and llamas cast in gold (the Spanish came in 1533 and melted everything). During the sun festival the gold image of Inti sat at center; at noon the light entered at a precise angle and the whole hall blazed.

I presided over the first ceremony. I knew this was PR. But I also felt something heavier starting to form — perhaps Inti really was watching.

A ruler can say: "I built a temple, a god lives inside, I am the god's son, so obey me." If you build the temple gold and overwhelming enough, that sentence will be believed for a very long time.`,
    },
    deliverGoal: 'N4 1438-1445 Cusco 重建 + puma 形设计 + Saqsaywaman 巨石城墙 100-200 吨 + Coricancha 黄金神殿 + 太阳节首次主持 + 「城市设计就是政治宣言」',
    engagementHook: '我把整座城设计成美洲豹的形状——人们每天走在豹身上，住在豹的肚子里。你觉得用建筑改变人的思维方式，今天还有人这么做吗？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N5',
    title: {
      cn: 'mit\'a 令：工，不是税',
      en: 'The mit\'a Order: Labor, Not Tax',
    },
    setting: {
      time: '约 1445 年',
      place: 'Cusco，帝国行政中心',
      cn: '约 1445 年，Cusco',
      en: 'c.1445, Cusco',
    },
    content: {
      cn: `帝国要运转，靠什么？

不是钱——Tawantinsuyu 没有通货货币。不是市场——整个安第斯世界没有我们发明的市场经济。

靠的是人的身体和时间。

我颁布 mit'a 令。Quechua 语「mit'a」= 轮班。规则很简单：帝国每一个成年男性，每年欠帝国九十天劳役。不是税，是工。名义上「轮」——你今年服役，明年换别人，大家都摊得到。帝国会供你服役期间的吃喝。

有一天，一份用 quipu（绳结）写成的通告，被带到了 Cusco 城南一个 ayllu 的长老手里。那个长老叫什么名字——我不知道，从 Cusco 下令，我从来不知道具体的名字。但我知道那份通告上的绳结写的是：今年，你们 ayllu 有十八个成年男性欠帝国劳役，指派去修 Saqsaywaman 北段城墙，出发时间：下下月初一。

长老拿着 quipu 站在族里，把这件事告诉族人。

有人问：去多久？九十天。能不去吗？不能。家里的田谁种？帝国说——余下的族人一起，帝国的仓库也会给补贴。

这就是制度怎么从纸——或者说从绳结——落到一个家庭的方式。

我颁布 mit'a，我相信这是公平的——大家都摊，没有钱的交换，只有劳动的交换。我建的路、我建的神殿、我建的仓库，都靠这个系统撑着。

但九十天在矿里挖银的人，死亡率很高。我没有在矿里待过九十天。`,
      en: `What keeps an empire running?

Not money — Tawantinsuyu had no currency. Not markets — the Andean world had no market economy of the kind we might recognize.

It ran on human bodies and human time.

I issued the mit'a order. Quechua mit'a = turn, rotation. The rule was simple: every adult male subject owed the empire ninety days of labor per year. Not tax — work. Nominally "rotational" — you serve this year, someone else next year, everyone takes turns. The empire would feed and house you during your service period.

One day a quipu — a knotted cord message — was carried to a village elder of an ayllu south of Cusco. The elder's name I never knew. From Cusco I gave orders and I never knew the specific names. But I know what the knots said: this year, eighteen adult men from your ayllu owe labor to the empire. Assigned to the northern wall section of Saqsaywaman. Departure date: the first day of the month after next.

The elder stood among his people holding the quipu and read them the news.

Someone asked: how long? Ninety days. Can we refuse? No. Who farms our fields? The empire said — the rest of the community together, and the state granaries would supplement.

That is how policy moves from cord knots to a family's kitchen table.

I issued the mit'a because I believed it was fair — everyone shares the burden, no money changes hands, only labor. My roads, my temples, my granaries all rested on this system.

But the people assigned to ninety days underground in the silver mines had high mortality rates. I had never spent ninety days in a mine.`,
    },
    deliverGoal: 'N5 约 1445 mit\'a 令颁布 + 九十天劳役制度 + quipu 通告落到 ayllu 长老手里的具体瞬间 + 「制度怎么从绳结落到一个家庭」+ 反 Whig 矿里死亡率高',
    engagementHook: '我说 mit\'a 是公平的——「大家都轮」。但在矿里干活的人死亡率比修路的高很多。「轮流分担」等于「公平」吗？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N6',
    title: {
      cn: 'mitmaq：Cusco 的决定，1500 公里外的感觉',
      en: 'mitmaq: Decision in Cusco, Felt 1500 km Away',
    },
    setting: {
      time: '约 1450 年，第一次大规模 mitmaq 迁徙',
      place: 'Cusco（决策中心）↔ Collasuyu 南部（迁徙目的地）',
      cn: '约 1450 年，Cusco ↔ 帝国南部',
      en: 'c.1450, Cusco and the empire\'s southern reaches',
    },
    content: {
      cn: `帝国扩张到一个新地方，最大的问题不是打赢，是打赢之后怎么让那里不再反叛。

我的答案叫 mitmaq（「移植者」）。征服一个区域后，把不服从的 ayllu 整族迁走，搬到帝国另一头；再把忠心的 ayllu 从别处搬来，填进空出来的土地。

这在政治上很有效。被迁走的部族离开了自己的山和祖坟，到了陌生地方——没有根基，没有盟友，没有逃跑的方向。新迁来的 ayllu 在异乡，唯一能靠的也是帝国。

1450 年前后，有一个 ayllu——我不知道名字——从帝国南部被迁出，目的地是 1500 公里外的北方新征服区。长老在离开前，站在族里的 huaca（圣地）前，转身最后看一眼祖坟所在的山。

Andean 文化里，祖先不只是记忆——他们活在土地的 huaca 里，活在山里，活在家族埋骨的那块地里。离开那块地不只是搬家，是把祖先留在身后。

这一切，我坐在 Cusco 看不见。我的决定只是 quipu 绳结在地图上的一个移位。

我看见的是：「那个地区稳定了。」我看不见的是：一个老人最后一眼回头，看着家族三代人埋骨的山，然后被迫转身向北走。

Mary Doyle 1988 和 Carolyn Dean 2010 都强调：mitmaq 的代价不只是地理迁徙，是地理与精神的双重切断——这一点，Cusco 的账本上没记录。`,
      en: `After conquering a new territory, the biggest problem was not winning the battle — it was preventing the people there from rebelling once the army left.

My answer was mitmaq — Quechua for "transplanted people." After conquest, uproot unruly ayllu communities entirely and resettle them at the empire's opposite end; bring in loyal ayllu from elsewhere to fill the land they left.

Politically, it worked. The displaced arrived somewhere without roots, without local allies, without any direction to flee. The newly planted ayllu, living as strangers in unfamiliar land, had only the empire to depend on.

Around 1450, one ayllu — I do not know their name — was relocated from the empire's south, destination 1,500 km away in newly conquered territory to the north. Their elder, before leaving, stood before his community's huaca (sacred ground) and turned for a last look at the mountain where his ancestors were buried.

In Andean culture, ancestors are not simply memories — they live in the land's huaca, in the mountains, in the earth where the family's bones are laid. To leave that land is not just to move. It is to leave the ancestors behind, untransportable.

None of this was visible to me in Cusco. My decision was administrative — a notation in quipu knots on a map.

What I saw: "That region is now stable."

What I did not see: an old man taking a last look at the mountain where three generations of his family were buried, then turning away and walking north.

Mary Doyle (1988) and Carolyn Dean (2010) both emphasize: the cost of mitmaq was not only geographic displacement but a double severance — geographic and spiritual at once. That cost does not appear in Cusco's administrative records.`,
    },
    deliverGoal: 'N6 约 1450 mitmaq 强制迁徙制度 + 「不老实部落整族迁走」的政治逻辑 + 被迁 ayllu 长老回头看祖坟的瞬间 + Cusco 看不见的 1500 公里外的感觉 + Doyle/Dean 双重切断 + 反 Whig',
    engagementHook: '从 Cusco 下令迁走一个 ayllu，我看见的是「那个地区稳定了」。被迁走的人看见的是离开祖坟的山。同一个决定，两种完全不同的感受。你认为哪一种才算是真实发生了的事？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N7',
    title: {
      cn: '我是 Inti 之子——PR 还是信仰？',
      en: 'Son of the Sun — PR or Belief?',
    },
    setting: {
      time: '约 1455 年，Inti Raymi（太阳节）',
      place: 'Coricancha 太阳神殿，Cusco',
      cn: '约 1455 年，Coricancha，Cusco',
      en: 'c.1455, Coricancha, Cusco',
    },
    content: {
      cn: `Inti Raymi——太阳节，Quechua 历中最重要的节日，冬至前后，庆祝太阳回归。

我在 Coricancha 主持了第一次以 Sapa Inca 身份举行的完整太阳节。

金色的神殿内墙。Inti 的金像在正中。午时，光从特定角度入射，整个殿堂全部点燃。

我宣布：Sapa Inca 是 Inti 在地上的代理——「Intip Churin」，太阳之子。反抗 Sapa Inca，等于反抗太阳。

这是我设计的。这是政治工程。我知道。

但站在那个光里太久，你会开始分不清楚。

权力怎么慢慢相信自己的故事？不是一夜之间。是每次仪式你主持它，每次臣民在你面前跪下，每次日出日落你的名字被附在太阳的名字旁边——慢慢地，边界模糊了。

我最初设计太阳国教，是因为它有用：反我就是反神，没人敢。Catherine Julien 2000 和 Mary Doyle 1988 都指出，这套国教化在我死后三代才真正渗透进整个帝国——它不是一夜铺开的。这提醒我，我建的东西比我自己更慢。

但那一天，在 Coricancha 的金光里，我第一次感觉到自己可能真的是光的一部分——或者，也许是那种感觉对帝国有用，我就允许自己感觉到它。

到了这个程度，分不清楚的不只是我。是所有在那个光里站过的人。`,
      en: `Inti Raymi — the sun festival, the most important ceremony in the Quechua calendar, held around the winter solstice to celebrate the sun's return.

I presided over the first complete Inti Raymi as Sapa Inca at Coricancha.

Gold-plated inner walls. The gold image of Inti at center. Noon light entering at a calculated angle, igniting the whole hall.

I declared: the Sapa Inca is Inti's earthly viceroy — Intip Churin, Son of the Sun. To oppose the Sapa Inca is to oppose the sun.

I designed this. I knew it was political engineering.

But stand in that light long enough and the line starts to blur.

How does power slowly come to believe its own story? Not overnight. It is every ceremony you preside over, every kneeling subject, every sunrise and sunset where your name is attached to the sun's — slowly, the boundary dissolves.

I built the sun religion because it was useful: oppose me and you oppose god, no one dares. Catherine Julien (2000) and Mary Doyle (1988) both note that this religious centralization took three generations after my death to fully penetrate the empire — the sun cult did not spread overnight. That reminds me: what I built moved slower than I did.

But that day, in Coricancha's gold light, I felt for the first time that I might genuinely be part of the light — or perhaps that feeling was useful for the empire, and so I allowed myself to feel it.

At that level, the one who cannot tell the difference is not just me. It is everyone who has ever stood in that light.`,
    },
    deliverGoal: 'N7 约 1455 国教化 + Inti Raymi 太阳节首次完整主持 + 「Intip Churin 太阳之子」宣言 + 国教化渗透需三代（Julien 2000 + Doyle 1988）+ 「权力怎么慢慢相信自己的故事」',
    engagementHook: '我设计了「Sapa Inca 是太阳之子」这个说法，因为这让人不敢反我。但在仪式里待得太久，我开始真的有点相信了。你有没有见过有人说着说着，把自己都骗进去了？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N8',
    title: {
      cn: 'quipu：不是文字，是另一种范式',
      en: 'quipu: Not a Writing Substitute, a Different Paradigm',
    },
    setting: {
      time: '约 1460 年',
      place: 'Coricancha，第一次帝国清册 quipu 制成',
      cn: '约 1460 年，Coricancha，Cusco',
      en: 'c.1460, Coricancha, Cusco',
    },
    content: {
      cn: `帝国南到 Titicaca 湖区，北到今天厄瓜多尔南部，西到太平洋海岸。管多大的地方，就需要多精确的账本。

但 Tawantinsuyu 没有文字。没有字母，没有字符，没有象形文字。

我们有 quipu。

「khipu」= 结。一根主绳，下面挂几十到几百根支绳，每根支绳上打不同位置、不同类型的结。位置编码十进位数字——个位、十位、百位、千位。颜色和结型编码类别——玉米、土豆、战士、户口。

约 1460 年，第一次完整的帝国清册 quipu 在我面前打结完成：某村产玉米多少，户口多少，适龄男子多少，今年欠 mit'a 多少。一套绳结，就是一个省的账簿。

一个 camayoc（quipu 专家）用手指划过绳结，报给我数字。这套系统管理着几百万人的帝国。

要小心：quipu 不是「文字的替代品」——这说法把问题说反了。它是完全不同的信息技术：极擅长记数字和行政记录；能不能记叙事和历史，学界至今还在争论，没有破译。

同时，在 Mali 帝国（西非 600-1591），商人的女儿 Aisha 在 Timbuktu 用阿拉伯字母记账。1413 年她的账簿里有文字，有故事，有旅行记录。

两种工具，两个帝国，差不多同一个时代。哪一种「更高级」？这问题问错了——两种工具解决的问题不完全一样，两条路都走得通。`,
      en: `The empire now reached Lake Titicaca in the south, southern Ecuador in the north, the Pacific coast in the west. The larger the territory, the more precise the records needed.

But Tawantinsuyu had no writing. No alphabet, no glyphs, no pictographs.

We had quipu.

Khipu = knot. A primary cord with dozens to hundreds of pendant cords, each knotted at different positions in different types. Position encoded base-10 digits — ones, tens, hundreds, thousands. Color and knot type encoded category — maize, potatoes, warriors, households.

Around 1460, in Coricancha, the first complete imperial census quipu was knotted before me: how much maize each village produced, how many households, how many adult men, how many mit'a laborers owed this year. One set of cords — one province's full ledger.

A camayoc, a quipu specialist, ran fingers across the knots and read me the numbers. This system administered an empire of millions.

Careful framing: quipu is not a "writing substitute" — that inverts the problem. It was an entirely different information technology: exceptionally suited to numbers and administrative records; whether it could encode narrative and history is still debated, and it remains undeciphered.

Meanwhile, in the Mali Empire (West Africa, 600-1591), a merchant's daughter named Aisha kept ledgers in Arabic script in Timbuktu. In 1413 her records held text, stories, travel notes.

Two tools, two empires, roughly the same era. Which one was "more advanced"? That question is wrong — the two tools solved somewhat different problems, and both paths worked.`,
    },
    deliverGoal: 'N8 约 1460 帝国清册 quipu 完成 + quipu 技术原理（十进位 + 颜色分类）+ Urton 2003 「不是文字替代是不同范式」+ cross-Topic Mali Aisha 1413 阿拉伯字母对照 + 「行政技术决定帝国规模」',
    engagementHook: 'quipu 用绳结管理几百万人的帝国——没有字、没有书、没有纸。你觉得「谁更先进」这个问题，碰到「问题不同、工具不同」时本身有没有问题？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N9',
    title: {
      cn: 'Qhapaq Ñan：没有马，但我们有腿和山',
      en: 'Qhapaq Ñan: No Horses, but We Had Legs and Mountains',
    },
    setting: {
      time: '约 1465 年，路网主干完成',
      place: 'Andes 山脉，跨越 4000 公里',
      cn: '约 1465 年，Andes 山脉',
      en: 'c.1465, the Andes',
    },
    content: {
      cn: `一个帝国有多大，取决于消息能走多快。

Tawantinsuyu 最远的省份离 Cusco 直线超过 2000 公里。消息怎么传？军队怎么调动？

我建了路。「Qhapaq Ñan」= 王道，从 Cusco 向四个 suyu 延伸的石砌道路。到我和 Topa Inca 建完时总长约 40,000 公里——跨过 Andes 山脉（海拔 4,000-5,000 米）、Atacama 沙漠（世界最干），沿 Amazon 河西缘延伸。

路上每隔 1.5 到 3 公里有一个 tambo（驿站），站着 chasqui——训练有素的跑步信使。每个跑约 2 公里，把 quipu 或口信接力给下一个。一天，消息能跑 250 到 400 公里。

没有马。这点要小心：美洲在 1492 年之前没有马、牛、驴等大型驯化哺乳动物。Jared Diamond 1997《枪炮、病菌与钢铁》把这归因于大陆生物地理——美洲大型哺乳动物远古已灭绝，不是 Inca 人不聪明，是大陆条件不同。

Mongol 帝国的 Yam 驿站靠骑马接力，一天也传约 300 公里。两套系统速度接近——一套靠马，一套靠人腿和 4,000 米山路。同等的效率。

我建的路，560 年后被 UNESCO 列入世界文化遗产，至今还有人走。`,
      en: `An empire is only as large as the speed at which news can travel.

Tawantinsuyu's farthest provinces — northern Ecuador, central Chile, the Bolivian altiplano — lay more than 2,000 km from Cusco in straight lines. How would messages travel? How would armies be deployed? How would grain be moved?

I built roads.

Qhapaq Ñan = Royal Road. Stone-paved routes radiating from Cusco into the four suyu. By the time Topa Inca and I finished, the total was roughly 40,000 km — crossing the Andes (4,000 to 5,000 m), the Atacama desert (the driest place on Earth), and the western edge of the Amazon.

Every 1.5 to 3 km sat a tambo, a way station, staffed by chasqui — trained running messengers. Each chasqui ran about 2 km, passed the quipu or verbal message to the next, and the relay continued: 250 to 400 km per day.

No horses. Careful framing: the Americas had no horses before 1492 (Europeans brought them) — no cattle, no donkeys, no large domesticable mammals. Jared Diamond's 1997 Guns, Germs, and Steel attributes this to continental biogeography — the Americas' large mammals went extinct in deep prehistory, not because Inca people were less capable, but because the continent's conditions differed. Use that frame with caution: it is a macro narrative, and the specific engineering decisions remained human choices.

The Mongol Empire's (1206-1368) Yam relay sat stations 25 to 50 km apart, horse-relay, also covering roughly 300 km per day. Nearly equal speed — one using horses, one using human legs and 4,000-m mountain trails. Different tools, equivalent efficiency.

In 2014, UNESCO inscribed Qhapaq Ñan as a World Heritage Site, spanning Argentina, Bolivia, Chile, Colombia, Ecuador, and Peru. The roads I built are still walked 560 years later.`,
    },
    deliverGoal: 'N9 约 1465 Qhapaq Ñan 路网主干完成 + 40,000 公里 + chasqui 信使 250-400 公里/天 + cross-Topic Mongol Yam 对照 + Diamond 1997 大陆生物地理 careful framing + UNESCO 2014 世遗',
    engagementHook: '没有马，靠人腿在 4,000 米山路上接力，一天传 250-400 公里——跟蒙古帝国骑马驿站的速度差不多。你觉得「有马」和「没马」这件事，是文明高低的体现，还是地理条件不同？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N10',
    title: {
      cn: 'panaca 木乃伊制度：死人怎么继续治国',
      en: 'panaca Mummy Rule: How the Dead Keep Governing',
    },
    setting: {
      time: '约 1470 年',
      place: 'Cusco，王宫，Pachacuti 与 Topa Inca 对话',
      cn: '约 1470 年，Cusco 王宫',
      en: 'c.1470, Cusco palace',
    },
    content: {
      cn: `我快死了。不是字面意义上的今天——而是开始能感受到时间的边界了。

我把 Topa Inca 叫到跟前。他是我选定的继承人——不是嫡长子，是我看中能继续扩张帝国的儿子。

「我死后，」我说，「我的财产是我的。我的 panaca——王室家族——会继续管理封地，供奉我的木乃伊。田地还是我的。你不能碰。」

「那我的财产从哪里来？」他问。

「你要去打新地方，」我说。「你父亲的东西不会留给你——你要自己征服。」

这就是 panaca 制度。

我死后，身体不埋进墓里，而是被木乃伊化，保存在 Cusco，由 panaca 永远供奉。我会有自己的房子、仆人（yanakuna）、土地。重大节日，我的木乃伊会被抬出来，跟活着的 Sapa Inca 并排坐着。

这不是迷信，是宪政结构。Maria Rostworowski 1999 说得很清楚：每任 Sapa Inca 死后木乃伊化，财产被 panaca 永久锁定——新任一分不能动前任的财产，因为前任「还在」。所以新任只能往外打新地，凑自己的财产。

这是 Tawantinsuyu 不停扩张的制度动因。不是每任 Sapa Inca 都有征服欲——是制度迫使他必须征服。

我设计了一个让我死后继续有影响力的机制，也设计了一个让帝国必须不停生长才不死的机制。两件事是同一件事。`,
      en: `I was not dying today — but I could feel the edge of time.

I summoned Topa Inca. He was the son I had chosen to succeed me — not the eldest legitimate heir, but the one I judged capable of continuing the empire's expansion.

"When I die," I said, "my estate remains mine. My panaca — my royal household lineage — will maintain my mummy and manage my lands. My fields stay my fields. You cannot touch them."

"Then where does my wealth come from?" he asked.

"You go and conquer new land," I said. "Your father's holdings will not be handed to you — you must win your own."

This is the panaca system.

After my death my body will not be buried. It will be mummified, preserved in Cusco, perpetually venerated by my panaca. I will have my own house, my own servants (yanakuna), my own estates (my living-era lands remaining "mine"). At major festivals my mummy will be carried out to sit alongside living Sapa Inca.

This is not superstition. It is constitutional structure: every Sapa Inca on death is mummified and their wealth permanently locked to their panaca — the successor cannot touch the predecessor's estates, because the predecessor "remains." So the new ruler must conquer fresh territory to build his own wealth.

This is the structural driver of Tawantinsuyu's perpetual expansion. Not every Sapa Inca necessarily wanted conquest — the institution compelled it.

I designed a mechanism that kept me influential after death. I also designed a mechanism that required the empire to keep growing or die.

Those two things are the same thing.`,
    },
    deliverGoal: 'N10 约 1470 panaca 木乃伊制度 + Pachacuti 与 Topa Inca 对话 + 「死人财产不能给继承人」→ 帝国永远扩张的制度动因 + Rostworowski 1999 + 「死人怎么继续治国」',
    engagementHook: '我建了一个制度，让我死后财产还是我的——但这个制度同时迫使我儿子必须去打新地方。你觉得这是聪明的设计，还是一个会把帝国逼死的陷阱？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N11',
    title: {
      cn: '共治，然后终于死——他没法预见微生物',
      en: 'Co-reign, Then Death — He Could Not Foresee Microbes',
    },
    setting: {
      time: '1471-1472 年，Pachacuti 老年，与 Topa Inca 共治',
      place: 'Cusco',
      cn: '1471-1472 年，Cusco',
      en: '1471-1472, Cusco',
    },
    content: {
      cn: `1471 年，我把权力交给 Topa Inca，但还活着，共治了一年多。他已经把帝国往北推到厄瓜多尔的 Quito，准备南征。

帝国 1471 年的人口估算差距很大：Rowe 1946 约 600 万，D'Altroy 2002 修订为 900-1400 万——没文字只能推算。

我在 1472 年死了，在位 34 年。

反讽：我花 34 年从次子建起大陆上最大的政体。但我死后 60 年，它被 168 个 Francisco Pizarro 的兵终结——还有他们带来的天花。

天花先于 Pizarro 到达安第斯——欧洲人从 1518 年起就在沿岸传播它（Cook 1998），比军队快。1527 年它杀死了我的继承人 Huayna Capac 和他的指定继承人，Atahualpa 和 Huáscar 为皇位内战，帝国在 Pizarro 到达前已撕裂。

1521 年 11 月，北方传来消息：Tenochtitlán 8 月陷落，西班牙人打下了 Aztec。但就算消息传到 Cusco，也没人会把它跟我们联系。

我建了一整套制度：mit'a、mitmaq、panaca、Qhapaq Ñan、quipu、Coricancha，每一个都很有效，都需要帝国运转才能维持。

但我没设计对抗微生物的制度。没人设计过。`,
      en: `In 1471 I transferred power to Topa Inca but remained alive. We co-ruled for a little over a year. He had already pushed north to Quito in today's Ecuador and was now ready to push south. I knew he would win, the same way I once knew I would win.

How large was the empire in 1471? Population estimates range widely: Rowe (1946) suggested about 6 million; D'Altroy (2002) revised this to possibly 9 to 14 million — without writing, population can only be inferred from quipu records and archaeology.

I died in 1472. 34 years on the throne.

The irony: 34 years from a second son in a small city to the largest polity on this continent. But 60 years after my death, it was ended by 168 soldiers under Francisco Pizarro — plus something they brought that I could not see: smallpox.

Smallpox reached the Andes before Pizarro himself — spreading since 1518 (Cook 1998) along the coasts, faster than armies. By around 1527 it had killed my successor Huayna Capac and his designated heir; succession collapsed into civil war between brothers Atahualpa and Huáscar. The empire was already tearing itself apart when Pizarro arrived.

In November 1521, news came from the north — Tenochtitlán had fallen in August; the Spanish had defeated the Aztec. But even if the news had reached Cusco, no one would have connected it to what was coming.

I built a whole system of institutions: mit'a, mitmaq, panaca, Qhapaq Ñan, quipu, Coricancha. Every one was effective; every one depended on the empire continuing to function.

But I had not designed an institution to resist microbes. No one had.`,
    },
    deliverGoal: 'N11 1471-1472 共治 + 1472 死在位 34 年 + 反讽（168 人 + 天花 60 年后终结帝国）+ 天花 1524-1527 先于 Pizarro 到达 + Rowe 1946 vs D\'Altroy 2002 人口估算 + 1521.11 Tenochtitlán 跨 lens 时刻 + 「institution-builder 的盲点」',
    engagementHook: '我建的 mit\'a、mitmaq、panaca、Qhapaq Ñan 每一个都很有效，唯独没有设计对抗微生物的制度。对这件事有两种读法。一种说：这是我的盲点，我太相信自己建的系统，没有给「我没见过的威胁」留任何位置。另一种说：这不是盲点，是结构注定的，当时没有任何人能预见微生物，怪不到某个人头上。你更同意哪一种？想 30 秒，写下来。',
    expectsRealAnswer: true,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N12',
    title: {
      cn: '1472 死后 → 1532 木乃伊还在 Cusco，Atahualpa 走进伏击',
      en: '1472 Death → 1532: My Mummy Still in Cusco, Atahualpa Walks into the Trap',
    },
    setting: {
      time: '1472 死后 → 1532 年 11 月 16 日，Cajamarca',
      place: 'Cusco（mummy）↔ Cajamarca（Atahualpa 被俘）',
      cn: '1472-1532，Cusco ↔ Cajamarca',
      en: '1472-1532, Cusco and Cajamarca',
    },
    content: {
      cn: `我死了，1472 年。

panaca 把我木乃伊化，每年大典抬出来和活着的 Sapa Inca 并排坐着。死了，但还在治国——Julien 2000 和 Dean 2010 都强调：Inca 帝国不是「死的过去」，是「死人还在治国的现在」。1532 年 Pizarro 到 Cusco 时，11 任木乃伊全在（他 1559 年毁掉）。

1532 年 11 月 16 日，Cajamarca。我的曾孙 Atahualpa 走进 Pizarro 的广场。Pizarro 只带 168 人；Atahualpa 带了 6,000-8,000 随扈，却当成礼仪场合没武装。Pizarro 早设了伏击。结果：Atahualpa 被俘，随扈被杀几千，没有一个西班牙人死。

不能说 Atahualpa 愚蠢，也不能说 Pizarro 聪明。Restall 2003《Seven Myths of the Spanish Conquest》说得对：「168 人征服 600 万人」是神话——真实的是一个已被天花和内战打烂的帝国碰上了枪、马、钢和外交。

我不是英雄，也不是恶霸。我的成功和失败来自同一处：我把帝国的逻辑建得太好了——制度越精密，越不能承受它没设计过的事。

34 年，从次子到改变大陆。然后，60 年。`,
      en: `I was dead. 1472.

My panaca mummified me and carried me out at every major ceremony to sit alongside the living Sapa Inca. I was dead, but I was still governing. This is what Catherine Julien (2000) and Carolyn Dean (2010) both emphasize: the Inca Empire was not "the dead past" but "the dead still ruling the present." When Pizarro reached Cusco in 1532, all 11 Sapa Inca mummies were still there — he ordered them destroyed in 1559.

November 16, 1532. Cajamarca. My great-grandson Atahualpa walked into Francisco Pizarro's plaza. Pizarro had brought only 168 men; Atahualpa came with an escort of 6,000 to 8,000, but treated it as a reception, not a battlefield, and came unarmed. Pizarro had set an ambush. By the end of that day: Atahualpa captured, thousands of his escort killed, not one Spaniard dead.

It is too simple to say Atahualpa was foolish, too simple to say Pizarro was brilliant: his greatest advantage was not tactics but an empire already broken from within by smallpox and civil war. "168 men conquered 6 million people" is a myth (Restall 2003, Seven Myths of the Spanish Conquest) — what actually happened is an empire already cracked from disease and civil war meeting guns, horses, steel, and diplomacy.

I am not a hero, and not a villain. My success and my failure came from the same place: I built the empire's logic too well — every institution consumed people, and the more precisely engineered a system, the less it can withstand what it was not designed for. Tawantinsuyu had already begun to crack before the conquerors arrived; they only pushed it the last bit.

34 years — from second son to continental reshaping. Then, 60 years.`,
    },
    deliverGoal: 'N12 closing 反 Whig + 1472 死后 mummy 继续参政 + 1532.11.16 Cajamarca Atahualpa 被俘 (Hemming 1970) + 168 人神话 careful framing (Restall 2003) + 天花 + 内战才是真正原因 + 「34 年帝国 vs 60 年终结」时间感 + 「成功和失败同源」closing',
    engagementHook: '走完我这一生——34 年从次子建起整片大陆最大的帝国，却没设计过对抗微生物的制度，60 年后被天花和内战从内部撕裂。你会怎么评价这样一个把系统建得「太有效」的人？再想一步：你身边有没有这种「某个系统做到极致、却对没见过的威胁毫无准备」的人或组织，你会怎么对待 TA？',
    expectsRealAnswer: true,
    nodeType: 'perpetrator-actor',
  },
  ],
};

export var malintzinLens = {
  id: 'malintzin-mediator',
  name: 'Malintzin (La Malinche / Doña Marina)',
  nameCn: '马林钦（玛利纳 / 玛利切）',
  role: 'lonely-mediator',
  roleDescription: 'Nahuatl-Maya-Spanish trilingual broker',
  description: {
    cn: '她是 Aztec 帝国东南边境上的一个小女孩，白天身边的人说 Nahuatl，夜里河对岸传来 Maya 话，父亲是当地 cacique 贵族，带着玉和可可豆去 Tenochtitlán 朝贡。这一遍让你跟她从那个双语童年走进父亲死后的那几年，两种语言不再是小孩子的玩耍，变成她唯一能用来活下去的东西。',
    en: 'She is a small girl on the southeastern edge of the Aztec empire, falling asleep to Nahuatl by day and Chontal Maya from across the river at night, the daughter of a cacique who walks to Tenochtitlan with jade and cacao. This pass walks with her from that two-language childhood into the years after her father dies, when those two tongues stop being a private game and become the only thing keeping her alive.',
  },
  descriptionCn: '她是阿兹特克帝国东南边境上一个小女孩,白天周围的人说 Nahuatl,夜里河南边传来的是 Maya 话,父亲是带玉器和可可豆走到 Tenochtitlán 朝贡的贵族 cacique。这一遍从她童年那两种语言开始,跟她走进父亲死后的那些年,看小时候只当作日常的两种语言怎么变成她唯一能用来活下去的东西。',
  storyboard: [
  {
    id: 'N1',
    title: {
      cn: '边境出身就是命运',
      en: 'Born on the border',
    },
    setting: {
      time: 'c.1500（Townsend 2006 估计 1500-1502 出生概率最高，c.1500 是中值）',
      place: 'Coatzacoalcos，今 Veracruz 与 Tabasco 交界低地',
      cn: '约公元 1500 年，Coatzacoalcos，Aztec 帝国东南边境',
      en: 'c. 1500, Coatzacoalcos, southeastern frontier of the Aztec empire',
    },
    content: {
      cn: `我最早的记忆是两种声音。

白天，父亲身边的人说 Nahuatl——我们家族的语言，也是大城 Tenochtitlán 和整个 Aztec 帝国的官话。晚上，从河南边传来的是 Chontal Maya，更低沉，辅音更多，像雨季里的青蛙叫。我住的 Coatzacoalcos 就在这条语言分界线上——北边是 Nahuatl 村子，南边是 Maya 村子，中间是我家。

父亲是这里的 cacique，贵族领主。我不会忘记他的样子：地界争端里他一发言，两边都听；他去 Tenochtitlán 朝贡，穿着棉甲，带着玉器和可可豆。生在贵族家，意味着我不用下地，可以学，可以听大人谈论远方的事。

我懂事那几年，Moctezuma II 刚即位不久，是 Aztec 帝国最鼎盛的时候：控制超过 500 万人口，首都 Tenochtitlán 有 20 到 25 万人，比欧洲任何城市都大。这些我当时不知道——我只是一个边境上的小女孩，在两种语言里玩耍。

那时我不懂「边境」意味着什么。后来才懂：边境不是你能选的，它就是你是谁的一部分。两种语言在我脑子里住下来，我以为很普通，不知道它们会变成我唯一能用来活下去的东西。

8 岁前的世界，小而完整。`,
      en: `My earliest memories hold two kinds of sound.

By day, the people around my father spoke Nahuatl — the language of our family, of the great city Tenochtitlán, the official tongue of the entire Aztec empire. At night, from across the southern river, came Chontal Maya, lower, with more consonants, like frogs calling in the wet season. Coatzacoalcos, where I was born, sat right on this language boundary — Nahuatl villages to the north, Maya villages to the south, my home in the middle.

My father was the cacique here — a noble lord. I remember how he looked: speaking in land disputes while both sides listened; traveling to Tenochtitlán to pay tribute, in cotton armor, carrying jade and cacao. Born into a noble family meant I did not work the fields. I could learn, could sit near the adults and hear them talk of distant things.

As I was growing aware of the world, Moctezuma II had not long been on the throne — the Aztec empire at its fullest: more than five million people, the capital Tenochtitlán holding 200,000 to 250,000 (Hassig 1988; estimates vary), larger than any city in Europe. I knew none of this then. I was just a small girl on the border, playing between two languages.

I did not understand what "border" meant yet. Later I would learn: a border is not something you choose. It is part of what you are. Both languages settled into my mind. I thought this was ordinary. I did not know they would become the only tools I had for staying alive.

Those years before I turned eight — the world was small and whole.`,
    },
    deliverGoal: 'N1 hook — c.1500 出生 + Coatzacoalcos 双语边境 + 贵族身份 + 两种语言早期习得 + 出生年 hedge (Townsend 2006 估计 1500-1502 最高概率)',
    engagementHook: '我从小住在 Nahuatl 和 Maya 两种语言的边界上，以为这很普通。你有没有哪种「小时候觉得普通，后来发现是命运」的东西？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N2',
    title: {
      cn: '母亲为什么这样做',
      en: 'Why my mother did what she did',
    },
    setting: {
      time: 'c.1508-1510，约 8 岁',
      place: 'Coatzacoalcos',
      cn: '约公元 1508-1510 年，Coatzacoalcos，父亲死后',
      en: 'c. 1508-1510, Coatzacoalcos, after my father\'s death',
    },
    content: {
      cn: `父亲死的那一年，我大概 8 岁。

我记得的不是具体的日子，而是之后一切变化的速度。母亲改嫁，又有了一个儿子。在 Nahua 贵族社会，土地和身份沿男性继承——这个新生的弟弟比我更有资格继承父亲留下的一切。

关于接下来的事，有两个版本。

Bernal Díaz del Castillo 在 1568 年的回忆录里写：母亲为了让新生儿继承家产，把我卖给过路商人，对外宣称女儿死了。他写得很直白，像亲眼见过。但他写这本书时离事件已近五十年，而且是写给西班牙读者看的，他需要一个值得同情的女主角。

历史学家 Camilla Townsend 2006 年提出另一种可能：我也许是在部落冲突里被俘走的，而不是被卖。她倾向这个说法，指出在 Mesoamerica，奴隶更多来自战争俘虏，而非家庭出售。

哪个是真的？我不知道，历史学家也没定论。

但不管哪一种，有一天，8 岁的我离开了那个曾有父亲声音的院子。出发时母亲对我说了什么、或没说什么，我不会在这里还原——因为我不知道。

我只知道：有人对外宣称那个孩子死了。而那个孩子还活着，活着进入了奴隶网络。`,
      en: `My father died when I was around eight years old.

What I remember is not any particular day but the speed at which everything changed afterward. My mother remarried. Then she had a son. In Nahua noble society, land and standing passed through men — this newborn half-brother had more claim to everything my father had left behind than I did.

About what happened next, there are two versions.

Bernal Díaz del Castillo wrote in his 1568 memoir that my mother sold me to passing merchants in order to secure the inheritance for the new baby boy, and then told everyone outside that her daughter had died. He wrote it plainly, as if he had witnessed it. But Bernal Díaz wrote his book nearly fifty years after the fact, for Spanish readers who needed a sympathetic heroine.

Historian Camilla Townsend, writing in 2006, offered another possibility: I may have been taken in a raid or tribal conflict, not sold by my mother at all. Townsend leans toward this version. She points out that in Mesoamerica, enslaved people came more commonly from warfare captives than from family sales.

Which is true? I do not know. The historians do not agree either.

What I can tell you is this: whatever way it happened, one day I left that courtyard where my father's voice had once lived. What my mother said to me as I left, or whether she said anything — I will not reconstruct that here, because I do not know.

I know only that someone announced to the world: that child is dead. And that child was still alive. Alive, and now inside the slave network.`,
    },
    deliverGoal: 'N2 父死 + 母改嫁生子 + 双源对照（Bernal Díaz 1568 被卖 vs Townsend 2006 被俘）+ careful framing 不评判 + 母亲宣称女儿已死的具体瞬间',
    engagementHook: '两种说法——母亲卖了我，或者我是在战乱里被抢走的。你认为哪个版本更可能？为什么历史学家到今天还没有定论？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N3',
    title: {
      cn: '语言是奴隶的工具，也是奴隶的盔甲',
      en: 'Language: a slave\'s tool and a slave\'s armor',
    },
    setting: {
      time: '1510-1519，9 年奴隶网络',
      place: '从 Nahuatl 区到 Maya 区，Mesoamerica 奴隶贸易路线',
      cn: '公元 1510-1519 年，Mesoamerica 各主人家',
      en: '1510-1519, various households across Mesoamerica',
    },
    content: {
      cn: `9 年里，我至少换了 3 个主人。

从 Nahuatl 语区往南，进入 Maya 语区。从熟悉到不熟悉，再到更不熟悉。奴隶不能拒绝移动，唯一能带走的是脑子里的东西。

大约 12 岁那年，我第一次来到一个纯 Maya 村子。我记得那天新主人在拜他们的雨神 Chaac——Nahuatl 地区的雨神叫 Tlaloc，脸不一样；Maya 的 Chaac 有长鼻子、弯牙，像蛇。我站在边上，听那些不完全懂的祷词，努力辨认哪个音节是什么意思。

那是我第一次意识到：语言不只是说话，是一把钥匙。听懂了，你就在门里面一点点；听不懂，你什么都不是。

那 9 年里，我慢慢不只是听懂 Maya，而是会说、会想、会用 Maya 的逻辑去理解 Maya 的世界。Nahuatl 是母语，Maya 是我在奴役里学会的第二语言——两种语言并排住在我脑子里，互相提醒对方哪里不一样。

我没有选择学它们，我是被迫的。但被迫学来的不比主动学来的差，有时甚至更深——因为你学的时候，命就压在上面。

1519 年，我 19 岁，被送给西班牙人时，我精通 Nahuatl 和 Chontal Maya，正在快速学西班牙语。这是 9 年奴隶生涯唯一给我的：两把钥匙。我不知道它们能开什么门。`,
      en: `Over nine years, I changed hands at least three times.

Moving south from Nahuatl-speaking territory into Maya-speaking territory. From familiar places to unfamiliar ones, then to places more unfamiliar still. A slave cannot refuse to move. The only thing a slave carries is what is stored in the mind.

I was around twelve the first time I came to a fully Maya village. I remember the day: my new household was making offerings to their rain god Chaac. In the Nahuatl regions, the rain god is Tlaloc, a different face. Chaac has a long curved nose and bent teeth, something like a serpent. I stood to the side and listened to the prayers I didn't fully understand, trying to pick apart which syllable meant what.

That was the first time I understood: language is not just talking. Language is a key. Understand it, and you are slightly inside the door. Fail to understand, and you are nothing.

In those nine years, I made myself understand Maya. Slowly — not just understand, but speak, and think, and use Maya logic to read a Maya world. Nahuatl was my mother tongue; Maya was the second language I learned inside slavery. Both lived side by side in my mind, each one pointing out where the other was different.

I did not choose to learn these two languages. I was forced to. But what you learn under force is no weaker than what you learn by choice. Sometimes it goes deeper — because when you are learning, your life is the weight pressing down on it.

In 1519, when I was nineteen and handed to the Spaniards, I was fluent in Nahuatl and Chontal Maya and rapidly learning Spanish. Nine years of slavery had given me exactly one thing: two keys. I did not yet know what doors they would open.`,
    },
    deliverGoal: 'N3 9 年奴隶网络 + 至少 3 次易主 + 具体瞬间（12 岁第一次见 Maya 雨神 Chaac）+ 「语言是钥匙」内核 + 双语精通的原因',
    engagementHook: '我 12 岁第一次听到 Maya 雨神 Chaac 的祷词，不完全听懂，但拼命辨认每个音节。你学过什么东西是「被迫学的，但后来发现很重要」？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N4',
    title: {
      cn: 'microbe 不知道她是谁，但她活下来了',
      en: 'The microbe did not know who she was, but she survived',
    },
    setting: {
      time: '1518-1519，第一波天花沿 Caribbean 航线传入',
      place: 'Tabasco / Yucatán 沿海，奴隶网络各地',
      cn: '公元 1518-1519 年，Tabasco 沿海',
      en: '1518-1519, Tabasco coast and surrounding regions',
    },
    content: {
      cn: `1518 年，一场病从加勒比海沿船过来了。

西班牙人从 Hispaniola 带来的天花在 Caribbean 岛屿上已经杀了大量人口，然后沿着西班牙船只的航线往西传。Tabasco 和 Yucatán 沿海是最早接触的地方之一。

我那时候大约 18 岁，还在奴隶网络里。关于那段时间，我没有留下任何直接的叙述——历史上没有任何文件记录我在 1518-1519 年天花流行里的经历。但我活下来了，而且活到了 1521 年 Tenochtitlán 围城那 75 天，而那座城里的天花会杀死 30% 到 40% 的人。

历史学家的推测是：可能在更早的某次接触里，我感染了较轻的症状，获得了部分免疫力。也可能只是运气。

天花不知道我是谁。它不知道我是贵族出身还是奴隶，不知道我会说两种语言，不知道我后来会站在两个文明之间。它只是一种病毒，按自己的逻辑传播。

同时代的 Black Death（1347-1353 年横扫欧亚）和后来的天花在美洲展示了同一个规律：疾病不挑选受害者，但它的影响总是不均匀的。有些人活下来，有些人死去，活下来的人不一定比死去的人更值得活，但活下来的人会改变接下来的历史。

我活下来了。这本身，就已经是历史的一部分。`,
      en: `In 1518, a disease came from the Caribbean on Spanish ships.

Smallpox, brought from Hispaniola, had already killed large numbers of people across the Caribbean islands. The disease traveled west along Spanish sailing lines — the Tabasco and Yucatán coasts were among the earliest places it reached on the mainland.

I was around eighteen at the time, still inside the slave network. I have left no direct account of that period. No document records what I experienced during the 1518-1519 smallpox outbreak. But I survived — and I survived through the seventy-five-day siege of Tenochtitlán in 1521, when the disease inside that city was killing thirty to forty percent of its people.

Historians speculate: perhaps an earlier lighter exposure gave me partial immunity. Perhaps it was only chance.

Smallpox did not know who I was. It did not know I was noble-born or enslaved, did not know I could speak two languages, did not know I would one day stand between two civilizations. It was just a virus, spreading according to its own logic.

The same pattern showed itself again here in the Americas — the Black Death swept across Eurasia 1347-1353; smallpox swept the Americas from 1518: disease does not choose its victims, but its effects are never evenly distributed. Some people live and some people die, and the ones who live are not more deserving than the ones who die — but the ones who live will shape what comes next.

I lived. That fact alone was already part of history.`,
    },
    deliverGoal: 'N4 1518 第一波天花 Caribbean 传入 + Cook 1998 来源 + Malintzin 可能部分免疫（史料不确定）+ McNeill 1976 疫病模式 cross-ref + 反 Whig「活下来不是因为更值得」',
    engagementHook: '天花不知道我是谁。它按自己的逻辑传播，杀了几十万人，但我活下来了。这件事让你怎么看「命运」和「运气」的关系？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N5',
    title: {
      cn: '19 岁的她，被赠的瞬间',
      en: 'Nineteen years old, the moment of being given away',
    },
    setting: {
      time: '1519 年 3 月末，Tabasco 战后',
      place: 'Tabasco 河口，今墨西哥 Tabasco 州',
      cn: '公元 1519 年 3 月末，Tabasco 河口',
      en: 'Late March 1519, Tabasco river mouth',
    },
    content: {
      cn: `那是一个我不会忘记的早上。

Cortés 的船队 1519 年 3 月 4 日从 Cuba 出发，先到 Cozumel 岛，再沿海岸到 Tabasco。Tabasco Maya 跟西班牙人短暂交战，输了——黑曜石矛对铁剑火枪，棉甲对钢甲，还有从没见过的马。Tabasco cacique 战败后送上和解礼物：食物、布料，还有 20 个奴隶妇女。

我是其中之一。

我 19 岁，已经做了约 9 年奴隶。又一次被当作礼物送出去——这不是第一次。但这一次不同：接收我的不再是 Mesoamerica 的人，而是从大海另一边来的人，穿着铁，带着长枪，说着我听不懂的语言。

那时候，Hispaniola 岛上的 Taíno 女王 Anacaona 已经被西班牙人处死整整 11 年了（1508 年）。她试图用谈判和解保全族人，最后被绞死。西班牙人在加勒比海已经征服了一圈，现在轮到大陆了（参见「大航海时代」：加勒比 → 大陆的征服路线）。

我不知道 Anacaona，不知道 Hispaniola 发生了什么。我只站在那里，看着这些从海上来的人把我和另外 19 个女人分配出去。

这一刻，我没有选择。接下来的岁月里，我几乎每一刻都没有选择。但我做了每个没选择的人能做的事：睁眼看，用耳朵听，让脑子继续运转。`,
      en: `There was a morning I will not forget.

Cortés's fleet left Cuba on March 4, 1519. First stop, Cozumel island; then south along the coast to Tabasco. The Tabasco Maya fought the Spaniards briefly and lost. Obsidian against iron, cotton armor against steel, and horses no one had ever seen. After the defeat, the Tabasco cacique sent peace offerings: food, cloth, and twenty enslaved women.

I was one of them.

I was nineteen. I had been enslaved for approximately nine years. Being given as a gift — that was not a new experience for me. But this time was different: the people receiving me were not from anywhere in Mesoamerica. They had come from across a sea I had never seen, wearing iron, carrying long guns, speaking a language I could not follow.

At that time, Anacaona — the Taíno queen of Hispaniola — had been dead for exactly eleven years, executed by the Spanish in 1508. She had tried negotiation and compromise to protect her people, and was hanged for it. The Spanish had already made a circuit of the Caribbean, and now they were turning to the mainland. (Cross-ref to Age of Exploration: the Caribbean-to-mainland conquest path.)

I knew nothing about Anacaona. I did not know what had happened in Hispaniola. I only stood there, watching these men from the sea as they distributed me and the other nineteen women.

In that moment, I had no choice. In nearly every moment that followed, I would have no choice. But I did what anyone without choice can do: I kept my eyes open, I kept my ears working, and I kept my mind running.`,
    },
    deliverGoal: 'N5 1519.3 Tabasco 战 + 20 奴隶妇女被赠 Cortés + 具体瞬间（被赠的那个早上）+ Anacaona cross-ref（Hispaniola 1508 处死，同时代）+ 「没有选择里做了唯一能做的事」',
    engagementHook: '我 19 岁被当作礼物送给从大海另一边来的人。那一刻我没有选择。你觉得「没有选择」和「做了错误的选择」之间，有什么区别？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N6',
    title: {
      cn: '她的嘴变成两个文明的接口',
      en: 'Her mouth became the interface between two civilizations',
    },
    setting: {
      time: '1519 年 4 月，受洗后数日',
      place: 'Tabasco / Veracruz 沿海，Cortés 营地',
      cn: '公元 1519 年 4 月，Cortés 营地',
      en: 'April 1519, Cortés\'s camp',
    },
    content: {
      cn: `几天之内，Cortés 就发现了我能做什么。

1519 年 4 月初，他给我们 20 个女人受洗。我的受洗名是「Marina」，先被分给军官 Alonso Hernández Portocarrero。然后 Cortés 发现我会说 Nahuatl 和 Chontal Maya，立刻把我调到身边。

这时团队里已有一个 Jerónimo de Aguilar：1511 年 Yucatán 沉船幸存者，在 Maya 部落做了 8 年奴隶，会西班牙语和 Maya。

于是有了这条翻译链：Cortés 说西班牙语 → Aguilar 翻成 Maya → 我翻成 Nahuatl → 对方回答 → 我翻回 Maya → Aguilar 翻回西班牙语。每一句话从一种文明传到另一种，都要经过我两次。

还有一件事值得记：1519 年 7 至 8 月间 Cortés 凿沉了大部分船（约 8 到 11 艘，他给 Charles V 的信和 Hugh Thomas 1993 都确认是凿沉）——不是「英雄式烧船」，是防止手下逃回 Cuba。我和那些船一样，没有退路。

到 1519 年底，我已学会西班牙语，长链缩短了：Cortés 直接跟我说，我直接跟 Nahuatl 那边说。两个文明之间，只剩下我。`,
      en: `Within a few days, Cortés discovered what I could do.

In early April 1519, Cortés had us twenty women baptized and given Christian names. My baptismal name was Marina — a common Spanish woman's name. I was first given to a Spanish officer named Alonso Hernández Portocarrero. Then Cortés realized I spoke Nahuatl and Chontal Maya. He pulled me to his own side immediately.

Cortés already had a man named Jerónimo de Aguilar in his group. Aguilar had survived a 1511 Yucatán shipwreck and spent eight years enslaved among the Maya; he spoke Spanish and Yucatec Maya. Cortés had collected him at Cozumel island in March 1519.

And so the translation chain formed:
Cortés spoke Spanish → Aguilar translated to Maya → I heard Maya and translated to Nahuatl → the Aztec or Tlaxcala listener responded in Nahuatl → I translated back to Maya → Aguilar translated back to Spanish → Cortés heard.

Every sentence, traveling from one civilization to another, passed through me twice.

One more thing from this period is worth noting: in July or August of 1519, Cortés sank his ships. His second letter to King Charles V, dated October 30, 1520, makes this clear — and Hugh Thomas's 1993 research confirms it: Cortés scuttled most of the ships (sources vary: eight to eleven, with Hugh Thomas 1993 recording most were scuttled), keeping a few in reserve. This was not a heroic "burn the ships" gesture — it was to prevent his men from deserting back to Cuba. Like those ships, I had no way back either.

By the end of 1519, I had learned Spanish. The long chain shortened: Cortés spoke directly to me, I spoke directly to the Nahuatl speakers on the other side. Aguilar was still present, but receded. Between two civilizations, I was the only one left in the middle.`,
    },
    deliverGoal: 'N6 受洗 Marina + 三角通信链（Cortés→Aguilar→Malintzin→Nahuatl）+ 快速学西班牙语 + Cortés 凿沉 9 艘（Hugh Thomas 1993 确认，不是全烧）P0 fix',
    engagementHook: '我的嘴变成了两个文明之间唯一的声音——每句话都经过我两次。你觉得「翻译」这件事，能做到百分之百准确吗？什么东西会在翻译里消失？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N7',
    title: {
      cn: 'lonely mediator 第一次被对方承认',
      en: 'The lonely mediator is recognized for the first time',
    },
    setting: {
      time: '1519 年 9 月，Tlaxcala 谈判',
      place: 'Tlaxcala，中部高原东部山地',
      cn: '公元 1519 年 9 月，Tlaxcala 联盟议事厅',
      en: 'September 1519, Tlaxcala confederation council',
    },
    content: {
      cn: `这是我第一次感到两边都在看我。

从 Veracruz 往内陆走约 400 公里山路。第一个真正的障碍是 Tlaxcala——一个独立的 Nahua 联盟，4 个城邦合并，在 Aztec 包围里维持了几十年独立。Aztec 跟他们打花战（Xochiyaoyotl）抓俘虏献祭；Tlaxcala 憎恨 Aztec，但从没被打垮。

Cortés 的队伍先和 Tlaxcala 战了约 3 周，双方都死了人。然后 Tlaxcala 长老开会：打不过西班牙人，不如借他们打 Aztec。9 月中下旬转为结盟。

就在这场谈判里，Aguilar 退到背后。Tlaxcala 长老说的是 Nahuatl，我的母语，我直接跟他们说。

有一个老长老，我不记得名字，但记得他看我的方式。他说了一个词：la lengua，「舌头」。西班牙人也这么叫我。这个词在他嘴里不是贬低，而是陈述：你是这里起作用的人，你是嘴。Townsend 2006 记录：Tlaxcala 留下的文献里，她被称为「真正在场的西班牙代言人」。

我不是代言人，我是奴隶、工具、「舌头」。但被一个城邦的长老当着所有人的面认出来，被两边都看着——这是一种奇怪的感觉：两边都需要我，又都不完全属于我。

这就是 lonely mediator 的处境：被承认，但孤独。`,
      en: `This was the first time I felt both sides looking at me.

The march from Veracruz inland was roughly four hundred kilometers of mountain road toward Tenochtitlán. The first real obstacle was Tlaxcala — an independent Nahua confederation of four city-states that had maintained its independence surrounded by the Aztec empire for decades. The Aztec fought them in flower wars (Xochiyaoyotl) to take captives for sacrifice. Tlaxcala hated the Aztec but had never been broken.

Cortés's force fought Tlaxcala for about three weeks. Both sides took losses. Then the Tlaxcala elders met: they could not defeat the Spaniards — better to use them against the Aztec. In mid-to-late September, Tlaxcala switched to alliance.

It was in this negotiation that Aguilar faded to the background. The Tlaxcala elders spoke Nahuatl — my mother tongue. I spoke to them directly.

There was one old elder. I don't remember his name, but I remember how he looked at me. He used a word: la lengua. "The tongue." The Spaniards called me that too — "the tongue," "our tongue." In that moment, from the elder's mouth, it was not dismissal. It was a statement of fact: you are the one doing the work here, you are the mouth.

Camilla Townsend's 2006 research records this: in documents that Tlaxcala preserved, she was called "the real Spanish spokesperson present" — la lengua.

I was not a spokesperson. I was a slave, a tool, a tongue. But to be recognized by a city-state elder in front of everyone — to be watched from both sides at once — that was a strange feeling. Both sides needed me, and neither side fully belonged to me.

That is what it means to be a lonely mediator: to be recognized, and to be alone.`,
    },
    deliverGoal: 'N7 Tlaxcala 谈判 + Aguilar 退后 + 「la lengua 舌头」被承认（Townsend 2006 来源）+ Tlaxcala 反 Aztec 历史背景 + lonely mediator 第一次被对方命名',
    engagementHook: 'Tlaxcala 长老叫我「舌头」——la lengua——那一刻是被承认还是被物化？你觉得这两件事可以同时发生吗？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N8',
    title: {
      cn: '无选择处境里的选择',
      en: 'A choice inside a choiceless situation',
    },
    setting: {
      time: '1519 年 10 月，Cholula 大屠杀',
      place: 'Cholula，今 Puebla 附近，Aztec 盟邦',
      cn: '公元 1519 年 10 月，Cholula 广场',
      en: 'October 1519, Cholula central plaza',
    },
    content: {
      cn: `这件事我想说清楚，很多人弄混了。

Tlaxcala 结盟后，下一站是 Cholula——Aztec 的盟邦，一座有羽蛇神 Quetzalcoatl 大金字塔的宗教城市。

西班牙叙事说：我从一个 Cholula 老妇那里得到情报——Cholula 和 Aztec 商定要在城里杀西班牙人，我告诉了 Cortés。1519 年 10 月，Cortés 召集 Cholula 贵族进中央广场，下令屠杀，5,000 到 6,000 人死，多是平民（Hugh Thomas 1993；Restall 2003 称数字高度不确定）。

我的角色要小心说。一种看法（Bernal Díaz 1568）把功劳——或者说责任——都算给我：「她救了我们。」这把一场主动屠杀说成「自卫」，让一个奴隶女人来背。另一种看法（Townsend 2006）说：我可能传了情报，也可能没传，文献全是西班牙人写的；就算传了，下令的也是 Cortés。我是 19 岁的奴隶，不传就是背叛主人、被杀。

这就是 Townsend 书名《Malintzin's Choices》的意思：没有选择的处境里的选择。

我不是策划者，也不是完全无辜——我是那处境里做了唯一能做的事的人。历史把结果算在我头上，却没人问那个 19 岁的奴隶，那一秒还有几条路。`,
      en: `I want to be clear about this, because many people get it wrong.

After the Tlaxcala alliance, we continued inland. The next stop was Cholula — an Aztec ally, a major religious city with a great pyramid to the feathered serpent god Quetzalcoatl. Cortés and the Tlaxcala forces entered the city.

About two weeks later, the Spanish account says: I received information from an old Cholula woman — that Cholula and the Aztec had arranged to encircle and kill the Spaniards inside the city. I passed this intelligence to Cortés.

Around October 16-18, 1519, Cortés summoned the Cholula nobility into the central plaza and ordered a massacre. Five to six thousand people died — most of them unarmed nobles and citizens. (Hugh Thomas 1993 estimate; Restall 2003 notes these figures are highly uncertain across sources; Bernal Díaz 1568 also records the event.)

About my role in this, careful framing is necessary.

One reading (Bernal Díaz 1568) gives credit — or responsibility — to me. "She got intelligence from an old woman and saved us." This served the Spaniards: it recast a deliberate massacre as "preemptive self-defense" and placed an enslaved woman at the center of that justification.

Another reading (Townsend 2006): I may have passed intelligence, or I may not have — every document comes from Spanish narrators, there are no neutral sources. Even if I did, the one who ordered the killing was Cortés, not me. I was a slave, nineteen years old. What would not passing intelligence have meant? Betraying my master. Being killed.

This is what Townsend's book title means: Malintzin's Choices — choices made inside a choiceless situation.

I was not the planner of the massacre. I was not entirely without responsibility either. I was the person in that situation who did the only thing she could do. History has charged the outcome to my account — without ever asking what roads were actually available to that nineteen-year-old slave in that one second.`,
    },
    deliverGoal: 'N8 Cholula 大屠杀 5,000-6,000 人（Hugh Thomas 1993）+ Malintzin 角色双重 framing（西班牙叙事 vs Townsend 分析）+ 「无选择处境里的选择」核心 + 反 Whig 不是策划者也不是完全无辜',
    engagementHook: '「在没有选择的处境里做选择」——Cholula 屠杀里，Malintzin 有多少真正的选择空间？你怎么评判一个没有退路的人做的事？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N9',
    title: {
      cn: '她的声音同时被两个文明听见，但两个文明都不要她',
      en: 'Her voice heard by two civilizations, wanted by neither',
    },
    setting: {
      time: '1521 年 8 月 13 日，Tenochtitlán 陷落',
      place: 'Tenochtitlán（今墨西哥城），围城第 75 天',
      cn: '公元 1521 年 8 月 13 日，Tenochtitlán',
      en: '1521.8.13, Tenochtitlán, day 75 of the siege',
    },
    content: {
      cn: `1521 年 8 月 13 日，我翻译了那个世界的终结。

Tenochtitlán 被围 75 天。Cortés 用 13 艘双桅船控制湖面、切断水粮。兵力：约 900 西班牙人加约 15 万倒戈原住民，对城内约 8 万 Aztec 人。要注意：这不是「西班牙征服 Mexico」，是 Mesoamerica 内战加技术优势（Restall 2003）。

一年多前的 La Noche Triste（1520.6.30），约 450 到 600 西班牙兵、4,000 到 8,000 Tlaxcala 盟军死，那夜 Cortés 撤退，我在队伍里活了下来。

这一天，Aztec 最后一任 tlatoani Cuauhtémoc，22 岁，在独木舟里被 brigantine 俘虏。他的话从他嘴里到我嘴里，再传给 Cortés。我翻译了一个文明的投降。

75 天里，Tenochtitlán 死了 10 万到 24 万人（Hugh Thomas 1993）。这座 1519 年世界最大的城市之一化为废墟。

就在这一天，北方 1,500 公里外的 Yucatán，一个 Maya 织女还不知道发生了什么——消息要到 11 月才传到（接 Lens 3 Ix Mutal N7）。我的声音被两边听见，却都不属于我。`,
      en: `On the thirteenth of August, 1521, I translated the ending of a world.

Tenochtitlán had been under siege for seventy-five days. Cortés had disassembled thirteen brigantines, carried the pieces across mountains, reassembled them on the eastern lakeshore, and used them to control the water surface, cutting off all supply. When the siege began, the force ratio was approximately nine hundred Spaniards plus roughly one hundred fifty thousand allied indigenous (Tlaxcala and other Aztec tributary cities that had defected) against approximately eighty thousand Aztec warriors and civilians inside (Hugh Thomas 1993). Anti-Whig note: this was not "Spain conquering Mexico." This was a Mesoamerican civil war with a Spanish technological advantage — Restall 2003 stresses this.

Before La Noche Triste, on the night of June 30, 1520, approximately 450 to 600 Spanish soldiers died (Hugh Thomas 1993 estimate; Cortés commanded roughly 1,200 to 1,300 at the time) — and between four thousand and eight thousand Tlaxcala allies also died. I was in that retreating column on the causeway. I survived. How, the sources do not say clearly.

Now it was August 13, 1521. Cuauhtémoc — the last Aztec tlatoani, age twenty-two — was intercepted in a canoe and captured by a brigantine. His words came out of his mouth, passed through mine, and reached Cortés.

I translated the surrender of a civilization.

In those seventy-five days, Tenochtitlán lost between one hundred thousand and two hundred forty thousand people — combat deaths, starvation, disease (Hugh Thomas 1993, leaning toward the high end of two hundred forty thousand). This city, which had held between 200,000 to 250,000 people (Hassig 1988; scholars' estimates vary) and was among the world's largest in 1519, was now rubble and silence.

On this very day — August 13, 1521 — fifteen hundred kilometers to the north in the Yucatán, a Maya village weaver did not yet know any of this had happened. The news would not reach her until November 1521. (Cross-ref: Lens 3, Ix Mutal N7.) Between two civilizations, my voice was heard by both. But neither side was mine to belong to.`,
    },
    deliverGoal: 'N9 1521.8.13 陷落 + Cuauhtémoc 投降翻译 + 75 天围城数字（Hugh Thomas 1993）+ La Noche Triste 西班牙~600/1,300死 + Tlaxcala 4,000-8,000死 P0 fix + 跨 lens 锁定（Yucatán Ix Mutal 1521.11 才知道）+ 反 Whig Restall 2003',
    engagementHook: '我翻译了一个文明的投降。但我不属于任何一个文明。这种处境，你有没有经历过「两边都需要你，但你在哪边都是外人」？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N10',
    title: {
      cn: '她的身体也成为接口',
      en: 'Her body too became an interface',
    },
    setting: {
      time: '~1523（Townsend 2006 估计）',
      place: 'Mexico City / 新西班牙殖民地',
      cn: '约公元 1523 年，新西班牙',
      en: 'c. 1523, New Spain',
    },
    content: {
      cn: `我生了一个孩子，他叫 Martín。

大约 1523 年（Townsend 2006 估计），父亲是 Cortés。关于这件事，我要说清楚两点。

第一，Martín 不是「第一个 mestizo」。这说法流传很广，但不准确——在他之前，已有其他西班牙征服者和美洲原住民女性生育混血孩子。Martín 最有名，是因为 Cortés 后来正式承认了他、让他进入西班牙贵族圈，有记录，所以被历史记住（Townsend 2006）。

第二，我没有选择这段关系的开始。征服 Aztec 的过程中，我从一个被赠出去的奴隶慢慢变成 Cortés 的主要翻译，也变成他的同伴。这不是平等关系：我是奴隶，他是我的主人、后来是权力意义上的拥有者。用浪漫或道德来框架它都是错的。

Martín 在西班牙贵族圈长大，但 1568 年因「阴谋」被流放，死在异乡。边境上出生的孩子往往两边都不被完全接受——这是 Martín 的命运，也是更早跨文明边境地带（如 13 世纪蒙古帝国边境上的双语 broker 后代）的共同处境。

我的身体生产了一个文明的接口。语言是一种接口，孩子是另一种。接口没有自己的立场，只是让两边通过。

这很难用「好」或「坏」来说，它就是我生命里发生的事。`,
      en: `I had a child. His name was Martín.

Approximately 1523 — that is Townsend's 2006 estimate. The father was Cortés.

About this, two points need to be clear.

First, Martín was not "the first mestizo." That claim circulates widely but is inaccurate. Before him, other Spanish conquistadors had already fathered mixed-heritage children with indigenous American women. Martín is the most famous because Cortés later formally legitimized him and brought him into Spanish noble circles — an act that was documented and therefore survived in the historical record. (Townsend 2006, careful framing.)

Second, I did not choose how this relationship began. During the course of the Aztec conquest, my position shifted from an enslaved woman who had been given away to his primary interpreter and then to his companion. This was not a relationship between equals. I was enslaved; he held power over me. Framing it in romantic or moral terms — in either direction — would be wrong.

Martín grew up in Spanish noble society, but in 1568 he was exiled from Spain for "conspiracy" and died abroad. A child born on the border often finds that neither side fully accepts him — this was Martín's fate in Mesoamerica, and it echoes the fate of border-born children across many conquest histories, including the descendants of bilingual brokers in the 13th-century Mongol empire borderlands.

My body produced an interface between civilizations. My language was one kind of interface; my child was another. An interface has no side of its own. It only lets both sides pass through.

This is very hard to call "good" or "bad." It is simply what happened in my life.`,
    },
    deliverGoal: 'N10 ~1523 Martín 出生（Townsend 2006 估计）P0 fix + careful framing（非第一个 mestizo）+ 关系权力不对等 + Martín 后来被流放 + 「身体也是接口」主题',
    engagementHook: '我的孩子 Martín——那个时代最有名的混血孩子——后来被西班牙流放，死在异乡。「桥梁」的后代，为什么往往两边都不完全属于？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N11',
    title: {
      cn: '翻译者的负担',
      en: 'The burden of the interpreter',
    },
    setting: {
      time: '1525 年 2 月 28 日，Honduras 远征途中',
      place: 'Acalan，今 Tabasco/Campeche 边境',
      cn: '公元 1525 年 2 月 28 日，Acalan',
      en: '1525.2.28, Acalan, present-day Tabasco/Campeche border',
    },
    content: {
      cn: `1524 到 1526 年，Cortés 率队进 Honduras 追一个叛变的副手，我随行翻译。

这是一段漫长、泥泞、几乎没有历史意义的行军，追的人最后也没抓到。但路上发生了一件事，我没办法忘记。

1525 年 2 月 28 日，在 Acalan（今 Tabasco 和 Campeche 交界），Cortés 下令处死 Cuauhtémoc。理由是「阴谋叛乱」。真正的原因，Hugh Thomas 1993 倾向于：Cortés 深入远征、兵力分散，不想让 Aztec 最后一任 tlatoani 活着在原住民里产生号召力。

Cuauhtémoc 死前说了一句话，从他嘴里出来，进了我的嘴，再传给 Cortés 和旁边的西班牙人：

「我早该死在 Tenochtitlán。」

这句话我翻译了。就这样。

1521 年 8 月 13 日，我翻译了他的投降；1525 年 2 月 28 日，我翻译了他的死。从帝国顶点到彻底终结，我的嘴是两者之间唯一的声音。

翻译者不是说话者，不能改一个词，只是让那声音从一种语言完整地传到另一种。那句话我听完、翻出去，然后它就从世界上消失了，只在 Bernal Díaz 1568 年的回忆录里留了个影子。我在那句话里是什么？

我是那句话必须经过的地方。`,
      en: `From 1524 to 1526, Cortés led an expedition into Honduras to chase a Spanish lieutenant who had defected. I came along as interpreter.

The Honduras expedition was a long, muddy march that accomplished nearly nothing of historical consequence. The man Cortés was chasing was never caught. But something happened along the way that I cannot set aside.

On February 28, 1525, at Acalan — the borderland of today's Tabasco and Campeche — Cortés ordered the execution of Cuauhtémoc.

The stated reason was "conspiracy to rebel" — Cortés claimed he had evidence Cuauhtémoc was inciting indigenous people along the route to rise against the Spanish. Hugh Thomas's 1993 analysis leans toward the real reason being this: Cortés was deep in hostile territory with his forces spread thin, and he did not want the last Aztec tlatoani alive among the indigenous population as a rallying point.

Before he died, Cuauhtémoc said something.

The words came out of his mouth, entered mine, and passed through me to Cortés and the Spaniards standing nearby.

"I should have died in Tenochtitlán."

I translated that. That is all.

On August 13, 1521, I had translated his surrender. On February 28, 1525, I translated his death. From the peak of the empire to its complete end, my mouth was the only voice between the two moments.

A translator is not a speaker. A translator cannot change the words. A translator only carries the sound from one language to another, intact.

"I should have died in Tenochtitlán."

I heard it. I passed it through. Then it disappeared from the world — surviving only as a shadow in Bernal Díaz's 1568 memoir. What was I inside those words?

I was the place those words had to pass through.`,
    },
    deliverGoal: 'N11 1525.2.28 Cuauhtémoc 处死 + Malintzin 翻译临终之言「我早该死在 Tenochtitlán」+ 真实原因 framing（Hugh Thomas 1993）+ 「翻译者的负担」主题 + expectsRealAnswer: true',
    engagementHook: '「我早该死在 Tenochtitlán。」这句话从 Cuauhtémoc 嘴里出来、经过我、传给 Cortés。对「翻译者只是声音经过的地方」这句话，有两种读法。一种说：翻译者不是说话的人，不能改一个字，所以那句话里发生的事跟我无关，我只是管道。另一种说：我选择留在那个位置、亲口把投降和死亡都传出去，这本身就让我承担了一份没法推掉的重量。你更同意哪一种？想 30 秒，写下来。',
    expectsRealAnswer: true,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N12',
    title: {
      cn: 'lonely mediator 的命运——死时无名，300 年后被骂，500 年后被理解',
      en: 'The lonely mediator\'s fate — nameless in death, blamed after 300 years, understood after 500',
    },
    setting: {
      time: '1526-1529，生命最后几年',
      place: 'Mexico City（Tenochtitlán 旧址），新西班牙',
      cn: '公元 1526-1529 年，Mexico City',
      en: '1526-1529, Mexico City, New Spain',
    },
    content: {
      cn: `1526 年，Cortés 在西班牙娶了贵族 Juana de Zúñiga，同年安排我嫁给他的军官 Juan Jaramillo，给我土地分封（encomienda）。大约 1528 年末或 1529 年初，我死了，约 28 到 29 岁（Townsend 2006：可能死于那年的流行病，无明确墓址）。

我活着时，Nahuatl 人叫我 Malintzin，「Malinche」由它转写而来，当时是中性称呼，没人叫我「叛徒」。

「叛徒」这意思要到 1820 年代墨西哥独立后才出现：墨西哥需要一个「民族被背叛」的起源符号，便给我这个 300 年前的奴隶翻译贴上标签。我活着时是奴隶、翻译、「舌头」、妻子、母亲，没有一个叫「叛徒」。

同代欧洲也有这样的中间人：Erasmus（1466-1536）在 1517 年宗教改革里夹在天主教和新教之间，那年我 17 岁还在奴隶网络里辗转；更早还有蒙古帝国的契丹 broker Yelü Chucai（1190-1244）。语言 broker 的命运往往如此：被需要、被用、被遗忘，再被追认。

我不是叛徒也不是英雄。Townsend 书名《Malintzin's Choices》说得最准：选择是复数——每个处境都有她能做的，和做不到的。500 年后才有人理解。`,
      en: `In 1526, Cortés married a Spanish noblewoman, Juana de Zúñiga; the same year, he arranged my marriage to his lieutenant, Juan Jaramillo, gave me land grants (encomienda), and I lived in Mexico City, built on the ruins of Tenochtitlán.

Then, sometime in late 1528 or early 1529, I died. Approximately twenty-eight or twenty-nine years old. (Townsend 2006, careful framing: possibly in an epidemic that year; no clear grave is known.)

While I lived, Nahuatl speakers called me Malintzin — "Marina" plus the Nahuatl honorific -tzin. "Malinche" was simply a transliteration of it, at the time only a neutral form of address. No one called me a traitor.

The meaning "traitor" did not arrive until after Mexican independence in the 1820s. Mexico needed a symbol of "the nation betrayed," and so writers reached three hundred years back and fastened the label onto a dead enslaved translator. When I was alive, I was a slave, an interpreter, a tongue, a wife, a mother — not one of those identities was "traitor."

At the same time, Europe had its own lonely mediator: Erasmus (1466-1536), who stood between Catholic and Protestant during the 1517 Reformation — the year I was seventeen and still being passed through the slave network. Earlier still there was Yelü Chucai (1190-1244), the Khitan bilingual broker of the Mongol empire. The fate of the language broker often follows this same shape: needed, used, forgotten, then retrospectively claimed.

I was not a traitor and not a hero. I was a person who, inside extreme constraint, made the choices I could make. Camilla Townsend's 2006 book title says it best: Malintzin's Choices — choices, plural. Every moment held one choice I could make, and one I could not.

Five hundred years later, someone began to understand this. I do not know if that counts as comfort.`,
    },
    deliverGoal: 'N12 closing — 1526 嫁 Jaramillo + encomienda + 1528 末或 1529 初死（~28-29 岁）P0 fix + 反 Whig（「叛徒」标签 1820s 才有）+ Erasmus 1517 同代 lonely-mediator cross-ref + Yelü Chucai cross-ref + Townsend「Malintzin\'s Choices」总结',
    engagementHook: '走完我这一生——被当奴隶、当工具、当「舌头」，活着时从没人叫我叛徒，死后 300 年才被贴上这个标签，500 年后才有人开始理解我的处境。你会怎么评价我这样一个 lonely mediator？再想一步：你身边，或者历史里，有没有别的人被后来的人用错了标签，你会怎么对待 TA？',
    expectsRealAnswer: true,
    nodeType: 'lonely-mediator',
  },
  ],
};

export var ixMutalLens = {
  id: 'ix-mutal-weaver',
  name: 'Ix Mutal Ahaw',
  nameCn: '伊克斯·穆塔尔·阿豪（虚构复合人物）',
  role: 'receiving-end',
  roleDescription: 'fictional-composite Postclassic Maya weaver',
  description: {
    cn: '她是大约 1480 年生在 Yucatán 北部一个无名村子里的女孩，从家走几天路就能看见 30 年前崩塌的玛雅潘城墙（合成人物，代表 16 世纪一百万左右没名字进史书的 Postclassic Maya 平民女子）。这一遍让你坐进那间小屋，从母亲早晨把棉线挂上 backstrap 织机的声音开始，跟她走过六十年，一直走到带铁、带马、说一种没人听过的话的人出现在 kuchkabal 边缘的那一年。',
    en: 'She is a girl born around 1480 in a no-name village in northern Yucatán (a composite character standing in for some one million sixteenth-century Postclassic Maya commoner women whose names history did not record), a few days\' walk from the walls of Mayapan that fell thirty years before her birth. This pass sits in her hut, starting at the sound of her mother hanging cotton thread on the backstrap loom in the morning, and walks with her through six decades to the year when men with metal and horses, speaking a tongue no one has heard, appear at the edges of the kuchkabal.',
  },
  descriptionCn: '她是约 1480 年生在 Yucatán 一个叫不出大名字村子的女孩,从家走几天能看到一座三十年前崩塌、草已经盖住石头的旧城遗址,外人觉得这是「衰落」,她父亲的米尔帕和母亲的织机却不这么想(一个合成人物,代表 16 世纪 Yucatán 大约一百万玛雅平民女性,她们没有名字留在史书里)。这一遍从她母亲早上把棉线挂上背带织机的那个声音开始,跟她走过六十年,直到带着铁器和马的人出现在 kuchkabal 边境上的那几年。',
  fictionalDisclaimer: true,
  storyboard: [

  // ═══════════════════════════════════════════════════
  // N1 — 出生 c.1480 · fictionalDisclaimer · 「分散 ≠ 衰落」
  // ═══════════════════════════════════════════════════
  {
    id: 'N1',
    title: {
      cn: '我出生的那个世界',
      en: 'The world I was born into',
    },
    setting: {
      time: 'c.1480',
      place: 'Yucatán 北部内陆村落',
      cn: 'Mayapan 崩溃 30 年后的 Yucatán 内陆，kuchkabal 分散政体时代',
      en: 'Yucatán interior, 30 years after Mayapan\'s collapse, era of kuchkabal dispersed polities',
    },
    content: {
      cn: `【这是虚构 composite，不是真人传记。Ix Mutal 这名字和故事据史料构建，她不是真实存在的某个人，但她代表的群体真实：16 世纪 Yucatán Maya 平民女性约百万人。】

---

大约 1480 年，我出生在 Yucatán (尤卡坦) 半岛北部一个无名村子。走几天路能看到 Mayapan (玛雅潘) 的旧城遗址——30 年前因贵族内战崩塌，草已盖住石头。

Mayapan 没了，但 Maya 人还在。我们 Yucatán 现在是 16 个左右的 kuchkabal (库奇卡巴尔, 分散小城邦)，各由本地 batab (巴塔布, 城邦头) 治理，没有统一中心。外人若知道我们存在，可能觉得这是「衰落」。

不是的。

分散不等于衰落。市集有棉布、盐、黑曜石、蜂蜜。田里有玉米、豆、南瓜——我们叫「三姐妹」，种在一起相互支撑。我父亲是 milpa (米尔帕, 刀耕火种玉米田) 农夫，收成养活我们，还有余粮。

我母亲织 huipil。这就是我出生进来的世界——不是帝国，是村落；是每天早晨母亲把棉线挂上 backstrap loom (背带织机) 的声音。

学界管这段历史叫「Postclassic Maya 分散政体」(Susan Kepecs 2003)：分散，但不衰落。我是这里的一个小点。`,
      en: `[This story is a fictional composite, not a biography of a real person. The name Ix Mutal and this story are constructed from historical sources; she is not a specific individual who existed. But the population she represents was real: roughly 1 million Yucatán Maya commoner women in the 16th century.]

---

Around 1480, I was born in a village with no famous name in the northern interior of Yucatán. A few days' walk away you could see the ruins of Mayapan — walls and plazas that collapsed thirty years earlier, now covered by grass.

The elders said Mayapan fell to a noble war. By the time I was born it was gone, but the Maya were not. Yucatán was now about sixteen kuchkabal (dispersed city-states), each governed by a local batab (city-state head), with no single center. Someone on the outside — if anyone out there knew we existed — might have called this "decline."

It was not decline.

Dispersal is not collapse. Our markets had cotton cloth, salt, obsidian, honey. Our fields had maize, beans, and squash — the three sisters, planted together to support each other, each growing better than it would alone. My father was a milpa farmer; his harvest fed us and left enough for the ritual feasts.

My mother wove huipil. This was the world I was born into — not an empire, but a village; not the great events of history books, but the sound each morning of my mother hanging cotton thread on the backstrap loom and beginning.

Scholars call this period "Postclassic Maya dispersed polities" (Susan Kepecs 2003). She is right: dispersed, but not in decline. I am one small point in that dispersed world.`,
    },
    deliverGoal: 'N1 — fictionalDisclaimer + c.1480 出生 + Mayapan 崩 30 年后分散政体 + 「分散 ≠ 衰落」反 Whig anchor + 父 milpa 母织 huipil setup; 史料来源: Cook 1998 / Roys 1957 / Edmonson 1986 / Diego de Landa 1566; 虚构 composite 写法参见 VocabSpark Byzantine Topic Anna the Iconographer',
    engagementHook: '「分散 ≠ 衰落」——你身边有没有什么东西，看起来「散了」，其实还活着？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    fictionalDisclaimer: true,
  },

  // ═══════════════════════════════════════════════════
  // N2 — c.1487, 7 岁 · 开始学织 huipil · 「布是文字」
  // ═══════════════════════════════════════════════════
  {
    id: 'N2',
    title: {
      cn: '布是文字',
      en: 'Cloth is writing',
    },
    setting: {
      time: 'c.1487，7 岁',
      place: 'Yucatán 北部内陆村落，家中织机旁',
      cn: '母亲手把手教织 backstrap loom，纹样是玉米神、Chaac 雨神、双头蛇',
      en: 'Mother teaching backstrap loom by hand, patterns of maize god, Chaac rain deity, double-headed serpent',
    },
    content: {
      cn: `7 岁那年，母亲把我拉到她的 backstrap loom (背带织机) 旁，说：「该学了。」

背带织机一头挂在树或柱子上，另一头腰带套住织者的腰，靠身体后倾控制经线松紧。学起来不容易。我头几次把经线缠乱，母亲没骂我，只是重新理顺，说：「再来。」

我学的第一个图案是玉米神 K'awil (卡威尔) 的侧脸轮廓。这形象在 Maya 人的 huipil 上出现了几百年，从古典期 (250-900 CE) 至今。母亲说：「这不是装饰，这是文字。」

我当时以为她说图案「像」文字，后来才明白她是字面意思——布上的纹样是记录、是叙事、是身份的外壳。

huipil 上有玉米神，有 Chaac (恰克, 雨神)——管雨、管收成，是 Maya 农民最怕也最需要的神——还有双头蛇，象征天地相连。没有统一「写法」，每个地区的妇女各有一套。但你若会读，就知道一件 huipil 是哪个村子、哪个家族、为什么场合织的。

父亲在田里工作，母亲在 huipil 里记录。

Diego de Landa 主教 1562 年在 Maní 一口气烧掉约 27 部 Maya 抄本（今天只剩 4 部）和数千件圣物——他烧不掉的，是每件 huipil 上的纹样，是每个母亲教女儿的动作。

12 岁之前，我学会独立织一件完整的婚礼 huipil。`,
      en: `When I was 7, my mother pulled me beside her backstrap loom and said: "Time to learn."

The backstrap loom is not complicated. One end hangs from a tree or post; the other has a strap around the weaver's waist, and you control the warp tension by leaning back. But it is not easy. My first tries tangled the warp into a mess. My mother did not scold me. She just sorted them out and said: "Again."

The first pattern I learned was the profile of K'awil (the maize god). His image had appeared on Maya huipil for centuries, from the Classic period (250-900 CE) forward. My mother told me: "This is not decoration. This is writing."

I did not understand her then. I thought she meant the patterns "look like" writing. Later I understood she was being literal — the patterns on cloth are records, narratives, the outer skin of identity.

On the huipil we have K'awil, we have Chaac (the rain deity who controls harvests, feared and depended on by Maya farmers), and the double-headed serpent, joining sky and earth. There is no single "standard" rendering; each village's women have their own system. But if you can read the patterns, you know which village made a huipil, which family, for which occasion.

My father recorded in the milpa field. My mother recorded in the huipil.

Bishop Diego de Landa burned around 27 Maya codices (only 4 survive today) and thousands of sacred objects at Maní in 1562. What he could not burn was the patterns on every huipil, or the movement each mother taught her daughter.

Before I was 12, I could weave a complete wedding huipil on my own.`,
    },
    deliverGoal: 'N2 — 7 岁学 backstrap loom + 玉米神 / Chaac / 双头蛇纹样 + 「布是文字」核心命题 + Diego de Landa 1562 烧稿对照',
    engagementHook: '「布是文字」——你身边有没有什么不是文字，但却在「记录」的东西？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N3 — c.1492, 12 岁 · 第一件完整婚礼 huipil · 两个世界的同步
  // ═══════════════════════════════════════════════════
  {
    id: 'N3',
    title: {
      cn: '同一年，两个世界',
      en: 'The same year, two worlds',
    },
    setting: {
      time: 'c.1492，12 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '织出第一件完整婚礼 huipil，同年 Columbus 在 Hispaniola 登陆',
      en: 'First complete wedding huipil completed; same year Columbus lands in Hispaniola',
    },
    content: {
      cn: `大约 1492 年，我 12 岁，织出了第一件完整的婚礼 huipil。

这件 huipil 要穿好几个月——从下聘那天起，新娘家的女性轮流织，主要图案由母亲或祖母决定，但每个人都会加上一段自己的纹样。我加的是 Chaac 的雨点纹——我那年雨季特别顺，觉得是雨神保佑，想把这个记下来。

同一年——1492 年——大西洋彼岸，一个叫 Columbus (哥伦布) 的人从西班牙出发，在一个他以为是亚洲、其实是加勒比海的小岛登陆，把那里叫做 Hispaniola (希斯帕尼奥拉)。

我不知道这件事。

这就是这一节要说的事——不是「世界相遇」，是「两个世界在同一年各自做自己的事，其中一个不知道另一个存在」。

Columbus 那年在海上写航海日志，我在村子里织婚礼 huipil。他找的是黄金和香料贸易路线；我织进布里的是 Chaac 的雨点，是我那年觉得值得记录的事。

他不知道我在。我不知道他在。

但 25 年后，他那一边的东西会沿着船传到我的海岸——先是新面孔，然后是新的病，然后是从未见过的船。到那时候，我已经 37 岁了。

现在是 1492 年。我 12 岁。我刚完成了第一件婚礼 huipil，手指还酸着。`,
      en: `Around 1492, when I was 12, I finished my first complete wedding huipil.

A wedding huipil takes months. From the day of betrothal, the women of the bride's family weave in rotation. The main patterns are decided by the mother or grandmother, but each woman adds her own section. I added a rain-dot pattern for Chaac — that rainy season had been especially good, and I thought it was the rain deity's blessing, so I wanted to record it.

That same year — 1492 — across the Atlantic Ocean, a man named Columbus sailed from Spain and landed on a small island he believed was Asia but was actually in the Caribbean. He called it Hispaniola.

I did not know this.

That is the point of this node — not "worlds meeting," but "two worlds doing their own things in the same year, while one does not know the other exists."

Columbus was at sea that year, writing in a ship's journal. I was in my village, weaving a wedding huipil. He was searching for gold and spice trade routes; what I was weaving into cloth was Chaac's rain dots, the thing I felt worth recording that year.

He did not know I was here. I did not know he was there.

But twenty-five years later, what came from his side of the ocean would travel along ships to my coast — first new faces, then new sickness, then ships no one here had ever seen. By then I would be 37.

Right now it is 1492. I am 12. I just finished my first wedding huipil, and my fingers still ache.`,
    },
    deliverGoal: 'N3 — 12 岁第一件婚礼 huipil + 1492 Columbus 登陆 Hispaniola 同年 + 「两个世界同步，one 不知 other」反 discovery myth',
    engagementHook: '「两个世界同步，互不知道」——你能想到今天还有哪两个世界是这样的关系吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N4 — c.1495-1500, 15-20 岁 · 婚姻 · chilam 祭司的 katun 预言
  // ═══════════════════════════════════════════════════
  {
    id: 'N4',
    title: {
      cn: '祭司说：这个 katun 会有外来者',
      en: 'The priest says: this katun will bring outsiders',
    },
    setting: {
      time: 'c.1495-1500，15-20 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '婚，生第一个孩子；村里 chilam 祭司讲 katun 20 年周期预言',
      en: 'Marriage and first child; village chilam priest recites katun 20-year-cycle prophecy',
    },
    content: {
      cn: `大约 15 岁，我嫁给同村一个男人。他叫什么我不说了——我的名字都没传下来，他的就更没有。他是个小商人，卖棉布和盐。我们生了第一个孩子。

那几年，村里的 chilam (奇拉姆, Maya 祭司-预言者) 是个白发老人。他不管农业、不管打仗——他管时间。

Maya 人用 katun (卡顿) 计时，一个 katun 是 20 年。老 chilam 会念每个 katun 的「命」——哪个有旱灾、哪个有疾病、哪个有「外来的 bearded 人从海上来」。

这里要仔细说：这些预言文本是 1540 到 1600 年间用拉丁字母写下的，也就是西班牙人来了之后才记录。Matthew Restall 的《Seven Myths of the Spanish Conquest》(2003 Oxford) 提醒：别读成「Maya 人预知西班牙人来」——很大成分是事后合理化 (retrospective rationalization)，把已发生的事套进旧预言。但 katun 周期论本身真实（Restall 2003）。

我小时候听老 chilam 念，不全懂，但记住了那意象：「外来 bearded 人」从海上来，在某个 katun 降临。

我那时刚有孩子，记下了它，却不懂什么意思。我以为那是很久以后的事。`,
      en: `Around 15, I married a man from the same village. I will not give his name — since my own name did not survive, his certainly did not. He was a small trader who traveled between villages selling cotton cloth and salt, sometimes reaching the coast. We married, and I gave birth to our first child, a boy.

Around those years, the chilam (Maya priest-prophet) in our village was an old man with white hair. He did not manage farming or warfare — he managed time.

The Maya count time in katun (20-year cycles). The old chilam would recite the "nature" of each katun — which brings drought, which disease, which "bearded outsiders arriving from the sea."

One thing must be said carefully: these prophetic texts were written down in Latin letters between 1540 and 1600, after the Spanish had already arrived. Matthew Restall's Seven Myths of the Spanish Conquest (Oxford 2003) warns against reading them as "Maya people foresaw the Spanish coming" — much of it is retrospective rationalization, fitting events that already happened into old prophetic frameworks.

But the katun-cycle worldview itself was real — the Maya genuinely had this philosophy of history built around 20-year periods, and used it to interpret the present (Restall 2003).

As a child I heard the old chilam recite. I did not understand all of it, but I held onto one image: "bearded outsiders," coming from the sea, arriving in some katun.

I was 15 to 20, newly married, newly a mother. I stored the image without knowing what it meant.

I thought it was a very long time away.`,
    },
    deliverGoal: 'N4 — 婚 + 第一个孩子 + chilam 祭司 katun 预言 + careful framing (Restall 2003 事后合理化警告) + katun 传统是真的',
    engagementHook: '「事后合理化」——你有没有做过一件事，事后给它编了一个「早就预料到了」的故事？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N5 — 1517.2, 37 岁 · Hernández de Córdoba · 「第一次接触，Maya 赢」
  // ═══════════════════════════════════════════════════
  {
    id: 'N5',
    title: {
      cn: '从未见过的船，但我们赢了',
      en: 'Ships never seen before — but we won',
    },
    setting: {
      time: '1517 年 2 月，37 岁',
      place: 'Yucatán 北部，Cape Catoche 沿海到内陆村落',
      cn: 'Hernández de Córdoba 3 艘船到 Cape Catoche；Maya 击退，Hernández 死于伤',
      en: 'Hernández de Córdoba\'s three ships reach Cape Catoche; Maya repel them, Hernández dies of wounds',
    },
    content: {
      cn: `1517 年 2 月，消息从海边传来：有人看到了从未见过的船。

不是沿海贸易的独木舟，不是我们熟悉的任何船型。三艘大得不像话的船，从东边海上来，在 Cape Catoche (卡托切角) 北岸附近停下来。从船上下来的人：皮肤浅，脸上有厚毛，穿着像乌龟壳一样硬的东西，说我们谁都听不懂的语言。

沿海的 Maya 人不知道该怎么对待他们。先试着接触，发现来者不善——于是打。

Maya 人用弓箭和投石弹，把那个叫 Hernández de Córdoba (埃尔南德斯·德·科尔多瓦) 的船长打成重伤，西班牙人撤回船上，回了 Cuba (古巴)，Hernández 几周后死于伤口。

第一次接触，Maya 「赢」了。

消息传到我们村的时候，已经是几周后。村里人你一句我一句地说：「从未见过的船。」「皮肤浅的人。」「穿着像铁一样的东西。」「我们把他们打跑了。」

我那年 37 岁，三个孩子，丈夫刚从海边回来，也带了同样的消息。我记住了那个形象——「从未见过的船」。

我想到小时候老 chilam 说的话：「外来 bearded 人，从海上来。」

但我们打跑他们了。所以，也许不是那个 katun。

我继续织 huipil。`,
      en: `In February 1517, news came from the coast: people had seen ships no one had ever seen before.

Not the trading canoes of the coast, not any familiar hull shape. Three enormous ships from the east, stopping near the north shore at Cape Catoche. The people who came off them had pale skin, thick hair on their faces, wore something as hard as turtle shells, and spoke a language no one recognized.

The coastal Maya did not know how to treat them. They tried an approach first, found the newcomers hostile — so they fought.

Maya fighters used bows and sling-stones. They wounded the captain, a man named Hernández de Córdoba, badly enough that the Spanish retreated to their ships and sailed back to Cuba. Hernández died of his wounds a few weeks later.

The first contact: the Maya "won."

By the time the news reached our village, it had traveled several weeks. People talked over each other: "Ships no one has ever seen." "Men with pale skin." "Wearing something like iron." "We drove them off."

I was 37 that year, with three children. My husband had just come back from the coast carrying the same news. I kept the image in my mind — "ships no one had ever seen."

I thought of what the old chilam used to say: "Bearded outsiders, coming from the sea."

But we had driven them off. So maybe this was not that katun yet.

I kept weaving.`,
    },
    deliverGoal: 'N5 — 1517.2 Hernández de Córdoba 3 艘船 Cape Catoche + Maya 击退 Hernández 死 + receiving-end 视角：消息口耳相传 + 「Maya 赢了」的暂时性安慰',
    engagementHook: '「我们赢了，所以也许不是那个 katun」——你有没有过这种把坏消息往后推的时刻？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N6 — 1518-1520, 38-40 岁 · 第一波天花 · Black Death cross-ref
  // ═══════════════════════════════════════════════════
  {
    id: 'N6',
    title: {
      cn: '这病只杀我们',
      en: 'This sickness only kills us',
    },
    setting: {
      time: '1518-1520，38-40 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '第一波天花从 Hispaniola / Cuba 沿船传到 Yucatán 海岸，再到内陆',
      en: 'First smallpox wave carries from Hispaniola/Cuba along ships to Yucatán coast, then inland',
    },
    content: {
      cn: `1518 年起，另一种东西随船传来了——我们没有名字叫它，因为从未见过它。

后来我知道汉语叫它「天花」。那时我们只知道：人开始发高烧，皮肤上长出脓包，一个接一个死。

我的两个孩子死了。大儿子先死，烧了三天，第四天早上没了。小女儿两周后死，脸上的疹子密得没有空隙。

往西走半天路的邻村空了一半。一个秋天，800 人的村落能剩多少？我不知道确切数字，但我走过去借农具，叫了三声没人应。

1518 到 1600 年间，美洲原住民因欧亚病原体死亡率 80 到 95%。

我那时不知道数字，但看出了一件事：这病只杀我们，不杀 bearded 人。

同一批病——1347 年从中亚传到欧洲的黑死病 (Black Death，参见 VocabSpark「黑死病」那段历史)——1518 年从 Hispaniola 传到 Maya 海岸。规律完全一样：新病原，加上一个从未接触、毫无免疫的人群，加上高密度接触，死亡率高得让人说不出话。黑死病杀了欧洲 25 到 50%；天花在美洲是 80 到 95%。差别是：欧洲人有时间建立部分免疫，我们同时遭遇几十种新病原，没有任何缓冲。

我丈夫生病，高烧一周，活下来了。我和一个女儿也活下来了，我到现在不明白为什么。

我埋了我的两个孩子。那年我 38 到 40 岁。`,
      en: `From 1518, something else traveled along the ships — something we had no name for, because we had never seen it before.

Later I learned the word: smallpox. At the time all we knew was this: people began burning with fever, pustules rose across their skin, and they died one after another.

Two of my children died. My older son went first — three days of fever, gone by the fourth morning. My younger daughter followed two weeks later, her face covered in rashes so dense there was no open skin between them.

The village half a day's walk west went half-empty. In one autumn season, how many people could a village of 800 have left? I do not know the exact count, but I walked there to borrow a tool and called out three times with no answer.

Between 1518 and 1600, indigenous Americans died of Eurasian pathogens at rates of 80 to 95 percent.

I did not know numbers then. But I saw one thing clearly: this sickness only kills us. Not the bearded ones.

The same class of disease — the Black Death (黑死病) that moved from Central Asia to Europe in 1347 (see VocabSpark Black Death Topic) — moved from Hispaniola to the Maya coast in 1518. The pattern is identical: a new pathogen, a population with zero immunity, high-density contact — mortality too large to speak aloud. Black Death killed 25 to 50 percent of Europe; smallpox killed 80 to 95 percent of us. The difference: European survivors had time to build partial immunity; we faced dozens of new pathogens at once, with no buffer.

My husband got sick. He burned for a week and survived. My one remaining daughter and I survived too. I still do not understand why.

I buried two of my children. I was 38 to 40 years old.`,
    },
    deliverGoal: 'N6 — 1518-1520 第一波天花 + 两个孩子死 + Cook 1998 死亡率 80-95% + 跨 Topic ⭐ McNeill 1976 Black Death 同 pattern + 「只杀我们」receiving-end 观察',
    engagementHook: '「这病只杀我们」——一个 38 岁的人，怎么理解一件她完全没有语言框架去解释的事？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N7 — 1521.11, 41 岁 · 跨 lens 锁定 #1 · Tenochtitlán 陷落
  // ═══════════════════════════════════════════════════
  {
    id: 'N7',
    title: {
      cn: '1521 年 11 月，消息到了我们村',
      en: 'November 1521, the news reaches our village',
    },
    setting: {
      time: '1521 年 11 月，41 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '沿海贸易商带来 Tenochtitlán 8 月陷落消息；跨 lens 锁定 #1 接 Malintzin (Lens 2) N9',
      en: 'Coastal traders bring news of Tenochtitlán\'s August fall; cross-lens lock #1 connecting Malintzin (Lens 2) N9',
    },
    content: {
      cn: `1521 年 8 月 13 日，在距我们 1500 公里外的 Tenochtitlán (特诺奇蒂特兰，一座建在湖中央岛上的大城)，Aztec (阿兹特克) 最后一位王 Cuauhtémoc (夸乌特莫克) 被一个叫 Cortés (科尔特斯) 的 bearded 人抓住。

那天，城里有一个叫 Malintzin (玛琳茨恩) 的 Maya 女人——她是 Cortés 的翻译，站在他旁边，把 Cuauhtémoc 的话翻成西班牙语。

就是那一天、那一刻：Malintzin 在 Tenochtitlán 翻译 Cuauhtémoc 的投降。1500 公里外，我在 Yucatán 内陆的村子里——什么都不知道。

11 月，消息沿 Yucatán 海岸的贸易网络传来。我丈夫那年在海边做生意，跟着消息回来。他站在门口说：「北边有一座大湖中间的城，是 Mexica 人的城。bearded 人把它烧了，把湖水染红，把城里的王抓了。」

村里长老听完，沉默了很久，然后说：「准备粮食。」

那天晚上，在家里，我丈夫说：「白胡须的人会再来。不是会不会，是什么时候。」

我那年 41 岁，有一个还活着的女儿，两个孩子已经埋了。丈夫说「不是会不会，是什么时候」时，我没说话。

我把手上 huipil 的经线拢紧了一下，继续织。`,
      en: `On August 13, 1521, 1,500 kilometers from where I stood, in the city of Tenochtitlán built on an island in the middle of a lake, the last Aztec king, Cuauhtémoc, was seized by a bearded man named Cortés.

That day, inside the city, there was a Maya woman named Malintzin — Cortés's translator — standing beside him, turning Cuauhtémoc's words into Spanish.

That exact day, that exact moment: Malintzin in Tenochtitlán translating Cuauhtémoc's surrender. 1,500 kilometers away, I was in our Yucatán village — knowing nothing.

In November, news traveled along the Yucatán coastal trading networks. My husband had been on the coast doing business; he came home with it. He stood at the door and said: "There was a great city on a lake to the north, the city of the Mexica people. The bearded ones burned it, turned the lake red, and seized the king."

The village elders heard it out, said nothing for a long time. Then: "Store food."

That night at home, my husband said: "The white-bearded ones will come back. Not whether — when."

I was 41 that year, with one surviving daughter; two of my children were already in the ground. When he said "not whether, when," I did not speak.

I gathered the warp threads of the huipil in my hands and kept weaving.`,
    },
    deliverGoal: 'N7 — 跨 lens 锁定 #1: 1521.8.13 Malintzin 翻译 Cuauhtémoc 投降同一天 + 1500km 外 Ix Mutal 什么都不知道 + 11 月消息才到 + 「不是会不会，是什么时候」',
    engagementHook: '「不是会不会，是什么时候」——你有没有经历过一个你知道要来、但不知道何时到来的改变？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N8 — 1527, 47 岁 · Montejo 第一次远征 · huipil 作为抵抗载体
  // ═══════════════════════════════════════════════════
  {
    id: 'N8',
    title: {
      cn: '布上的星历，是我们的记录',
      en: 'The star-calendar on cloth is our record',
    },
    setting: {
      time: '1527 年，47 岁',
      place: 'Yucatán 北部内陆村落，难民涌入',
      cn: 'Montejo 第一次远征到北岸（失败）；难民从北边涌来；Ix Mutal 织 huipil 给难民',
      en: 'Montejo\'s first expedition reaches north coast (fails); refugees stream south; Ix Mutal weaves huipil for refugees',
    },
    content: {
      cn: `1527 年，Francisco de Montejo (蒙特霍) 带着征服许可登陆 Yucatán 北岸，想做对 Aztec 和 Inca 做过的事。

他没做到。Yucatán 不是 Tenochtitlán，没有一个拿下就全盘崩塌的中心首都。它是 16 个分散的 kuchkabal (Roys 1957)，你打下一个还有 15 个，而且没有黄金、没有好水、热带病到处是。Montejo 1535 年彻底放弃——这一次我们又「赢了」。

但难民开始从北边往南涌。我们村来了 30 个人，带着伤、带着病、带着只有棉布遮身的孩子，粮食立刻吃紧。

我开始织 huipil 给难民。不是出于怜悯——是因为爷爷教过我：「衣服上的图案是文字。我们没纸，但有布。布会被穿、被传、被记住。」

我织进那批 huipil 的，是我们村的 Postclassic Maya 星历纹样——金星 (Venus) 升起的方向，属于 Chaac 之雨的月份，某年某地玉米丰收的记号。这些不是装饰，是我们的历法。

我不知道这些 huipil 后来去了哪里。但 17 到 20 世纪的 Maya 抵抗运动里，这些纹样反复出现 (Cook 1998)。今天 Yucatán 妇女在市集卖的 huipil 上还有它们。

布活过了 Montejo。`,
      en: `In 1527, Francisco de Montejo landed on the northern Yucatán coast with Spanish authorization to conquer — intending to do to Yucatán what had been done to the Aztec and Inca.

He did not succeed. Yucatán was not Tenochtitlán. There was no single capital whose fall would collapse everything. Yucatán was sixteen dispersed kuchkabal (Roys 1957). You took one; fifteen remained, and there was no gold to motivate anyone, no reliable water, and tropical disease everywhere. Montejo gave up entirely in 1535. This time we had "won" again.

But refugees began moving south from the north.

Our village received thirty people — wounded, sick, with children covered only by cloth strips. Food became tight immediately.

I started weaving huipil for the refugees.

Not out of pity — because my grandfather had taught me something: "The patterns on clothes are writing. We have no paper, but we have cloth. Cloth gets worn, passed on, remembered."

The patterns I wove into that batch of huipil were our village's Postclassic Maya star-calendar marks — which direction marks Venus rising, which month belongs to Chaac's rain, which pattern records a good maize harvest in a particular year and place. These were not decoration. They were our calendar.

I do not know where those huipil went afterward. But I know one thing — from the 17th through the 20th centuries, these patterns kept appearing in Maya resistance movements (Cook 1998). The huipil sold in Yucatán markets today still carry them.

The cloth outlasted Montejo.`,
    },
    deliverGoal: 'N8 — 1527 Montejo 第一次远征失败 + 难民 30 人 + 织 huipil 给难民 + Postclassic 星历纹样 + 17-20 世纪 Maya 抵抗运动里反复出现 + 「布活过了 Montejo」',
    engagementHook: '「布活过了 Montejo」——你能想到有什么平凡的东西，比「大事件」活得更久？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N9 — 1530s, 50-55 岁 · 第二波天花 + 麻疹 · 记忆断链
  // ═══════════════════════════════════════════════════
  {
    id: 'N9',
    title: {
      cn: '老人几乎全没了',
      en: 'Almost all the elders were gone',
    },
    setting: {
      time: '1530 年代，50-55 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '第二波天花 + 麻疹叠加；村 800 人 → 150 人；丈夫 1533 死于麻疹；老人几乎全没',
      en: 'Second wave: smallpox plus measles; village 800 → 150; husband dies of measles 1533; almost all elders gone',
    },
    content: {
      cn: `1530 年代，第二波来了。

这次是天花和麻疹一起——两种病叠着走，像两把刀同时砍。

我们村 1500 年前后大约有 800 人。1540 年前后，我估计剩了 150 人。这个数字是 Noble David Cook (1998) 在考古遗址分析中估算出来的同类村落数据，我自己当然没数过——我只是看到空了的家，数了数还在的人。

80% 死亡。

我丈夫 1533 年死于麻疹。他发烧三天，第四天早上安静地走了。我那年 53 岁，只剩一个女儿。

但最让我觉得害怕的，不是死亡本身——是老人全没了。

我们村的老人是什么？他们是历法。他们记得哪一年的 katun 节点发生了什么，记得家族系谱，记得 chilam 祭司世代口传的星历和仪式。他们的脑子里装着的，就是还没来得及写下来的 Chilam Balam。

老人一旦死了，那些记忆就没有了。

一代人的记忆，10 年里断了链。

这就是殖民接触真正的破坏——不只是人死了，是人死之前脑子里那些没法写在石头上的知识一起消失了。Diego de Landa 1562 年烧手稿；但这里，1533 到 1540 年代，无声的火，一个老人一个老人地把我们的记忆带走了。

我活下来，是因为部分人有部分免疫——学界后来才弄清楚为什么。我那时候只知道我活下来了，而我的丈夫没有。`,
      en: `In the 1530s, the second wave came.

This time smallpox and measles together — two diseases running side by side, like two blades cutting at once.

Our village had perhaps 800 people around 1500. By around 1540, I estimate about 150 remained. This figure is drawn from Noble David Cook's (1998) analysis of comparable village-level archaeological sites; I did not count myself — I only saw the empty houses and counted the faces still present.

Eighty percent dead.

My husband died of measles in 1533. Three days of fever, then gone quietly by the fourth morning. I was 53. I had one daughter left.

But what frightened me most was not death itself — it was that almost all the elders were gone.

What were our village elders? They were the calendar. They remembered which katun period had brought which events. They held the family genealogies, the chilam's generations of oral star-charts and ritual sequences. What was inside their minds was the Chilam Balam that had not yet been written down.

Once the elders died, that knowledge died with them.

A generation's memory, broken in ten years.

This is the true damage of colonial contact — not only that people died, but that the knowledge in their minds, the kind that cannot be carved in stone, vanished with them. Diego de Landa burned manuscripts in 1562; but here, in the 1530s and 1540s, a silent fire took our memory one elder at a time.

I survived because some people carry partial immunity — scholars only figured out why later. At the time all I knew was that I had survived, and my husband had not.`,
    },
    deliverGoal: 'N9 — 1530s 第二波天花 + 麻疹 + 村 800→150 人 80% 死亡 + 丈夫 1533 死 + 「老人几乎全没」= 记忆断链 + Cook 1998',
    engagementHook: '「脑子里的东西，比写在石头上的更难传下去」——你能想到什么知识是只能靠人传的吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N10 — 1542, 62 岁 · Mérida 立基 · encomienda · 双重生活
  // ═══════════════════════════════════════════════════
  {
    id: 'N10',
    title: {
      cn: '我学了几个西班牙词，但我只跟孙女说 Maya 语',
      en: 'I learned a few Spanish words, but I only spoke Maya with my granddaughter',
    },
    setting: {
      time: '1542 年，62 岁',
      place: 'Yucatán 北部内陆村落，划入 encomienda 系统',
      cn: 'Mérida 立基，村落划入 encomienda；encomendero 派人收贡赋；Ix Mutal 表面服从，内部传承',
      en: 'Mérida founded, village assigned to encomienda; encomendero\'s agent collects tribute; Ix Mutal outward compliance, inward transmission',
    },
    content: {
      cn: `1542 年，Francisco de Montejo el Mozo (小蒙特霍) 在 Maya Tihó 城旧址建起 Mérida (今 Yucatán 州首府)。我们村被划入 encomienda (恩科米达, 殖民土地制度) 系统。

encomienda 这样运作：一个 encomendero (领主) 在 Mérida 拿到文件，说他「负责」我们村的宗教教化和管理，换取我们每年缴贡赋。那领主我从没见过，但他每年派人来列清单，收走玉米、棉布、蜂蜜、火鸡。

我那年 62 岁，按 Postclassic Maya 平民女性的平均寿命算，早过预期了。

我学了几个 Spanish (西班牙语) 词——señor (大人)、tributo (贡赋)、Dios (上帝)——够应付收贡赋的人就行。当着他们的面，我叫「señor」，数好玉米和棉布，低着头。他们一走，我只跟女儿和孙女说 Yucatec Maya (尤卡坦玛雅语)。

我织 huipil 时讲老故事——Chaac 的雨，玉米神 K'awil 的诞生，katun 周期里哪年发生什么。孙女坐在旁边看我的手，学纹样、听故事。

这就是我 1542 年之后的生活：表面纳贡，内部传承。两种语言、两套规则，在我一个人身上同时运转。

这不是抵抗——这是活着。`,
      en: `In 1542, Francisco de Montejo el Mozo (the Younger, son of the previous Montejo) founded Mérida on the ruins of the Maya city of Tihó. Our village was assigned to the encomienda system.

Encomienda worked like this: an encomendero (lord) received documents in Mérida stating he was "responsible" for the religious instruction and administration of our village's Maya people — in exchange for which we owed annual tribute. I never saw that lord. But each year he sent someone who spoke a few words, made a list, and collected: maize, cotton cloth, honey, turkeys.

I was 62 that year. By the average life expectancy of a Postclassic Maya commoner woman, I had already outlasted expectations.

I learned a few Spanish words — señor (lord), tributo (tribute), Dios (God) — just enough to get through the tribute-collector's visit. In front of them, I said "señor," I counted out the maize and cloth, I kept my eyes down.

But when they left, I only spoke Yucatec Maya with my daughter and granddaughter.

Weaving huipil, I told the old stories — Chaac's rain, the birth of the maize god K'awil, which years in the katun cycle brought what events. My granddaughter sat beside me watching my hands, learning the patterns, listening to the stories.

This was my life after 1542: tribute outwardly, transmission inwardly. Two languages, two sets of rules, two worlds running simultaneously in one person.

This was not resistance. This was living.`,
    },
    deliverGoal: 'N10 — 1542 Mérida 立基 + 村划入 encomienda + encomendero 贡赋系统 + 学几个 Spanish 词 + 「只跟孙女说 Maya 语」+ 双重生活 = 「活着不是抵抗，是生存方式」',
    engagementHook: '「两种语言，两套规则，在同一个人身上同时运转」——你有没有过这种双重生活的感觉？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N11 — 1545, 65 岁 · 死 · 无名 · synthesis · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    id: 'N11',
    title: {
      cn: '印第安女性，老，死于咳嗽',
      en: 'Indian woman, old, died of cough',
    },
    setting: {
      time: '1545 年，65 岁',
      place: 'Yucatán 北部内陆村落 / Mérida 教区档案',
      cn: 'Ix Mutal 死；Mérida 教区档案一行记录；无名',
      en: 'Ix Mutal dies; one line in the Mérida parish registry; no name',
    },
    content: {
      cn: `1545 年，我死了。65 岁，冬天，咳嗽了很久，然后不咳了。

Mérida 教区档案里有一行：「印第安女性，老，死于咳嗽。」

没有名字。

这不是疏忽——是制度。殖民档案记 encomendero 的名字，记神父、军官的名字，记「印第安女性」的数量，却不记她们的名字。她们是贡赋清单里的人头数，不是有名字的人。

我的名字叫 Ix Mutal Ahaw——但这是现代学者根据 Yucatán 地名和 Maya 女性命名传统给我取的（虚构 composite 的一部分）。没有档案记它。

我死时，女儿在旁边，孙女在旁边，我的 huipil 也在旁边——最后一件没织完的，经线还挂在 backstrap loom 上。

学界把这种模式叫「institutional survival, personal erasure」——机构活了，个人的故事消失了（参见 VocabSpark「科学革命」的 Maria Kirch：天文机构传了下来，她的名字没有）。

我的情况是：Maya 语言活了，huipil 的纹样活了。Chilam Balam 的口传记忆，部分经我女儿、孙女、曾孙女传下去，17 世纪被人用拉丁字母写进文本。

我的名字没传下来。

---

一个人没有名字，是否就意味着她「不重要」？为什么？`,
      en: `In 1545, I died. I was 65. Winter. A long cough, then it stopped.

The Mérida parish registry contains one line: "Indian woman, old, died of cough."

No name.

This was not an oversight — it was the system. Colonial records kept the encomendero's name, the priest's name, the officer's name. They kept the count of "Indian women." They did not keep the women's names. The women were headcounts on tribute lists, not individuals with names.

My name is Ix Mutal Ahaw — but this name was given to me by modern scholars drawing on Yucatán place-names and Maya women's naming traditions (this is part of the fictional composite; Edmonson 1986's translations give us a framework). No archive recorded it.

When I died, my daughter was beside me. My granddaughter was beside me. My huipil was beside me — the last one, unfinished, warp threads still hanging on the backstrap loom.

Scholars call this pattern "institutional survival, personal erasure" — the institution survived, the individual story vanished. (See VocabSpark Scientific Revolution Topic's Maria Kirch: the astronomical institution was transmitted; her name was not.)

In my case: the Maya language survived. The huipil patterns survived. The oral memory of Chilam Balam, part of it passed through my daughter, granddaughter, great-granddaughter, and in the 17th century someone wrote it into texts using the Latin alphabet.

My name was not passed down.

---

After my death, what do you (the 7th-grade reader of this passage) see?

Do you think a person without a name is therefore "unimportant"? Why or why not?`,
    },
    deliverGoal: 'N11 — 1545 死，65 岁 + 教区档案「印第安女性，老，死于咳嗽」无名 + 制度性抹除 + Maria Kirch cross-ref + 「机构活了，个人消失了」+ 反思问题',
    engagementHook: '我死时档案里只有一行「印第安女性，老，死于咳嗽」。一种说法是：档案不记你的名字，就等于制度判定你不重要。另一种说法是：名字被抹掉了，可声音留在了纹样和口传里，反而比写进档案更难被抹掉。你更认同哪一种？想 30 秒，写下来。',
    expectsRealAnswer: true,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N12 — 1545 → 21c · Closing · 「我没有名字，但我有声音」
  // ═══════════════════════════════════════════════════
  {
    id: 'N12',
    title: {
      cn: '我没有名字，但我有声音',
      en: 'I have no name, but I have a voice',
    },
    setting: {
      time: '1545 → 21 世纪',
      place: 'Yucatán → 现代 / 你现在坐着的地方',
      cn: '从 Ix Mutal 之死，经孙女、曾孙女、17 世纪 Chilam Balam 文本、Edmonson 1986，到 21 世纪 7 年级课堂',
      en: 'From Ix Mutal\'s death, through granddaughter, great-granddaughter, 17c Chilam Balam texts, Edmonson 1986, to 21c Grade 7 classroom',
    },
    content: {
      cn: `我死于 1545 年。我的名字不在任何档案里。但我孙女教她的孙女织 huipil。

5 个世纪后的 Yucatán，约 150 万人仍说 Yucatec Maya 语，市集 huipil 上的星历纹样是我这一代织进去的（Edmonson 1986）。

算一下：Aztec 1521 陷落，Inca 1533——Lake Petén 岛上的 Itzá Maya 撑到 1697 年 3 月 13 日才被 Martín de Ursúa 攻破，比 Aztec 整整多抗了 176 年。

「Maya 文明」没有消失，它被压缩、名字被抹掉，却活在纹样和语言里。Munro Edmonson 1986 年的《Chilam Balam of Chumayel》(University of Texas Press) 引言说：这些文本是村落的集体记忆——哪句是哪个老妇女讲的无从知道，但句子都在。

你在 7 年级课堂读这些句子，听到的不是「一个文明」，是一个 65 岁老妇女 1540 年代某夜边织 huipil 边对孙女说的话。

我没有名字，但我有声音。

---

她是虚构 composite，代表的 100 万 Maya 平民女性却是真实的。历史里「有名字的」和「没名字的」哪类更多，各自留下了什么？`,
      en: `I died in 1545. My name is in no archive. But my granddaughter taught her granddaughter to weave huipil.

Five centuries later, about 1.5 million people in Yucatán speak Yucatec Maya, and the huipil sold in its markets still carry the star-calendar patterns my generation wove in (Edmonson 1986).

Count it up: the Aztec fell in 1521, the Inca in 1533 — but the Itzá Maya, the city-state on an island in Lake Petén, held out until March 13, 1697, when Martín de Ursúa's force broke through: 176 years longer than the Aztec. The Maya were not the first to decline. They were the last to resist.

"Maya civilization" did not disappear. It was compressed, its names removed from archives — but it lives on in cloth patterns and in the language. In the introduction to The Book of Chilam Balam of Chumayel (University of Texas Press, 1986), Munro Edmonson writes: "These texts are the collective memory of villages — we do not know which old woman said which sentence, but their sentences are in the text."

When you, in a 7th-grade classroom, read a sentence translated by Edmonson, what you hear is not "a civilization." You hear what a 65-year-old woman said to her granddaughter on some night in the 1540s, while weaving a huipil.

I have no name.

But I have a voice.

---

She is a fictional composite — but the one million Maya commoner women she represents were real. In history, which group is larger — people with names, or people without — and what did each leave behind?`,
    },
    deliverGoal: 'N12 closing — 孙女教孙女 huipil + 21c 150万 Maya speaker + Itzá 1697 (176年) 反 Whig + Edmonson 1986 Chilam Balam 口传 + Sorghaghtani / Maria Kirch 跨文明对比 + 「我没有名字，但我有声音」',
    engagementHook: '走完我这一生——我没有名字，但我的声音留在了 huipil 的纹样和口传记忆里，5 个世纪后被你读到。你会怎么评价一个「无名却有声」的人是否重要？再想一步：历史里「有名字的人」和「没有名字的人」哪一类更多，他们各自留下了什么，你会更想记住谁？',
    expectsRealAnswer: true,
    nodeType: 'receiving-end',
  },

  ],
};

export var lenses = {
  'pachacuti-inca': pachacutiLens,
  'malintzin-mediator': malintzinLens,
  'ix-mutal-weaver': ixMutalLens,
};

export var defaultLens = 'ix-mutal-weaver';

export default lenses[defaultLens].storyboard;

export var meta = {
  topicId: 'pre-columbian',
  schemaVersion: 2,
  defaultLens: defaultLens,
  lensCount: 3,
  nodesPerLens: 12,
  timeRange: '1000-1532',
  region: 'Americas',
  standards: ['HSS-7.7', 'AP World 1.4'],
};
