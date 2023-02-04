import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineSearch, MdClose } from "react-icons/md";
import { updateSearchTerm } from "../../features/slice/movieSlice";
const Search = () => {
  const [expand, setExpand] = useState(false);
  const handleOpen = () => setExpand(true);
  const handleClose = () => setExpand(false);
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((store) => store.movie);
  // console.log(searchTerm);

  const onChange = (e) => {
    dispatch(updateSearchTerm(e.target.value));
  };

  return (
    <Stack className={`search_form ${expand ? "open" : ""}`} direction="row" alignItems={"center"}>
      <Stack direction="row" alignItems={"center"}>
        <IconButton onClick={handleOpen}>
          <MdOutlineSearch height={23} width={23} />
        </IconButton>
        <input type="text" value={searchTerm} placeholder="Title, Movies, Keyword" onChange={onChange} />
      </Stack>
      <IconButton onClick={handleClose} className="close-btn">
        <MdClose height={23} width={23} />
      </IconButton>
    </Stack>
  );
};

export default Search;
