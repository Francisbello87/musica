import React, { useState, useEffect, useRef, useCallback } from "react";
import { BsRepeat1 } from "react-icons/bs";
import {
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoPlay,
  IoPause,
  IoShuffle,
  IoVolumeLow,
} from "react-icons/io5";
import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from "react-icons/io";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const playAnimationRef = useRef();

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  const handleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);
  return (
    <div className="flex">
      <div className="sm:flex hidden items-center justify-between text-white">
        <div className="flex">
          <button onClick={handleShuffle}>
            {isShuffleOn ? <IoShuffle className=" text-secondaryColor" /> : <IoShuffle />}
            
          </button>
          <button onClick={handlePrevious} className="ml-11">
            <IoPlaySkipBack className="text-base" />
          </button>
          <button
            className="bg-[#FACD66] mx-11 shadow-[0px_22px_70px_4px_rgba(255, 255, 255, 0.3)] w-[25px] h-[25px] rounded-full flex items-center justify-center"
            onClick={togglePlayPause}
          >
            {isPlaying ? <IoPause /> : <IoPlay />}
          </button>
          <button onClick={handleNext} className="mr-11">
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
      <div className="flex sm:hidden">
        <button
          className="bg-[#FACD66] shadow-[0px_22px_70px_4px_rgba(255, 255, 255, 0.3)] w-[25px] h-[25px] rounded-full flex items-center justify-center"
          onClick={togglePlayPause}
        >
          {isPlaying ? <IoPause /> : <IoPlay />}
        </button>
        <button onClick={handleNext} className="ml-5">
          <IoPlaySkipForward />
        </button>
      </div>
    </div>
  );
};

export default Controls;
