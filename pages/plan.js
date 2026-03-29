import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { C, FONT, globalCSS, S } from '../lib/theme';
import { BrandNavBar, BrandSparkIcon } from '../components/BrandNavBar';

/* ═══════════════════════════════════════════════════════
   Plan — Know U. Learning \u4f1a\u5458\u65b9\u6848
   ═══════════════════════════════════════════════════════ */

var PLANS = [
  {
    key: "free",
    name: "\u514d\u8d39\u4f53\u9a8c",
    nameEn: "Free",
    price: null,
    priceLabel: "\u514d\u8d39",
    desc: "\u6bcf\u5929\u514d\u8d39\u4f53\u9a8c AI \u79c1\u6559\u7684\u6548\u679c",
    features: [
      { text: "Vocab\uff1a\u6e38\u5ba2\u6bcf\u65e5 5 \u8bcd\uff0c\u6ce8\u518c\u540e 10 \u8bcd", included: true },
      { text: "Writing\uff1a\u67e5\u770b Dashboard + \u80fd\u529b\u6d4b\u8bc4", included: true },
      { text: "\u6ce8\u518c\u540e\uff1a\u4e91\u540c\u6b65 + \u5b66\u4e60\u5386\u53f2", included: true },
      { text: "\u6ce8\u518c\u540e\uff1a\u6bcf\u5468 2 \u7bc7\u5199\u4f5c\u7ec3\u4e60", included: true },
      { text: "\u6bcf\u5929 1 \u5c0f\u65f6\u6b63\u5f0f\u5b66\u4e60", included: false },
      { text: "\u65e0\u9650\u5b66\u4e60\u65f6\u95f4", included: false },
    ],
    color: C.teal,
    bg: C.tealLight,
    cta: "\u514d\u8d39\u6ce8\u518c",
    popular: false,
  },
  {
    key: "basic",
    name: "Basic \u79c1\u6559\u8bfe",
    nameEn: "Basic",
    price: { monthly: 20, yearly: 192, monthlyBYO: 10, yearlyBYO: 96 },
    priceLabel: "$20/\u6708",
    desc: "\u6bcf\u5929 1 \u5c0f\u65f6 AI \u79c1\u6559\u8bfe\uff0c\u8986\u76d6\u8bcd\u6c47 + \u5199\u4f5c",
    features: [
      { text: "Vocab\uff1a\u5168\u90e8\u529f\u80fd\u65e0\u9650\u5236", included: true },
      { text: "Writing\uff1a\u5168\u90e8\u529f\u80fd\u65e0\u9650\u5236", included: true },
      { text: "\u6bcf\u5929 1 \u5c0f\u65f6\u6b63\u5f0f\u5b66\u4e60\u65f6\u95f4", included: true },
      { text: "\u4e91\u540c\u6b65 + \u5b66\u4e60\u5386\u53f2 + \u6210\u957f\u62a5\u544a", included: true },
      { text: "AI \u79c1\u6559\u8d8a\u5b66\u8d8a\u61c2\u4f60\uff08\u4e2a\u6027\u5316\u753b\u50cf\uff09", included: true },
      { text: "\u65e0\u9650\u5b66\u4e60\u65f6\u95f4", included: false },
    ],
    color: C.accent,
    bg: C.accentLight,
    cta: "\u5f00\u59cb Basic \u79c1\u6559\u8bfe",
    popular: true,
  },
  {
    key: "pro",
    name: "Pro \u65e0\u9650\u79c1\u6559",
    nameEn: "Pro",
    price: { monthly: 50, yearly: 480, monthlyBYO: 25, yearlyBYO: 240 },
    priceLabel: "$50/\u6708",
    desc: "\u65e0\u9650\u5b66\u4e60\u65f6\u95f4\uff0c\u6700\u5927\u5316 AI \u79c1\u6559\u4ef7\u503c",
    features: [
      { text: "Vocab\uff1a\u5168\u90e8\u529f\u80fd\u65e0\u9650\u5236", included: true },
      { text: "Writing\uff1a\u5168\u90e8\u529f\u80fd\u65e0\u9650\u5236", included: true },
      { text: "\u65e0\u9650\u5b66\u4e60\u65f6\u95f4\uff0c\u4e0d\u9650\u5236\u6bcf\u65e5\u65f6\u957f", included: true },
      { text: "\u4e91\u540c\u6b65 + \u5b66\u4e60\u5386\u53f2 + \u6210\u957f\u62a5\u544a", included: true },
      { text: "AI \u79c1\u6559\u8d8a\u5b66\u8d8a\u61c2\u4f60\uff08\u4e2a\u6027\u5316\u753b\u50cf\uff09", included: true },
      { text: "\u4f18\u5148\u4f53\u9a8c\u65b0\u529f\u80fd", included: true },
    ],
    color: C.purple,
    bg: C.purpleLight,
    cta: "\u5f00\u59cb Pro \u79c1\u6559\u8bfe",
    popular: false,
  },
];

var FAQ = [
  { q: "\u4e0e\u771f\u4eba\u79c1\u6559\u76f8\u6bd4\uff0cKnow U. \u6709\u4ec0\u4e48\u4f18\u52bf\uff1f",
    a: "\u771f\u4eba\u79c1\u6559\u6bcf\u5c0f\u65f6 $50+\uff0c\u6bcf\u5468\u89c1\u4e00\u6b21\uff0c\u65e0\u6cd5\u6301\u7eed\u8ffd\u8e2a\u4f60\u7684\u6bcf\u4e00\u6b65\u8fdb\u6b65\u3002Know U. \u7684 AI \u79c1\u6559 24/7 \u5728\u7ebf\uff0c\u7528\u6570\u636e\u9a71\u52a8\u7684\u4e2a\u6027\u5316\u753b\u50cf\u8d8a\u5b66\u8d8a\u61c2\u4f60\uff0c\u800c\u4ef7\u683c\u4e0d\u5230\u79c1\u6559\u4e00\u8282\u8bfe\u7684\u94b1\u3002" },
  { q: "\u201c\u6bcf\u5929 1 \u5c0f\u65f6\u201d\u662f\u600e\u4e48\u8ba1\u65f6\u7684\uff1f",
    a: "\u53ea\u6709\u5f53\u4f60\u5728\u79ef\u6781\u5b66\u4e60\u65f6\u624d\u8ba1\u65f6\uff08\u70b9\u51fb\u3001\u6253\u5b57\u3001\u6ed1\u52a8\u7b49\u64cd\u4f5c\uff09\u3002\u6d4f\u89c8\u9996\u9875\u3001\u67e5\u770b\u8bbe\u7f6e\u4e0d\u8ba1\u65f6\u3002\u5982\u679c\u4f60\u79bb\u5f00\u8d85\u8fc7 60 \u79d2\u6ca1\u6709\u64cd\u4f5c\uff0c\u8ba1\u65f6\u81ea\u52a8\u6682\u505c\u3002\u786e\u4fdd\u6bcf\u4e00\u5206\u949f\u90fd\u662f\u771f\u5b9e\u7684\u5b66\u4e60\u65f6\u95f4\u3002" },
  { q: "\u201c\u81ea\u5e26 API Key\u201d\u662f\u4ec0\u4e48\u610f\u601d\uff1f",
    a: "\u4f60\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u7684 DeepSeek \u6216 Google Gemini API Key\uff0c\u8fd9\u6837 AI \u8c03\u7528\u8d39\u7528\u7531\u4f60\u81ea\u5df1\u627f\u62c5\uff0c\u6211\u4eec\u7684\u4f1a\u5458\u8d39\u5c31\u53ef\u4ee5\u6253\u534a\u6298\u3002\u6211\u4eec\u91cd\u89c6\u9690\u79c1\uff1aAPI Key \u4ec5\u5b58\u50a8\u5728\u4f60\u7684\u8bbe\u5907\u4e0a\uff0c\u4ec5\u5728\u8c03\u7528 AI \u65f6\u52a0\u5bc6\u4f20\u8f93\uff0c\u5e73\u53f0\u4e0d\u8bb0\u5f55\u3001\u4e0d\u5b58\u50a8\u3002\u8bf7\u81ea\u884c\u5984\u5584\u4fdd\u7ba1\u4f60\u7684 Key\u3002" },
  { q: "\u5982\u4f55\u53d6\u6d88\uff1f",
    a: "\u968f\u65f6\u53ef\u4ee5\u53d6\u6d88\uff0c\u4e0d\u6536\u4efb\u4f55\u989d\u5916\u8d39\u7528\u3002\u53d6\u6d88\u540e\u4f60\u7684\u5b66\u4e60\u6570\u636e\u6c38\u4e45\u4fdd\u7559\uff0c\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u514d\u8d39\u529f\u80fd\u3002" },
];

export default function PlanPage() {
  var [billing, setBilling] = useState("monthly"); // "monthly" | "yearly"
  var [showBYO, setShowBYO] = useState(false);
  var [expandedFAQ, setExpandedFAQ] = useState(null);

  return (
    <div style={S.root}>
      <Head>
        <title>Plan & Pricing \u2014 Know U. Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />

      <BrandNavBar activeTab="plan" />

      <div style={S.container}>
        {/* \u6807\u9898 */}
        <div style={{ textAlign:"center", marginBottom:20, animation:"fadeUp 0.3s ease-out" }}>
          <BrandSparkIcon size={48} marginBottom={8} />
          <div style={{ fontSize:22, fontWeight:800, marginBottom:4 }}>{"\u4f60\u7684 AI \u82f1\u8bed\u79c1\u6559\u65b9\u6848"}</div>
          <div style={{ fontSize:13, color:C.textSec, lineHeight:1.6 }}>
            {"\u4e00\u4e2a\u6708\u7684 AI \u79c1\u6559\uff0c\u4e0d\u5230\u771f\u4eba\u79c1\u6559\u4e00\u8282\u8bfe\u7684\u4ef7\u683c"}
          </div>
        </div>

        {/* \u5bf9\u6bd4\u6570\u636e */}
        <div style={{ ...S.card, padding:"14px 16px", marginBottom:16, background:"linear-gradient(135deg, " + C.goldLight + " 0%, " + C.accentLight + " 100%)", borderColor:C.gold + "33" }}>
          <div style={{ display:"flex", justifyContent:"space-around", textAlign:"center", fontSize:12 }}>
            <div>
              <div style={{ fontSize:20, fontWeight:800, color:C.accent }}>1:1</div>
              <div style={{ color:C.textSec }}>{"\u771f\u6b63\u4e00\u5bf9\u4e00"}</div>
            </div>
            <div>
              <div style={{ fontSize:20, fontWeight:800, color:C.accent }}>24/7</div>
              <div style={{ color:C.textSec }}>{"\u968f\u65f6\u53ef\u5b66"}</div>
            </div>
            <div>
              <div style={{ fontSize:20, fontWeight:800, color:C.accent }}>90%</div>
              <div style={{ color:C.textSec }}>{"\u6bd4\u79c1\u6559\u4fbf\u5b9c"}</div>
            </div>
          </div>
        </div>

        {/* \u6708\u4ed8/\u5e74\u4ed8\u5207\u6362 */}
        <div style={{ display:"flex", justifyContent:"center", gap:4, marginBottom:16, background:C.bg, borderRadius:10, padding:4, border:"1px solid " + C.border }}>
          <button onClick={function() { setBilling("monthly"); }} style={{ flex:1, padding:"8px 0", borderRadius:8, border:"none", fontFamily:FONT, fontSize:13, fontWeight:600, cursor:"pointer", background: billing === "monthly" ? C.accent : "transparent", color: billing === "monthly" ? "#fff" : C.textSec }}>{"\u6708\u4ed8"}</button>
          <button onClick={function() { setBilling("yearly"); }} style={{ flex:1, padding:"8px 0", borderRadius:8, border:"none", fontFamily:FONT, fontSize:13, fontWeight:600, cursor:"pointer", background: billing === "yearly" ? C.accent : "transparent", color: billing === "yearly" ? "#fff" : C.textSec }}>
            {"\u5e74\u4ed8"} <span style={{ fontSize:10, fontWeight:700, background: billing === "yearly" ? "rgba(255,255,255,0.3)" : C.accentLight, color: billing === "yearly" ? "#fff" : C.accent, padding:"1px 5px", borderRadius:4, marginLeft:4 }}>8\u6298</span>
          </button>
        </div>

        {/* BYO Key \u5f00\u5173 */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:16 }}>
          <span style={{ fontSize:12, color:C.textSec }}>{"\u81ea\u5e26 API Key\uff08\u534a\u4ef7\uff09"}</span>
          <button onClick={function() { setShowBYO(!showBYO); }} style={{ width:40, height:22, borderRadius:11, border:"none", background: showBYO ? C.teal : C.border, cursor:"pointer", position:"relative", transition:"background 0.2s" }}>
            <div style={{ width:18, height:18, borderRadius:9, background:"#fff", position:"absolute", top:2, left: showBYO ? 20 : 2, transition:"left 0.2s", boxShadow:"0 1px 3px rgba(0,0,0,0.2)" }} />
          </button>
        </div>

        {/* \u5957\u9910\u5361\u7247 */}
        <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:20 }}>
          {PLANS.map(function(plan) {
            var priceDisplay = "";
            var priceNote = "";
            if (plan.price) {
              if (showBYO) {
                priceDisplay = billing === "yearly"
                  ? "$" + Math.round(plan.price.yearlyBYO / 12) + "/\u6708"
                  : "$" + plan.price.monthlyBYO + "/\u6708";
                priceNote = billing === "yearly"
                  ? "\u5e74\u4ed8 $" + plan.price.yearlyBYO + "\uff08\u7701 $" + (plan.price.monthlyBYO * 12 - plan.price.yearlyBYO) + "\uff09"
                  : "\u2248 \u00a5" + Math.round(plan.price.monthlyBYO * 7.3) + "/\u6708";
              } else {
                priceDisplay = billing === "yearly"
                  ? "$" + Math.round(plan.price.yearly / 12) + "/\u6708"
                  : "$" + plan.price.monthly + "/\u6708";
                priceNote = billing === "yearly"
                  ? "\u5e74\u4ed8 $" + plan.price.yearly + "\uff08\u7701 $" + (plan.price.monthly * 12 - plan.price.yearly) + "\uff09"
                  : "\u2248 \u00a5" + Math.round(plan.price.monthly * 7.3) + "/\u6708";
              }
            }

            return (
              <div key={plan.key} style={{
                background: C.card,
                borderRadius: 16,
                border: plan.popular ? "2px solid " + plan.color : "1px solid " + C.border,
                padding: "20px 18px",
                boxShadow: plan.popular ? "0 4px 20px " + plan.color + "22" : C.shadow,
                position: "relative",
                animation: "fadeUp 0.3s ease-out",
              }}>
                {plan.popular && (
                  <div style={{ position:"absolute", top:-10, left:"50%", transform:"translateX(-50%)", background:plan.color, color:"#fff", fontSize:11, fontWeight:700, padding:"3px 14px", borderRadius:10 }}>{"\u6700\u53d7\u6b22\u8fce"}</div>
                )}

                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                  <div>
                    <div style={{ fontSize:17, fontWeight:800, color:plan.color }}>{plan.name}</div>
                    <div style={{ fontSize:12, color:C.textSec, marginTop:2 }}>{plan.desc}</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    {plan.price ? (
                      <>
                        <div style={{ fontSize:24, fontWeight:800, color:C.text }}>{priceDisplay}</div>
                        <div style={{ fontSize:10, color:C.textSec }}>{priceNote}</div>
                      </>
                    ) : (
                      <div style={{ fontSize:20, fontWeight:800, color:C.teal }}>{plan.priceLabel}</div>
                    )}
                  </div>
                </div>

                {/* \u529f\u80fd\u5217\u8868 */}
                <div style={{ marginBottom:14 }}>
                  {plan.features.map(function(f, i) {
                    return (
                      <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"5px 0", fontSize:13, color: f.included ? C.text : C.border }}>
                        <span style={{ fontSize:14, flexShrink:0 }}>{f.included ? "\u2705" : "\u2014"}</span>
                        <span style={{ textDecoration: f.included ? "none" : "line-through" }}>{f.text}</span>
                      </div>
                    );
                  })}
                </div>

                <button style={{
                  ...S.bigBtn,
                  margin: 0,
                  background: plan.key === "free" ? C.teal : plan.color,
                  fontSize: 15,
                }}>
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* \u79c1\u6559\u5bf9\u6bd4 */}
        <div style={{ ...S.card, padding:"16px 18px", marginBottom:16 }}>
          <div style={{ fontSize:15, fontWeight:700, marginBottom:10 }}>{"\u4e0e\u771f\u4eba\u79c1\u6559\u7684\u5bf9\u6bd4"}</div>
          <div style={{ fontSize:12, lineHeight:2 }}>
            {[
              ["\ud83c\udfaf \u771f\u6b63 1 \u5bf9 1", "\u5927\u73ed 1 \u5bf9 20-40"],
              ["\ud83e\udde0 \u8d8a\u5b66\u8d8a\u61c2\u4f60\uff08\u6570\u636e\u753b\u50cf\uff09", "\u79c1\u6559\u6bcf\u5468\u89c1\u4e00\u6b21"],
              ["\ud83d\udcb0 $20/\u6708 \u8d77", "\u79c1\u6559 $50+/\u5c0f\u65f6"],
              ["\ud83d\udd50 24/7 \u968f\u65f6\u53ef\u5b66", "\u79c1\u6559\u8981\u7ea6\u65f6\u95f4"],
              ["\ud83d\udcca \u516d\u7ef4\u91cf\u5316\u6210\u957f", "\u79c1\u6559\u51ed\u611f\u89c9"],
              ["\ud83c\udf10 \u4e2d\u82f1\u53cc\u8bed\u601d\u7ef4\u8bad\u7ec3", "\u79c1\u6559\u53ea\u7528\u82f1\u6587"],
            ].map(function(row, i) {
              return (
                <div key={i} style={{ display:"flex", justifyContent:"space-between", color:C.text }}>
                  <span style={{ fontWeight:600 }}>{row[0]}</span>
                  <span style={{ color:C.border, fontSize:11 }}>{row[1]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom:20 }}>
          <div style={{ fontSize:15, fontWeight:700, marginBottom:10 }}>{"\u2753 \u5e38\u89c1\u95ee\u9898"}</div>
          {FAQ.map(function(item, i) {
            var isOpen = expandedFAQ === i;
            return (
              <div key={i} style={{ ...S.card, padding:"12px 16px", marginBottom:6, cursor:"pointer" }} onClick={function() { setExpandedFAQ(isOpen ? null : i); }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ fontSize:13, fontWeight:600 }}>{item.q}</div>
                  <span style={{ fontSize:16, color:C.textSec, transform: isOpen ? "rotate(180deg)" : "none", transition:"transform 0.2s" }}>{"\u25bc"}</span>
                </div>
                {isOpen && <div style={{ fontSize:12, color:C.textSec, lineHeight:1.7, marginTop:8, paddingTop:8, borderTop:"1px solid " + C.border }}>{item.a}</div>}
              </div>
            );
          })}
        </div>

        {/* \u5e95\u90e8 CTA */}
        <div style={{ textAlign:"center", marginBottom:30 }}>
          <div style={{ fontSize:13, color:C.textSec, marginBottom:8 }}>{"\u4e0d\u786e\u5b9a\uff1f\u5148\u514d\u8d39\u4f53\u9a8c\uff0c\u611f\u53d7 AI \u79c1\u6559\u7684\u6548\u679c"}</div>
          <Link href="/writing" style={{ ...S.primaryBtn, textDecoration:"none", display:"inline-flex" }}>{"\u2728 \u514d\u8d39\u5f00\u59cb\u4f53\u9a8c"}</Link>
        </div>
      </div>
    </div>
  );
}
