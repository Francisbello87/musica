import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, index, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className="flex w-[200px] flex-col p-4 rounded-md cursor-pointer ">
      <div className="relative w-full  group">
        <div
          className={`absolute inset-0 justify-center items-center bg-bgColor bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-bgColor bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img
          className=" w-[153px] h-[153px] rounded-[25px]"
          src={song.images?.coverart}
          alt="song_img"
        />
      </div>
      <div className=" mt-1 flex flex-col">
        <p className=" text-xs truncate text-lightColor">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className=" text-xs truncate text-[#666767]">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
