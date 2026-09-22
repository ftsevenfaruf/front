import React from 'react'

const PLANS = [
  {
    id: 'signal',
    name: 'BUY 100 USERS',
    price: '8',
    tagline: 'single feed, no frills',
    features: ['Pre-Screened Followers', 'Strict Privacy', 'Fast and Affordable'],
    cta: 'CONNECT WITH US',
    featured: false,
  },
  {
    id: 'uplink',
    name: 'GET 100 LIVESTREAM VIEWERS',
    price: '8',
    tagline: 'for daily operators',
    features: ['Pre-Screened Viewers', 'Strict Privacy', 'Fast and Affordable'],
    cta: 'CONNECT WITH US',
    featured: true,
    badge: 'MOST POPULAR',
  },
]



const Landing = () => {
  return (
    <div className="dw-root">
      <style>{`
        .dw-root {
          --bg: #ffffff;
          --panel: #3C910E;
          --line: #e3e5e9;
          --accent: #3C910E;
          --accent-dark: #3C910E;
          --text: #16181d;
          --text-dim: #6b7280;

          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
          padding: 88px 24px 64px;
        }

        .dw-logo {
          position: fixed;
          top: 20px;
          left: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
          z-index: 10;
        }

        .dw-logo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
        }

        .dw-hero {
          width: 100%;
          max-width: 720px;
          margin: 0 auto 72px;
          background: linear-gradient(180deg, #ffffff 0%, var(--panel) 100%);
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 56px 40px 40px;
          text-align: center;
          box-shadow: 0 12px 32px rgba(16, 24, 40, 0.06);
        }

        .dw-eyebrow {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: #3C910E;
          background: rgba(47, 111, 237, 0.08);
          border-radius: 999px;
          padding: 6px 14px;
          margin-bottom: 20px;
        }

        .dw-info {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -0.5px;
          line-height: 1.15;
          color: var(--text);
          max-width: 520px;
          margin: 0 auto;
        }

        .dw-subinfo {
          font-size: 16px;
          color: var(--text-dim);
          margin: 14px auto 0;
          max-width: 440px;
        }

        .dw-video {
          display: block;
          width: 45%;
          margin: 32px auto 0;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(16, 24, 40, 0.12);
        }

        .dw-section {
          max-width: 1080px;
          margin: 0 auto;
        }

        .dw-section-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 28px;
        }

        .dw-section-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }

        .dw-section-note {
          font-size: 14px;
          color: var(--text-dim);
        }

        .dw-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 720px;
          margin: 0 auto;
        }

        .dw-card {
          position: relative;
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
          transition: box-shadow 0.15s ease, transform 0.15s ease;
        }

        .dw-card:hover {
          box-shadow: 0 8px 20px rgba(16, 24, 40, 0.08);
          transform: translateY(-2px);
        }

        .dw-card--featured {
          border: 2px solid var(--accent);
        }

        .dw-badge {
          position: absolute;
          top: -12px;
          left: 24px;
          background: var(--accent);
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          border-radius: 999px;
          padding: 4px 12px;
        }

        .dw-card-name {
          font-size: 16px;
          font-weight: 700;
          color: var(--text);
        }

        .dw-card-tagline {
          font-size: 14px;
          color: var(--text-dim);
          margin: 6px 0 20px;
        }

        .dw-card-price {
          font-size: 36px;
          font-weight: 700;
          color: var(--text);
          line-height: 1;
        }

        .dw-card-price span {
          font-size: 14px;
          font-weight: 400;
          color: var(--text-dim);
        }

        .dw-card-features {
          list-style: none;
          margin: 22px 0 26px;
          padding: 0;
          flex-grow: 1;
        }

        .dw-card-features li {
          font-size: 14px;
          color: var(--text);
          padding: 7px 0;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .dw-card-features li::before {
          content: '✓';
          color: var(--accent);
          font-weight: 700;
        }

        .dw-card-cta {
          width: 100%;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 10px;
          color: var(--text);
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          padding: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
        }

        .dw-card-cta-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .dw-card-cta:hover {
          background: var(--text);
          color: #ffffff;
          border-color: var(--text);
        }

        .dw-card--featured .dw-card-cta {
          background: var(--accent);
          color: #ffffff;
          border-color: var(--accent);
        }

        .dw-card--featured .dw-card-cta:hover {
          background: var(--accent-dark);
          border-color: var(--accent-dark);
        }

        .dw-trust {
          max-width: 720px;
          margin: 56px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .dw-trust-item {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 16px 18px;
          text-align: left;
        }

        .dw-trust-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--text);
        }

        .dw-trust-detail {
          font-size: 13px;
          color: var(--text-dim);
          margin-top: 4px;
        }

        @media (max-width: 780px) {
          .dw-grid,
          .dw-trust {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="dw-logo">
        <span className="dw-logo-dot" />
        ftsevstream
      </div>

      <div className="dw-hero">
        <span className="dw-eyebrow">Live now</span>
        <div className="dw-info">Buy Rumble Followers / Live stream viewers</div>
        <p className="dw-subinfo">Build a Rumble Channel That Looks Worth Following</p>
        <video
          className="dw-video"
          src="/heroVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="dw-section">
        

        <div className="dw-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`dw-card${plan.featured ? ' dw-card--featured' : ''}`}
            >
              {plan.badge && <span className="dw-badge">{plan.badge}</span>}
              <div className="dw-card-name">{plan.name}</div>
              <div className="dw-card-tagline">{plan.tagline}</div>
              <div className="dw-card-price">
                ${plan.price}
                <span></span>
              </div>
              <ul className="dw-card-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="dw-card-cta" type="button">
                {plan.cta}
                <svg
                  className="dw-card-cta-icon"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* <div className="dw-trust">
          {TRUST.map((item) => (
            <div className="dw-trust-item" key={item.label}>
              <div className="dw-trust-label">{item.label}</div>
              <div className="dw-trust-detail">{item.detail}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Landing