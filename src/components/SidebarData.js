import React from "react";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io5";

export const SidebarData = [
  {
    title: "Home",
    path: "/Home",
    icons: <IoIcons.IoHomeOutline />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/Search",
    icons: <IoIcons.IoSearchSharp />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/Chat",
    icons: <FiIcons.FiUsers />,
    cName: "nav-text",
  },
  {
    title: "Favourite",
    path: "/Favourite",
    icons: <FiIcons.FiHeart />,
    cName: "nav-text",
  },
];

export default SidebarData;
