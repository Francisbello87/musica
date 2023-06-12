import React, { useState, useRef } from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { tracks } from "../../utils/data";

const Player = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef();
  const progressBarRef = useRef();
  console.log(audioRef);

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };
  return (
    <div className="h-full w-full  pb-6">
      <div className=" h-full w-full flex flex-col items-center">
        <DisplayTrack
          {...{
            currentTrack,
            audioRef,
            setDuration,
            duration,
            setTimeProgress,
            progressBarRef,
            tracks,
            trackIndex,
            setTrackIndex,
            setCurrentTrack,
            handleNext,
          }}
        />
        {/* <Controls audioRef={audioRef} /> */}
        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
      </div>
    </div>
  );
};

export default Player;
