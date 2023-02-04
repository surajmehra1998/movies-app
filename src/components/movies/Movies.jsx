import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import style from "./movies.module.scss";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import { filterSearch } from "../../features/slice/movieSlice";
import data from "../../features/utils/data.json";
import MovieDetails from "./MovieDetails";
const Movies = () => {
  // const [movies, setMovies] = useState([]);
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const { moviesList, searchTerm } = useSelector((store) => store.movie);
  // console.log(singleMovie, data);
  console.log("setaearch teram", searchTerm);
  // const handleSearchTermChange = (e) => {
  //   dispatch(updateSearchTerm(e.target.value));
  // };
  // const filterItem = (singleMovie) => {
  //   const movieData = movies.filter((data) => data === singleMovie);
  //   setMovieDetail(movieData);
  // };
  // console.log(movieDetail);
  // const filterData = movies.filter((data) => data.Title === "Avatar");
  // console.log(filterData);
  const movies = moviesList.filter((data) => data.Title.toLocaleLowerCase().includes(searchTerm));
  console.log("updates", movies);
  // const movies
  // useEffect(() => {
  //   filterSearch();
  // }, [movies]);
  if (movies.length === 0) {
    return <h2 color="white">Movies is not found</h2>;
  }
  return (
    <>
      {/* <MovieDetails /> */}

      <MovieCard movies={movies} />
    </>
  );
};

export default Movies;
