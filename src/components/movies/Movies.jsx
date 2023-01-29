import React, { useState, useEffect } from "react";
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { MdPlayCircleOutline } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { filterData } from "../../features/slice/movieSlice";
import style from "./movies.module.scss";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
const Movies = () => {
  const dispatch = useDispatch();
  const { loading, movies, error } = useSelector((store) => store.movie);
  const [data, setData] = useState([]);
  console.log(movies);
  useEffect(() => {
    setData(movies);
  }, []);
  return (
    <>
      <Box className={style.movie_container}>
        {loading ? (
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Loading...
          </Typography>
        ) : (
          <MovieCard data={data} />
        )}
      </Box>
    </>
  );
};

export default Movies;
