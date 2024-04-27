import React, { useState, useEffect } from "react";
import "../../styles/receipe.css";


export const Receipes = () => {
	let [receipe, setReceipe] = useState(null);

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const receipeId = urlParams.get('id')

	useEffect(() => {
		fetchOneReceipe();
	}, []);

	async function fetchOneReceipe() {
		const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${receipeId}`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.RAPID_KEY,
				'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
			}
		};

		try {
			const response = await fetch(url, options);
			const result = await response.json();
			console.log("receipe:", result);
			setReceipe(result);
		} catch (error) {
			console.error(error);
		}
	}

	//  Loading screen
	if (receipe == null) {
		return (
			<div>
				Please be patient, loading!
			</div>
		)
	}

	// Fetch is done, now show the user the receipe!!!!!!
	else {
		return (
			
			<div>
				<h1> Vegan Dishes</h1>
				<img className= "image"src = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/4/26/0/HE_kwon-Ground-Turkey-Enchilada-Stir-Fry-with-Couscous_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1461695054811.jpeg"/>
				

		<div className="vegan-mix">
			<div className="vegan-item">
				<i id="NY" class="fa-solid fa-leaf"></i>
				<h1>Ingredients</h1>
				<h6> NYC's vegan ramen, found at spots like Ramen Hood,
					is a standout. Rich broth, noodles, tofu, and veggies
					make it a creative and comforting dish, highlighting the city's vegan scene.
				</h6>

			</div>

			<div className="vegan-item">
				<i id="LA" class="fa-solid fa-utensils"></i>
				<h1>Instructions</h1>
				<h6>In Los Angeles, vegan sushi at spots like Shojin or Sushi Roku shines.
					Innovative ingredients like tofu and avocado wrapped in seaweed and rice
					offer a delicious take on traditional sushi, showcasing the city's vibrant vegan scene.
				</h6>

			</div>

			{/* <div className="vegan-item">
				<i id="HTX" class="fa-solid fa-bowl-food"></i>
				<h1>Houston</h1>
				<h6>In Houston, vegan BBQ at places like Green Seed Vegan or
					BBQ Revolution stands out. Plant-based versions of classic BBQ dishes
					offer a flavorful twist, showcasing the city's diverse vegan scene.</h6>

			

			</div> */}
		</div>

		</div>

		);
	}
};