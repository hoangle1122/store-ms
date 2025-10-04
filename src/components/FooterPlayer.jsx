// src/components/FooterPlayer.jsx - PHIÊN BẢN HOÀN CHỈNH

import React from "react";
import {
  FaStepBackward,
  FaPlayCircle,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";
import "./FooterPlayer.css";

// Thay đổi 1: Nhận prop 'isVisible'
const FooterPlayer = ({ isVisible }) => {
  return (
    // Thay đổi 2: Thêm class 'visible' một cách có điều kiện
    <footer className={`footer-player ${isVisible ? "visible" : ""}`}>
      <div className="song-info">
        <img
          src="https://picsum.photos/id/10/64/64"
          alt="Current Song"
          className="song-info-cover"
        />
        <div className="song-info-text">
          <h4 className="song-info-title">Neon Dreams</h4>
          <p className="song-info-artist">Cyberwave</p>
        </div>
      </div>

      <div className="player-controls">
        <FaStepBackward className="player-controls-icon" />
        <FaPlayCircle className="player-controls-icon play-button" />
        <FaStepForward className="player-controls-icon" />
      </div>

      <div className="volume-control">
        <FaVolumeUp className="player-controls-icon" />
        <div className="volume-bar-container">
          <div className="volume-bar-progress"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPlayer;
