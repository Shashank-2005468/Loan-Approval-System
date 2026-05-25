import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api.js';
import '../styles/auth.css';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError('');
    setLoading(true);

    try {

      const res = await api.post('/login', formData);

      localStorage.setItem(
        "user",
        JSON.stringify({
          user_id: res.data.user_id,
          username: res.data.username,
          email: res.data.email,
          phone: res.data.phone
        })
      );

      navigate('/dashboard');

    } catch (err) {

      setError(
        err.response?.data?.message ||
        'Invalid Credentials'
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card fade-in">

        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to your account</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="auth-form"
        >

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
            <div style={{ textAlign: "right", marginTop: "5px" }}>
              <Link to="/forgot-password" style={{ fontSize: "0.85rem", color: "var(--secondary-color)", textDecoration: "none", fontWeight: "500" }}>Forgot Password?</Link>
            </div>
          </div>

          <button
            type="submit"
            className="primary-btn auth-btn"
            disabled={loading}
          >
            {
              loading
              ? 'Logging in...'
              : 'Login'
            }
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?
            {' '}
            <Link to="/register">
              Register here
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;