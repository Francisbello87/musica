import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progressBarRef, audioRef }) => {
  const [value, setValue] = useState(0);
  const MAX = 10;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    };
  };
  const handleProgressChange = (e) => {
    setValue(e.target.value);
    audioRef.current.currentTime = progressBarRef.current.value;
  };
  return (
    <div className="progress">
      <input
        type="range"
        min="0"
        max={MAX}
        className="progress_bar "
        ref={progressBarRef}
        value={value}
        style={getBackgroundSize()}
        defaultValue="0"
        onChange={handleProgressChange}
      />
    </div>
  );
};

export default ProgressBar;
