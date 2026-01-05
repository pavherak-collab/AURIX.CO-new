import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import '../styles/Home.css';

export default function Home() {
  const [isEntering, setIsEntering] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnterStore = () => {
    setIsEntering(true);
    setTimeout(() => {
      setHasEntered(true);
      const storeSection = document.getElementById('store-interior');
      if (storeSection) {
        storeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 800);
  };

  return (
    <div className="home-container">
      {/* Entrance Section */}
      <section className={`entrance-section ${isEntering ? 'entering' : ''}`}>
        <div className="entrance-overlay"></div>

        {/* Center Content */}
        <div className="entrance-content">
          <h1 className="brand-name">AURIX.CO</h1>
          <p className="brand-tagline">Curated Digital Education</p>
          <button className="btn-enter" onClick={handleEnterStore}>
            ENTER STORE
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Scroll Indicator */}
        {!hasEntered && (
          <div className="scroll-indicator">
            <ChevronDown size={32} />
          </div>
        )}
      </section>

      {/* Store Interior Section */}
      <section id="store-interior" className="store-section">
        <div className="section-content">
          <h2 className="section-title">Curated Programs</h2>
          <p className="section-subtitle">Education Designed for Real Growth</p>

          <div className="products-grid">
            {/* Product 1 */}
            <div className="product-card">
              <div className="product-badge">Personal Finance · Productivity</div>
              <h3 className="product-title">Smart Personal Budget Planner</h3>
              <p className="product-description">
                A practical budgeting tool for organizing, tracking, and understanding personal 
                finances with clarity and structure. This dynamic Google Sheets-based planner 
                allows users to allocate income across categories, monitor monthly and yearly 
                performance, and visualize financial trends through an interactive dashboard.
              </p>
              <ul className="product-features">
                <li>Structured income and expense allocation</li>
                <li>Automated monthly and yearly summaries</li>
                <li>Interactive financial dashboard</li>
                <li>Historical tracking across multiple periods</li>
                <li>Customizable Google Sheets system</li>
              </ul>
              <button className="btn-product">
                Get the Planner
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Product 2 */}
            <div className="product-card premium">
              <div className="product-badge premium-badge">Advanced</div>
              <h3 className="product-title">TikTok Ads Strategy Accelerator</h3>
              <p className="product-description">
                Advanced training focused on TikTok advertising strategies. Master the platform's 
                unique advertising ecosystem and learn to create effective campaigns.
              </p>
              <ul className="product-features">
                <li>Advanced TikTok ad strategies</li>
                <li>Campaign optimization techniques</li>
                <li>Platform-specific insights</li>
                <li>Data-driven approach</li>
              </ul>
              <button
  className="btn-product premium-btn"
  onClick={() =>
    window.open(
      "https://www.digistore24.com/redir/626995/ViralProductsbyPavel/",
      "_blank"
    )
  }
>
  Enter Program
  <ArrowRight size={18} />
</button>
              
                
            
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure Section */}
      <section className="affiliate-disclosure-section">
        <div className="section-content">
          <div className="disclosure-content">
            <p className="disclosure-text">
              <strong>Affiliate Disclosure:</strong><br />
              Some links on this website are affiliate links. This means we may earn a commission 
              if you choose to purchase through them, at no additional cost to you.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-content">
          <h2 className="section-title">About AURIX.CO</h2>
          <div className="about-content">
            <p className="about-text">
              AURIX.CO curates proven digital education programs designed to help individuals 
              build real skills in the digital economy. We focus on practical, honest education 
              without hype or unrealistic promises.
            </p>
            <p className="about-text">
              Each program in our collection has been carefully selected for its educational 
              value and practical application. We believe in empowering learners with knowledge 
              and systems that work.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>AURIX.CO</h3>
            <p>Curated Digital Education</p>
          </div>
          <div className="footer-disclaimer">
            <p className="disclaimer-text">
              <strong>Disclaimer:</strong> All programs offered are for educational purposes only. 
              Results may vary based on individual effort, experience, and circumstances. 
              We do not guarantee specific outcomes or income. Your success depends on your own 
              dedication and application of the educational content provided.
            </p>
          </div>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copyright">
            © 2025 AURIX.CO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}