from flask import Blueprint, request, jsonify
from services.predictor import predict_loan
from database.collections import prediction_collection
import time
from datetime import datetime

prediction_bp = Blueprint(
    "prediction",
    __name__
)

@prediction_bp.route(
    "/predict",
    methods=["POST"]
)
def predict():

    data = request.json

    total_income = (
        data["ApplicantIncome"] +
        data["CoapplicantIncome"]
    )

    features = [
        data["Dependents"],
        data["Education"],
        data["Self_Employed"],
        data["ApplicantIncome"],
        data["CoapplicantIncome"],
        data["LoanAmount"],
        data["Loan_Amount_Term"],
        data["Credit_History"],
        data["Property_Area_Semiurban"],
        data["Property_Area_Urban"],
        total_income
    ]

    time.sleep(3)

    result = predict_loan(features)

    
    prediction_collection.insert_one({
    **data,
    "Total_Income": total_income,
    "result": result,
    "created_at": datetime.now()
})

    return jsonify({
        "result": result
    })