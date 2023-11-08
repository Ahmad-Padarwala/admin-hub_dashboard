import React from "react";
import Sidebar from "../layout/Sidebar";
import Dashboard from "./Dashboard";
import "../../../assets/css/admin/Dashboard.css";

const index = () => {
  return (
    <>
        <Sidebar />
        <Dashboard />
    </>
  );
};

export default index;
