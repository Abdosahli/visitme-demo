import  { useState } from 'react';
import Sidebar from '../components/partner/Sidebar';
import Header from '../components/partner/Header';
import "../styles/Dashboard.css";  // T-akked men D kbira m3a smya dial l-file
import "../styles/Sidebar.css";    // T-akked men S kbira
import "../styles/Forms.css";      // T-akked men F kbira

const PartnerLayout = ({ children, pageTitle }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="v-partner-layout-root">
      
      {/* 1. SIDEBAR FIXED (L-boussole) */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. MAIN CONTENT CANVAS */}
      <main className="v-main-wrapper">
        
        {/* HEADER DYNAMIQUE (L-welcome w l-search) */}
        <Header title={pageTitle || activeTab} />

        {/* L-CONTENU DYAL L-PAGE (L-pblassa fin k-it-7et Dashboard, Reviews, etc.) */}
        <div className="v-content-fluid">
          {children}
        </div>

        {/* MINI FOOTER BUSINESS */}
        <footer className="v-partner-mini-footer">
          <p>© 2026 THE LUXURY GUIDE | PARTNER NETWORK</p>
          <div className="v-footer-dots">
            <span>System Status: <b>Operational</b></span>
            <span className="v-dot-green"></span>
          </div>
        </footer>
      </main>

    </div>
  );
};

export default PartnerLayout;