import React from 'react';

const StatCard = ({ label, value, trend, icon }) => {
  return (
    <div className="v-stat-card">
      <div className="v-stat-icon-wrap">{icon}</div>
      <div className="v-stat-info">
        <span className="v-stat-label">{label}</span>
        <h3 className="v-stat-value">{value}</h3>
        <div className={`v-stat-trend ${trend.startsWith('+') ? 'up' : 'down'}`}>
          {trend} <span>vs last month</span>
        </div>
      </div>
      <div className="v-stat-glass-bg"></div>
    </div>
  );
};

export default StatCard;