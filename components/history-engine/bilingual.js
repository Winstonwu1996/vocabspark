// ─── 双语文本渲染 + 必背词 chip + 英文短语 tap-to-translate ──────────
// 抽离自 pages/history.js（Day 4-5 重构 Stage 2）
//
// 职责：
//   - renderBilingualText: AI 文本里识别 ⭐ 必背词 / glossary 名词 / 英文短语，
//     给它们配上 chip / underline / popup 入口
//   - MustMemorizeChip: 金色高亮可点的必背词 chip（含 IPA + TTS 入口）
//   - EnglishTapPhrase: 灰色虚线下划线的英文短语，点一下出中文翻译
//   - findMustMemorizeData: 从 topic 里找必背词的元数据（IPA/example）
//
// 渲染优先级（防止重叠）：
//   1. ⭐**word**(中文) — AI 显式标记的必背词 → 金色 chip
//   2. auto-detected 必背词（vocab/concepts） → 金色 chip
//   3. glossary terms (人物/地名/概念) → 蓝色虚线下划线
//   4. 普通 **word** 加重
//   5. 英文短语 (≥2 单词) → 灰色虚线下划线，点出翻译
import React, { useState } from 'react';
import { HC } from './theme';
import { findMustMemorizeHits } from '../../lib/history-topics';
import { findGlossaryHits } from '../../lib/history-glossary';
import { findEnglishPhrases, translatePhrase, getCachedTranslation } from '../../lib/history-translate';

// ─── 帮助：从 topic 中找 must-memorize 数据 ─────────────────────────
export function findMustMemorizeData(topic, word) {
  if (!topic || !topic.mustMemorize) return null;
  var lower = word.toLowerCase().replace(/s$/, ""); // 简单去复数
  var v = (topic.mustMemorize.vocab || []).find(function(x) { return x.word.toLowerCase() === lower || x.word.toLowerCase() === word.toLowerCase(); });
  if (v) return v;
  var c = (topic.mustMemorize.concepts || []).find(function(x) { return x.en.toLowerCase() === word.toLowerCase(); });
  if (c) return Object.assign({}, c, { word: c.en, cn: c.cn });
  return null;
}

// ─── 必背词来源锚点（消除"凭感觉筛词"的质疑）─────────────────────
// CA = California HSS Standards (加州历史社会科课标，学区 quiz 直接来源)
// AP = AP World History (College Board AP 进阶/SAT II 关键术语)
// textbook = 该年级课本 glossary（McGraw-Hill / Holt 7 年级）
// emphasis: 'high' = 课标高频考点，UI 角标加金色边框
export function getSourceBadgeMeta(code) {
  if (!code) return null;
  if (code.indexOf("CA-HSS") === 0) {
    var grade = code.match(/CA-HSS-(\d+)/);
    return { label: "CA " + (grade ? grade[1] : ""), bg: "#5b8db8", title: "加州 " + (grade ? grade[1] : "") + " 年级历史社会科课标 " + code.replace("CA-HSS-", "") + " 点名要求" };
  }
  if (code.indexOf("AP-") === 0) {
    return { label: "AP", bg: "#9b2c2c", title: "AP 考纲（College Board）关键术语：" + code };
  }
  if (code.indexOf("textbook") === 0) {
    return { label: "课本", bg: "#22a06b", title: "课本 glossary 收录（年级公立学校常考）" };
  }
  return { label: code.slice(0, 3).toUpperCase(), bg: "#666", title: code };
}

// ─── 多个来源的小角标群（chip 上紧凑展示）─────────────────────────
function SourceBadges(props) {
  var standards = props.standards || [];
  if (standards.length === 0) return null;
  var compact = props.compact;
  return (
    <span style={{display: "inline-flex", gap: 2, marginLeft: 3, verticalAlign: "middle"}}>
      {standards.slice(0, 3).map(function(s, i) {
        var meta = getSourceBadgeMeta(s.code);
        if (!meta) return null;
        var isHigh = s.emphasis === "high";
        return (
          <span key={i} style={{
            fontSize: compact ? 7.5 : 8.5,
            fontWeight: 700,
            padding: compact ? "0px 3px" : "1px 4px",
            background: meta.bg,
            color: "#fff8e8",
            borderRadius: 3,
            letterSpacing: 0.3,
            lineHeight: 1.3,
            border: isHigh ? "1px solid #ffd700" : "none",
            boxShadow: isHigh ? "0 0 3px rgba(255,215,0,0.5)" : "none",
          }} title={meta.title + (isHigh ? "（高频考点）" : "")}>{meta.label}</span>
        );
      })}
    </span>
  );
}

// ─── Must-Memorize Chip ─────────────────────────────────────────────
export function MustMemorizeChip(props) {
  var word = props.word;
  var cn = props.cn;
  var data = props.data;
  var compact = props.compact;
  var autoDetected = props.autoDetected;
  var standards = data && data.sourceStandards;

  // hover title 列出所有来源锚点（让用户知道为什么这个词必背）
  var sourceTitle = "";
  if (standards && standards.length > 0) {
    sourceTitle = " · 来自 " + standards.map(function(s) {
      var m = getSourceBadgeMeta(s.code);
      return m ? m.label : s.code;
    }).join(" + ");
  }

  return (
    <span
      onClick={function(e) {
        e.stopPropagation();
        if (props.onClick) props.onClick({ word: word, cn: cn, data: data });
      }}
      style={{
        display: "inline-block",
        margin: "1px 2px",
        padding: compact ? "0 6px" : "1px 8px 1px 6px",
        background: autoDetected
          ? "linear-gradient(135deg, #fef8df, #fde9b3)"
          : "linear-gradient(135deg, #fef3d2, #fbe8a8)",
        border: "1px solid " + (autoDetected ? "#e0b85a" : "#d4a050"),
        borderRadius: 6,
        fontSize: compact ? "0.96em" : "0.95em",
        fontWeight: 600,
        color: HC.pinStroke,
        whiteSpace: "nowrap",
        cursor: "pointer",
      }}
      title={"必考 ⭐ — " + cn + (data && data.ipa ? " · " + data.ipa : "") + sourceTitle + " · 点查详情"}
    >
      {!compact && <span>⭐</span>}
      <strong style={{margin: compact ? "0" : "0 3px"}}>{word}</strong>
      {!compact && cn && (
        <span style={{fontSize: "0.82em", opacity: 0.75, fontWeight: 400}}>{cn}</span>
      )}
      {compact && <sup style={{fontSize: 9, marginLeft: 1, color: "#c08400"}}>⭐</sup>}
      {standards && <SourceBadges standards={standards} compact={compact} />}
    </span>
  );
}

// ─── English Phrase Tap-to-Translate（Achieve3000 式覆盖）─────────────
export function EnglishTapPhrase(props) {
  var phrase = props.phrase;
  var [translation, setTranslation] = useState(getCachedTranslation(phrase));
  var [loading, setLoading] = useState(false);
  var [show, setShow] = useState(false);

  var handleTap = async function(e) {
    e.stopPropagation();
    if (show) { setShow(false); return; }
    setShow(true);
    if (!translation) {
      setLoading(true);
      var cn = await translatePhrase(phrase);
      setTranslation(cn);
      setLoading(false);
    }
  };

  return (
    <span style={{display: "inline"}}>
      <span
        onClick={handleTap}
        style={{
          background: show ? "rgba(74,109,140,0.10)" : "transparent",
          borderBottom: show ? "1px solid " + HC.teal : "1px dotted rgba(74,109,140,0.35)",
          cursor: "pointer",
          paddingBottom: 1,
          transition: "all 0.15s",
          color: show ? HC.teal : "inherit",
        }}
        title="点查中文"
      >{phrase}</span>
      {show && (
        <span style={{
          display: "inline-block",
          margin: "0 2px",
          padding: "2px 8px",
          background: "#e8f0f5",
          color: HC.teal,
          borderRadius: 4,
          fontSize: "0.86em",
          fontStyle: "italic",
          whiteSpace: "normal",
          border: "1px solid " + HC.teal,
        }}>
          {loading ? "..." : translation || "..."}
          <span
            onClick={function(e) { e.stopPropagation(); setShow(false); }}
            style={{marginLeft: 4, opacity: 0.5, cursor: "pointer", fontWeight: 700}}
          >×</span>
        </span>
      )}
    </span>
  );
}

// ─── 双语文本渲染 ────────────────────────────────────────────────────
export function renderBilingualText(text, opts) {
  opts = opts || {};
  var topic = opts.topic;
  var onTermClick = opts.onTermClick;
  var onMustClick = opts.onMustClick;
  if (!text) return null;

  // —— Step 1: 先把 AI 显式 ⭐ 标记的部分切出来，避免被后续 auto-mark 干扰 ——
  var parts = text.split(/(⭐\*\*[^*]+\*\*\s*[（(][^）)]+[）)]|\*\*[^*]+\*\*)/g);

  return parts.map(function(p, i) {
    // ⭐ AI 标的必背词
    if (p.indexOf("⭐") === 0) {
      var match = p.match(/⭐\*\*([^*]+)\*\*\s*[（(]([^）)]+)[）)]/);
      if (match) {
        var w = match[1];
        var mmData = topic && findMustMemorizeData(topic, w);
        return (
          <MustMemorizeChip
            key={i}
            word={w}
            cn={match[2]}
            data={mmData}
            onClick={onMustClick}
          />
        );
      }
    }
    // 普通 **word** — 但先 check 是不是 must-memorize（让它升级成 chip）
    if (p.startsWith("**") && p.endsWith("**")) {
      var bw = p.slice(2, -2);
      var mm = topic && findMustMemorizeData(topic, bw);
      if (mm) {
        return (
          <MustMemorizeChip
            key={i}
            word={bw}
            cn={mm.cn || (mm.concept && mm.concept.cn) || ""}
            data={mm}
            onClick={onMustClick}
            compact
          />
        );
      }
      return <strong key={i} style={{color: HC.pinStroke}}>{bw}</strong>;
    }

    // —— Step 2: 普通文本里 auto-detect must-memorize + glossary + 英文短语 ——
    if (!p) return null;

    var allHits = [];
    if (topic) {
      var mmHits = findMustMemorizeHits(topic, p);
      mmHits.forEach(function(h) {
        allHits.push({ kind: "must", start: h.start, end: h.end, text: h.actualText, data: h.data, type: h.type });
      });
    }
    if (onTermClick) {
      var glHits = findGlossaryHits(p);
      glHits.forEach(function(h) {
        var overlap = allHits.find(function(a) { return h.start < a.end && h.end > a.start; });
        if (!overlap) {
          allHits.push({ kind: "glossary", start: h.start, end: h.end, text: p.slice(h.start, h.end), term: h.term });
        }
      });
    }
    // F1: 英文短语 tap-to-translate（跳过已被 must/glossary 占用的范围）
    if (opts.enableTranslate !== false) {
      var phHits = findEnglishPhrases(p, allHits);
      phHits.forEach(function(h) {
        allHits.push({ kind: "phrase", start: h.start, end: h.end, text: h.phrase });
      });
    }
    allHits.sort(function(a, b) { return a.start - b.start; });

    if (allHits.length === 0) return <span key={i}>{p}</span>;

    var pieces = [];
    var cursor = 0;
    allHits.forEach(function(hit, hi) {
      if (hit.start > cursor) {
        pieces.push(<span key={i + "-x-" + hi}>{p.slice(cursor, hit.start)}</span>);
      }
      if (hit.kind === "must") {
        var data = hit.data;
        var cnText = data.cn || (data.en === hit.text ? data.cn : "") || "";
        pieces.push(
          <MustMemorizeChip
            key={i + "-mm-" + hi}
            word={hit.text}
            cn={cnText}
            data={data}
            onClick={onMustClick}
            compact
            autoDetected
          />
        );
      } else if (hit.kind === "glossary") {
        pieces.push(
          <span
            key={i + "-gl-" + hi}
            onClick={function(e) { e.stopPropagation(); if (onTermClick) onTermClick(hit.term); }}
            style={{
              background: "rgba(74, 109, 140, 0.10)",
              borderBottom: "1px dashed " + HC.teal,
              padding: "0 2px",
              borderRadius: 2,
              cursor: "pointer",
              color: HC.teal,
              fontWeight: 500,
            }}
            title="点一下看解释"
          >{hit.text}<sup style={{fontSize: 8, marginLeft: 1}}>?</sup></span>
        );
      } else if (hit.kind === "phrase") {
        pieces.push(<EnglishTapPhrase key={i + "-ph-" + hi} phrase={hit.text} />);
      }
      cursor = hit.end;
    });
    if (cursor < p.length) pieces.push(<span key={i + "-end"}>{p.slice(cursor)}</span>);
    return <React.Fragment key={i}>{pieces}</React.Fragment>;
  });
}
