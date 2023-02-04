import { IconButton, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSearch } from "../../features/slice/movieSlice";
import data from "../../features/utils/data.json";
import style from "./header.module.scss";
import { MdOutlineSearch } from "react-icons/md";
import { updateSearchTerm } from "../../features/slice/movieSlice";
const Search = () => {
  const [movies, setMovies] = useState([]);
  const [timerId, setTimerID] = useState();
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((store) => store.movie);
  console.log(searchTerm);
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
  // const filterSearch = data.filter((data) => data.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  //   setTimeout(()=>{
  //     const filterSearch = data.filter((data) => data.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  //   });
  // console.log(filterSearch);

  // console.log(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterSearch(search));
    setSearch("");
    console.log("hello this is submit");
  };
  useEffect(() => {
    // handleSubmit();
  }, [search]);

  const onChange = (e) => {
    // setTimeout(())
    dispatch(updateSearchTerm(e.target.value));
  };

  return (
    // <Paper className={style.search_form} component={"form"} onSubmit={handleSubmit} sx={{ background: "transparent", boxShadow: "none" }}>
    //   <input type="text" name="" value={search} placeholder="Search movies" onChange={(e) => setSearch(e.target.value)} />
    //   <IconButton>
    //     <MdOutlineSearch height={23} width={23} />
    //   </IconButton>
    // </Paper>
    <Paper className={style.search_form} component={"form"} sx={{ background: "transparent", boxShadow: "none" }}>
      <input type="text" name="" value={searchTerm} placeholder="Search movies" onChange={onChange} />
      <IconButton>
        <MdOutlineSearch height={23} width={23} />
      </IconButton>
    </Paper>
  );
};

export default Search;
