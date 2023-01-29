import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import style from "./movies.module.scss";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import data from "../../features/utils/data.json";
const Movies = () => {
  // const [movies, setMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  // const { movies } = useSelector((store) => store.movie);
  // const filterItem = (singleMovie) => {
  //   const movieData = movies.filter((data) => data === singleMovie);
  //   setMovieDetail(movieData);
  // };
  // console.log(movieDetail);
  useEffect(() => {
    setMovies(data);
  }, []);
  return (
    <>
      {/* <Box className={style.movie_container}> */}
      <MovieCard movies={movies} />
      {/* </Box> */}
    </>
  );
};

export default Movies;
