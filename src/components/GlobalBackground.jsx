import React from "react";
import "./GlobalBackground.css";

// You can replace this video source with any of the suggested ones.
// Make sure to place the video file in the `public/assets/` directory.
const videoSource = "/assets/background-4k.mp4";

const GlobalBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="global-background-video"
      src={videoSource}
    />
  );
};

export default GlobalBackground;
