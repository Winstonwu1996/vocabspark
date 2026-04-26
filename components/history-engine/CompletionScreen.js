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

export function CompletionScreen(props) {
  var topic = props.topic;
  var reviewPool = props.reviewPool || { words: [], concepts: [] };
  var hasReview = (reviewPool.words && reviewPool.words.length > 0) || (reviewPool.concepts && reviewPool.concepts.length > 0);
  var [showFreeChat, setShowFreeChat] = useState(false);
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

  return (
    <div style={{padding: "30px 0", position: "relative"}}>
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

      <div className="completion-card">
        <div className="stamp">🏆</div>
        <h2>{topic.title.cn} 完成</h2>
        <div style={{color: HC.inkLight, fontSize: 13}}>{topic.title.en} · {topic.year}</div>
        <div className="xp-pill">+{props.xpEarned} XP</div>

        <div style={{marginTop: 18, fontSize: 13, color: HC.text, lineHeight: 1.6, whiteSpace: "pre-line"}}>
          {(topic.familyQuestion && topic.familyQuestion.closingNarrative) ||
            "这是 " + topic.title.cn + " 的故事 — 你刚走完了它。"}
        </div>

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
