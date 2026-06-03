// ─── Conversation Stream + Source Card ─────────────────────────────
// 抽离自 pages/history.js（Day 4-5 重构 Stage 3）
//
// ConversationStream:
//   - 13 轮对话主流。AI / user 消息泡泡，史料卡触发，地图轮的"看地图"按钮
//   - 输入栏 (textarea + VoiceInputButton + 发送) + PEEL 引导 + Cmd+Enter 发送
//   - "继续 →" 按钮（AI 单方向轮）
//   - "开始记忆考核" 按钮（13 轮跑完）
//   - 自动滚动到底（双保险：scrollIntoView + window.scrollTo）
//
// SourceCard:
//   - 史料卡（C7 source / source-tang-code 触发），由 ConversationStream 内联渲染
//
// Props 接口（设计为可同时被 pages/history.js 和 AtlasLabPage embed mode 使用）：
//   topic, conversationLog, turnIndex, aiStreaming, aiThinking, error, userInput,
//   onInputChange, onSubmit, onAdvance, onStartMastery, onTermClick, onMustClick,
//   onJumpToMap
import React, { useEffect, useRef, useState } from 'react';
import { HC } from './theme';
import { renderBilingualText } from './bilingual';
import { VoiceInputButton } from '../VoiceInputButton';

// ─── Audio Player — VibeVoice TTS 一键朗读（5-4 加） ─────────────────
// 仅 EN mode + entry 是 prewritten + 对应音频文件存在时显示
// 路径：/audio/{topicId}/{lensId}/n{N}.wav（build-time 预生成）

// ⚡ 模块级 HEAD 缓存——避免切页面时重复探测同一 URL
// Map<src, true|false>
var __audioAvailableCache = new Map();

function AudioPlayer(props) {
  // props: { topicId, lensId, turnId, englishLevel }
  // ⚠️ 所有 hook 必须在顶部 unconditional——React Rules of Hooks
  var [playing, setPlaying] = useState(false);
  var [available, setAvailable] = useState(null);  // null = 未检测，true/false = 已检测
  var [progress, setProgress] = useState(0);
  var audioRef = useRef(null);
  var ttsActiveRef = useRef(false);  // 本实例是否正在用「设备语音」播

  // 计算 src(优先 MP3 — 文件 ~10x 小;若 .mp3 不存在 fallback .wav)
  var canShow = props.englishLevel === 'high' && props.topicId && props.lensId && typeof props.turnId !== 'undefined';
  var basePath = canShow ? '/audio/' + props.topicId + '/' + props.lensId + '/n' + props.turnId : null;
  // src 用动态决定:先尝试 .mp3,fallback .wav
  var srcMP3 = basePath ? basePath + '.mp3' : null;
  var srcWAV = basePath ? basePath + '.wav' : null;
  // 实际用的 src 在 useEffect 里根据 cache 决定;这里给 srcMP3 做主探测
  var src = srcMP3;

  // 实际可用的 src（先 mp3 探测，404 fallback wav）—— 在 state 里
  var [resolvedSrc, setResolvedSrc] = useState(null);

  // 设备语音兜底：无预生成文件时，用 Web Speech API 朗读 EN 文本（零生成/零存储/永远跟文字同步）
  var ttsSupported = typeof window !== 'undefined' && typeof window.speechSynthesis !== 'undefined';
  var enText = typeof props.enText === 'string' ? props.enText.trim() : '';
  var canTts = canShow && ttsSupported && enText.length > 0;

  // HEAD 检测文件存在；优先 .mp3 / fallback .wav；用模块级缓存避免重复
  useEffect(function () {
    if (!canShow || !srcMP3) {
      setAvailable(false);
      setResolvedSrc(null);
      return;
    }
    // 已检测过 mp3 —— 直接读缓存
    if (__audioAvailableCache.has(srcMP3)) {
      var mp3Ok = __audioAvailableCache.get(srcMP3);
      if (mp3Ok) {
        setAvailable(true);
        setResolvedSrc(srcMP3);
        return;
      }
      // mp3 不存在,试 wav cache
      if (__audioAvailableCache.has(srcWAV)) {
        var wavOk = __audioAvailableCache.get(srcWAV);
        setAvailable(wavOk);
        setResolvedSrc(wavOk ? srcWAV : null);
        return;
      }
    }
    if (available !== null && resolvedSrc !== null) return;

    // 先探 mp3
    fetch(srcMP3, { method: 'HEAD' })
      .then(function (r) {
        __audioAvailableCache.set(srcMP3, r.ok);
        if (r.ok) {
          setAvailable(true);
          setResolvedSrc(srcMP3);
          return null;
        }
        // mp3 不存在,fallback wav
        return fetch(srcWAV, { method: 'HEAD' });
      })
      .then(function (r) {
        if (!r) return;
        __audioAvailableCache.set(srcWAV, r.ok);
        setAvailable(r.ok);
        setResolvedSrc(r.ok ? srcWAV : null);
      })
      .catch(function () {
        __audioAvailableCache.set(srcMP3, false);
        __audioAvailableCache.set(srcWAV, false);
        setAvailable(false);
        setResolvedSrc(null);
      });
  }, [srcMP3, srcWAV, canShow]);

  // 监听全局暂停事件（其他 AudioPlayer 开播时停自己）
  useEffect(function () {
    function handler() {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setPlaying(false);
      }
      if (ttsActiveRef.current && typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        ttsActiveRef.current = false;
        setPlaying(false);
      }
    }
    window.addEventListener('audio-pause-all', handler);
    return function () { window.removeEventListener('audio-pause-all', handler); };
  }, []);

  // 卸载时彻底释放（pause + 清空 src 取消 in-flight 下载 + null）
  useEffect(function () {
    return function () {
      if (audioRef.current) {
        try {
          audioRef.current.pause();
          audioRef.current.src = '';     // 取消任何在下载的字节
          audioRef.current.load();        // 触发 abort
        } catch (e) { /* 忽略 */ }
        audioRef.current = null;
      }
      if (ttsActiveRef.current && typeof window !== 'undefined' && window.speechSynthesis) {
        try { window.speechSynthesis.cancel(); } catch (e) { /* 忽略 */ }
        ttsActiveRef.current = false;
      }
    };
  }, []);

  // englishLevel 切走 high（canShow 变 false）→ 控件隐藏，但要把还在播的设备语音也停掉
  useEffect(function () {
    if (!canShow && ttsActiveRef.current && typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      ttsActiveRef.current = false;
      setPlaying(false);
    }
  }, [canShow]);

  // 播放模式：'file' = 预生成高清语音存在 / 'tts' = 设备语音兜底 / null = 不显示按钮
  var mode = (available === true && resolvedSrc) ? 'file' : (available === false && canTts ? 'tts' : null);

  // ⚠️ 所有 hook 调完再做 conditional return
  if (!canShow) return null;
  if (available === null) return null;   // 探测中
  if (!mode) return null;                 // 既无预生成文件，也没法用设备语音兜底

  function playFile() {
    if (!resolvedSrc) return;
    if (!audioRef.current) {
      var a = new Audio();
      a.preload = 'metadata';
      a.src = resolvedSrc;
      a.addEventListener('ended', function () {
        setPlaying(false);
        setProgress(0);
      });
      a.addEventListener('timeupdate', function () {
        if (a.duration) setProgress(a.currentTime / a.duration);
      });
      audioRef.current = a;
    }
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      window.dispatchEvent(new CustomEvent('audio-pause-all'));
      audioRef.current.play();
      setPlaying(true);
    }
  }

  function playTts() {
    var synth = window.speechSynthesis;
    if (playing) {
      synth.cancel();
      ttsActiveRef.current = false;
      setPlaying(false);
      return;
    }
    window.dispatchEvent(new CustomEvent('audio-pause-all'));  // 先停别的播放器（此刻本实例还没开播，不会误停自己）
    synth.cancel();
    var voices = synth.getVoices() || [];
    var preferred = voices.find(function (v) {
      return v.lang && v.lang.indexOf('en') === 0 && /Samantha|Karen|Victoria|Daniel|Google US English/.test(v.name);
    }) || voices.find(function (v) { return v.lang === 'en-US'; })
      || voices.find(function (v) { return v.lang && v.lang.indexOf('en') === 0; });
    // 切成 ≤240 字的块（贪心按词打包，规避部分浏览器对长 utterance 的截断 bug；
    // 不靠句号分句——破折号/列表式长段没有 .!? 也能被切开）
    var words = enText.split(/\s+/).filter(Boolean);
    var chunks = [];
    var cur = '';
    words.forEach(function (w) {
      if (cur && (cur + ' ' + w).length > 240) { chunks.push(cur); cur = w; }
      else { cur = cur ? cur + ' ' + w : w; }
    });
    if (cur) chunks.push(cur);
    if (!chunks.length) chunks = [enText];
    var remaining = chunks.length;
    ttsActiveRef.current = true;
    setPlaying(true);
    chunks.forEach(function (chunk) {
      var u = new SpeechSynthesisUtterance(chunk.trim());
      u.lang = 'en-US';
      if (preferred) u.voice = preferred;
      u.rate = 0.95;
      u.onend = function () { remaining -= 1; if (remaining <= 0) { ttsActiveRef.current = false; setPlaying(false); } };
      u.onerror = function () { remaining -= 1; if (remaining <= 0) { ttsActiveRef.current = false; setPlaying(false); } };
      synth.speak(u);
    });
  }

  function togglePlay() { if (mode === 'file') playFile(); else playTts(); }

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 6,
      padding: '4px 10px',
      borderRadius: 999,
      background: playing ? HC.accent : 'rgba(0,0,0,0.04)',
      color: playing ? '#fff8e8' : HC.textSec,
      fontSize: 11,
      cursor: 'pointer',
      userSelect: 'none',
      fontFamily: 'inherit',
      transition: 'background 0.15s',
    }}
    onClick={togglePlay}
    title={playing ? '暂停' : (mode === 'file' ? '朗读 (高清语音)' : '朗读 (设备语音)')}>
      <span style={{ fontSize: 13 }}>{playing ? '⏸' : '🔊'}</span>
      <span>{playing ? '暂停' : '朗读'}</span>
      {mode === 'file' && playing && progress > 0 && (
        <span style={{
          display: 'inline-block',
          width: 30,
          height: 3,
          background: 'rgba(255,255,255,0.3)',
          borderRadius: 2,
          marginLeft: 4,
          overflow: 'hidden',
        }}>
          <span style={{
            display: 'block',
            width: Math.round(progress * 100) + '%',
            height: '100%',
            background: '#fff8e8',
            transition: 'width 0.2s',
          }} />
        </span>
      )}
    </div>
  );
}

// ─── Phase Divider — Story-First Pedagogy v3 视觉相位提示 ─────────
// 当 AI 节点 move 从 cosplay (hook/story) 跳到 synthesis/meta，
// 插入一个视觉 divider 让用户知道"已经跳出 cosplay，现在是 narrator 引导思考 / 反思"
function PhaseDivider(props) {
  var phase = props.phase;
  var config = phase === "synthesis"
    ? {
        icon: "🤔",
        title: "思考时间",
        subtitle: "现在跳出角色——回头看，问几个问题",
        bg: "rgba(95, 168, 160, 0.10)",     // 淡 teal — 凉色暗示理性
        border: "1px solid rgba(95, 168, 160, 0.35)",
        titleColor: "#4a8a82",
      }
    : phase === "meta"
    ? {
        icon: "✨",
        title: "收尾反思",
        subtitle: "走完这段历史 — 你带走什么",
        bg: "rgba(196, 107, 48, 0.08)",     // 淡橙 — 暖色收尾
        border: "1px solid rgba(196, 107, 48, 0.30)",
        titleColor: "#a85525",
      }
    : null;

  if (!config) return null;

  return (
    <div style={{
      margin: "20px 0 14px",
      padding: "12px 16px",
      background: config.bg,
      border: config.border,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}>
      <span style={{fontSize: 22}}>{config.icon}</span>
      <div>
        <div style={{
          fontSize: 13.5,
          fontWeight: 700,
          color: config.titleColor,
          marginBottom: 2,
        }}>
          {config.title}
        </div>
        <div style={{
          fontSize: 11.5,
          color: HC.textSec,
          lineHeight: 1.5,
        }}>
          {config.subtitle}
        </div>
      </div>
    </div>
  );
}

// ─── Progress Rail — 节点进度条（5-22 teach 重设计 / Package 1）──────
// 解决"无限滚动感"+ 缺方向感。按当前 lens 的节点数分段，phase 配色。
// 数据来自 effectiveTurns + turnIndex（纯派生，不存档）。每个 lens 独立计数
// （不显示 1/36，配合 inter-lens 断点）。
function phaseLabelCn(phase) {
  if (phase === "hook") return "开场";
  if (phase === "story") return "故事";
  if (phase === "synthesis") return "思考";
  if (phase === "meta") return "收尾";
  return "";
}
function ProgressRail(props) {
  var turns = props.turns || [];
  var total = turns.length;
  if (!total) return null;
  var current = Math.min(props.turnIndex, total - 1);
  var phaseColor = function(phase, reached) {
    if (!reached) return "rgba(60,44,26,0.10)";
    if (phase === "synthesis") return "#5fa8a0";  // teal — 理性
    if (phase === "meta") return "#c46b30";       // 橙 — 收尾
    return HC.accent;                              // hook/story — 暖色
  };
  var label = phaseLabelCn((turns[current] || {}).move);
  return (
    <div style={{ margin: "0 0 14px", padding: "0 2px" }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 11, color: HC.textSec, marginBottom: 5, fontWeight: 600,
      }}>
        <span>第 {current + 1} / {total} 节{label ? " · " + label : ""}</span>
        <span style={{ opacity: 0.6 }}>{Math.round(((current + 1) / total) * 100)}%</span>
      </div>
      <div style={{ display: "flex", gap: 3 }}>
        {turns.map(function(t, i) {
          return (
            <span key={i} style={{
              flex: 1, height: 4, borderRadius: 2,
              background: phaseColor(t.move, i <= current),
              transition: "background 0.35s",
            }} />
          );
        })}
      </div>
    </div>
  );
}

// ─── Takeaway Card — 每节"带走一句"（5-22 teach 重设计 / Package 1）──
// 把埋在数据里的 themeCn/themeEn（Schema B）或 engagementHook（Schema A）
// surfacing 成节点结束的落点 beat。只在当前节点 AI 说完、等点"继续"时显示
// （input 节点的 hook 已经是 inputPrompt，不重复）。纯读 currentTurn，不存档。
// engagementHook 有两种形态：字符串，或 {cn,en} 对象。统一取出当前语言的字符串，
// 避免把对象直接塞进 JSX（React 会崩"Objects are not valid as a React child"）。
function pickHookText(val, isEn) {
  if (!val) return null;
  if (typeof val === "string") return val;
  if (typeof val === "object") return isEn ? (val.en || val.cn) : (val.cn || val.en);
  return null;
}
function TakeawayCard(props) {
  var turn = props.turn;
  if (!turn) return null;
  var isEn = props.englishLevel === "high";
  var theme = isEn ? (turn._themeEn || turn._themeCn) : (turn._themeCn || turn._themeEn);
  var text = theme || pickHookText(turn._hook, isEn);
  if (!text) return null;
  var isTheme = !!theme;
  return (
    <div style={{
      margin: "14px 0 2px",
      padding: "11px 14px",
      background: isTheme ? "rgba(196,107,48,0.07)" : "rgba(95,168,160,0.09)",
      border: "1px solid " + (isTheme ? "rgba(196,107,48,0.22)" : "rgba(95,168,160,0.28)"),
      borderRadius: 12,
      display: "flex",
      alignItems: "flex-start",
      gap: 9,
    }}>
      <span style={{ fontSize: 16, lineHeight: 1.3 }}>{isTheme ? "💡" : "🤔"}</span>
      <div>
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: 0.3,
          color: isTheme ? "#a85525" : "#4a8a82", marginBottom: 3, textTransform: "uppercase",
        }}>
          {isTheme ? (isEn ? "One line to keep" : "这一节带走一句") : (isEn ? "Think about it" : "想一想")}
        </div>
        <div style={{ fontSize: 13, color: HC.text, lineHeight: 1.55 }}>{text}</div>
      </div>
    </div>
  );
}

// ─── Source Bridge Card — 双 lens 一手史料对读（5-22 / Package 3）──────
// AP HIPP sourcing 练习：把同一事件的两个 lens 原文摘录并排，让学生做
// who / purpose / point-of-view / limitation 判断。直接命中 DBQ Point 4。
function ExcerptCol(props) {
  var ex = props.excerpt;
  var isEn = props.isEn;
  // 史料类型徽章——区分一手史料 vs 演绎，本身就是 sourcing 技能的一部分
  var kind = ex.kind || 'primary';
  var badge = kind === 'dramatization'
    ? { text: isEn ? '✎ Dramatization' : '✎ 演绎', bg: 'rgba(122,92,168,0.12)', fg: '#6b53a8' }
    : { text: isEn ? '📜 Primary source' : '📜 一手史料', bg: 'rgba(74,138,130,0.14)', fg: '#3d7a72' };
  return (
    <div style={{
      flex: "1 1 240px", minWidth: 0,
      padding: "12px 14px",
      background: "#fffdf8",
      border: "1px solid rgba(196,107,48,0.22)",
      borderRadius: 12,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: "#a85525" }}>{props.label}</span>
        <span style={{
          fontSize: 9.5, fontWeight: 700, padding: "1px 6px", borderRadius: 999,
          background: badge.bg, color: badge.fg,
        }}>{badge.text}</span>
      </div>
      <div style={{ fontSize: 11, color: HC.textSec, marginBottom: 8, lineHeight: 1.45 }}>
        {isEn ? ex.whoEn : ex.whoCn}
      </div>
      <div style={{
        fontSize: 13.5, color: HC.text, lineHeight: 1.6,
        fontStyle: "italic", borderLeft: "3px solid rgba(196,107,48,0.35)", paddingLeft: 10,
      }}>
        “{isEn ? ex.quoteEn : ex.quoteCn}”
      </div>
      <div style={{ fontSize: 10.5, color: HC.textSec, marginTop: 7, opacity: 0.8 }}>
        — {isEn ? ex.sourceEn : ex.sourceCn}
      </div>
    </div>
  );
}
function SourceBridgeCard(props) {
  var b = props.bridge;
  if (!b) return null;
  var isEn = props.englishLevel === "high";
  return (
    <div style={{
      margin: "10px 0 14px",
      padding: "14px 16px",
      background: "rgba(196,107,48,0.06)",
      border: "1px solid rgba(196,107,48,0.30)",
      borderRadius: 14,
    }}>
      {/* 5-22 修复：cosplay→分析的相位提示 — 缓解"你就是角色"到"把角色当史料读"的鞭打感 */}
      <div style={{
        fontSize: 11.5, color: "#6b53a8", fontWeight: 600, lineHeight: 1.5,
        marginBottom: 10, paddingBottom: 9, borderBottom: "1px dashed rgba(122,92,168,0.30)",
      }}>
        🔍 {isEn
          ? "Step out of the story now. Read the voice you were just living as — and another — as historical sources."
          : "现在跳出角色。把你刚才扮演的那个人——还有另一个人——当成两份史料来读。"}
      </div>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: 0.3, color: "#a85525",
        textTransform: "uppercase", marginBottom: 3,
      }}>
        📜 {isEn ? "Read the sources — same event, two voices" : "一手史料对读 —— 同一件事，两个人"}
      </div>
      <div style={{ fontSize: 12, color: HC.textSec, marginBottom: 12, lineHeight: 1.5 }}>
        {isEn ? b.eventEn : b.eventCn}
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
        <ExcerptCol excerpt={b.excerptA} isEn={isEn} label={isEn ? "Source A" : "史料 A"} />
        <ExcerptCol excerpt={b.excerptB} isEn={isEn} label={isEn ? "Source B" : "史料 B"} />
      </div>
      <div style={{
        padding: "10px 12px", background: "rgba(95,168,160,0.10)",
        border: "1px solid rgba(95,168,160,0.28)", borderRadius: 10,
        fontSize: 12.5, color: HC.text, lineHeight: 1.6,
      }}>
        <span style={{ fontWeight: 700, color: "#4a8a82", marginRight: 4 }}>
          {isEn ? "Your turn —" : "轮到你 ——"}
        </span>
        {isEn ? b.promptEn : b.promptCn}
      </div>
    </div>
  );
}

// ─── Source Card（史料卡） ─────────────────────────────────────────
export function SourceCard(props) {
  var src = props.source;
  if (!src) return null;
  return (
    <div className="source-card">
      <div className="src-title">📜 {src.title.cn} · {src.title.en}</div>
      <div className="src-en">{src.enSimplified || src.en}</div>
      <div className="src-cn">{src.cnGloss}</div>
      {src.keyTerms && src.keyTerms.length > 0 && (
        <div className="key-terms">
          {src.keyTerms.map(function(t, i) {
            return (
              <span key={i} className="term" title={t.cn + " · " + t.etym}>
                {t.word} → {t.cn}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Conversation Stream ───────────────────────────────────────────
// ─── Learning Receipt 卡（学习证据）─────────────────────────────────
// docs/HISTORY_LEARNING_RECEIPT_DESIGN.md：lens 走完最后一节、进 mastery 前留 4 件证据。
// 软门：填 ≥1 项即可提交；「先跳过」也放行（记 skipped:true，不挡 mastery）。
// 不鸡汤、人话、P8.1：引导问句全大白话，无 fact-anchor 等术语。
function LearningReceiptCard(props) {
  var isEn = props.englishLevel === "high";
  var ex = props.existingReceipt || {};
  var [fact, setFact] = useState((ex.factAnchor && ex.factAnchor.text) || "");
  var [eng, setEng] = useState((ex.englishExpr && ex.englishExpr.en) || "");

  var filledCount = [fact, eng].filter(function (s) { return s && s.trim(); }).length;
  var canSubmit = filledCount >= 1;

  // 5-26 (Codex 复核 + 用户反馈): 4 题 → 2 题口语化, 删 cause/persp (元认知术语孩子看不懂);
  // 占位例保持 topic-neutral, 不绑定具体 topic。
  var fields = [
    { key: "fact", val: fact, set: setFact,
      q: isEn ? "One detail you'll still remember tomorrow?" : "刚才这一段，你记到现在的一个细节是 ___",
      ph: isEn ? "a year, a name, or one sentence" : "一个年份 / 一个名字 / 一句话都行" },
    { key: "eng", val: eng, set: setEng,
      q: isEn ? "Say your thought in one line of English — short, mistakes are fine." : "用一句英文说说你的想法 —— 短句也行，写错没关系。",
      ph: isEn ? "e.g. I think Su Shi was actually free in exile." : "例：I think Su Shi was actually free in exile." },
  ];

  var submit = function () {
    // 旧 schema 兼容: causalClaim/perspectiveLimit 仍以空字符串占位发出, 避免下游 reader 崩
    props.onSubmit({
      skipped: false,
      lensTitle: props.lensTitle || null,
      completedTurnCount: props.completedTurnCount || 0,
      factAnchor: { text: fact.trim() },
      causalClaim: { text: "" },
      perspectiveLimit: { text: "" },
      englishExpr: { en: eng.trim(), pushedToVocab: false },
    });
  };
  var skip = function () {
    props.onSubmit({ skipped: true, lensTitle: props.lensTitle || null, completedTurnCount: props.completedTurnCount || 0 });
  };

  return (
    <div className="continue-bar" style={{ flexDirection: "column", gap: 14, padding: "20px 0" }}>
      <div style={{ width: "100%", maxWidth: 560, margin: "0 auto", background: HC.card, border: "1px solid " + HC.border, borderRadius: 14, padding: "18px 18px 16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: HC.accent, marginBottom: 4 }}>
          {isEn ? "This pass is done — leave a hook" : "这一遍看完了 — 留个钩子"}
        </div>
        <div style={{ fontSize: 12.5, color: HC.textSec, marginBottom: 14, lineHeight: 1.5 }}>
          {isEn ? "Two quick lines. Short answers, Chinese or English mixed — all fine." : "两句话就好。短答、中英混写都行，写错也没关系。"}
        </div>
        {fields.map(function (f) {
          return (
            <div key={f.key} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 13, color: HC.text, marginBottom: 5, lineHeight: 1.45 }}>{f.q}</div>
              <textarea
                value={f.val}
                onChange={function (e) { f.set(e.target.value); }}
                placeholder={f.ph}
                rows={2}
                style={{ width: "100%", boxSizing: "border-box", fontSize: 14, lineHeight: 1.5, padding: "8px 10px", border: "1px solid " + HC.border, borderRadius: 9, resize: "vertical", fontFamily: "inherit", background: "#fff" }}
              />
            </div>
          );
        })}
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 6, flexWrap: "wrap" }}>
          <button className="continue-btn" disabled={!canSubmit}
            style={{ background: canSubmit ? HC.accent : "rgba(0,0,0,0.18)", fontSize: 14, padding: "11px 28px", cursor: canSubmit ? "pointer" : "default" }}
            onClick={submit}>
            {isEn ? "Submit — see review notes →" : "提交，看考点笔记 →"}
          </button>
          <button onClick={skip}
            style={{ background: "transparent", border: "none", color: HC.textSec, fontSize: 12.5, textDecoration: "underline", cursor: "pointer" }}>
            {isEn ? "Skip for now" : "先跳过"}
          </button>
          {!canSubmit && (
            <span style={{ fontSize: 11.5, color: HC.textSec }}>{isEn ? "Leave at least one line." : "至少留一条。"}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function ConversationStream(props) {
  var topic = props.topic;
  var turnIndex = props.turnIndex;
  var log = props.conversationLog;
  var endRef = useRef(null);
  var [receiptSubmitted, setReceiptSubmitted] = useState(false);

  // 强制 auto-scroll — 双保险：scrollIntoView + window.scrollTo 兜底
  useEffect(function() {
    var doScroll = function() {
      if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
      try {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      } catch (e) {}
    };
    doScroll();
    var t1 = setTimeout(doScroll, 200);
    var t2 = setTimeout(doScroll, 600);
    return function() { clearTimeout(t1); clearTimeout(t2); };
  }, [log.length, props.aiStreaming, props.aiThinking, turnIndex]);

  // 完成所有轮？
  // Story-First Pedagogy 桥接：
  //   优先用 props.effectiveTurns（pages/history.js 通过 getEffectiveTurns 注入）
  //   fallback 到 topic.conversationTurns（向后兼容 — 如果 host 还没传 effectiveTurns）
  var turns = props.effectiveTurns || topic.conversationTurns || [];
  var allDone = turnIndex >= turns.length;
  var currentTurn = !allDone ? turns[turnIndex] : null;

  // 当前 AI 轮已经流完了？
  var currentAILogged = currentTurn && log.find(function(e) {
    return e.turn === currentTurn.n && e.role === "ai";
  });

  // 是否在等用户输入：(a) 是 user 占位轮 OR (b) 是 AI 轮已说完且 expectsInput
  var awaitingUserInput = currentTurn && (
    currentTurn.role === "user" ||
    (currentTurn.expectsInput && currentAILogged)
  );

  // 是否当前 AI 轮已完成显示（用于显示"继续"按钮）
  var currentAIDone = !awaitingUserInput && currentAILogged;

  return (
    <div>
      {/* 5-26 (用户反馈): 删除「累了听就好」按钮 + tired banner — 体验冗余 */}
      {/* 5-22 Package 1: 节点进度条 — 方向感 + 消除无限滚动感 */}
      {!allDone && <ProgressRail turns={turns} turnIndex={turnIndex} />}
      <div className="conv-stream" id="conv-anchor">
        {log.map(function(entry, i) {
          // 史料卡（C7：source / source-tang-code 都触发）
          var isSourceTurn = entry.role === "ai" && (entry.move === "source" || entry.move === "source-tang-code");
          var sourceCard = isSourceTurn ? (
            <SourceCard key={"src-" + i} source={topic.primarySources[0]} />
          ) : null;

          if (entry.role === "user") {
            return (
              <div key={i} className="bubble-row user">
                <div className="bubble user">{entry.content}</div>
                <div className="avatar" style={{background: HC.accentLight}}>🙂</div>
              </div>
            );
          }
          // AI bubble
          var isGeoTurn = entry.move === "geo";

          // ─── Phase divider 检测（Story-First Pedagogy v3）───
          // 当 AI 节点 move 从 hook/story 跳到 synthesis 或 meta——
          // 在前面插一个视觉 divider 提示用户："已经跳出 cosplay，现在是反思 / 思考"
          var prevAiEntry = null;
          for (var pi = i - 1; pi >= 0; pi--) {
            if (log[pi].role === "ai") { prevAiEntry = log[pi]; break; }
          }
          var prevPhase = prevAiEntry ? prevAiEntry.move : null;
          var phaseDivider = null;
          if ((entry.move === "synthesis" && prevPhase !== "synthesis") ||
              (entry.move === "meta" && prevPhase !== "meta")) {
            phaseDivider = (
              <PhaseDivider key={"div-" + i} phase={entry.move} />
            );
          }

          return (
            <div key={i}>
              {phaseDivider}
              <div className="bubble-row ai">
                <div className="avatar">🦉</div>
                <div className={"bubble ai " + (entry.isFallback ? "fallback" : "") + (entry.move === "synthesis" || entry.move === "meta" ? " analytical" : "")}>
                  {renderBilingualText(entry.content, { topic: topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick })}
                  {/* 5-4: VibeVoice 一键朗读（仅 EN mode + prewritten + MP3 存在）*/}
                  {entry._prewritten && (
                    <AudioPlayer
                      topicId={props.topicId}
                      lensId={props.lensId}
                      turnId={entry.turn}
                      englishLevel={props.englishLevel}
                      enText={entry.content}
                    />
                  )}
                </div>
              </div>
              {/* 5-26 (Codex 复核): 删除「我没懂」hint — entry.turn 在 storyboard 里是字符串, */}
              {/* 减 1 = NaN, hintByTurn[NaN] 永远 undefined → 实际从未显示过 (dead code 已删) */}
              {/* 地图轮 — 加快速跳到地图区域的链接（Winston review #2） */}
              {isGeoTurn && (
                <div className="bubble-row ai" style={{marginTop: 4, marginLeft: 40}}>
                  <button
                    onClick={function() {
                      if (props.onJumpToMap) props.onJumpToMap();
                    }}
                    style={{
                      background: HC.accent,
                      color: "#fff8e8",
                      border: "none",
                      borderRadius: 999,
                      padding: "8px 16px",
                      fontSize: 12.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      boxShadow: "0 2px 8px rgba(196,107,48,0.3)",
                    }}
                  >
                    📍 现在去看地图 ↑
                  </button>
                </div>
              )}
              {sourceCard}
              {/* 5-26 (Codex P0-2): sourcing bridge 从 input-bar 移到 AI bubble 下方作只读卡 — */}
              {/* 输入门 ≤2 节流后 N10 bridge 的 expectsInput=false, 但 _sourcingBridge 仍生成。*/}
              {/* 之前只在 awaitingUserInput=true 时渲染, 节流后永远不显示 → 史料对读教学锚丢失。*/}
              {/* 现在 unconditional 渲染:学生仍能看到「同一件事两个视角」史料对读, 只是不强制输入。 */}
              {(function() {
                var matchTurn = turns.find(function(tn) { return tn.n === entry.turn; });
                if (matchTurn && matchTurn._sourcingBridge) {
                  return <SourceBridgeCard bridge={matchTurn._sourcingBridge} englishLevel={props.englishLevel} />;
                }
                return null;
              })()}
            </div>
          );
        })}

        {/* AI streaming */}
        {props.aiStreaming && (
          <div className="bubble-row ai">
            <div className="avatar">🦉</div>
            <div className="bubble ai">{renderBilingualText(props.aiStreaming, { topic: topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick })}<span style={{opacity: 0.5}}>▌</span></div>
          </div>
        )}

        {/* AI thinking */}
        {props.aiThinking && !props.aiStreaming && (
          <div className="bubble-row ai">
            <div className="avatar">🦉</div>
            <div className="bubble ai">
              <span className="thinking-dots"><span></span><span></span><span></span></span>
            </div>
          </div>
        )}

        {props.error && <div className="error-banner">{props.error}</div>}

        <div ref={endRef}></div>
      </div>

      {/* ── 输入栏 / 继续按钮 / mastery gate 入口 ── */}
      {awaitingUserInput && (
        <div className="input-bar">
          {/* 5-26 (Codex P0-2): sourcing bridge 已移到 AI bubble 下方作只读卡 — 见 L681+ */}
          {/* 5-22 Package 2: N6 检索门 — 跟 synthesis/meta 真问题视觉区分 */}
          {currentTurn._retrievalGate && (
            <div style={{
              marginBottom: 8, padding: "8px 12px",
              background: "rgba(122,92,168,0.10)",
              border: "1px solid rgba(122,92,168,0.30)",
              borderRadius: 10, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ fontSize: 17 }}>🧠</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#6b53a8" }}>
                快速回想 —— 不评分，就是帮你记住
              </span>
            </div>
          )}
          {/* 5-26 (Codex P0-2): bridge 移到 AI bubble 下方后, input-bar 总是显示 prompt(原来在 bridge 内有 prompt 自带, 现在 input-bar 这个 prompt 不再冗余) */}
          {true && (
            <div className="prompt">{pickHookText(currentTurn.inputPrompt, props.englishLevel === "high") || "你的回答"}</div>
          )}

          {/* PEEL 引导（Winston review #4：训练 US 学校的回答框架） */}
          <details className="peel-hint" style={{marginBottom: 6}}>
            <summary style={{
              cursor: "pointer", fontSize: 11.5, color: HC.teal, fontWeight: 600, userSelect: "none"
            }}>💡 想答得像 8 年级 essay？试试 PEEL 框架（点开看）</summary>
            <div style={{
              marginTop: 6, padding: "8px 10px",
              background: HC.tealLight, borderRadius: 8, fontSize: 11.5, lineHeight: 1.6,
              color: HC.text
            }}>
              <strong>P</strong>oint — 你的观点是什么？(I think...)<br/>
              <strong>E</strong>vidence — 用什么证据？(Because... / For example...)<br/>
              <strong>E</strong>xplanation — 为什么这能撑住观点？(This shows that...)<br/>
              <strong>L</strong>ink — 跟今天主题怎么连？(So this matters because...)<br/>
              <span style={{opacity: 0.75, fontStyle: "italic"}}>多用英文，AI 会给更高的认可。短的纯中文也行 — 但慢慢练 P+E 你下次 seminar 就能挂得住。</span>
            </div>
          </details>

          {/* 5-26 (用户反馈): 删除「累了听就好 / 我没懂 / 跳过」三个按钮 — 实测意义不大且 */}
          {/*   增加视觉密度 (创始人原话「似乎没有意义」)。tiredMode/hintByTurn/onEscapeAction */}
          {/*   props 暂时保留 pass-through, 后续 [topicId].js 清 state 时一并去除。 */}

          <div className="row" style={{alignItems: "flex-end"}}>
            <textarea
              value={props.userInput}
              onChange={function(e) { props.onInputChange(e.target.value); }}
              placeholder="试试 P (观点) + E (因为...): I think... because..."
              onKeyDown={function(e) {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) props.onSubmit();
              }}
            />
            <VoiceInputButton
              size={44}
              style={{margin: "0 2px"}}
              onTranscript={function(text) {
                props.onInputChange(text);
              }}
            />
            <button
              className="submit"
              disabled={!props.userInput.trim()}
              onClick={props.onSubmit}
            >发送</button>
          </div>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginTop: 4, fontSize: 11, color: HC.textSec
          }}>
            <span title="爸妈看不到这段聊天，他们只能看到学习统计" style={{color: HC.green || "#6a8e57", fontWeight: 500}}>
              🔒 这段聊天爸妈看不到
            </span>
            <span>
              <kbd style={{padding: "1px 4px", background: HC.tealLight, borderRadius: 3, fontSize: 10}}>Cmd</kbd>+
              <kbd style={{padding: "1px 4px", background: HC.tealLight, borderRadius: 3, fontSize: 10}}>Enter</kbd> 发送
            </span>
          </div>
        </div>
      )}

      {/* 5-22 Package 1: "带走一句"卡片 — 节点落点 beat（仅非 input 节点）*/}
      {currentAIDone && currentTurn && !currentTurn.expectsInput && (
        <TakeawayCard turn={currentTurn} englishLevel={props.englishLevel} />
      )}

      {currentAIDone && currentTurn && !currentTurn.expectsInput && !currentTurn.autoAdvance && (
        <div className="continue-bar">
          <button className="continue-btn" onClick={props.onAdvance}>继续 →</button>
        </div>
      )}

      {allDone && (
        // Step 8: 「试看 5 分钟」样章走完 —— 不进收据/考核/完成, 直接弹升级 CTA (最高优先级分支)。
        props.samplePreview ? (
          <div className="continue-bar" style={{flexDirection: "column", gap: 12, padding: "24px 0"}}>
            <div style={{fontSize: 15, color: HC.accent, fontWeight: 800, textAlign: "center"}}>
              🎬 5 分钟样章看完啦
            </div>
            <div style={{fontSize: 13, color: HC.textSec, textAlign: "center", lineHeight: 1.7, maxWidth: 460}}>
              这只是开头{props.sampleFullCount ? ("（完整课程共 " + props.sampleFullCount + " 节对话）") : ""}。<br/>
              升级 Pro 解锁完整课程：苏格拉底式深度对话 + 考点笔记 + 记忆考核，把这门课真正学透。
            </div>
            <button
              className="continue-btn"
              style={{background: HC.accent, fontSize: 15, padding: "14px 36px"}}
              onClick={props.onSampleUpgrade}
            >
              升级 Pro 看完整课程 →
            </button>
          </div>
        ) : (props.onSubmitReceipt && !props.existingReceipt && !receiptSubmitted) ? (
          <LearningReceiptCard
            englishLevel={props.englishLevel}
            existingReceipt={props.existingReceipt}
            lensTitle={props.lensTitle}
            completedTurnCount={turns.length}
            onSubmit={function (payload) {
              // Step 4b-3 (Codex round3 P2-e): host 返回 false = 降级拦截, 未保存 → **不**标已交,
              // 保留收据表单 (否则表单消失但没存, 恢复后无收据却能进 mastery)。
              var ok = true;
              try { ok = props.onSubmitReceipt(payload); } catch (e) {}
              if (ok !== false) setReceiptSubmitted(true);
            }}
          />
        ) : (props.previewMode && !(topic && topic.masteryChecks && topic.masteryChecks.required && topic.masteryChecks.required.length)) ? (
          // Gate 3 hidden preview 且无题库（notebook 缺失 fallback）：跳过 mastery，直接 preview 完成。
          // 有 notebook 派生题库的 preview topic 走下面正常 mastery 关。
          <div className="continue-bar" style={{flexDirection: "column", gap: 10, padding: "20px 0"}}>
            <div style={{fontSize: 14, color: HC.accent, fontWeight: 700, textAlign: "center"}}>
              ✓ 这一遍完成（Gate 3 预览）
            </div>
            <div style={{fontSize: 12.5, color: HC.textSec, textAlign: "center", lineHeight: 1.6, maxWidth: 460}}>
              这是上线前的内容试跑：对话 + 学习收据已走完，收据已记录。<br/>
              （记忆考核题库还没做，正式上线版才有。）
            </div>
          </div>
        ) : (
          <div className="continue-bar" style={{flexDirection: "column", gap: 12, padding: "20px 0"}}>
            <div style={{fontSize: 13, color: HC.textSec, textAlign: "center"}}>
              全部走完 — 先翻一下复习笔记，再进考核。<br/>
              📒 8 张考点卡 + ★ 频率 — 心里有数再考。
            </div>
            <button className="continue-btn" style={{background: HC.accent, fontSize: 15, padding: "14px 36px"}} onClick={props.onStartMastery}>
              看考点笔记 →
            </button>
          </div>
        )
      )}
    </div>
  );
}
