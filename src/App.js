import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Header, Movies, Sidebar } from "./components";
import MovieDetails from "./components/movies/MovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ minHeight: "100vh", background: "#273244", display: "grid", gridTemplateColumns: "auto 1fr" }}>
        <Sidebar />
        <Box px={4} pb={4}>
          <Header />
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
