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
        # start of NYC restaurants, still need: hours, website link, phone number, price range
            {
                "restaurant_name": "Seasoned Vegan Real Quick",
                "restaurant_phone": "(212) 222-0092",
                "address": "128 2nd Ave, New York, NY",
                "address_link": "https://maps.app.goo.gl/WKmxAjvS3RqEaUv78",
                "rating": "4.4",
                "price_range" : "$$",
                "url" : "https://www.seasonedvegan.com/",
                "user_register_idr" : "",
                "city": "NYC",
                "hours": "Mon - Thurs: 11am - 12am, Fri & Sat: 11am - 3am, Sun: 11am - 12am"
            },
            {
                "restaurant_name": "Avant Garden",
                "restaurant_phone": "(833) 328-4588",
                "address": "95 Avenue A, New York, NY",
                "address_link": "https://maps.app.goo.gl/LhpYNWKNe4fdiiKC7",
                "rating": "4.6",
                "price_range" : "$$$$",
                "url" : "https://www.avantgardennyc.com/",
                "user_register_idr" : "",
                "city": "NYC",
                "hours": "Mon - Sun: 5pm - 11pm"
            },
            {
                "restaurant_name": "Ladybird",
                "restaurant_phone": "(833) 328-4588, ext. 702",
                "address": "111 E 7th St, New York, NY",
                "address_link": "https://maps.app.goo.gl/Kwbvh5ekBz8Hij8U8",
                "rating": "4.5",
                "price_range" : "$$$",
                "url" : "https://www.ladybirdny.com/",
                "user_register_idr" : "",
                "city": "NYC",
                "hours": "Mon - Thurs: 5pm - 10pm, Fri: 5pm - 11pm, Sat: 11am - 3:30pm & 5pm - 11pm, Sun: 11am - 3:30pm & 5 - 10pm"
            },
            {
                "restaurant_name": "Willow Vegan Bistro",
                "restaurant_phone": "(212) 929-2889",
                "address": "199 8th Ave, New York, NY",
                "address_link": "https://maps.app.goo.gl/4SEfDXUo6CfQX2Ag8",
                "rating": "4.6",
                "price_range" : "$$$",
                "url" : "https://willownewyork.com/",
                "user_register_idr" : "",
                "city": "NYC",
                "hours": "Mon - Thurs: 4:30pm - 10:30pm, Fri: 4:30 - 11:30pm, Sat: 11:30am - 11:30pm, Sun: 11:30am - 10:30pm"
            },
            {
                "restaurant_name": "Planta Queen",
                "restaurant_phone": "(917) 675-7700",
                "address": "15 W 27th St, New York, NY",
                "address_link": "https://maps.app.goo.gl/T2aoA1DxPUT7Smv96",
                "rating": "4.6",
                "price_range" : "$$$",
                "url" : "https://www.plantarestaurants.com/location/planta-queen-new-york-city/",
                "user_register_idr" : "",
                "city": "NYC",
                "hours": "Mon - Thurs: 11:30am - 10pm, Fri: 11:30am - 11pm, Sat: 11am - 11pm, Sun: 11am - 10pm"
            },
            {
                "restaurant_name": "Le Botaniste",
                "restaurant_phone": "(646) 452-2555",
                "address": "833 Lexington Ave, New York, NY",
                "address_link": "https://maps.app.goo.gl/nMkGq4jLBvLTY8P68",
                "rating": "4.7",
                "price_range" : "$$",
                "url" : "https://lebotaniste.us/locations/",
                "user_register_idr" : "",
                "city": "NYC",
                "hours": "Mon - Sun: 11am - 9pm"
            },
            {
                "restaurant_name": "Dirt Candy",
                "restaurant_phone": "(212) 228-7732",
                "address": "86 Allen St, New York, NY",
                "address_link": "https://maps.app.goo.gl/2b39aTccGuDSFfV89",
                "rating": "4.6",
                "price_range" : "$$",
                "url" : "https://www.dirtcandynyc.com/hours-location",
                "user_register_idr" : "",
                "city": "NYC",
                "hours": "Tues - Sat: 5:30pm - 10:30pm"
            },
            {
                "restaurant_name": "Vegan On The Fly",
                "restaurant_phone": "(917) 265-8242",
                "address": "24 W 45th St, New York, NY",
                "address_link": "https://maps.app.goo.gl/pkwa1RTDtUmGmuDu5",
                "rating": "4.8",
                "price_range" : "$$",
                "url" : "https://www.veganontf.com/",
                "user_register_idr" : "",
                "city": "NYC",
                "hours": "Mon - Sat: 11am - 9pm, Sun: 11am - 7pm"
            },
            {
                "restaurant_name": "Blosson on Columbus",
                "restaurant_phone": "(212) 875-2600",
                "address": "507 Columbus Ave, New York, NY",
                "address_link": "https://maps.app.goo.gl/DuTkqW3CP2D8fXgA9",
                "rating": "4.4",
                "price_range" : "$$",
                "url" : "https://www.blossomnyc.com/contact",
                "user_register_idr" : "",
                "city": "NYC",
                "hours": "Mon - Fri: 11:30am - 10pm, Sat & Sun: 11am - 10pm"
            },
        # start of LA restaurants
            {
                "restaurant_name": "Vinh Loi Tofu",
                "restaurant_phone": "(562) 403-3377",
                "address": "11818 South St #101, Cerritos, CA 90703",
                "address_link": "https://maps.app.goo.gl/qxBcyaYzirHk6kZn9",
                "rating": "4.8",
                "price_range" : "$$",
                "url" : "https://www.VinhLoiTofu.com/",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Mon - Sun: 11am - 8pm"
            },
            {
                "restaurant_name": "El Cocinero Restaurant",
                "restaurant_phone": "(818) 386-8419",
                "address": "6265 Sepulveda Blvd UNIT 12, Van Nuys, CA 91411",
                "address_link": "https://maps.app.goo.gl/YSJxstkeeU8rQN589",
                "rating": "4.7",
                "price_range" : "$$",
                "url" : "https://www.elcocinerorestaurant.com/",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Tues - Sun: 1pm - 8pm"
            },
            {
                "restaurant_name": "Toluca Bakery",
                "restaurant_phone": "(818) 691-3169",
                "address": "11365 Riverside Dr, Toluca Lake, California 91602",
                "address_link": "https://maps.app.goo.gl/yezPzXhuj3SiuJbr6",
                "rating": "4.8",
                "price_range" : "$",
                "url" : "https://www.facebook.com/tolucabakery",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Mon - Sat: 8am - 7:30pm, Sun: 9am - 6pm"
            },
            {
                "restaurant_name": "Crossroads Kitchen",
                "restaurant_phone": "(323) 782-9245",
                "address": "8284 Melrose Ave, Los Angeles, CA 90046",
                "address_link": "https://maps.app.goo.gl/zhKyqv4hVDWzo1Pq6",
                "rating": "4.6",
                "price_range" : "$$$",
                "url" : "https://www.crossroadskitchen.com/",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Mon - Fri: 11am - 3pm & 5pm - 11pm, Sat: 10am - 3pm, 5pm - 11pm, Sun: 10am - 3pm, 5pm - 10pm"
            },
            {
                "restaurant_name": "Nic's On Beverly (*May be closed)",
                "restaurant_phone": "(323) 746-5130",
                "address": "8265 Beverly Blvd, Los Angeles, CA 90048",
                "address_link": "https://maps.app.goo.gl/gWnYqqwB9LZnGSK27",
                "rating": "4.6",
                "price_range" : "$$$",
                "url" : "https://www.nicsonbeverly.com/",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Mon - Wed: 12pm - 3pm & 5pm - 9pm, Thurs: 12pm - 3pm & 5pm - 10pm, Fri: 12pm - 10pm, Sat: 10am - 3pm & 5pm - 10pm, Sun: 10am - 3pm & 5pm - 8:30pm"
            },
            {
                "restaurant_name": "Rahel Ethiopian Vegan Cuisine",
                "restaurant_phone": "(323) 937-8401",
                "address": "1047 S Fairfax Ave, Los Angeles, CA 90019",
                "address_link": "https://maps.app.goo.gl/zwBUaZoiqJnVrjgx9",
                "rating": "4.7",
                "price_range" : "$$",
                "url" : "https://rahelvegancuisine.com/",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Tues - Thurs: 4pm - 10pm, Fri - Sun: 11am - 10pm"
            },
            {
                "restaurant_name": "Stuff I Eat",
                "restaurant_phone": "(310) 671-0115",
                "address": "114 N Market St, Inglewood, CA 90301",
                "address_link": "https://maps.app.goo.gl/1E2CZYK5Z3s3q3sbA",
                "rating": "4.7",
                "price_range" : "$$",
                "url" : "https://www.stuffieat.com/",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Wed - Sun: 12pm - 6pm"
            },
            {
                "restaurant_name": "Vegan AF Food Truck",
                "restaurant_phone": "(323) 347-4970",
                "address": "Check Social Media for the Latest Location!",
                "address_link": "",
                "rating": "",
                "price_range" : "$$",
                "url" : "https://www.facebook.com/profile.php?id=100083618472256",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Thurs - Sun: (Check Social Media for location & hours)"
            },
            {
                "restaurant_name": "Bulan Thai Vegetarian Kitchen",
                "restaurant_phone": "(323) 913-1488",
                "address": "4114 Santa Monica Blvd, Los Angeles, CA 90029",
                "address_link": "https://maps.app.goo.gl/mKgr16WSfKSeVGyD6",
                "rating": "4.7",
                "price_range" : "$$",
                "url" : "https://www.bulanthaikitchen.com/",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Mon - Sun: 11:30am - 9pm"
            },
            {
                "restaurant_name": "De Buena Planta Silver Lake",
                "restaurant_phone": "(323) 426-9023",
                "address": "2815 W Sunset Blvd, Los Angeles, CA 90026",
                "address_link": "https://maps.app.goo.gl/TK6zSwasHX6ZFBXP7",
                "rating": "4.3",
                "price_range" : "$$",
                "url" : "https://www.debuenaplanta.us/",
                "user_register_idr" : "",
                "city": "LA",
                "hours": "Wed - Thurs: 4pm - 10pm, Fri - Sat: 4pm - 12am"
            },
        # start of Houston restaurants
            {
                "restaurant_name": "Green Seed Vegan",
                "restaurant_phone": "(832) 582-5566",
                "address": "4320 Almeda Rd, Houston, TX 77004",
                "address_link": "https://www.google.com/maps/search/?api=1&query=Green+Seed+Vegan+Houston+TX",
                "rating": "4.0",
                "price range": "$$",
                "url" : "https://www.greenseedvegan.com/",
                "user_register_idr" : "",
                "city": "Houston",
                "hours": "Mon - Sun: 11am - 8pm"
            },
            {
                "restaurant_name": "Veegos Vegan Eatery",
                "restaurant_phone": "(713) 489-5323",
                "address": "2435 Times Blvd, Houston, TX 77005",
                "address_link": "https://www.google.com/maps/search/?api=1&query=Veegos+Vegan+Eatery+Houston+TX",
                "rating": "4.5",
                "price range": "$$",
                "url" : "https://www.veegoshouston.com/",
                "user_register_idr" : "",
                "city": "Houston",
                "hours": "Mon - Sat: 11am - 10p, Sat: 11am - 7pm"
            },
            {
                "restaurant_name": "Baby Yega Cafe",
                "restaurant_phone": "(713) 522-0042",
                "address": "2607 Grant St, Houston, TX 77006",
                "address_link": "https://www.google.com/maps/search/?api=1&query=Baba+Yega+Cafe+Houston+TX",
                "rating": "4.3",
                "price range": "$$",
                "url" : "http://babayega.com/",
                "user_register_idr" : "",
                "city": "Houston",
                "hours": "Mon - Sun: 11am - 8pm"
            },
            {
                "restaurant_name": "Cafe TH (*May be closed)",
                "restaurant_phone": "(713) 225-4766",
                "address": "2108 Pease St, Houston, TX 77003",
                "address_link": "https://www.google.com/maps/search/?api=1&query=Cafe+TH+Houston+TX",
                "rating": "4.2",
                "price range": "$",
                "url" : "http://www.cafeth.com/",
                "user_register_idr" : "",
                "city": "Houston",
                "hours": "Mon - Fri: 10am - 3pm"
            },
            {
                "restaurant_name": "Verdine (*Needs Updated Pictures)",
                "restaurant_phone": "(713) 876-4768",
                "address": "2518 Bissonnet St, Houston, TX 77005",
                "address_link": "https://maps.app.goo.gl/2JBjAphNc1maiEE7A",
                "rating": "3.8",
                "price range": "$$",
                "url" : "https://www.facebook.com/VerdineHouston",
                "user_register_idr" : "",
                "city": "Houston",
                "hours": "Tues - Sat: 11am- 9pm, Sun: 11am- 3pm"
            },
            {
                "restaurant_name": "Pepper Tree Veggie Cuisine (*Closed)",
                "restaurant_phone": "(713) 621-9488",
                "address": "3821 Richmond Ave, Houston, TX 77027",
                "address_link": "https://www.google.com/maps/search/?api=1&query=Pepper+Tree+Veggie+Cuisine+Houston+TX",
                "rating": "4.3",
                "price range": "$$",
                "url" : "https://www.facebook.com/ilovepeppertree/",
                "user_register_idr" : "",
                "city": "Houston",
                "hours": ""
            },
            {
                "restaurant_name": "Field of Greens",
                "restaurant_phone": "(713) 533-0029",
                "address": "2320 W Alabama St, Houston, TX 77098",
                "address_link": "https://www.google.com/maps/search/?api=1&query=Field+of+Greens+Houston+TX",
                "rating": "3.8",
                "price range": "$$",
                "url" : "https://www.facebook.com/FieldofGreensVegan/",
                "user_register_idr" : "",
                "city": "Houston",
                "hours": "Mon - Thurs: 11am - 9pm, Fri & Sat: 11am- 9:30pm, Sun: 12pm - 5pm"
            },
            {
                "restaurant_name": "Soul Food Vegan",
                "restaurant_phone": "(832) 821-2856",
                "address": "2901 Emancipation Ave, Houston, TX 77004",
                "address_link": "https://www.google.com/maps/search/?api=1&query=Soul+Food+Vegan+Houston+TX",
                "rating": "3.5",
                "price range": "$$",
                "url" : "https://www.instagram.com/soul_food_vegan/",
                "user_register_idr" : "",
                "city": "Houston",
                "hours": "Mon - Sat: 12pm - 8:30pm"
            },
            {
                "restaurant_name": "Pat Greer's Kitchen",
                "restaurant_phone": "(713) 807-0101",
                "address": "412 W Clay St, Houston, TX 77019",
                "address_link": "https://www.google.com/maps/search/?api=1&query=Pat+Greer%27s+Kitchen+Houston+TX",
                "rating": "4.6",
                "price range": "$$",
                "url" : "https://www.patgreerskitchen.com/",
                "user_register_idr" : "",
                "city": "Houston",
                "hours": "Tues: 10am - 3pm"
            }
        ]
        for restaurant in restaurant_list:
            new_restaurant = Restaurant(
                restaurant_name = restaurant['restaurant_name'],
                restaurant_phone = restaurant['restaurant_phone'],
                address = restaurant['address'],
                address_link = restaurant['address_link'],
                rating = restaurant['rating'],
                price_range = restaurant['price_range'],
                url = restaurant['url'],
                user_register_idr = restaurant['user_register_idr'],
                city = restaurant['city'],
                hours = restaurant['hours']
            )
            db.session.add(new_restaurant)
            db.session.commit()