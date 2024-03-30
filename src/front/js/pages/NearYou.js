import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApifyClient } from 'apify-client';
import { Context } from "../store/appContext";

import "../../styles/nearYou.css"







export const NearYou = () => {
	// Initialize the ApifyClient with API token
	const client = new ApifyClient({
		token: 'apify_api_ezKeWNOMj5XMsKxQTQ0twrwPIKz4AW2FOMF7',
	});

	// Prepare Actor input
	const input = {
		"countryCode": "us",
		"city": "Pittsburg",
		"maxCrawledPlacesPerSearch": 10
	};
	
	const [ restaurants, setRestaurants ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState('');
	const [ location, setLocation ] = useState('');

	const fetchRestaurants = async () => {
		setIsLoading(true);
		setError('');
		try {
			const run = await client.actor("hh5GL7s6JL3wgmn1G").call(input);

			// Fetch and print Actor results from the run's dataset (if any)
			console.log('Results from dataset');
			const { items } = await client.dataset(run.defaultDatasetId).listItems();
			// items.forEach((item) => {
			// 	console.dir(item);
			// });
			setRestaurants(items)
		} catch (error) {
			setError('failed the fetch of vegan restaurants', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="container">
			<h1>Find Vegan Restaurants Near You</h1>
			<input 
				type="text" 
				value={location} 
				onChange={(event) => setLocation(event.target.value)} 
				placeholder="Enter Your Location" />
			<button onClick={fetchRestaurants} className="btn btn-lg btn-secondary">Search</button>
			{isLoading && <div>loading...</div>}
			{error && <div>{error}</div>}
			<ul>
				{restaurants.map((restaurant, index) => (
					<li key={index}>{restaurant.name}</li>
				))}
			</ul>
		</div>
	);
};
