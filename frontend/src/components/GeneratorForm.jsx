import { useState } from "react";

const examples = [
  "AI tools for students",
  "Fitness tips",
  "Study motivation",
  "Tech trends",
];

function GeneratorForm({ onGenerate, loading }) {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("engaging");
  const [duration, setDuration] = useState(30);
  const [platform, setPlatform] = useState("Instagram Reels");
  const [language, setLanguage] = useState("English");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!topic.trim()) {
      return;
    }

    onGenerate({
      topic: topic.trim(),
      tone,
      duration_seconds: Number(duration),
      platform,
      language,
    });
  };

  const handleClear = () => {
    setTopic("");
    setTone("engaging");
    setDuration(30);
    setPlatform("Instagram Reels");
    setLanguage("English");
  };

  const useExample = (example) => {
    setTopic(example);
  };

  return (
    <div className="card form-card">
      <div className="card-title">
        <div>
          <div className="section-label">STEP 01</div>
          <h2>Create your script</h2>
          <p>Tell us what you want to talk about.</p>
        </div>

        <div className="card-number">01</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="label-row">
            <label htmlFor="topic">What's your idea?</label>
            <span className="required-label">Required</span>
          </div>

          <textarea
            id="topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            placeholder="Example: 5 AI tools every student should know"
            maxLength={500}
            rows={5}
          />

          <small>{topic.length}/500</small>
        </div>

        <div className="examples">
          <span className="examples-label">Try an example</span>

          <div className="example-chips">
            {examples.map((example) => (
              <button
                key={example}
                type="button"
                className="example-chip"
                onClick={() => useExample(example)}
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tone">Tone</label>

            <select
              id="tone"
              value={tone}
              onChange={(event) => setTone(event.target.value)}
            >
              <option value="engaging">Engaging</option>
              <option value="energetic">Energetic</option>
              <option value="professional">Professional</option>
              <option value="funny">Funny</option>
              <option value="educational">Educational</option>
              <option value="motivational">Motivational</option>
              <option value="storytelling">Storytelling</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration</label>

            <select
              id="duration"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            >
              <option value="15">15 seconds</option>
              <option value="30">30 seconds</option>
              <option value="45">45 seconds</option>
              <option value="60">60 seconds</option>
              <option value="90">90 seconds</option>
              <option value="120">120 seconds</option>
              <option value="180">180 seconds</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="platform">Platform</label>

            <select
              id="platform"
              value={platform}
              onChange={(event) => setPlatform(event.target.value)}
            >
              <option value="Instagram Reels">Instagram Reels</option>
              <option value="YouTube Shorts">YouTube Shorts</option>
              <option value="TikTok">TikTok</option>
              <option value="Facebook Reels">Facebook Reels</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="language">Language</label>

            <select
              id="language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Kannada">Kannada</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>
        </div>

        <div className="buttons">
          <button
            type="submit"
            className="generate-button"
            disabled={loading || !topic.trim()}
          >
            {loading ? (
              <>
                <span className="button-spinner"></span>
                Creating...
              </>
            ) : (
              <>
                <span>✦</span>
                Generate Script
                <span>→</span>
              </>
            )}
          </button>

          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
            disabled={loading}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneratorForm;