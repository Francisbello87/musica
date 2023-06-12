import React from "react";
import { newReleases } from "../../utils/data";

const PopularRelease = () => {
  return (
    <div className="text-white mt-9 sm:ml-24 mr-10 pb-10">
      <h2 className="mb-3 font-bold sm:text-2xl text-xl">Popular in your area</h2>
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

export default PopularRelease;
