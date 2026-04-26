/* ─── Know U. Learning — 常见问题 FAQ 抽屉 ────────────────────────────────
 *
 * 从 UserCenter 入口打开，右侧滑入。手风琴式展开/折叠每条问答。
 * 答案用大白话写，避免法律黑话和技术黑话。
 * ──────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import { C, FONT } from '../lib/theme';

var FAQ_ITEMS = [
  {
    q: '什么是"学习画像"？为什么需要填？',
    a: '学习画像就是告诉 AI 你是谁——你在哪个城市、几年级、喜欢什么、身边有哪些朋友。有了这些，AI 才能用你真实的生活来编例句。背 abandon 这个词，别人看到的是教科书例句，你看到的可能是"上周和 Emily 在 Spectrum 打网球，下大雨只能 abandon 比赛"——这种带着自己生活气息的句子，记得才牢。画像可以随时改，越填得细，例句越贴你。',
  },
  {
    q: '我的数据安全吗？会被 OpenAI / DeepSeek 拿去训练模型吗？',
    a: '不会。我们调用大模型 API 时使用的是企业接口，按照供应商条款，API 调用的内容不会被用于训练他们的模型。你的学习画像、学习记录存在 Supabase 上，只有你自己能访问。我们绝不会把你的数据卖给第三方，也不会用作广告投放。详情见隐私政策。',
  },
  {
    q: '免费用户每天能学多少词？',
    a: '推广期内免费用户每天可学 30 个新词 + 不限量复习。游客（不登录）每天试 5 个词。如果你想一天学更多，可以升级 Pro（$20/月）解锁无限学习量；但其实大多数人每天 10-20 个新词刚好——记得住、不焦虑，比刷量更重要。',
  },
  {
    q: '推广期免费会持续多久？后面要收费吗？',
    a: '推广期至少持续到 2026 年内，具体何时结束会提前 30 天在 app 内公告。即便推广期结束，免费层也会一直保留——我们要做的是让真正用得上的人付费支持，不是把所有人逼到付费墙后面。如果你在推广期注册过，结束后我们会给老用户特别折扣。',
  },
  {
    q: '怎么调整每日新词数量？',
    a: '进入 Vocab 课，右上角设置图标 → 学习设定 → 每日新词目标，可以在 5-50 之间任选。建议从 10 开始，连续坚持一周后再往上加。一次贪多容易第二天放弃，少而日日坚持，三个月后回头看会吓到自己。',
  },
  {
    q: '间隔重复算法是什么？为什么这个词今天又出现了？',
    a: '人脑的记忆曲线是会衰减的：今天背会了，明天忘一半，一周后只剩 20%。间隔重复算法（基于 Ebbinghaus 曲线）会算出每个词最该复习的时间点——通常是 1 天、3 天、7 天、14 天、30 天再各刷一次，越复习间隔越长。今天又看到这个词，是算法判断"再不刷你就要忘了"。坚持按提示复习，长期记忆比死记硬背扎实十倍。',
  },
  {
    q: '我能导出我的学习数据吗？',
    a: '能。打开右上角用户中心 → 数据与隐私 → 导出我的数据，会下载一个 JSON 文件，包含你的学习画像、所有词的学习进度、复习日程、统计、反馈记录。文件可以备份，也可以拿去做你自己的数据分析。',
  },
  {
    q: '怎么删除我的账号？',
    a: '用户中心 → 数据与隐私 → 删除我的账号。系统会先弹一次确认，再让你输入完整邮箱二次确认。点击后，你的画像、学习数据、订阅记录、反馈，以及账号本身会被永久清除，无法恢复。建议删除前先导出一份数据备份。如果只是想暂时不用，直接退出登录即可，账号会保留。',
  },
  {
    q: '为什么有时候 teach 加载很慢？',
    a: '"Teach"环节是 AI 实时根据你的画像生成讲解，需要调用大模型 API，正常 3-8 秒，网络差时可能 10-15 秒。如果超过 20 秒还在转，多半是网络问题或模型服务高峰——刷新一下，或换个网络试试。我们也在缓存常见词，多人学过的词后续会越来越快。',
  },
  {
    q: '我有反馈 / bug 报告，怎么联系？',
    a: '直接邮件 chompcloud@gmail.com，或者 Winstonwu1996@icloud.com。Winston（创始人）本人会看每一封邮件，通常 24 小时内回复。说清楚是什么场景、出了什么问题，最好附一张截图。你的反馈会直接影响下一版迭代——这个产品就是被早期用户的反馈一封一封改出来的。',
  },
];

export default function FAQPanel({ open, onClose }) {
  var [expandedIdx, setExpandedIdx] = useState(-1);
  if (!open) return null;

  var toggle = function(i) {
    setExpandedIdx(function(prev) { return prev === i ? -1 : i; });
  };

  return (
    <>
      {/* Overlay */}
      <div
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: C.overlay, backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: 2010 }}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(360px, 90vw)',
          background: C.card, zIndex: 2011,
          boxShadow: '-8px 0 30px rgba(0,0,0,0.15)',
          fontFamily: FONT, overflowY: 'auto',
          animation: 'slideInFromRight 0.25s ease-out',
        }}
      >
        <div style={{ padding: '20px 20px 32px' }}>
          {/* Back button */}
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: 14, color: C.textSec, cursor: 'pointer', padding: '4px 8px', marginBottom: 12, fontFamily: FONT, fontWeight: 600 }}
          >
            ← 返回
          </button>

          <h2 style={{ fontSize: 20, fontWeight: 800, color: C.text, margin: '0 0 4px' }}>❓ 常见问题</h2>
          <p style={{ fontSize: 12, color: C.textSec, margin: '0 0 20px', lineHeight: 1.6 }}>
            点击问题查看回答；找不到答案？欢迎邮件联系 Winston。
          </p>

          {/* Accordion */}
          <div>
            {FAQ_ITEMS.map(function(item, i) {
              var open = expandedIdx === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid ' + C.border,
                    paddingBottom: open ? 14 : 0,
                  }}
                >
                  <button
                    onClick={function() { toggle(i); }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                      gap: 10, width: '100%',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      padding: '14px 0', textAlign: 'left',
                      fontFamily: FONT,
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 600, color: C.text, lineHeight: 1.5, flex: 1 }}>
                      {item.q}
                    </span>
                    <span
                      style={{
                        fontSize: 16, color: C.textSec, flexShrink: 0,
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        marginTop: 2,
                      }}
                    >
                      ⌄
                    </span>
                  </button>
                  {open && (
                    <div
                      style={{
                        fontSize: 13, color: C.textSec, lineHeight: 1.8,
                        padding: '0 4px 4px',
                        animation: 'fadeInFAQ 0.2s ease-out',
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer hint */}
          <div
            style={{
              marginTop: 24, padding: '14px 14px',
              background: C.accentLight, borderRadius: 10,
              fontSize: 12, color: C.text, lineHeight: 1.7,
            }}
          >
            💌 还没找到答案？给 Winston 写信 →<br />
            <a
              href="mailto:chompcloud@gmail.com"
              style={{ color: C.accent, fontWeight: 700, textDecoration: 'none' }}
            >
              chompcloud@gmail.com
            </a>
          </div>
        </div>

        {/* 局部动画样式（slideInFromRight 已在全局 CSS） */}
        <style dangerouslySetInnerHTML={{ __html: '@keyframes fadeInFAQ { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }' }} />
      </div>
    </>
  );
}
