import React from "react";
import Emoji from "react-apple-emojis";

export const SidebarData = [
  {
    title: "Trending",
    path: "/",
    icons: <Emoji name="fire" width={25} />,

    cName: "nav-text",
  },
  {
    title: "Movie",
    path: "/Movie",
    icons: <Emoji name="clapper-board" width={25} />,

    cName: "nav-text",
  },
  {
    title: "Shows",
    path: "/TvShows",
    icons: <Emoji name="television" width={25} />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/Search",
    icons: <Emoji name="magnifying-glass-tilted-left" width={30} />,
    cName: "nav-text",
  },
  {
    title: "Genre",
    path: "/Genre",
    icons: <Emoji name="person-shrugging" width={30} />,
    cName: "nav-text",
  },
];

export default SidebarData;
