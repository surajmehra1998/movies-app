import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Card, CardActions, Stack, CardContent, CardMedia, Typography } from "@mui/material";
import style from "./movies.module.scss";
import { useSelector } from "react-redux";
import Movies from "./Movies";
const MovieDetails = () => {
  // console.log(movieData);
  const { loading, singleMovie } = useSelector((store) => store.movie);
  console.log(loading, singleMovie);
  const [movies, setMovies] = useState([singleMovie]);
  const { id } = useParams();
  // useEffect(() => {
  //   setMovies(movies);
  // }, [movies]);
  console.log(movies);
  return (
    <Box className={style.details_container} mb={4}>
      <h2>{id}</h2>
      {movies?.map((data, i) => (
        <Card className={style.detail_card} key={i} sx={{ display: "flex", borderRadius: "5px" }}>
          <CardMedia component="img" alt={data.Title} height="389" image={data.Poster} sx={{ maxWidth: "330px", borderRadius: "5px 0 0 5px" }} />
          <Box p={4}>
            <CardContent sx={{ padding: 0 }}>
              <Box maxWidth={300} className={style.title_text}>
                <Typography gutterBottom variant="h5">
                  {data.Title}
                </Typography>
                {/* <LinearProgress variant="determinate" {...data.imdbRating} /> */}
                <Stack direction={"row"} justifyContent="space-between">
                  <Typography gutterBottom variant="body1">
                    Year:
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    {data.Year}
                  </Typography>
                </Stack>
                <Stack direction={"row"} justifyContent="space-between">
                  <Typography gutterBottom variant="body1">
                    Running Time:
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    {data.Runtime}
                  </Typography>
                </Stack>
                <Stack direction={"row"} justifyContent="space-between">
                  <Typography gutterBottom variant="body1">
                    Directed By:
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    {data.Director}
                  </Typography>
                </Stack>
                <Stack direction={"row"} justifyContent="space-between">
                  <Typography gutterBottom variant="body1">
                    Language:
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    {data.Language}
                  </Typography>
                </Stack>
              </Box>
              <Typography gutterBottom variant="body1" mt={3}>
                {data.Plot}
              </Typography>
            </CardContent>
            <CardActions className={style.action}>
              <Button size="medium" className={style.play}>
                Play Movie
              </Button>
              <Button size="medium" className={style.watch}>
                Watch Trailer
              </Button>
            </CardActions>
          </Box>
        </Card>
      ))}
      <Movies />
    </Box>
  );
};

export default MovieDetails;
