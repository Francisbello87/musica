import React, { useRef, useState } from "react";
import { images } from "../constants";
import { AiOutlineSearch } from "react-icons/ai";
import { FaEquals, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";

const Navbar = ({ isMenu, setIsMenu }) => {
  const [isInput, setIsInput] = useState(false);
  const ref = useRef(null);

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
    <div className="w-full fixed z-10 bg-bgColor ">
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
          <img className="ml-5" src={images.Logo} alt="" />
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
      </div>
    </div>
  );
};

export default Navbar;
