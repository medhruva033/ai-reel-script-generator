import { useState } from "react";
import Header from "./components/Header";
import GeneratorForm from "./components/GeneratorForm";
import ScriptOutput from "./components/ScriptOutput";
import "./App.css";

function App() {
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateScript = async (formData) => {
    setLoading(true);
    setError("");
    setScript("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to generate script.");
      }

      setScript(data.script);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="hero">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            POWERED BY GROQ AI
          </div>

          <h1>
            Turn your ideas into
            <span> viral scripts.</span>
          </h1>

          <p className="hero-description">
            Create engaging, ready-to-record reel scripts in seconds.
            Choose your style, platform and duration — let AI handle the rest.
          </p>

          <div className="hero-features">
            <span>✦ Fast AI generation</span>
            <span>◈ Multiple platforms</span>
            <span>✧ Ready to record</span>
          </div>
        </section>

        <section className="generator">
          <GeneratorForm
            onGenerate={generateScript}
            loading={loading}
          />

          <ScriptOutput
            script={script}
            loading={loading}
            error={error}
          />
        </section>

        <section className="feature-strip">
          <div className="feature-item">
            <div className="feature-icon">✦</div>
            <div>
              <strong>Groq AI</strong>
              <span>Fast AI generation</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <div>
              <strong>Instant workflow</strong>
              <span>Idea to script in seconds</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">◈</div>
            <div>
              <strong>Multiple platforms</strong>
              <span>Reels, Shorts & TikTok</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;