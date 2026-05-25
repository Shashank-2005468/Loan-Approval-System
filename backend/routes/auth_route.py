from flask import Blueprint, request, jsonify
from database.collections import users_collection
from bson.objectid import ObjectId

auth_bp = Blueprint("auth", __name__)

# Register User
@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.json

    users_collection.insert_one({
        "username": data["username"],
        "email": data["email"],
        "phone": data["phone"],
        "password": data["password"]
    })

    return jsonify({
        "message": "User Registered Successfully"
    })
    
    from flask import Blueprint, request, jsonify
from database.collections import users_collection

auth_bp = Blueprint("auth", __name__)

# Register API
@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.json

    users_collection.insert_one({
        "username": data["username"],
        "email": data["email"],
        "phone": data["phone"],
        "password": data["password"]
    })

    return jsonify({
        "message": "User Registered Successfully"
    })


# Login API
@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json

    user = users_collection.find_one({
        "email": data["email"],
        "password": data["password"]
    })

    if user:

        return jsonify({
            "message": "Login Successful",
            "user_id": str(user["_id"]),
            "username": user["username"],
            "phone":user["phone"],
            "email":user["email"]
            
        })

    return jsonify({
        "message": "Invalid Credentials"
    }), 401

# Update Profile API
@auth_bp.route("/update-profile/<user_id>", methods=["PUT"])
def update_profile(user_id):
    data = request.json

    users_collection.update_one(
        {"_id": ObjectId(user_id)},
        {
            "$set": {
                "username": data["username"],
                "email": data["email"],
                "phone": data["phone"]
            }
        }
    )

    return jsonify({
        "message": "Profile updated successfully"
    }), 200

# Forgot Password API
@auth_bp.route("/forgot-password", methods=["POST"])
def forgot_password():
    data = request.json

    user = users_collection.find_one({"email": data["email"]})

    if not user:
        return jsonify({
            "message": "User with this email not found"
        }), 404

    users_collection.update_one(
        {"email": data["email"]},
        {"$set": {"password": data["password"]}}
    )

    return jsonify({
        "message": "Password reset successfully"
    }), 200