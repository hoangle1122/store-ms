import React from "react";
import AlbumCard from "./AlbumCard";
import { newReleases } from "../mock-data";
import "./AlbumList.css";

const AlbumList = () => {
  return (
    <section className="album-list-section">
      <div className="album-list-container">
        {/* THÊM 2 DÒNG NÀY VÀO */}
        <h2 className="album-list-title">FRESH DROPS</h2>
        <p className="album-list-subtitle">
          The Hottest Remixes, Curated For You.
        </p>

        <div className="album-grid">
          {newReleases &&
            newReleases.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumList;
