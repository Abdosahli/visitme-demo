// src/components/Categories/Categories.jsx
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Categories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CUSTOM ARROWS
const NextArrow = ({ onClick }) => (
  <div className="slider-arrow next" onClick={onClick}>
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slider-arrow prev" onClick={onClick}>
    ❮
  </div>
);

// STATIC DATA
const categories = [
  {
    id: 1,
    name: "Restaurants",
    slug: "restaurants",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Hotels",
    slug: "hotels",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Cafés",
    slug: "cafes",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Bars",
    slug: "bars",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    name: "Spas",
    slug: "spas",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
  },
];

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 900,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ],

  };

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Explore Categories</h2>
        <p className="section-subtitle">
          Discover the best places across Morocco
        </p>

        <Slider {...settings}>
  {categories.map((cat) => (
    <div key={cat.id} className="category-slide">
    <div className="category-card">
      <Link
        to={`/category/${cat.slug}`}
        className="category-card"
      >
        <img src={cat.image} alt={cat.name} />

        <div className="category-overlay">
          <h3>{cat.name}</h3>
        </div>
      </Link>
</div>
    </div>
  ))}
</Slider>
      </div>
    </section>
  );
};

export default Categories;
