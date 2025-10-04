import React from "react";
import { featuredProducer } from "../mock-data";
import { FaMusic, FaUsers, FaChartLine } from "react-icons/fa";
import "./ProducerSpotlight.css";

const ProducerSpotlight = () => {
  if (!featuredProducer) return null;

  const { name, avatar, tagline, stats } = featuredProducer;

  return (
    <div className="spotlight-container">
      <div className="spotlight-background"></div>
      <div className="spotlight-content">
        <div className="spotlight-avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="spotlight-info">
          <p className="spotlight-tagline">{tagline}</p>
          <h2 className="spotlight-name">{name}</h2>
          <div className="spotlight-stats">
            <div className="stat-item">
              <FaMusic className="stat-icon" />
              <strong>{stats.tracks}</strong>
              <span>Tracks</span>
            </div>
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <strong>{(stats.followers / 1000).toFixed(1)}K</strong>
              <span>Followers</span>
            </div>
            <div className="stat-item">
              <FaChartLine className="stat-icon" />
              <strong>{stats.sales}</strong>
              <span>Sales</span>
            </div>
          </div>
          <button className="spotlight-button">View Store</button>
        </div>
      </div>
    </div>
  );
};

export default ProducerSpotlight;
