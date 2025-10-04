import React from "react";
import Hero from "../components/Hero";
import ProducerSpotlight from "../components/ProducerSpotlight";
import TrackRow from "../components/TrackRow"; // <-- Thêm dòng này
import { tracks } from "../mock-data"; // <-- Thêm dòng này
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="home-content-wrapper">
        <ProducerSpotlight />

        <section className="content-section">
          <h2 className="section-title">
            <span className="gradient-text">Top</span> Charts
          </h2>
          <div className="track-list">
            {tracks.map((track, index) => (
              <TrackRow key={track.id} track={track} index={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
