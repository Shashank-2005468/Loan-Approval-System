import React, { useEffect, useState } from 'react';
import api from '../services/api.js';
import Loader from '../components/Loader';
import { FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';
import '../styles/history.css';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        const userId = user.user_id;
        if (userId) {
          const res = await api.get(`/history/${userId}`);
          setHistory(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch history:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="history-page fade-in">
      <h2>Your Prediction History</h2>
      
      {history.length === 0 ? (
        <div className="empty-state">No predictions found yet. Check out the prediction tool!</div>
      ) : (
        <div className="history-grid">
          {history.map((item, index) => (
            <div className="history-card" key={index}>
              <div className="history-header">
                <span className="history-date"><FaCalendarAlt /> {new Date(item.created_at).toLocaleDateString()}</span>
                <span className={`status-badge ${item.result === 'Approved' ? 'badge-success' : 'badge-error'}`}>
                  {item.result}
                </span>
              </div>
              <div className="history-body">
                <p><FaRupeeSign /> <strong>Loan Amount:</strong> ₹{new Intl.NumberFormat("en-IN").format(item.LoanAmount || 0)}</p>
                <p><FaRupeeSign /> <strong>Total Income:</strong> ₹{new Intl.NumberFormat("en-IN").format(item.Total_Income || 0)}</p>
                <p><strong>Credit History:</strong> {item.Credit_History === 1 ? 'Good' : 'Bad'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;