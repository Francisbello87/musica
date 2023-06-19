import React from "react";
import { images } from "../constants";

const Loader = ({ title }) => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <img className="w-20 h-20 object-contain breathing-button" src={images.Logo} alt="Loader" />
      <h1 className=" font-bold text-2xl text-lightColor mt-2">{title || "Loading..."}</h1>
    </div>
  );
};

export default Loader;
