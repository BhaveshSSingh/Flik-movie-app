import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io5";
import { SidebarData } from "./SidebarData";
import Emoji from "react-apple-emojis";

import "./NavBar.css";

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sideBar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-icon">
          <IoIcons.IoMenuOutline onClick={showSidebar} />
        </Link>
        <h1 className="app-name">
          FLICK <Emoji name="popcorn" width={40} />
        </h1>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li>
            <Link to="#" className="menu-icon">
              <IoIcons.IoCloseOutline />
            </Link>
          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icons}
                  <span className="span-title">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
