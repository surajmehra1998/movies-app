import { BiMoviePlay } from "react-icons/bi";
import {
  MdPlaylistPlay,
  MdOutlineWatchLater,
  MdSettings,
  MdLogout,
  MdOutlineFavoriteBorder,
  MdList,
  MdDesktopMac,
  MdOutlineSearch,
} from "react-icons/md";

export const primaryLinks = [
  { name: "Discover", path: "/", icon: <MdOutlineSearch /> },
  { name: "Playlist", path: "/playlist", icon: <MdPlaylistPlay /> },
  { name: "Movie", path: "/movie", icon: <BiMoviePlay /> },
  { name: "TV Shows", path: "/tv-shows", icon: <MdDesktopMac /> },
  { name: "My List", path: "/list", icon: <MdList /> },
];

export const secondaryLinks = [
  { name: "Watch Later", path: "/watch-later", icon: <MdOutlineWatchLater /> },
  { name: "Recomended", path: "/recomended", icon: <MdOutlineFavoriteBorder /> },
];
export const settingLinks = [
  { name: "Settings", path: "/setting", icon: <MdSettings /> },
  { name: "Logout", path: "/log-out", icon: <MdLogout /> },
];
