import React from "react";
import { images } from "../../constants";
import Sidebar from "../../components/Sidebar";

const Hero = () => {
  return (
    <div className="w-full pt-24  pl-7 text-white flex items-center">
      <Sidebar />
      <div className="flex items-center gap-6">
        <div className="bg-[#609EAF] w-full flex relative overflow-hidden items-center rounded-[40px] max-w-[686px]">
          <img className="absolute right-0 " src={images.Hero_vector} alt="" />
          <div className="pt-9 pl-11">
            <p className=" text-xs mb-20">Currated playlist</p>
            <div className="mb-[72px]">
              <h1 className="text-4xl font-bold">R & B Hits</h1>
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
          <img className="z-10" src={images.Hero_img} alt="" />
        </div>
      </div>
      <div className="flex-1 w-full pl-6">
        <h2 className="font-bold text-2xl mb-[14px]">Top Charts</h2>
        <div className=" bg-darkAlt py-4 pl-4 pr-5 rounded-[20px] flex items-center">
          <img src={images.Top1} alt="album art" />
          <div className="flex items-center justify-between w-full">
            <div className="ml-4">
              <p>Golden age of 80s</p>
              <p className="text-xs text-[#8C8E8F] mb-2">Sean swadder</p>
              <p className="text-xs">2:34:45</p>
            </div>
            <div className="rounded-full cursor-pointer group w-[37px] h-[37px] border flex items-center justify-center border-[#D9D9D9]">
              <img
                className=" group-hover:scale-110 transition duration-500"
                src={images.Top_Heart}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" bg-darkAlt py-4 pl-4 pr-5 rounded-[20px] flex items-center">
          <img src={images.Top2} alt="album art" />
          <div className="flex items-center justify-between w-full">
            <div className="ml-4">
              <p>Reggae “n” blues</p>
              <p className="text-xs text-[#8C8E8F] mb-2">Dj YK mule</p>
              <p className="text-xs">1:02:42</p>
            </div>
            <div className="rounded-full cursor-pointer group w-[37px] h-[37px] border flex items-center justify-center border-[#D9D9D9]">
              <img
                className=" group-hover:scale-110 transition duration-500"
                src={images.Top_Heart}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" bg-darkAlt py-4 pl-4 pr-5 rounded-[20px] flex items-center">
          <img src={images.Top3} alt="album art" />
          <div className="flex items-center justify-between w-full">
            <div className="ml-4">
              <p>Tomorrow’s tunes</p>
              <p className="text-xs text-[#8C8E8F] mb-2">Obi Datti</p>
              <p className="text-xs">2:01:25</p>
            </div>
            <div className="rounded-full  cursor-pointer group w-[37px] h-[37px] border flex items-center justify-center border-[#D9D9D9]">
              <img
                className=" group-hover:scale-110 transition duration-500"
                src={images.Top_Heart}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
