import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Card, CardActions, Stack, CardContent, CardMedia, Typography } from "@mui/material";
import style from "./movies.module.scss";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import MovieCard from "./MovieCard";
const MovieDetails = () => {
  const { moviesList } = useSelector((store) => store.movie);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const filterItem = () => {
      const movieData = moviesList.filter((data) => data.Title === id);
      setMovieDetail(movieData);
    };
    filterItem();
  }, [id, moviesList]);
  console.log(movieDetail);

  const handleScroll = () => {
    window.screenTop({ top: 0 });
  };
  return (
    <Box className={style.details_container} mb={4}>
      <Fade direction="down">
        {movieDetail?.map((data, i) => (
          <Card className={style.detail_card} key={i} sx={{ display: "flex", borderRadius: "5px", marginBottom: 4 }}>
            <CardMedia
              component="img"
              alt={data.Title}
              height="100%"
              image={data.Poster}
              sx={{ maxWidth: { md: 330 }, objectFit: { xs: "inherit", md: "cover" }, borderRadius: "5px 0 0 5px" }}
            />
            <Box p={{ xs: "16px", md: "24px" }}>
              <CardContent sx={{ padding: 0 }}>
                <Box className={style.title_text}>
                  <Typography gutterBottom variant="h5">
                    {data.Title}
                  </Typography>
                  <Stack direction={"row"} alignItems="center" className={style.rating}>
                    <Box className={style.range_input}>
                      <Typography width={`${+data.imdbRating * 10}%`}></Typography>
                    </Box>
                    <Typography variant="body1">{data.imdbRating}/10</Typography>
                  </Stack>
                  <Stack direction={"row"} className={style.common_width}>
                    <Typography gutterBottom variant="body1">
                      Year:
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      {data.Year}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} className={style.common_width}>
                    <Typography gutterBottom variant="body1">
                      Running Time:
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      {data.Runtime}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} className={style.common_width}>
                    <Typography gutterBottom variant="body1">
                      Directed By:
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      {data.Director}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} className={style.common_width}>
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
      </Fade>
      <MovieCard movies={moviesList} scroll={handleScroll} />
    </Box>
  );
};

export default MovieDetails;
