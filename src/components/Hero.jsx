// src/components/Hero.jsx - PHIÊN BẢN CHUẨN

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* XÓA BỎ THẺ <video> Ở ĐÂY */}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="hero-title">YOUR STAGE. YOUR SOUND.</h2>
        <p className="hero-subtitle">
          The #1 Marketplace for the Vietnamese Remix Community.
        </p>
        <div className="hero-buttons-wrapper">
          <button className="hero-button primary">DISCOVER TRACKS</button>
          <button className="hero-button secondary">OPEN YOUR STORE</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
