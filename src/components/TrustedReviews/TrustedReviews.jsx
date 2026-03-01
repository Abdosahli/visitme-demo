// src/components/TrustedReviews/TrustedReviews.jsx
import React from "react";
import "./TrustedReviews.css";

const TrustedReviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Travel Blogger",
      content:
        "VisitMe helped me discover hidden gems I would have never found on my own. The virtual tours are incredible!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Food Critic",
      content:
        "As a food critic, I rely on authentic reviews. VisitMe's trusted reviews have never steered me wrong.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      name: "Fatima Zahra",
      role: "Local Guide",
      content:
        "I use VisitMe to recommend places to tourists. The platform showcases the best of Moroccan hospitality.",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Trusted Reviews</h2>
          <p className="section-subtitle">
            Hear from our community of explorers who love Morocco's hidden gems
          </p>
        </div>

        {/* Grid */}
        <div className="reviews-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="review-card">
              <div className="review-card-inner">
                <div className="review-header">
                  <img src={t.avatar} alt={t.name} className="review-avatar" />
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">{t.name}</h4>
                    <p className="reviewer-role">{t.role}</p>
                  </div>
                </div>

                <div className="review-rating">
                  {'★'.repeat(t.rating)}
                  {'☆'.repeat(5 - t.rating)}
                </div>

                <p className="review-content">"{t.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedReviews;
