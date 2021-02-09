import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io5";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import icon from "./Popcorn.png";

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sideBar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-icon">
          <img
            src={icon}
            className="popcornIcon"
            alt="logo"
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li>
            <Link to="#" className="menu-icon">
              <IoIcons.IoPizzaOutline />
            </Link>
          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icons}
                  <span>{item.title}</span>
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
