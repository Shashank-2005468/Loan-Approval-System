# Loan Approval & Rejection Prediction System

## Overview

The Loan Approval & Rejection Prediction System is a full-stack Machine Learning web application that predicts whether a loan application is likely to be approved or rejected based on applicant details.

The system provides a modern user-friendly dashboard where users can register, log in, update their profile, submit loan details, view prediction results, and access their prediction history.

---

## Features

- User Registration & Login Authentication
- Forgot Password Recovery
- Edit User Profile
- Loan Approval/Rejection Prediction
- Prediction History Tracking
- MongoDB Database Integration
- Responsive Dashboard UI
- REST API Based Architecture

---

## Machine Learning Model

The prediction model is trained using historical loan application data and considers factors such as:

- Gender
- Married Status
- Dependents
- Education
- Self Employed Status
- Applicant Income
- Coapplicant Income
- Loan Amount
- Loan Amount Term
- Credit History
- Property Area

The model returns:

- ✅ Approved
- ❌ Rejected

---

## Project Structure

```text
Loan_Aproval_prediction
│
├── backend
│   ├── database
│   ├── Models
│   ├── routes
│   ├── services
│   ├── app.py
│   └── requirements.txt
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Tech Stack

### Frontend

- React.js
- Vite
- React Router
- CSS

### Backend

- Flask
- Flask-CORS
- REST APIs

### Database

- MongoDB
- PyMongo

### Machine Learning

- Python
- NumPy
- Pandas
- Scikit-Learn
- Pickle

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Shashank-2005468/Loan-Approval-System.git
cd Loan-Approval-System
```

---

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---






## Future Improvements

- Password Reset via Email OTP
- JWT Authentication
- Admin Dashboard
- Loan Eligibility Score
- Cloud Deployment

---

## Author

**Shashank Kasturi**

Computer Science Engineering (Data Science)

GitHub: https://github.com/Shashank-2005468