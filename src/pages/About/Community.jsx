import React, { useEffect } from "react";
import "./Community.css";
import { FaCrown, FaCamera, FaCommentDots, FaGlobeAfrica } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ambassadors = [
    { id: 1, name: "Amine_TNG", points: "4.8k", badge: "Gold Explorer", img: "https://picsum.photos/id/64/150" },
    { id: 2, name: "Sofia_Views", points: "3.2k", badge: "Local Guide", img: "https://picsum.photos/id/65/150" },
    { id: 3, name: "Mehdi_Dada", points: "2.9k", badge: "Top Foodie", img: "https://picsum.photos/id/91/150" },
  ];

  return (
      <>
    <Navbar/>
    <div className="community-vpro">
      {/* ===== HERO HUB ===== */}
      <section className="comm-hero-vpro">
        <div className="container">
          <div className="hero-text">
            <span className="premium-tag">The Heart of VisitMe</span>
            <h1 className="vpro-title">Morocco's Elite <span>Travelers</span></h1>
            <p className="vpro-subtitle">
              Join a network of explorers sharing authentic moments from Tangier to the Sahara.
            </p>
            <div className="comm-actions">
              <button className="vpro-btn-gold">Join the Hub</button>
              <button className="vpro-btn-outline">View Gallery</button>
            </div>
          </div>
        </div>
        <div className="hero-mesh"></div>
      </section>

      {/* ===== COMMUNITY STATS ===== */}
      <section className="comm-metrics">
        <div className="container grid-3">
          <div className="metric-card">
            <FaCamera className="metric-icon" />
            <div className="metric-info">
              <h4>15k+</h4>
              <p>Moments Shared</p>
            </div>
          </div>
          <div className="metric-card">
            <FaCommentDots className="metric-icon" />
            <div className="metric-info">
              <h4>40k+</h4>
              <p>Authentic Reviews</p>
            </div>
          </div>
          <div className="metric-card">
            <FaCrown className="metric-icon" />
            <div className="metric-info">
              <h4>500+</h4>
              <p>Verified Guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TOP AMBASSADORS ===== */}
      <section className="ambassadors-section">
        <div className="container">
          <div className="section-header-vpro">
            <h2>Community <span>Leaders</span></h2>
            <p>Our most active contributors in Tangier this month.</p>
          </div>
          
          <div className="ambassadors-grid">
            {ambassadors.map((user) => (
              <div key={user.id} className="ambassador-card">
                <div className="avatar-wrapper">
                  <img src={user.img} alt={user.name} />
                  <div className="crown-badge"><FaCrown /></div>
                </div>
                <div className="card-body">
                  <h3>{user.name}</h3>
                  <span className="badge-text">{user.badge}</span>
                  <div className="card-stats">
                    <p><strong>{user.points}</strong> contribution points</p>
                  </div>
                  <button className="follow-btn">Follow Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
       <Footer/>
    </>
  );
};

export default Community;