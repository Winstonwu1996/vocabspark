// ─── history-engine: CourseBrowser / 通史脉络（51 门选课图）─────────────
// 从 pages/history.js 抽出。供历史首页 (pages/history/index.js) 作主选课器，
// 也供单课页底部的"通史脉络"复用。
// props: topic（当前课，可空）, onSwitch(topicId)
import React, { useState, useEffect } from 'react';
import { FONT_DISPLAY } from '../../lib/theme';
import { THROUGH_LINES, TOPIC_REGISTRY, getTopic } from '../../lib/history-topics';
import { HC } from './theme';

export function ThroughLineMap(props) {
  var [topicProgress, setTopicProgress] = useState({});

  useEffect(function() {
    if (typeof window === "undefined") return;
    try {
      var raw = localStorage.getItem("vocabspark_v1");
      var d = raw ? JSON.parse(raw) : null;
      var prog = (d && d.historyData && d.historyData.completedTopics) || {};
      setTopicProgress(prog);
    } catch (e) {}
  }, []);

  var registry = TOPIC_REGISTRY || [];
  var completedCount = Object.keys(topicProgress).length;
  var totalAvailable = registry.filter(function(t) { return t.available; }).length;
  var totalXp = Object.values(topicProgress).reduce(function(sum, t) { return sum + (t.xpEarned || 0); }, 0);

  var byThroughLine = {};
  registry.forEach(function(reg) {
    // getTopic 回退到 preview shim — base-content topic 也能作为可玩卡片显示
    var t = getTopic(reg.id);
    var line = (t && t.throughLine) || reg.throughLine || (t ? "future" : null);
    if (!t || !line) {
      byThroughLine["future"] = byThroughLine["future"] || [];
      byThroughLine["future"].push(Object.assign({}, reg, { future: true }));
    } else {
      byThroughLine[line] = byThroughLine[line] || [];
      byThroughLine[line].push({ topic: t, registry: reg });
    }
  });

  return (
    <div style={{
      marginBottom: 14,
      padding: "14px 16px",
      background: HC.card,
      borderRadius: 14,
      border: "1px solid " + HC.border,
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 12, flexWrap: "wrap", gap: 8
      }}>
        <h3 style={{margin: 0, fontFamily: FONT_DISPLAY, fontSize: 15, color: HC.ink}}>
          📜 通史脉络
        </h3>
        <div style={{display: "flex", gap: 10, fontSize: 11, color: HC.textSec}}>
          <span>✅ 已学 {completedCount}/{totalAvailable}</span>
          {totalXp > 0 && <span style={{color: HC.gold, fontWeight: 600}}>⚡ {totalXp} XP 累计</span>}
        </div>
      </div>

      {Object.keys(byThroughLine).filter(function(k) { return k !== "future"; }).map(function(lineId) {
        var line = THROUGH_LINES[lineId] || { cn: lineId, color: HC.teal };
        var topicsInLine = byThroughLine[lineId];
        return (
          <div key={lineId} style={{marginBottom: 10}}>
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 11, fontWeight: 700,
              color: line.color, letterSpacing: 1, marginBottom: 6,
            }}>
              <span style={{display: "inline-block", width: 14, height: 3, background: line.color, borderRadius: 2}}/>
              {line.cn} 主线
            </div>
            <div style={{display: "flex", gap: 8, flexWrap: "wrap"}}>
              {topicsInLine.map(function(item) {
                var t = item.topic;
                var done = topicProgress[t.id];
                var isCurrent = props.topic && t.id === props.topic.id;
                var clickable = !isCurrent && props.onSwitch;
                return (
                  <div key={t.id}
                    onClick={clickable ? function() { props.onSwitch(t.id); } : undefined}
                    style={{
                      flex: "1 1 200px",
                      minWidth: 180,
                      padding: "10px 12px",
                      background: done ? "rgba(34,160,107,0.08)" : (isCurrent ? HC.parchmentHi : HC.parchmentLo),
                      borderTop: "1px solid " + (done ? HC.green : (isCurrent ? line.color : HC.border)),
                      borderRight: "1px solid " + (done ? HC.green : (isCurrent ? line.color : HC.border)),
                      borderBottom: "1px solid " + (done ? HC.green : (isCurrent ? line.color : HC.border)),
                      borderLeft: "3px solid " + line.color,
                      borderRadius: 8,
                      fontSize: 12,
                      color: HC.text,
                      cursor: clickable ? "pointer" : "default",
                      transition: "all 0.15s",
                    }}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 3}}>
                      <strong style={{fontSize: 13, color: HC.ink}}>{t.title.cn}</strong>
                      {done ? <span style={{color: HC.green, fontSize: 14}}>✓</span> :
                       isCurrent ? <span style={{
                         fontSize: 9, padding: "1px 6px", background: line.color, color: "#fff",
                         borderRadius: 999, fontWeight: 700, letterSpacing: 1
                       }}>当前</span> : null}
                    </div>
                    <div style={{fontSize: 11, opacity: 0.78, lineHeight: 1.4}}>
                      {t.title.en} · {t.year}
                    </div>
                    {done && done.xpEarned ? (
                      <div style={{fontSize: 10, color: HC.gold, fontWeight: 600, marginTop: 3}}>
                        ⚡ {done.xpEarned} XP · {new Date(done.completedAt).toLocaleDateString("zh-CN")}
                      </div>
                    ) : null}
                    {clickable && !done ? (
                      <div style={{fontSize: 10, color: HC.accent, fontWeight: 600, marginTop: 3}}>
                        → 点击进入这一课
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {byThroughLine.future && byThroughLine.future.length > 0 && (
        <div style={{
          marginTop: 8, padding: "8px 10px",
          background: "rgba(0,0,0,0.03)", borderRadius: 6,
          fontSize: 11, color: HC.textSec,
        }}>
          🔒 即将上线：
          {byThroughLine.future.map(function(f, i) {
            return <span key={i} style={{
              display: "inline-block", padding: "2px 8px", margin: "2px 4px",
              background: HC.parchmentLo, borderRadius: 999, fontSize: 10.5, opacity: 0.75,
            }}>{f.note || f.id}</span>;
          })}
        </div>
      )}
    </div>
  );
}

// CourseBrowser = 首页主选课器别名（语义更清晰）；当前实现 = ThroughLineMap
export var CourseBrowser = ThroughLineMap;
