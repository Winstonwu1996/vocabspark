// ─── Glossary / Must-Memorize Popups ──────────────────────────────
// 抽离自 pages/history.js（Day 4-5 重构 Stage 2）
//
// 两个 popup：
//   - MustMemorizePopup: 点 ⭐ 必背词后弹出（含 IPA + Google Neural TTS）
//   - TermPopup: 点 glossary 名词（人物/地名）后弹出
//
// 用 fixed overlay + click outside 关闭。Z-index 2000（在 sidekick / drawer 之上）。
import React, { useState, useRef } from 'react';
import { HC } from './theme';
import { FONT_DISPLAY } from '../../lib/theme';
import { lookupTerm } from '../../lib/history-glossary';
import { getSourceBadgeMeta } from './bilingual';

// ─── Must-Memorize Popup — 点击 ⭐ 词的详情卡（含 IPA + TTS） ──────
export function MustMemorizePopup(props) {
  var data = props.data;
  if (!data) return null;
  var word = data.word;
  var info = data.data || {};

  var [playing, setPlaying] = useState(false);
  var audioRef = useRef(null);

  var playTTS = async function() {
    if (playing) return;
    setPlaying(true);
    try {
      // 跟 vocab.js 一样用 GET ?text= ，后端调 Google Translate Neural TTS
      var resp = await fetch("/api/tts?text=" + encodeURIComponent(word), {
        signal: AbortSignal.timeout(10000)
      });
      if (!resp.ok) throw new Error("tts " + resp.status);
      var blob = await resp.blob();
      var url = URL.createObjectURL(blob);
      var a = new Audio(url);
      audioRef.current = a;
      a.onended = function() { setPlaying(false); URL.revokeObjectURL(url); };
      a.onerror = function() { setPlaying(false); URL.revokeObjectURL(url); };
      await a.play();
    } catch (e) {
      console.warn("TTS failed:", e);
      setPlaying(false);
      // 兜底：浏览器 SpeechSynthesis（音质差但聊胜于无）
      try {
        var voices = window.speechSynthesis.getVoices();
        var u = new SpeechSynthesisUtterance(word);
        u.lang = "en-US";
        u.rate = 0.85;
        var preferred = voices.find(function(v) {
          return v.lang.startsWith("en") && (v.name.includes("Samantha") || v.name.includes("Karen") || v.name.includes("Victoria") || v.name.includes("Daniel"));
        });
        if (preferred) u.voice = preferred;
        window.speechSynthesis.speak(u);
      } catch (e2) {}
    }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: "rgba(44, 36, 32, 0.55)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
    }} onClick={props.onClose}>
      <div style={{
        background: "linear-gradient(135deg, #fef8df, #fbf0c0)",
        maxWidth: 460, width: "100%",
        borderRadius: 16,
        padding: 24,
        border: "1.5px solid #d4a050",
        boxShadow: "0 16px 40px rgba(196,107,48,0.35)",
      }} onClick={function(e) { e.stopPropagation(); }}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8}}>
          <div style={{flex: 1}}>
            <span style={{
              fontSize: 10, padding: "2px 8px", borderRadius: 999,
              background: "#c08400", color: "#fff8e8", letterSpacing: 1, fontWeight: 700, textTransform: "uppercase"
            }}>⭐ 必背 · {info.pos || (data.cn === info.cn ? "单词" : "概念")}</span>
            <h3 style={{margin: "10px 0 4px", fontFamily: FONT_DISPLAY, fontSize: 26, color: HC.ink, letterSpacing: "-0.01em"}}>
              {word}
            </h3>
            <div style={{fontSize: 14, color: HC.inkLight, fontWeight: 600}}>{data.cn || info.cn}</div>
            {info.ipa && (
              <div style={{
                marginTop: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "4px 10px",
                background: "rgba(255,255,255,0.6)",
                borderRadius: 8,
                fontFamily: "Times, serif",
                fontSize: 14,
                color: HC.pinStroke
              }}>
                {info.ipa}
                <button onClick={playTTS} disabled={playing} style={{
                  background: playing ? "#ccc" : HC.accent,
                  color: "#fff8e8",
                  border: "none",
                  borderRadius: 999,
                  padding: "2px 10px",
                  fontSize: 12,
                  cursor: playing ? "default" : "pointer",
                  fontFamily: "inherit"
                }} title="播放发音">
                  {playing ? "🔊 播放中..." : "🔊 听发音"}
                </button>
              </div>
            )}
          </div>
          <button onClick={props.onClose} style={{
            background: "transparent", border: "none", fontSize: 22, cursor: "pointer",
            color: HC.inkLight, lineHeight: 1, padding: 4
          }}>✕</button>
        </div>

        {info.example && (
          <div style={{
            marginTop: 14, padding: "10px 12px",
            background: "rgba(255,255,255,0.55)",
            borderRadius: 10,
            fontSize: 13.5, lineHeight: 1.6,
            color: HC.text,
            borderLeft: "3px solid " + HC.pinFill
          }}>
            <div style={{fontFamily: FONT_DISPLAY, fontStyle: "italic", color: HC.ink}}>
              {info.example}
            </div>
            {info.exampleCn && (
              <div style={{fontSize: 12, marginTop: 4, opacity: 0.8}}>{info.exampleCn}</div>
            )}
          </div>
        )}

        {info.defEn && (
          <div style={{marginTop: 12, fontSize: 13, color: HC.text, lineHeight: 1.55}}>
            <div style={{fontWeight: 600, color: HC.ink, marginBottom: 2}}>定义</div>
            <div style={{marginBottom: 4, fontStyle: "italic"}}>{info.defEn}</div>
            <div style={{fontSize: 12.5, opacity: 0.85}}>{info.defCn}</div>
          </div>
        )}

        {info.untranslatable && (
          <div style={{
            marginTop: 12, padding: "8px 10px",
            background: "rgba(196,107,48,0.12)",
            borderRadius: 8,
            fontSize: 11.5,
            color: HC.pinStroke,
            fontStyle: "italic",
            borderLeft: "2px solid " + HC.accent
          }}>
            ⚠️ 这个词的中文翻译会扭曲它的真实意思，最好用英文 + 情境理解。
          </div>
        )}

        {/* 为什么必背 — 课标/考纲锚点（消除"凭感觉"的质疑） */}
        {info.sourceStandards && info.sourceStandards.length > 0 && (
          <div style={{
            marginTop: 12, padding: "10px 12px",
            background: "rgba(91, 141, 184, 0.10)",
            borderRadius: 10,
            fontSize: 12, lineHeight: 1.5,
            color: HC.text,
            borderLeft: "3px solid #5b8db8"
          }}>
            <div style={{fontWeight: 700, color: HC.ink, marginBottom: 6, fontSize: 11.5}}>
              📌 为什么必背
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: 4}}>
              {info.sourceStandards.map(function(s, i) {
                var meta = getSourceBadgeMeta(s.code);
                if (!meta) return null;
                var isHigh = s.emphasis === "high";
                return (
                  <div key={i} style={{display: "flex", alignItems: "center", gap: 6, fontSize: 11.5}}>
                    <span style={{
                      fontSize: 9, fontWeight: 700,
                      padding: "1px 6px",
                      background: meta.bg, color: "#fff8e8",
                      borderRadius: 3, letterSpacing: 0.3,
                      border: isHigh ? "1px solid #ffd700" : "none",
                      flexShrink: 0,
                    }}>{meta.label}</span>
                    <span style={{opacity: 0.85}}>{meta.title}{isHigh ? " · 高频考点" : ""}</span>
                  </div>
                );
              })}
            </div>
            <div style={{marginTop: 6, fontSize: 10, opacity: 0.7, fontStyle: "italic"}}>
              不是我们觉得重要 — 是课标 / 考纲点名要求
            </div>
          </div>
        )}

        <div style={{
          marginTop: 14, fontSize: 11, color: HC.inkLight,
          textAlign: "center", opacity: 0.7
        }}>
          这个词必须背 — 拼写测试一定会考。点页面任何地方关闭。
        </div>
      </div>
    </div>
  );
}

// ─── Term popup — 点击 glossary 名词时展示 ─────────────────────────
export function TermPopup(props) {
  var term = props.term;
  if (!term) return null;
  var entry = lookupTerm(term);
  if (!entry) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: "rgba(44, 36, 32, 0.55)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
    }} onClick={props.onClose}>
      <div style={{
        background: HC.parchment,
        maxWidth: 460, width: "100%",
        borderRadius: 16,
        padding: 22,
        border: "1px solid " + HC.parchmentLo,
        boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
      }} onClick={function(e) { e.stopPropagation(); }}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8}}>
          <div>
            <span style={{
              fontSize: 10, padding: "2px 8px", borderRadius: 999,
              background: HC.pinFill, color: "#fff8e8", letterSpacing: 1, fontWeight: 700, textTransform: "uppercase"
            }}>{entry.type}</span>
            <h3 style={{margin: "8px 0 2px", fontFamily: FONT_DISPLAY, fontSize: 20, color: HC.ink}}>{term}</h3>
            <div style={{fontSize: 13, color: HC.inkLight, fontWeight: 600}}>{entry.cn}</div>
          </div>
          <button onClick={props.onClose} style={{
            background: "transparent", border: "none", fontSize: 22, cursor: "pointer",
            color: HC.inkLight, lineHeight: 1, padding: 4
          }}>✕</button>
        </div>
        <div style={{fontSize: 13.5, color: HC.text, lineHeight: 1.65, marginTop: 10, whiteSpace: "pre-wrap"}}>
          {entry.brief}
        </div>
        {(entry.when || entry.where) && (
          <div style={{
            marginTop: 12, paddingTop: 10, borderTop: "1px dashed " + HC.parchmentLo,
            fontSize: 11, color: HC.inkLight, display: "flex", gap: 16, flexWrap: "wrap"
          }}>
            {entry.when && <span>📅 {entry.when}</span>}
            {entry.where && <span>📍 {entry.where}</span>}
          </div>
        )}
        <div style={{
          marginTop: 12, fontSize: 10, color: HC.textSec, fontStyle: "italic", opacity: 0.8
        }}>
          点页面任何地方关闭
        </div>
      </div>
    </div>
  );
}
