import click
from api.models import db, Restaurant

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        pass

@app.cli.command("populate-restaurant-table")
    def generate_restaurant_list():
        restaurant_list = [
            {
                "restaurant_name": "sleep4geeks",
                "restaurant_phone": "https://i.imgur.com/MT1HV5j.png",
                "address_link": "sleep4geeks",
                "rating": "https://i.imgur.com/MT1HV5j.png",
                "url" : "",
                "user_register_idr" : "",
                "city": ""
            },
            {
                "restaurant_name": "sleep4geeks",
                "restaurant_phone": "https://i.imgur.com/MT1HV5j.png",
                "address_link": "sleep4geeks",
                "rating": "https://i.imgur.com/MT1HV5j.png",
                "url" : "",
                "user_register_idr" : "",
                "city": ""
            },
        ]
        for restaurant in restaurant_list:
            new_restaurant = Restaurant(
                restaurant_name = restaurant['restaurant_name'],
                restaurant_phone = restaurant['restaurant_phone'],
                address_link = restaurant['address_link'],
                rating = restaurant['rating'],
                url = restaurant['url'],
                restaurant_phone = restaurant['restaurant_phone'],
                user_register_idr = restaurant['user_register_idr'],
                city = restaurant['city'],
            )
            db.session.add(new_restaurant)
            db.session.commit()