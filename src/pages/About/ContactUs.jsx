import React, { useEffect } from "react";
import "./ContactUs.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <>
    <Navbar/>
    <div className="contact-page">
      {/* ===== HERO SECTION ===== */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-brand">Get in <span>Touch</span></h1>
            <p className="hero-subtitle">
              We’re here to help you discover the best of Morocco. Reach out to our team in Tangier.
            </p>
          </div>
        </div>
        <div className="wave-bottom"></div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            
            {/* Left: Info Panel */}
            <div className="contact-panel-info">
              <div className="panel-header">
                <h2>Contact Information</h2>
                <p>Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              <div className="info-links">
                <div className="info-item">
                  <FaPhoneAlt className="gold-icon" />
                  <span>+212 539-XXXXXX</span>
                </div>
                <div className="info-item">
                  <FaEnvelope className="gold-icon" />
                  <span>hello@visitme.ma</span>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt className="gold-icon" />
                  <span>Technopark, Tangier, Morocco</span>
                </div>
              </div>

              <div className="social-circles">
                <div className="circle"><FaInstagram /></div>
                <div className="circle"><FaLinkedin /></div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-panel-form">
              <form className="modern-form">
                <div className="form-row">
                  <div className="input-box">
                    <label>First Name</label>
                    <input type="text" placeholder="Amine" required />
                  </div>
                  <div className="input-box">
                    <label>Last Name</label>
                    <input type="text" placeholder="Tanger" required />
                  </div>
                </div>

                <div className="input-box">
                  <label>Email Address</label>
                  <input type="email" placeholder="amine@example.com" required />
                </div>

                <div className="input-box">
                  <label>Message</label>
                  <textarea placeholder="Write your message here..." rows="4" required></textarea>
                </div>

                <button type="submit" className="vpro-btn">
                  Send Message <FaPaperPlane className="plane-icon" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
       <Footer/>
    </>
  );
};

export default ContactUs;