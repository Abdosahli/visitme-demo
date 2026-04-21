import React from 'react';
import PartnerLayout from '../../layouts/PartnerLayout';

const ContentManager = () => {
  return (
    <PartnerLayout pageTitle="Showcase Gallery">
      <div className="v-content-controls">
        <button className="v-btn-add">+ Add New Item</button>
      </div>
      
      <div className="v-content-grid">
        {/* Hna ghadi t-mapper les plats d-l-menu wella les chambres */}
        <div className="v-content-item-card">
          <div className="v-item-img"></div>
          <div className="v-item-info">
            <h4>Signature Lobster</h4>
            <p>240 MAD</p>
          </div>
        </div>
      </div>
    </PartnerLayout>
  );
};

export default ContentManager;