import React, { useEffect } from "react";
import "./HowItWorks.css";
import { FaSearch, FaMapMarkedAlt, FaStar, FaRocket } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      id: "01",
      icon: <FaSearch />,
      title: "Search & Discover",
      desc: "Find the best restaurants, cafes, or hotels in Morocco using our smart filters and real-time data."
    },
    {
      id: "02",
      icon: <FaMapMarkedAlt />,
      title: "Analyze & Choose",
      desc: "Check turnover insights, menus, and photos to make sure the place fits your expectations."
    },
    {
      id: "03",
      icon: <FaStar />,
      title: "Visit & Review",
      desc: "Go to your chosen spot, enjoy the experience, and leave a review to help the community grow."
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="how-page">
      {/* Header */}
      <div className="how-hero">
        <h1>How It Works</h1>
        <p>Your guide to exploring the best spots in Morocco with VisitMe.</p>
      </div>

      <div className="how-container">
        {/* Steps Grid */}
        <div className="steps-wrapper">
          {steps.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-number">{step.id}</div>
              <div className="step-icon-box">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="how-footer-cta">
          <div className="cta-icon"><FaRocket /></div>
          <h2>Ready to explore?</h2>
          <p>Join thousands of users discovering Morocco every day.</p>
          <button className="get-started-btn" onClick={() => window.location.href='/'}>
            Get Started Now
          </button>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default HowItWorks;