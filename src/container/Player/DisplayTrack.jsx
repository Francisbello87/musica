import React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import Controls from "./Controls";

const DisplayTrack = ({ currentTrack, audioRef }) => {
  return (
    <div className="flex pt-7 items-center w-full h-full pl-[40px]">
      <div className="flex text-white w-fulljustify-evenly">
        <div className="flex">
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
        <div className="flex-1 ml-[281px]">
          <Controls audioRef={audioRef} />
        </div>
      </div>
      <audio src={currentTrack.src} ref={audioRef} />
    </div>
  );
};

export default DisplayTrack;
