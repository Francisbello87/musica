import React from "react";
import { images } from "../constants";
import { motion } from "framer-motion";

const Sidebar = ({ isMenu, setIsMenu }) => {
  return (
    <div className="pr-6 ">
      <div className="hidden sm:block">
        <ul className="w-[52px] bg-darkAlt cursor-pointer rounded-full flex flex-col items-center pt-6">
          <li>
            <a href="">
              <img src={images.Home} alt="Home Button" />
            </a>
          </li>
          <li className="my-[30px]">
            <a href="">
              <img src={images.Playlist} alt="Playlist Button" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={images.Radio} alt="Radio Button" />
            </a>
          </li>
          <li className="my-[30px]">
            <a href="">
              <img src={images.Videos} alt="Video Button" />
            </a>
          </li>
        </ul>
        <ul className="w-[52px] bg-darkAlt cursor-pointer rounded-full flex flex-col items-center py-6 mt-5">
          <li>
            <a href="">
              <img src={images.Profile} alt="Account Button" />
            </a>
          </li>
          <li className="mt-[30px]">
            <a href="">
              <img src={images.Logout} alt="Logout Button" />
            </a>
          </li>
        </ul>
      </div>
      {!isMenu && (
        <motion.div whileInView={{x: [-100, 0], opacity: [0, 1]}} className="w-[80%] absolute top top-20 bg-red-400 h-[40%] z-50">
          <ul className="w-[52px] bg-darkAlt cursor-pointer rounded-full flex flex-col items-center pt-6">
            <li>
              <a href="">
                <img src={images.Home} alt="Home Button" />
              </a>
            </li>
            <li className="my-[30px]">
              <a href="">
                <img src={images.Playlist} alt="Playlist Button" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={images.Radio} alt="Radio Button" />
              </a>
            </li>
            <li className="my-[30px]">
              <a href="">
                <img src={images.Videos} alt="Video Button" />
              </a>
            </li>
          </ul>
          <ul className="w-[52px] bg-darkAlt cursor-pointer rounded-full flex flex-col items-center py-6 mt-5">
            <li>
              <a href="">
                <img src={images.Profile} alt="Account Button" />
              </a>
            </li>
            <li className="mt-[30px]">
              <a href="">
                <img src={images.Logout} alt="Logout Button" />
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;
