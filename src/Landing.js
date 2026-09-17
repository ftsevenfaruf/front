import React, { useEffect, useState } from 'react'

const STYLES = `
:root {
  --bg: #07090a;
  --bg-raised: #0d1210;
  --line: #1c2622;
  --ink: #c9d6cf;
  --ink-dim: #6d7c75;
  --phosphor: #7fffb0;
  --phosphor-dim: #3a7a58;
  --alert: #ff5f5f;
  --mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace;
}

.fsv-root {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--mono);
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  line-height: 1.5;
}

.fsv-scanlines {
  pointer-events: none;
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.018) 0px,
    rgba(255, 255, 255, 0.018) 1px,
    transparent 1px,
    transparent 3px
  );
  z-index: 50;
  mix-blend-mode: overlay;
}

.fsv-noise {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 49;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.fsv-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
  border-bottom: 1px solid var(--line);
  font-size: 12px;
  color: var(--ink-dim);
  letter-spacing: 0.02em;
}

.fsv-topbar .fsv-dot {
  color: var(--phosphor);
}

.fsv-nav {
  display: flex;
  gap: 24px;
}

.fsv-nav a {
  color: var(--ink-dim);
  text-decoration: none;
  font-size: 12px;
}

.fsv-nav a:hover {
  color: var(--phosphor);
}

.fsv-hero {
  max-width: 880px;
  margin: 0 auto;
  padding: 96px 32px 64px;
}

.fsv-kicker {
  color: var(--phosphor-dim);
  font-size: 12px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.fsv-kicker .fsv-cursor {
  display: inline-block;
  width: 7px;
  height: 13px;
  background: var(--phosphor);
  animation: blink 1.1s steps(1) infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.fsv-title {
  font-size: clamp(2.6rem, 7vw, 4.6rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0 0 6px;
  position: relative;
  width: fit-content;
}

.fsv-title .fsv-glitch {
  position: absolute;
  inset: 0;
  color: var(--phosphor);
  clip-path: inset(0 0 88% 0);
  transform: translate(-2px, -1px);
  opacity: 0.75;
  animation: glitch 5s infinite;
}

@keyframes glitch {
  0%, 92%, 100% { clip-path: inset(0 0 88% 0); transform: translate(-2px, -1px); }
  93% { clip-path: inset(30% 0 40% 0); transform: translate(3px, 1px); }
  94% { clip-path: inset(60% 0 10% 0); transform: translate(-3px, 0px); }
  95% { clip-path: inset(10% 0 70% 0); transform: translate(2px, 2px); }
}

.fsv-subtitle {
  color: var(--ink-dim);
  font-size: 15px;
  max-width: 58ch;
  margin: 22px 0 36px;
}

.fsv-cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.fsv-btn {
  font-family: var(--mono);
  font-size: 13px;
  padding: 12px 20px;
  border: 1px solid var(--phosphor-dim);
  background: transparent;
  color: var(--phosphor);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.fsv-btn:hover {
  background: var(--phosphor);
  color: #04140b;
}

.fsv-btn.fsv-ghost {
  border-color: var(--line);
  color: var(--ink-dim);
}

.fsv-btn.fsv-ghost:hover {
  background: var(--bg-raised);
  color: var(--ink);
}

.fsv-terminal {
  margin-top: 56px;
  border: 1px solid var(--line);
  background: var(--bg-raised);
}

.fsv-terminal-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-bottom: 1px solid var(--line);
  font-size: 11px;
  color: var(--ink-dim);
}

.fsv-terminal-bar span:first-child {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--phosphor-dim);
  display: inline-block;
}

.fsv-terminal-body {
  padding: 20px;
  font-size: 13px;
}

.fsv-terminal-body .fsv-line {
  margin-bottom: 6px;
  white-space: pre-wrap;
}

.fsv-terminal-body .fsv-prompt {
  color: var(--phosphor);
}

.fsv-terminal-body .fsv-out {
  color: var(--ink-dim);
}

.fsv-section {
  max-width: 880px;
  margin: 0 auto;
  padding: 48px 32px;
  border-top: 1px solid var(--line);
}

.fsv-section-label {
  color: var(--phosphor-dim);
  font-size: 12px;
  margin-bottom: 24px;
}

.fsv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.fsv-card {
  background: var(--bg);
  padding: 24px;
}

.fsv-card h3 {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  margin: 0 0 10px;
}

.fsv-card p {
  font-size: 13px;
  color: var(--ink-dim);
  margin: 0;
}

.fsv-card .fsv-tag {
  color: var(--phosphor-dim);
  font-size: 11px;
  margin-bottom: 10px;
  display: block;
}

.fsv-log {
  font-size: 12.5px;
  color: var(--ink-dim);
}

.fsv-log .fsv-row {
  display: flex;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid var(--line);
}

.fsv-log .fsv-row:last-child {
  border-bottom: none;
}

.fsv-log .fsv-time {
  color: var(--phosphor-dim);
  flex-shrink: 0;
  width: 74px;
}

.fsv-log .fsv-ok {
  color: var(--phosphor);
}

.fsv-log .fsv-warn {
  color: var(--alert);
}

.fsv-footer {
  max-width: 880px;
  margin: 0 auto;
  padding: 40px 32px 64px;
  display: flex;
  justify-content: space-between;
  color: var(--ink-dim);
  font-size: 12px;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 640px) {
  .fsv-grid {
    grid-template-columns: 1fr;
  }
  .fsv-topbar {
    padding: 16px 20px;
  }
  .fsv-hero, .fsv-section, .fsv-footer {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fsv-kicker .fsv-cursor, .fsv-title .fsv-glitch {
    animation: none;
  }
}
`

const LOG_LINES = [
  { time: '04:12:01', text: 'handshake accepted', tone: 'ok' },
  { time: '04:12:02', text: 'route table synced — 3 peers', tone: 'ok' },
  { time: '04:12:04', text: 'stale key rotated', tone: 'warn' },
  { time: '04:12:04', text: 'session sealed', tone: 'ok' },
]

const Landing = () => {
  const [typed, setTyped] = useState('')
  const full = 'fsv init --mode=covert'

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(full.slice(0, i))
      if (i >= full.length) clearInterval(id)
    }, 55)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fsv-root">
      <style>{STYLES}</style>
      <div className="fsv-scanlines" />
      <div className="fsv-noise" />

      <div className="fsv-topbar">
        <div>
          <span className="fsv-dot">●</span> ftseverfaruf
        </div>
        <div className="fsv-nav">
          <a href="#protocol">protocol</a>
          <a href="#activity">activity</a>
          <a href="#access">access</a>
        </div>
      </div>

      <section className="fsv-hero">
        <div className="fsv-kicker">
          <span className="fsv-cursor" />
          no accounts. no dashboards. just a channel.
        </div>

        <h1 className="fsv-title">
          ftseverfaruf
          <span className="fsv-glitch" aria-hidden="true">ftseverfaruf</span>
        </h1>

        <p className="fsv-subtitle">
          A quiet transport layer for people who'd rather not explain themselves twice.
          Messages route through nobody in particular and land exactly once.
        </p>

        <div className="fsv-cta-row">
          <button className="fsv-btn">request invite</button>
          <button className="fsv-btn fsv-ghost">read the protocol</button>
        </div>

        <div className="fsv-terminal">
          <div className="fsv-terminal-bar">
            <span />
            session — /dev/tty1
          </div>
          <div className="fsv-terminal-body">
            <div className="fsv-line">
              <span className="fsv-prompt">$ </span>
              {typed}
              <span className="fsv-cursor" style={{ display: typed.length === full.length ? 'inline-block' : 'none', verticalAlign: 'middle', marginLeft: 2 }} />
            </div>
            {typed.length === full.length && (
              <>
                <div className="fsv-line fsv-out">resolving relay… ok</div>
                <div className="fsv-line fsv-out">binding identity… anonymous</div>
                <div className="fsv-line fsv-out">ready.</div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="fsv-section" id="protocol">
        <div className="fsv-section-label">// protocol</div>
        <div className="fsv-grid">
          <div className="fsv-card">
            <span className="fsv-tag">01</span>
            <h3>Onion-routed by default</h3>
            <p>Every message hops through at least three relays before it's readable by anyone but the recipient.</p>
          </div>
          <div className="fsv-card">
            <span className="fsv-tag">02</span>
            <h3>Keys that expire</h3>
            <p>Session keys rotate on a timer you set. Nothing outlives the conversation on purpose.</p>
          </div>
          <div className="fsv-card">
            <span className="fsv-tag">03</span>
            <h3>No server memory</h3>
            <p>Relays forget a packet the moment it's forwarded. There's nothing left to subpoena.</p>
          </div>
        </div>
      </section>

      <section className="fsv-section" id="activity">
        <div className="fsv-section-label">// live activity (synthetic feed)</div>
        <div className="fsv-log">
          {LOG_LINES.map((l, idx) => (
            <div className="fsv-row" key={idx}>
              <span className="fsv-time">{l.time}</span>
              <span className={l.tone === 'ok' ? 'fsv-ok' : 'fsv-warn'}>
                {l.tone === 'ok' ? '✓' : '!'}
              </span>
              <span>{l.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="fsv-section" id="access">
        <div className="fsv-section-label">// access</div>
        <p style={{ color: 'var(--ink-dim)', fontSize: 13, maxWidth: '58ch', marginBottom: 24 }}>
          Invites are issued by existing members. If you know one, ask them for a token.
          If you don't, the form below reaches a human, eventually.
        </p>
        <div className="fsv-cta-row">
          <button className="fsv-btn">request invite</button>
        </div>
      </section>

      <div className="fsv-footer">
        <span>ftseverfaruf — est. unknown</span>
        <span>uptime 412d 06h</span>
      </div>
    </div>
  )
}

export default Landing
