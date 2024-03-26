"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

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