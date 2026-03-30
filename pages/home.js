import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { C, FONT, globalCSS, S } from '../lib/theme';
import { BrandNavBar, BrandUIcon } from '../components/BrandNavBar';
import UserCenter from '../components/UserCenter';
import { supabase } from '../lib/supabase';

/* ═══════════════════════════════════════════════════════
   Know U. Learning — 营销首页
   ═══════════════════════════════════════════════════════ */

var EXAMS = ["SSAT", "ISEE", "SAT", "TOEFL", "IELTS"];

var FadeInSection = ({ children, style }) => {
  var ref = useRef(null);
  var [visible, setVisible] = useState(false);
  useEffect(() => {
    var el = ref.current;
    if (!el) return;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } });
    }, { threshold: 0.12 });
    observer.observe(el);
    return function() { observer.disconnect(); };
  }, []);
  return <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.6s ease, transform 0.6s ease", ...style }}>{children}</div>;
};

export default function HomePage() {
  var [user, setUser] = useState(null);
  var [showUserCenter, setShowUserCenter] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(function(result) {
      var s = result?.data?.session;
      if (s?.user) setUser(s.user);
    });
    var { data: { subscription } } = supabase.auth.onAuthStateChange(function(event, session) {
      setUser(session?.user || null);
    });
    return function() { subscription?.unsubscribe(); };
  }, []);

  var container = { maxWidth: 800, margin: "0 auto", padding: "0 20px" };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: FONT, color: C.text }}>
      <Head>
        <title>Know U. Learning — AI 英语私教，每个单词都是你的故事</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI 了解你的生活、朋友、爱好，为你定制每一个例句。Vocab 词汇课 + Writing 写作课 + Reading 阅读课，三位一体的英语学习平台。" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: globalCSS + `
        @keyframes floatLogo { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes slideInFromRight { from{transform:translateX(100%)} to{transform:translateX(0)} }
      `}} />

      {/* Nav */}
      <BrandNavBar activeTab="home" user={user} onUserCenterClick={() => setShowUserCenter(true)} />

      {/* ═══ HERO ═══ */}
      <section style={{ ...container, textAlign: "center", padding: "60px 20px 40px" }}>
        <div style={{ animation: "floatLogo 3s ease-in-out infinite", marginBottom: 16 }}>
          <BrandUIcon size={72} />
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 900, margin: "0 0 4px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>Know U. Learning</h1>
        <p style={{ fontSize: 14, color: C.textSec, fontStyle: "italic", margin: "0 0 24px" }}>Personal AI Language Tutor</p>
        <div style={{ fontSize: 24, fontWeight: 800, color: C.text, marginBottom: 10, lineHeight: 1.4 }}>每个单词都是你的故事</div>
        <p style={{ fontSize: 15, color: C.textSec, lineHeight: 1.8, maxWidth: 480, margin: "0 auto 28px" }}>
          AI 了解你的生活、朋友、爱好，为你定制每一个例句。<br/>
          不再是冷冰冰的释义，而是属于你的记忆。
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
          <Link href="/vocab?from=home" style={{ ...S.bigBtn, display: "inline-block", width: "auto", padding: "14px 32px", fontSize: 16, textDecoration: "none" }}>免费体验 →</Link>
          <a href="#why" style={{ ...S.ghostBtn, display: "inline-block", padding: "14px 24px", textDecoration: "none", color: C.textSec }}>了解教学理念 ↓</a>
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {EXAMS.map(function(e) { return <span key={e} style={{ padding: "4px 12px", background: C.goldLight, borderRadius: 20, fontSize: 12, fontWeight: 700, color: C.gold, border: "1px solid " + C.gold + "33" }}>{e}</span>; })}
        </div>
      </section>

      {/* ═══ WHY KNOW U. ═══ */}
      <FadeInSection>
        <section id="why" style={{ ...container, padding: "40px 20px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, textAlign: "center", marginBottom: 6 }}>为什么选择 Know U.？</h2>
          <p style={{ fontSize: 14, color: C.textSec, textAlign: "center", marginBottom: 28 }}>同一个单词，两种完全不同的学习体验</p>

          {/* Before/After cards */}
          <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
            {/* Traditional */}
            <div style={{ flex: "1 1 280px", background: C.card, border: "1px solid " + C.border, borderRadius: 14, padding: "20px", opacity: 0.7 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.textSec, marginBottom: 8 }}>📖 传统教材</div>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>abandon</div>
              <div style={{ fontSize: 13, color: C.textSec, fontStyle: "italic", marginBottom: 8 }}>/əˈbændən/</div>
              <div style={{ fontSize: 14, color: C.textSec, lineHeight: 1.6 }}>to leave completely and finally; forsake</div>
              <div style={{ fontSize: 12, color: C.textSec, marginTop: 12, opacity: 0.6 }}>💤 看完就忘，和你没有任何关系</div>
            </div>
            {/* Know U. */}
            <div style={{ flex: "1 1 280px", background: C.accentLight, border: "2px solid " + C.accent + "44", borderRadius: 14, padding: "20px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, marginBottom: 8 }}>✨ Know U. 为你定制</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: C.accent, marginBottom: 8 }}>abandon</div>
              <div style={{ fontSize: 14, color: C.text, lineHeight: 1.8 }}>
                Willow 和 Emily 在 Irvine Spectrum 的网球场打到正嗨，突然暴雨 — they had to <strong style={{ color: C.accent }}>abandon</strong> the match and run for matcha ice cream! 🍵
              </div>
              <div style={{ fontSize: 12, color: C.accent, marginTop: 12, fontWeight: 600 }}>📍 你的朋友 · 你的地方 · 你的记忆</div>
            </div>
          </div>

          {/* 3 Pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { icon: "🎯", title: "千人千面", desc: "填写「学习画像」后，AI 用你的朋友、爱好、日常编织每一个例句" },
              { icon: "📚", title: "直击考试", desc: "专为 SSAT/ISEE/SAT/TOEFL/IELTS 设计的词表和教学策略" },
              { icon: "🧠", title: "科学记忆", desc: "间隔重复算法（1→3→7→14→30 天）+ 多模态语境学习" },
            ].map(function(p) {
              return <div key={p.title} style={{ background: C.card, borderRadius: 12, padding: "18px", border: "1px solid " + C.border, boxShadow: C.shadow }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{p.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: C.textSec, lineHeight: 1.6 }}>{p.desc}</div>
              </div>;
            })}
          </div>
        </section>
      </FadeInSection>

      {/* ═══ ECOSYSTEM LOOP ═══ */}
      <FadeInSection>
        <section style={{ ...container, padding: "40px 20px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, textAlign: "center", marginBottom: 6 }}>三位一体 · 学习闭环</h2>
          <p style={{ fontSize: 14, color: C.textSec, textAlign: "center", marginBottom: 28 }}>读、写、词汇不再是孤立的练习 — 它们相互赋能</p>

          {/* Loop Diagram */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0, marginBottom: 24, flexWrap: "wrap" }}>
            <div style={{ textAlign: "center", flex: "0 0 auto" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, " + C.accent + ", " + C.gold + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 6px", boxShadow: "0 4px 12px " + C.accent + "44" }}>📖</div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Vocab</div>
              <div style={{ fontSize: 11, color: C.textSec }}>词汇理解与记忆</div>
            </div>
            <div style={{ fontSize: 20, color: C.accent, padding: "0 8px", fontWeight: 700 }}>⇄</div>
            <div style={{ textAlign: "center", flex: "0 0 auto" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, " + C.teal + ", #5a9abf)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 6px", boxShadow: "0 4px 12px " + C.teal + "44" }}>📚</div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Reading</div>
              <div style={{ fontSize: 11, color: C.textSec }}>语感输入与积累</div>
            </div>
            <div style={{ fontSize: 20, color: C.purple, padding: "0 8px", fontWeight: 700 }}>⇄</div>
            <div style={{ textAlign: "center", flex: "0 0 auto" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, " + C.purple + ", #8b7cf7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 6px", boxShadow: "0 4px 12px " + C.purple + "44" }}>✍️</div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Writing</div>
              <div style={{ fontSize: 11, color: C.textSec }}>思维表达与输出</div>
            </div>
          </div>

          {/* Loop description */}
          <div style={{ background: C.card, borderRadius: 14, border: "1px solid " + C.border, padding: "18px 20px", boxShadow: C.shadow, maxWidth: 520, margin: "0 auto 32px" }}>
            <div style={{ fontSize: 14, lineHeight: 1.9, color: C.text }}>
              <strong style={{ color: C.teal }}>📚 Reading</strong> 中收藏好句子和观点<br/>
              <strong style={{ color: C.purple }}>✍️ Writing</strong> 时一键引用你喜欢的表达<br/>
              遇到生词 → 加入 <strong style={{ color: C.accent }}>📖 Vocab</strong> 深度学习<br/>
              <span style={{ fontSize: 13, color: C.textSec }}>三个模块，一个成长闭环 🔄</span>
            </div>
          </div>

          {/* 3 Product Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {/* Vocab */}
            <div style={{ background: C.card, borderRadius: 14, border: "1px solid " + C.border, borderTop: "4px solid " + C.accent, padding: "20px", boxShadow: C.shadow }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>📖 Vocab · 词汇课</div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.green, background: C.greenLight, padding: "2px 8px", borderRadius: 10 }}>已上线</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", fontSize: 13, color: C.textSec, lineHeight: 2 }}>
                <li>🎨 学习画像 — AI 用你的生活编例句</li>
                <li>🎯 猜 → 讲 → 光谱排序 → 复习</li>
                <li>🔄 间隔重复，科学安排复习</li>
                <li>📷 照片日记 — 拍照丰富画像</li>
              </ul>
              <Link href="/vocab?from=home" style={{ ...S.primaryBtn, textDecoration: "none", display: "block", textAlign: "center", padding: "10px", fontSize: 14 }}>开始学习 →</Link>
            </div>
            {/* Writing */}
            <div style={{ background: C.card, borderRadius: 14, border: "1px solid " + C.border, borderTop: "4px solid " + C.purple, padding: "20px", boxShadow: C.shadow }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>✍️ Writing · 写作课</div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.purple, background: C.purpleLight, padding: "2px 8px", borderRadius: 10 }}>Beta</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", fontSize: 13, color: C.textSec, lineHeight: 2 }}>
                <li>🧠 不是批改 — 是训练思维表达力</li>
                <li>🤔 AI 苏格拉底式教练：只问不答</li>
                <li>🌉 中文做「思维桥梁」再用英文表达</li>
                <li>📊 六维能力雷达图可视化成长</li>
              </ul>
              <Link href="/writing" style={{ ...S.primaryBtn, textDecoration: "none", display: "block", textAlign: "center", padding: "10px", fontSize: 14, background: C.purple }}>体验写作课 →</Link>
            </div>
            {/* Reading */}
            <div style={{ background: C.card, borderRadius: 14, border: "1px solid " + C.border, borderTop: "4px solid " + C.teal, padding: "20px", boxShadow: C.shadow, opacity: 0.85 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>📚 Reading · 阅读课</div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.teal, background: C.tealLight, padding: "2px 8px", borderRadius: 10 }}>即将上线</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", fontSize: 13, color: C.textSec, lineHeight: 2 }}>
                <li>📰 AI 根据水平推荐英文阅读材料</li>
                <li>📝 生词一键收藏 → 进入 Vocab 学习</li>
                <li>💎 收藏金句和观点 → Writing 时引用</li>
                <li>🎧 阅读理解 + 语感培养，输入驱动输出</li>
              </ul>
              <div style={{ padding: "10px", textAlign: "center", fontSize: 14, fontWeight: 600, color: C.textSec, background: C.bg, borderRadius: 10, border: "1px solid " + C.border }}>敬请期待</div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ═══ DIFFERENTIATION ═══ */}
      <FadeInSection>
        <section style={{ ...container, padding: "40px 20px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, textAlign: "center", marginBottom: 24 }}>与众不同</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {[
              { vs: "vs 百词斩", bad: "所有人看到相同的例句和图片", good: "每个学生看到的例句都不同 — 因为来自你的生活" },
              { vs: "vs ChatGPT", bad: "通用 AI，需要自己设计 prompt", good: "专为英语学习定制完整流程：画像→学习→复习→统计" },
              { vs: "vs Duolingo", bad: "游戏化但内容通用，不针对考试", good: "直接对接 SSAT/SAT/TOEFL 考试词表，效果堪比真人私教" },
            ].map(function(d) {
              return <div key={d.vs} style={{ background: C.card, borderRadius: 12, padding: "18px", border: "1px solid " + C.border, boxShadow: C.shadow }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.textSec, marginBottom: 10 }}>{d.vs}</div>
                <div style={{ fontSize: 13, color: C.textSec, marginBottom: 8, lineHeight: 1.5 }}>❌ {d.bad}</div>
                <div style={{ fontSize: 13, color: C.accent, fontWeight: 600, lineHeight: 1.5 }}>✅ {d.good}</div>
              </div>;
            })}
          </div>
        </section>
      </FadeInSection>

      {/* ═══ ORIGIN STORY ═══ */}
      <FadeInSection>
        <section style={{ background: "linear-gradient(135deg, " + C.goldLight + " 0%, " + C.accentLight + " 100%)", padding: "48px 20px", margin: "20px 0" }}>
          <div style={{ ...container, maxWidth: 560, textAlign: "center" }}>
            <div style={{ fontSize: 48, lineHeight: 1, marginBottom: 16, opacity: 0.3 }}>❝</div>
            <p style={{ fontSize: 16, lineHeight: 2, color: C.text, marginBottom: 20, fontStyle: "italic" }}>
              女儿 Willow 在美国读 6 年级，备考 SSAT，每天背单词很痛苦。我想：如果 AI 能用她自己的生活来编例句呢？于是有了 Know U.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text, marginBottom: 16 }}>
              现在，每个单词都是她自己的故事。<br/>
              我希望你的孩子也能拥有同样的体验。
            </p>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.accent }}>Made with ❤️ by a dad for his daughter, and for you.</p>
          </div>
        </section>
      </FadeInSection>

      {/* ═══ CTA ═══ */}
      <FadeInSection>
        <section style={{ ...container, padding: "40px 20px", textAlign: "center" }}>
          <div style={{ background: C.card, borderRadius: 20, border: "1px solid " + C.border, padding: "36px 24px", boxShadow: "0 8px 30px rgba(44,36,32,0.08)" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>🎁</div>
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>推广期 · 全部免费</div>
            <p style={{ fontSize: 14, color: C.textSec, marginBottom: 24 }}>目前所有功能免费开放，注册即用</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/vocab?from=home" style={{ ...S.bigBtn, display: "inline-block", width: "auto", padding: "14px 28px", fontSize: 15, textDecoration: "none" }}>免费注册，开始学习 →</Link>
              <Link href="/plan" style={{ ...S.ghostBtn, display: "inline-block", padding: "14px 20px", textDecoration: "none", color: C.textSec }}>查看完整方案</Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: "1px solid " + C.border, padding: "24px 20px 16px", textAlign: "center" }}>
        <div style={{ ...container }}>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 12, fontSize: 13, flexWrap: "wrap" }}>
            <Link href="/vocab" style={{ color: C.textSec, textDecoration: "none" }}>Vocab 词汇课</Link>
            <Link href="/writing" style={{ color: C.textSec, textDecoration: "none" }}>Writing 写作课</Link>
            <Link href="/plan" style={{ color: C.textSec, textDecoration: "none" }}>Plan 方案</Link>
          </div>
          <p style={{ fontSize: 14, color: C.text, margin: "0 0 4px" }}>为女儿而写，献给每一位认真学习的你</p>
          <p style={{ fontSize: 12, color: C.textSec, margin: "0 0 8px" }}>Know U. Learning — Personal AI Language Tutor</p>
          <p style={{ fontSize: 11, color: C.textSec, opacity: 0.6 }}>问题反馈：Winstonwu1996@icloud.com</p>
        </div>
      </footer>

      {/* User Center Drawer */}
      <UserCenter open={showUserCenter} onClose={() => setShowUserCenter(false)} user={user} onLogin={() => { setShowUserCenter(false); window.location.href = "/vocab"; }} onLogout={async () => { await supabase.auth.signOut(); setUser(null); setShowUserCenter(false); }} />
    </div>
  );
}
