import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogCategory from "../../pages/admin/blog-category";

const BlogRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/blog-category"
          element={
            <>
              <BlogCategory />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default BlogRoute;
