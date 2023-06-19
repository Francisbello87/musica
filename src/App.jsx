import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hero, Player, ViewChart } from "./container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { images } from "./constants";
import { MusicPlayer } from "./components";

function App() {
  const { activeSong } = useSelector((state) => state.player);
  const [isMenu, setIsMenu] = useState(true);
  //  const path = useLocation().pathname;
  // const location = path.split("/")[1];

  return (
    <div className="w-full h-full relative">
      <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />
      <div className="h-full pt-24 fixed z-50  ">
        <Sidebar />
      </div>
      <main className="h-full w-full pt-24 px-5 ">
        <Routes>
          <Route
            path="/"
            element={<Hero isMenu={isMenu} setIsMenu={setIsMenu} />}
          />
          <Route path="/charts" element={<ViewChart />} />
        </Routes>
      </main>
      <div className="relative "></div>
      <div className=" fixed  player z-50 bottom-0 py-4 sm:px-14 px-7 w-full h-[110px]">
        {activeSong?.title && (
          <div className=" flex items-center justify-between w-full h-full mr-[66px] mb-8">
            <MusicPlayer />
          </div>
        )}
      </div>
      {/* {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )} */}
    </div>
  );
}

export default App;
