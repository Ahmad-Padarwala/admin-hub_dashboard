import React from "react";
import DashboardRoute from "./routes/admin/DashboardRoute";
import UserRoute from "./routes/UserRoute";
import BlogRoute from "./routes/admin/BlogRoute";

const App = () => {
  return (
    <>
      <DashboardRoute />
      <UserRoute />
      <BlogRoute />
    </>
  );
};

export default App;
