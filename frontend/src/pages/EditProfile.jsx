import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import '../styles/form.css';

const EditProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [formData, setFormData] = useState({
    username: user.username || "",
    email: user.email || "",
    phone: user.phone || ""
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await api.put(`/update-profile/${user.user_id}`, {
        username: formData.username,
        email: formData.email,
        phone: formData.phone
      });

      const updatedUser = {
        ...user,
        username: formData.username,
        email: formData.email,
        phone: formData.phone
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      navigate('/dashboard');
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
      setError(err.response?.data?.message || 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page fade-in">
      <div className="form-card">
        <h2>Edit Profile</h2>
        <p>Update your personal information below.</p>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="prediction-form">
          <div className="form-grid">
            <div className="input-group full-width">
              <label>Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            
            <div className="input-group full-width">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            
            <div className="input-group full-width">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="secondary-btn" onClick={() => navigate('/dashboard')}>
              Cancel
            </button>
            <button type="submit" className="primary-btn" disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;