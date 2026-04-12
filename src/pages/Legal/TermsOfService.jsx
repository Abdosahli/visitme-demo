import React, { useEffect } from "react";
import "./TermsOfService.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <Navbar/>
        
    <div className="terms-page">
      <div className="terms-hero">
        <h1>Terms of Service</h1>
        <p>Effective Date: April 11, 2026</p>
      </div>

      <div className="terms-container">
        <div className="terms-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using VisitMe, you agree to be bound by these Terms of Service. 
              If you do not agree to all of these terms, do not use our platform.
            </p>
          </section>

          <section>
            <h2>2. Use of the Site</h2>
            <p>
              You agree to use VisitMe only for lawful purposes. You are prohibited from:
            </p>
            <ul>
              <li>Using the site in any way that violates Moroccan or international laws.</li>
              <li>Attempting to interfere with the proper working of the platform.</li>
              <li>Scraping or extracting data without our prior written consent.</li>
            </ul>
          </section>

          <section>
            <h2>3. Intellectual Property</h2>
            <p>
              The content, logo, design, and retail analysis tools on VisitMe are protected by 
              copyright and trademark laws. You may not reproduce or use our brand "VisitMe" 
              without permission.
            </p>
          </section>

          <section>
            <h2>4. Limitation of Liability</h2>
            <p>
              VisitMe provides information about places (restaurants, hotels, etc.) "as is." 
              We do not guarantee the accuracy of data provided by third parties or users.
            </p>
          </section>

          <section>
            <h2>5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of 
              any major changes by updating the date at the top of this page.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsOfService;