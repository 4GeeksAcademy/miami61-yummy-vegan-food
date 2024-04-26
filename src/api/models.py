import json
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserRegister(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name =db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    restaurant = db.relationship("Favorites")

    def get_favorites(self):
            favorites = Favorites.query.filter_by(user_register_id=self.id)
            favorites = [favorite.serialize() for favorite in favorites]
            return favorites

    def __repr__(self):
        return f'<UserRegister {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "email": self.email,
            "user": self.user,
            "favorites": self.get_favorites(),
        }

class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    restaurant_name = db.Column(db.String, nullable=False)
    call = db.Column(db.String, nullable=True)
    restaurant_phone = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    address_link = db.Column(db.String, nullable=True)
    rating = db.Column(db.String, nullable=False)
    food_type = db.Column(db.String, nullable=True)
    price_range = db.Column(db.String, nullable=True)
    url = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=True)
    openingHours = db.Column(db.String, nullable=True)
    img_1_url = db.Column(db.String, nullable=True)
    img_2_url = db.Column(db.String, nullable=True)
    img_3_url = db.Column(db.String, nullable=True)

    def __repr__(self):
        return f'<Restaurant {self.id}>'

    def serialize(self):
        opening_hours = json.loads(self.openingHours) if self.openingHours else []

        return {
            "id": self.id,
            "restaurant_name": self.restaurant_name,
            "call": self.call,
            "restaurant_phone": self.restaurant_phone,
            "address": self.address,
            "address_link": self.address_link,
            "rating": self.rating,
            "food_type": self.food_type,
            "price_range": self.price_range,
            "url": self.url,
            "city": self.city,
            "openingHours": opening_hours,
            "img_1_url": self.img_1_url,
            "img_2_url": self.img_2_url,
            "img_3_url": self.img_3_url
        }
    
class Favorites(db.Model):
    __tablename__ = "favorites"
    id = db.Column(db.Integer, primary_key=True, unique=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurant.id"), nullable=False)
    user_register_id = db.Column(db.Integer, db.ForeignKey("user_register.id"), nullable=False)
    restaurant = db.relationship('Restaurant', uselist = False)

    def __repr__(self):
        return f'<Favorite {self.restaurant_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "restaurant_id": self.restaurant_id,
            "user_register_id": self.user_register_id,
            "restaurant": self.restaurant.serialize()
        }