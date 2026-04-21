import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="v-partner-header">
      <div className="v-header-left">
        <span className="v-date">Wednesday, April 2026</span>
        <h1>{title} <span>Selection</span></h1>
      </div>
      
      <div className="v-header-right">
        <div className="v-search-bar-pro">
          <input type="text" placeholder="Search insights..." />
        </div>
        <button className="v-notification-btn">
          <span className="v-ping"></span>
          🔔
        </button>
      </div>
    </header>
  );
};

export default Header;