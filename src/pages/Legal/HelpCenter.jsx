import React, { useEffect } from "react";
import "./HelpCenter.css";
import { FaSearch, FaUserAlt, FaCreditCard, FaStore, FaQuestionCircle, FaEnvelope } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const HelpCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const helpTopics = [
    { id: 1, icon: <FaUserAlt />, title: "Account & Profile", desc: "Manage your account settings and preferences." },
    { id: 2, icon: <FaStore />, title: "Business Listing", desc: "How to add and verify your business on VisitMe." },
    { id: 3, icon: <FaCreditCard />, title: "Subscription", desc: "Information about pro plans and payments." },
    { id: 4, icon: <FaQuestionCircle />, title: "Using VisitMe", desc: "Tips on how to find the best places in Morocco." },
  ];

  return (
    <>
     <Navbar/>
    <div className="help-page">
      {/* Hero Section with Search */}
      <div className="help-hero">
        <h1>How can we help you?</h1>
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for articles, guides..." />
        </div>
      </div>

      <div className="help-container">
        {/* Help Topics Grid */}
        <div className="help-grid">
          {helpTopics.map((topic) => (
            <div key={topic.id} className="help-card">
              <div className="topic-icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.desc}</p>
              <button className="read-more">Read More</button>
            </div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="contact-support">
          <div className="contact-info">
            <h2>Still need help?</h2>
            <p>Our team is available 24/7 to assist you with any issues.</p>
          </div>
          <button className="contact-btn">
            <FaEnvelope /> Contact Support
          </button>
        </div>
      </div>
    </div>
   <Footer/>
    </>
  );
};

export default HelpCenter;