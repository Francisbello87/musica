import React, {useRef} from "react";
import { images } from "../constants";
import { AiOutlineSearch } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const ref = useRef(null)

  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div className="w-full fixed z-10">
      <div className="w-full h-[73px] flex items-center ">
        <div className="pl-7 py-7 cursor-pointer">
          <img className="w-[34px] h-[34px]" src={images.Logo} alt="Logo" />
        </div>
        <div>
          <div className="flex items-center pl-7 p7-7 w-full">
            <AiOutlineSearch onClick={handleClick} className="text-[#404445] mr-6 text-xl cursor-pointer" />
            <input
            ref={ref}
              type="text"
              placeholder="Search artists"
              className="bg-transparent py-7 font-semibold text-sm outline-none placeholder:text-[#404445] caret-slate-300"
            />
          </div>
        </div>
      </div>
      {/* <Sidebar/> */}
    </div>
  );
};

export default Navbar;
