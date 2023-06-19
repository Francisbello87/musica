import { useDispatch, useSelector } from "react-redux";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../constants";
import { topCharts } from "../../utils/data";
import NewRelease from "../NewRelease/NewRelease";
import PopularRelease from "../PopularRelease/PopularRelease";
import { useGetTopChartsQuery } from "../../redux/services/shazam";
import { Loader, Error } from "../../components";

const Hero = ({ isMenu, setIsMenu }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  if (isFetching) return <Loader title="Loading songs ..." />;

  if (error) return <Error />;

  const navigateToViewChart = () => {
    navigate("/charts");
  };
  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="w-full sm:pl-7 text-white px-5 ">
      <div className="w-full sm:pl-7 sm:ml-14 flex items-center  ">
        <div className="sm:flex items-center hidden gap-6">
          <div className="flex items-center gap-6">
            <div className="bg-[#609EAF] w-full flex relative overflow-hidden items-center rounded-[40px] max-w-[367px] sm:max-w-[686px]">
              {width > 768 ? (
                <img
                  className="absolute right-0 "
                  src={images.Hero_vector}
                  alt=""
                />
              ) : (
                <img
                  className="absolute top-0 right-0 "
                  src={images.heroMobileVector}
                  alt=""
                />
              )}

              <div className="pt-9 sm:pl-11 pl-8 pr-14 sm:pr-0">
                <p className=" text-xs mb-20">Curated playlist</p>
                <div className="mb-[72px] mt-[236px] sm:mt-0">
                  <h1 className=" text-[33px] sm:text-4xl font-bold">
                    R & B Hits
                  </h1>
                  <p className="max-w-[276px] text-sm">
                    All mine, Lie again, Petty call me everyday, Out of time, No
                    love, Bad habit, and so much more
                  </p>
                </div>
                <div className="flex items-center  pb-8 ">
                  <div className="flex items-center relative">
                    <span>
                      <img
                        className="w-[35px] h-[35px] cursor-pointer hover:-translate-y-2 transition duration-500"
                        src={images.Elli1}
                        alt="users profile"
                      />
                    </span>
                    <span>
                      <img
                        className="w-[35px] h-[35px] cursor-pointer absolute top-0 left-5 hover:-translate-y-2 transition duration-500"
                        src={images.Elli2}
                        alt="users profile"
                      />
                    </span>
                    <span>
                      <img
                        className="w-[35px] h-[35px] cursor-pointer absolute top-0 left-9 hover:-translate-y-2 transition duration-500"
                        src={images.Elli3}
                        alt="users profile"
                      />
                    </span>
                    <span>
                      <img
                        className="w-[35px] h-[35px] cursor-pointer absolute top-0 left-14 hover:-translate-y-2 transition duration-500 "
                        src={images.Elli4}
                        alt="users profile"
                      />
                    </span>
                    <span>
                      <img
                        className="w-[35px] h-[35px] cursor-pointer absolute top-0 left-20 hover:-translate-y-2 transition duration-500"
                        src={images.Elli5}
                        alt="users profile"
                      />
                    </span>
                  </div>
                  <div className="ml-24 flex items-center z-40">
                    <img
                      className="mr-2 cursor-pointer hover:scale-125 transition duration-500 "
                      src={images.Hero_Like}
                      alt="Like Button"
                    />
                    <h4>33k Likes</h4>
                  </div>
                </div>
              </div>
              <img
                className="z-10 hidden sm:block"
                src={images.Hero_img}
                alt=""
              />
            </div>
          </div>
          <div className="hidden sm:block flex-1 w-full pl-6">
            <h2 className="font-bold text-2xl mb-[14px]">Top Charts</h2>
            {/* {
              data?.map((song, i)=>(
                <div className=" bg-darkAlt w-[417px] py-4 pl-4 pr-5 cursor-pointer rounded-[20px] flex items-center">
                <img src={images.Top1} alt="album art" />
                <div className="flex items-center justify-between w-full">
                  <div className="ml-4">
                    <p>Golden age of 80s</p>
                    <p className="text-xs text-[#8C8E8F] mb-2">Sean swadder</p>
                    <p className="text-xs">2:34:45</p>
                  </div>
                  <div className="rounded-full cursor-pointer group w-[37px] h-[37px] border flex items-center justify-center border-[#333738]">
                    <img
                      className=" group-hover:scale-110 transition duration-500"
                      src={images.Top_Heart}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              ))
            } */}
          </div>
        </div>
        <div className="sm:hidden flex flex-col max-w-900px w-full mx-auto overflow-x-auto scrollbar-none">
          <div className="bg-[#609EAF] w-full flex relative overflow-hidden items-center rounded-[40px] max-w-[367px] sm:max-w-[686px]">
            {width > 768 ? (
              <img
                className="absolute right-0 "
                src={images.Hero_vector}
                alt=""
              />
            ) : (
              <img
                className="absolute top-0 right-0 "
                src={images.heroMobileVector}
                alt=""
              />
            )}

            <div className="pt-9 sm:pl-11 pl-8 pr-14 sm:pr-0">
              <p className=" text-xs mb-20">Curated playlist</p>
              <div className="mb-[72px] mt-[236px] sm:mt-0">
                <h1 className=" text-[33px] sm:text-4xl font-bold">
                  R & B Hits
                </h1>
                <p className="max-w-[276px] text-sm">
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit, and so much more
                </p>
              </div>
              <div className="flex items-center  pb-8 ">
                <div className="flex items-center relative">
                  <span>
                    <img
                      className="w-[35px] h-[35px] cursor-pointer hover:-translate-y-2 transition duration-500"
                      src={images.Elli1}
                      alt="users profile"
                    />
                  </span>
                  <span>
                    <img
                      className="w-[35px] h-[35px] cursor-pointer absolute top-0 left-5 hover:-translate-y-2 transition duration-500"
                      src={images.Elli2}
                      alt="users profile"
                    />
                  </span>
                  <span>
                    <img
                      className="w-[35px] h-[35px] cursor-pointer absolute top-0 left-9 hover:-translate-y-2 transition duration-500"
                      src={images.Elli3}
                      alt="users profile"
                    />
                  </span>
                  <span>
                    <img
                      className="w-[35px] h-[35px] cursor-pointer absolute top-0 left-14 hover:-translate-y-2 transition duration-500 "
                      src={images.Elli4}
                      alt="users profile"
                    />
                  </span>
                  <span>
                    <img
                      className="w-[35px] h-[35px] cursor-pointer absolute top-0 left-20 hover:-translate-y-2 transition duration-500"
                      src={images.Elli5}
                      alt="users profile"
                    />
                  </span>
                </div>
                <div className="ml-24 flex items-center">
                  <img
                    className="mr-2 cursor-pointer hover:scale-125 transition duration-500 "
                    src={images.Hero_Like}
                    alt="Like Button"
                  />
                  <h4>33k Likes</h4>
                </div>
              </div>
            </div>
            <img
              className="z-10 hidden sm:block"
              src={images.Hero_img}
              alt=""
            />
          </div>
          <div className="text-white mt-9 sm:ml-24 mr-7 pb-10">
            <h2 className="mb-3 font-bold text-xl">Top charts</h2>
            <div className=" w-full mx-auto overflow-x-auto scrollbar-none">
              <div className="flex space-x-6">
                {topCharts.map((topChart, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex justify-between  w-[260px]  bg-darkAlt pt-4 px-4 rounded-[20px]"
                  >
                    <div>
                      <img
                        className="w-[108px]"
                        src={topChart.art}
                        alt="Track Cover Art"
                      />
                      <p
                        onClick={navigateToViewChart}
                        className=" mt-4 text-sm"
                      >
                        {topChart.title}
                      </p>
                      <p className="text-xs text-[#595B5B] mb-6">
                        {topChart.artiste}
                      </p>
                      <p className="text-sm pb-5">{topChart.time}</p>
                    </div>
                    <div className="rounded-full cursor-pointer group w-[37px] h-[37px] border flex items-center justify-center border-[#333738]">
                      <img
                        className=" group-hover:scale-110 transition duration-500"
                        src={images.Top_Heart}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewRelease isPlaying={isPlaying} activeSong={activeSong} />
      <PopularRelease />
    </div>
  );
};

export default Hero;
