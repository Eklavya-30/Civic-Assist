function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🏛</span>
          CivicAssist
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#schemes">Schemes</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-button">
          Get Started
        </button>
      </nav>


      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <div className="badge">
            ✨ Your guide to government assistance
          </div>

          <h1>
            Government schemes,
            <span> made simple.</span>
          </h1>

          <p>
            Discover government schemes and services that match your
            needs, understand your eligibility, and find out how to apply —
            all in one place.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Find My Schemes <span>→</span>
            </button>

            <button className="secondary-btn">
              Explore Schemes
            </button>
          </div>

          <div className="trust-line">
            <span>✓</span> Simple &amp; accessible
            <span>✓</span> Personalized
            <span>✓</span> AI-assisted
          </div>

        </div>


        {/* Hero Visual */}
        <div className="hero-visual">

          <div className="glow"></div>

          <div className="visual-card">

            <div className="visual-header">
              <div className="mini-logo">🏛</div>
              <div>
                <strong>CivicAssist</strong>
                <small>Scheme Finder</small>
              </div>
            </div>

            <div className="search-box">
              <span>🔎</span>
              <span className="search-text">
                What are you looking for?
              </span>
            </div>

            <div className="scheme-preview">

              <div className="scheme-icon">🎓</div>

              <div className="scheme-info">
                <strong>Education Assistance</strong>
                <span>Scholarships &amp; student support</span>
              </div>

              <div className="match">94%</div>

            </div>

            <div className="scheme-preview">

              <div className="scheme-icon">💼</div>

              <div className="scheme-info">
                <strong>Employment Support</strong>
                <span>Jobs &amp; skill development</span>
              </div>

              <div className="match">89%</div>

            </div>

            <div className="ai-note">
              <span>🤖</span>
              <div>
                <strong>AI-powered assistance</strong>
                <small>Helping you find the right scheme</small>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="features-section" id="schemes">

        <div className="section-heading">
          <div className="section-badge">WHY CIVICASSIST?</div>

          <h2>
            Everything you need,
            <span> in one place.</span>
          </h2>

          <p>
            Finding government assistance shouldn't be complicated.
            CivicAssist makes the process easier.
          </p>
        </div>


        <div className="features">

          <div className="feature-card">
            <div className="feature-icon blue">🔎</div>
            <h3>Smart Search</h3>
            <p>
              Find relevant government schemes based on your needs
              instead of searching through hundreds of websites.
            </p>
            <div className="card-arrow">→</div>
          </div>


          <div className="feature-card">
            <div className="feature-icon purple">🤖</div>
            <h3>AI Assistance</h3>
            <p>
              Ask questions in simple language and get helpful,
              understandable answers about government schemes.
            </p>
            <div className="card-arrow">→</div>
          </div>


          <div className="feature-card">
            <div className="feature-icon green">✓</div>
            <h3>Eligibility Check</h3>
            <p>
              Understand whether you may qualify for a scheme
              based on your personal circumstances.
            </p>
            <div className="card-arrow">→</div>
          </div>

        </div>

      </section>


      {/* How It Works */}
      <section className="how-section" id="how-it-works">

        <div className="section-heading">
          <div className="section-badge">HOW IT WORKS</div>

          <h2>
            From confusion to
            <span> clarity.</span>
          </h2>
        </div>


        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <h3>Tell us about yourself</h3>
            <p>
              Share your basic information and what kind of
              assistance you are looking for.
            </p>
          </div>

          <div className="step-line"></div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>We find your matches</h3>
            <p>
              CivicAssist analyzes your requirements and finds
              relevant government schemes.
            </p>
          </div>

          <div className="step-line"></div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Understand &amp; apply</h3>
            <p>
              Explore benefits, eligibility and application
              information for the schemes you need.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cta-section" id="about">

        <div className="cta-content">
          <span className="cta-icon">🏛</span>

          <h2>
            Let's find the right
            <span> support for you.</span>
          </h2>

          <p>
            Government assistance is there to help.
            CivicAssist helps you discover it.
          </p>

          <button className="primary-btn">
            Find My Schemes <span>→</span>
          </button>
        </div>

      </section>


      {/* Footer */}
      <footer>
        <div className="footer-logo">
          <span>🏛</span> CivicAssist
        </div>

        <p>
          Making government assistance easier to discover.
        </p>

        <span className="copyright">
          © 2026 CivicAssist
        </span>
      </footer>

    </div>
  );
}

export default Home;