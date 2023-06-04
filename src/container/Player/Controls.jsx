import React, { useState, useEffect } from "react";
import { BsRepeat1 } from "react-icons/bs";
import {
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoPlay,
  IoPause,
  IoShuffle,
  IoVolumeLow,
} from "react-icons/io5";
import {
    IoMdVolumeHigh,
    IoMdVolumeOff,
    IoMdVolumeLow,
  } from 'react-icons/io';

const Controls = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);
  return (
    <div className="flex">
      <div className="flex items-center justify-between text-white">
        <div className="flex">
          <button>
            <IoShuffle />
          </button>
          <button className="ml-11">
            <IoPlaySkipBack className="text-base" />
          </button>
          <button
            className="bg-[#FACD66] mx-11 shadow-[0px_22px_70px_4px_rgba(255, 255, 255, 0.3)] w-[25px] h-[25px] rounded-full flex items-center justify-center"
            onClick={togglePlayPause}
          >
            {isPlaying ? <IoPause /> : <IoPlay />}
          </button>
          <button className="mr-11">
            <IoPlaySkipForward />
          </button>
          <button>
            <BsRepeat1 />
          </button>
        </div>
        <div className="ml-[269px] flex items-center">
          <button onClick={() => setMuteVolume((prev) => !prev)}>
            {muteVolume || volume < 5 ? (
              <IoMdVolumeOff />
            ) : volume < 40 ? (
              <IoMdVolumeLow />
            ) : (
              <IoMdVolumeHigh />
            )}
          </button>
          <input
            className="h-1 ml-2 bg-[#343739] range-slider rounded-lg cursor-pointer"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            type="range"
            min={0}
            max={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
