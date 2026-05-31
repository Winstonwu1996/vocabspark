// ─── Completion Screen ───────────────────────────────────────────
// 抽离自 pages/history.js（Day 4-5 重构 Stage 3）
//
// 13 轮 + 3 关 mastery gate 全部走完后展示：
//   - U5: Confetti 雨动画（4.5 秒后自动消失）
//   - 完成卡（大宪章完成 / +XP / 家庭话题 / 复习单 / 再做一遍）
//   - Free Chat（Winston review #4）— 可选展开继续聊
//
// Props：
//   topic, xpEarned, reviewPool ({words, concepts}),
//   freeChatLog, freeChatStreaming, freeChatThinking, freeChatInput,
//   onFreeChatInput, onSendFreeChat,
//   onTermClick, onMustClick, onAgain
import React, { useState, useEffect, useRef } from 'react';
import { HC } from './theme';
import { renderBilingualText } from './bilingual';
import { FONT_DISPLAY } from '../../lib/theme';
import { hasNotebook, loadNotebook } from '../../lib/history-storyboards/notebooks/index.js';
import { loadStoryboard } from '../../lib/history-storyboards/index.js';

export function CompletionScreen(props) {
  var topic = props.topic;
  var reviewPool = props.reviewPool || { words: [], concepts: [] };
  var hasReview = (reviewPool.words && reviewPool.words.length > 0) || (reviewPool.concepts && reviewPool.concepts.length > 0);
  var [showFreeChat, setShowFreeChat] = useState(false);
  // Companion Notebook exit section
  var notebookData = (props.topicId && hasNotebook(props.topicId)) ? loadNotebook(props.topicId) : null;
  var isEnglish = !!(props.englishLevel === 'high');
  var [nbSection, setNbSection] = useState('concepts'); // 'concepts' | 'questions'
  var freeChatEndRef = useRef(null);

  useEffect(function() {
    if (freeChatEndRef.current) {
      try { freeChatEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" }); } catch (e) {}
    }
  }, [props.freeChatLog && props.freeChatLog.length, props.freeChatStreaming, props.freeChatThinking]);

  // U5: Confetti 动画 — 一次性触发
  var [showConfetti, setShowConfetti] = useState(true);
  useEffect(function() {
    var t = setTimeout(function() { setShowConfetti(false); }, 4500);
    return function() { clearTimeout(t); };
  }, []);

  // #1 Flipbook：进入 complete 时演"合上一章书"翻页动画 — 1.4s 后自然停在静止状态
  // 物理隐喻：通关 = 我读完了一本书（不是做完了一道题）
  // CSS rotateY + transform-origin 模拟书脊翻页，比第三方 PageFlip 库轻量 100x
  var [bookOpen, setBookOpen] = useState(false);
  useEffect(function() {
    var t = setTimeout(function() { setBookOpen(true); }, 50);  // 微延迟触发动画
    return function() { clearTimeout(t); };
  }, []);

  return (
    <div style={{padding: "30px 0", position: "relative"}}>
      {/* #1 Flipbook：合上书的视觉前奏 — 0.8s 翻页动画后内容显形 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bookCover {
          0%   { transform: rotateY(-90deg); opacity: 0; }
          50%  { opacity: 0.7; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
        .completion-flipbook-wrap {
          perspective: 1500px;
          perspective-origin: center;
        }
        .completion-flipbook-wrap.book-open {
          animation: bookCover 1.0s ease-out forwards;
          transform-origin: left center;
        }
      ` }} />
      {/* U5: Confetti 雨动画 */}
      {showConfetti && (
        <div style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 999,
        }}>
          {Array.from({length: 60}).map(function(_, i) {
            var colors = ["#c46b30", "#c8922e", "#22a06b", "#5b8db8", "#9b2c2c", "#a07cb8"];
            var c = colors[i % colors.length];
            var left = Math.random() * 100;
            var delay = Math.random() * 0.8;
            var dur = 2.5 + Math.random() * 1.5;
            var size = 6 + Math.random() * 6;
            var rot = Math.random() * 360;
            return (
              <div key={i} style={{
                position: "absolute",
                top: -20,
                left: left + "%",
                width: size,
                height: size * 1.4,
                background: c,
                borderRadius: 1,
                animation: "confettiFall " + dur + "s ease-in " + delay + "s forwards",
                transform: "rotate(" + rot + "deg)",
                opacity: 0.95,
              }}/>
            );
          })}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes confettiFall {
              0% { transform: translateY(0) rotate(0deg); opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
            }
          ` }} />
        </div>
      )}

      <div className={"completion-flipbook-wrap " + (bookOpen ? "book-open" : "")}>
      <div className="completion-card">
        {/* #1 Flipbook：左上角"已读完"印章，强化"合上一章书"的仪式感 */}
        <div style={{
          position: "absolute", top: 12, left: 12,
          padding: "3px 10px",
          background: "rgba(155, 44, 44, 0.12)",
          border: "1.5px solid #9b2c2c",
          borderRadius: 4,
          fontSize: 9, fontWeight: 800, letterSpacing: 2,
          color: "#9b2c2c",
          fontFamily: FONT_DISPLAY,
          textTransform: "uppercase",
          transform: "rotate(-8deg)",
          opacity: bookOpen ? 0.85 : 0,
          transition: "opacity 0.6s ease-in 0.6s",
          pointerEvents: "none",
        }}>已读完 · COMPLETED</div>
        <div className="stamp">🏆</div>
        <h2>{topic.title.cn} 完成</h2>
        <div style={{color: HC.inkLight, fontSize: 13}}>{topic.title.en} · {topic.year}</div>
        <div className="xp-pill">+{props.xpEarned} XP</div>

        <div style={{marginTop: 18, fontSize: 13, color: HC.text, lineHeight: 1.6, whiteSpace: "pre-line"}}>
          {(topic.familyQuestion && topic.familyQuestion.closingNarrative) ||
            "这是 " + topic.title.cn + " 的故事 — 你刚走完了它。"}
        </div>

        {/* Step 7: 游客通关 (magna-carta 唯一游客试用课) → 注册免费引导。flag off / 已登录用户不显示。 */}
        {props.guestRegister && props.guestRegister.show && (
          <div style={{
            marginTop: 18, padding: "14px 16px", textAlign: "center",
            background: "rgba(196, 107, 48, 0.08)", border: "1px solid rgba(196, 107, 48, 0.25)",
            borderRadius: 12,
          }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: HC.ink, marginBottom: 4 }}>想继续学下去?</div>
            <div style={{ fontSize: 12.5, color: HC.inkLight, lineHeight: 1.6, marginBottom: 12 }}>
              注册一个免费账号 —— 再多 7 门课免费学,进度还能换设备接着用。
            </div>
            <button
              onClick={props.guestRegister.onRegister}
              style={{
                padding: "10px 24px", background: HC.accent, color: "#fff8e8", border: "none",
                borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}
            >免费注册,解锁更多</button>
          </div>
        )}

        {/* Step 9: free/guest 看到「考点词进 Vocab」(Basic+ 权益) 升级提示。Basic+/flag-off 不显示 (词已推桥)。 */}
        {props.bridgeUpsell && props.bridgeUpsell.show && hasReview && (
          <div style={{
            marginTop: 18, padding: "12px 14px", textAlign: "left",
            background: "rgba(196, 107, 48, 0.08)", border: "1px solid rgba(196, 107, 48, 0.22)",
            borderRadius: 12, fontSize: 12.5, lineHeight: 1.55, color: HC.text,
          }}>
            <span style={{ fontWeight: 700, color: HC.accent }}>📚 想把这些考点词带进 Vocab 复习?</span>
            <span> 升级 Basic 后,history 的考点词会自动进 Vocab 待选区,跟你的单词一起循环复习。</span>
            <button
              onClick={props.bridgeUpsell.onUpgrade}
              style={{
                display: "block", marginTop: 10, padding: "8px 18px", background: HC.accent,
                color: "#fff8e8", border: "none", borderRadius: 999, fontSize: 13, fontWeight: 600,
                cursor: "pointer", fontFamily: "inherit",
              }}
            >升级 Basic</button>
          </div>
        )}

        {/* ── Review Pool 提示（错的进 vocab 复习池） ── */}
        {hasReview && (
          <div style={{
            marginTop: 18,
            padding: "12px 14px",
            background: "rgba(91, 141, 184, 0.10)",
            borderRadius: 12,
            textAlign: "left",
            fontSize: 12.5,
            lineHeight: 1.55,
            color: HC.text,
            borderLeft: "3px solid " + HC.teal,
          }}>
            <div style={{fontWeight: 700, color: HC.teal, marginBottom: 6, fontSize: 12}}>
              📝 这些下次再考一次（已加进复习单）
            </div>
            {reviewPool.words.length > 0 && (
              <div style={{marginBottom: 4}}>
                <span style={{opacity: 0.8}}>词汇 (点击查 IPA + 听发音)：</span>
                {reviewPool.words.map(function(w, i) {
                  var fullData = (topic && topic.mustMemorize && topic.mustMemorize.vocab || []).find(function(v) { return v.word === w.word; });
                  return (
                    <span
                      key={i}
                      onClick={function() {
                        if (props.onMustClick && fullData) {
                          props.onMustClick({ word: w.word, cn: fullData.cn, data: fullData });
                        }
                      }}
                      style={{
                        display: "inline-block", margin: "2px 4px 2px 0",
                        padding: "2px 8px", background: HC.parchmentHi,
                        borderRadius: 4, fontSize: 11, fontWeight: 600,
                        cursor: fullData ? "pointer" : "default",
                        border: fullData ? "1px solid " + HC.parchmentLo : "none",
                      }}
                      title={fullData ? "点开看 IPA + 听发音" : ""}
                    >{w.word} · {w.hint}{fullData && <sup style={{fontSize: 8, marginLeft: 2, color: "#c08400"}}>⭐</sup>}</span>
                  );
                })}
              </div>
            )}
            {reviewPool.concepts.length > 0 && (
              <div>
                <span style={{opacity: 0.8}}>概念 (点击看定义)：</span>
                {reviewPool.concepts.map(function(c, i) {
                  var fullData = (topic && topic.mustMemorize && topic.mustMemorize.concepts || []).find(function(x) { return x.id === c.conceptId; });
                  return (
                    <span
                      key={i}
                      onClick={function() {
                        if (props.onMustClick && fullData) {
                          props.onMustClick({ word: fullData.en, cn: fullData.cn, data: fullData });
                        }
                      }}
                      style={{
                        display: "inline-block", margin: "2px 4px 2px 0",
                        padding: "2px 8px", background: HC.parchmentHi,
                        borderRadius: 4, fontSize: 11, fontWeight: 600,
                        cursor: fullData ? "pointer" : "default",
                        border: fullData ? "1px solid " + HC.parchmentLo : "none",
                      }}
                      title={fullData ? "点开看完整定义" : ""}
                    >{c.en} · {c.cn}{fullData && <sup style={{fontSize: 8, marginLeft: 2, color: "#c08400"}}>⭐</sup>}</span>
                  );
                })}
              </div>
            )}
            <div style={{marginTop: 8, fontSize: 11, opacity: 0.75, fontStyle: "italic"}}>
              ✓ 已加到 <a href="/vocab" style={{color: HC.teal, fontWeight: 600}}>Vocab 模块词单</a>，下次进 vocab 会出现复习。
            </div>
          </div>
        )}

        <div className="family-q">
          <div className="label">📨 今晚的家庭话题</div>
          <div>「{(topic.familyQuestion && topic.familyQuestion.question) || "今天学的内容跟你身边的什么事情最像？"}」</div>
          <div style={{marginTop: 6, opacity: 0.85}}>{(topic.familyQuestion && topic.familyQuestion.callToAction) || "明天告诉我你们家的答案。"}</div>
        </div>

        <div style={{marginTop: 22, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap"}}>
          {!showFreeChat && (
            <button
              className="continue-btn"
              style={{background: HC.accent}}
              onClick={function() { setShowFreeChat(true); }}
            >💬 想继续聊？</button>
          )}
          <button className="continue-btn" style={{background: HC.teal}} onClick={function() {
            if (window.confirm("确定要再做一遍？这会清空当前 Topic 的进度（不影响 XP 累计）。")) {
              props.onAgain();
            }
          }}>再做一遍</button>
        </div>
      </div>
      </div>{/* /.completion-flipbook-wrap */}

      {/* ── 📒 同伴笔记本出口：复习考点 + DBQ 思考题 ── */}
      {notebookData && (
        <div style={{marginTop: 24}}>
          {/* 标题栏 + tab 切换 */}
          <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
            <span style={{fontSize: 20}}>📒</span>
            <span style={{fontFamily: FONT_DISPLAY, fontSize: 16, fontWeight: 700, color: HC.ink, flex: 1}}>
              {isEnglish ? "Xiao U's Study Notes" : "小 U 的复习笔记"}
            </span>
            <div style={{display: 'flex', background: HC.parchmentHi, borderRadius: 8, padding: 2, gap: 2}}>
              {[
                {k: 'concepts', cn: '考点卡', en: 'Concepts'},
                {k: 'questions', cn: 'DBQ 思考', en: 'Think'},
              ].map(function(tab) {
                var active = nbSection === tab.k;
                return (
                  <button key={tab.k} onClick={function(){ setNbSection(tab.k); }} style={{
                    border: 'none', padding: '4px 12px', borderRadius: 6, fontSize: 12,
                    fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                    background: active ? 'white' : 'transparent',
                    color: active ? HC.ink : HC.textSec,
                    boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  }}>{isEnglish ? tab.en : tab.cn}</button>
                );
              })}
            </div>
          </div>

          {/* 考点卡 */}
          {nbSection === 'concepts' && notebookData.mainConcepts && notebookData.mainConcepts.map(function(card, i) {
            var isStory = card.storyAnchor && card.storyAnchor.covered;
            var freqColors = {
              highest: {bg: '#ffe0e0', color: '#c00'},
              high:    {bg: '#fff3d6', color: '#a06800'},
              mid:     {bg: '#e0ecff', color: '#2050a0'},
              low:     {bg: '#f0f0f0', color: '#666'},
            };
            var fc = freqColors[card.examFrequency] || freqColors.mid;
            return (
              <div key={i} style={{
                background: 'white', border: '1px solid ' + HC.border,
                borderRadius: 12, padding: '16px 18px', marginBottom: 10,
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid ' + HC.border}}>
                  <div>
                    <div style={{fontSize: 16, fontWeight: 700, color: HC.ink}}>
                      {isEnglish ? card.termEn : card.termCn}
                    </div>
                    <div style={{fontSize: 11.5, color: HC.textSec, marginTop: 2}}>
                      {isEnglish ? card.termCn : card.termEn}
                    </div>
                    {card.standardRef && card.standardRef.length > 0 && (
                      <div style={{fontSize: 10.5, color: HC.textSec, opacity: 0.75, marginTop: 2}}>
                        {card.standardRef.join(' · ')}
                      </div>
                    )}
                  </div>
                  <span style={{
                    fontSize: 10, padding: '3px 8px', borderRadius: 999,
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5,
                    background: fc.bg, color: fc.color, whiteSpace: 'nowrap',
                  }}>{card.examFrequency}</span>
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: 11, padding: '3px 8px', borderRadius: 5, marginBottom: 8,
                  background: isStory ? '#e8f5e8' : '#fef4e6',
                  color: isStory ? '#2a7d2a' : '#a05a00',
                  fontWeight: 600,
                }}>
                  {isStory
                    ? (isEnglish ? '📖 Covered in story' : '📖 故事已覆盖')
                    : (isEnglish ? '📚 Mini-lesson' : '📚 独立讲解')}
                  {isStory && card.storyAnchor.lens && (
                    <span style={{opacity: 0.8, fontWeight: 400}}>· {card.storyAnchor.lens}</span>
                  )}
                </div>
                <div style={{fontSize: 13.5, color: HC.text, lineHeight: 1.65, whiteSpace: 'pre-wrap'}}>
                  {isStory
                    ? (isEnglish ? card.storyAnchor.xiaoweiNote.en : card.storyAnchor.xiaoweiNote.cn)
                    : (isEnglish ? card.standaloneText.en : card.standaloneText.cn)}
                </div>
                {/* 5-26 (用户反馈 #3): 暂移除「看小 U 读到的原文节选」—— notebook nodeIds */}
                {/* (huizong-N4) 跟 storyboard 节点 id (hz-n4) 命名格式不一致 + 字段名错, */}
                {/* 51 课 dead-since-day-one, schema 统一是 P1 backlog。 */}
                {!isStory && card.xiaoweiNote && (
                  <div style={{
                    background: '#fffbe8', borderLeft: '3px solid #f0c040',
                    padding: '10px 14px', marginTop: 10, borderRadius: '0 8px 8px 0',
                    fontSize: 13, color: '#5c4a10',
                  }}>
                    <div style={{fontSize: 10.5, fontWeight: 700, opacity: 0.7, marginBottom: 4}}>
                      {isEnglish ? '📝 Xiao U\'s note:' : '📝 小 U 的批注：'}
                    </div>
                    {isEnglish ? card.xiaoweiNote.en : card.xiaoweiNote.cn}
                  </div>
                )}
              </div>
            );
          })}

          {/* DBQ 思考题 */}
          {nbSection === 'questions' && notebookData.thinkingQuestions && notebookData.thinkingQuestions.map(function(q, i) {
            return (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #fff5f0 0%, #ffe8e0 100%)',
                border: '1px solid #f0c8b8', borderRadius: 12,
                padding: '18px 20px', marginBottom: 10,
              }}>
                <div style={{fontSize: 10.5, fontWeight: 700, letterSpacing: 1.2, color: '#c0501a', textTransform: 'uppercase', marginBottom: 8}}>
                  Q{i+1} · {isEnglish ? 'Critical Thinking' : '批判性思考'}
                  {q.conceptsActivated && q.conceptsActivated.length > 0 && (
                    <span style={{fontWeight: 400, opacity: 0.8, marginLeft: 6}}>
                      · {q.conceptsActivated.join(' / ')}
                    </span>
                  )}
                </div>
                <div style={{fontSize: 14.5, color: '#4a2a18', lineHeight: 1.7, whiteSpace: 'pre-wrap'}}>
                  {isEnglish ? q.en : q.cn}
                </div>
                <details style={{marginTop: 10}}>
                  <summary style={{cursor: 'pointer', color: '#c0501a', fontWeight: 600, fontSize: 12}}>
                    {isEnglish ? '👀 See hint' : '👀 看提示'}
                  </summary>
                  <div style={{
                    background: 'rgba(255,255,255,0.6)', padding: '10px 14px',
                    borderRadius: 8, marginTop: 8, fontSize: 12.5, color: '#6a4a30', lineHeight: 1.65,
                  }}>
                    {isEnglish ? q.hintEn : q.hintCn}
                  </div>
                </details>
              </div>
            );
          })}
        </div>
      )}

      {/* —— Free Chat Section（Winston review #4） —— */}
      {showFreeChat && (
        <div style={{
          marginTop: 18,
          padding: 18,
          background: HC.card,
          borderRadius: 16,
          border: "1px solid " + HC.border
        }}>
          <h3 style={{margin: "0 0 4px", fontFamily: FONT_DISPLAY, fontSize: 17, color: HC.ink}}>
            💬 继续聊
          </h3>
          <p style={{margin: "0 0 12px", fontSize: 12.5, color: HC.textSec, lineHeight: 1.5}}>
            还想问什么 Magna Carta 相关的？— 教皇、King John、Aristotle、议会、美国独立都行。<br/>
            <span style={{opacity: 0.85, fontStyle: "italic"}}>偏离主题我会温和拉回 — 中文英文都可以问。</span>
          </p>

          <div style={{display: "flex", flexDirection: "column", gap: 10, marginBottom: 12}}>
            {(props.freeChatLog || []).map(function(entry, i) {
              if (entry.role === "user") {
                return (
                  <div key={i} className="bubble-row user">
                    <div className="bubble user">{entry.content}</div>
                    <div className="avatar" style={{background: HC.accentLight}}>🙂</div>
                  </div>
                );
              }
              return (
                <div key={i} className="bubble-row ai">
                  <div className="avatar">🦉</div>
                  <div className={"bubble ai " + (entry.isFallback ? "fallback" : "")}>
                    {renderBilingualText(entry.content, { topic: topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick })}
                  </div>
                </div>
              );
            })}
            {props.freeChatStreaming && (
              <div className="bubble-row ai">
                <div className="avatar">🦉</div>
                <div className="bubble ai">{renderBilingualText(props.freeChatStreaming, { topic: topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick })}<span style={{opacity: 0.5}}>▌</span></div>
              </div>
            )}
            {props.freeChatThinking && !props.freeChatStreaming && (
              <div className="bubble-row ai">
                <div className="avatar">🦉</div>
                <div className="bubble ai">
                  <span className="thinking-dots"><span></span><span></span><span></span></span>
                </div>
              </div>
            )}
            <div ref={freeChatEndRef}></div>
          </div>

          <div style={{display: "flex", gap: 8, alignItems: "stretch"}}>
            <textarea
              value={props.freeChatInput || ""}
              onChange={function(e) { props.onFreeChatInput(e.target.value); }}
              onKeyDown={function(e) {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) props.onSendFreeChat();
              }}
              placeholder="想问什么？英文中文都行..."
              style={{
                flex: 1,
                padding: "10px 12px",
                border: "1px solid " + HC.border,
                borderRadius: 12,
                background: "#fff",
                fontFamily: "inherit",
                fontSize: 14,
                resize: "none",
                minHeight: 44,
                maxHeight: 100,
                lineHeight: 1.5
              }}
            />
            <button
              onClick={props.onSendFreeChat}
              disabled={!(props.freeChatInput || "").trim() || props.freeChatThinking}
              style={{
                padding: "0 18px",
                background: HC.accent,
                color: "#fff8e8",
                border: "none",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                cursor: (props.freeChatInput || "").trim() && !props.freeChatThinking ? "pointer" : "not-allowed",
                opacity: (props.freeChatInput || "").trim() && !props.freeChatThinking ? 1 : 0.5,
                fontFamily: "inherit",
                minWidth: 60
              }}
            >发送</button>
          </div>
        </div>
      )}
    </div>
  );
}
