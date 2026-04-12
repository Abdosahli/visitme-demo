import React, { useEffect } from "react";
import "./Tour360.css";
import { FaTimes } from "react-icons/fa";

const Tour360 = ({ onClose }) => {
  useEffect(() => {
    if (window.pannellum) {
      window.pannellum.viewer('panorama-container', {
        default: {
          firstScene: "entrance",
          sceneFadeDuration: 800,
          autoLoad: true
        },

        scenes: {
          "entrance": {
            title: "Main Entrance",
            hfov: 110,
            pitch: -15,
            yaw: 170,
            type: "equirectangular",

            panorama: "/tour/entrance.jpg", 
            hotSpots: [
              {
                pitch: -30,  
                yaw: 170,
                type: "scene",
                text: "Go to Dining Area",
                sceneId: "dining",
                cssClass: "vpro-arrow-move", 
              }
            ]
          },

          "dining": {
            title: "Dining Area",
            hfov: 110,
            yaw: 5,
            type: "equirectangular",
            panorama: "/tour/dining.jpg",
            hotSpots: [
              {
                pitch: -30,
                yaw: 185,
                type: "scene",
                text: "Back to Entrance",
                sceneId: "entrance",
                cssClass: "vpro-arrow-move",
              }
            ]
          }
        },
        showControls: true,
        compass: true
      });
    }
  }, []);

  return (
    <div className="tour-overlay-vpro">
      <div className="tour-modal-vpro">
        <div className="tour-header">
          <div className="tour-title">
            <div className="live-dot"></div>
            <span>360° INTERACTIVE NAVIGATION</span>
          </div>
          <button className="tour-close-vpro" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div id="panorama-container"></div>

        <div className="tour-footer">
          <p>Drag to look around • Click arrows to move</p>
        </div>
      </div>
    </div>
  );
};

export default Tour360;