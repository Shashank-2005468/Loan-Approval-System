# Loan Approval & Rejection Prediction System

##  Overview

The Loan Approval & Rejection Prediction System is a full-stack web application that predicts whether a loan application is likely to be approved or rejected based on user-provided financial information.

The system uses a Machine Learning model trained on loan approval data and provides a modern dashboard where users can:

- Register and Login
- Predict Loan Approval Status
- View Prediction Results
- Access Prediction History
- Manage User Profile
- Reset Forgotten Passwords

---

## 🚀 Features

### User Authentication

- User Registration
- User Login
- Forgot Password
- Secure User Session Management

### Loan Prediction

- Enter applicant details
- Predict loan approval/rejection
- Real-time prediction results

### Dashboard

- Personalized welcome page
- User profile section
- Quick access to prediction tools

### Prediction History

- Stores prediction records
- Displays user-specific prediction history

### Profile Management

- Edit username
- Update email address
- Update phone number

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- React Icons
- CSS3

### Backend

- Flask
- Flask-CORS
- PyMongo

### Database

- MongoDB

### Machine Learning

- Scikit-Learn
- Pandas
- NumPy
- Joblib

---

## 📂 Project Structure

```text
Loan_Approval_Prediction
│
├── backend
│   ├── Models
│   ├── database
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

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Shashank-2005468/Loan-Approval-Prediction-System.git
cd Loan-Approval-Prediction-System
```

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

## 📊 Machine Learning Model

The application uses a trained Scikit-Learn model to predict loan approval status based on:

- Applicant Income
- Co-applicant Income
- Loan Amount
- Loan Term
- Credit History
- Education
- Marital Status
- Dependents
- Property Area

---

## 🗄 Database Collections

### Users Collection

```json
{
  "username": "Shashank",
  "email": "user@gmail.com",
  "phone": "9876543210",
  "password": "******"
}
```

### Predictions Collection

```json
{
  "user_id": "123456",
  "loan_amount": 500000,
  "income": 80000,
  "prediction": "Approved",
  "date": "2026-05-25"
}
```

---

## 🔮 Future Enhancements

- Email-based password reset
- JWT Authentication
- Loan eligibility score
- Admin Dashboard
- Download prediction reports as PDF
- Data visualization and analytics
- Cloud Deployment

---

## Author

### Shashank Kasturi

- GitHub: https://github.com/Shashank-2005468

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.



