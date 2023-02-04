import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const Movies = () => {
  const { moviesList, searchTerm } = useSelector((store) => store.movie);
  // console.log("setaearch teram", searchTerm);
  const movies = moviesList.filter((data) => data.Title.toLocaleLowerCase().includes(searchTerm));
  // console.log("updates", movies);

  if (movies.length === 0) {
    return <h2 style={{ fontSize: "21px", fontWeight: 600, color: "#FFFFFF" }}>No results found for your search.</h2>;
  }
  return (
    <>
      <MovieCard movies={movies} />
    </>
  );
};

export default Movies;
