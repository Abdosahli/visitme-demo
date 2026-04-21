import React, { useState } from "react";
import "./PlaceDetails.css";
import Tour360 from "../Tour360/Tour360"; // path selon project
import Navbar from "../Navbar";
import places from "../../data/places";
import Booking from "../Booking/Booking";

import { Link } from "react-router-dom";

const gallery = [
  "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  "https://images.unsplash.com/photo-1550547660-d9450f859349",
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
];

const dishes = [
  { 
    name: "Truffle Pasta", 
    price: "$28", 
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    desc: "Hand-rolled tagliatelle, black winter truffle, and 24-month aged Parmigiano-Reggiano."
  },
  { 
    name: "Steak Frites", 
    price: "$34", 
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    desc: "Prime Wagyu beef, triple-cooked Belgian fries, and our signature bordelaise sauce."
  },
  { 
    name: "Seafood Risotto", 
    price: "$32", 
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    desc: "Acquerello rice, wild-caught scallops, and saffron-infused shellfish bisque."
  }
];

const reviews = [
  {
    name: "Sophia Laurent",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "One of the best restaurants in Marrakech."
  },
  {
    name: "Lucas Martin",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Amazing atmosphere and delicious food."
  }
];

const suggestions = [
  {
    name: "Le Palace Marrakech",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  },
  {
    name: "La Table Royale",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
  name: "Royal Garden Dining",
  rating: "5.0",
  image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg"
},
{
  name: "Velvet Lounge",
  rating: "4.8",
  image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
},
{
  name: "Golden Plate",
  rating: "4.9",
  image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
}
];

const PlaceDetails = ({ place }) => {

  const [tourOpen, setTourOpen] = useState(false);
  const [tab, setTab] = useState("overview");
  const similarPlaces = places.slice(0,4);
  const [bookingOpen,setBookingOpen] = useState(false);
  return (

    <div className="place-page">

      <Navbar />

    {/* ULTRA-LUXURY HERO: THE AUTHORITY VISION */}
<section className="v-pro-hero-final">
  <div className="v-pro-bg-wrapper">
    <img 
      src="https://images.unsplash.com/photo-1559339352-11d035aa65de" 
      alt="Le Jardin Gourmet Marrakech" 
      className="v-pro-bg-img"
    />
    <div className="v-pro-gradient-mask"></div>
  </div>

  <div className="v-pro-content">
    {/* Official Platform Seal */}
    <div className="v-pro-badge-container">
      <div className="v-pro-badge">
        <span className="v-pro-gold-icon">✧</span>
        <span className="v-pro-badge-text">The Luxury Guide Selection 2026</span>
      </div>
    </div>

    <h1 className="v-pro-main-title">
      Le Jardin <span>Gourmet</span>
    </h1>

    <div className="v-pro-stats-row">
      <div className="v-pro-stat-item">
        <span className="v-pro-stat-val">4.8</span>
        <span className="v-pro-stat-lbl">Expert Rating</span>
      </div>
      <div className="v-pro-stat-sep"></div>
      <div className="v-pro-stat-item">
        <span className="v-pro-stat-val">$$$$</span>
        <span className="v-pro-stat-lbl">Price Range</span>
      </div>
      <div className="v-pro-stat-sep"></div>
      <div className="v-pro-stat-item">
        <span className="v-pro-stat-val">Hivernage</span>
        <span className="v-pro-stat-lbl">District</span>
      </div>
    </div>

    <div className="v-pro-actions">
      <button className="v-pro-btn-gold" onClick={() => setBookingOpen(true)}>
        Secure a Table
      </button>
      <button className="v-pro-btn-glass" onClick={() => setTourOpen(true)}>
        Virtual Inspection 360°
      </button>
    </div>
  </div>

  {/* Visual Luxury Indicator */}
  <div className="v-pro-scroll-wrap">
    <div className="v-pro-scroll-bar"></div>
    <span className="v-pro-scroll-txt">Explore the Experience</span>
  </div>
</section>
<Booking
        open={bookingOpen}
        setOpen={setBookingOpen}
      />
       {tourOpen && (
                    <Tour360
                      image360="https://pannellum.org/images/alma.jpg"

                    
                    onClose={() => setTourOpen(false)}
                    />
                     
                    )}
                    

      <div className="place-nav">

                <a
                className={tab === "overview" ? "active" : ""}
                onClick={() => setTab("overview")}
                >
                Overview
                </a>

                <a
                className={tab === "gallery" ? "active" : ""}
                onClick={() => setTab("gallery")}
                >
                360°Tour
                </a>

                <a
                className={tab === "menu" ? "active" : ""}
                onClick={() => setTab("menu")}
                >
                Menu
                </a>

                <a
                className={tab === "reviews" ? "active" : ""}
                onClick={() => setTab("reviews")}
                >
                Reviews
                </a>

                <a
                className={tab === "location" ? "active" : ""}
                onClick={() => setTab("location")}
                >
                Location
                </a>

                </div>

      {/* OVERVIEW */}

  {tab === "overview" && (
  <section className="section vision-luxe">
    <div className="luxe-wrapper">
      
      {/* Visual Composition */}
      <div className="luxe-visual-composition">
        <div className="image-wrapper-pro">
          <img 
            src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80" 
            alt="Fine Dining" 
            className="luxe-img-main"
          />
          {/* Badge de prestige */}
          <div className="floating-prestige-badge">
            <span className="gold-text">Est.</span>
            <span className="year-text">2010</span>
          </div>
        </div>
        <div className="background-accent-luxe"></div>
      </div>

      {/* Content Composition */}
      <div className="luxe-content-composition">
        <header className="luxe-header-v2">
          <span className="eyebrow-text">Heritage & Gastronomy</span>
          <h2 className="luxe-title-v2">
            The Soul of <span>Marrakech</span> <br/> In Every Plate
          </h2>
        </header>

        <p className="luxe-description-v2">
          Step into a world where time slows down. <strong>Le Jardin Gourmet</strong> 
          is a sanctuary of refined taste, blending the vibrant spirit of Moroccan 
          hospitality with the flawless precision of French culinary arts. 
        </p>

        <div className="luxe-grid-details">
          <div className="luxe-detail-box">
            <span className="luxe-icon-v2">✦</span>
            <div className="luxe-detail-info">
              <h6>Ambiance</h6>
              <p>Garden-inspired Serenity</p>
            </div>
          </div>
          <div className="luxe-detail-box">
            <span className="luxe-icon-v2">✦</span>
            <div className="luxe-detail-info">
              <h6>Cuisine</h6>
              <p>Artisanal French Fusion</p>
            </div>
          </div>
        </div>

        <div className="chef-curation">
          <div className="chef-meta">
            <span className="chef-label">Curated by</span>
            <span className="chef-name">Jean-Pierre Laurent</span>
          </div>
          <div className="signature-wrap">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80" alt="Chef Signature" className="luxe-sig-img" />
          </div>
        </div>
      </div>

    </div>
  </section>
)}

      {/* GALLERY */}

     {tab === "gallery" && (
  <section className="section luxury-gallery">
    <header className="gallery-header-v2">
      
      <h2 className="slim-title">A Glimpse of <span>Excellence</span></h2>
       
    </header>

    {/* Featured 360° Experience Card */}
    <div className="tour-360-featured" onClick={() => setTourOpen(true)}>
      <div className="tour-overlay">
        <div className="tour-content">
          <div className="pulse-icon">
            <i className="fa-solid fa-arrows-to-eye"></i> {/* Use an icon or SVG */}
            <span>360</span>
          </div>
          <h3>Virtual Experience</h3>
          <p>Explore our main hall in full immersive 360° tour</p>
          <button className="tour-btn-minimal">Enter Tour</button>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Virtual Tour Cover" />
    </div>

    {/* Editorial Masonry Gallery */}
    <div className="editorial-gallery">
      {gallery.map((img, i) => (
        <div key={i} className={`gallery-item item-${i}`}>
          <div className="img-hover-box">
            <img src={img} alt={`Gallery ${i}`} />
            <div className="img-overlay">
              <span>View Detail</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)}

      {/* MENU */}


{tab === "menu" && (
  <section className="section luxury-menu-slim">
    <div className="slim-menu-wrapper">
      
      {/* Header Minimalist */}
      <header className="slim-header">
        <span className="gold-subtitle">La Carte Gastronomique</span>
        <h2 className="slim-title">A Symphony of <span>Excellence</span></h2>
      </header>

      {/* Grid Slim Cards */}
      <div className="slim-grid">
        {dishes.map((dish, i) => (
          <div className="slim-card" key={i}>
            
            {/* Visual Side (Smaller & Focused) */}
            <div className="slim-visual">
              <img src={dish.image} alt={dish.name} />
               
            </div>

            {/* Content Side (Sophisticated) */}
            <div className="slim-info">
              <div className="slim-row-top">
                <h3>{dish.name}</h3>
                <span className="slim-price">{dish.price}</span>
              </div>
              <p className="slim-desc">{dish.desc || dish.description}</p>
              
              <div className="slim-footer">
                <span className="slim-tag">✧ Signature Dish</span>
                {i === 0 && <span className="slim-award">Chef's Choice</span>}
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="slim-footer-action">
        <button className="gold-btn-minimal">Download Full Menu</button>
      </div>

    </div>
  </section>
)} 
      {/* REVIEWS */}

     {/* REVIEWS: THE GUEST VOICES */}
{tab === "reviews" && (
  <section className="section vision-reviews">
    <div className="vision-reviews-inner">
      <header className="vision-header-pro">
        <span className="v-eyebrow">Guest Testimonials</span>
        <h2 className="v-title">Reflections of <span>Excellence</span></h2>
      </header>

      <div className="v-reviews-grid">
        {reviews.map((review, i) => (
          <div className="v-review-card" key={i}>
            <div className="v-review-rating">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="v-review-quote">"{review.text}"</p>
            <div className="v-review-author">
              <div className="v-author-img">
                <img src={review.image} alt={review.name} />
              </div>
              <div className="v-author-info">
                <h4>{review.name}</h4>
                <span>Verified Resident</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

{/* LOCATION: THE DESTINATION */}
{tab === "location" && (
  <section className="section vision-location">
    <div className="v-location-wrapper">
      <div className="v-location-content">
        <span className="v-eyebrow">The Destination</span>
        <h2 className="v-title">Where <span>Time Stops</span></h2>
        
        <div className="v-address-details">
          <div className="v-address-group">
            <label>Address</label>
            <p>Hivernage District, Avenue Mohamed VI <br/> Marrakech, Morocco</p>
          </div>
          <div className="v-address-group">
            <label>Concierge</label>
            <p>+212 (0) 5 24 33 44 55 <br/> hello@lejardinpro.com</p>
          </div>
        </div>
        
        <div className="v-location-perks">
          <span>✧ Private Valet</span>
          <span>✧ Garden Access</span>
          <span>✧ VIP Entrance</span>
        </div>
        
        <button className="v-map-btn">Get Directions</button>
      </div>

      <div className="v-map-visual">
        <div className="v-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0465223062316!2d-8.0163!3d31.6258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzMyLjkiTiA4wrAwMCc1OC43Ilc!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma"
            title="Premium Location"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
)}

   {/* THE ROYAL COLLECTION: SIMILAR PLACES */}
<section className="section royal-gallery-section">
  <div className="royal-container">
    <header className="royal-header">
      <span className="royal-eyebrow">The Curator's Selection</span>
      <h2 className="royal-title">Exquisite <span>Refuges</span></h2>
      <div className="royal-accent"></div>
    </header>

    <div className="royal-grid">
      {similarPlaces.map((place, i) => (
        <div key={place.id} className={`royal-card card-variant-${i % 3}`}>
          <Link to={`/place/${place.id}`} className="royal-link">
            
            <div className="royal-visual-wrapper">
              <img src={place.image} alt={place.name} className="royal-img" />
              
              {/* Glassmorphism Floating Info */}
              <div className="royal-glass-badge">
                <span className="royal-price">{place.price}</span>
                <span className="royal-sep">|</span>
                <span className="royal-rating">★ {place.rating}</span>
              </div>

              {/* Hover Discovery Layer */}
              <div className="royal-hover-layer">
                <div className="royal-discover-circle">
                  <span>View sanctuary</span>
                </div>
              </div>
            </div>

            <div className="royal-content">
              <div className="royal-meta-top">
                <span className="royal-city">{place.city}</span>
                <div className="royal-line-short"></div>
              </div>
              <h3 className="royal-name">{place.name}</h3>
              <p className="royal-description">A sanctuary of flavors where heritage meets contemporary elegance.</p>
            </div>

          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

{/* THE ULTIMATE PLATFORM FOOTER */}
<footer className="v-pro-footer">
  <div className="v-footer-content">
    
    <div className="v-footer-main">
      <div className="v-footer-brand">
        <h2 className="v-footer-logo">The Luxury <span>Guide</span></h2>
        <p className="v-footer-tagline">Curating the finest culinary sanctuaries in Marrakech since 2026.</p>
      </div>
      
      <div className="v-footer-nav">
        <div className="v-nav-col">
          <h4>Platform</h4>
          <a href="#about">Our Standards</a>
          <a href="#selection">The Selection</a>
        </div>
        <div className="v-nav-col">
          <h4>Social</h4>
          <a href="#insta">Instagram</a>
          <a href="#meta">Facebook</a>
        </div>
      </div>
    </div>

    <div className="v-footer-separator"></div>

    <div className="v-footer-legal">
      <div className="v-copy">
        © 2026 ALL RIGHTS RESERVED TO THE LUXURY GUIDE.
      </div>
      <div className="v-signature">
        CONCEPT & DESIGN BY <span>ABDO</span> — THE ARCHITECT
      </div>
    </div>

  </div>
  
  {/* Decorative Background Text */}
  <div className="v-footer-bg-text">EXCELLENCE</div>
</footer>

    </div>
  );
};

export default PlaceDetails;  