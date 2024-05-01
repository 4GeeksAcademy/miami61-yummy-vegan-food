import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { ApifyClient } from 'apify-client';
import { ReactModal } from "../component/ReactModal.js";
import SnakesGame from "../../SnakesGame/SnakesGame.tsx";


export const NearYou = () => {
	const { store, actions } = useContext(Context);
	const [showModal, setShowModal] = useState(false);
	const [showSnakesGame, setShowSnakesGame] = useState(false);
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [location, setLocation] = useState('');
	const [abortController, setAbortController] = useState(null);

	const client = new ApifyClient({
		token: process.env.APIFY_TOKEN
	});

	useEffect(() => {
		// Cleanup function to abort fetch request when component unmounts
		return () => {
			if (abortController) {
				abortController.abort();
			}
		};
	}, []);

	const fetchRestaurants = async () => {
		if (abortController) {
			abortController.abort(); // Cancel the previous fetch request if it exists
			console.log(abortController);
		}
		const newAbortController = new AbortController();
		setAbortController(newAbortController);

		const input = {
			"countryCode": "us",
			"city": location,
			"maxCrawledPlacesPerSearch": 2
		};

		setIsLoading(true);
		setError('');
		try {
			const run = await client.actor("hh5GL7s6JL3wgmn1G").call(input);
			const { items } = await client.dataset(run.defaultDatasetId).listItems();

			items.forEach(restaurant => {
				Object.keys(restaurant).forEach(key => {
					restaurant[key] = checkValue(restaurant[key]);
				});
				restaurant.isFavorite = false;
			});

			setRestaurants(items);
			console.log("Restaurant Details fetched from APIFY-API: ", items);
		} catch (error) {
			if (error.name !== 'AbortError') {
				setError('failed the fetch of vegan restaurants', error);
			}
		} finally {
			setIsLoading(false);
		}
	};

	function checkValue(value) {
		if (value === "" || value === null) {
			return "Not Available";
		} else if (value === "₹" || value === "£") {
			return "$";
		} else if (value === "₹₹" || value === "££") {
			return "$$";
		} else if (value === "₹₹₹" || value === "£££") {
			return "$$$";
		} else if (value === "₹₹₹₹" || value === "££££") {
			return "$$$$";
		} else {
			return value;
		}
	}

	const addToFavorites = (restaurant) => {

		const body = {
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

		if (!store.token) {
			console.log("Must be logged in to add restaurants to favorites");
			// alert("You must be logged in to add restaurants to your favorites.");
			setShowModal(true);
		} else {
			const isFavorite = store.Favorites?.some(fav => fav.restaurant.restaurant_name === restaurant.title);
			if (isFavorite) {
				const fav = store.Favorites.find(fav => fav.restaurant.restaurant_name === restaurant.title)
				actions.deleteFavorites(fav.id);
				console.log("Deleted from Favorites:", restaurant.title);
			} else {
				actions.addFavorite(body);
			}
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
				<button onClick={fetchRestaurants} className="btn btn-secondary ms-2">Search</button>
				<button className="btn btn-secondary ms-1" onClick={() => setShowSnakesGame(prevState => !prevState)}>
					{showSnakesGame ? "Stop Playing" : "Play Snake Game"}
				</button>
			</div>

			{error && console.log(error)}
			<div>
				{isLoading && <div className="mt-2">Loading... Time for a bathroom/water break!</div>}
				{error && <div className="mt-2">Error: {error}, try refreshing the page</div>}
			</div>
			{showSnakesGame && <div className="mt-3 mb-2"><SnakesGame /></div>}

			<ul className="mt-2 mb-5">
				{restaurants.filter(restaurant => {
					if ("title" in restaurant) return true;
					return false;
				}).map((restaurant, index) => {
					const isFavorite = store.Favorites?.some(fav => fav.restaurant.restaurant_name === restaurant.title);

					return (
						<li key={index} className="mt-2, mb-3">
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
				{showModal && (
					<ReactModal
						info="You must be logged in to save restaurants into your favorites. Please sign up or sign in."
						onClose={() => setShowModal(false)}
						action1="Sign Up"
						action2="Log In"
					/>
				)}
			</ul>
			{/* {isLoading && <SnakesGame />} */}
		</div>
	);
};
