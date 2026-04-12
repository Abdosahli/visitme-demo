import { useState } from "react";
import "./Footer.css";
import LogoZa from "../../assets/Logopaylod.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

     
    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + Newsletter */}
        <div className="footer-top">
          <img src={LogoZa} alt="VisitMe Logo" className="footer-logo" />

          <div className="newsletter">
            <p>Join our Newsletter</p>

            <form className="newsletter-box" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>

            {success && (
              <div className="newsletter-alert">
                ✨ You have successfully subscribed!
              </div>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="horizontal">
            <h4>About Us</h4>
            <a href="how-it-works">How It Works</a>
            <a href="our-story">Our Story</a>
            <a href="Community">Community</a>
            <a href="contact">Contact Us</a>
          </div>

          <div className="horizontal">
            <h4>Quick Links</h4>
            <a href="/category/restaurants">Restaurants</a>
            <a href="/category/hotels">Hotels</a>
            <a href="/category/bars">Bars</a>
            <a href="/category/spas">Spas</a>
          </div>

          <div className="horizontal">
            <h4>Resources</h4>
            <a href="help">Help Center</a>
            <a href="faq">FAQs</a>
            <a href="privacy">Privacy Policy</a>
            <a href="terms">Terms of Service</a>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © 2026 <span>VisitMe</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
