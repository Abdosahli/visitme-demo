import "./editProfileModal.css";
import { FaTimes, FaCamera } from "react-icons/fa";

const EditProfileModal = ({ open, setOpen }) => {

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>

      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        <div className="modal-header">

          <h2 className="modal-title">Edit Profile</h2>

          <button
            className="modal-close"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        {/* AVATAR */}
        <div className="avatar-edit">

          <div className="avatar-wrapper">
            <img
              src="https://i.pravatar.cc/120"
              alt="avatar"
            />

            <label className="avatar-upload">
              <FaCamera />
              <input type="file" hidden />
            </label>

          </div>

          <p className="avatar-text">Change profile photo</p>

        </div>

        {/* FORM */}
        <div className="modal-form">

          <input
            className="form-input"
            placeholder="Full Name"
          />

          <input
            className="form-input"
            placeholder="Email"
          />

          <textarea
            className="form-input textarea"
            placeholder="Bio"
          />

        </div>

        {/* ACTIONS */}
        <div className="modal-actions">

          <button className="btn-save">
            Save Changes
          </button>

          <button
            className="btn-cancel"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
};

export default EditProfileModal;