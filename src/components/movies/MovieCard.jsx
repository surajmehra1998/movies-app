import React, { useState } from "react";
import { Card, Box, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import style from "./movies.module.scss";
import { Link } from "react-router-dom";
import { MdPlayCircleOutline } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { filterMovie } from "../../features/slice/movieSlice";

const MovieCard = ({ movies }) => {
  const dispatch = useDispatch();

  return (
    <Box className={style.movie_container}>
      {movies?.map((item) => (
        <Link to={`/movies/${item.Title}`} key={item.Title}>
          <Card className={style.card} onClick={() => dispatch(filterMovie(item))}>
            <CardMedia
              sx={{ height: 188, borderRadius: "6px", backgroundSize: "100% 100%", cursor: "pointer" }}
              image={item.Poster}
              title={item.Title}
            />
            <CardContent sx={{ padding: 0 }}>
              <Typography gutterBottom variant="body1" title={item.Title}>
                {item.Title}
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: 0 }}>
              <IconButton>
                <MdPlayCircleOutline />
              </IconButton>
              <IconButton>
                <BsPlusCircle />
              </IconButton>
            </CardActions>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default MovieCard;
