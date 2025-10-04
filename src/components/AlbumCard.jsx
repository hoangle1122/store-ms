import React from "react";
import { FaPlay, FaCartPlus } from "react-icons/fa";
import "./AlbumCard.css"; // <-- IMPORT FILE CSS VÀO

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <img src={album.coverArt} alt={album.title} className="card-image" />

      <div className="card-overlay">
        <div className="play-button-wrapper">
          <button className="overlay-icon">
            <FaPlay />
          </button>
        </div>
        <button className="overlay-icon">
          <FaCartPlus />
        </button>
      </div>

      <div className="card-info">
        <h3 className="card-title">{album.title}</h3>
        <p className="card-artist">{album.artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
