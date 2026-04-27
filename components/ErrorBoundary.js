/* ─── Know U. Learning — 全局 Error Boundary ─── */
import React from 'react';
import * as Sentry from '@sentry/nextjs';
import { C, FONT, FONT_DISPLAY } from '../lib/theme';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo: errorInfo });
    // 上报到 Sentry（@sentry/nextjs 已装）
    try {
      Sentry.captureException(error, { extra: { componentStack: errorInfo && errorInfo.componentStack } });
    } catch (e) {
      // Sentry 自己挂了不影响 fallback UI
      // eslint-disable-next-line no-console
      console.error('[ErrorBoundary] Sentry capture failed:', e);
    }
    // 始终在 console 留痕（dev 看堆栈、prod 浏览器开 devtools 也能看）
    // eslint-disable-next-line no-console
    console.error('[ErrorBoundary] caught:', error, errorInfo);
  }

  handleReload = () => {
    if (typeof window !== 'undefined') window.location.reload();
  };

  handleGoHome = () => {
    if (typeof window !== 'undefined') window.location.href = '/';
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    var isDev = process.env.NODE_ENV !== 'production';
    var error = this.state.error;
    var stack = error && error.stack ? String(error.stack) : '';
    var compStack = this.state.errorInfo && this.state.errorInfo.componentStack ? String(this.state.errorInfo.componentStack) : '';

    return (
      <div style={{
        minHeight: '100vh',
        background: C.bg,
        fontFamily: FONT,
        color: C.text,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}>
        <div style={{
          maxWidth: 560,
          width: '100%',
          background: C.card,
          border: '1px solid ' + C.border,
          borderRadius: 16,
          padding: '32px 28px',
          boxShadow: C.shadow,
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 48,
            marginBottom: 12,
            lineHeight: 1,
          }}>
            😵‍💫
          </div>
          <h1 style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 24,
            fontWeight: 700,
            color: C.text,
            margin: '0 0 10px',
            letterSpacing: '-0.02em',
          }}>
            页面出了点小问题
          </h1>
          <p style={{
            fontSize: 14.5,
            color: C.textSec,
            lineHeight: 1.7,
            margin: '0 auto 22px',
            maxWidth: 420,
          }}>
            别担心，你的学习数据安全保存。试试刷新页面，或回首页重来。
          </p>

          <div style={{
            display: 'flex',
            gap: 10,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: isDev ? 20 : 0,
          }}>
            <button onClick={this.handleReload} style={{
              padding: '11px 22px',
              background: C.accent,
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              fontFamily: FONT,
              fontSize: 14.5,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 12px ' + C.accent + '44',
            }}>
              ↻ 刷新页面
            </button>
            <button onClick={this.handleGoHome} style={{
              padding: '11px 20px',
              background: 'transparent',
              color: C.text,
              border: '1px solid ' + C.border,
              borderRadius: 10,
              fontFamily: FONT,
              fontSize: 14.5,
              fontWeight: 600,
              cursor: 'pointer',
            }}>
              回首页
            </button>
          </div>

          {isDev && (
            <details style={{
              marginTop: 4,
              textAlign: 'left',
              background: C.bg,
              border: '1px solid ' + C.border,
              borderRadius: 10,
              padding: '12px 14px',
            }}>
              <summary style={{
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 700,
                color: C.red,
                letterSpacing: '0.02em',
              }}>
                Dev: error details
              </summary>
              <pre style={{
                fontSize: 11.5,
                color: C.textSec,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                margin: '10px 0 0',
                fontFamily: "'SF Mono','Menlo',monospace",
                lineHeight: 1.5,
                maxHeight: 280,
                overflow: 'auto',
              }}>
                {(error && (error.message || String(error))) + '\n\n' + stack + (compStack ? '\n\nComponent stack:' + compStack : '')}
              </pre>
            </details>
          )}
        </div>
      </div>
    );
  }
}
