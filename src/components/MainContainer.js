import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovieInBg = movies[0];

  const { original_title, overview, id } = mainMovieInBg;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainContainer;
