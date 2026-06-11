import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../styles/result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (!location.state) {
    return <Navigate to="/predict" />;
  }

  const { prediction, details } = location.state;
  const isApproved = prediction === 'Approved';

  const totalIncome = details.ApplicantIncome + details.CoapplicantIncome;
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="result-page fade-in">
      <div className={`result-card ${isApproved ? 'approved' : 'rejected'}`}>
        <div className="icon-wrapper">
          {isApproved ? <FaCheckCircle className="status-icon success" /> : <FaTimesCircle className="status-icon error" />}
        </div>
        
        <h1 className={isApproved ? "text-success" : "text-error"}>
          Loan {prediction}
        </h1>
        
        <div className="details-grid">
          <div className="detail-item"><span>Date:</span> <strong>{currentDate}</strong></div>
          <div className="detail-item"><span>Loan Amount:</span> <strong>₹{new Intl.NumberFormat("en-IN").format(details.LoanAmount*1000)}</strong></div>
          <div className="detail-item"><span>Total Income:</span> <strong>₹{new Intl.NumberFormat("en-IN").format(totalIncome)}</strong></div>
          <div className="detail-item"><span>Credit History:</span> <strong>{details.Credit_History === 1 ? 'Good' : 'Bad'}</strong></div>
        </div>

        <div className="result-actions">
          <button className="secondary-btn" onClick={() => navigate('/predict')}>Check Another</button>
          <button className="primary-btn" onClick={() => navigate('/history')}>View History</button>
        </div>
      </div>
    </div>
  );
};

export default Result;