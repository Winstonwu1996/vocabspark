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

var SELLING_POINTS = [
  { icon: '🎭', cn: '同一段历史，走 3 遍不同视角', sub: '读同一件事，先当掌权者，再当夹在中间的人，再当被碾过去的人 —— 三种活法，看完你自己有判断。' },
  { icon: '💬', cn: 'AI 用你的世界陪你聊，不是讲课', sub: '从你熟的事起手，中英文都行，卡住了它换个说法。像比你大几岁的人陪你想，不是老师站讲台。' },
  { icon: '🧠', cn: '练的是「把想法说清楚」这件真本事', sub: '不是答对就完事 —— 它会追问「为什么」，帮你把一个看法撑成一段论证。写 essay、考 AP 真用得上。' },
  { icon: '📚', cn: '对着加州课纲 + AP 设计', sub: '51 门课，从古代文明一路到美国史和近现代世界。学校学到哪，这里能接上。' },
  { icon: '🀄', cn: '中国孩子的历史底子是优势', sub: '你熟的唐宋、家国天下，这里当「主场知识」—— 用它当锚点去理解世界历史，两边对照着学。' },
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

  var goTopic = function(topicId) {
    if (!topicId) return;
    router.push('/history/' + encodeURIComponent(topicId));
  };

  return (
    <>
      <Head>
        <title>历史 · 从不同人的眼睛看同一件事 | Know U. Learning</title>
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
          {/* ── 卖点 Hero ── */}
          <div style={{
            marginTop: 16, marginBottom: 18,
            padding: "22px 20px",
            background: HC.parchmentHi,
            border: "1px solid " + HC.parchmentLo,
            borderRadius: 18,
          }}>
            <h1 style={{
              margin: "0 0 8px", fontFamily: FONT_DISPLAY,
              fontSize: 23, lineHeight: 1.3, color: HC.ink,
            }}>
              历史不是背年代<span style={{color: HC.accent}}> —— </span>是从不同人的眼睛，看同一件事
            </h1>
            <p style={{margin: "0 0 16px", fontSize: 13.5, color: HC.text, opacity: 0.85, lineHeight: 1.6}}>
              History isn't memorizing dates — it's seeing one event through different people's eyes.
            </p>

            <div style={{display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"}}>
              {SELLING_POINTS.map(function(p, i) {
                return (
                  <div key={i} style={{
                    display: "flex", gap: 10,
                    padding: "11px 13px",
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

            <div style={{
              marginTop: 14, fontSize: 12, color: HC.textSec, opacity: 0.85,
            }}>
              👇 选一段历史开始。点任意一门课，第一次进会先花 30 秒认识你（用来让 AI 叫对你的名字，只存这台设备上）。
            </div>
          </div>

          {/* ── 选课：51 门通史脉络 ── */}
          <CourseBrowser onSwitch={goTopic} />
        </div>
      </div>
    </>
  );
}
