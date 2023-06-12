import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../constants";
import { AiOutlineSearch } from "react-icons/ai";
import { FaEquals, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { BiHomeAlt } from "react-icons/bi";

const Navbar = ({ isMenu, setIsMenu }) => {
  const [isInput, setIsInput] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleClick = () => {
    ref.current.focus();
  };
  const handleClickMobile = () => {
    setIsInput(!isInput);
  };
  return (
    <div className="w-full fixed z-50 bg-bgColor ">
      <div className="w-full hidden h-[73px] sm:flex items-center ">
        <div className="pl-7 py-7 cursor-pointer">
          <img className="w-[34px] h-[34px]" src={images.Logo} alt="Logo" />
        </div>
        <div>
          <div className="flex items-center pl-7 p7-7 w-full">
            <AiOutlineSearch
              onClick={handleClick}
              className="text-[#404445] mr-6 text-xl cursor-pointer"
            />
            <input
              ref={ref}
              type="text"
              placeholder="Search artists"
              className="bg-transparent py-7 font-semibold text-sm outline-none placeholder:text-[#404445] caret-slate-300"
            />
          </div>
        </div>
      </div>

      <div className=" sm:hidden relative w-full pl-7 py-7 cursor-pointer h-[73px] justify-between flex items-center">
        <div className="flex items-center">
          <div onClick={handleMenu}>
            {isMenu ? (
              <FaEquals className="text-lg text-lightColor" />
            ) : (
              <FaTimes className="text-lg text-lightColor" />
            )}
          </div>
          <img onClick={navigateToHome} className="ml-5" src={images.Logo} alt="" />
        </div>
        <div className="flex items-center">
          {isInput && (
            <motion.input
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              ref={ref}
              type="text"
              placeholder="Search artists"
              className="bg-transparent py-7 transition duration-500 font-semibold text-sm outline-none placeholder:text-[#404445] caret-slate-300"
            />
          )}

          <AiOutlineSearch
            onClick={handleClickMobile}
            className="text-[#404445] mr-6 text-lg cursor-pointer"
          />
        </div>
        {!isMenu && (
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            className="w-[90%] sm:hidden absolute top-16 left-0 bg-darkAlt h-[75vh] z-50"
          >
            <div className="w-full h-full my-14 ml-9">
              <ul className="mobileNav">
                <li className="">
                  <a href="" className="flex items-center">
                    <BiHomeAlt className=" text-3xl text-secondaryColor drop-shadow-md shadow-secondaryColor" />
                    <p className="text-[17px] text-lightColor ml-7 font-bold">
                      Home
                    </p>
                  </a>
                </li>
                <li className="">
                  <a href="" className="flex items-center">
                    <img className="w-[28px] h-[28px]"  src={images.Playlist} alt="Playlist Button" />
                    <p className="text-[17px] text-[#4F524F] ml-7 font-bold">
                      My collections
                    </p>
                  </a>
                </li>
                <li className="">
                  <a href="" className="flex items-center">
                    <img className="w-[28px] h-[28px]" src={images.Radio} alt="Radio Button" />
                    <p className="text-[17px] text-[#4F524F] ml-7 font-bold">
                      Radio
                    </p>
                  </a>
                </li>
                <li className="">
                  <a href="" className="flex items-center">
                    <img className="w-[28px] h-[28px]" src={images.Videos} alt="Video Button" />
                    <p className="text-[17px] text-[#4F524F] ml-7 font-bold">
                      Music videos
                    </p>
                  </a>
                </li>
                <li className="">
                  <a href="" className="flex items-center">
                    <img className="w-[28px] h-[28px]" src={images.Profile} alt="Account Button" />
                    <p className="text-[17px] text-[#4F524F] ml-7 font-bold">
                      Profile
                    </p>
                  </a>
                </li>
                <li className="">
                  <a href="" className="flex items-center">
                    <img className="w-[28px] h-[28px]" src={images.Logout} alt="Logout Button" />
                    <p className="text-[17px] text-[#4F524F] ml-7 font-bold">
                      Log out
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
