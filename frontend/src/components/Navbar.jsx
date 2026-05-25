import React from 'react';
import { FaBars, FaShieldAlt, FaBell } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="nav-brand">
          <FaShieldAlt className="brand-icon" />
          <h2>Loan Approval / Rejection Checking System</h2>
        </div>
      </div>
      
      <div className="nav-right">
        <button className="icon-btn notification-btn"><FaBell /></button>
      </div>
    </nav>
  );
};

export default Navbar;