import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Header, Movies, Sidebar } from "./components";
import MovieDetails from "./components/movies/MovieDetails";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflowY = "hidden";
  };
  const handleClose = () => {
    setOpen(false);
    document.body.style.overflowY = "auto";
  };
  return (
    <BrowserRouter>
      <Box className="main-container">
        <Sidebar close={handleClose} open={open} />
        <Box className="body-container">
          <Header open={handleOpen} />
          <Routes>
            <Route path="/" element={<Movies />} exact />
            <Route path="/movies/:id" element={<MovieDetails />} exact />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
