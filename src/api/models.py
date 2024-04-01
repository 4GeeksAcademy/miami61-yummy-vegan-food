from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserRegister(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Username =db.Column(db.String(120), nullable=False)
    Email = db.Column(db.String(120), unique=True, nullable=False)
    Password = db.Column(db.String(80), nullable=False)
    User = db.relationship("User")

    def __repr__(self):
        return f'<UserRegister {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "Username": self.Username,
            "Email": self.Email,
            "User": self.User,
        }
    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    UserRegister_id = db.Column(db.Integer, db.ForeignKey("UserRegister.id"), nullable=False)

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "UserRegister_id": self.UserRegister_id,
        }
    
class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Restaurant_Name = db.Column(db.String, nullable=False)
    Restaurant_Phone = db.Column(db.Integer, nullable=False)
    Address_Link = db.Column(db.String, nullable=False)
    Rating = db.Column(db.Integer, nullable=False)
    Url = db.Column(db.String, nullable=False)
    Favourite_id = db.Column(db.Integer, db.ForeignKey("Favourite.id"), nullable=False)
    User_id = db.Column(db.Integer, db.ForeignKey("User.id"), nullable=False)

    def __repr__(self):
        return f'<Restaurant {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "Restaurant_Name": self.Restaurant_Name,
            "Restaurant_Phone": self.Restaurant_Phone,
            "Address_Link": self.Address_Link,
            "Rating": self.Rating,
            "Url": self.Url,
            "Favourite_id": self.Favourite_id,
            "User_id": self.User_id,
        }
    
class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_register_id = db.Column(db.Integer, db.ForeignKey("user_register.id"), nullable=False)
    User_id = db.Column(db.Integer, db.ForeignKey("User.id"), nullable=False)

    def __repr__(self):
        return f'<Favorite {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_estaurant_id": self.user_register_id,
            "User_id": self.User_id,
        }