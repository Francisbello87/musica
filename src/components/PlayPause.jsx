import {
  IoPlay,
  IoPause,
} from "react-icons/io5";

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  <div className="bg-[#FACD66] shadow-[0px_22px_70px_4px_rgba(255, 255, 255, 0.3)] w-[40px] h-[40px] rounded-full flex items-center justify-center">
    {
  isPlaying && activeSong?.title===song.title ? (
    <IoPause size={30} onClick={handlePause}/> 
  ) : <IoPlay size={30} onClick={handlePlay}/>
    }

  </div>

);

export default PlayPause;
