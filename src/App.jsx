import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Hero, Player } from "./container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full relative">
      <Navbar />
      <main className="w-full h-full pt-24">
        <Hero />
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
