import pickle
import numpy as np

model = pickle.load(
    open("models/loan_model.pkl", "rb")
)

features = pickle.load(
    open("models/features.pkl", "rb")
)

def predict_loan(data):

    prediction = model.predict(
        np.array([data])
    )[0]

    return "Approved" if prediction == 1 else "Rejected"