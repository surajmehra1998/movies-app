import React from "react";
import { Card, Box, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import style from "./movies.module.scss";
import { Link } from "react-router-dom";
import { MdPlayCircleOutline } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";

const MovieCard = ({ movies }) => {
  console.log(movies);
  return (
    <Box className={style.movie_container}>
      {movies?.map((item) => (
        <Link to={`/movies/${item.Title}`} key={item.Title}>
          <Card className={style.card}>
            <CardMedia
              sx={{ height: { xs: 280, md: 188 }, borderRadius: "6px", backgroundSize: "100% 100%", cursor: "pointer" }}
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
              <IconButton sx={{ height: "20px", width: "20px" }}>
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
