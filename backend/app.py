from flask import Flask
from flask_cors import CORS

from routes.prediction_route import prediction_bp
from routes.history_route import history_bp
from routes.auth_route import auth_bp

app = Flask(__name__)

CORS( app,
    resources={r"/*": {"origins": "*"}},
    supports_credentials=True)

app.register_blueprint(prediction_bp)
app.register_blueprint(history_bp)
app.register_blueprint(auth_bp)

@app.route("/")
def home():
    return {
        "message":"Loan Approval API Running"
    }

if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )