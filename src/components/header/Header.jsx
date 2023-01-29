import React, { useState } from "react";
import { Box, Stack, IconButton, Paper, TextField, InputAdornment } from "@mui/material";
import { MdOutlineSearch } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";

import Search from "./Search";
const Header = () => {
  // console.log(search);
  return (
    <Box py={4} mb={4} sx={{ position: "sticky", top: 0, background: "#273244", zIndex: 2 }}>
      <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems="center">
        <Search />
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
