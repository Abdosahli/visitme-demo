import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const slides = [
  {
    id: 1,
    title: "Le Jardin Gourmet",
    city: "Marrakech",
    slogan: "Feel the atmosphere before making a reservation",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: 2,
    title: "Luxury Riads & Hotels",
    city: "Morocco",
    slogan: "Explore hotels in immersive virtual tours",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: 3,
    title: "Rooftop Cafés & Bars",
    city: "Casablanca",
    slogan: "Choose the perfect vibe before you go",
    image:
      "https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: 4,
    title: "Traditional Hammams & Spas",
    city: "Fes",
    slogan: "Relaxation you can preview in advance",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: 5,
    title: "Hidden Local Experiences",
    city: "Morocco",
    slogan: "Discover places most travelers never see",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000); // slower = more comfortable
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <span className="hero-city">{slide.city}</span>

              <h1 className="hero-title">
                <span className="brand">VisitMe</span>
                <br />
                {slide.title}
              </h1>

              <p className="hero-subtitle">{slide.slogan}</p>

              <div className="hero-actions">
                <Link to="/signup" className="hero-btn primary">
                  Start Exploring
                </Link>
                <Link to="/explore" className="hero-btn ghost">
                  Browse Places
                </Link>
              </div>

              <div className="hero-search">
                <input
                  type="text"
                  placeholder="Search restaurants, hotels, cafés..."
                />
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
