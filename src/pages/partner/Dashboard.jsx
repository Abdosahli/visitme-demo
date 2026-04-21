import React from 'react';
import PartnerLayout from '../../layouts/PartnerLayout';
import StatCard from '../../components/partner/StatCard';
import ReviewItem from '../../components/partner/ReviewItem';

const Dashboard = () => {
  // Data simulated (men ba3d tjibha men API)
  const stats = [
    { label: "Profile Views", value: "12.4K", trend: "+14%", icon: "👁️" },
    { label: "Average Rating", value: "4.8", trend: "+0.2", icon: "⭐" },
    { label: "New Reviews", value: "84", trend: "+5%", icon: "💬" }
  ];

  return (
    <PartnerLayout pageTitle="Command Center">
      <div className="v-dashboard-grid">
        
        {/* STATS ROW */}
        <div className="v-stats-container">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        <div className="v-dashboard-main-content">
          {/* RECENT ACTIVITY / REVIEWS */}
          <div className="v-recent-reviews-box">
            <div className="v-box-header">
              <h3>Latest Experiences</h3>
              <button className="v-view-all">View All Reputation</button>
            </div>
            <div className="v-reviews-list">
              {/* Ghadi t-mapper hna les reviews */}
              <ReviewItem review={{
                userName: "Yassine S.",
                rating: 5,
                text: "L-vibe hna khtira, l-khidma top dyal top!",
                date: "2 hours ago",
                userImage: "https://i.pravatar.cc/150?u=y"
              }} />
            </div>
          </div>

          {/* PERFORMANCE CHART PLACEHOLDER */}
          <div className="v-performance-card">
            <h3>Visibility Insights</h3>
            <div className="v-chart-placeholder">
              {/* Hna ghadin n-diro Recharts men ba3d */}
              <div className="v-fake-chart"></div>
            </div>
          </div>

        </div>
      </div>
    </PartnerLayout>
  );
};

export default Dashboard;