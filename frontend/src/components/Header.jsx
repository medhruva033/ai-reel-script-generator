function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">✦</div>

        <div>
          <h2>ReelScript AI</h2>
          <span>AI Reel Script Generator</span>
        </div>
      </div>

      <div className="header-right">
        <div className="ai-badge">
          <span className="status-dot"></span>
          AI Ready
        </div>

        <div className="header-badge">
          GROQ
        </div>
      </div>
    </header>
  );
}

export default Header;