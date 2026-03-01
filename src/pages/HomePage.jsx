import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import VirtualTours from "../components/VirtualTours/VirtualTours";
import TopRatedSpots from "../components/TopRatedSpots/TopRatedSpots";
import TrustedReviews from "../components/TrustedReviews/TrustedReviews";
import Categories from "../components/Categories/Categories";
import "../styles/HomePage.css";

const HomePage = () => {
  // Categories Data
  
  // Virtual Tours Data
  const virtualTours = [
    {
      id: 1,
      title: "Le Patiddad Gourmet",
      category: "French Restaurant",
      location: "Marrakech",
      price: "$60",
      rating: 4.8,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "The Ritz Marrakech",
      category: "Luxury Hotel",
      location: "Marrakech",
      price: "$120",
      rating: 4.9,
      reviews: 893,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Skybar Lounge",
      category: "Rooftop Bar",
      location: "Casablanca",
      price: "$40",
      rating: 4.7,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  // Top Rated Spots
  const topRatedSpots = [
    {
      id: 1,
      name: "Le Jardin Gourmet",
      type: "French Restaurant",
      location: "Marrakech",
      priceRange: "$$$",
      rating: 4.9,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["French", "Fine Dining", "Romantic"]
    },
    {
      id: 2,
      name: "Hilton Garden Inn",
      type: "5-Star Hotel",
      location: "Casablanca",
      priceRange: "$$$$",
      rating: 4.8,
      reviews: 2103,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Luxury", "Spa", "Pool"]
    },
    {
      id: 3,
      name: "Blue Moon Bar",
      type: "Cocktail Bar",
      location: "Rabat",
      priceRange: "$$",
      rating: 4.7,
      reviews: 845,
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Cocktails", "Live Music", "Terrace"]
    },
    {
      id: 4,
      name: "Hammam Al Andalus",
      type: "Traditional Spa",
      location: "Fes",
      priceRange: "$$",
      rating: 4.9,
      reviews: 932,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Spa", "Relaxation", "Traditional"]
    },
  ];

  // Trusted Reviews
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Travel Blogger",
      content: "VisitMe helped me discover hidden gems I would have never found on my own. The virtual tours are incredible!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Food Critic",
      content: "As a food critic, I rely on authentic reviews. VisitMe's trusted reviews have never steered me wrong.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Fatima Zahra",
      role: "Local Guide",
      content: "I use VisitMe to recommend places to tourists. The platform showcases the best of Moroccan hospitality.",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
  ];

  // Quick Stats
  const stats = [
    { id: 1, number: "50K+", label: "Virtual Tours" },
    { id: 2, number: "100K+", label: "Trusted Reviews" },
    { id: 3, number: "10K+", label: "Partner Venues" },
    { id: 4, number: "1M+", label: "Happy Visitors" },
  ];

  return (
    <div className="home-page">
      <Navbar/>
      {/* Hero Section */}
      <HeroSection/>
      
      {/* Quick Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Reviews Section */}      
      <VirtualTours/>
      {/* Categories Section */}
       <Categories/>
      {/* Virtual Tours Section */}
       <TrustedReviews/>


       
      {/* Top Rated Spots */}
      <TopRatedSpots/>


      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Explore?</h2>
            <p className="cta-subtitle">Join thousands of travelers discovering Morocco's best spots</p>
            <div className="cta-buttons">
              <Link to="/signup" className="cta-btn primary">Get Started Free</Link>
              <Link to="/demo" className="cta-btn secondary">Watch Demo</Link>
            </div>
          </div>
        </div>
      </section>
            <Footer/>
    </div>
  );
};

export default HomePage;