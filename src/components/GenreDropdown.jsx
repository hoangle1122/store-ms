import React from "react";
import { genres } from "../mock-data";
import "./GenreDropdown.css";

const GenreDropdown = ({ isVisible }) => {
  return (
    <div className={`genre-dropdown ${isVisible ? "visible" : ""}`}>
      <div className="genre-dropdown-grid">
        {genres.map((genre) => (
          <a
            href={`/genres/${genre.id}`}
            key={genre.id}
            className="genre-dropdown-item"
          >
            <img
              src={genre.image}
              alt={genre.name}
              className="genre-item-image"
            />
            <span className="genre-item-name">{genre.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GenreDropdown;
