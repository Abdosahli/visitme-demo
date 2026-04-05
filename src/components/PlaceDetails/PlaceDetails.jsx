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
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63"
];

const dishes = [
  { name: "Truffle Pasta", price: "$28" },
  { name: "Steak Frites", price: "$34" },
  { name: "Seafood Risotto", price: "$32" }
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
    name: "Maison Rouge",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b"
  }
];

const PlaceDetails = ({ place }) => {

  const [tourOpen, setTourOpen] = useState(false);
  const [tab, setTab] = useState("overview");
  const similarPlaces = places.slice(0,3);
  const [bookingOpen,setBookingOpen] = useState(false);
  return (

    <div className="place-page">

      <Navbar />

      {/* HERO */}

      <section className="hero2">

        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
          alt="restaurant"
        />

        <div className="hero-overla">

          <h1>Le Jardin Gourmet</h1>

          <div className="hero-info">
            <span>📍 Marrakech</span>
            <span>🍽 French Cuisine</span>
            <span>⭐ 4.8</span>
          </div>

          <div className="hero-buttons">
                    <button
                      className="gold-btn"
                      onClick={()=>setBookingOpen(true)}
                      >
                      Booking
                    </button>
                    
                    <button 
                    className="dark-btn" 
                    onClick={() => setTourOpen(true)}
                    >
                    360° Tour
                    </button>

                   

          </div>

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
      {/* NAVIGATION */}

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

        <section className="section">

          <h2>About</h2>

          <p>
            Experience fine dining in the heart of Marrakech.
            Le Jardin Gourmet blends elegant atmosphere,
            refined French cuisine and exceptional service.
          </p>

          <div className="features">
            <div>🕐 12:00 - 23:00</div>
            <div>🌿 Outdoor seating</div>
            <div>📶 Free WiFi</div>
          </div>

        </section>

      )}

      {/* GALLERY */}

      {tab === "gallery" && (

        <section className="section">

          <h2>360°Tour</h2>

          <div className="gallery-grid">

            {gallery.map((img, i) => (
              <img key={i} src={img} alt={`Gallery ${i}`} />
            ))}

          </div>

        </section>

      )}

      {/* MENU */}

      {tab === "menu" && (

        <section className="section">

          <h2>Popular Dishes</h2>

          <div className="menu-grid">

            {dishes.map((dish, i) => (

              <div className="menu-card" key={i}>
                <h3>{dish.name}</h3>
                <span>{dish.price}</span>
              </div>

            ))}

          </div>

        </section>

      )}

      {/* REVIEWS */}

      {tab === "reviews" && (

        <section className="section">

          <h2>Guest Reviews</h2>

          {reviews.map((review, i) => (

            <div className="review-card" key={i}>

              <div className="review-user">

                <img src={review.image} alt="reviewer" />

                <div>
                  <h4>{review.name}</h4>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>

              </div>

              <p>{review.text}</p>

            </div>

          ))}

        </section>

      )}

      {/* LOCATION */}

      {tab === "location" && (

        <section className="section">

          <h2>Location</h2>

          <iframe
            src="https://www.google.com/maps?q=marrakech&output=embed"
            title="map"
          />

        </section>

      )}

      {/* SIMILAR RESTAURANTS */}

              <section className="section">

        <h2>Similar Restaurants</h2>

        <div className="places-grid">

        {similarPlaces.map((place)=>(
            
        <div key={place.id} className="place-card">

        <img src={place.image} alt={place.name}/>

        <div className="place-content">

        <h3>{place.name}</h3>

        <p>{place.city}</p>

        <div className="place-info">
        ⭐ {place.rating} • {place.price}
        </div>

        <Link to={`/place/${place.id}`}>
        <button>View Details</button>
        </Link>

        </div>

        </div>

        ))}

        </div>

        </section>

      {/* FOOTER */}

      <div className="footer2">
        © 2026 Le Jardin Gourmet | Designed with ❤️ by Abdo
      </div>

    </div>
  );
};

export default PlaceDetails;  