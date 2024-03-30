import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApifyClient } from 'apify-client';
import { Context } from "../store/appContext";

import "../../styles/nearYou.css"



export const NearYou = () => {
	const client = new ApifyClient({
		token: process.env.APIFY_TOKEN
	});
	
	const [ restaurants, setRestaurants ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState('');
	const [ location, setLocation ] = useState('');

	const fetchRestaurants = async () => {
		const input = {
			"countryCode": "us",
			"city": location,
			"maxCrawledPlacesPerSearch": 10
		};

		setIsLoading(true);
		setError('');
		try {
			const run = await client.actor("hh5GL7s6JL3wgmn1G").call(input);

			// Fetch and print Actor results from the run's dataset (if any)
			console.log('Results from dataset');
			const { items } = await client.dataset(run.defaultDatasetId).listItems();
			setRestaurants(items);
		} catch (error) {
			setError('failed the fetch of vegan restaurants', error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchRestaurants();
	}, []);

	return (
		<div className="container nearMeDiv">
			<div>
				<h1>Find Vegan Restaurants Near You</h1>
			</div>
			<div className="locationDiv">
				<input 
					type="text" 
					value={location} 
					onChange={(event) => setLocation(event.target.value)}
					onKeyDown={(event) => {
						if (event.key === 'Enter') {fetchRestaurants();}
					}}
					placeholder="Enter Your Location" />
				<button onClick={fetchRestaurants} className="btn btn-secondary ms-1">Search</button>
				{isLoading && <div>loading... time for a bathroom/water break!</div>}
				{error && <div>{error}</div>}
			</div>
			<ul>
				{restaurants.map((restaurant, index) => (
					<li key={index}>{restaurant.title}
						<ul>
							<li>{restaurant.totalScore}{' / 5'}</li>
							<li>
								<a href={restaurant.website} target="_blank" rel="noopener noreferrer">
									{restaurant.website}
								</a>
							</li>
							<li>
								<a href={restaurant.menu} target="_blank" rel="noopener noreferrer">
									Menu
								</a>
							</li>
							<li>{restaurant.phone}</li>
							<li>
								<a href={restaurant.url} target="_blank" rel="noopener noreferrer">
									{restaurant.address}
								</a>
							</li>
							{/* {restaurant.imageCategories && restaurant.imageCategories.includes("All") && (
								<li>Image Categories: All</li>
							)}
							{restaurant.openingHours && (
								<li>
									Opening Hours:
									<ul>
										{restaurant.openingHours.map((hour, index) => (
											<li key={index}>{hour.day}: {hour.hours}</li>
										))}
									</ul>
								</li>
							)}
							{restaurant.additionalInfo && (
								<li>
									Additional Info:
									<ul>
										{Object.entries(restaurant.additionalInfo).map(([category, info], index) => (
											<li key={index}>
												{category}: 
												<ul>
													{info.map((item, i) => (
														<li key={i}>{Object.keys(item)[0]}: {item[Object.keys(item)[0]] ? "Yes" : "No"}</li>
													))}
												</ul>
											</li>
										))}
									</ul>
								</li>
							)} */}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};
