import React from "react";
import "./AdvertisementModal.css";

const AdvertisementModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="ad-modal-overlay">
      <div className="ad-modal-content">
        <h2>Get Expert College Consultation!</h2>
        <p>
          Let us help you find the perfect college tailored to your needs.
          Unlock your dream career with our personalized guidance.
        </p>
        <button className="ad-modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AdvertisementModal;