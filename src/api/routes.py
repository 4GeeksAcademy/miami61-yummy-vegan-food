"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, UserRegister, Restaurant
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import datetime
from api.send_email import send_email
import hashlib
import random
from flask_jwt_extended import create_access_token

from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

import requests
from dotenv import load_dotenv
import os, json

from pyeasyencrypt.pyeasyencrypt import encrypt_string, decrypt_string

load_dotenv()
api = Blueprint('api', __name__)

APIFY_API_URL = os.getenv('APIFY_API_URL')
# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }


    return jsonify(response_body), 200

@api.route('/getVeganRestaurants', methods=['GET'])
def get_vegan_restaurants():
    location = request.args.get('location', '')
    if location : 
        api_url = f'{APIFY_API_URL}&location={location}'
    else : api_url = APIFY_API_URL

    response = requests.get(api_url)
    if response.status_code == 200 : 
        return jsonify(response.json()), 200
    else : return jsonify({'error': 'Failed to get data from vegan api'}), response.status_code


@api.route('/favorites', methods=['POST'])
@jwt_required()
def favorite_restaurant():
    data = request.json
    restaurant_name = data.get("restaurant_name")
    restaurant_phone = data.get("restaurant_phone")
    address_link = data.get("address_link")
    rating = data.get("rating")
    url = data.get("url")
    user_email = get_jwt_identity()
    if not restaurant_name:
        return jsonify(message = "Please Select a restaurant!"), 400
    
    user= UserRegister.query.filter_by(email=user_email).first()
    
    if user:
        favorite_restaurant = Restaurant()
        favorite_restaurant.restaurant_name = restaurant_name
        favorite_restaurant.restaurant_phone = restaurant_phone
        favorite_restaurant.address_link = address_link
        favorite_restaurant.url = url
        favorite_restaurant.rating = rating
        favorite_restaurant.user_register_id = user.id

        db.session.add(favorite_restaurant)
        db.session.commit()
        return jsonify(message="The restaurant is successfully add in your favourite list "), 201
    
    return jsonify({"message": "Please Register to save the favourite restaurant!"}), 400


@api.route('/register', methods=['POST'])
def register_user():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    # Check if username, email, and password are provided
    if not username or not email or not password:
        return jsonify({"message": "Username, email, and password are required"}), 400

    # Check if user already exists
    if UserRegister.query.filter_by(email=email).first():
        return jsonify({"message": "User with this email already exists"}), 400

    # Create new user
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    user_register = UserRegister(user_name=username, email=email, password=hashed_password)
    db.session.add(user_register)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@api.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    # Check if email, and password are provided
    if not email or not password:
        return jsonify({"message": "email, and password are required"}), 400
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    # Check if user already exists
    if UserRegister.query.filter_by(email=email, password = hashed_password).first():
        token = create_access_token(identity=email)
        return jsonify({"message": "Welcome to Your favourite restaurant lists", "token":token}), 200

    return jsonify({"message": "Please provide proper credentials."}), 400

@api.route("/forget_password", methods=["POST"])
def forgetpassword():
    data = request.json
    email = data.get("email")
    if not email:
        return jsonify({"message": "email is required"}), 400    
    user = UserRegister.query.filter_by(
        email = email
    )
    if not user:
        return jsonify({"message": "Email does not exist"}), 400
    # jwt_access_token
    token = encrypt_string(json.dumps({
        "email": email,
        "exp":15,
        "current_time": datetime.datetime.now().isoformat()
    }), os.getenv('FLASK_APP_KEY'))    
    email_value = f"Here is the password recovery link!\n{os.getenv('FRONTEND_URL')}/change_password/{token}"
    send_email(email, email_value)
    return jsonify({"message": "Recovery password has been sent"}), 200

@api.route("/change_password", methods=["PUT"])
# @jwt_required()
def changepassword():
    data = request.get_json()
    password = data.get("password")
    secrete = data.get("secrete")
    json_secrete = json.loads(decrypt_string(
        secrete,
        os.getenv('FLASK_APP_KEY')
    ))
    email = json_secrete['email']
    
    if not password:
        return jsonify({"message": "Please provide a new password."}), 400
    
    user = UserRegister.query.filter_by(email=email).first()  # Use .first() to get the user object
    
    if not user:
        return jsonify({"message": "Email does not exist"}), 400
    
    # Update user's password
    user.password = hashlib.sha256(password.encode()).hexdigest()
    db.session.commit()
    
    # Send confirmation email
    email_value = "Your password has been changed"
    send_email(email, email_value)
    
    return jsonify({"message": "Password is successfully changed"}), 200

