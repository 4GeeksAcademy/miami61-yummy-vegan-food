import React, { useState } from "react";
import { ApifyClient } from 'apify-client';

import SnakesGame from "../../SnakesGame/SnakesGame.tsx";


export const NearYou = () => {
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
			"maxCrawledPlacesPerSearch": 3
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
			});
			setRestaurants(items);
		} catch (error) {
			setError('failed the fetch of vegan restaurants', error);
		} finally {
			setIsLoading(false);
		}
	};

	function checkValue(value) {
		if (value === "₹₹" || value === "" || (value) === null) {
			return "Not Available";
		} else {
			return value;
		}
	}

	// useEffect(() => {
	// 	if (isLoading) {
	// 		startSnakeGame()
	// 	}
	// 	return () => {
	// 		stopSnakeGame();
	// 	}
	// }, [isLoading])  

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
				{restaurants.map((restaurant, index) => (
					<li key={index} className="mt-2">
						<span className="fw-bold fs-5 text-decoration-underline">{restaurant.title}</span>
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
									<i class="fa-solid fa-book-open"></i> {'Menu'}
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
				))}
			</ul>
			{isLoading && <SnakesGame />}
			<SnakesGame />
		</div>
	);
};
