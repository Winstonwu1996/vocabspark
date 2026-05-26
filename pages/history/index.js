// ─── 历史模块首页（门面）──────────────────────────────────────────
// 三段式 IA 的第一段：卖点说明 + 选课。点一门课 → /history/<topicId> 单课学习页。
// 首次画像设置在进入单课页时由播放器处理（ProfileSetup），首页不重复 gate。
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BrandNavBar } from '../../components/BrandNavBar';
import { FONT, FONT_DISPLAY, globalCSS } from '../../lib/theme';
import { HC } from '../../components/history-engine/theme';
import { CourseBrowser } from '../../components/history-engine/CourseBrowser';
import { findViewIdByTopicId } from '../../lib/atlas-views';

// 6 张卖点卡。顺序按「中国家长付费决策」排：① 学校对得上 ② 三视角 ③ 中国底子 ④ 地图 ⑤ 双语+发音 ⑥ 史料考证。
// 措辞硬规则（升学规划专家 + 历史老师双 Agent 一致建议）：
// · 不出现「应试焦虑」「完美适配中国孩子」「最难」这类引战/绝对化措辞
// · 不上 HSS code 字符串（如 7.6.5）到 Hero —— 那是课详情页的信任凭证，不是首屏钩子
// · 不打包票拿 A —— 诚实声明放 Hero 小字
var SELLING_POINTS = [
  {
    icon: '📚',
    cn: '学校学到哪，这里对得上',
    sub: '51 节课对照加州 G5-G8 课纲 + AP World / APUSH，每节课自带课程笔记 + 课后掌握检测，下周单元测要考的那一章，这里能接上。',
  },
  {
    icon: '🎭',
    cn: '同一段历史，3 个真实视角讲一遍',
    sub: '掌权者怎么想、夹在中间的人怎么活、被碾过去的人怎么说 —— 三种立场各自讲完，观点不是给的，是从对照里自己长出来的。写 essay、答 DBQ 直接能用。',
  },
  {
    icon: '🀄',
    cn: '中文底子是主场，不是包袱',
    sub: '讲法国大革命对着戊戌变法看，讲冷战让你说说家里听过的版本 —— 两边视角同时在，反而比美国本地孩子学得透。',
  },
  {
    icon: '🗺',
    cn: '先看地图再听人讲',
    sub: '配套 Atlas Lab 历史地图系统：从君士坦丁堡到伊斯坦布尔、汉朝同时代的罗马在哪里，因果关系画在地图上，看完一眼记得住。',
  },
  {
    icon: '🔤',
    cn: '中英文随时切，考点单词金色高亮',
    sub: '想用中文听就中文，想练英文就切英文。AI 说话里的考点词点一下看 IPA + 真人发音，AP 阅读题里要认得的那些词，一边听一边记。',
  },
  {
    icon: '📜',
    cn: '每句话都查得到出处',
    sub: '故事严格基于真实史料 + Fact Ledger 校验：「Et tu, Brute」「让他们吃蛋糕」这种以讹传讹的引文，我们会标明白「这是后人加的，不当真话讲」。',
  },
];

export default function HistoryHome() {
  var router = useRouter();

  // 向后兼容：旧直链 /history?topicId=X（Gate-3 smoke / 文档 / 书签）→ 重定向到 /history/X
  useEffect(function() {
    if (typeof window === "undefined") return;
    try {
      var p = new URLSearchParams(window.location.search);
      var legacy = p.get("topicId");
      if (legacy) {
        var rest = [];
        p.forEach(function(v, k) { if (k !== "topicId") rest.push(encodeURIComponent(k) + "=" + encodeURIComponent(v)); });
        var qs = rest.length ? "?" + rest.join("&") : "";
        router.replace("/history/" + encodeURIComponent(legacy) + qs);
      }
    } catch (e) {}
  }, []);

  // 选课流程：首页 → 对应 Atlas (地图预热 + 人物 + 因果) → 「深度学」嵌入式进对话。
  // 11 门暂无 Atlas 视图的课(秦统一/重建/排华/镀金/进步/妇女选举/大萧条/建国党争/瓜分非洲/去殖民化/contemporary-US)
  // fallback 直接进 /history/<id> 学习,等 Atlas view 建好后自动走主路径。
  var goTopic = function(topicId) {
    if (!topicId) return;
    var viewId = findViewIdByTopicId(topicId);
    if (viewId) {
      router.push('/atlas-lab/' + viewId);
    } else {
      router.push('/history/' + encodeURIComponent(topicId));
    }
  };

  return (
    <>
      <Head>
        <title>历史 · 三个视角看同一件事 | Know U. Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />
      <style dangerouslySetInnerHTML={{ __html: `
        body { background: ${HC.bg}; }
        .h-page { min-height: 100vh; background: ${HC.bg}; font-family: ${FONT}; }
        .h-container { max-width: 920px; margin: 0 auto; padding: 0 12px 80px; }
        @media (min-width: 640px) { .h-container { padding: 0 20px 80px; } }
      ` }} />

      <div className="h-page">
        <BrandNavBar
          activeTab="history"
          stats={{ xp: 0, total: 0, correct: 0 }}
          user={null}
          onUserCenterClick={function() {}}
        />

        <div className="h-container">
          {/* ── 卖点 Hero (A+B 合并:成绩单痛点 + 新移民妈妈共情 + 解法) ── */}
          <div style={{
            marginTop: 16, marginBottom: 18,
            padding: "24px 22px",
            background: HC.parchmentHi,
            border: "1px solid " + HC.parchmentLo,
            borderRadius: 18,
          }}>
            <h1 style={{
              margin: "0 0 10px", fontFamily: FONT_DISPLAY,
              fontSize: 24, lineHeight: 1.3, color: HC.ink,
            }}>
              她在国内能把唐宋背得倒背如流，<br/>到这边历史课只能拿 B-。
            </h1>
            <p style={{
              margin: "0 0 6px", fontSize: 14, color: HC.text, lineHeight: 1.65,
            }}>
              不是她不努力 —— 是 essay 要的「为什么」「谁吃亏」「你怎么看」，
              <br/>国内的历史课里没人这样问过她。
            </p>
            <p style={{
              margin: "0 0 18px", fontSize: 13.5, color: HC.text, opacity: 0.85, lineHeight: 1.6,
            }}>
              我们把每段历史拆成 3 个人的视角，从看懂到说得清，
              <br/>直到她能写出一段经得起追问的论证。
            </p>

            <div style={{display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"}}>
              {SELLING_POINTS.map(function(p, i) {
                return (
                  <div key={i} style={{
                    display: "flex", gap: 10,
                    padding: "12px 14px",
                    background: HC.card,
                    border: "1px solid " + HC.border,
                    borderRadius: 12,
                    lineHeight: 1.5,
                  }}>
                    <span style={{fontSize: 22, lineHeight: 1.1}}>{p.icon}</span>
                    <div style={{flex: 1, minWidth: 0}}>
                      <div style={{fontWeight: 700, color: HC.ink, fontSize: 13.5, marginBottom: 3}}>{p.cn}</div>
                      <div style={{fontSize: 11.5, color: HC.text, opacity: 0.82}}>{p.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 诚实声明（升学规划专家强烈建议）：不打包票拿 A，否则长期口碑反噬 */}
            <div style={{
              marginTop: 14,
              padding: "8px 12px",
              background: "rgba(0,0,0,0.03)",
              borderRadius: 8,
              fontSize: 11.5, color: HC.textSec, opacity: 0.9, lineHeight: 1.5,
              fontStyle: "italic",
            }}>
              我们不打包票拿 A —— 我们让她从「背得出」变成「说得清」。分数是副产品，不是承诺。
            </div>

            <div style={{
              marginTop: 14, fontSize: 12, color: HC.textSec, opacity: 0.85,
              display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8,
            }}>
              <span>👇 选一段历史开始。第一次进会先花 30 秒认识你（只存这台设备上）。</span>
              <a href="/atlas-lab" style={{
                flex: "0 0 auto",
                padding: "6px 12px",
                background: HC.card, border: "1px solid " + HC.border, borderRadius: 999,
                fontSize: 12, fontWeight: 600, color: HC.accent, textDecoration: "none",
                whiteSpace: "nowrap",
              }}>🗺 想先看地图？进入 Atlas Lab →</a>
            </div>
          </div>

          {/* ── 选课：51 门，支持「按年级 / AP / 脉络」三种 Mode 切换 ── */}
          <CourseBrowser onSwitch={goTopic} />
        </div>
      </div>
    </>
  );
}
