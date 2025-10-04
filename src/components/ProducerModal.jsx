// src/components/ProducerModal.jsx
import React from "react";
import "./Modal.css";

const ProducerModal = ({ producer, onClose }) => {
  if (!producer) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-card">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <img
            src={producer.avatar}
            alt={producer.name}
            className="modal-avatar"
          />
          <div className="modal-title">
            <h3>{producer.name}</h3>
            <p className="modal-tagline">{producer.tagline}</p>
          </div>
        </div>
        <div className="modal-content">
          <p className="modal-description">{producer.description}</p>
          <div className="modal-stats">
            <span>{producer.tracks} Tracks</span>
            <span>{producer.followers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducerModal;
