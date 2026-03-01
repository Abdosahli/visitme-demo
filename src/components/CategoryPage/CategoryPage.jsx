import React from "react";
import { Link } from "react-router-dom";
import places from "../../data/places";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { slug } = useParams();

  // Filter by category
  const filteredPlaces = places.filter(
    (place) => place.category === slug
  );

  return (
    <>
    <Navbar/>
    <div className="category-page">
        
      <h1 className="section-title">
        {slug.toUpperCase()}
      </h1>

      <div className="places-grid">

        {filteredPlaces.length === 0 ? (
          <p>No places found.</p>
        ) : (
          filteredPlaces.map((place) => (
            <div key={place.id} className="place-card">

              <img src={place.image} alt={place.name} />

              <div className="place-content">

                <h3>{place.name}</h3>

                <p>{place.city}</p>

                <div className="place-info">
                  ⭐ {place.rating} • {place.price}
                </div>

                <Link to={`/place/${place.id}`} className="btn-gold btn-view">
                <button>View Details</button>
                </Link>
              </div>
            </div>
          ))
        )}

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CategoryPage;
