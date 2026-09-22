import React, {useState } from 'react'

const Landing = () => {
  const [url, setUrl] = useState('')
  const [qty, setQty] = useState('')
  const [errors, setErrors] = useState({})

  const isValidUrl = (value) => {
    let parsed
    try {
      parsed = new URL(value)
    } catch {
      return false
    }
    const host = parsed.hostname.replace(/^www\./, '')
    return host === 'rumble.com' || host === 'youtube.com'
  }

  const validate = () => {
    const next = {}

    if (!url) {
      next.url = 'url is required'
    } else if (!isValidUrl(url)) {
      next.url = 'must be a valid rumble.com or youtube.com url'
    }

    const qtyNum = Number(qty)
    if (!qty) {
      next.qty = 'qty is required'
    } else if (!Number.isInteger(qtyNum) || qtyNum < 50 || qtyNum > 500) {
      next.qty = 'qty must be between 50 and 500'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // handle request here
  }



  return (
    <div className="dw-root">
      <style>{`
        .dw-root {
          --bg: #060a06;
          --panel: #0b120b;
          --line: #1f3d1f;
          --green: #3dff6e;
          --green-dim: #1f7a3a;
          --red: #ff5555;
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
          margin: 48px auto 0;
          border: 1px solid var(--line);
        }

        .dw-panel {
          width: 100%;
          max-width: 420px;
          background: var(--panel);
          border: 1px solid var(--line);
          padding: 28px 24px;
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
          font-size: 12px;
          color: var(--green-dim);
          margin-bottom: 18px;
        }

        .dw-field {
          margin-bottom: 18px;
        }

        .dw-label {
          display: block;
          font-size: 13px;
          color: var(--green);
          margin-bottom: 6px;
        }

        .dw-label::before {
          content: '> ';
          color: var(--green-dim);
        }

        .dw-input {
          width: 100%;
          box-sizing: border-box;
          background: #050705;
          border: 1px solid var(--line);
          color: var(--text);
          font-family: inherit;
          font-size: 14px;
          padding: 10px 12px;
          outline: none;
        }

        .dw-input:focus {
          border-color: var(--green-dim);
        }

        .dw-input-error {
          border-color: var(--red) !important;
        }

        .dw-input::placeholder {
          color: #2c4a30;
        }

        .dw-error {
          margin-top: 6px;
          font-size: 12px;
          color: var(--red);
        }

        .dw-submit {
          width: 100%;
          margin-top: 4px;
          padding: 12px;
          background: transparent;
          border: 1px solid var(--green-dim);
          color: var(--green);
          font-family: inherit;
          font-size: 14px;
          letter-spacing: 2px;
          cursor: pointer;
        }

        .dw-submit:hover {
          background: var(--green);
          color: #041006;
        }
      `}</style>

      <div className="dw-logo">
        <span className="dw-logo-dot" />
        ftsevenfaruf
      </div>

      <div className="dw-panel">
        <form onSubmit={handleSubmit}>
          <div className="dw-info">Boost your live stream on rumble instantly</div>

          <div className="dw-field">
            <label className="dw-label" htmlFor="dw-url">Url</label>
            <input
              id="dw-url"
              className={`dw-input${errors.url ? ' dw-input-error' : ''}`}
              type="text"
              placeholder="http://"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
            {errors.url && <div className="dw-error">{errors.url}</div>}
          </div>

          <div className="dw-field">
            <label className="dw-label" htmlFor="dw-qty">Qty</label>
            <input
              id="dw-qty"
              className={`dw-input${errors.qty ? ' dw-input-error' : ''}`}
              type="number"
              placeholder="0"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              autoComplete="off"
            />
            {errors.qty && <div className="dw-error">{errors.qty}</div>}
          </div>

          <button type="submit" className="dw-submit">
            [ send request ]
          </button>

          <video
            className="dw-video"
            src="/heroVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </form>
      </div>
    </div>
  )
}

export default Landing