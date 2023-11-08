import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../layout/Header";

const Dashboard = () => {
  return (
    <>
      <section className="home-section">
        <Header />
        <div className="admin_page_top">
          <p className="admin_page_header">Dashboard</p>
          <p>
            <NavLink to="/dashboard">
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <i className="fa-solid fa-angles-right"></i>
            <span>Dashboard</span>
          </p>
        </div>
        <div className="dahboard_card_section">
          <div className="dahboard_card">
            <i className="fa-solid fa-angles-right"></i>
            <p>Product</p>
          </div>
          <div className="dahboard_card">
            <i className="fa-solid fa-angles-right"></i>
            <p>Product</p>
          </div>
          <div className="dahboard_card">
            <i className="fa-solid fa-angles-right"></i>
            <p>Product</p>
          </div>
          <div className="dahboard_card">
            <i className="fa-solid fa-angles-right"></i>
            <p>Product</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
