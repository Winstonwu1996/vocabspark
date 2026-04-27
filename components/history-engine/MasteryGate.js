// ─── Mastery Gate (3 步：Spelling / Definition / Application) ─────────
// 抽离自 pages/history.js（Day 4-5 重构 Stage 3）
//
// MasteryGateOverlay:
//   - 把 13 轮对话 → 拼写 → 定义 → 应用 串成 3 步漏斗
//   - 任一步可跳过（−XP 进 review pool），但不强制重测
//   - 全部走完触发 onPass，由父组件保存 results 进 SRS
//
// SpellingTest / DefinitionTest / ApplicationTest:
//   - 各自抽样 sampleSize 题目，错的进 errorWords/errorConcepts
//   - DefinitionTest + ApplicationTest 调 callAPIFast 评估（网络失败 lenient pass）
//
// Props (MasteryGateOverlay)：
//   topic, gateStep, setGateStep, gateResults, setGateResults, onPass
import React, { useState } from 'react';
import { HC } from './theme';
import { callAPIFast, tryJSON } from '../../lib/api';
import { buildDefinitionEvalPrompt, buildApplicationEvalPrompt } from '../../lib/history-prompts';

// ─── Spelling Test ────────────────────────────────────────────────
export function SpellingTest(props) {
  var check = props.check;
  // 随机抽 sampleSize 个题
  var [items] = useState(function() {
    var shuffled = [...check.items].sort(function() { return Math.random() - 0.5; });
    return shuffled.slice(0, check.sampleSize);
  });
  var [idx, setIdx] = useState(0);
  var [input, setInput] = useState("");
  var [feedback, setFeedback] = useState(null);
  var [correctCount, setCorrectCount] = useState(0);

  var item = items[idx];

  // Winston review #9/#10：软化 gate — 一次走完不强制重测
  var [errorWords, setErrorWords] = useState([]);

  var submit = function() {
    if (!input.trim()) return;
    var correct = input.trim().toLowerCase() === item.answer.toLowerCase();
    if (correct) {
      setFeedback({pass: true, msg: "对！" + item.answer});
      setCorrectCount(correctCount + 1);
    } else {
      setFeedback({pass: false, msg: "不对 — 正确答案是 " + item.answer + "（已加进复习单，下次再考）"});
      setErrorWords(errorWords.concat([{ word: item.answer, hint: item.hint, attempted: input.trim() }]));
    }
    setTimeout(function() {
      setFeedback(null);
      setInput("");
      next();
    }, correct ? 1000 : 2000);
  };

  var skip = function() {
    setErrorWords(errorWords.concat([{ word: item.answer, hint: item.hint, attempted: "(跳过)" }]));
    setFeedback(null);
    setInput("");
    next();
  };

  var next = function() {
    var newIdx = idx + 1;
    if (newIdx >= items.length) {
      var finalScore = correctCount + (feedback && feedback.pass ? 1 : 0);
      props.onDone(finalScore, {
        errorWords: errorWords.concat(feedback && !feedback.pass ? [{ word: item.answer, hint: item.hint, attempted: input.trim() }] : []),
        totalItems: items.length
      });
    } else {
      setIdx(newIdx);
    }
  };

  if (!item) return <div>加载中...</div>;

  return (
    <div>
      <div className="step-meta">第 {idx + 1} / {items.length} 题 — 已对 {correctCount}</div>
      <div className="item-prompt">
        {item.prompt}
        <div className="item-hint">提示：{item.hint}</div>
      </div>
      <input
        className="item-input"
        autoFocus
        value={input}
        onChange={function(e) { setInput(e.target.value); }}
        onKeyDown={function(e) { if (e.key === "Enter" && !feedback) submit(); }}
        placeholder="输入完整单词"
        disabled={!!feedback}
      />
      {feedback && (
        <div className={"feedback " + (feedback.pass ? "pass" : "fail")}>{feedback.msg}</div>
      )}
      <div className="actions" style={{justifyContent: "space-between"}}>
        <button className="btn-ghost" onClick={skip} disabled={!!feedback} style={{fontSize: 11, opacity: 0.55, padding: "8px 14px"}}>不会，跳过（−5 XP / 进复习）</button>
        <button className="btn-primary" disabled={!input.trim() || feedback} onClick={submit}>提交</button>
      </div>
    </div>
  );
}

// ─── Definition Test ─────────────────────────────────────────────
export function DefinitionTest(props) {
  var check = props.check;
  var concepts = props.concepts;
  var [items] = useState(function() {
    var shuffled = [...check.items].sort(function() { return Math.random() - 0.5; });
    return shuffled.slice(0, check.sampleSize);
  });
  var [idx, setIdx] = useState(0);
  var [input, setInput] = useState("");
  var [feedback, setFeedback] = useState(null);
  var [pending, setPending] = useState(false);
  var [score, setScore] = useState(0);

  var item = items[idx];
  var concept = item ? concepts.find(function(c) { return c.id === item.conceptId; }) : null;

  var submit = async function() {
    if (!input.trim() || pending) return;
    setPending(true);
    try {
      var sysPrompt = "You are a friendly history tutor evaluating a 13-year-old ESL student's understanding.";
      var userPrompt = buildDefinitionEvalPrompt(concept, input.trim());
      var raw = await callAPIFast(sysPrompt, userPrompt);
      var parsed = tryJSON(raw) || { pass: true, feedback: "答得不错！" };
      setFeedback(parsed);
      if (parsed.pass) setScore(score + 1);
      setTimeout(function() {
        setFeedback(null);
        setInput("");
        setPending(false);
        next(parsed.pass);
      }, 2200);
    } catch (e) {
      setFeedback({pass: true, feedback: "（评估失败，先按通过算）"});
      setScore(score + 1);
      setTimeout(function() {
        setFeedback(null);
        setInput("");
        setPending(false);
        next(true);
      }, 1500);
    }
  };

  var [errorConcepts, setErrorConcepts] = useState([]);

  var skip = function() {
    if (concept) setErrorConcepts(errorConcepts.concat([{ conceptId: concept.id, en: concept.en, cn: concept.cn, attempted: "(跳过)" }]));
    setFeedback(null);
    setInput("");
    setPending(false);
    next(false);
  };

  var next = function(passed) {
    if (!passed && concept && input.trim()) {
      setErrorConcepts(function(prev) {
        return prev.concat([{ conceptId: concept.id, en: concept.en, cn: concept.cn, attempted: input.trim() }]);
      });
    }
    var newIdx = idx + 1;
    if (newIdx >= items.length) {
      props.onDone(score + (passed ? 0 : 0), {
        errorConcepts: errorConcepts.concat(!passed && concept && input.trim() ? [{ conceptId: concept.id, en: concept.en, cn: concept.cn, attempted: input.trim() }] : []),
        totalItems: items.length
      });
    } else {
      setIdx(newIdx);
    }
  };

  if (!item || !concept) return <div>加载中...</div>;

  return (
    <div>
      <div className="step-meta">第 {idx + 1} / {items.length} 题 — 已对 {score}</div>
      <div style={{
        padding: "10px 14px", background: HC.tealLight, borderRadius: 10,
        fontSize: 13, color: HC.text, marginBottom: 12, lineHeight: 1.5
      }}>
        概念：<strong>{concept.en}</strong> · {concept.cn}
      </div>
      <div className="item-prompt">{item.prompt}</div>
      <textarea
        className="item-input"
        autoFocus
        rows={3}
        style={{minHeight: 80, resize: "vertical"}}
        value={input}
        onChange={function(e) { setInput(e.target.value); }}
        placeholder="可以中英混着说..."
        disabled={!!feedback || pending}
      />
      {pending && <div style={{fontSize: 12, color: HC.textSec, marginBottom: 12}}>🦉 评估中...</div>}
      {feedback && (
        <div className={"feedback " + (feedback.pass ? "pass" : "fail")}>{feedback.feedback}</div>
      )}
      <div className="actions" style={{justifyContent: "space-between"}}>
        <button className="btn-ghost" onClick={skip} disabled={!!feedback || pending} style={{fontSize: 11, opacity: 0.55, padding: "8px 14px"}}>说不出来，跳过（−10 XP / 进复习）</button>
        <button className="btn-primary" disabled={!input.trim() || feedback || pending} onClick={submit}>提交</button>
      </div>
    </div>
  );
}

// ─── Application Test ────────────────────────────────────────────
export function ApplicationTest(props) {
  var check = props.check;
  var [item] = useState(function() {
    var idx = Math.floor(Math.random() * check.items.length);
    return check.items[idx];
  });
  var [input, setInput] = useState("");
  var [feedback, setFeedback] = useState(null);
  var [pending, setPending] = useState(false);

  var submit = async function() {
    if (!input.trim() || pending) return;
    setPending(true);
    try {
      var sysPrompt = "You are a friendly history tutor evaluating a 13-year-old ESL student.";
      var userPrompt = buildApplicationEvalPrompt(item, input.trim());
      var raw = await callAPIFast(sysPrompt, userPrompt);
      var parsed = tryJSON(raw) || { pass: true, feedback: "想得很有道理。" };
      setFeedback(parsed);
      setTimeout(function() {
        props.onDone(parsed.pass ? 1 : 0, {
          passed: parsed.pass,
          item: item,
          attempted: input.trim()
        });
      }, 2500);
    } catch (e) {
      setFeedback({pass: true, feedback: "（评估失败，先按通过算）"});
      setTimeout(function() {
        props.onDone(1, { passed: true, item: item, attempted: input.trim() });
      }, 1500);
    }
  };

  var skip = function() {
    props.onDone(0, { passed: false, item: item, attempted: "(跳过)" });
  };

  return (
    <div>
      <div className="step-meta">应用题（共 1 道）</div>
      <div className="item-prompt">{item.prompt}</div>
      <textarea
        className="item-input"
        autoFocus
        rows={4}
        style={{minHeight: 100, resize: "vertical"}}
        value={input}
        onChange={function(e) { setInput(e.target.value); }}
        placeholder="用今天学的原则分析这个场景..."
        disabled={!!feedback || pending}
      />
      {pending && <div style={{fontSize: 12, color: HC.textSec, marginBottom: 12}}>🦉 评估中...</div>}
      {feedback && (
        <div className={"feedback " + (feedback.pass ? "pass" : "fail")}>{feedback.feedback}</div>
      )}
      <div className="actions" style={{justifyContent: "space-between"}}>
        <button className="btn-ghost" onClick={skip} disabled={!!feedback || pending} style={{fontSize: 11, opacity: 0.55, padding: "8px 14px"}}>这题太难，跳过（−15 XP / 进复习）</button>
        <button className="btn-primary" disabled={!input.trim() || feedback || pending} onClick={submit}>提交</button>
      </div>
    </div>
  );
}

// ─── Mastery Gate Overlay ──────────────────────────────────────────
export function MasteryGateOverlay(props) {
  var topic = props.topic;
  var gateStep = props.gateStep;
  var setGateStep = props.setGateStep;
  var gateResults = props.gateResults;
  var setGateResults = props.setGateResults;

  if (gateStep >= 3) return null;

  var stepNames = ["拼写测试", "概念定义", "应用题"];
  var checks = topic.masteryChecks.required;
  var currentCheck = checks[gateStep];

  var handleStepDone = function(score, results) {
    var newResults = Object.assign({}, gateResults);
    if (gateStep === 0) newResults.spelling = { score: score, results: results };
    if (gateStep === 1) newResults.definition = { score: score, results: results };
    if (gateStep === 2) newResults.application = { score: score, results: results };
    setGateResults(newResults);

    if (gateStep < 2) {
      setGateStep(gateStep + 1);
    } else {
      setGateStep(3);
      props.onPass(newResults);
    }
  };

  return (
    <div className="mastery-overlay">
      <div className="mastery-card">
        <div className="progress">
          {[0, 1, 2].map(function(i) {
            return <div key={i} className={"dot " + (i < gateStep ? "done" : i === gateStep ? "current" : "")}></div>;
          })}
        </div>
        <div className="step-meta">第 {gateStep + 1} 关 / 共 3 关</div>
        <h2>{stepNames[gateStep]}</h2>

        {gateStep === 0 && <SpellingTest check={currentCheck} onDone={handleStepDone} />}
        {gateStep === 1 && <DefinitionTest check={currentCheck} concepts={topic.mustMemorize.concepts} onDone={handleStepDone} />}
        {gateStep === 2 && <ApplicationTest check={currentCheck} onDone={handleStepDone} />}

        <div style={{marginTop: 14, fontSize: 11.5, color: HC.textSec, textAlign: "center", opacity: 0.7}}>
          答错的会进复习单，下次再考；可以跳过但会影响 XP
        </div>
      </div>
    </div>
  );
}
