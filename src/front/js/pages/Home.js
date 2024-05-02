import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { VeganReceipes } from "../component/veganreceipes";
import { Receipes } from "./Receipes";



export const Home = () => {
	const { store, actions } = useContext(Context);
	const [randomReceipes, setRandomReceipes] = useState(null)

	useEffect(() => {
		getNewReceipes(3);
	}, []);

	return (
		<div className="text-center mt-5 body" id="homediv">
			{/* <h1>Vegan Dishes in your city!</h1> */}


			{/* <p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}

			{/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}

			<div className="text-center mt-5 body" id="homediv">
				<div className="background">
					<div className="intro">
						<h1>If It Ain't VEGAN We Leavin!</h1>
						<Link to="/google-maps-near-you">
							<i id="icon" className="fa-solid fa-seedling"></i>
							<h2><span>Find Locations</span></h2>
						</Link>
						{/* <button><a href="#section1"></a></button> */}
					</div>
				</div>


				<div className="learn-more">
					<div className="learn-more-item">
						<i id="NY" className="fa-solid fa-leaf"></i>
						<h1>New York</h1>
						<h6> NYC's vegan ramen, found at spots like Ramen Hood,
							is a standout. Rich broth, noodles, tofu, and veggies
							make it a creative and comforting dish, highlighting the city's vegan scene.
						</h6>

						<a href="#New-York1"><button type="button" className="btn btn-warning">Learn More</button></a>

					</div>

					<div className="learn-more-item">
						<i id="LA" className="fa-solid fa-utensils"></i>
						<h1>Los Angeles</h1>
						<h6>In Los Angeles, vegan sushi at spots like Shojin or Sushi Roku shines.
							Innovative ingredients like tofu and avocado wrapped in seaweed and rice
							offer a delicious take on traditional sushi, showcasing the city's vibrant vegan scene.
						</h6>


						<a href="#Los-Angeles2"><button type="button" className="btn btn-warning">Learn More</button></a>

					</div>

					<div className="learn-more-item">
						<i id="HTX" className="fa-solid fa-bowl-food"></i>
						<h1>Houston</h1>
						<h6>In Houston, vegan BBQ at places like Green Seed Vegan or
							BBQ Revolution stands out. Plant-based versions of classic BBQ dishes
							offer a flavorful twist, showcasing the city's diverse vegan scene.</h6>

						<a href="#Houston3"><button type="button" className="btn btn-warning">Learn More</button></a>

					</div>
				</div>

				{/* Vegan Invite To Meet Ups */}
				<div className="Vegan-party">
					<div className="row">
						<div className="invite">
							<h2>Discover the exhilarating world of vegan events, where health, sustainability,
								and compassion converge! Embark on a journey to vibrant gatherings that celebrate
								the wonders of plant-based living. Dive into a whirlwind of flavor-packed culinary delights,
								tantalizing your taste buds with nutrient-rich creations that fuel both body and soul.
								Explore the cutting-edge of environmental consciousness as we unite in the fight against
								climate change, one delicious bite at a time. Immerse yourself in the heartwarming embrace
								of a community that shares your values, forging connections that inspire and empower. Join us
								on this thrilling adventure as we revolutionize the way we eat, live, and thrive together.
								Dare to be part of something truly extraordinary – your vibrant, compassionate future awaits at
								vegan events!
								<br></br>
								<div> Sign up to learn more about our vegan pop up events!</div>
								<div className="d-grid gap-2 col-8 mx-auto mt-10">
									<a href="http://localhost:3000/registration"><button className="btn btn-primary" type="button">Learn About The Next Event!</button></a>
								</div>
							</h2>
							<img src="https://www.centralpark.com/downloads/10683/download/vegan-night-market-wollman-rink.jpg?cb=97a984debbf5f9b8da2b5e4a41166385" />
						</div>


					</div>

				</div>

				{/* Section 2 for cards */}


				<h1 id="featured-recepies">Featured Vegan Recipes</h1>
				<div className="learn-more2 vegan-card-receipe-container">

					{/* ///////////////////////// */}
					{/* RANDOM RECIPES OF THE DAY */}

					{renderRandomReceipesJSX()}

					{/* <VeganReceipes getNewReceipes="" /> */}
					{/* <VeganReceipes name="sexxy Redd" /> */}
					{/* <VeganReceipes photosrc="https://media.post.rvohealth.io/wp-content/uploads/2020/09/high-calorie-vegan-foods-1200x628-facebook-1200x628.jpg" /> */}
					{/* <VeganReceipes photosrc="https://media.post.rvohealth.io/wp-content/uploads/2020/09/high-calorie-vegan-foods-1200x628-facebook-1200x628.jpg" /> */}






					{/* <div className="learn-more-item2 vegan-card-receipe">
							<i id="LA2" className="fa-solid fa-utensils"></i>
							<h1>Food</h1>
							<h6>In Los Angeles, vegan sushi at spots like Shojin or Sushi Roku shines. 
								Innovative ingredients like tofu and avocado wrapped in seaweed and rice 
							</h6>
							<img src="https://images.happycow.net/venues/500/14/83/hcmp148318_922709.jpeg"/>
						

						<a href="#Los-Angeles2"><button type="button" className="btn btn-warning">Learn More</button></a>
						
					</div>

					<div className="learn-more-item2 vegan-card-receipe">
							<i id="HTX2" className="fa-solid fa-bowl-food"></i>
							<h1>Houston</h1>
							<h6>In Houston, vegan BBQ at places like Green Seed Vegan or 
								BBQ Revolution stands out. Plant-based versions of classic BBQ dishes 
								offer a flavorful twist, showcasing the city's diverse vegan scene.
							</h6>
							<img src="https://placehold.co/600x400"/>
				
						<a href="#Houston3"><button type="button" className="btn btn-warning">Learn More</button></a>

					</div> */}
				</div>

				<div className="space"></div>
				{/* Vegann Receipes */}

				{/* <div className="receipes"><h1>Vegan Receipes For Me</h1>
					<div className="card">
						<div className="card-body1">
							<h5 className="card-title"></h5>
							<p className="card-text"></p>
							<a href="#" className="btn btn-primary">Get It To Go</a>
						</div>

						
						<div className="card-body2">
							<h5 className="card-title"></h5>
							<p className="card-text"></p>
							<a href="#" className="btn btn-primary">Try This Receipe</a>
						</div>

						
						<div className="card-body3">
							<h5 className="card-title"></h5>
							<p className="card-text"></p>
							<a href="#" className="btn btn-primary">Try This Food</a>
						</div>
					</div>
				</div> */}


				<div className="div1 section1">New York
					<div id="New-York1" className="city-description">
						<button id="backToTopBtn" onClick={scrollToTop}>Back To Top<i className="fa-solid fa-angles-up"></i></button>
						<p>New York's status as a cultural melting pot fosters a rich tapestry of culinary influences,
							inspiring chefs to craft inventive and delicious plant-based dishes.
							The city's sheer size and density create a competitive environment,
							driving vegan restaurants to constantly innovate and elevate their offerings.
							Moreover, New Yorkers are increasingly health-conscious and environmentally aware,
							ueling the demand for vegan options and ensuring a thriving vegan dining scene.</p></div>


					<Link to="/nyc" target="_blank" rel="noopener noreferrer">
						<span onMouseOut={handleOffHover}>
							<img onMouseEnter={handleOnHover}
								src="https://townmapsusa.com/images/maps/map_of_new_york_ny.jpg" width="250" height="300"
								className="me-5 cityimage" />
						</span>
					</Link>

				</div>




				<div className="div2 section2">Los Angeles
					<div id="Los-Angeles2" className="city-description">
						<button id="backToTopBtn" onClick={scrollToTop}>Back To Top<i className="fa-solid fa-angles-up"></i></button>
						<p>Los Angeles stands out as a premier destination for vegan dining due to its abundant
							access to fresh, locally sourced produce year-round. The city's diverse population and cultural influence
							create a dynamic culinary landscape, inspiring chefs to push boundaries and craft innovative plant-based
							dishes. Additionally, LA's health-conscious and eco-friendly ethos aligns perfectly with the principles of
							veganism, driving a growing demand for vegan options across the city's thriving restaurant scene. With a
							plethora of vegan eateries ranging from casual cafes to upscale dining establishments, Los Angeles offers
							something to suit every palate and preference, solidifying its reputation as a haven for vegan food
							enthusiasts.</p></div>

					<Link to="/la">
						<span>
							<img onMouseEnter={handleOnHover}
								src="https://townmapsusa.com/images/maps/map_of_los_angeles_ca.jpg" width="250" height="300"
								className="me-5 cityimage" />
						</span>
					</Link>
				</div>



				<div className="div3 section3">Houston
					<div id="Houston3" className="city-description">
						<button id="backToTopBtn" onClick={scrollToTop}>Back To Top<i className="fa-solid fa-angles-up"></i></button>
						<p>Houston's emergence as a top destination for vegan dining is fueled by several
							factors. Firstly, the city's diverse and multicultural population inspires a rich tapestry of culinary
							influences, resulting in a wide variety of flavorful vegan options that draw from global cuisines.
							Additionally, Houston's strong emphasis on sustainability and environmental consciousness aligns well
							with the ethos of veganism, leading to a growing demand for plant-based dining options. The city's vibrant food scene continually pushes
							boundaries, resulting in creative and delicious plant-based dishes that cater to both vegans and
							non-vegans alike.</p>
					</div>
					<Link to="/houston">
						<span>
							<img onMouseEnter={handleOnHover}
								src="https://townmapsusa.com/images/maps/map_of_houston_tx.jpg" width="250" height="300"
								className="me-5 cityimage houstonstate" />
						</span>
					</Link>

					<section>
						{/* <a
							onMouseOut={handleOffHover}
							href="https://silver-succotash-g4q4wq49j57q39jqp-3000.app.github.dev/nyc"
							target=""
							rel="noopener noreferrer"><img onMouseEnter={handleOnHover}
								src="https://townmapsusa.com/images/maps/map_of_new_york_ny.jpg" width="250" height="500"
								className="me-5 cityimage" /></a>

						<a
							href="https://silver-succotash-g4q4wq49j57q39jqp-3000.app.github.dev/la"
							target=""
							rel="noopener noreferrer"><img onMouseEnter={handleOnHover}
								src="https://townmapsusa.com/images/maps/map_of_los_angeles_ca.jpg" width="250" height="500"
								className="me-5 cityimage" /></a>

						<a
							href="https://silver-succotash-g4q4wq49j57q39jqp-3000.app.github.dev/houston"
							target=""
							rel="noopener noreferrer"><img onMouseEnter={handleOnHover}
								src="https://townmapsusa.com/images/maps/map_of_houston_tx.jpg" width="250" height="500"
								className="me-5 cityimage" /></a> */}

					</section>
					{/* <button id="backToTopBtn" onClick={scrollToTop}><i className="fa-solid fa-angles-up"></i></button> */}
					{/* <button id="#section1" onClick={scrollToSection}>To Section</button> */}

				</div>
			</div>
		</div>


	);



	function handleOnHover(event) {
		// console.log(event)
		event.target.style.background = "red"
	}

	function handleOffHover(event) {
		console.log("Working on off Hover")
	}

	async function fetchReceipes() {
		const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=vegan';
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
			console.log("Vegan recipes fetched from Tasty Rapid-API:", result);
			return result
		} catch (error) {
			console.error(error);
		}
	}


	async function getNewReceipes(amt) {
		let result = [];
		let selectedRecipeIds = [];

		// Fetch recipes until we have enough unique ones
		while (result.length < amt) {
			const fetchResult = await fetchReceipes();
			if (fetchResult && fetchResult.results) {
				const recipes = fetchResult.results;
				while (result.length < amt && recipes.length > 0) {
					const randomIndex = Math.floor(Math.random() * recipes.length);
					const randomReceipe = recipes.splice(randomIndex, 1)[0];
					// Check if the recipe ID is not already selected
					if (!selectedRecipeIds.includes(randomReceipe.id)) {
						result.push(randomReceipe);
						selectedRecipeIds.push(randomReceipe.id);
					}
				}
			}
		}

		// Set the state with the unique recipes
		setRandomReceipes(result);
		console.log("Random recipe results: ", result);
	}
	// async function getNewReceipes(amt) {
	// 	let result = []

	// 	// if (randomReceipes.length >= 0) return;
	// 	// amt :: amount of objects we want to get back, or returned

	// 	let fetchResult = await fetchReceipes()
	// 		.then(response => {
	// 			// For loop
	// 			if (response.message) {
	// 				console.log("\n\n\n---- ERROR MONTHLY API QUOTA EXCEEDED ----\n\n\n", response)
	// 				return;
	// 			}

	// 			for (let i = 0; i < amt; i++) {

	// 				const randomIndex = Math.floor(Math.random() * response.results.length);
	// 				// console.log("this is error: ", response.results[randomIndex])

	// 				const randomReceipe = response.results[randomIndex]
	// 				// add this recipe to the list of results
	// 				result.push(randomReceipe)
	// 			}

	// 			setRandomReceipes(result);
	// 			console.log("Random recipe results: ", result);
	// 		})
	// }

	function renderRandomReceipesJSX() {

		// Random Recipes fetch is NOT done and is not ready to be rendered
		if (randomReceipes == null) {
			return (
				<h1 id="random-receipes--loading">
					Loading recipes, please be patient!
				</h1>
			)
		}

		else {
			return (
				randomReceipes.map(receipe => {
					return <VeganReceipes key={receipe.id} receipe={receipe} />;
				})
			)
		}
	}

	function scrollToTop() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	function scrollToSection() {
		document.body.scrollToSection = 0; // For Safari
		document.documentElement.scrollToSection = 0; // For Chrome, Firefox, IE and Opera

	}

};