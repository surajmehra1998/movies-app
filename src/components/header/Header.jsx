import React, { useState } from "react";
import { Box, Stack, IconButton, Paper, TextField, InputAdornment } from "@mui/material";
import { MdOutlineSearch } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";
import { searchFilter } from "../../features/slice/movieSlice";
import { useDispatch } from "react-redux";
import data from "../../features/utils/data.json";
import style from "./header.module.scss";
const Header = () => {
  const [movieData, setMovieData] = useState(data);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchFilterData = (e) => {
    console.log(setSearch(e.target.value));
  };

  // console.log(search);
  return (
    <Box py={4} mb={4} sx={{ position: "sticky", top: 0, background: "#273244", zIndex: 2 }}>
      <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems="center">
        <Paper className={style.search_form} component={"form"} sx={{ background: "transparent", boxShadow: "none" }}>
          <input type="text" name="" value={search} placeholder="Search movies" onChange={searchFilterData} />
          <IconButton>
            <MdOutlineSearch height={23} width={23} />
          </IconButton>
        </Paper>
        <Paper sx={{ background: "transparent", boxShadow: "none", color: "#d4d7dd" }}>
          <IconButton>
            <MdOutlineSearch height={23} width={23} />
          </IconButton>
          <IconButton>
            <RxDotsVertical height={23} width={23} />
          </IconButton>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Header;
