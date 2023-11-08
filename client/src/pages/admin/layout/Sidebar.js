import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuBtnChange = () => {
    if (isSidebarOpen) {
      return "fa-solid fa-xmark";
    } else {
      return "fa-solid fa-bars";
    }
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="logo-details">
          <i className="fa-solid fa-water icon"></i>
          <div className="logo_name">AWC</div>
          <i
            className={`bx ${menuBtnChange()}`}
            id="btn"
            onClick={toggleSidebar}
          ></i>
        </div>
        <ul className="nav-list">
          <li
            className={
              location.pathname === "/dashboard"
                ? "admin_sidebar_active_li"
                : ""
            }
          >
            <NavLink to="/dashboard">
              <i className="fa-solid fa-grip-vertical"></i>
              <span className="links_name">Dashboard</span>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/products-category"
                ? "admin_sidebar_active_li"
                : ""
            }
          >
            <NavLink to="/products-category">
              <i className="fa-brands fa-blogger"></i>
              <span className="links_name">Products Category</span>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/blog-category"
                ? "admin_sidebar_active_li"
                : ""
            }
          >
            <NavLink to="/blog-category">
              <i className="fa-brands fa-blogger"></i>
              <span className="links_name">Blog Category</span>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/blogs" ? "admin_sidebar_active_li" : ""
            }
          >
            <NavLink to="/blogs">
              <i className="fa-brands fa-blogger"></i>
              <span className="links_name">Blogs</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
