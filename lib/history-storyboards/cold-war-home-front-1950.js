// ─────────────────────────────────────────────────────────────────
// 冷战国内战线 1950 — The Cold War Home Front · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程美国真实术语
//   (HUAC/blacklist/loyalty oath/Levittown/GI Bill/redlining/Fifth Amendment/containment),
//   §8 中国段落 (receiving-end + mediator 的 synthesis 节点) 之外不用中国特定词。
// 3 lens / 11 nodes each / Rule 0 中性 (本课高敏感,尤其严守) / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 客厅里的电视 — 调查员当成放大恐惧的舞台/Welch 当成全国当众的镜子/
//   被列名者当成那台先毁了我、后救了别人的机器。三视角各触一次,不互相点破。
// §8 双桥 (排华史→麦卡锡 + 同期新中国「恐惧政治」并置) 注入 receiving-end/mediator 的 synthesis。
// anti-fab: 合成桥接人物 (调查员/被列名者) 显式标; Wheeling 205/57 数字争议显式标;
//   Levitt 名言标「流传记述」; Welch 名言为 primary 逐字。
// ─────────────────────────────────────────────────────────────────

export var investigatorLens = {
  id: 'investigator-actor',
  name: 'The Man Holding the List',
  nameCn: '举着名单的调查员',
  role: 'perpetrator-actor',
  perspectiveTag: 'huac-investigator',
  icon: '🎙️',
  description: {
    cn: '冷战头几年华盛顿一间听证厅里的调查员，一个麦卡锡式的参议员，没有名字，因为他代表的是一整套调查机器，而不是某一个人。他面前是摄像机、麦克风、一摞文件。他真心相信国家正在被从内部掏空，苏联确实有间谍。他手里最有力的武器不是证据，是那个无解的问题：你现在是、或曾经是共产党员吗？这一遍让你从一个施害者内部，看清一件最难的事，侵蚀自由的人往往不觉得自己是反派，他觉得自己在保卫国家。',
    en: 'An investigator in a Washington hearing room in the first Cold War years, a McCarthy-style senator, with no name, because he stands for a whole machine, not one man. Before him are cameras, a microphone, a stack of files. He truly believes the country is being hollowed out from within, and that Soviet spies really do exist. His strongest weapon is not evidence; it is the no-win question, are you now, or have you ever been, a member of the Communist Party? This pass lets you see, from inside a perpetrator, the hardest truth: the people who erode freedom rarely feel like villains. They feel like they are protecting the country.',
  },
  storyboard: [
    {
      id: 'cw-investigator-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1950 年的华盛顿，一间听证厅。我坐在长桌后面，面前是麦克风、一摞厚厚的文件，头顶是新闻摄像机和炸亮的闪光灯。每按一次快门，那个被传唤来的人，就跟着缩一下。\n\n台下就坐着这个人。报纸记者挤在两边，铅笔悬在纸上，等着记下他说的每一个字。在这间屋子里，我说什么，是明天的头条；他说什么，是定他罪的证据。\n\n我是一名调查员，一个参议员，国会那个叫 HUAC（众议院非美活动调查委员会）的委员会里的人。我不告诉你我的名字，因为我不是某一个人,我是一整套机器。麦卡锡是我们里最有名的那张脸，但像我这样的人，那几年坐满了整个华盛顿,联邦机构、学校、工会、电影厂，全都被「忠诚」这把尺子，量过一遍。\n\n这一遍，你坐进我这个位置。你会发现一件让你很不舒服的事:我做的每一件事，自己都打心底里觉得，是在保卫这个国家。这，正是这一切最可怕的地方。',
        en: 'Washington, 1950, a hearing room. I sit behind a long table, a microphone and a stack of files before me, news cameras and bursting flashbulbs overhead.\n\nA man who has been subpoenaed (ordered to come and testify) sits below. Newspaper reporters press in on both sides, pencils ready to write down every word he says.\n\nI am an investigator, a senator, a man on the committee in Congress called HUAC (the House Un-American Activities Committee). I will not tell you my name, because I am not one man. I am a whole machine. McCarthy is our most famous face, but in those years men like me filled Washington.\n\nThis pass puts you in my seat. You will find an uncomfortable thing: everything I do, I myself feel is protecting this country.',
      },
      deliverGoal: 'N1 hook — 1950 华盛顿听证厅 (长桌/麦克风/摄像机闪光灯/被传唤者/记者) + 调查员自我介绍 (不给名字/代表一整套机器/HUAC/麦卡锡是最有名的脸但这样的人坐满华盛顿) + 这一遍视角 (我做的每件事自己都觉得在保卫国家)',
      engagementHook: '我代表的不是一个人，是一整套那几年坐满华盛顿的机器。你愿意从一个施害者内部，看他怎么把伤害讲成保卫国家吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-investigator-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先弄清我为什么这么怕。这份怕，不是凭空来的，你得先站到 1950 年那个时间点上。\n\n二战刚打完，我们是地球上最强、最富的国家。可转眼之间，昨天并肩打仗的盟友苏联，变成了头号对手：东欧一个个国家，被它一块块吞下。1949 年更是连着两记重锤,8 月，苏联爆了自己的原子弹，我们以为还能领先很多年的王牌，没了；10 月，中国共产党建国。\n\n我们赢了战争，却好像正在输掉和平。\n\n而最让我夜里睡不着的，是另一个念头：敌人可能不只在外面，敌人可能就在我们里面。苏联怎么会这么快就有了原子弹？这种机密，不可能是他们自己一夜想出来的,一定有人，在我们的政府里、在我们的实验室里，把它偷偷递了出去。\n\n你先别急着说我多疑。请你记住这一点,后来证明，确实有苏联间谍。我的怕，有一个真实的内核。真正的问题在于:这个真实的内核，接下来会被放大、扭曲成什么。',
        en: 'First, understand why I am so afraid. This fear did not come from nowhere.\n\nWorld War II had just ended, and we were the strongest and richest nation on earth. But in a flash, yesterday\'s ally, the Soviet Union, became a rival, swallowing Eastern Europe piece by piece. In 1949 came two hammer blows in a row: the Soviets tested an atomic bomb, and the People\'s Republic of China was founded.\n\nWe won the war, yet we seem to be losing the peace.\n\nAnd what keeps me up at night is another thought: the enemy may not be only outside. The enemy may be inside us. How did the Soviets get the bomb\'s secrets so fast? Someone, in our government, in our labs, must have handed them over.\n\nDo not rush to call me paranoid. Remember this: it was later proven that Soviet spies really did exist. My fear had a real core. The question is what that core would be blown up into next.',
      },
      deliverGoal: 'N2 setup — 怕不是凭空来 (二战后最强最富 → 盟友苏联变对手吞东欧 → 1949 苏联原子弹+中共建国) + 赢战争却像输和平 + 最怕念头: 敌人可能在内部 (原子弹机密怎么这么快被苏联拿到一定有人递出去) + anti-extreme「后来证明确有苏联间谍，怕有真实内核」+ 问题是这内核会被放大成什么',
      engagementHook: '我的怕有一个真实的内核，后来证明确实有苏联间谍。可一个真实的怕，接下来会被放大成什么？这才是真正要看的。',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-investigator-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '有件事我得先讲清楚:我不是第一个动手的。在我之前，这台机器早就开动了。\n\n1947 年，连反对麦卡锡的杜鲁门总统，都签了一道命令（Executive Order 9835），建立联邦雇员忠诚审查计划。三百多万政府雇员，被一个个查过一遍。注意这套规矩最阴的地方：你不需要犯任何罪，只要被怀疑「不忠诚」、跟某个「颠覆性组织」有过牵连，就可能丢掉饭碗。而且举证责任是反的,不是我证明你有罪，是你得自己证明自己清白。\n\n同一年，我们 HUAC 把镜头对准好莱坞，传唤那些编剧和导演，逼问他们的政治信仰。十个人（后来被叫作好莱坞十君子）拒绝回答,注意，他们援引的是第一修正案（言论与结社自由），不是后来更常见的第五修正案,这个区别后面会讲。他们被判藐视国会，进了监狱，名字上了黑名单。\n\n你看明白了吗？一个全新的东西，从这里诞生了：你不必被任何法庭定罪,一个名字上了名单，职业生涯就结束了。这，就是我手里那把不需要判决书的刀。',
        en: 'I was not the first to act. Before me, the machine was already running.\n\nIn 1947, President Truman signed an order (Executive Order 9835), creating a federal Loyalty Program. More than three million government workers were checked, one by one. Note the darkest part of this system: you did not have to commit a crime. Just being suspected of being "disloyal" or tied to a "subversive group" could cost your job. And the burden was flipped: you had to prove your own innocence.\n\nThat same year, we at HUAC turned our cameras on Hollywood and called the screenwriters and directors. Ten of them (later the Hollywood Ten) refused to answer. Note this: they invoked the First Amendment (free speech and free association), not the Fifth Amendment that became more common later. That difference matters, and I will come back to it. They were convicted of contempt of Congress (refusing Congress\'s orders), went to prison, and had their names put on a blacklist.\n\nDo you see it? A new thing was born: you did not have to be convicted by any court. A name on a list ended a career. This is the blade in my hand that needs no verdict.',
      },
      deliverGoal: 'N3 setup — 我不是第一个 (机器先开动) + 1947 杜鲁门 EO 9835 忠诚审查计划 (300万+雇员被查/不需犯罪只要被怀疑就丢饭碗/举证责任反转自证清白) + 同年 HUAC 传唤好莱坞 + 好莱坞十君子拒答 (援引第一修正案言论自由非后来更常见的第五修正案, 显式区分 CED 考点) 被判藐视国会 (gloss 拒服从国会命令) 入狱上黑名单 + 全新的东西: 不必被法庭定罪一个名字上名单职业生涯就结束 = 没有判决书的刀',
      engagementHook: '一个名字上了名单，不用任何法庭定罪，职业生涯就结束。一把不需要判决书就能毁掉一个人的刀，为什么比监狱还好用？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-investigator-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1950 年 1 月，一个叫 Alger Hiss 的前国务院高官，因为伪证罪被判刑。他背后是「当过共产党、传过密件」的指控，证据据说藏在一只挖空的南瓜里,后来人们就叫它「Pumpkin Papers」（南瓜文件）。\n\n这个案子，对你来说是天上掉下来的弹药。它让「政府里真有间谍」这句话，从一句猜测，变成了法庭上盖了章的事实。从此你每说一句怀疑，都能加一句:看，Hiss 不就是吗，我们没冤枉人。\n\n几周后，2 月 9 日，一个叫麦卡锡的参议员在西弗吉尼亚一个小城 Wheeling 的旅馆里，举起一张纸，说：我手里有一份名单，上面 205 个正在国务院上班、却效忠共产党的人。\n\n（你得诚实地知道：那张纸他从没公开过，第二天数字就改成了 57，再没对上过，名单到底存不存在，没人能证实。）\n\n可你站在他的位置上，你心里清楚：名单是真是假，根本不重要。重要的是,它没法被反驳，而恐惧，已经种进了几百万人心里。',
        en: 'Now you are me.\n\nIn January 1950, a former senior State Department official named Alger Hiss was convicted of perjury (lying under oath), behind a charge that he had been a communist and passed secret documents, with evidence said to be hidden inside a hollowed-out pumpkin.\n\nFor you, this case is ammunition fallen from the sky. It turns "there really are spies in the government" from a guess into a fact in court.\n\nA few weeks later, on February 9, a senator named McCarthy held up a piece of paper in the small city of Wheeling, West Virginia, and said: I have here a list of 205 communists in the State Department.\n\n(You must honestly know this: he never made the paper public, the number changed to 57 the next day and never matched again, and no one could even prove the list existed.)\n\nBut standing in his place, you know in your heart: whether the list is real does not matter. What matters is that it cannot be disproved, and the fear is already planted.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1950.1 Hiss 伪证定罪 (共产党/传密件指控/Pumpkin Papers) = 天上掉的弹药 (政府里真有间谍从猜测变法庭事实) + 1950.2.9 McCarthy 在 Wheeling 举 205 人名单 + anti-fab 括号 (从没公开/次日改57/再没对上/名单存不存在没人能证实) + 你心里清楚: 名单真假不重要重要的是没法被反驳恐惧已种下',
      engagementHook: '名单是真是假，对我不重要。重要的是它没法被反驳，恐惧已经种下去了。一个无法被检验的指控，是不是比一个错误的指控更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-investigator-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我手里最有力的武器，从来不是证据。是一个问题。\n\n你坐在我对面，灯光打在你脸上，全国的记者盯着你。我俯身向前，问你那句话：「你现在是、或曾经是共产党员吗？」\n\n你想清楚没有,这个问题一旦问出口，你怎么答，都输。\n\n你承认，你完了，明天就上黑名单。你否认，可万一我查出你年轻时去过一次左翼读书会，我就告你伪证罪。你说「我有宪法第五修正案，我有权不自证其罪」，拒绝回答,行，但明天报纸的标题就是「Fifth Amendment Communist」（用第五修正案的共产党）。你的沉默，反倒成了你有罪的证据。\n\n你发现了吗？我把宪法本身,那条本来用来保护无辜者的权利，掉过头来，变成了一件给你定罪的工具。这是这个时代对「自由」最深的一道扭曲。\n\n这就是我真正的本事:我不需要证明你有罪，我只需要让你，回答不了。',
        en: 'My strongest weapon was never evidence. It was a question.\n\nYou sit across from me, the lights on your face, the nation\'s reporters watching. I ask you: "Are you now, or have you ever been, a member of the Communist Party?"\n\nThink it through: once this question is asked, every answer loses.\n\nAdmit it, and you are finished, on the blacklist tomorrow. Deny it, and if it turns out you went to one left-wing reading group as a young man, I charge you with perjury. Say you have the Fifth Amendment, your right to stay silent so you do not have to accuse yourself, and refuse to answer, fine, but tomorrow the headline is "Fifth Amendment Communist," and your silence becomes the proof of your guilt.\n\nDo you see it? I took the Constitution itself, the right that was meant to protect the innocent, and turned it around into a tool to convict you.\n\nThat is my gift. I do not need to prove you guilty. I only need to make you unable to answer.',
      },
      deliverGoal: 'N5 story — 最有力武器不是证据是问题 + 「你现在是或曾经是共产党员吗」全国记者看着 + 怎么答都输 (承认=完了上黑名单 / 否认=查出去过读书会告伪证 / 援引第五修正案=报纸叫 Fifth Amendment Communist 沉默成有罪证据) + 把宪法本身 (本保护无辜的权利) 掉头变成定罪工具 + 我不需证明你有罪只需让你回答不了',
      engagementHook: '我把第五修正案，那条本来保护无辜者的宪法权利，掉过头来变成给你定罪的工具。当连保护你的东西都能被用来害你，你还能怎么自保？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-investigator-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得告诉你一个我离不开的东西,客厅里的那台电视。\n\n1950 年代，电视刚刚走进美国的千家万户。短短几年，从极少数人家才有，变成几乎家家都有一台。\n\n这对我，是天大的好事。我的听证会，不再只是华盛顿一间屋子里的事。它被搬进了几千万个客厅。一个普通人，坐在自家沙发上，端着晚饭，就能看着我把一个嫌疑人，一句一句逼到无话可说。\n\n恐惧，第一次能这样大规模地、一对一地，送进每一个家庭。我不必挨家挨户去敲门,我只要坐在这张桌子后面，全国就跟着我一起紧张。\n\n我太喜欢这台机器了。它放大我的声音，放大我手里那张名单投下的影子，让千千万万人开始斜眼打量起自己的邻居、同事、老朋友。\n\n那时的我以为，这台电视会永远站在我这边。我没有想到一件事,镜头是中立的。它今天能把我放多大，将来，就能把我看得多清楚。',
        en: 'I have to tell you about a thing I cannot do without: the television in the living room.\n\nIn the 1950s, television had just walked into American homes. In a few years, it went from very few homes having one to most homes having one.\n\nFor me, this was a tremendous gift. My hearings were no longer just an affair in one room in Washington. They were carried into tens of millions of living rooms. An ordinary person sitting on his own sofa, holding his dinner, could watch me push a suspect to where he had nothing left to say.\n\nFear, for the first time, could be delivered into every home this way, on a mass scale, one to one.\n\nI loved this machine. It amplified my voice, amplified the shadow of the list in my hand, and made the whole country tense up with me and suspect their own neighbors.\n\nBack then I thought this television would always be on my side. I did not imagine that the lens is neutral. However large it can make me, it can later see me just as clearly.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 客厅里的电视从调查员角度 (1950s 电视走进千家万户从极少数到大多数) = 天大好事 (听证会搬进几千万客厅/普通人沙发上端晚饭看我逼嫌疑人/恐惧第一次大规模一对一送进每家) + 我太喜欢这台机器 (放大声音/放大名单影子/全国怀疑邻居) + 伏笔: 以为电视永远站我这边/镜头是中立的能放多大就能看多清楚。只碰电视从他角度不揭另两视角',
      engagementHook: '电视放大我的声音、放大那张名单的影子，我以为它永远站在我这边。可镜头是中立的，它能把我放多大，将来就能把我看得多清楚。你觉得这台机器最后会站谁那边？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-investigator-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的怕，开始自己长大，去找新的猎物。\n\n你以为我们只盯着共产党？不。恐惧一旦获得了授权，就停不下来,它会不停地去寻找下一个「不可靠的人」。\n\n1950 年起，成千上万的联邦雇员，因为被怀疑是同性恋，被解雇、或被逼着辞职。我们给的理由冠冕堂皇：这种人「容易被敌人敲诈」，是「安全风险」。1953 年，艾森豪威尔总统签的一道命令（Executive Order 10450），把这一条正式写进了规矩。这就是和红色恐慌并排着跑的另一场清洗，Lavender Scare（淡紫色恐慌）。\n\n你看清这台机器真正的逻辑了吗？它从来不只是为了抓某一个具体的间谍。它是在制造一种气氛,一种让任何「与众不同」的人,左翼、移民、同性恋者,都自动变得可疑、可被标记、可被清除的气氛。\n\n而坐在机器里的我，每抓住一个,都更加确信，自己在干一件对的事。我从来不觉得自己在害人，我觉得我在清扫。',
        en: 'My fear began to grow on its own, hunting for new prey.\n\nYou think we watched only communists? No. Once fear is given power, it keeps looking for the next "unreliable" person.\n\nStarting in 1950, thousands of federal workers were fired or forced to resign because they were suspected of being gay. The reason we gave: such people were "open to blackmail," a "security risk." In 1953, President Eisenhower signed an order (Executive Order 10450) that wrote this formally into the rules. This was the other purge that ran alongside the Red Scare, the Lavender Scare.\n\nDo you see the logic of this machine? It is not about catching one specific spy. It is about manufacturing an atmosphere in which anyone "different," leftists, immigrants, gay people, becomes easier to suspect, to mark, to remove.\n\nAnd I, sitting inside the machine, grow more certain with every person I catch that I am doing a right thing.',
      },
      deliverGoal: 'N7 story — 怕自己长大找新猎物 (恐惧获授权就找下一个不可靠的人) + Lavender Scare 1950 起数千联邦雇员因疑同性恋被解雇/辞职 (理由易被敲诈/安全风险) + 1953 艾森豪威尔 EO 10450 正式写进规矩 + 机器逻辑: 不是抓具体间谍是制造气氛任何与众不同的人 (左翼/移民/同性恋) 更易被怀疑标记清除 + 我每抓一个更确信自己在干对的事',
      engagementHook: '恐惧一旦获得授权，就会不停寻找下一个「不可靠的人」。而坐在机器里的我，每抓一个，都更确信自己在干对的事。这种「越做越确信」的感觉，最危险在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-investigator-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我太顺了。顺到我忘了一件最朴素的事,没有哪一股气势，是只涨不落的。\n\n1954 年，麦卡锡把矛头转向了美国陆军，指控军队里也窝藏着共产党。陆军这回不忍了，反过来还击,于是有了 Army-McCarthy 听证会。而这一次，跟以往都不同：整场听证会，被全国电视直播。\n\n几千万人坐在自家客厅里，第一次连续好多天，盯着麦卡锡本人,看他咄咄逼人，看他粗暴地打断别人，看他一遍遍挥舞着那些永远拿不出实证的指控。\n\n那张曾经只活在报纸标题里的脸，现在活生生地、一个钟头接一个钟头地，走进了每一个家庭。人们慢慢看清了:这个一直在喊「我在保卫你们」的人，原来是这副样子。\n\n同一台电视,几年来替我们把恐惧放大的那台,这一次，开始把恐惧本身那张丑陋的脸，照给所有人看。\n\n我曾以为这台机器会永远站在我这边。我错得太彻底了。',
        en: 'I had it too easy. So easy that I forgot one thing: no momentum rises without ever falling.\n\nIn 1954, McCarthy turned on the Army, charging that communists hid in the military too. The Army struck back, and so came the Army-McCarthy hearings. And this time, they were broadcast across the nation.\n\nTens of millions sat in their living rooms and, for the first time, watched McCarthy himself, day after day. They watched him bully. They watched him cut people off. They watched him wave accusations he could never back with proof.\n\nThe face that had once lived only in newspaper headlines was now alive, hour after hour, entering every home. People began to see clearly: this man who kept saying "I am protecting you" was actually like this.\n\nThe same television, the one that had amplified fear for us for years, this time began to let the fear show its ugly true face.\n\nI had thought this machine would always be on my side. I was wrong.',
      },
      deliverGoal: 'N8 story — 太顺忘了没有气势涨上去不落 + 1954 麦卡锡转向陆军 (指控军队藏共产党) → Army-McCarthy 听证会全国直播 + 几千万人客厅里连续多日盯着麦卡锡本人 (咄咄逼人/打断人/挥舞拿不出实证的指控) + 报纸标题里的脸活生生进每家 + 人们看清: 一直说我在保卫你们的人原来这副样子 + 同一台电视几年放大恐惧这次让恐惧露出丑陋真容 + 我以为机器永远站我这边我错了',
      engagementHook: '同一台电视，几年来替我们放大恐惧，这一次开始让恐惧露出它丑陋的真容。当一个人不再只是报纸上的名字、而是活生生进了你家客厅，你对他的看法会变吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-investigator-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张我活着的时候根本没去看的、更大的地图。\n\n就在我 1950 年举着名单、四处搜捕「内部敌人」的同时，地球的另一端，刚成立一年的新中国（中华人民共和国 1949 年建国），也在用它自己的方式，回应它眼中的「内部敌人」,1950 到 1952 年的镇压反革命，1951 年的三反，1952 年的五反，一系列政治运动接连展开。\n\n我得把话说在最前面:这两边的具体形式、规模、后果，差别巨大，绝不能简单画上等号。\n\n但把同一段时间、地球两端放在一起看，你能看见一个跨越了制度的共同机制：一个感到被包围、被渗透的社会，会本能地转向内部，去寻找、标记、清除那些「不可靠的人」。而在这个过程里，合理的警惕，和对无辜者的伤害，极容易被搅在一起,搅到连我这样身处其中的人，都再也分不清:自己到底是在保卫国家，还是在亲手制造恐惧。\n\n包括我。',
        en: 'Let me step back and show you a larger map, one I never once looked at while I was alive.\n\nAt the very time I was holding up my list in 1950 and hunting "inside enemies," on the other side of the earth, the new China (the People\'s Republic of China, founded in 1949) was, in its own way, answering what it saw as "inside enemies" too. There came a series of political campaigns from 1950 to 1952: the campaign to suppress counterrevolutionaries, the Three-Anti, and the Five-Anti.\n\nI must be clear: the specific forms, scale, and outcomes on the two sides differed enormously, and must never be simply equated.\n\nBut setting the same span of years on two sides of the earth next to each other reveals one mechanism that crosses systems: a society that feels surrounded and infiltrated tends to search out, mark, and remove the "unreliable" inside it. And in that process, reasonable caution and harm to the innocent are easily stirred together, so stirred that even the people inside cannot tell whether they are protecting the country or manufacturing fear.\n\nIncluding me.',
      },
      deliverGoal: 'N9 zoom-out + §8 同时代中国 (调查员 lens 触桥二) — 我 1950 举名单搜捕内部敌人同时地球另一端新中国 (PRC 1949 建国) 也回应内部敌人 (1950-52 镇压反革命/三反/五反) + 显式 Rule 0「具体形式规模后果差别巨大绝不能简单画等号」+ 共同机制 (感到被包围被渗透的社会倾向内部寻找标记清除不可靠的人 / 合理警惕与对无辜者伤害极易搅在一起搅到身处其中的人分不清在保卫国家还是制造恐惧) + 包括我',
      engagementHook: '地球两端，同一段时间，两个社会都在内部寻找「不可靠的人」。差别巨大，绝不能简单画等号,但有一个共同机制：搅到连我自己都分不清，是在保卫国家，还是在制造恐惧。把两边放一起看，你看见的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-investigator-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一程，该怎么评我？两种说法都站得住，你来称。\n\n一种说法：我是个在真实威胁面前尽职的人。苏联间谍确实存在,Hiss、Rosenberg 案后来都证明了渗透是真的。一个民主国家面对真敌人，搜查、警惕、设防，难道不是它该做的吗？把我当成纯粹的迫害者，是不是太轻巧、太事后诸葛了？\n\n另一种说法：恰恰是「有真威胁」这四个字，成了最好用的通行证。为了抓极少数真间谍，我用连坐、用名单、用反用宪法的手段，伤害了成千上万从没被证明有罪的无辜者。我每一步都觉得自己在保卫国家,而这，正是侵蚀自由最危险的样子，它从不觉得自己是反派。\n\n这两边，不是「他错了但情有可原」。是同一个我的两面,一个面对真威胁的尽职者，和一台用真威胁当燃料、烧掉了无辜与自由的机器。\n\n这是一道没有标准答案的难题,人们到今天还在两边来回掂量。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my course, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was a man doing his duty before a real threat. Soviet spies did exist; the Hiss and Rosenberg cases later proved the penetration was real. When a democracy faces real enemies, is searching, watching, and guarding not what it should do? To treat me as a pure persecutor, is that not too easy, too much hindsight?\n\nThe other view: it is precisely the words "there was a real threat" that became the most useful pass. To catch a tiny few real spies, I used guilt by association, lists, and the Constitution turned against people, and I harmed thousands of innocents never proven guilty of anything. At every step I felt I was protecting the country, and that is exactly the most dangerous shape of eroding freedom: it never feels like the villain.\n\nThese are not "he was wrong but understandable." They are two faces of the same me, a man doing his duty before a real threat, and a machine that used the real threat as fuel and burned away the innocent and freedom.\n\nThis is a hard problem with no single answer, one people still weigh both sides of today. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (真实威胁前尽职/苏联间谍确实存在 Hiss Rosenberg 证明渗透真的/民主国家面对真敌人搜查警惕该做的/当纯粹迫害者太轻巧太事后诸葛) / 另一种说法 (有真威胁成最好用的通行证/为抓极少数真间谍用连坐名单反用宪法伤害成千上万无辜/每步觉得在保卫国家正是侵蚀自由最危险样子从不觉得自己反派) / 同一个我两面 / neutral 无标准答案至今争论 / 想30秒两边都站得住',
      engagementHook: '面对真威胁尽职的人，和用真威胁当燃料烧掉无辜与自由的机器,是同一个我。「确实有真威胁」这件事，是为我开脱，还是恰恰是我最危险的通行证？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'cw-investigator-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是施害者这一边的声音。\n\n请记住：这只是一边。我讲的「我在保卫国家」「确实有真间谍」「我没做错什么」，听起来甚至有点道理,这正是施害者视角最危险的地方，它能把自己讲得通。\n\n但这一遍里，有一群人从头到尾没开口：那个被我一个问题问到丢了工作、上了黑名单、却从没被任何法庭定罪的人,他会怎么讲我口中这场「保卫」？还有那个在听证会上只问了我一句「你还有没有起码的体面」、就让我当众崩掉的律师,他站在我和被告中间，他会怎么看我？等你换上他们的视角，他们会狠狠地挑战你刚才听我说的每一句。\n\n最后留一个东西给你。还记得那台我以为永远站我这边的客厅电视吗？\n\n换一个视角再走一遍，你会从另一个人的眼睛里，再看见那块屏幕一次。到那时，它对你就不再只是放大恐惧的舞台了。',
        en: 'What you just heard was the voice of one side, the perpetrator\'s.\n\nRemember: it is only one side. My talk of "I am protecting the country," of "there really were spies," of "I did nothing wrong," can even sound a little reasonable, and that is exactly the most dangerous thing about a perpetrator\'s view. It can make itself make sense.\n\nBut in this pass, a group of people never spoke at all: the man I broke with one question, who lost his job, went on the blacklist, and yet was never convicted by any court, how would he tell this "protection" of mine? And the lawyer who, at the hearing, asked me only one thing, "have you no sense of decency," and broke me in public, he stood between me and the accused, how would he see me? When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Do you remember the living-room television I thought would always be on my side?\n\nWalk this through once more from another perspective, and you will see that screen again, through someone else\'s eyes. By then it will no longer be just a stage for amplifying fear.',
      },
      deliverGoal: 'N11 close/meta — 你听的是施害者一边 (能把自己讲得通最危险) + 还没听到: 被一个问题问到丢工作上黑名单却从没被法庭定罪的人 (会怎么讲这场保卫) + 只问一句「你还有没有体面」就让我当众崩掉的律师 (站我和被告中间会怎么看我) 会挑战你听的每句 + 暗示客厅电视会从另一视角再看见一次 (不直接解释 echo)',
      engagementHook: '施害者最危险的地方，是他能把自己讲得通。你听完我这一边，最想去问那个被我毁掉却没被定罪的人、那个只用一句话就让我崩掉的律师什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var welchLens = {
  id: 'welch-mediator',
  name: 'Joseph N. Welch',
  nameCn: '约瑟夫·韦尔奇',
  role: 'lonely-mediator',
  perspectiveTag: 'between-fear-and-decency',
  icon: '⚖️',
  description: {
    cn: '1890 到 1960 年，一个温和、守旧、讲究体面的波士顿律师，1954 年 Army-McCarthy 听证会上陆军的特别法律顾问。他不是英雄式的反抗者，也不是共产党人，他的本职只是替陆军辩护，不是来扳倒麦卡锡的。这恰是他作为中间人的位置：站在体制内部，相信程序与体面，却被逼到必须当众划下一条线。这一遍让你站在所有人中间，看一个不靠激进、只在恰当时刻用最朴素的人之常情，戳破一个靠恐惧撑起来的庞然大物的人。',
    en: 'From 1890 to 1960, a mild, old-fashioned, decency-minded Boston lawyer, the Army\'s special counsel at the 1954 Army-McCarthy hearings. He was not a heroic rebel, and he was not a communist; his job was simply to defend the Army, not to take down McCarthy. That is exactly his place as a mediator: standing inside the system, believing in procedure and decency, yet pushed to where he had to draw a line in public. This pass puts you in the middle of everyone, watching a man who, not through radicalism but by choosing the right moment and the plainest human decency, punctures a giant built on fear.',
  },
  storyboard: [
    {
      id: 'cw-welch-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1954 年 6 月一个下午，华盛顿的一间听证厅。全国的电视镜头，第一次，都对着这间屋子。这是历史上头一回，几千万人能在自家客厅里，盯着这样一场听证会看。\n\n我坐在陆军这一边的桌子后面。我六十多岁了，一个波士顿来的律师，穿着体面的深色西装，说话慢条斯理，带着一点旧时代的客气。我不是英雄，我没打算改变历史。我来这儿，只有一个本职:替美国陆军，当辩护律师。\n\n我是 Joseph N. Welch（约瑟夫·韦尔奇）。我这一辈子相信规矩，相信程序，相信哪怕在最激烈的争执里，人和人之间，也总该留着一点起码的体面。\n\n这一遍，你坐进我这个位置。你既不是那个举着名单的人，也不是那个被名单毁掉的人,你站在所有人的中间。你会慢慢发现一件事：有时候，让一个靠恐惧撑起来的庞然大物垮掉的，不是更激烈的对抗，而是一句最朴素、最不起眼的话。',
        en: 'An afternoon in June 1954, a hearing room in Washington. The nation\'s televisions are all turned here.\n\nI sit behind the table on the Army\'s side. I am in my sixties, a lawyer from Boston, decently dressed, speaking slowly. I am no hero, and I did not set out to change history. I came here with one job: to be the defense lawyer for the United States Army.\n\nI am Joseph N. Welch. I believe in rules, in procedure, in the idea that in a civilized society there should always be some basic decency between one person and another.\n\nThis pass puts you in my seat. You are neither the side holding the list nor the side ruined by it. You stand in the middle of everyone. You will find that sometimes what brings down a giant built on fear is not fiercer confrontation, but a single plain sentence.',
      },
      deliverGoal: 'N1 hook — 1954.6 下午华盛顿听证厅全国电视对着 + Welch 自我介绍 (六十多岁波士顿律师/体面慢条斯理/不是英雄没打算改变历史/本职替陆军辩护) + 信规矩程序文明社会人之间该有起码体面 + 这一遍视角 (不是举名单一方也不是被毁一方/站所有人中间/让庞然大物垮掉的不是激烈对抗是一句最朴素的话)',
      engagementHook: '我不是英雄，我只是个来替陆军辩护的律师。可有时候让一个靠恐惧撑起来的庞然大物垮掉的，不是更激烈的对抗，而是一句最朴素的话。你信吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-welch-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清我是个什么样的人，你才懂我后来那一问，到底有多重。\n\n我不是个会上街喊口号、振臂高呼的人。恰恰相反，我守旧、温和，一辈子相信「按规矩来」这四个字。在我看来，一个社会能太太平平地运转，靠的从来不是谁的嗓门大，而是大家都守着同一套程序:法庭有法庭的规矩，听证会有听证会的规矩，人对人，再怎么吵，也得讲个理、留个体面。\n\n所以请你格外注意一件事:我，不是麦卡锡的天敌。我不是共产党人，我手上没有任何要替谁翻案的立场，我甚至不见得反对「警惕苏联渗透」这件事本身,我知道那个年代，威胁确实存在。\n\n这正是我这个位置最特别、也最容易被误解的地方,我是个从体制内部出来的人。我相信这套系统，相信这套规矩。我不是来掀翻桌子的。我只是被一步步逼到了一个地步:这个人，已经把规矩和体面，踩到了我再也没法假装没看见的程度。',
        en: 'First, what kind of man I am, so you understand the weight of that one question later.\n\nI am not a man who marches and shouts slogans. Quite the opposite: I am old-fashioned and mild, and all my life I have believed in "doing it by the rules." To me, a society runs not on who is loudest, but on everyone keeping the same procedure: a court has its rules, a hearing has its rules, and person to person, there must be reason and a little dignity left.\n\nSo note this: I am not McCarthy\'s natural enemy. I am not a communist, and I do not even necessarily oppose "watching out for Soviet penetration" in itself.\n\nThis is what makes my position special: I am a man who came up from inside the system. I believe in this system, these rules. I am not trying to flip the table. I was simply pushed to a point where this man had trampled the rules and decency to a degree I could no longer pretend not to see.',
      },
      deliverGoal: 'N2 setup — 我是什么样的人 (不上街喊口号/守旧温和一辈子信按规矩来/社会运转靠守同一套程序不是嗓门大/人对人讲理留体面) + 不是麦卡锡天敌 (不是共产党人甚至不见得反对警惕苏联渗透本身) + 位置最特别: 从体制内部出来的人信这套系统规矩 + 不是要掀翻桌子是被逼到一个地步 (这人把规矩体面踩到我不能假装没看见)',
      engagementHook: '我不是麦卡锡的天敌，我甚至不反对警惕苏联渗透本身。我只是个相信规矩的体制内的人,被逼到再也不能假装没看见。一个守规矩的人，什么时候才该站出来打破沉默？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-welch-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我后来为什么那样出手，得先看清我面对的，是一台什么样的机器。\n\n这台机器，不是麦卡锡一个人。早在他 1950 年举起名单之前，它就开动了:1947 年的联邦忠诚审查计划、好莱坞十君子（他们当年援引的是第一修正案的言论自由，不是后来更常见的第五修正案）、HUAC 的听证会。它的可怕之处在于，它不需要法庭、不需要判决。\n\n它只需要一份名单，一个无解的问题:「你是、或曾经是共产党员吗？」承认就完，否认可能被告伪证，沉默就被报纸叫作「Fifth Amendment Communist」。怎么答都输。\n\n后来法律还在一步步收紧:1950 年，国会越过杜鲁门的否决，通过 McCarran Act，要求共产党组织登记；1951 年，最高法院在 Dennis 案里维持了对共产党领袖的定罪。\n\n几年里，成千上万的人,编剧、教师、公务员，没被判任何罪，只因名字上了一份名单，就丢了工作、丢了名誉、丢了朋友。而所有这一切，都打着一个最堂皇的旗号:为了国家安全。\n\n我要面对的，就是这样一台用「安全」当外衣、把恐惧变成武器的机器。',
        en: 'To understand why I later acted as I did, you must first see what kind of machine I faced.\n\nThis machine was not McCarthy alone. Long before he held up his list in 1950, it was already running: the 1947 federal Loyalty Program, the Hollywood Ten (who invoked the First Amendment\'s free speech, not the Fifth Amendment that became more common later), the HUAC hearings. Its horror is that it needs no court and no verdict.\n\nIt needs only a list and a no-win question: "Are you, or have you ever been, a communist?" Admit it and you are finished; deny it and you may be charged with perjury (lying under oath); stay silent and the newspapers call you a "Fifth Amendment Communist." Every answer loses.\n\nThe law kept tightening too. In 1950, Congress overrode Truman\'s veto and passed the McCarran Act, requiring communist groups to register; in 1951, in the Dennis case, the Supreme Court upheld the conviction of communist leaders.\n\nOver the years, thousands of people were never convicted of any crime: screenwriters, teachers, clerks. Just because a name landed on a list, they lost their jobs, their reputations, their friends. And all of it flew under the most stately banner: for the sake of national security.\n\nWhat I had to face was exactly this, a machine that wore "security" as a coat and turned fear into a weapon.',
      },
      deliverGoal: 'N3 setup — 我面对的是一台什么机器 (不是麦卡锡一人/1950 举名单前就开动: 1947 忠诚审查/好莱坞十君子[援引第一修正案非第五]/HUAC) + 法律收紧链 (1950 越过否决 McCarran Act 共产党组织登记/1951 Dennis 案最高法院维持定罪 = DBQ named evidence) + 可怕处不需法庭判决只需名单+无解问题 (是或曾经是共产党员吗/承认完否认告伪证沉默叫 Fifth Amendment Communist/怎么答都输) + 成千上万人 (编剧/教师/公务员) 没判罪只因名字上名单丢工作名誉朋友 + 全打着国家安全旗号 + 我要面对的是用安全当外衣把恐惧变武器的机器',
      engagementHook: '这台机器不需要法庭、不需要判决,只需要一份名单，和一个怎么答都输的问题。而它所做的一切，都打着「为了国家安全」的旗号。当伤害穿上了最堂皇的外衣，你还认得出它吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-welch-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1954 年，麦卡锡走得太远了。他把矛头转向了美国陆军，指控军队里也窝藏着共产党。陆军请你来当辩护律师,你的对手，就是这个全国上下最让人害怕的人。一个能用一句话毁掉任何人的人。\n\n而这一次，有件大事不一样:整场听证会，被全国电视直播。几千万人，就坐在自家客厅里，一帧一帧地看着。\n\n你坐在他对面，心里清楚一件事:你绝不能用他的方式去打他。你要是也变得咄咄逼人、也靠吼、也靠扣帽子，那你就成了第二个他,观众分不清你俩，恐惧也不会退。\n\n你赢不了一场比谁更狠的比赛,在那种比赛里，他是冠军，他玩了一辈子。\n\n你能赢的，只剩一样东西:你比他更有耐心，更守规矩，更体面。你要做的，是让全国几千万双眼睛，自己看清楚,谁，才是这间屋子里真正失了分寸的那一个。\n\n你愿不愿意慢下来，用体面，去对抗凶狠？',
        en: 'Now you are me.\n\nIn 1954, McCarthy went too far. He turned on the United States Army, charging that communists hid in the military too. The Army hires you as its defense lawyer, and your opponent is the most feared man in the country.\n\nAnd this time something big is different: the whole hearing is broadcast live across the nation. Tens of millions sit in their living rooms, watching.\n\nYou sit across from him, knowing one thing: you cannot beat him with his own methods. If you too become aggressive, also shout, also pin labels, you become a second him.\n\nYou cannot win a contest of who is more vicious; in that contest, he is the champion.\n\nThe only thing you can win with is this: you are more patient than he is, more rule-abiding, more decent. You must let tens of millions of eyes across the nation see for themselves who, in this room, is the one who has truly lost all measure.\n\nAre you willing to slow down, and meet ferocity with decency?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1954 麦卡锡走太远转向陆军 (指控军队窝藏共产党) + 陆军请你当辩护律师对手是全国最让人害怕的人 + 不一样: 整场听证会全国直播几千万人客厅里看 + 你心里清楚不能用他的方式打他 (变咄咄逼人靠喊靠扣帽子就成第二个他) + 赢不了比谁更狠 (那种比赛他是冠军) + 你能赢的只有: 更有耐心更守规矩更体面让全国看清谁真正失了分寸 + 你愿不愿慢下来用体面对抗凶狠',
      engagementHook: '你不能用他的方式打他,变得跟他一样凶狠，你就成了第二个他。你只能比他更有耐心、更体面，让全国自己看清谁失了分寸。用体面去对抗凶狠,这是软弱，还是更难的勇敢？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-welch-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '日子一天天过去，听证会上唇枪舌剑，你来我往。我守着我自己的节奏:慢，稳，只讲程序，只讲证据，绝不被他带着跑。\n\n可我心里，始终绷着一根线。我知道，跟这样的人较量，光靠耐心是不够的。总会有那么一个时刻,他会失控，会越过一条所有正常人心里都默认有的线。我要做的，不是去制造那个时刻，而是耐心地等它来,然后，在它真的来的那一刻，不躲不让，让全国人民都看个清楚。\n\n这是我和麦卡锡最根本的不同。他靠的是进攻：靠不停地指控、施压、制造一个又一个恐惧。\n\n而我靠的是,守。我守着体面，守着规矩，守着一个再朴素不过的信念:再大的权势，也不该被允许，随随便便就毁掉一个普通人。\n\n我不知道那个时刻具体会怎么来。我只知道，当它来的时候，我一秒都不能错过。我得用最简单的话，替所有人，说出那句他们心里早就憋着、却没人敢说出口的话。',
        en: 'Day after day passed, words crossing like swords at the hearings. I kept my own rhythm: slow, steady, speaking of procedure, speaking of evidence.\n\nA thread stayed taut inside me. I knew that against such a man, patience alone was not enough. There would come a moment when he lost control, when he crossed a line that lives in every normal person\'s heart. My task was not to manufacture that moment, but to wait for it, and then, when it came, to let the whole nation see it clearly.\n\nThis was my deepest difference from McCarthy. He relied on attack, on endless accusation, pressure, and the making of fear.\n\nI relied on holding. I held to decency, to the rules, to a plain belief: no power, however great, should be allowed to casually destroy an ordinary person.\n\nI did not know exactly how that moment would come. I only knew that when it came, I must not miss it. I would have to say, in the simplest words, the thing everyone had long held in their chest but no one dared to speak.',
      },
      deliverGoal: 'N5 story — 听证会唇枪舌剑我守节奏 (慢稳讲程序证据) + 心里绷一根线 (光耐心不够/总会有时刻他失控越过一条所有正常人心里都有的线/我不制造那时刻而是等它来到来时让全国看清) + 我和麦卡锡最根本不同 (他靠进攻指控施压制造恐惧 / 我靠守体面规矩+朴素信念再大权势不该被允许随便毁掉普通人) + 不知时刻怎么来只知不能错过 + 要用最简单的话说出所有人憋着没人敢说的那句',
      engagementHook: '他靠进攻、靠制造恐惧；我靠守,守着一个朴素的信念：再大的权势，也不该被允许随便毁掉一个普通人。在一个谁都不敢出声的房间里，等待并说出那句话，需要的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-welch-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那个时刻，1954 年 6 月 9 日，终于来了。\n\n麦卡锡为了反击我，突然点名我事务所里一个年轻律师，说他年轻时跟一个「共产党外围组织」有过牵连,把一个跟这桩案子毫不相干的年轻人，当着全国的面拖下水，要毁掉他刚刚开始的前途。\n\n这，就是我等了很久的那条线。他，越过去了。\n\n我停顿了一下。然后，我没有提高声音，没有谈意识形态，没有摆出任何证据。我只是慢慢地，说出了那句后来载入史册的话（下面是从我的英文原话译过来的）:\n\n「参议员，直到这一刻，我才真正掂量出你的残忍与鲁莽……参议员，我们不要再追杀这个年轻人了。你已经做得够多了。先生，你难道，到头来，一点起码的体面都没有了吗？你心里，难道一点体面都不剩了吗？」\n\n全场，一片寂静。然后，旁听席上，响起了掌声。\n\n几千万人，在自己家的客厅里，亲眼看着这一刻。我并没有「打败」他,我只是，让全国人民同一时刻，都看清了他。',
        en: 'That moment, June 9, 1954, came.\n\nTo strike back at me, McCarthy suddenly named a young lawyer in my firm, saying he had once been tied to a "communist front group," dragging a young man who had nothing to do with the case into the open, to ruin his future.\n\nThis was the line I had waited for. He crossed it.\n\nI paused. Then, I did not raise my voice, did not talk ideology, did not lay out any evidence. I said only the words that went into history:\n\n"Until this moment, Senator, I think I never really gauged your cruelty or your recklessness. Let us not assassinate this lad further, Senator. You have done enough. Have you no sense of decency, sir, at long last? Have you left no sense of decency?"\n\nThe room went silent. Then the gallery broke into applause.\n\nTens of millions, in their own living rooms, watched this moment with their own eyes. I did not defeat him. I only let everyone, all at once, see him clearly.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1954.6.9 那个时刻来了 + 麦卡锡反击点名 Welch 事务所年轻律师 (说与共产党外围组织有牵连/把毫不相干的年轻人当众拖下水毁前途) = 我等的那条线他越过去了 + Welch 名言 EN 为完整原话 primary 逐字 (含 Senator/sir/at long last/Have you left no sense of decency); CN 标「从英文原话译过来」非逐字 (没提高声音没谈意识形态没摆证据) + 全场寂静旁听席掌声 + 客厅里的电视从 Welch 角度 (几千万人客厅里亲眼看这一刻) + 我没打败他只让所有人同时看清他。只碰电视从他角度不揭另两视角',
      engagementHook: '我没有提高声音，没有谈意识形态，没有摆证据,我只问了一句「你还有没有起码的体面」。为什么有时候打败恐惧的，不是更强的论证，而是把人心里那点羞耻感重新唤醒？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-welch-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那一句话之后，发生了什么？\n\n麦卡锡几年来一点点积累起来的那股气势，就在那几千万人的客厅里，当众泄了气。不是因为我赢了一场辩论,我根本没有跟他辩。而是因为全国人民，第一次同时、清清楚楚地，看见了他真实的样子。\n\n同年 12 月，参议院以压倒性的多数，正式谴责（censure）了他。他从此迅速失势，三年后，1957 年，去世了。\n\n但你千万别误会，以为是我一个人扳倒了他。\n\n真正让他垮掉的，是那台电视，是那几千万双终于看清了的眼睛，是那个时代里早已悄悄积累起来的、对没完没了「猎巫」的厌倦。我只不过恰好站在那个位置上，在那个恰当的时刻，替所有人，说出了那句憋了太久的话。\n\n扳倒恐惧的，常常不是某一个英雄的英勇对抗。而是羞耻感,这个东西，在一个社会里，终于慢慢地，回来了。',
        en: 'After that one sentence, what happened?\n\nThe momentum McCarthy had built up over years drained away, in public, in those tens of millions of living rooms. Not because I won a debate, I never debated him at all. It was because the people of the nation, for the first time, all at once, saw him clearly.\n\nThat December, the Senate, by an overwhelming majority, formally censured him. He fell fast, and three years later, in 1957, he died.\n\nBut do not mistake it as if I alone brought him down.\n\nWhat truly made him collapse was that television, those tens of millions of eyes that finally saw clearly, and the weariness with the "witch hunt" that had quietly built up in that era. I merely happened to stand in that place, and at the right moment, said for everyone the sentence held in too long.\n\nWhat brings down fear is often not a hero\'s confrontation. It is shame, in a society, finally coming back.',
      },
      deliverGoal: 'N7 story — 那句话之后 (麦卡锡几年气势在几千万客厅当众泄气/不是我赢辩论我根本没辩/全国第一次同时清楚看见他的样子) + 同年12月参议院压倒多数 censure 谴责 + 迅速失势 1957 去世 + 别误会以为我一个人扳倒他 + 真正让他垮的 (那台电视/几千万终于看清的眼睛/那时代悄悄积累的对猎巫的厌倦) + 我只是恰好站那位置恰当时刻替所有人说出憋太久的话 + 扳倒恐惧常不是英雄对抗是羞耻感在一个社会里终于回来了',
      engagementHook: '别以为是我一个人扳倒了他。真正让他垮掉的，是那台电视，是几千万双终于看清的眼睛,是一个社会里，羞耻感终于回来了。一个人的一句话，和一个社会的转向，到底是谁成全了谁？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-welch-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我必须诚实地告诉你一件不那么提气的事:我那一问，戳破了一个人，却并没有拆掉那台机器。\n\n麦卡锡个人是倒了。但 1947 年就开动的忠诚审查计划，还在照常运转；那一份份黑名单，还挂在制片厂的抽屉里。那些早已丢了工作、毁了名誉的人，并没有因为他的倒台，就一夜之间，拿回自己被偷走的人生。像 Dalton Trumbo 那样上了黑名单的编剧，往后很多年，还得继续躲着，用一个假名字偷偷写剧本。\n\n你看，我做的那件事，重要，但有限。我让一个最嚣张的人闭了嘴，让一整种风气开始退潮。可一台已经运转了七八年的恐惧机器，绝不会因为一句漂亮话，就咔地停下来。\n\n这是我最想留给你的一点清醒:对抗恐惧，从来不是一锤定音的事。我那一问，是一个转折，但远远不是终点。真正的清算，要靠之后很多很多年、很多很多个普通人，一点一点，慢慢去做。',
        en: 'I must honestly tell you something less rousing: my one question punctured a man, but it did not dismantle the machine.\n\nMcCarthy the man fell. But the Loyalty Program still ran, and the blacklist still hung. Those who had long since lost their jobs and ruined reputations did not, with his fall, get their lives back overnight. A blacklisted screenwriter like Dalton Trumbo still had to write under fake names, in secret, for many more years.\n\nYou see, what I did mattered, but it was limited. I made the most brazen man fall silent, and let a climate begin to recede. But a fear machine that had run for seven or eight years does not stop for one fine line.\n\nThis is the clear-eyed thing I want to leave you: standing against fear is never settled in one stroke. My question was a turning point, but not an end. The real reckoning would take many, many years afterward, and many, many people, to do, little by little.',
      },
      deliverGoal: 'N8 story (诚实降级) — 不那么提气的事: 我那一问戳破一个人却没拆掉机器 + 麦卡锡个人倒但忠诚审查还运转黑名单还挂着 + 丢工作毁名誉的人没因他倒台一夜拿回人生 (Dalton Trumbo 上黑名单还得用假名偷偷写很多年) + 我做的重要但有限 (让最嚣张的人闭嘴让风气退潮但运转七八年的机器不会因一句漂亮话就停) + 清醒: 对抗恐惧从不是一锤定音/我那一问是转折不是终点/真正清算靠之后很多年很多人一点点做',
      engagementHook: '我那一问戳破了一个人，却没有拆掉那台机器。麦卡锡倒了，可黑名单还挂着，那些被毁的人没能一夜拿回人生。对抗恐惧，为什么从来不是一句漂亮话就能一锤定音的？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-welch-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图,关于「谁享受到了那个时代，谁被挡在门外」。\n\n就在我们为「自由」和「安全」在听证厅里争论的同时，同一个美国，正用另一只手，造一个繁荣的梦。1944 年的 GI Bill（军人复员法案）给退伍军人上学、买房的钱；1947 年起，Long Island 上一夜之间长出 Levittown,流水线盖出的成千上万套郊区独栋房，让白人退伍军人买得起。\n\n可这个梦，从设计上就带着一条颜色线。购房合同白纸黑字写着「只售白人」；银行用 redlining（红线政策），系统性地拒绝给黑人社区放贷。同一份 GI Bill、同一个 Levittown，对白人和黑人退伍军人，是两种命运。\n\n我那一问，关心的是「自由会不会被恐惧吃掉」。可同一个国家，还有另一群人，他们的问题是,这份繁荣，凭什么没有我的份？',
        en: 'Let me step back and show you a larger map, about who got to enjoy that era and who was locked out.\n\nAt the very time we argued over "freedom" and "security" in the hearing room, the same America was building, with its other hand, a dream of prosperity. The 1944 GI Bill gave veterans money for college and homes; from 1947, Levittown rose almost overnight on Long Island, thousands of assembly-line suburban houses that white veterans could afford.\n\nBut this dream carried a color line by design. The home contracts said, in black and white, "whites only," and banks used redlining to systematically refuse loans to Black neighborhoods. The same GI Bill, the same Levittown, meant two different fates for white and Black veterans.\n\nMy one question cared about whether freedom would be eaten by fear. But in the same country, there was another group of people whose question was this: this prosperity, by what right is there no share in it for me?',
      },
      deliverGoal: 'N9 zoom-out (郊区另一面) — 更大地图: 谁享受到时代谁被挡门外 + 我们听证厅争自由与安全同时同一个美国另一只手造繁荣梦 (1944 GI Bill 给退伍军人上学买房钱 / 1947 起 Levittown 在 Long Island 一夜长出/流水线成千上万套郊区独栋让白人退伍军人买得起) + 梦从设计带颜色线 (合同写只售白人/银行 redlining 系统性拒绝黑人社区放贷/同一 GI Bill 同一 Levittown 白人黑人退伍军人两种命运) + 我那一问关心自由会不会被恐惧吃掉/同一国家另一群人问繁荣凭什么没我的份',
      engagementHook: '我那一问关心的是「自由会不会被恐惧吃掉」。可同一个美国，还有另一群人，他们的问题是：这份繁荣，凭什么没有我的份？一个社会能一边更自由、一边更不平等吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-welch-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一程，最难评的，是我这种「站在中间的人」到底算什么。两种说法都站得住。\n\n一种说法：我是个迟到又有限的旁观者。这台恐惧机器已经运转了七八年，毁了那么多人，我才在 1954 年、在它快要自己退潮的时候，说了一句漂亮话。我没救回任何一个上黑名单的人，我守的「体面」「程序」，本身就是这套体制的一部分。把我说成英雄，是不是太抬举了？\n\n另一种说法：恰恰是「站在中间、守着规矩」的人，在关键时刻最有分量。我不是局外的激进者，我是体制内一个本来该沉默的人,正因为这样，当我说「你还有没有体面」时，全国才听得进去。改变一个社会的，往往不是最激烈的人，而是某个本分人，终于忍不下去了。\n\n这两边，不是「他有用但不够」。是同一个我的两面,一个体制的同谋，和一个体制内最关键的良心。\n\n你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my course, the hardest thing to judge is what a "man in the middle" like me really amounts to. Both views stand.\n\nOne view: I was a late and limited bystander. This fear machine had run for seven or eight years and ruined so many people, and only in 1954, when it was about to recede on its own, did I say one fine line. I did not save a single blacklisted person, and the "decency" and "procedure" I held to were themselves part of this system. To call me a hero, is that not too flattering?\n\nThe other view: it is precisely the person "in the middle, holding to the rules" who carries the most weight at the crucial moment. I was not an outside radical; I was a man inside the system who was supposed to stay silent, and that is exactly why, when I said "have you no decency," the whole nation could take it in. What changes a society is often not the fiercest person, but some ordinary, dutiful man who finally cannot bear it any longer.\n\nThese are not "he was useful but not enough." They are two faces of the same me, an accomplice of the system, and the system\'s most crucial conscience.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 站在中间的人算什么 / 一种说法 (迟到又有限的旁观者/机器运转七八年才在快退潮时说句漂亮话/没救回任何上黑名单的人/守的体面程序本身是体制一部分/说英雄太抬举) / 另一种说法 (站中间守规矩的人关键时刻最有分量/不是局外激进者是体制内本该沉默的人正因此全国才听得进/改变社会往往不是最激烈的人是某个本分人终于忍不下去) / 同一个我两面 (体制同谋/体制内最关键的良心) / 想30秒两边都站得住',
      engagementHook: '我守的「体面」和「程序」，是这套体制的同谋，还是体制内最关键的那点良心？改变一个社会的，是最激烈的人，还是某个本分人终于忍不下去了？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'cw-welch-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一程，你会怎么评价一个站在所有人中间的人？\n\n我不属于任何一边。我不是举名单的调查员，也不是被名单毁掉的人。我只是个相信规矩、被逼着说了一句真话的律师。现在，你只听到了我这一边。\n\n那个举着名单的调查员,他真觉得自己在作恶吗？还是真心相信自己在保卫国家？那个被一个问题问到丢了一切、却从没被定罪的人,他会怎么看我这句迟来的「体面」？换上他们的视角，他们会挑战你刚才听我说的每一句。\n\n这里还要补一个我那个时代,几乎没人会抬眼去看的另一个角落。就在我们为「自由」争论时,地球另一端，同期的新中国（1949 建国）也在用自己的方式清查它眼中的「内部敌人」。两边形式规模后果差别极大，绝不能简单等同,但放在一起，能看见同一个机制：被威胁的社会，会怎样对待内部「不可靠的人」。这个问题，不分国界。\n\n最后，还记得那台直播了我那一问的客厅电视吗？换个视角再走一遍，你会从另一双眼睛里，再看它一次。',
        en: 'Having walked my course, how would you judge a man who stood in the middle of everyone?\n\nI belonged to no side. I was not the investigator holding the list, nor the man ruined by it. I was only a lawyer who believed in rules and was pushed into speaking one true sentence. Now, you have heard only my side.\n\nThat investigator holding the list, did he truly think he was doing evil? Or did he truly believe he was protecting the country? The man broken by one question, who lost everything yet was never convicted, how would he see this late "decency" of mine? Switch to their perspectives, and they will challenge every sentence you just heard from me.\n\nHere I must add a corner of my age that almost no one back then ever looked at. At the very time we argued over "freedom," on the other side of the earth, the same-era new China (founded in 1949) was, in its own way, purging what it saw as "inside enemies." The forms, scale, and outcomes on the two sides differed enormously and must never be simply equated, but set side by side, they reveal one mechanism: how a threatened society treats the "unreliable" people inside it. That question knows no borders.\n\nFinally, do you remember the living-room television that broadcast my one question? Walk this through once more from another perspective, and you will see it again, through another pair of eyes.',
      },
      deliverGoal: 'N11 close/meta + §8 桥二 — 评价站在中间的人 (不属任何一边/不是举名单调查员也不是被毁的人/只是信规矩被逼说一句真话的律师/你只听到我这边) + 还没听到: 举名单调查员 (真觉得自己作恶还是真心信在保卫国家) + 被一个问题问到丢一切却没被定罪的人 (会怎么看我这句迟来的体面) 会挑战你听的每句 + §8 注入: 同期新中国 (1949 建国) 用自己方式清查内部敌人 + 显式 Rule 0 (形式规模后果差别极大绝不能简单等同/放一起见同一机制: 被威胁社会怎样对待内部不可靠的人/这问题不分国界) + 暗示客厅电视换视角再看一次 (不解释 echo)',
      engagementHook: '我对谁都不完全是自己人,不是举名单的，也不是被名单毁掉的。你只听到了我这一边。那个举名单的调查员、那个被一个问题毁掉的人，会怎么讲这同一段历史？你最想去问他们什么？',
      expectsRealAnswer: true,
    },
  ],
};

export var blacklistedLens = {
  id: 'blacklisted-target-receiving-end',
  name: 'The One Erased by a List',
  nameCn: '被一张名单抹掉的人',
  role: 'receiving-end',
  perspectiveTag: 'blacklisted-and-locked-out',
  icon: '📋',
  description: {
    cn: '冷战国内战线最没有权力的位置上的人，没有名字，因为恐惧与排斥很少替它们伤害的人留下名字。这一遍刻意把两种处境叠在一格:他可能是个被传唤到 HUAC、几周后名字就上了黑名单、却从没被任何法庭定罪的好莱坞编剧；也可能是个刚从二战回来、拿着 GI Bill 这份「人人平等」的承诺去买房，却被 redlining 一道红线挡在 Levittown 门外的黑人退伍军人。你站在这里，亲身体会恐惧与排斥如何不动用监狱，却照样摧毁一个人的人生,一张名单、一份合同、一条红线，就够了。',
    en: 'A person in the least powerful position on the Cold War home front, with no name, because fear and exclusion rarely leave a name for the people they harm. This pass deliberately stacks two situations in one square: he may be a Hollywood screenwriter summoned before HUAC whose name lands on a blacklist weeks later, yet who is never convicted by any court; he may also be a Black veteran just home from World War II who takes the GI Bill\'s promise of "equality" to buy a home, only to be turned away from Levittown by a single red line of redlining. You stand here and feel, in your own body, how fear and exclusion can destroy a life without ever using a prison, one list, one contract, one red line is enough.',
  },
  storyboard: [
    {
      id: 'cw-blacklisted-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我没有名字给你。\n\n不是我不肯说。是恐惧和排斥这两样东西，从来都不替它们伤害的人，留下名字。账本上、名单上、购房合同上，处处都没有「我」,只有一个随时可以被笔尖划掉的位置。你记得住麦卡锡的名字、记得住那些大人物的名字,可像我这样被他们碾过去的人，有几十万，没有一个名字，被你听说过。\n\n那是冷战头几年的美国。往外看，是全世界最强、最富的国家：电视刚走进千家万户，郊区一片崭新的房子拔地而起，洗衣机、新车，一派欣欣向荣。可就在这片繁荣的里子里，有一群人，正被悄无声息地，划掉。\n\n这一遍，你站到最底下、最没有权力的这一格来。\n\n我要让你亲身体会一件事，一件会让你脊背发凉的事:摧毁一个人，原来根本用不着监狱。一张名单、一份合同、一条画在地图上的红线，就够了。它不声不响，它合法，它甚至体面,而你的人生，就这么，没了。',
        en: 'I have no name to give you.\n\nNot because I will not say it. It is that fear and exclusion, these two things, never leave a name for the people they harm. In the ledger, on the list, in the contract, there is no "me," only a position that can be crossed out.\n\nThat was America in the first Cold War years. Outside was the strongest and richest nation in the world, television had just walked into every home, and rows of new houses were rising in the suburbs. But inside this prosperity, a group of people were being quietly crossed out.\n\nThis pass, you come to the lowest, least powerful square.\n\nI want you to feel one thing in your own body: to destroy a person, it turns out you do not need a prison at all. One list, one contract, one red line is enough. It works without a sound, legally, decently, and your life is simply gone.',
      },
      deliverGoal: 'N1 hook — 没名字给你 (恐惧排斥从不替伤害的人留名字/账本名单合同都没有我只有可被划掉的位置) + 冷战头几年美国 (外面最强最富/电视走进千家万户/郊区新房拔地而起) 可繁荣里一群人正被悄悄划掉 + 这一遍站最底没权力的格 + 亲身体会: 摧毁一个人不需要监狱一张名单一份合同一条红线就够 (不动声色合法体面而你人生就没了)',
      engagementHook: '账本上、名单上、合同上，都没有「我」,只有一个可以被划掉的位置。摧毁一个人，原来根本不需要监狱。这是一种什么样的可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-blacklisted-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁。我刻意把两个人，叠在了一起,因为在那个年代，恐惧和排斥，常常落在同一批最没有声音的人身上。\n\n第一个我:一个好莱坞编剧。我靠写本子吃饭，养活一家人。我年轻的时候，也许真去过一两次左翼读书会,那个年代，很多怀着理想的年轻人都去过，那并不稀奇。又也许，我其实什么都没干过，只是不巧，认识了某一个「错的人」。\n\n第二个我:一个黑人退伍军人，刚从二战的战场上活着回来。我为这个国家扛过枪、流过血。法律白纸黑字地告诉我，GI Bill（军人复员法案）给「所有」退伍军人上大学、买房子的钱。我攥着这份「人人平等」的承诺，满心欢喜地回到了家。\n\n我们俩，一个手里握着才华，一个手里握着一纸庄严的承诺。我们都以为，自己稳稳当当地，站在了「美国梦」的里面。\n\n我们都还不知道:有一种力量，正准备把我们俩，从这个梦里，悄悄地划掉。',
        en: 'First, who I am. I deliberately stack two people together, because in that era, fear and exclusion often fell on the same most voiceless people.\n\nThe first me: a Hollywood screenwriter. I make my living writing scripts, supporting a family. When I was young, maybe I really did go to a left-wing reading group once or twice, as many idealistic young people of that age did. Or maybe I did nothing at all, only knew "the wrong person."\n\nThe second me: a Black veteran, just home from the battlefields of World War II. I fought and bled for this country. The law tells me, in black and white, that the GI Bill gives "all" veterans money for college and homes. I came home clutching that promise of "equality."\n\nThe two of us: one holding talent, the other holding a sheet of promise. We both thought we stood firmly inside the "American Dream."\n\nNeither of us yet knew that a force was preparing to quietly cross us out of that dream.',
      },
      deliverGoal: 'N2 setup — 我是谁刻意把两人叠一起 (恐惧排斥常落在同一批最没声音的人身上) + 第一个我好莱坞编剧 (靠写本子养家/年轻时也许去过一两次左翼读书会很多有理想年轻人都去过/也许什么没干只认识错的人) + 第二个我黑人退伍军人 (二战回来为国打仗流血/GI Bill 给所有退伍军人上学买房钱/攥着人人平等承诺回家) + 一个握才华一个握一纸承诺都以为稳稳站在美国梦里 + 都不知道有种力量准备把我们悄悄划掉',
      engagementHook: '一个握着才华，一个握着一纸「人人平等」的承诺,我们都以为自己稳稳站在「美国梦」里面。你能想到，是什么力量正准备把我们悄悄划掉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-blacklisted-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂后来发生在我身上的事，你得先看清那台正对着我转动的机器。\n\n它不需要法庭，不需要判决。它只需要,怀疑。\n\n1947 年起，联邦搞了一个忠诚审查计划，三百多万雇员，被一个一个地查过去。一个人不需要犯下任何罪，只要被怀疑「不忠诚」、跟某个「颠覆性组织」有过牵连，就可能丢掉饭碗。而且最狠的一点:举证责任是反过来的,得你自己，去证明自己清白。可你倒是告诉我,你怎么证明「我心里从没想过要推翻政府」？\n\n而对我们黑人退伍军人，是另一台机器,它更老，更安静，也更狠。它根本不问你的政治立场，它只看你一样东西:你的肤色。银行有一套叫 redlining（红线政策）的做法,在地图上，把黑人住的区域，圈成一片红色。红圈里的人，房贷，一律不批。\n\n一台机器查你「忠不忠」，一台机器看你「白不白」。而我，恰好同时，站在这两台机器的射程里。',
        en: 'To understand what later happened to me, you must first see the machine turning toward me.\n\nIt needs no court, no verdict. It needs only suspicion.\n\nFrom 1947, the federal Loyalty Program checked more than three million workers, one by one. A person did not have to commit any crime; just being suspected of being "disloyal" or tied to a "subversive group" could cost a job. And the cruelest part: the burden was flipped, you had to prove your own innocence, but how do you prove "I never thought of overthrowing the government" in my heart?\n\nFor us Black veterans, there was another machine, older and quieter. It did not ask your politics; it only looked at your skin. Banks had a practice called redlining: on the map they circled the neighborhoods where Black people lived in red, and inside the red circle, every home loan was refused.\n\nOne machine checked whether you were "loyal," one machine looked at whether you were "white." I happened to stand in the range of both at once.',
      },
      deliverGoal: 'N3 setup — 看清对着我转的机器 + 不需法庭判决只需怀疑 + 1947 起忠诚审查计划 (300万+雇员一个个查/不需犯罪只要被怀疑不忠诚就丢饭碗/最狠举证责任反转自证清白/怎么证明我心里没想过推翻政府) + 对黑人退伍军人是另一台机器更老更安静 (不问政治立场只看肤色/银行 redlining: 地图把黑人住区圈红/红圈里房贷一律不批) + 一台查忠不忠一台看白不白 + 我恰好同时站两台机器射程里',
      engagementHook: '一台机器查你「忠不忠」,而要你证明「我心里没想过推翻政府」；一台机器看你「白不白」,在地图上把你家圈成红色。我恰好同时站在两台机器的射程里。这两种「划掉」，哪一种更让你绝望？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-blacklisted-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n第一个你,编剧的你,收到一张传票，要你去 HUAC 听证会上作证。灯光直直打在你脸上，全国的记者都看着你，那个坐在长桌后面的调查员，俯身问出了那个无解的问题：「你现在是、或曾经是共产党员吗？」\n\n你脑子里轰的一下。你瞬间想清楚了,这个问题，你怎么答，都输。\n\n承认,你完了，明天就上黑名单。否认,万一他们翻出你年轻时那一次读书会，就告你伪证罪，能送你进监狱。你说「我有第五修正案，我有权不自证其罪」,可你心里清楚，明天报纸的标题，就会是「Fifth Amendment Communist」（用第五修正案的共产党）。你的沉默，反过来会被当成你有罪的铁证。\n\n你坐在那把椅子上，第一次那么真切地懂了:这根本不是一场寻找真相的审问。这是一台机器。它要的从来不是一个答案,它要的，是你这个人，从今往后，再也站不起来。\n\n你会怎么答这一问？',
        en: 'Now you are me.\n\nThe first you, the screenwriter, receives a subpoena to testify at a HUAC hearing. The lights are on your face, the nation\'s reporters watching, and the investigator asks the no-win question: "Are you now, or have you ever been, a member of the Communist Party?"\n\nSomething goes off in your head. You see it clearly: this question, every answer loses.\n\nAdmit it, and you are finished. Deny it, and if they dig up that reading group from your youth, they charge you with perjury. Say "I have the Fifth Amendment, the right not to incriminate myself," and you know tomorrow\'s headline will be "Fifth Amendment Communist," and your silence will be taken as iron proof of your guilt.\n\nSitting in that chair, you understand clearly for the first time: this is not an interrogation searching for the truth. This is a machine, and what it wants is not an answer. What it wants is you, the person, never to stand up again.\n\nHow will you answer this one question?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 编剧的你收传票去 HUAC 作证 (灯光打脸全国记者看/调查员问无解问题「你现在是或曾经是共产党员吗」) + 脑子轰一下怎么答都输 (承认完/否认翻出读书会告伪证/援引第五修正案明天报纸 Fifth Amendment Communist 沉默当有罪铁证) + 第一次真切懂: 不是寻找真相的审问是一台机器要的不是答案是你这个人从此再也站不起来 + 你会怎么答',
      engagementHook: '坐在那把椅子上你才真切懂了：这不是一场寻找真相的审问。这台机器要的不是答案，是要你这个人，从此再也站不起来。这一问，你会怎么答？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-blacklisted-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我答完了那个问题。然后我发现，答什么，其实都一样。\n\n几周后，我的名字，出现在了一份黑名单上。\n\n没有审判，没有法官，没有判决书。只是有那么一份名单,在制片厂之间悄悄传，谁的名字在上面，谁就不再有人敢用。\n\n变化是从一些很小的事开始的。电话不再响了。一个合作多年的制片人，在街上看见我，眼神躲开，匆匆走过。朋友开始不接我的电话。我递出去的剧本，石沉大海。\n\n我没被判任何罪。我是清白的,在法律意义上，我什么事都没有。可我，失去了谋生的能力。\n\n这就是黑名单最可怕的地方:它不把你关进监狱。它只是让全世界，假装你不存在。像好莱坞十君子那样硬抗的，进了真监狱；像 Dalton Trumbo 那样的，多年只能躲起来，用一个假名字偷偷写剧本,因为他的真名，已经被划掉了。',
        en: 'I answered that question. Then I found that what you answer does not really matter.\n\nA few weeks later, my name appeared on a blacklist.\n\nNo trial, no judge, no verdict. Just that list, passed quietly between the studios, and whoever\'s name was on it, no one dared to hire.\n\nThe change began with small things. The phone stopped ringing. A producer I had worked with for years saw me on the street, looked away, and hurried past. Friends stopped taking my calls. The scripts I sent out vanished like stones into the sea.\n\nI was convicted of no crime. I was innocent, in the legal sense, nothing was wrong with me. Yet I lost the ability to earn a living.\n\nThis is the most frightening thing about the blacklist: it does not put you in prison. It only makes the whole world pretend you do not exist. Those who fought hard, like the Hollywood Ten, went to a real prison; those like Dalton Trumbo could only hide for years, writing scripts in secret under a fake name, because his real name had already been crossed out.',
      },
      deliverGoal: 'N5 story — 答完发现答什么都一样 + 几周后名字出现在黑名单上 (没审判没法官没判决书/名单在制片厂间悄悄传谁在上面没人敢用) + 变化从小事开始 (电话不响/合作多年制片人街上躲眼神/朋友不接电话/递出剧本石沉大海) + 没被判任何罪我清白法律上什么事没有可失去谋生能力 + 黑名单最可怕: 不关你进监狱只让全世界假装你不存在 + 好莱坞十君子硬抗进真监狱 / Dalton Trumbo 多年躲起来用假名偷偷写 (真名已被划掉)',
      engagementHook: '我没被判任何罪，我是清白的,可我失去了谋生的能力。黑名单不把你关进监狱，它只是让全世界假装你不存在。被全世界「假装看不见」，和被关进监狱，哪个更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-blacklisted-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '换第二个我,黑人退伍军人的我，再走一遍这条「被划掉」的路。\n\n我也有过我的客厅电视的时刻,可那块屏幕，对我是另一种滋味。\n\n1954 年那场全国直播的听证会，我也在看。我看着那些白人为「自由会不会被恐惧吃掉」吵得脸红脖子粗。我心里却堵着一句他们想都没想过的话:你们在为「自由」吵架，可我连一套属于自己的房子，都还买不到。\n\n（史料没有逐字记下那一刻我在想什么,这句话是替我把心里没说出口的声音说出来；但坐在我这个位置，你大概猜得到。）\n\n白人退伍军人凭 GI Bill，开着新车搬进 Levittown 崭新的独栋房。我攥着同一份 GI Bill 去银行、去 Levittown,门，在我面前关上了。购房合同上白纸黑字：「不得售予白种人以外的人」。\n\n同一台电视，他们看见的是一个时代的良心在回归。我看见的是,这份繁荣，从一开始就没打算分我一杯羹。',
        en: 'Switch to the second me, the Black veteran, and walk this road of "being crossed out" once more.\n\nI too had my living-room television moment, but that screen tasted different to me.\n\nThat 1954 nationally broadcast hearing, I watched it too. I watched white people argue, red in the face, over whether "freedom would be eaten by fear." But a sentence they had never even thought of was stuck in my chest: you argue over "freedom," yet I cannot even buy a house of my own.\n\n(The record does not say, word for word, what I was thinking that moment. These words give that silent thought a voice; but in my place, you can guess.)\n\nWhite veterans, on the GI Bill, drove new cars into brand-new houses in Levittown. I took the same GI Bill to the bank, to Levittown, and the door closed in my face. The home contract said, in black and white: "shall not be sold to anyone other than the Caucasian race."\n\nThe same television: they saw an age\'s conscience returning. I saw that this prosperity, from the very start, never meant to leave a share for me.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 换第二个我黑人退伍军人再走一遍被划掉的路 + 客厅电视从他角度 (那块屏幕对我另一种滋味) + 1954 全国直播听证会我也在看 (看白人为自由会不会被恐惧吃掉吵脸红脖子粗/心里堵句他们没想过的话: 你们为自由吵架可我连一套属于自己的房子都买不到) + anti-fab 括号 (lens 让你听见我心里的声音/史料不逐字记我想什么) + 白人凭 GI Bill 开新车搬进 Levittown 独栋/我攥同一份 GI Bill 去银行去 Levittown 门关上 (合同写不得售予白种人以外的人) + 同一台电视他们看见时代良心回归我看见繁荣从一开始没打算分我一杯羹。只碰电视从他角度不揭另两视角',
      engagementHook: '同一台电视，他们看见的是一个时代的良心在回归。我看见的是：这份繁荣，从一开始就没打算分我一杯羹。同一件事，为什么落在不同的人眼里，意思能完全相反？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-blacklisted-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得让你看清一件事:毁掉我的，从来不是某一个恶魔。\n\n这，是这一整课里最难、也最该想清楚的地方。\n\n那个在听证会上问我话的调查员，他不觉得自己是坏人,他打心底觉得，自己在保卫国家。那个拒绝把房子卖给我的房产经纪，他也不觉得自己在作恶,他只是「按规矩办事」，合同就是那么写的。那个把我家圈进红线里的银行职员，他甚至可能态度很客气,他只是在执行一份「再正常不过」的风险评估而已。\n\n你发现了吗？没有任何一个人，觉得自己是在害我。他们每一个人，都只是这台庞大机器上，一颗「正常」「合法」「为了国家好」的小齿轮。\n\n而这，才是最让人窒息的地方:迫害我的，不是一张狰狞的、可以指着骂的脸。而是一整套自认为天经地义的制度,它由成千上万个自觉清白、甚至自觉善良的普通人，心安理得地，一起转动着。\n\n我能恨谁呢？我找遍了，也找不到那一个该恨的人。',
        en: 'I have to make you see clearly: what destroyed me was never one single demon.\n\nThis is the hardest and most important thing to think through in this lesson.\n\nThe investigator who questioned me at the hearing did not feel he was a bad man; he felt he was protecting the country. The real-estate agent who refused to sell me a house did not feel he was doing evil; he was just "going by the rules," the contract said so. The bank clerk who circled my home inside the red line might even have been very polite; he was just carrying out a "normal" risk assessment.\n\nDo you see it? No one felt he was harming me. Every one of them was only a small "normal," "legal," "good for the country" gear on this great machine.\n\nThis is the most suffocating part: what persecuted me was not one snarling face. It was a whole system that thought of itself as natural and right, turned together by thousands of ordinary people who felt clean, even kind.\n\nWhom do I hate? I cannot find the person I am supposed to hate.',
      },
      deliverGoal: 'N7 story — 毁掉我的从来不是某一个恶魔 (这课最难也最该想清楚的) + 听证会问我话的调查员不觉得坏觉得在保卫国家 + 拒绝卖房的房产经纪不觉得作恶只是按规矩办事合同就那么写 + 把我家圈进红线的银行职员甚至很客气只是执行正常风险评估 + 没有人觉得自己在害我每个人只是大机器上一颗正常合法为国家好的小齿轮 + 最窒息: 迫害我的不是狰狞的脸是一整套自认天经地义的制度由成千上万自觉清白甚至善良的普通人一起转动 + 我恨谁呢找不到那个该恨的人',
      engagementHook: '没有一个人觉得自己在害我,他们都只是「按规矩办事」的普通人。迫害我的，不是一张狰狞的脸，是一整套由成千上万个自觉清白的人一起转动的制度。我找不到那个该恨的人,你帮我找找，该恨谁？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-blacklisted-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1954 年，麦卡锡当众垮了。报纸上一片欢呼，街头巷尾都在议论，好像一场噩梦，到头了。\n\n可我想诚实地告诉你:对我，噩梦并没有跟着他一起结束。\n\n那个最嚣张的人是倒了，但那一份份黑名单，还安静地躺在制片厂的抽屉里。我的电话，没有因为他的倒台，突然又响起来。那些当初躲着我走的朋友，也没有突然回来敲我的门。我已经丢掉的那几年时光、那份名誉、那些本来能活下去的机会,谁也，还不了我。\n\n至于第二个我，那个黑人退伍军人,我的处境，跟麦卡锡的兴衰，几乎毫无关系。红线还画在地图上，合同里「只售白人」那行字，一个标点都没改。我那个白人老战友的房子，这些年已经悄悄升了值，成了他传给孩子的家底,而我，连进场的资格，都从来没有过。\n\n你看，一个煽动者倒下，是很解气。但真正深的那道伤，是那些不靠某一个坏人、而是靠一整套「正常」制度造成的伤,它们，不会随着一个人的倒台，就自己愈合。',
        en: 'In 1954, McCarthy collapsed in public. The newspapers cheered, as if the nightmare were over.\n\nBut I want to tell you honestly: for me, the nightmare did not end with him.\n\nThe most brazen man fell, but that blacklist still hung in the studios\' drawers. My phone did not suddenly ring again with his fall. The friends who had avoided me did not suddenly come back. The years I had already lost, the reputation, the chances to go on living, no one could give them back to me.\n\nAs for the second me, the Black veteran, my situation had almost nothing to do with McCarthy\'s rise and fall. The red line was still on the map; the "whites only" line was still in the contract. My white war buddy\'s house had quietly gained value over these years, while I had never even had the right to enter the field.\n\nYou see, a demagogue falling feels good. But the deepest wounds are the ones caused not by one bad man, but by a whole "normal" system, and they do not heal on their own when one man falls.',
      },
      deliverGoal: 'N8 story (诚实降级) — 1954 麦卡锡当众垮报纸欢呼好像噩梦结束 + 诚实: 对我噩梦没跟他一起结束 + 最嚣张的人倒但黑名单还挂在制片厂抽屉/电话没因他倒台突然响/躲开的朋友没突然回来/丢掉的那几年名誉活下去的机会谁也还不了 + 第二个我黑人退伍军人处境跟麦卡锡兴衰几乎毫无关系 (红线还在/合同只售白人还在/白人战友房子悄悄升值我连进场资格都没有过) + 一个煽动者倒下很解气但真正深的伤是不靠某个坏人靠整套正常制度造成的伤不会随一个人倒台自己愈合',
      engagementHook: '那个最嚣张的人倒了，报纸一片欢呼,可我的电话，没有因为他的倒台，突然又响起来。一个坏人倒下很解气，但那些靠整套「正常」制度造成的伤，会随他一起愈合吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-blacklisted-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图,一张关于「我是谁」的地图。\n\n那条挡住我的红线，那句「只售白人」，并不是冷战凭空发明的。它是一条很长很长的链子上的一环。\n\n（多说一句：1948 年，最高法院在 Shelley v. Kraemer 案里判，合同里「只售白人」这种种族条款，法院不可以强制执行。可你别高兴太早,银行那条 redlining 红线还在地图上画着，系统性地不给黑人社区放贷,法律变了，把人挡在外面的机制，照样没停。）\n\n这个国家，一次又一次，把「外部的威胁」投射到「内部的某个群体」身上,然后用法律，把他们标记出来。冷战时，被标记的是「疑似共产党人」。可早在 1882 年，被标记的，是华人,那年通过的 Chinese Exclusion Act（排华法案），是美国史上第一部专门针对某一特定族群、限制其移民的联邦法律。\n\n后来冷战里，因为中国成了二战盟友、日本拿排华法案做反美宣传，美国才在 1943 年废除排华,可同时，只给中国每年 105 个移民名额，一个羞辱性的数字。\n\n你看，无论被指认的「内部敌人」是华人，还是「疑似共产党人」,那套「把恐惧投射到一个群体身上、再用法律把他们划出来」的逻辑，是同一套。我读这段历史，读的其实也是我自己。',
        en: 'Let me step back and show you a larger map, a map about who I am.\n\nThat red line that blocked me, that "whites only" clause, was not invented by the Cold War out of nowhere. It was one link in a very, very long chain.\n\n(One more thing: in 1948, in Shelley v. Kraemer, the Supreme Court ruled that a court could not enforce racial clauses like "whites only" in a contract. But do not cheer too soon. The banks\' redlining was still drawn on the map, systematically denying loans to Black neighborhoods. The law changed, yet the machine that kept people out did not stop.)\n\nThis country, again and again, projected an "outside threat" onto "some group inside," and then used the law to mark them out. In the Cold War, the marked were "suspected communists." But back in 1882, the marked were the Chinese: that year\'s Chinese Exclusion Act was the first federal law in U.S. history to target a specific ethnic group and bar its immigration.\n\nLater in the Cold War, because China had become a WWII ally and Japan used the Exclusion Act in anti-American propaganda, the U.S. repealed exclusion in 1943, but at the same time gave China a quota of only 105 immigrants a year, a humiliating number.\n\nYou see, whether the named "inside enemy" was Chinese people or "suspected communists," the logic of "projecting fear onto a group and then using the law to cross them out" is the same. When I read this history, I am really reading myself.',
      },
      deliverGoal: 'N9 zoom-out + §8 桥一 (排华→麦卡锡同一机制) — 更大地图关于我是谁 + 挡我的红线/只售白人不是冷战凭空发明是很长链子上一环 + 1948 Shelley v. Kraemer 最高法院判种族契约法院不可强制执行但 redlining 红线还在系统性拒贷 (法律变了挡人机制没停, named case 强化 Continuity&Change) + 这国家一次次把外部威胁投射到内部某群体再用法律标记出来 (冷战被标记的是疑似共产党人) + 1882 Chinese Exclusion Act 排华法案 (美国史上第一部以族裔禁止移民的法律) + 冷战因中国成二战盟友日本拿排华做反美宣传美国 1943 废排华/同时只给中国每年 105 个名额羞辱性数字 + 无论内部敌人是华人还是疑似共产党人同一套逻辑 (把恐惧投射到群体再用法律划出来) + 我读这段历史读的其实也是我自己',
      engagementHook: '挡住我的那条红线、那句「只售白人」，是一条很长很长的链子上的一环。1882 年被标记的是华人，冷战时被标记的是「疑似共产党人」,同一套逻辑。我读这段历史，读的其实也是我自己。你呢，你在这条链子里看见了谁？',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-blacklisted-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一程，有一个真问题，等你来答。\n\n那台毁掉我的机器，立在一个真实的处境上:那个年代，确实有苏联间谍,Hiss、Rosenberg 案后来都证明了，渗透是真的。Julius 和 Ethel Rosenberg 被控把原子弹机密递给苏联，1953 年被送上电椅,他们是整个冷战里，唯一因间谍罪被处死的美国平民。\n\n问题就卡在这儿。\n\n一种说法：正因为威胁是真的，搜查和警惕就有它的道理。我这样的人被误伤，是一个国家在真危险面前，没法完全避免的代价。要是为了护着每一个我、放过了真间谍，丢的可能是更多人的命。\n\n另一种说法：恰恰是「威胁是真的」这句话，成了伤害无辜最好用的挡箭牌。真间谍是极少数，可为了抓他们，机器用名单、用连坐、用反用宪法，毁掉了成千上万从没被证明有罪的我。为抓几个真的，碾碎一大片无辜,这笔账，真的算得过来吗？\n\n这就是没有标准答案的「安全 vs. 自由」,到今天人们还在两边来回掂量。它不要你选边，要你看清:恐惧是在哪一步，从合理的警惕，滑向了碾碎无辜。\n\n两边都站得住。你怎么看？想 30 秒，写下来。',
        en: 'Having walked my course, there is a real question waiting for you.\n\nThe machine that destroyed me stood on a real situation: in that era, there really were Soviet spies, the Hiss and Rosenberg cases later proved the penetration was real. Julius and Ethel Rosenberg, accused of passing atomic-bomb secrets to the Soviets, were put in the electric chair in 1953, the only American civilians executed for spying in the whole Cold War.\n\nThis is exactly where it gets stuck.\n\nOne view: precisely because the threat was real, searching and watching had their reason. People like me being wrongly hurt was a cost a country cannot fully avoid before real danger. To shield every "me" and let real spies slip might cost even more lives.\n\nThe other view: it is precisely "the threat was real" that became the best shield for harming the innocent. Real spies were a tiny few, yet to catch them, the machine used lists, guilt by association, and the Constitution turned against people, destroying thousands of innocent "me" never proven guilty. To catch a few real ones, crush a whole field of innocents, does that account really balance?\n\nThis is the "security vs. liberty" with no settled answer, one people still weigh both sides of today. It does not ask you to pick a side; it asks you to see clearly at which step fear slid from reasonable caution into crushing the innocent.\n\nBoth sides stand. What do you think? Take thirty seconds, and write it down.',
      },
      deliverGoal: 'N10 synthesis — 真问题 + 毁掉我的机器立在真实处境 (那年代确实有苏联间谍 Hiss Rosenberg 证明渗透真的; Rosenberg 夫妇被控传原子弹机密 1953 电椅处死 = 冷战唯一因间谍罪被处死的美国平民, DBQ named evidence) + 卡在这儿 / 一种说法 (正因威胁真搜查警惕有道理/我被误伤是国家面对真危险没法完全避免的代价/护着每个我放过真间谍可能丢更多人命) / 另一种说法 (威胁是真成了伤害无辜最好用的挡箭牌/真间谍极少数为抓他们用名单连坐反用宪法毁成千上万没被证明有罪的我/为抓几个真的碾碎一大片无辜这笔账算得过来吗) + 无标准答案安全vs自由至今争论 (不要选边要看清恐惧在哪步从合理警惕滑向碾碎无辜) + 两边都站得住想30秒',
      engagementHook: '那个年代确实有苏联间谍,可为了抓极少数真的，机器碾碎了一大片像我这样从没被证明有罪的人。「威胁是真的」这句话，是为搜查正名，还是成了伤害无辜最好用的挡箭牌？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'cw-blacklisted-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一程,一个没有名字的人，一张抹掉我的名单，一条挡住我的红线，一份「人人平等」却没算上我的承诺。你会怎么评价这样一段人生？\n\n它是一个国家在害怕时，对自己内部「不可靠的人」做的事。它没动用监狱，却照样毁了我。这件事，你怎么称？\n\n但先记住：你这一遍，听的只是被划掉的人这一边。\n\n那个举着名单的调查员，会把这一切讲成「我在保卫国家」,他真觉得自己在作恶吗？那个只问了一句「你还有没有体面」的律师，会觉得自己救了像我这样的人吗,可他来得太晚，也没还给我那几年。换上他们的视角，你刚才下的判断，还站得住吗？\n\n这里还得提一句:就在我被划掉的同时，地球另一端，同期的新中国（1949 建国）也在用自己的方式，清查它眼中的「内部敌人」。两边差别极大，绝不能简单等同,但同一个问题，跨越了国界：一个社会害怕时，会怎样对待内部「不可靠的人」？\n\n最后留一个问题给今天的你:你身边，有没有一句「写在纸上对所有人都算数」、可落到某些人头上就不算数的话？那时候，你会装没看见，还是会替那个被划掉的人，说出来？',
        en: 'Having walked my course, a person with no name, a list that erased me, a red line that blocked me, a promise of "equality" that did not count me in. How would you judge a life like this?\n\nIt is what a country, when afraid, does to its own "unreliable" people inside. It used no prison, yet it ruined me all the same. How do you weigh this?\n\nBut first, remember: this pass, you heard only the side of the one crossed out.\n\nThe investigator holding the list would tell all this as "I was protecting the country," did he truly feel he was doing evil? The lawyer who asked only "have you no decency" might feel he saved people like me, but he came too late, and he did not give me back those years. Switch to their perspectives, and does the judgment you just made still hold?\n\nHere I must add: at the very time I was being crossed out, on the other side of the earth, the same-era new China (founded in 1949) was, in its own way, purging what it saw as "inside enemies." The two sides differed enormously and must never be simply equated, but the same question crossed borders: when a society is afraid, how does it treat its "unreliable" people inside?\n\nFinally, one last question for you today: in your own life, is there a sentence "written on paper to count for everyone" that stops counting once it lands on certain people? When that happens, will you look away, or will you, for the one being crossed out, speak up?',
      },
      deliverGoal: 'N11 close/meta + §8 桥二 — 评价这段人生 (没名字的人/抹掉我的名单/挡我的红线/人人平等却没算上我的承诺 → 国家害怕时对内部不可靠的人做的事/没动用监狱却照样毁了我怎么称) + MANDATORY 跨视角指针: ① 你只听被划掉的人这一边 ② 举名单调查员会讲成我在保卫国家 (真觉得作恶吗) + 律师会觉得救了我吗 (可来太晚没还我那几年) ③ 换视角判断还站得住吗 + §8 注入桥二: 同期新中国 (1949 建国) 用自己方式清查内部敌人 + 显式 Rule 0 (差别极大绝不能简单等同/同一问题跨越国界: 社会害怕时怎样对待内部不可靠的人) + transfer (今天身边写在纸上对所有人算数却对某些人不算数的话/你会装没看见还是替被划掉的人说出来)',
      engagementHook: '你这一遍，只听到了被划掉的人这一边。那个举名单的调查员、那个只问了一句话的律师，会把这一切讲成完全不同的样子。换个视角再走一遍,你刚才的判断，还站得住吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'investigator-actor':                 investigatorLens,
  'welch-mediator':                     welchLens,
  'blacklisted-target-receiving-end':   blacklistedLens,
};

// receiving-end 优先 (被划掉的人 = AP DBQ「安全 vs. 自由」必考受害方; 无名者承载恐惧侵蚀自由 + 繁荣排斥他者两条线; 取自 narrative frontmatter defaultLens)
export var defaultLens = 'blacklisted-target-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'cold-war-home-front-1950',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'investigator-actor': 30, 'welch-mediator': 28, 'blacklisted-target-receiving-end': 32 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    'APUSH CED 对齐 (P1#1 修正): 本课主体 (HUAC/忠诚审查/黑名单/Lavender Scare/间谍案) = Topic 8.3 The Red Scare; 郊区化那条线 (GI Bill/Levittown/redlining) = Topic 8.4 postwar economy & suburbanization; containment 对外维度见 8.2。原 frontmatter「8.4-8.6」不准, 应以 8.3 为主体',
    '3 lens / 11 nodes each / cross-lens micro-detail: 客厅里的电视 (三视角各触一次不点破): 调查员=放大恐惧的舞台 / Welch=全国当众的镜子 / 被划掉者(黑人退伍军人)=同一台电视他看见的是被排除',
    'defaultLens: blacklisted-target-receiving-end — 取自 narrative frontmatter; 安全vs自由受害方 (AP DBQ 必考) + 无名者刻意叠合「黑名单受害者」+「被 redlining 挡回的黑人退伍军人」两条线',
    'expectsRealAnswer: ONLY N10 (synthesis/reflection) + N11 (synthesis/closing) per lens = true (2 per lens, 6 total)',
    'Rule 0 高敏感: 全程「确有间谍 vs. 恐惧伤无辜」两面同体; 不替学生在「真威胁 vs. 假想敌」下结论; 任何一方不妖魔化/不浪漫化',
    'anti-fab: 合成桥接人物 (调查员/被划掉者) 在 lens.description + N1 显式标无名代表机器/刻意叠合; Wheeling 205/57 数字争议显式标 (investigator N4 括号); Levitt 名言走描述未排逐字; Welch 名言 EN content.en 为完整原话逐字 primary (含 Senator/sir/at long last/Have you left no sense of decency, 见 narrative §5D); CN content.cn 显式标「从英文原话译过来」, 非逐字 (welch N6)',
    '§8 双桥注入 synthesis: 桥一 (排华 1882→Magnuson 1943 105 名额→麦卡锡同一机制) 在 blacklisted N9; 桥二 (同期新中国 1949 镇反/三反/五反「恐惧政治」并置, 显式不排名不等同) 在 investigator N9 + welch N11 + blacklisted N11',
    'cross-Topic 锚: blacklisted N9 ↔ chinese-exclusion topic (排华史已上线, 同一机制双向呼应)',
    '三审已过 (Dr. Reed APUSH / 赵老师华裔 / Maria ESL): P0 全修 (n6 去掉「lens」一词露馅 / n10 去掉「AP 老师」时代错位, 三 lens 统一 in-voice); 合理 P1 全修 (考点 8.3/8.4 / Welch EN 完整原话+CN 标译自原话 / 好莱坞十君子第一 vs 第五修正案区分 / McCarran+Dennis+Rosenberg DBQ evidence 进正文 / Shelley v. Kraemer 1948+redlining 系统性主因 / investigator-n2 EN「建国」对齐 / investigator-n9 EN 补「我活着没去看」/ welch-n11「替他们说话」中性化 / ESL gloss subpoena/perjury/contempt/Fifth + EN run-on 拆句)',
  ],
};
