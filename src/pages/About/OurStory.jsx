import React, { useEffect } from "react";
import "./OurStory.css";
// T-aked mn l-path nichan, ila bqa l-error khdem b l-URL li t7t
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const StoryImg = "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80";
  const timeline = [
    { year: "2024", title: "The Idea", desc: "A simple sketch on a napkin in a Marrakech café." },
    { year: "2025", title: "Development", desc: "Building the engine that powers Moroccan discovery." },
    { year: "2026", title: "VisitMe Live", desc: "Connecting thousands of explorers with authentic spots." },
  ];

  return (
        <>
    <Navbar/>
    <div className="story-page">
      {/* ===== HERO SECTION ===== */}
      <section className="story-hero5">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-brand">Our Story</h1>
            <p className="hero-subtitle">Crafting the future of Moroccan hospitality through data and passion.</p>
          </div>
        </div>
        <div className="wave-bottom"></div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="story-main">
        <div className="container">
          <div className="story-grid">
            <div className="story-image-container">
              <div className="image-border"></div>
              <img 
                src={StoryImg || "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80"} 
                alt="Moroccan Architecture" 
              />
            </div>
            <div className="story-text-content">
              <span className="gold-tag">Est. 2026</span>
              <h2>A Journey of <span>Authenticity</span></h2>
              <p>
                VisitMe wasn’t built in an office; it was built in the streets of Fes, the shores of Agadir, and the vibrant markets of Casablanca. 
              </p>
              <p>
                Our mission is to bridge the gap between world-class technology and the legendary hospitality of Morocco. We provide transparency so you can focus on the experience.
              </p>
              <div className="story-signature">
                <p>The VisitMe Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE SECTION ===== */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline-grid">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="year-box">{item.year}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
          <Footer/>
    </>
  );
};

export default OurStory;