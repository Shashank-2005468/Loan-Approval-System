from flask import Blueprint, jsonify
from database.collections import prediction_collection

history_bp = Blueprint(
    "history",
    __name__
)

@history_bp.route(
    "/history/<user_id>",
    methods=["GET"]
)
def history(user_id):

    data = list(
        prediction_collection.find(
            {"user_id": user_id},
            {"_id": 0}
        )
    )

    return jsonify(data)