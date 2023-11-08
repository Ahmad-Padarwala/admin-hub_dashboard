import React, { useState } from "react";
import LogOut from "./LogOut";

const Header = () => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
  };

  const closeLogOutModal = () => {
    setIsLogOutModalOpen(false);
  };
  const logOutAdmin = () => {
    console.log("log out completed");
  };
  return (
    <>
      <header className="admin_header">
        <div>
          <form>
            <label htmlFor="search">Search for stuff</label>
            <input
              id="search"
              type="text"
              placeholder="Search..."
              autoFocus
              required
            />
            <button type="button">Go</button>
          </form>
          <button className="admin_logOut_btn" onClick={openLogOutModal}>
            <i className="fa-solid fa-right-from-bracket"></i> Log Out
          </button>
        </div>
      </header>
      {isLogOutModalOpen && (
        <LogOut onCancel={closeLogOutModal} onLogOut={logOutAdmin} />
      )}
    </>
  );
};

export default Header;
