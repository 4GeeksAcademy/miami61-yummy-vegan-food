"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, UserRegister, Restaurant
from api.utils import generate_sitemap, APIException
from flask_cors import CORS


import hashlib
import random
from flask_jwt_extended import create_access_token


from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

import requests
from dotenv import load_dotenv
import os


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


@api.route('/restaurant', methods=['POST'])
@jwt_required()
def create_restaurant():
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

# User creation endpoint
# @app.route('/create_user', methods=['POST'])
# def create_user():
#     data = request.json
#     user_register_id = data.get("user_register_id")
#     username = data.get("username")

#     # Create new user
#     user = User(user_register_id=user_register_id, user_name=username)
#     db.session.add(user)
#     db.session.commit()

    # return jsonify({"message": "User created successfully"}), 201

# Main execution block

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
