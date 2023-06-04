import React, { useState, useRef } from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { tracks } from "../../utils/data";

const Player = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const audioRef = useRef();
  const progressBarRef = useRef()
  console.log(audioRef);

  return (
    <div className="h-full w-full pb-6">
      <div className=" h-full w-full flex flex-col items-center">
      <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} />
        {/* <Controls audioRef={audioRef} /> */}
        <ProgressBar {...{ progressBarRef, audioRef }} />
      </div>
    </div>
  );
};

export default Player;
