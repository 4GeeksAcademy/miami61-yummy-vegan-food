import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Context } from "../store/appContext";

export const NearYou = () => {
	const [ restaurants, setRestaurants ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState('');
	const [ location, setLocation ] = useState('');

	const fetchRestaurants = async () => {
		setIsLoading(true);
		setError('');
		try {
			const response = await axios.get(`/api/getVeganRestaurants?location=${location}`);
			setRestaurants(response.data)
		} catch (error) {
			setError('failed the fetch of vegan restaurants');
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
