import React from "react";
import { images } from "../../constants";
import { trackLists } from "../../utils/data";

const ViewChart = () => {
  return (
    <div className="relative overflow-y-auto z-40">
      <div className="max-h-[100vh] z-50">
        <div className="w-full sm:pl-16 sm:ml-14 px-6 pt-24 flex items-center relative  overflow-y-auto">
          <div className="flex flex-col sm:flex-row items-center gap-7">
            <img
              className="w-full max-w-[357px] sm:nax-w-[284px] min-h-[288px]"
              src={images.leadImage}
              alt=""
            />
            <div className="min-h-[180px]">
              <h3 className="font-bold text-4xl text-[#A4C7C6]">
                Tomorrow's tunes
              </h3>
              <div className="max-w-[527px] text-sm font-normal text-lightColor">
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
                <p>64 songs ~ 16 hrs+</p>
              </div>
              <div className="flex items-center justify-between mt-10 max-w-[292px] max-h-[36px] h-full w-full text-lightColor">
                <div className=" bg-[#313236] group hover:bg-lightColor rounded-[32px] justify-between cursor-pointer flex items-center px-3 py-3">
                  <img className=" w-4 h-4" src={images.play} alt="Play icon" />
                  <p className=" ml-3 text-xs group-hover:text-black ">
                    Play all
                  </p>
                </div>
                <div className=" bg-[#313236] group hover:bg-lightColor rounded-[32px] flex items-center  px-3 py-3 cursor-pointer">
                  <img
                    className=" w-4 h-4"
                    src={images.collection}
                    alt="Play icon"
                  />
                  <p className=" ml-3 text-xs group-hover:text-black">
                    Add to collection
                  </p>
                </div>
                <div className=" bg-[#313236] hover:bg-lightColor rounded-[32px] flex items-center cursor-pointer  px-3 py-3">
                  <img
                    className=" w-4 h-4"
                    src={images.heart}
                    alt="Play icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full sm:px-16 sm:ml-14 px-6 pt-24">
          <div className=" max-h-[600px] overflow-scroll">
            {
                trackLists.map((trackList) => (
                    <div className="bg-[#33373B] max-w-[1125px] my-3 w-full pl-3 py-2 backdrop-blur-md flex items-center rounded-2xl">
                    <img
                      className=" w-[39px] h-[39px] mr-5"
                      src={trackList.art}
                      alt=""
                    />
                    <div className="flex flex-1 items-center text-lightColor text-xs font-normal justify-between w-full pr-8">
                      <img src={trackList.heart} alt="Like Button" />
                      <p><span>{trackList.title}</span> <span>{trackList.artist}</span></p>
                      <p>{trackList.status}</p>
                      <p>{trackList.time}</p>
                      <img src={trackList.option} alt="more options" />
                    </div>
                  </div>
                ))
            }
          </div>
        </div> */}
        <div className="w-full sm:px-16  sm:ml-14 px-6 sm:pt-24 pt-12">
          <div className=" pb-32">
            {trackLists.map((trackList) => (
              <div
                key={trackList.id}
                className="bg-[#33373B] cursor-pointer max-w-[1125px] my-3 w-full pl-3 py-2 backdrop-blur-md flex items-center rounded-2xl"
              >
                <img
                  className="w-[39px] h-[39px] mr-5"
                  src={trackList.art}
                  alt=""
                />
                <div className="flex flex-1 items-center text-lightColor text-xs font-normal justify-between w-full pr-8">
                  <img
                    className="hidden sm:block"
                    src={trackList.heart}
                    alt="Like Button"
                  />
                  <div className=" sm:hidden">
                    <p className="max-w-[128px] w-full text-xs mb-2">
                      <span>{trackList.title}</span>{" "}
                      <span>{trackList.artist}</span>
                    </p>
                    <p className="max-w-[80px] w-full text-[10px]">
                      {trackList.status}
                    </p>
                  </div>
                  <div className="sm:hidden">
                    <img
                      className="w-[14px] h-[14px] mb-2"
                      src={trackList.option}
                      alt="more options"
                    />
                    <p className=" text-xs font-normal">{trackList.time}</p>
                  </div>
                  <p className=" hidden sm:block max-w-[128px] w-full">
                    <span>{trackList.title}</span>{" "}
                    <span>{trackList.artist}</span>
                  </p>
                  <p className="max-w-[80px] w-full hidden sm:block">
                    {trackList.status}
                  </p>
                  <p className="hidden sm:block">{trackList.time}</p>
                  <img
                    className="hidden sm:block"
                    src={trackList.option}
                    alt="more options"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewChart;
