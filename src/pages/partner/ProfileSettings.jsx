import React from 'react';
import PartnerLayout from '../../layouts/PartnerLayout';

const ProfileSettings = () => {
  return (
    <PartnerLayout pageTitle="Business Identity">
      <div className="v-settings-card">
        <section className="v-form-section">
          <div className="v-upload-zone">
            <div className="v-current-logo">Logo</div>
            <button className="v-btn-gold-sm">Change Branding</button>
          </div>
          
          <div className="v-form-grid">
            <div className="v-input-group">
              <label>Business Name</label>
              <input type="text" defaultValue="Le Jardin Gourmet" />
            </div>
            <div className="v-input-group">
              <label>District / Location</label>
              <input type="text" defaultValue="Hivernage, Marrakech" />
            </div>
          </div>

          <div className="v-input-group">
            <label>The Story (Description)</label>
            <textarea rows="5" placeholder="Tell your guests about your sanctuary..."></textarea>
          </div>

          <button className="v-btn-save">Publish Updates</button>
        </section>
      </div>
    </PartnerLayout>
  );
};

export default ProfileSettings;