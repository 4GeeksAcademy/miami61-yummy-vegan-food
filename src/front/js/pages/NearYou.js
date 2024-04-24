import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { ApifyClient } from 'apify-client';

import SnakesGame from "../../SnakesGame/SnakesGame.tsx";


export const NearYou = () => {
	const { store, actions } = useContext(Context);

	const client = new ApifyClient({
		token: process.env.APIFY_TOKEN
	});

	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [location, setLocation] = useState('');

	const fetchRestaurants = async () => {
		const input = {
			"countryCode": "us",
			"city": location,
			"maxCrawledPlacesPerSearch": 2
		};

		setIsLoading(true);
		setError('');
		try {
			const run = await client.actor("hh5GL7s6JL3wgmn1G").call(input);

			console.log('Results from dataset');
			const { items } = await client.dataset(run.defaultDatasetId).listItems();
			items.forEach(restaurant => {
				Object.keys(restaurant).forEach(key => {
					restaurant[key] = checkValue(restaurant[key]);
				});
				restaurant.isFavorite = false;
			});
			setRestaurants(items);
		} catch (error) {
			setError('failed the fetch of vegan restaurants', error);
		} finally {
			setIsLoading(false);
		}
	};

	function checkValue(value) {
		if (value === "" || value === null) {
			return "Not Available";
		} else if (value !== "$" || value !== "$$" || value !== "$$$" || value !== "$$$$") {
			if (value === "₹" || value === "£") {
				return "$";
			} else if (value === "₹₹" || value === "££") {
				return "$$";
			} else if (value === "₹₹₹" || value === "£££") {
				return "$$$";
			} else if (value === "₹₹₹₹" || value === "££££") {
				return "$$$$";
			}
		} else {
			return value;
		}
	}


	// const addToFavorites = (restaurantIndex) => {
	// 	const updatedRestaurants = [...restaurants];
	// 	updatedRestaurants[restaurantIndex].isFavorite = !updatedRestaurants[restaurantIndex].isFavorite;
	// 	setRestaurants(updatedRestaurants);

	// 	const restaurant = updatedRestaurants[restaurantIndex];
	// 	if (restaurant.isFavorite) {
	// 		actions.getFavorites({ restaurant });

	// 	} else {
	// 		const indexToDelete = store.favorites.findIndex(fav => fav.name === restaurant.name && fav.city === restaurant.city);
	// 		if (indexToDelete !== -1) {
	// 			actions.deleteFavorites(indexToDelete);
	// 		}
	// 	}
	// };

	const addToFavorites = (restaurant) => {
		const body = {
			id: restaurant.city + "'s " + restaurant.title,
			img_1_url: "",
			img_2_url: "",
			img_3_url: "",
			city: restaurant.city,
			restaurant_name: restaurant.title,
			url: restaurant.website,
			call: restaurant.phoneUnformatted,
			restaurant_phone: restaurant.phone,
			rating: restaurant.totalScore,
			price_range: restaurant.price,
			food_type: "Vegan",
			openingHours: restaurant.openingHours,
			address_link: restaurant.url,
			address: restaurant.address
		};
		const isFavorite = store.Favorites?.some(fav => fav.id === restaurant.city + "'s " + restaurant.title);
		if (isFavorite) {
			const indexToDelete = store.Favorites.findIndex(fav => fav.id === restaurant.city + "'s " + restaurant.title);
			if (indexToDelete !== -1) {
				actions.deleteFavorites(indexToDelete);
				console.log("Deleted from Favorites:", restaurant.title)
			}
		} else {
			actions.addFavorite(body);
		}
	};


	return (
		<div className="container nearMeDiv">
			<div>
				<h1 className="mt-4">Find Vegan Restaurants Near You</h1>
			</div>
			<div className="locationDiv mt-2">
				<input
					type="text"
					value={location}
					onChange={(event) => setLocation(event.target.value)}
					onKeyDown={(event) => {
						if (event.key === 'Enter') { fetchRestaurants(); }
					}}
					placeholder="Enter Your City" />
				<button onClick={fetchRestaurants} className="btn btn-secondary ms-1">Search</button>
				{isLoading && <div>loading... time for a bathroom/water break!</div>}
				{error && <div>{error}</div>}
			</div>

			<ul className="mt-2">
				{restaurants.filter(restaurant => {
					if ("title" in restaurant) return true;
					return false;
				}).map((restaurant, index) => {
					const isFavorite = store.Favorites?.some(fav => fav.id === restaurant.city + "'s " + restaurant.title);
					return (
						<li key={index} className="mt-2">
							<div className="d-flex justify-content-between">
								<span className="fw-bold fs-5 text-decoration-underline">{restaurant.title}</span>
								<button type="button" className="btn btn-outline-warning btn-heart" onClick={() => addToFavorites(restaurant)}>
									<i className="fa-solid fa-heart heartBtn" style={{ color: isFavorite ? '#cc0020' : '#ffc107' }}></i>
								</button>
							</div>
							<ul>
								<li>
									<a href={restaurant.website} target="_blank" rel="noopener noreferrer">
										<i className="fa-solid fa-globe"></i> {restaurant.website}
									</a>
								</li>
								<li>
									<a href={`tel:${restaurant.phone}`} rel="noopener noreferrer">
										<i className="fa-solid fa-phone"></i> {restaurant.phone}
									</a>
								</li>
								<li>
									<a href={restaurant.menu} target="_blank" rel="noopener noreferrer">
										<i className="fa-solid fa-book-open"></i> {'Menu'}
									</a>
								</li>
								<li>
									<i className="fa-solid fa-face-smile"></i>
									<span>{': '}</span>
									{restaurant.totalScore}
								</li>
								<li><
									i className="fa-solid fa-hand-holding-dollar"></i>
									<span>{': '}</span>
									{restaurant.price}
								</li>
								{restaurant.openingHours && (
									<li>
										<span className="text-decoration-underline">Opening Hours:</span>
										<ul>
											{restaurant.openingHours.map((hour, index) => (
												<li key={index}>{hour.day}: {hour.hours}</li>
											))}
										</ul>
									</li>
								)}
								<li>
									<a href={restaurant.url} target="_blank" rel="noopener noreferrer">
										<i className="fa-solid fa-location-dot"></i> {restaurant.address}
									</a>
								</li>
							</ul>
						</li>
					);
				})}
			</ul>
			{isLoading && <SnakesGame />}
		</div>
	);
};
