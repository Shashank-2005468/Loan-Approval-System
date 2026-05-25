import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const initials = user.username
    ? user.username
        .split("_")
        .map(word => word[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
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
      <button className="edit-profile-btn" onClick={() => navigate('/edit-profile')}>
        <FaUserEdit /> Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;