// src/components/ProducerCard.jsx

import React from "react";
import { FaCheckCircle, FaMusic, FaUsers } from "react-icons/fa";
import "./ProducerCard.css";

// Component này chỉ cần nhận 'producer' và hiển thị
// onOpen: optional callback to open a modal/detail view
const ProducerCard = ({ producer, onOpen }) => {
  return (
    <div className="producer-card">
      <div className="producer-avatar-wrapper">
        <img
          src={producer.avatar}
          alt={producer.name}
          className="producer-avatar"
        />
        {producer.verified && (
          <div className="verified-badge">
            <FaCheckCircle />
          </div>
        )}
      </div>

      <div className="producer-info">
        <h3 className="producer-name">{producer.name}</h3>
        <p className="producer-tagline">{producer.tagline}</p>
        <p className="producer-description">{producer.description}</p>

        <div className="producer-stats">
          <div className="stat-item">
            <FaMusic className="stat-icon" />
            <span>{producer.tracks} Tracks</span>
          </div>
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <span>{producer.followers}</span>
          </div>
        </div>
      </div>

      <button
        className="producer-view-button"
        onClick={() => onOpen && onOpen(producer)}
      >
        View Store
      </button>
    </div>
  );
};

export default ProducerCard;
