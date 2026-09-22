import React from 'react'

const Landing = () => {
  return (
    <div className="dw-root">
      <style>{`
        .dw-root {
          --bg: #060a06;
          --panel: #0b120b;
          --line: #1f3d1f;
          --green: #3dff6e;
          --green-dim: #1f7a3a;
          --text: #c9ffd6;

          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          font-family: 'Courier New', monospace;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .dw-video {
          display: block;
          width: 60%;
          margin: 24px auto 0;
          border: 1px solid var(--line);
        }

        .dw-panel {
          width: 100%;
          max-width: 420px;
          background: var(--panel);
          border: 1px solid var(--line);
          padding: 28px 24px;
          text-align: center;
        }

        .dw-logo {
          position: fixed;
          top: 20px;
          left: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--green);
          letter-spacing: 1px;
        }

        .dw-logo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
        }

        .dw-info {
          font-size: 16px;
          color: var(--green);
        }
      `}</style>

      <div className="dw-logo">
        <span className="dw-logo-dot" />
        ftsevstream
      </div>

      <div className="dw-panel">
        <div className="dw-info">ask us and get instant viewers on your Rumble live stream</div>

        <video
          className="dw-video"
          src="/heroVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  )
}

export default Landing