import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPiggyBank } from 'react-icons/fa';
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="dashboard-page fade-in">
      <div className="welcome-section">
        <div className="illustration-wrapper">
          <FaPiggyBank className="large-illustration" />
        </div>
        <h1>Welcome back, {user.username || "User"}!</h1>
        <p>Get an instant prediction on your loan approval status based on our advanced banking algorithm.</p>
        <button className="primary-btn pulse-anim" onClick={() => navigate('/predict')}>
          Predict Loan Approval
        </button>
      </div>
    </div>
  );
};

export default Dashboard;