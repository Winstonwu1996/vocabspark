// ─── history-engine: 极简内联 markdown 渲染 ────────────────────────────
// 为什么存在: 考点卡/仿真练习正文里写了 `**加粗**` 和 markdown 表格, 但显示组件
// 原本纯文本直出 (white-space: pre-wrap), 导致全站 66/72 门 notebook 共 ~17K 处 `**`
// 以原始星号露出来 (学生以为软件崩了)。这里只解析两样东西, 故意 NOT 支持标题/列表/
// 链接/斜体 —— 范围越小越可控, 不引 react-markdown (体积大 + 会解析我们不想要的语法)。
// 返回 React 元素 (不用 dangerouslySetInnerHTML, 杜绝 XSS)。容器仍保留 white-space:pre-wrap
// 来渲染文本块里的换行。
import React from 'react';

var TABLE = { borderCollapse: 'collapse', width: '100%', margin: '6px 0', fontSize: '0.95em' };
var TH = { border: '1px solid rgba(0,0,0,0.15)', padding: '4px 8px', textAlign: 'left', background: 'rgba(0,0,0,0.04)', fontWeight: 700 };
var TD = { border: '1px solid rgba(0,0,0,0.12)', padding: '4px 8px', textAlign: 'left', verticalAlign: 'top' };

// 把一段纯文本里的 **x** 解析成 [string | <strong>] 数组。未闭合/嵌套 * 安全留原样。
function parseBold(text, keyPrefix) {
  var out = [];
  var re = /\*\*([^*\n]+)\*\*/g;
  var last = 0, m, i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(React.createElement('strong', { key: keyPrefix + 'b' + (i++) }, m[1]));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function isTableRow(line) { return /^\s*\|.*\|\s*$/.test(line); }
function isTableSep(line) { return /^\s*\|[\s:|-]+\|\s*$/.test(line); }
function splitCells(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(function(c) { return c.trim(); });
}

// 主入口: 文本 → React 节点。文本块保留换行(靠容器 pre-wrap); markdown 表格 → <table>。
export function renderInlineMd(text) {
  if (text == null) return null;
  var str = String(text);
  if (str.indexOf('**') === -1 && str.indexOf('|') === -1) return str; // 无 md, 原样返回
  var lines = str.split('\n');
  var blocks = [];
  var buf = [];
  function flush() { if (buf.length) { blocks.push({ t: 'text', s: buf.join('\n') }); buf = []; } }
  for (var i = 0; i < lines.length;) {
    if (isTableRow(lines[i]) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      flush();
      var tl = [lines[i], lines[i + 1]];
      var j = i + 2;
      while (j < lines.length && isTableRow(lines[j])) { tl.push(lines[j]); j++; }
      blocks.push({ t: 'table', lines: tl });
      i = j;
    } else { buf.push(lines[i]); i++; }
  }
  flush();
  return blocks.map(function(b, bi) {
    if (b.t === 'text') {
      return React.createElement(React.Fragment, { key: 'x' + bi }, parseBold(b.s, 'x' + bi));
    }
    var rows = b.lines.filter(function(_, idx) { return idx !== 1; }).map(splitCells);
    var head = rows[0] || [];
    var body = rows.slice(1);
    return React.createElement('table', { key: 'tb' + bi, style: TABLE },
      React.createElement('thead', null,
        React.createElement('tr', null, head.map(function(c, ci) {
          return React.createElement('th', { key: ci, style: TH }, parseBold(c, 'h' + bi + '_' + ci));
        }))
      ),
      React.createElement('tbody', null, body.map(function(r, ri) {
        return React.createElement('tr', { key: ri }, r.map(function(c, ci) {
          return React.createElement('td', { key: ci, style: TD }, parseBold(c, 'd' + bi + '_' + ri + '_' + ci));
        }));
      }))
    );
  });
}
