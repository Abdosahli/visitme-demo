import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AboutPage.css";

const AboutPageTemplate = ({ title, subtitle, content, image }) => {
  return (
    <section className="about-page">
      <Navbar />

      {/* Hero Section */}
      <div
        className="about-hero"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content container">
        {content.map((section, index) => (
          <div key={index} className="content-section">
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default AboutPageTemplate;
