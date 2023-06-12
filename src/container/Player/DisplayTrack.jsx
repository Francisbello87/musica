import React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import Controls from "./Controls";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
    console.log(audioRef.current.duration);
  };
  return (
    <div className="flex pt-7 items-center w-full h-full max-w-[358px] sm:pl-[40px] sm:max-w-[1124px]">
      <div className="flex text-white max-w-[358px] w-full sm:max-w-[1124px] items-center justify-between">
        <div className="flex pl-0">
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt="avatar" />
          ) : (
            <div>
              <span>
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
          <div className="flex flex-col ml-3 ">
            <p className="text-sm font-bold">{currentTrack.title}</p>
            <p className="text-[10px] text-left text-[#858888] font-bold">
              {currentTrack.author}
            </p>
          </div>
        </div>
        <div className="flex-1 sm:ml-[281px] ml-[90px]">
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
            }}
          />
        </div>
      </div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
    </div>
  );
};

export default DisplayTrack;
