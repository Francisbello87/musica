import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const [value, setValue] = useState(0);
  const MAX = 10;

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

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
    <div className="progress hidden sm:block">
      <span className="hidden">{formatTime(timeProgress)}</span>
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
      <span className="hidden">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
