import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Loader from '../components/Loader';
import '../styles/form.css';

const PredictionForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const initialForm = {
    Dependents: '',
    Education: '1',
    Self_Employed: '0',
    ApplicantIncome: '',
    CoapplicantIncome: '',
    LoanAmount: '',
    Loan_Amount_Term: '',
    Credit_History: '1',
    Property_Area: 'Urban',
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => setFormData(initialForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = JSON.parse(localStorage.getItem('user')) || {};
      const payload = {
        user_id: user.user_id,
        Dependents: parseInt(formData.Dependents) || 0,
        Education: parseInt(formData.Education),
        Self_Employed: parseInt(formData.Self_Employed),
        ApplicantIncome: parseFloat(formData.ApplicantIncome),
        CoapplicantIncome: parseFloat(formData.CoapplicantIncome) || 0,
        LoanAmount: parseFloat(formData.LoanAmount),
        Loan_Amount_Term: parseFloat(formData.Loan_Amount_Term),
        Credit_History: parseInt(formData.Credit_History),
        Property_Area_Semiurban: formData.Property_Area === 'Semiurban' ? 1 : 0,
        Property_Area_Urban: formData.Property_Area === 'Urban' ? 1 : 0
      };

      const response = await api.post('/predict', payload);
      navigate('/result', { state: { prediction: response.data.result, details: payload } });
    } catch (err) {
      setError('Failed to process prediction. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page fade-in">
      {loading && <Loader />}
      <div className="form-card">
        <h2>Loan Application Details</h2>
        <p>Please enter your financial information accurately.</p>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="prediction-form">
          <div className="form-grid">
            
            <div className="input-group">
              <label>Applicant Monthly Income (₹)</label>
              <input type="number" name="ApplicantIncome" value={formData.ApplicantIncome} onChange={handleChange} required min="0" placeholder="e.g. 5000" />
            </div>

            <div className="input-group">
              <label>Co-Applicant Monthly Income (₹)</label>
              <input type="number" name="CoapplicantIncome" value={formData.CoapplicantIncome} onChange={handleChange} required min="0" placeholder="e.g. 2000" />
            </div>

            <div className="input-group">
              <label>Loan Amount (in Thousands ₹)</label>
              <input type="number" name="LoanAmount" value={formData.LoanAmount} onChange={handleChange} required min="1" placeholder="e.g. 230" />
            </div>

            <div className="input-group">
              <label>Loan Amount Term (Months)</label>
              <input type="number" name="Loan_Amount_Term" value={formData.Loan_Amount_Term} onChange={handleChange} required min="1" placeholder="e.g. 360" />
            </div>

            <div className="input-group">
              <label>Dependents</label>
              <select name="Dependents" value={formData.Dependents} onChange={handleChange} required>
                <option value="" disabled>Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </select>
            </div>

            <div className="input-group">
              <label>Education</label>
              <select name="Education" value={formData.Education} onChange={handleChange}>
                <option value="1">Yes (Graduate)</option>
                <option value="0">No (Not Graduate)</option>
              </select>
            </div>

            <div className="input-group">
              <label>Self Employed</label>
              <select name="Self_Employed" value={formData.Self_Employed} onChange={handleChange}>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="input-group">
              <label>Credit History</label>
              <select name="Credit_History" value={formData.Credit_History} onChange={handleChange}>
                <option value="1">Good (Meets Guidelines)</option>
                <option value="0">Bad (Does Not Meet)</option>
              </select>
            </div>

            <div className="input-group full-width">
              <label>Property Area</label>
              <select name="Property_Area" value={formData.Property_Area} onChange={handleChange}>
                <option value="Urban">Urban</option>
                <option value="Semiurban">Semi-Urban</option>
                <option value="Rural">Rural</option>
              </select>
            </div>

          </div>

          <div className="form-actions">
            <button type="button" className="secondary-btn" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" className="primary-btn">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PredictionForm;