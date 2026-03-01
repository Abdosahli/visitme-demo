import React, { useState } from "react";
import { useParams } from "react-router-dom";
import places from "../../data/places";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import Tour360 from "../Tour360/Tour360";
import "./PlaceDetails.css";

const tabs = ["Overview", "Photos", "Menu", "Reviews", "Location"];

const PlaceDetails = () => {
  const { id } = useParams();
  const place = places.find((p) => p.id.toString() === id);
  const [activeTab, setActiveTab] = useState("Overview");
  const [showTour, setShowTour] = useState(false);

  if (!place) return <p className="not-found">Place not found.</p>;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="place-hero"
        style={{ backgroundImage: `url(${place.image})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1>{place.name}</h1>
          <p>{place.city} · {place.category} · {place.price}</p>

          <div className="hero-actions">
            <button className="btn-gold">Book Now</button>
            <button
              className="btn-dark"
              onClick={() => setShowTour(true)} // <-- Open 360 Tour
            >
              360° Tour
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs container">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content container">
        {activeTab === "Overview" && (
          <div className="overview">
            <h2>About</h2>
            <p>{place.description || "Experience this amazing place in luxury style."}</p>
            <div className="place-info-cards">
              <div>🕒 Open Hours: {place.hours || "12:00 PM - 11:00 PM"}</div>
              <div>📶 Free Wi-Fi</div>
              <div>🌿 Outdoor Seating</div>
            </div>
          </div>
        )}

        {activeTab === "Photos" && (
          <div className="photos-grid">
            {(place.photos || [place.image, place.image, place.image]).map((photo, i) => (
              <img key={i} src={photo} alt={`Photo ${i + 1}`} />
            ))}
          </div>
        )}

        {activeTab === "Menu" && (
          <div className="menu-grid">
            {(place.dishes || ["Truffle Pasta", "Steak Frites", "Seafood Risotto"]).map((dish) => (
              <div key={dish} className="menu-card">
                <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt={dish} />
                <h4>{dish}</h4>
                <span>Chef’s Special</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Reviews" && (
          <div className="reviews-grid">
            {(place.reviews || [
              { user: "Alice", comment: "Amazing experience!", rating: 5 },
              { user: "Bob", comment: "Highly recommend.", rating: 4 },
            ]).map((review, i) => (
              <div key={i} className="review-card">
                <h4>{review.user}</h4>
                <p>{review.comment}</p>
                <span>⭐ {review.rating}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Location" && (
          <div className="location">
            <iframe
              src={place.map || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192078598546!2d-122.41941568468127!3d37.77492977975921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f9cf3f1%3A0xcee91840b6f6f9cb!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1680000000000"}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>

      <Footer />

      {/* 360 Tour Modal */}
      {showTour && (
        <Tour360
          image360="https://www.google.com/maps/embed?pb=!4v1634872136654!6m8!1m7!1sVgdnDJ5-h1Gs-evqXwZwmA!2m2!1d1.497412468381288!2d103.8730887764278!3f299.36670645543387!4f1.1749039907979153!5f0.7820865974627469"
          onClose={() => setShowTour(false)}
        />
      )}
    </>
  );
};

export default PlaceDetails;
