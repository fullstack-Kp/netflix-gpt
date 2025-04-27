import React, { useEffect, useState } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useVideoTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieId = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`;
    const data = await fetch(url, options);
    const jsonData = await data.json();
    console.log("🚀 ~ getMovieId ~ jsonData:", jsonData);
    const filteredTrailerVideos = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredTrailerVideos.length
      ? filteredTrailerVideos[0]
      : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log("🚀 ~ getMovieId ~ trailer:", trailer);
    console.log("🚀 ~ trailer ~ trailer:", filteredTrailerVideos);
  };

  useEffect(() => {
    getMovieId();
  }, []);
};

export default useVideoTrailer;
