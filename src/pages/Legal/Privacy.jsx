import React from "react";
import "./Privacy.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const Privacy = () => {
  return (
    <>
          <Navbar/>

    
    <div className="privacy-page">
      <div className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: April 5, 2026</p>
      </div>

      <div className="privacy-content">
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            Welcome to VisitMe. We collect information to provide better services to all our users.
            This includes information you provide to us (like your email for the newsletter) and 
            information we get from your use of our services.
          </p>
        </section>

        <section>
          <h2>2. How We Use Information</h2>
          <p>
            We use the information we collect to maintain, protect and improve our services, 
            to develop new ones, and to protect VisitMe and our users.
          </p>
          <ul>
            <li>To send you our newsletter (if subscribed).</li>
            <li>To personalize your experience on our platform.</li>
            <li>To analyze usage and improve our retail data tools.</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>
            We work hard to protect VisitMe and our users from unauthorized access to or 
            unauthorized alteration, disclosure or destruction of information we hold.
          </p>
        </section>

        <section>
          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>support@visitme.com</strong>
          </p>
        </section>
      </div>
    </div>
                <Footer/>

    </>
  );
};

export default Privacy;