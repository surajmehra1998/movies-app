import React, { useState } from "react";
import { Box, Stack, IconButton, Paper, TextField, InputAdornment } from "@mui/material";
import { MdOutlineSearch, MdOutlineLightMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDotsVertical } from "react-icons/rx";
import style from "./header.module.scss";
import Search from "./Search";
const Header = ({ open }) => {
  // const [open, setOpen] = useState(false);
  // const hello = () => {
  //   setOpen(true);
  //   console.log("hello steopen");
  // };
  // console.log(props);
  return (
    <Box className={style.header}>
      <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems="center">
        <Search />
        <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems="center">
          <IconButton>
            <MdOutlineLightMode height={23} width={23} />
          </IconButton>
          <IconButton>
            <RxDotsVertical height={23} width={23} />
          </IconButton>
          <IconButton onClick={open} className={style.menu}>
            <AiOutlineMenu height={23} width={23} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
