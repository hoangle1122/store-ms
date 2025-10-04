import React from "react";
import { FaPlay, FaCartPlus } from "react-icons/fa";
import "./TrackRow.css";

const TrackRow = ({ track, index }) => {
  if (!track || !track.producer) return null;

  return (
    <div className="track-row">
      <div className="track-row-index">{index + 1}</div>
      <div className="track-row-cover">
        <img src={track.cover} alt={track.title} />
        <button className="play-overlay">
          <FaPlay />
        </button>
      </div>
      <div className="track-row-info">
        <span className="title">{track.title}</span>
        <span className="producer">{track.producer.name}</span>
      </div>
      <div className="track-row-actions">
        <span className="track-price">${track.price}</span>
        <button className="cart-button">
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
};

export default TrackRow;
