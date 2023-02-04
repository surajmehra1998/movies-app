import React from "react";
import { Avatar, Stack, Typography, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import style from "./sidebar.module.scss";
import logo from "../../assets/images/user.png";
import { primaryLinks, secondaryLinks, settingLinks } from "./links";
const SideBar = ({ open, close }) => {
  return (
    <nav className={`${open ? "active" : ""}`}>
      <div className="nav-container">
        <Stack className={style.profile} alignItems="center">
          <Avatar alt="logo" src={logo} sx={{ height: 90, width: 90, margin: "auto" }} component={Link} to="/" onClick={close} />
          <Typography variant="h2">Eric Hoffman</Typography>
        </Stack>
        <Box>
          <ul className={style.links}>
            {primaryLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className={({ isActive }) => (isActive ? "active" : "")} onClick={close}>
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className={style.links}>
            {secondaryLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="flex-center" onClick={close}>
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={style.links}>
            {settingLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="flex-center" onClick={close}>
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </div>
      <div className="overlay" onClick={close}></div>
    </nav>
  );
};

export default SideBar;
