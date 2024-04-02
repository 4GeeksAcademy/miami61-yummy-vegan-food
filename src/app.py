import os
from flask import Flask, request, jsonify, send_from_directory
from flask_migrate import Migrate
from api.utils import APIException, generate_sitemap
from api.models import db, UserRegister  # Import your SQLAlchemy models
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
import hashlib
import random
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


# Create Flask app instance
app = Flask(__name__)
app.url_map.strict_slashes = False

# Configure database
db_url = os.getenv("DATABASE_URL", "sqlite:////tmp/test.db")
app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
Migrate(app, db, compare_type=True)
db.init_app(app)

jwt = JWTManager(app)





# Setup admin interface and commands
setup_admin(app)
setup_commands(app)

# Register API blueprint
app.register_blueprint(api, url_prefix='/api')

# Error handling for APIException
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# Generate sitemap
@app.route('/')
def sitemap():
    return generate_sitemap(app)

# Serve other static files
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    return send_from_directory(static_file_dir, path)

# User registration endpoint
@app.route('/register', methods=['POST'])
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

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    # Check if username, email, and password are provided
    if not email or not password:
        return jsonify({"message": "Username, email, and password are required"}), 400
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    # Check if user already exists
    if UserRegister.query.filter_by(email=email, password = hashed_password).first():
        token = create_access_token(identity=email)
        return jsonify({"message": "Welcome to Your favourite restaurant lists", "token":token}), 200

    return jsonify({"message": "Please provide proper credentials."}), 400

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)

