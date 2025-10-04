import React from "react";
import "./GenreCard.css";

const GenreCard = ({ genre }) => {
  return (
    <div className="genre-card">
      <img src={genre.image} alt={genre.name} className="genre-card-image" />
      <div className="genre-card-overlay"></div>
      <h3 className="genre-card-name">{genre.name}</h3>
    </div>
  );
};

export default GenreCard;
