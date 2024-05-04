import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/sidebar.css";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  return (
    <>
      <section id="sidebar" className={isOpen ? "" : "hide"}>
        <NavLink to="/dashboard" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">AdminHub</span>
        </NavLink>
        <ul className="side-menu top">
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <NavLink to="/dashboard">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/dashboard1" ? "active" : ""}>
            <NavLink to="/dashboard">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">Product</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/dashboard2" ? "active" : ""}>
            <NavLink to="/dashboard">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">Product</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/dashboard3" ? "active" : ""}>
            <NavLink to="/dashboard">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">Product</span>
            </NavLink>
          </li>
        </ul>

        <ul className="side-menu">
          <li className={location.pathname === "/dashboard4" ? "active" : ""}>
            <NavLink to="/dashboard">
              <i className="bx bxs-cog"></i>
              <span className="text">Settings</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/dashboard5" ? "active" : ""}>
            <NavLink to="/dashboard" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
