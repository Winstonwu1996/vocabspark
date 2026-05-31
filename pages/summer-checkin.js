import React, { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { BrandNavBar } from "../components/BrandNavBar";
import { C, FONT, FONT_DISPLAY, NUM, S, globalCSS } from "../lib/theme";

var STORAGE_KEY = "knowu_willow_summer_checkin_2026_v1";
var CELEBRATED_KEY = "knowu_willow_summer_checkin_2026_celebrated_v1";
var START_DATE = "2026-06-09";
var END_DATE = "2026-07-13";
var TOTAL_DAYS = 35;
var WEEKLY_MATH_TARGET = 3;
var WEEKLY_NONFICTION_TARGET = 4;

var READING_TYPES = [
  { key: "science", label: "Science", cn: "科学类" },
  { key: "argument", label: "Argument", cn: "议论文" },
  { key: "story", label: "Story", cn: "故事/情景" },
  { key: "other", label: "Other", cn: "其他" },
];

var DEFAULT_ENTRY = {
  hasMathClass: false,
  mathDone: false,
  brilliantUnits: 0,
  readingDone: false,
  readingMinutes: 0,
  readingType: "science",
  readingNote: "",
  vocabDone: false,
  vocabNewWords: 30,
  vocabMinutes: 40,
  historyDone: false,
  shortVideoMinutes: 0,
  dayNote: "",
};

var parseDateId = function(dateId) {
  var parts = String(dateId || "").split("-").map(function(x) { return parseInt(x, 10); });
  return new Date(parts[0], parts[1] - 1, parts[2]);
};

var toDateId = function(date) {
  var y = date.getFullYear();
  var m = String(date.getMonth() + 1).padStart(2, "0");
  var d = String(date.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + d;
};

var addDays = function(dateId, days) {
  var d = parseDateId(dateId);
  d.setDate(d.getDate() + days);
  return toDateId(d);
};

var daysBetweenInclusive = function(a, b) {
  return Math.round((parseDateId(b) - parseDateId(a)) / 86400000) + 1;
};

var clampDateId = function(dateId) {
  if (!dateId || dateId < START_DATE) return START_DATE;
  if (dateId > END_DATE) return END_DATE;
  return dateId;
};

var getDayIndex = function(dateId) {
  return daysBetweenInclusive(START_DATE, dateId);
};

var formatDate = function(dateId) {
  var d = parseDateId(dateId);
  return new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "short" }).format(d);
};

var getAllDates = function() {
  var dates = [];
  for (var i = 0; i < TOTAL_DAYS; i++) dates.push(addDays(START_DATE, i));
  return dates;
};

var getHistoryPlan = function(dateId) {
  var idx = getDayIndex(dateId);
  var topic = Math.ceil(idx / 2);
  var dayInCycle = idx % 2 === 1 ? 1 : 2;
  return {
    topic: topic,
    dayInCycle: dayInCycle,
    label: dayInCycle === 1 ? "Topic " + topic + " · Day 1" : "Topic " + topic + " · Day 2",
    task: dayInCycle === 1 ? "Lens 1 + Lens 2" : "Lens 3 + 复习考试",
  };
};

var getWeekRange = function(dateId) {
  var d = parseDateId(dateId);
  var day = d.getDay();
  var offset = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + offset);
  var start = clampDateId(toDateId(d));
  var e = parseDateId(start);
  e.setDate(e.getDate() + 6);
  var end = clampDateId(toDateId(e));
  return { start: start, end: end };
};

var getEntry = function(entries, dateId) {
  return { ...DEFAULT_ENTRY, ...(entries[dateId] || {}) };
};

var isNonfiction = function(entry) {
  return entry.readingType === "science" || entry.readingType === "argument";
};

var getCompletion = function(entry) {
  var logicDone = entry.hasMathClass ? !!entry.mathDone : Number(entry.brilliantUnits || 0) >= 3;
  var readingDone = !!entry.readingDone || Number(entry.readingMinutes || 0) >= 40;
  var vocabDone = !!entry.vocabDone && Number(entry.vocabNewWords || 0) >= 30;
  var historyDone = !!entry.historyDone;
  var shortVideoOk = Number(entry.shortVideoMinutes || 0) <= 40;
  var items = [logicDone, readingDone, vocabDone, historyDone, shortVideoOk];
  var done = items.filter(Boolean).length;
  return {
    done: done,
    total: items.length,
    pct: Math.round((done / items.length) * 100),
    complete: done === items.length,
    logicDone: logicDone,
    readingDone: readingDone,
    vocabDone: vocabDone,
    historyDone: historyDone,
    shortVideoOk: shortVideoOk,
  };
};

var getMissingItems = function(entry, historyPlan) {
  var c = getCompletion(entry);
  var missing = [];
  if (!c.logicDone) missing.push(entry.hasMathClass ? "数学老师课" : "Brilliant 3 单元");
  if (!c.readingDone) missing.push("英语阅读 40 分钟");
  if (!c.vocabDone) missing.push("Vocab 30 个新词 + 复习");
  if (!c.historyDone) missing.push("History " + historyPlan.task);
  if (!c.shortVideoOk) missing.push("短视频超过 40 分钟");
  return missing;
};

var getDaysRemaining = function(dateId) {
  return Math.max(0, daysBetweenInclusive(dateId, END_DATE) - 1);
};

var cardStyle = {
  background: C.card,
  border: "1px solid " + C.border,
  borderRadius: 14,
  padding: 16,
  boxShadow: C.shadowSoft,
};

var smallLabelStyle = {
  fontSize: 11,
  fontWeight: 800,
  color: C.textSec,
  textTransform: "uppercase",
  letterSpacing: 0,
};

var PrimaryButton = function({ children, onClick, disabled, style }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...S.primaryBtn,
        padding: "10px 14px",
        fontSize: 13,
        borderRadius: 10,
        boxShadow: "0 2px 8px rgba(196,107,48,0.18)",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

var GhostButton = function({ children, onClick, disabled, style }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...S.ghostBtn,
        padding: "9px 12px",
        fontSize: 13,
        borderRadius: 10,
        ...style,
      }}
    >
      {children}
    </button>
  );
};

var TIME_TYPES = {
  block: { icon: "🧘", label: "整段时间", color: C.teal, bg: C.tealLight },
  mobile: { icon: "📱", label: "碎片移动", color: C.accent, bg: C.accentLight },
  life: { icon: "🌤", label: "生活时间", color: C.green, bg: C.greenLight },
  boundary: { icon: "⚠", label: "边界", color: C.red, bg: C.redLight },
};

var TimeBadge = function({ type }) {
  var t = TIME_TYPES[type] || TIME_TYPES.mobile;
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "3px 7px",
      borderRadius: 999,
      background: t.bg,
      color: t.color,
      fontSize: 10.5,
      fontWeight: 800,
      whiteSpace: "nowrap",
      lineHeight: 1.2,
    }}>
      <span>{t.icon}</span>
      <span>{t.label}</span>
    </span>
  );
};

var ToggleRow = function({ checked, title, sub, onToggle, tone, timeType }) {
  var color = tone || C.accent;
  return (
    <button
      type="button"
      onClick={onToggle}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12,
        textAlign: "left",
        border: "1px solid " + (checked ? color + "66" : C.border),
        background: checked ? color + "12" : "#fff",
        borderRadius: 12,
        padding: "12px 13px",
        cursor: "pointer",
        fontFamily: FONT,
        filter: "none",
      }}
    >
      <span style={{
        width: 24,
        height: 24,
        borderRadius: 8,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: checked ? color : C.bg,
        color: checked ? "#fff" : C.textSec,
        border: "1px solid " + (checked ? color : C.border),
        fontSize: 14,
        fontWeight: 800,
        flexShrink: 0,
      }}>
        {checked ? "✓" : ""}
      </span>
      <span style={{ minWidth: 0, flex: 1 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", fontSize: 14, fontWeight: 800, color: C.text, lineHeight: 1.35 }}>
          <span>{title}</span>
          {timeType && <TimeBadge type={timeType} />}
        </span>
        {sub && <span style={{ display: "block", fontSize: 12, color: C.textSec, lineHeight: 1.5, marginTop: 2 }}>{sub}</span>}
      </span>
    </button>
  );
};

var CelebrationModal = function({ open, dateId, onClose }) {
  if (!open) return null;
  var dayIndex = getDayIndex(dateId);
  var left = getDaysRemaining(dateId);
  var flowers = ["🎉", "🌸", "✨", "🔥", "🌟", "💪", "🎊", "🚀"];
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(22,27,34,0.46)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 18,
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes willowConfettiFall {
          0% { opacity: 0; transform: translateY(-24px) rotate(0deg) scale(0.8); }
          12% { opacity: 1; }
          100% { opacity: 0; transform: translateY(220px) rotate(260deg) scale(1.1); }
        }
        @keyframes willowModalPop {
          0% { opacity: 0; transform: scale(0.92) translateY(12px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      ` }} />
      <div style={{
        position: "relative",
        width: "min(520px, 100%)",
        background: "linear-gradient(135deg, #fff 0%, #fff8e8 100%)",
        border: "1px solid " + C.gold + "66",
        borderRadius: 18,
        boxShadow: "0 24px 70px rgba(22,27,34,0.28)",
        padding: "28px 24px 22px",
        textAlign: "center",
        overflow: "hidden",
        animation: "willowModalPop 0.2s ease-out",
      }}>
        {flowers.map(function(f, i) {
          return (
            <span key={i} style={{
              position: "absolute",
              top: -20,
              left: (8 + i * 12) + "%",
              fontSize: 20 + (i % 3) * 4,
              animation: "willowConfettiFall " + (2.2 + i * 0.12) + "s ease-in-out infinite",
              animationDelay: (i * 0.13) + "s",
              pointerEvents: "none",
            }}>{f}</span>
          );
        })}
        <div style={{ fontSize: 42, lineHeight: 1, marginBottom: 10 }}>🎉</div>
        <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: 27, lineHeight: 1.2, margin: "0 0 10px", color: C.text, letterSpacing: 0 }}>
          太棒了，老己！
        </h2>
        <p style={{ fontSize: 15, color: C.text, lineHeight: 1.75, margin: "0 auto 12px", maxWidth: 430 }}>
          Day {dayIndex} 满格完成。今天这波无敌，牛 X。暑假进度少一天，我的修炼值就多一格。
        </p>
        <div style={{
          background: C.greenLight,
          border: "1px solid " + C.green + "33",
          borderRadius: 12,
          padding: "11px 12px",
          color: C.green,
          fontSize: 13.5,
          fontWeight: 800,
          lineHeight: 1.55,
          marginBottom: 16,
        }}>
          离回去开挂、碾压美国小伙伴，又近了一天。剩下 {left} 天，继续稳住。
        </div>
        <button
          onClick={onClose}
          style={{
            ...S.primaryBtn,
            width: "auto",
            display: "inline-flex",
            padding: "12px 22px",
            fontSize: 14,
            borderRadius: 12,
          }}
        >
          收下，继续享受暑假
        </button>
      </div>
    </div>
  );
};

export default function SummerCheckinPage() {
  var [entries, setEntries] = useState({});
  var [selectedDate, setSelectedDate] = useState(START_DATE);
  var [hydrated, setHydrated] = useState(false);
  var [guidelineOpen, setGuidelineOpen] = useState(false);
  var [celebrationOpen, setCelebrationOpen] = useState(false);
  var [celebratedDates, setCelebratedDates] = useState({});
  var lastCompleteRef = useRef({});
  var dates = useMemo(getAllDates, []);
  var entry = getEntry(entries, selectedDate);
  var completion = getCompletion(entry);
  var historyPlan = getHistoryPlan(selectedDate);
  var missingItems = getMissingItems(entry, historyPlan);
  var week = getWeekRange(selectedDate);

  useEffect(function() {
    if (typeof window === "undefined") return;
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw) || {});
      var celebratedRaw = window.localStorage.getItem(CELEBRATED_KEY);
      if (celebratedRaw) setCelebratedDates(JSON.parse(celebratedRaw) || {});
    } catch (e) {}
    setSelectedDate(clampDateId(toDateId(new Date())));
    setHydrated(true);
  }, []);

  useEffect(function() {
    if (typeof window === "undefined") return;
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {}
  }, [entries, hydrated]);

  useEffect(function() {
    if (typeof window === "undefined") return;
    if (!hydrated) return;
    try {
      window.localStorage.setItem(CELEBRATED_KEY, JSON.stringify(celebratedDates));
    } catch (e) {}
  }, [celebratedDates, hydrated]);

  useEffect(function() {
    if (!hydrated) return;
    var wasComplete = !!lastCompleteRef.current[selectedDate];
    if (completion.complete && !wasComplete && !celebratedDates[selectedDate]) {
      setCelebrationOpen(true);
      setCelebratedDates(function(prev) {
        return { ...prev, [selectedDate]: true };
      });
    }
    lastCompleteRef.current[selectedDate] = completion.complete;
  }, [completion.complete, selectedDate, hydrated, celebratedDates]);

  var updateEntry = function(patch) {
    setEntries(function(prev) {
      var nextEntry = { ...getEntry(prev, selectedDate), ...patch };
      return { ...prev, [selectedDate]: nextEntry };
    });
  };

  var weekDates = dates.filter(function(d) { return d >= week.start && d <= week.end; });
  var weekMathDone = weekDates.filter(function(d) {
    var e = getEntry(entries, d);
    return e.hasMathClass && e.mathDone;
  }).length;
  var weekNonfiction = weekDates.filter(function(d) {
    var e = getEntry(entries, d);
    return getCompletion(e).readingDone && isNonfiction(e);
  }).length;

  var completedDays = dates.filter(function(d) { return getCompletion(getEntry(entries, d)).complete; }).length;
  var coreDays = dates.filter(function(d) {
    var c = getCompletion(getEntry(entries, d));
    return c.logicDone && c.readingDone && c.vocabDone && c.historyDone && c.shortVideoOk;
  }).length;
  var selectedIdx = getDayIndex(selectedDate);

  var exportCsv = function() {
    var rows = [[
      "date", "day_index", "math_class", "math_done", "brilliant_units",
      "reading_minutes", "reading_type", "reading_done", "vocab_new_words", "vocab_done",
      "history_topic", "history_cycle_day", "history_done",
      "short_video_minutes", "day_note"
    ]];
    dates.forEach(function(dateId) {
      var e = getEntry(entries, dateId);
      var h = getHistoryPlan(dateId);
      rows.push([
        dateId,
        getDayIndex(dateId),
        e.hasMathClass ? "yes" : "no",
        e.mathDone ? "yes" : "no",
        e.brilliantUnits || 0,
        e.readingMinutes || 0,
        e.readingType || "",
        getCompletion(e).readingDone ? "yes" : "no",
        e.vocabNewWords || 0,
        e.vocabDone ? "yes" : "no",
        h.topic,
        h.dayInCycle,
        e.historyDone ? "yes" : "no",
        e.shortVideoMinutes || 0,
        (e.dayNote || "").replace(/\r?\n/g, " "),
      ]);
    });
    var csv = rows.map(function(row) {
      return row.map(function(cell) {
        var s = String(cell == null ? "" : cell);
        return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
      }).join(",");
    }).join("\n");
    var blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "willow-summer-checkin-2026.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  var copyBackup = async function() {
    var payload = JSON.stringify({ version: 1, storageKey: STORAGE_KEY, entries: entries }, null, 2);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(payload);
      window.alert("JSON 备份已复制");
    } else {
      window.alert(payload);
    }
  };

  var clearDay = function() {
    if (!window.confirm("清空 " + selectedDate + " 的打卡记录？")) return;
    setEntries(function(prev) {
      var next = { ...prev };
      delete next[selectedDate];
      return next;
    });
    setCelebratedDates(function(prev) {
      var next = { ...prev };
      delete next[selectedDate];
      return next;
    });
    lastCompleteRef.current[selectedDate] = false;
  };

  return (
    <div style={{ ...S.root, background: "linear-gradient(180deg, #f7f6f3 0%, #f0f4f7 100%)" }}>
      <Head>
        <title>Willow Summer Check-in · Know U. Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: globalCSS + `
        .checkin-shell { max-width: 1080px; margin: 0 auto; padding: 18px 14px 72px; }
        .checkin-grid { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.65fr); gap: 14px; align-items: start; }
        .checkin-stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
        .checkin-days { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 7px; }
        .checkin-task-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
        @media (max-width: 860px) {
          .checkin-grid { grid-template-columns: 1fr; }
          .checkin-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 560px) {
          .checkin-shell { padding: 12px 10px 64px; }
          .checkin-task-grid { grid-template-columns: 1fr; }
          .checkin-days { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }
      ` }} />

      <BrandNavBar activeTab="checkin" user={null} onUserCenterClick={function() {}} />
      <CelebrationModal
        open={celebrationOpen}
        dateId={selectedDate}
        onClose={function() { setCelebrationOpen(false); }}
      />

      <main className="checkin-shell">
        <section style={{
          background: "linear-gradient(135deg, #ffffff 0%, #fdf6ea 100%)",
          border: "1px solid " + C.border,
          borderRadius: 18,
          padding: "22px 20px",
          boxShadow: C.shadow,
          marginBottom: 14,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
            <div style={{ minWidth: 0, flex: "1 1 420px" }}>
              <div style={smallLabelStyle}>June 9 to July 13, 2026 · 35 days</div>
              <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: 30, lineHeight: 1.16, margin: "6px 0 10px", color: C.text, letterSpacing: 0 }}>
                Willow 暑假学习打卡
              </h1>
              <p style={{ margin: 0, color: C.textSec, fontSize: 14, lineHeight: 1.7, maxWidth: 680 }}>
                6 月 7 日下午到国内，6 月 8 日倒时差，6 月 9 日开始打卡；7 月 14 日上午返美，打卡到 7 月 13 日。每天满格一次，就是一次小升级。
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <Link href="/vocab" style={{ ...S.primaryBtn, padding: "10px 14px", fontSize: 13, borderRadius: 10, textDecoration: "none" }}>Vocab</Link>
              <Link href="/history" style={{ ...S.ghostBtn, padding: "9px 12px", fontSize: 13, borderRadius: 10, textDecoration: "none", color: C.text }}>History</Link>
              <a href="https://brilliant.org/" target="_blank" rel="noreferrer" style={{ ...S.ghostBtn, padding: "9px 12px", fontSize: 13, borderRadius: 10, textDecoration: "none", color: C.text }}>Brilliant</a>
            </div>
          </div>

          <div style={{
            marginTop: 16,
            border: "1px solid " + C.border,
            borderRadius: 14,
            background: "rgba(255,255,255,0.68)",
            overflow: "hidden",
          }}>
            <button
              type="button"
              onClick={function() { setGuidelineOpen(!guidelineOpen); }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                padding: "12px 14px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: FONT,
                textAlign: "left",
                filter: "none",
              }}
            >
              <span>
                <span style={{ display: "block", fontSize: 14, fontWeight: 900, color: C.text }}>老己的暑假修炼纲领</span>
                <span style={{ display: "block", fontSize: 12, color: C.textSec, marginTop: 2 }}>不是把暑假塞满，而是每天稳稳升级。</span>
              </span>
              <span style={{ fontSize: 12, color: C.accent, fontWeight: 800, whiteSpace: "nowrap" }}>{guidelineOpen ? "收起" : "展开"}</span>
            </button>
            {guidelineOpen && (
              <div style={{ borderTop: "1px solid " + C.border, padding: "13px 14px 15px", fontSize: 13, color: C.text, lineHeight: 1.75 }}>
                <p style={{ margin: "0 0 10px" }}>
                  老己，这个计划不是为了把我的暑假变成另一个上学日。它只是把每天最重要的几件事固定下来：逻辑训练、英文阅读、单词复习和历史理解。很多任务我可以在车上、路上、等人的时候用手机完成，真正需要安静坐下来的主要是阅读和数学老师课。
                </p>
                <p style={{ margin: "0 0 10px" }}>
                  这样做的好处是，我不会因为回国生活节奏很散，就把英语输入、词汇和思考能力断掉；也不会因为每天任务太重，失去暑假的感觉。完成这些基础线以后，剩下的时间就是我的暑假：朋友、家人、户外、电影、节目和放松。每天完成 5/5 都是一次小胜利，太棒了，稳住就是无敌。
                </p>
                <p style={{ margin: "0 0 10px" }}>
                  这个暑假我也要留出足够时间检查身体健康，包括牙齿、视力、脊柱和日常姿势。学习计划只是帮助我保持节奏，身体状态才是长期学习和生活的底盘。
                </p>
                <p style={{ margin: "0 0 10px", fontWeight: 800, color: C.accent }}>
                  暑假进度每天少一点，但我的修炼值每天多一点。等我回美国，状态拉满，回去开挂，碾压美国小伙伴。牛 X。
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <TimeBadge type="block" />
                  <TimeBadge type="mobile" />
                  <TimeBadge type="life" />
                  <TimeBadge type="boundary" />
                </div>
              </div>
            )}
          </div>

          <div className="checkin-stats" style={{ marginTop: 18 }}>
            {[
              { label: "满格修炼", value: completedDays + "/" + TOTAL_DAYS, sub: "5/5 就撒花", color: C.green },
              { label: "主线战力", value: coreDays + "/" + TOTAL_DAYS, sub: "数理/阅读/单词/历史", color: C.accent },
              { label: "本周数学课", value: weekMathDone + "/" + WEEKLY_MATH_TARGET, sub: formatDate(week.start) + " - " + formatDate(week.end), color: C.purple },
              { label: "非故事阅读", value: weekNonfiction + "/" + WEEKLY_NONFICTION_TARGET, sub: "科学类 + 议论文", color: C.teal },
            ].map(function(stat) {
              return (
                <div key={stat.label} style={{ ...cardStyle, padding: 14 }}>
                  <div style={smallLabelStyle}>{stat.label}</div>
                  <div style={{ ...NUM, fontSize: 24, fontWeight: 900, color: stat.color, marginTop: 4 }}>{stat.value}</div>
                  <div style={{ fontSize: 11.5, color: C.textSec, lineHeight: 1.45, marginTop: 2 }}>{stat.sub}</div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="checkin-grid">
          <section style={{ display: "grid", gap: 14 }}>
            <div style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 14 }}>
                <div>
                  <div style={smallLabelStyle}>Day {selectedIdx} / {TOTAL_DAYS}</div>
                  <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: 23, lineHeight: 1.25, margin: "3px 0 0", color: C.text, letterSpacing: 0 }}>
                    {formatDate(selectedDate)}
                  </h2>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                  <GhostButton onClick={function() { setSelectedDate(clampDateId(addDays(selectedDate, -1))); }} disabled={selectedDate === START_DATE}>上一天</GhostButton>
                  <input
                    type="date"
                    min={START_DATE}
                    max={END_DATE}
                    value={selectedDate}
                    onChange={function(e) { setSelectedDate(clampDateId(e.target.value)); }}
                    style={{ ...S.textarea, width: 150, minHeight: 38, padding: "8px 10px", resize: "none", fontSize: 13 }}
                  />
                  <GhostButton onClick={function() { setSelectedDate(clampDateId(addDays(selectedDate, 1))); }} disabled={selectedDate === END_DATE}>下一天</GhostButton>
                </div>
              </div>

              <div style={{ height: 10, background: C.bg, borderRadius: 999, border: "1px solid " + C.border, overflow: "hidden", marginBottom: 12 }}>
                <div style={{
                  width: completion.pct + "%",
                  height: "100%",
                  background: completion.complete ? C.green : "linear-gradient(90deg, " + C.accent + ", " + C.gold + ")",
                  transition: "width 0.25s ease",
                }} />
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                <span style={{ ...S.heroStatPillAccent, padding: "5px 10px", fontSize: 12 }}>{completion.done}/{completion.total} 项完成 · {completion.complete ? "太棒了" : "满格就撒花"}</span>
                <span style={{ ...S.heroStatPillGold, padding: "5px 10px", fontSize: 12 }}>{historyPlan.label}</span>
                <span style={{ ...S.heroStatPillGreen, padding: "5px 10px", fontSize: 12 }}>短视频 {entry.shortVideoMinutes || 0}/40 分钟</span>
              </div>

              <div className="checkin-task-grid">
                <div style={{ display: "grid", gap: 10 }}>
                  <ToggleRow
                    checked={!!entry.hasMathClass}
                    title="今天有数学老师课"
                    sub="有课日用老师课替代 Brilliant；无课日完成 Brilliant 3 单元。"
                    onToggle={function() { updateEntry({ hasMathClass: !entry.hasMathClass }); }}
                    tone={C.purple}
                    timeType="block"
                  />
                  {entry.hasMathClass ? (
                    <ToggleRow
                      checked={!!entry.mathDone}
                      title="数学老师课完成"
                      sub="约 60 分钟，面向下学期内容。"
                      onToggle={function() { updateEntry({ mathDone: !entry.mathDone }); }}
                      tone={C.purple}
                      timeType="block"
                    />
                  ) : (
                    <div style={{ ...cardStyle, boxShadow: "none", padding: 13 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", fontSize: 14, fontWeight: 800, marginBottom: 8 }}>
                        <span>Brilliant 单元</span>
                        <TimeBadge type="mobile" />
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        {[0, 1, 2, 3].map(function(n) {
                          var active = Number(entry.brilliantUnits || 0) === n;
                          return (
                            <button
                              key={n}
                              onClick={function() { updateEntry({ brilliantUnits: n }); }}
                              aria-label={"Brilliant " + n + " units"}
                              style={{
                                flex: 1,
                                padding: "9px 0",
                                borderRadius: 10,
                                border: "1px solid " + (active ? C.accent : C.border),
                                background: active ? C.accent : C.bg,
                                color: active ? "#fff" : C.textSec,
                                fontWeight: 800,
                                fontFamily: FONT,
                                cursor: "pointer",
                              }}
                            >
                              {n}
                            </button>
                          );
                        })}
                      </div>
                      <div style={{ fontSize: 12, color: C.textSec, marginTop: 8 }}>目标：3 个单元，约 40 分钟。</div>
                    </div>
                  )}

                  <div style={{ ...cardStyle, boxShadow: "none", padding: 13 }}>
                    <ToggleRow
                      checked={completion.readingDone}
                      title="英语阅读 40 分钟"
                      sub="优先完整安静时间；弱项优先科学类和议论文。"
                      onToggle={function() {
                        var nextDone = !entry.readingDone;
                        updateEntry({
                          readingDone: nextDone,
                          readingMinutes: nextDone && !Number(entry.readingMinutes || 0) ? 40 : entry.readingMinutes,
                        });
                      }}
                      tone={C.teal}
                      timeType="block"
                    />
                    <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", gap: 8, marginTop: 10 }}>
                      <input
                        type="number"
                        min="0"
                        value={entry.readingMinutes}
                        onChange={function(e) { updateEntry({ readingMinutes: Math.max(0, Number(e.target.value || 0)) }); }}
                        style={{ ...S.textarea, padding: "8px 10px", resize: "none", fontSize: 13 }}
                        aria-label="阅读分钟"
                      />
                      <select
                        value={entry.readingType}
                        onChange={function(e) { updateEntry({ readingType: e.target.value }); }}
                        style={{ ...S.textarea, padding: "8px 10px", resize: "none", fontSize: 13 }}
                        aria-label="阅读类型"
                      >
                        {READING_TYPES.map(function(t) { return <option key={t.key} value={t.key}>{t.label} · {t.cn}</option>; })}
                      </select>
                    </div>
                    <textarea
                      value={entry.readingNote}
                      onChange={function(e) { updateEntry({ readingNote: e.target.value }); }}
                      placeholder="一句话记录：今天读到的观点、证据或一个科学概念"
                      rows={2}
                      style={{ ...S.textarea, marginTop: 8, fontSize: 13 }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gap: 10 }}>
                  <div style={{ ...cardStyle, boxShadow: "none", padding: 13 }}>
                    <ToggleRow
                      checked={!!entry.vocabDone}
                      title="Vocab 单词"
                      sub="30 个新词 + 旧词复习 + 历史词复习，适合移动时间。"
                      onToggle={function() {
                        var nextDone = !entry.vocabDone;
                        updateEntry({
                          vocabDone: nextDone,
                          vocabNewWords: nextDone && !Number(entry.vocabNewWords || 0) ? 30 : entry.vocabNewWords,
                          vocabMinutes: nextDone && !Number(entry.vocabMinutes || 0) ? 40 : entry.vocabMinutes,
                        });
                      }}
                      tone={C.accent}
                      timeType="mobile"
                    />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
                      <label style={{ fontSize: 12, color: C.textSec }}>
                        新词
                        <input
                          type="number"
                          min="0"
                          value={entry.vocabNewWords}
                          onChange={function(e) { updateEntry({ vocabNewWords: Math.max(0, Number(e.target.value || 0)) }); }}
                          style={{ ...S.textarea, padding: "8px 10px", resize: "none", fontSize: 13, marginTop: 4 }}
                        />
                      </label>
                      <label style={{ fontSize: 12, color: C.textSec }}>
                        分钟
                        <input
                          type="number"
                          min="0"
                          value={entry.vocabMinutes}
                          onChange={function(e) { updateEntry({ vocabMinutes: Math.max(0, Number(e.target.value || 0)) }); }}
                          style={{ ...S.textarea, padding: "8px 10px", resize: "none", fontSize: 13, marginTop: 4 }}
                        />
                      </label>
                    </div>
                  </div>

                  <ToggleRow
                    checked={!!entry.historyDone}
                    title={"History · " + historyPlan.task}
                    sub={historyPlan.label + "。一个 Topic 共 3 个 Lens：第一天 Lens 1+2，第二天 Lens 3 + 复习考试。"}
                    onToggle={function() { updateEntry({ historyDone: !entry.historyDone }); }}
                    tone="#9b2c2c"
                    timeType="mobile"
                  />

                  <div style={{ ...cardStyle, boxShadow: "none", padding: 13, borderColor: completion.shortVideoOk ? C.border : C.red + "77" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", fontSize: 14, fontWeight: 800 }}>
                          <span>娱乐边界</span>
                          <TimeBadge type="boundary" />
                        </div>
                        <div style={{ fontSize: 12, color: completion.shortVideoOk ? C.textSec : C.red, lineHeight: 1.5 }}>
                          短视频上限 40 分钟。青春期孩子的大脑很难单独对抗算法的成瘾性，所以要用时间边界保护注意力。
                        </div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={entry.shortVideoMinutes}
                        onChange={function(e) { updateEntry({ shortVideoMinutes: Math.max(0, Number(e.target.value || 0)) }); }}
                        style={{ ...S.textarea, width: 86, padding: "8px 10px", resize: "none", fontSize: 13 }}
                        aria-label="短视频分钟"
                      />
                    </div>
                    <div style={{ fontSize: 12, color: C.textSec, lineHeight: 1.55, marginTop: 8 }}>
                      电影、纪录片、电视节目和父母认可内容的长视频不在这里计时；这里主要限制短视频。
                    </div>
                  </div>
                </div>
              </div>

              <textarea
                value={entry.dayNote}
                onChange={function(e) { updateEntry({ dayNote: e.target.value }); }}
                placeholder="今天牛在哪？写一句给老己看的肯定"
                rows={3}
                style={{ ...S.textarea, marginTop: 12 }}
              />
            </div>
          </section>

          <aside style={{ display: "grid", gap: 14 }}>
            <div style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div>
                  <div style={smallLabelStyle}>35-day map</div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: C.text }}>修炼进度</div>
                </div>
                <div style={{ ...NUM, fontWeight: 900, color: C.accent }}>{Math.round((selectedIdx / TOTAL_DAYS) * 100)}%</div>
              </div>
              <div className="checkin-days">
                {dates.map(function(dateId) {
                  var c = getCompletion(getEntry(entries, dateId));
                  var active = dateId === selectedDate;
                  return (
                    <button
                      key={dateId}
                      onClick={function() { setSelectedDate(dateId); }}
                      title={dateId + (c.complete ? " · 全部完成" : " · 未完成：" + getMissingItems(getEntry(entries, dateId), getHistoryPlan(dateId)).join(" / "))}
                      aria-label={"Day " + getDayIndex(dateId) + " " + dateId}
                      style={{
                        aspectRatio: "1 / 1",
                        borderRadius: 10,
                        border: "1px solid " + (active ? C.accent : c.complete ? C.green + "66" : C.border),
                        background: active ? C.accent : c.complete ? C.greenLight : c.done > 0 ? C.goldLight : "#fff",
                        color: active ? "#fff" : c.complete ? C.green : C.textSec,
                        fontFamily: FONT,
                        fontSize: 12,
                        fontWeight: 800,
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                      }}
                    >
                      <span style={{ ...NUM, fontSize: 11, opacity: active ? 0.9 : 0.75 }}>{getDayIndex(dateId)}</span>
                      <span style={{ fontSize: 17, lineHeight: 1 }}>{c.complete ? "✓" : "?"}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={cardStyle}>
              <div style={smallLabelStyle}>Selected day</div>
              <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 18, margin: "5px 0 8px", letterSpacing: 0 }}>
                {completion.complete ? "当天满格完成" : "当天还差什么"}
              </h3>
              {completion.complete ? (
                <p style={{ fontSize: 13, color: C.green, lineHeight: 1.7, margin: 0, fontWeight: 800 }}>太棒了，老己。这一天 5/5 满格，回去开挂倒计时又少一天。</p>
              ) : (
                <div style={{ display: "grid", gap: 7 }}>
                  {missingItems.map(function(item) {
                    return (
                      <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: C.text, lineHeight: 1.5 }}>
                        <span style={{ color: C.accent, fontWeight: 900 }}>?</span>
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div style={cardStyle}>
              <div style={smallLabelStyle}>Reading diagnosis</div>
              <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 18, lineHeight: 1.3, margin: "5px 0 8px", letterSpacing: 0 }}>
                阅读策略
              </h3>
              <p style={{ fontSize: 13, color: C.textSec, lineHeight: 1.7, margin: 0 }}>
                Willow 故事和情景类阅读约 7 年级水平，议论文和科学类偏弱，整体测试约加州 6 年级平均。暑假阅读不要只选好读的故事，每周至少 4 次科学类或议论文。
              </p>
              <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
                {READING_TYPES.slice(0, 3).map(function(t) {
                  var count = dates.filter(function(d) {
                    var e = getEntry(entries, d);
                    return getCompletion(e).readingDone && e.readingType === t.key;
                  }).length;
                  return (
                    <div key={t.key} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.text }}>
                      <span>{t.label} · {t.cn}</span>
                      <strong style={{ ...NUM }}>{count}</strong>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={cardStyle}>
              <div style={smallLabelStyle}>Backup</div>
              <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 18, margin: "5px 0 8px", letterSpacing: 0 }}>数据</h3>
              <p style={{ fontSize: 12.5, color: C.textSec, lineHeight: 1.7, margin: "0 0 12px" }}>
                当前版本保存在本浏览器。更换设备前请导出 CSV 或复制 JSON 备份。
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <PrimaryButton onClick={exportCsv}>导出 CSV</PrimaryButton>
                <GhostButton onClick={copyBackup}>复制 JSON</GhostButton>
                <GhostButton onClick={clearDay} style={{ color: C.red }}>清空当天</GhostButton>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
