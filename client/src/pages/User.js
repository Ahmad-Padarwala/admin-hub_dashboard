import React from "react";
import "../assets/css/admin/User.css";

const User = () => {
  return (
    <>
      <div>
        <form className="login_form_box">
          <h1 className="text-white">LOGIN</h1>
          <input
            type="text"
            placeholder="Username"
            className="username_input"
          />
          <input
            type="password"
            placeholder="Password"
            className="username_input"
          />
          <input type="submit" className="login_btn" value="Login" />
        </form>
      </div>
    </>
  );
};

export default User;
