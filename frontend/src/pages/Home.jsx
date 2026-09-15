import { useState } from "react";

function Home() {
  // =========================================
  // COMPLAINT FORM STATE
  // =========================================

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================================
  // TRACK COMPLAINT STATE
  // =========================================

  const [complaintId, setComplaintId] = useState("");
  const [trackedComplaint, setTrackedComplaint] = useState(null);
  const [trackError, setTrackError] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  // =========================================
  // SUBMIT COMPLAINT
  // =========================================

  const handleSubmitComplaint = async (e) => {
    e.preventDefault();

    setSubmitMessage("");
    setSubmitError("");

    // Basic validation
    if (!name || !category || !location || !description) {
      setSubmitError("Please fill in all the fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/complaints",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            category: category,
            description: description,
            location: location,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit complaint");
      }

      const data = await response.json();

      setSubmitMessage(
        `✓ Complaint submitted successfully! Your Complaint ID is #${data.complaint.id}`
      );

      // Automatically put the new complaint ID into tracking
      setComplaintId(data.complaint.id);

      // Clear form
      setName("");
      setCategory("");
      setLocation("");
      setDescription("");

    } catch (error) {
      console.error(error);

      setSubmitError(
        "Unable to connect to the backend. Please make sure the backend is running."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // =========================================
  // TRACK COMPLAINT
  // =========================================

  const handleTrackComplaint = async (e) => {
    e.preventDefault();

    setTrackedComplaint(null);
    setTrackError("");

    if (!complaintId) {
      setTrackError("Please enter a complaint ID.");
      return;
    }

    setIsTracking(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/complaints/${complaintId}`
      );

      if (!response.ok) {
        throw new Error("Complaint not found");
      }

      const data = await response.json();

      // Backend may return complaint directly
      // or inside a "complaint" property.
      const complaint = data.complaint || data;

      setTrackedComplaint(complaint);

    } catch (error) {
      console.error(error);

      setTrackError(
        "Complaint not found. Please check the Complaint ID and try again."
      );
    } finally {
      setIsTracking(false);
    }
  };

  return (
    <div className="home">

      {/* =========================================
          NAVBAR
          ========================================= */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">🏛</span>
          CivicAssist
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#schemes">Schemes</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#complaint">Report Issue</a>
          <a href="#track">Track Complaint</a>
        </div>

        <a href="#complaint">
          <button className="nav-button">
            Get Started
          </button>
        </a>

      </nav>


      {/* =========================================
          HERO SECTION
          ========================================= */}

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

            <a href="#schemes">
              <button className="primary-btn">
                Find My Schemes <span>→</span>
              </button>
            </a>

            <a href="#schemes">
              <button className="secondary-btn">
                Explore Schemes
              </button>
            </a>

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

              <div className="mini-logo">
                🏛
              </div>

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

              <div className="scheme-icon">
                🎓
              </div>

              <div className="scheme-info">
                <strong>Education Assistance</strong>
                <span>
                  Scholarships &amp; student support
                </span>
              </div>

              <div className="match">
                94%
              </div>

            </div>


            <div className="scheme-preview">

              <div className="scheme-icon">
                💼
              </div>

              <div className="scheme-info">
                <strong>Employment Support</strong>
                <span>
                  Jobs &amp; skill development
                </span>
              </div>

              <div className="match">
                89%
              </div>

            </div>


            <div className="ai-note">

              <span>🤖</span>

              <div>
                <strong>AI-powered assistance</strong>
                <small>
                  Helping you find the right scheme
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          FEATURES
          ========================================= */}

      <section
        className="features-section"
        id="schemes"
      >

        <div className="section-heading">

          <div className="section-badge">
            WHY CIVICASSIST?
          </div>

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

            <div className="feature-icon blue">
              🔎
            </div>

            <h3>
              Smart Search
            </h3>

            <p>
              Find relevant government schemes based on your needs
              instead of searching through hundreds of websites.
            </p>

            <div className="card-arrow">
              →
            </div>

          </div>


          <div className="feature-card">

            <div className="feature-icon purple">
              🤖
            </div>

            <h3>
              AI Assistance
            </h3>

            <p>
              Ask questions in simple language and get helpful,
              understandable answers about government schemes.
            </p>

            <div className="card-arrow">
              →
            </div>

          </div>


          <div className="feature-card">

            <div className="feature-icon green">
              ✓
            </div>

            <h3>
              Eligibility Check
            </h3>

            <p>
              Understand whether you may qualify for a scheme
              based on your personal circumstances.
            </p>

            <div className="card-arrow">
              →
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          HOW IT WORKS
          ========================================= */}

      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="section-heading">

          <div className="section-badge">
            HOW IT WORKS
          </div>

          <h2>
            From confusion to
            <span> clarity.</span>
          </h2>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>
              Tell us about yourself
            </h3>

            <p>
              Share your basic information and what kind of
              assistance you are looking for.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>
              We find your matches
            </h3>

            <p>
              CivicAssist analyzes your requirements and finds
              relevant government schemes.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>
              Understand &amp; apply
            </h3>

            <p>
              Explore benefits, eligibility and application
              information for the schemes you need.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          REPORT / COMPLAINT SECTION
          ========================================= */}

      <section
        className="complaint-section"
        id="complaint"
      >

        <div className="section-heading">

          <div className="section-badge">
            REPORT AN ISSUE
          </div>

          <h2>
            Raise a <span>complaint.</span>
          </h2>

          <p>
            Report civic issues in your area and help make your
            community better.
          </p>

        </div>


        <form
          className="complaint-form"
          onSubmit={handleSubmitComplaint}
        >

          <div className="complaint-form-row">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />


            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >

              <option value="">
                Select Category
              </option>

              <option value="Road Damage">
                Road Damage
              </option>

              <option value="Garbage">
                Garbage
              </option>

              <option value="Street Light">
                Street Light
              </option>

              <option value="Water Supply">
                Water Supply
              </option>

              <option value="Drainage">
                Drainage
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>


          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />


          <textarea
            placeholder="Describe the issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="6"
          ></textarea>


          <button
            type="submit"
            className="primary-btn"
            disabled={isSubmitting}
          >

            {isSubmitting
              ? "Submitting..."
              : "Submit Complaint →"
            }

          </button>


          {submitMessage && (
            <div className="track-success">
              {submitMessage}
            </div>
          )}


          {submitError && (
            <div className="track-error">
              {submitError}
            </div>
          )}

        </form>

      </section>


      {/* =========================================
          TRACK COMPLAINT SECTION
          ========================================= */}

      <section
        className="track-section"
        id="track"
      >

        <div className="section-badge">
          TRACK YOUR COMPLAINT
        </div>


        <h2>
          Check your <span>complaint status.</span>
        </h2>


        <p>
          Enter your complaint ID to see the current status
          of your report.
        </p>


        {/* Track Form */}

        <form
          className="track-form"
          onSubmit={handleTrackComplaint}
        >

          <input
            type="number"
            min="1"
            placeholder="Enter Complaint ID"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
          />


          <button
            type="submit"
            disabled={isTracking}
          >

            {isTracking
              ? "Tracking..."
              : "Track Complaint →"
            }

          </button>

        </form>


        {/* Error */}

        {trackError && (
          <div className="track-error">
            {trackError}
          </div>
        )}


        {/* =========================================
            COMPLAINT RESULT TABLE
            ========================================= */}

        {trackedComplaint && (

          <div className="complaint-result">

            <div className="complaint-result-header">

              <h3>
                Complaint Details
              </h3>

              <span className="complaint-id">
                #{trackedComplaint.id}
              </span>

            </div>


            <table className="complaint-table">

              <tbody>

                <tr>

                  <td>
                    Complaint ID
                  </td>

                  <td>
                    #{trackedComplaint.id}
                  </td>

                </tr>


                <tr>

                  <td>
                    Status
                  </td>

                  <td>

                    <span className="complaint-status">
                      ✓ {trackedComplaint.status}
                    </span>

                  </td>

                </tr>


                <tr>

                  <td>
                    Name
                  </td>

                  <td>
                    {trackedComplaint.name}
                  </td>

                </tr>


                <tr>

                  <td>
                    Category
                  </td>

                  <td>
                    {trackedComplaint.category}
                  </td>

                </tr>


                <tr>

                  <td>
                    Location
                  </td>

                  <td>
                    {trackedComplaint.location}
                  </td>

                </tr>


                <tr>

                  <td>
                    Description
                  </td>

                  <td className="complaint-description">
                    {trackedComplaint.description}
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        )}

      </section>


      {/* =========================================
          CTA
          ========================================= */}

      <section
        className="cta-section"
        id="about"
      >

        <div className="cta-content">

          <span className="cta-icon">
            🏛
          </span>

          <h2>
            Let's find the right
            <span> support for you.</span>
          </h2>

          <p>
            Government assistance is there to help.
            CivicAssist helps you discover it.
          </p>

          <a href="#schemes">

            <button className="primary-btn">
              Find My Schemes <span>→</span>
            </button>

          </a>

        </div>

      </section>


      {/* =========================================
          FOOTER
          ========================================= */}

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