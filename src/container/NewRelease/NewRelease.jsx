import React from "react";
import SongCard from "../../components/SongCard";
import { useGetTopChartsQuery } from "../../redux/services/shazam";

const NewRelease = ({isPlaying, activeSong}) => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  // const dataArray = Array.from(data, (item) => item);
  console.log(data.tracks[0]);
  return (
    <div className="text-white mt-9 sm:ml-24  mr-10 pb-10">
      <h2 className="mb-3 font-bold sm:text-2xl text-xl">New Release</h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.tracks?.map((song, index) => (
          <SongCard data={data.tracks} isPlaying={isPlaying} activeSong={activeSong} key={song.key} song={song} i={index} />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
