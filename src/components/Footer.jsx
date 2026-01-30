// Footer.jsx
const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="footer-background"></div>
      <div className="footer-overlay"></div>

      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-header">
          <div className="footer-brand">
            <h2 className="footer-logo">Bastian</h2>
            <div className="footer-divider"></div>
          </div>
          <p className="footer-tagline">
            Experience fine dining at its best in the heart of Brooklyn
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="footer-grid">
          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-section-title">Contact</h3>
            <div className="footer-section-content">
              <div className="footer-contact-item">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p>237 Bedford Avenue</p>
                  <p>Brooklyn, NY 11211</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+17185550123">+1 (718) 555-0123</a>
              </div>
              <div className="footer-contact-item">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@bastian.com">info@bastian.com</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-section">
            <h3 className="footer-section-title">Hours</h3>
            <div className="footer-section-content">
              <div className="footer-hours">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div className="footer-hours-list">
                  <div className="footer-hours-row">
                    <span>Mon - Thu</span>
                    <span>11:30 AM - 10:00 PM</span>
                  </div>
                  <div className="footer-hours-row">
                    <span>Fri - Sat</span>
                    <span>11:30 AM - 11:00 PM</span>
                  </div>
                  <div className="footer-hours-row">
                    <span>Sunday</span>
                    <span>11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <nav className="footer-nav">
              <a href="#">Menu</a>
              <a href="#">Reservations</a>
              <a href="#">Private Events</a>
              <a href="#">Gift Cards</a>
              <a href="#">Careers</a>
            </nav>
          </div>

          {/* Social & Newsletter */}
          <div className="footer-section">
            <h3 className="footer-section-title">Stay Connected</h3>

            {/* Social Links */}
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <p className="footer-newsletter-text">
                Subscribe to our newsletter
              </p>
              <form className="footer-newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">Join</button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="footer-bottom-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2025 Bastian Restaurant. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration footer-decoration-1"></div>
      <div className="footer-decoration footer-decoration-2"></div>
    </footer>
  );
};

export default Footer;
