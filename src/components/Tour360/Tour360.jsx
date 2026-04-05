import React from "react";
import "./Tour360.css";
import { FaTimes } from "react-icons/fa";

const Tour360 = ({ image360, onClose }) => {
  return (

    <div className="tour-overlay">

      <div className="tour-container">

        <button 
        className="tour-close"
        onClick={onClose}
        >
          <FaTimes/>
        </button>

        <img
          src={image360}
          alt="360 Restaurant Tour"
          className="tour-image"
        />

      </div>

    </div>

  );
};

export default Tour360;