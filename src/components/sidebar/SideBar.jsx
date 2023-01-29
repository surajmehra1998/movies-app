import React from "react";
import { Avatar, Stack, Typography, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import style from "./sidebar.module.scss";
import logo from "../../assets/images/user.png";
import { primaryLinks, secondaryLinks, settingLinks } from "./links";
const SideBar = () => {
  return (
    <nav>
      <Stack className={style.profile} alignItems="center">
        <Avatar alt="logo" src={logo} sx={{ height: 90, width: 90, margin: "auto" }} component={Link} to="/" />
        <Typography variant="h2">Eric Hoffman</Typography>
      </Stack>
      <Box>
        <ul className={style.links}>
          {primaryLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? "active" : "")}>
                {link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={style.links}>
          {secondaryLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="flex-center">
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={style.links}>
          {settingLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="flex-center">
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </nav>
  );
};

export default SideBar;
