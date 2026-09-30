import { useState } from "react";

function ScriptOutput({ script, loading, error }) {
  const [copied, setCopied] = useState(false);

  const copyScript = async () => {
    try {
      await navigator.clipboard.writeText(script);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="card output-card">
      <div className="card-title">
        <div>
          <div className="section-label">STEP 02</div>
          <h2>Your generated script</h2>
          <p>AI-created content ready for your next reel.</p>
        </div>

        <div className="card-number">02</div>
      </div>

      <div className="output">
        {loading && (
          <div className="loading">
            <div className="loading-orb">
              <div className="spinner"></div>
            </div>

            <h3>Creating your script</h3>

            <p>
              Groq AI is turning your idea into engaging content...
            </p>

            <div className="loading-bar">
              <span></span>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="error">
            <div className="error-icon">!</div>

            <h3>Generation failed</h3>

            <p>{error}</p>
          </div>
        )}

        {!loading && !error && !script && (
          <div className="empty">
            <div className="empty-icon">✦</div>

            <h3>Your script will appear here</h3>

            <p>
              Enter an idea on the left and let Groq AI create your
              next reel script.
            </p>
          </div>
        )}

        {!loading && !error && script && (
          <div className="result">
            <div className="result-topbar">
              <div className="result-status">
                <span></span>
                Generated successfully
              </div>

              <div className="result-ai">
                GROQ AI
              </div>
            </div>

            <div className="script-text">
              {script.split("\n").map((line, index) => {
                const cleanLine = line.replace(/\*\*/g, "");

                const isHeading =
                  /^(hook|body|cta|scene|intro|outro)/i.test(
                    cleanLine.trim()
                  );

                return (
                  <p
                    key={index}
                    className={isHeading ? "script-heading" : ""}
                  >
                    {cleanLine || "\u00A0"}
                  </p>
                );
              })}
            </div>

            <div className="result-actions">
              <button
                className="copy-button"
                onClick={copyScript}
              >
                {copied ? "✓ Copied!" : "Copy Script"}
              </button>

              <span className="script-ready">
                Ready to record
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScriptOutput;