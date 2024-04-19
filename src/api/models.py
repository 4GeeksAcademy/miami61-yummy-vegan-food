from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserRegister(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name =db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    restaurant = db.relationship("Restaurant")

    def get_favorites(self):
            favorites = Favorites.query.filter_by(uid=self.id)
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
        #changes from upper case to lower case for constistancy. the self. values must align with values in lines 7-10
        #changes the values in "" for constistancy and user usage in routes.py
    
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_register_id = db.Column(db.Integer, db.ForeignKey("user_register.id"), nullable=False)
#     def __repr__(self):
#         return f'<User {self.id}>'
#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_register_id": self.UserRegister_id,
#         }
    
class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    restaurant_name = db.Column(db.String, nullable=False)
    restaurant_phone = db.Column(db.Integer, nullable=False)
    address_link = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    url = db.Column(db.String, nullable=False)
    user_register_id = db.Column(db.Integer, db.ForeignKey("user_register.id"), nullable=False)
    city = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'<Restaurant {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "restaurant_name": self.restaurant_name,
            "restaurant_phone": self.restaurant_phone,
            "address_link": self.address_link,
            "rating": self.rating,
            "url": self.url,
            "userregister_id": self.userregister_id,
            "city": self.city
        }
    
class Favorites(db.Model):
    __tablename__ = "Favorites"
    id = db.Column(db.Integer, primary_key=True, unique=True)
    uid = db.Column(db.Integer, nullable=False)
    restaurant_name = db.Column(db.String(2000), nullable=False)

    def __repr__(self):
        return f'<Favorite {self.restaurant_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "uid": self.uid,
            "restaurant_name": self.restaurant_name
        }