import React from "react";
import "./TopRatedSpots.css";

const topRatedSpots = [
  {
    id: 1,
    name: "Le Jardin Gourmet",
    type: "French Restaurant",
    location: "Marrakech",
    priceRange: "$$$",
    rating: 4.9,
    reviews: 1247,
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80",
    tags: ["Fine Dining", "Romantic", "French"],
  },
  {
    id: 2,
    name: "Hilton Garden Inn",
    type: "Luxury Hotel",
    location: "Casablanca",
    priceRange: "$$$$",
    rating: 4.8,
    reviews: 2103,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
    tags: ["Luxury", "Pool", "Spa"],
  },
  {
    id: 3,
    name: "Blue Moon Bar",
    type: "Cocktail Bar",
    location: "Rabat",
    priceRange: "$$",
    rating: 4.7,
    reviews: 845,
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
    tags: ["Cocktails", "Live Music", "Terrace"],
  },
  {
    id: 4,
    name: "Hammam Al Andalus",
    type: "Traditional Spa",
    location: "Fes",
    priceRange: "$$",
    rating: 4.9,
    reviews: 932,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
    tags: ["Relaxation", "Traditional", "Wellness"],
  },
  
];

const TopRatedSpots = () => {
  return (
    <section className="top-rated">
      <div className="container">

        {/* HEADER */}
        <div className="tr-header">
          <div>
            <h2>Top Rated Spots</h2>
            <p>Highly rated places loved by our community</p>
          </div>
           
            View all →
        
        </div>

        {/* GRID */}
        <div className="tr-grid">
          {topRatedSpots.map((spot) => (
            <div key={spot.id} className="tr-card">

              {/* IMAGE */}
              <div className="tr-image">
                <img src={spot.image} alt={spot.name} />
                <div className="tr-rating">
                  ★ {spot.rating}
                </div>
              </div>

              {/* CONTENT */}
              <div className="tr-content">
                <div className="tr-top">
                  <h3>{spot.name}</h3>
                  <span className="tr-price">{spot.priceRange}</span>
                </div>

                <p className="tr-type">{spot.type}</p>
                <p className="tr-location">📍 {spot.location}</p>

                <div className="tr-tags">
                  {spot.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>

                <div className="tr-footer">
                  <span className="tr-reviews">
                    👥 {spot.reviews.toLocaleString()} reviews
                  </span>
                   
                    View Details
                   
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopRatedSpots;
