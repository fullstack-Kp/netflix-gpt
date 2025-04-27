import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );
    const jsonData = await data.json();
    console.log("🚀 ~ getNowPlayingMoviesList ~ jsonData:", jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMoviesList();
  }, []);

  return;
};

export default useNowPlayingMovies;
