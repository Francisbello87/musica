import React from "react";
import { newReleases } from "../../utils/data";

const NewRelease = () => {
  return (
    <div className="text-white mt-9 ml-24 mr-14 pb-10">
      <h2 className="mb-3 font-bold text-2xl">New Release</h2>
      {/* <div className="w-full overflow-x-scroll ">
        <div className=" whitespace-nowrap cursor-grab flex gap-8">
          <div>
            <img src={images.New1} alt="Song art" />
            <p className=" text-xs my-1">Life in a bubble</p>
            <p className=" text-xs text-[#6D6E6F]">The Van</p>
          </div>
          <div>
            <img src={images.New1} alt="Song art" />
            <p className=" text-xs my-1">Life in a bubble</p>
            <p className=" text-xs text-[#6D6E6F]">The Van</p>
          </div>
          <div>
            <img src={images.New1} alt="Song art" />
            <p className=" text-xs my-1">Life in a bubble</p>
            <p className=" text-xs text-[#6D6E6F]">The Van</p>
          </div>
          <div>
            <img src={images.New1} alt="Song art" />
            <p className=" text-xs my-1">Life in a bubble</p>
            <p className=" text-xs text-[#6D6E6F]">The Van</p>
          </div>
          <div>
            <img src={images.New1} alt="Song art" />
            <p className=" text-xs my-1">Life in a bubble</p>
            <p className=" text-xs text-[#6D6E6F]">The Van</p>
          </div>
          <div>
            <img src={images.New1} alt="Song art" />
            <p className=" text-xs my-1">Life in a bubble</p>
            <p className=" text-xs text-[#6D6E6F]">The Van</p>
          </div>
          <div>
            <img src={images.New1} alt="Song art" />
            <p className=" text-xs my-1">Life in a bubble</p>
            <p className=" text-xs text-[#6D6E6F]">The Van</p>
          </div>
      
        </div>
      </div> */}
      <div className="max-w-900px w-full mx-auto overflow-x-auto scrollbar-none">
        <div className="flex space-x-6">
          {newReleases.map((release, index) => (
            <div key={index} className="flex-shrink-0 w-48 ">
              <img src={release.trackArt} alt="Track Cover Art" />
              <p className=" my-1 text-sm">{release.title}</p>
              <p className="text-sm text-[#595B5B]">{release.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
