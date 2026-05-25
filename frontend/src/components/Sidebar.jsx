import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaChartLine, FaHistory, FaSignOutAlt, FaTimes, FaUserEdit } from 'react-icons/fa';
import "../styles/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const initials = user.username
    ? user.username
        .split("_")
        .map(word => word[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}><FaTimes /></button>
        </div>

        <div className="profile-card">
          <div className="avatar">
            <div className="avatar-circle">
              {initials}
            </div>
          </div>
          <div className="profile-info">
            <h3>{user.username || "User"}</h3>
            <p>{user.phone || "No phone provided"}</p>
          </div>
          <button className="edit-profile-btn" onClick={() => navigate('/edit-profile')}><FaUserEdit /> Edit Profile</button>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <FaChartLine /> Dashboard
          </NavLink>
          
          <NavLink to="/history" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <FaHistory /> History
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;