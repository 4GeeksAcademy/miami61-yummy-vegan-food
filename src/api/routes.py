"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, UserRegister, Restaurant
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

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



