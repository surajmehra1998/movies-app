import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { searchFilter } from "../../features/slice/movieSlice";
import { useDispatch } from "react-redux";
import data from "../../features/utils/data.json";
import style from "./header.module.scss";
import { MdOutlineSearch } from "react-icons/md";
const Search = () => {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  //   const dispatch = useDispatch();
  const searchFilterData = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };
  const filterSearch = data.filter((data) => data.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  //   setTimeout(()=>{
  //     const filterSearch = data.filter((data) => data.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  //   });
  console.log(filterSearch);

  console.log(search);
  return (
    <Paper className={style.search_form} component={"form"} sx={{ background: "transparent", boxShadow: "none" }}>
      <input type="text" name="" value={search} placeholder="Search movies" onChange={searchFilterData} />
      <IconButton>
        <MdOutlineSearch height={23} width={23} />
      </IconButton>
    </Paper>
  );
};

export default Search;
