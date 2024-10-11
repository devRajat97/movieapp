import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  const moviesData = useSelector((store) => store.movies);
  if (!moviesData) return;
  const nowPlayingMovies = moviesData?.nowPlayingMovies?.[0];
  console.log(nowPlayingMovies  ,"nowplaying movive")
 const title = nowPlayingMovies?.title
 const id = nowPlayingMovies?.id
 const overview = nowPlayingMovies?.overview


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
