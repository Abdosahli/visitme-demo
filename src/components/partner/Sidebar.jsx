import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Command Center', icon: '📊' },
    { id: 'reviews', label: 'Reputation', icon: '💬' },
    { id: 'content', label: 'Showcase', icon: '✨' },
    { id: 'analytics', label: 'Insights', icon: '📈' },
    { id: 'settings', label: 'Management', icon: '⚙️' },
  ];

  return (
    <aside className="v-partner-sidebar">
      <div className="v-sidebar-brand">
        <div className="v-brand-circle">G</div>
        <h2>Guide<span>Pro</span></h2>
      </div>

      <nav className="v-sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`v-nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="v-nav-icon">{item.icon}</span>
            <span className="v-nav-label">{item.label}</span>
            {activeTab === item.id && <div className="v-active-indicator" />}
          </button>
        ))}
      </nav>

      <div className="v-sidebar-footer">
        <div className="v-partner-mini-card">
          <div className="v-avatar">LG</div>
          <div className="v-info">
            <p className="v-name">Le Jardin</p>
            <p className="v-status">Elite Partner</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;