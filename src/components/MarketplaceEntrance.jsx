import React from "react";
import "./MarketplaceEntrance.css";

const MarketplaceEntrance = () => {
  return (
    <div className="me-container">
      <div className="me-overlay"></div>
      <div className="me-content">
        <h2 className="me-title">The Beat Marketplace</h2>
        <p className="me-subtitle">
          Discover thousands of unique beats from top producers.
        </p>
        <button className="me-button">Enter the Marketplace</button>
      </div>
    </div>
  );
};

export default MarketplaceEntrance;
