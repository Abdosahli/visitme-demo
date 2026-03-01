import React from "react";
import { Link } from "react-router-dom";
import "./VirtualTours.css";

const virtualTours = [
  {
    id: 1,
    title: "Le Jardin Gourmet",
    category: "French Restaurant",
    location: "Marrakech",
    price: "$60",
    rating: 4.9,
    reviews: 1247,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Sky Lounge Rooftop",
    category: "Rooftop Bar",
    location: "Casablanca",
    price: "$45",
    rating: 4.7,
    reviews: 768,
    image:
      "https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Luxury Riad Spa",
    category: "Traditional Spa",
    location: "Fes",
    price: "$80",
    rating: 4.8,
    reviews: 934,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Ocean View Hotel",
    category: "5★ Hotel",
    location: "Agadir",
    price: "$120",
    rating: 4.9,
    reviews: 1820,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
];

const VirtualTours = () => {
  return (
    <section className="virtual-tours">
      <div className="container">

        {/* HEADER */}
        <div className="vt-header">
          <div>
            <h2>Virtual Tours</h2>
            <p>Explore places in immersive SD & 3D tours</p>
          </div>
          <Link to="/virtual-tours" className="vt-view-all">
            View all →
          </Link>
        </div>

        {/* GRID */}
        <div className="vt-grid">
          {virtualTours.map((tour) => (
            <div
              key={tour.id}
              className={`vt-card ${tour.featured ? "featured" : ""}`}
            >
              <div className="vt-image">
                <img src={tour.image} alt={tour.title} />

                {tour.featured && (
                  <span className="vt-badge">Featured</span>
                )}

                <div className="vt-price">From {tour.price}</div>
              </div>

              <div className="vt-content">
                <span className="vt-category">{tour.category}</span>

                <h3 className="vt-title">{tour.title}</h3>

                <p className="vt-location">📍 {tour.location}</p>

                <div className="vt-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rate">{tour.rating}</span>
                  <span className="reviews">
                    ({tour.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <Link to={`/tour/${tour.id}`} className="vt-btn">
                  Explore Tour
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VirtualTours;
