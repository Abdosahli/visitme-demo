import { useState } from "react";
import "./editProfileModal.css";

const EditProfileModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn-edit" onClick={() => setOpen(true)}>
        Edit Profile
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
             <h2 className="modal-title">Edit Profile</h2>
                    <p className="modal-subtitle">
                        Update your personal information
                    </p>
            </div>

            <div className="modal-form">
              <input
                type="text"
                className="form-input"
                placeholder="Full Name"
              />

              <input
                type="email"
                className="form-input"
                placeholder="Email Address"
              />

              <textarea
                className="form-input textarea"
                placeholder="Bio"
              />
            </div>

            <div className="modal-actions">
              <button className="btn-save">Save Changes</button>
              <button
                className="btn-cancel"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfileModal;
