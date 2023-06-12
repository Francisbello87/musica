import { useState } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hero, Player, ViewChart } from "./container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { images } from "./constants";

function App() {
  const [isMenu, setIsMenu] = useState(true);
  //  const path = useLocation().pathname;
  // const location = path.split("/")[1];

  return (
    <div className="w-full h-full relative">
      <Router>
        <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />
        <div className="h-full pt-24 fixed z-50  ">
          <Sidebar />
        </div>
        {/* <div className="relative ">
        <div
          className=""
          style={{
            backgroundImage: `url(${images.leadImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="absolute top-0 left-0 w-full  h-screen bg-black bg-fixed opacity-80"></div>
          <Routes>
            <Route path="/charts" element={<ViewChart />} />
          </Routes>
        </div>
        </div> */}

        <main className="h-full w-full pt-24 px-5 ">
          <Routes>
            <Route
              path="/"
              element={<Hero isMenu={isMenu} setIsMenu={setIsMenu} />}
            />
            {/* <Route path="/charts" element={<ViewChart />} /> */}
          </Routes>
        </main>
         <div className="relative ">
        <div
          className=""
          style={{
            backgroundImage: `url(${images.leadImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="absolute top-0 left-0 w-full  h-screen bg-black bg-fixed opacity-80"></div>
          <Routes>
            <Route path="/charts" element={<ViewChart />} />
          </Routes>
        </div>
        </div>
        <div className=" fixed  player z-50 bottom-0 py-4 sm:px-14 px-7 w-full h-[110px]">
          <div className=" flex items-center justify-between w-full h-full mr-[66px] mb-8">
            <Player />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
