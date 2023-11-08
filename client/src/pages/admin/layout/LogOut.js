import React from "react";
import "../../../assets/css/admin/User.css";

const LogOut = ({ onCancel, onLogOut }) => {
  const handleLogOut = () => {
    onLogOut(); // Call the logOutAdmin function
  };

  return (
    <>
      <div className="logOut_modal_section">
        <p>Do you want to Logout?</p>
        <div>
          <button onClick={handleLogOut}>LOG OUT</button>
          <button onClick={onCancel}>CANCEL</button>
        </div>
      </div>
    </>
  );
};

export default LogOut;
