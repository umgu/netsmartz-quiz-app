import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { sideBarData } from "./sidebar-data";
import "./sidebar.css";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <NavLink to="/">
          <div
            className="logo-container m-1 p-2"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <img
              src={require("../../static/images/net_smartz_logo.png")}
              alt="logo"
            />
          </div>
        </NavLink>
        <div
          className="hamburger-menu-icon me-2 me-sm-4 ms-4 ms-sm-0"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <i className="fa-sharp fa-solid fa-bars"></i>
        </div>
      </div>

      <div
        className="menu-list-container"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <ul className={showMenu ? "show-mobile-view" : "hide-mobile-view"}>
          {sideBarData.map((val, key) => {
            return (
              <li key={key}>
                <NavLink
                  children={({ isActive }) => {
                    const file = isActive ? "active" : "default";
                    return (
                      <>
                        <i className={`${file}  ${val.icon}`}></i>
                        {val.title}
                      </>
                    );
                  }}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={val.src}
                ></NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-footer p-2">
        <p style={{ color: "white" }}>
          In Association with
        </p>
        <a href="https://www.greatplacetowork.com/" target="_blank" className="ms-1">
          <img src={require("../../static/images/GPW_Image.png")} alt="GPW" />
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
