import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progressBarRef, audioRef }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };
  return (
    <div className="progress">
      <input
        type="range"
        className="progress_bar "
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
    </div>
  );
};

export default ProgressBar;
