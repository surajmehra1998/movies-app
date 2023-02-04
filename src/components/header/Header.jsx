import React from "react";
import { Box, Stack, IconButton } from "@mui/material";
import { MdOutlineLightMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDotsVertical } from "react-icons/rx";
import style from "./header.module.scss";
import Search from "./Search";
const Header = ({ open }) => {
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
