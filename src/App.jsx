import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Hero, NewRelease, Player, PopularRelease } from "./container";
import Sidebar from "./components/Sidebar";

function App() {
  const [isMenu, setIsMenu] = useState(true);

  return (
    <div className="w-full h-full relative">
      <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />

      <main className="w-full h-full pt-24 flex relative">
      <Sidebar isMenu={isMenu} setIsMenu={setIsMenu} />
        <div>
        <Hero isMenu={isMenu} setIsMenu={setIsMenu} />
        <NewRelease />
        <PopularRelease />
        </div>
        
       
        <div className=" fixed  player bottom-0 py-4 px-14 w-full h-[110px]">
          <div className=" flex items-center justify-between w-full h-full mr-[66px] mb-8">
            <Player />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
