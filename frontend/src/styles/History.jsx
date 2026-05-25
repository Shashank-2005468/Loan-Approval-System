import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Loader from '../components/Loader';
import { FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const userId = "default_user_123"; // Retrieve correctly from auth context if needed
        const res = await api.get(`/history/${userId}`);
        setHistory(res.data);
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
        <div className="empty-state">No predictions found yet.</div>
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
