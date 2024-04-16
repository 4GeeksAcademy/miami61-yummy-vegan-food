import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


import SnakesGame from "../../SnakesGame/SnakesGame.tsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
		fetchRecipes();
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

			<body>
				<div className="background">
					<div className="intro">
						<h1>If It Ain't Vegan We Leavin!</h1>
							<a href="">	
								<i id="icon" class="fa-solid fa-leaf"></i>
								<span>Lets Eat</span>
							</a>
						{/* <button><a href="#section1"></a></button> */}
					</div>
				</div>

				<div className="learn-more container">Learn More
					<div className="NY">
						<div className="NY"><i id="NY" class="fa-solid fa-leaf"></i></div>
					</div>
					<div className="LA">
						<div ><i id="LA" class="fa-solid fa-utensils"></i></div>
					</div>
					<div className="HTX">
						<div ><i id="HTX" class="fa-solid fa-bowl-food"></i></div>
					</div>
				</div>

				<div className="receipes">Vegan Receipes For Me</div>
				

				<div className="div1 section1">New York
					<div id="New-York section-1" className="city-description">
						<button id="backToTopBtn" onClick={scrollToTop}><i class="fa-solid fa-angles-up">Back To Top</i></button>
						<p>New York's status as a cultural melting pot fosters a rich tapestry of culinary influences,
						inspiring chefs to craft inventive and delicious plant-based dishes.
						The city's sheer size and density create a competitive environment,
						driving vegan restaurants to constantly innovate and elevate their offerings.
						Moreover, New Yorkers are increasingly health-conscious and environmentally aware,
						ueling the demand for vegan options and ensuring a thriving vegan dining scene.</p></div>

						<a
							onMouseOut={handleOffHover}
							href="https://silver-succotash-g4q4wq49j57q39jqp-3000.app.github.dev/nyc"
							target=""
							rel="noopener noreferrer"><img onMouseEnter={handleOnHover}
								src="https://townmapsusa.com/images/maps/map_of_new_york_ny.jpg" width="250" height="300"
								className="me-5 cityimage" /></a>

				</div>




				<div className="div2 section2">Los Angeles
					<div id="Los-Angeles" className="city-description">
					<button id="backToTopBtn" onClick={scrollToTop}><i class="fa-solid fa-angles-up">Back To Top</i></button>
						<p>Los Angeles stands out as a premier destination for vegan dining due to its abundant
						access to fresh, locally sourced produce year-round. The city's diverse population and cultural influence
						create a dynamic culinary landscape, inspiring chefs to push boundaries and craft innovative plant-based
						dishes. Additionally, LA's health-conscious and eco-friendly ethos aligns perfectly with the principles of
						veganism, driving a growing demand for vegan options across the city's thriving restaurant scene. With a
						plethora of vegan eateries ranging from casual cafes to upscale dining establishments, Los Angeles offers
						something to suit every palate and preference, solidifying its reputation as a haven for vegan food
						enthusiasts.</p></div>
						

					<a
						href="https://silver-succotash-g4q4wq49j57q39jqp-3000.app.github.dev/la"
						target=""
						rel="noopener noreferrer"><img onMouseEnter={handleOnHover}
							src="https://townmapsusa.com/images/maps/map_of_los_angeles_ca.jpg" width="250" height="300"
							className="me-5 cityimage" /></a>
				</div>



				<div className="div3 section3">Houston
					<div id="Houston" className="city-description">
					<button id="backToTopBtn" onClick={scrollToTop}><i class="fa-solid fa-angles-up">Back To Top</i></button>
						<p>Houston's emergence as a top destination for vegan dining is fueled by several
						factors. Firstly, the city's diverse and multicultural population inspires a rich tapestry of culinary
						influences, resulting in a wide variety of flavorful vegan options that draw from global cuisines.
						Additionally, Houston's strong emphasis on sustainability and environmental consciousness aligns well
						with the ethos of veganism, leading to a growing demand for plant-based dining options. The city's vibrant food scene continually pushes
						boundaries, resulting in creative and delicious plant-based dishes that cater to both vegans and
						non-vegans alike.</p>
					</div>

					<a href="https://silver-succotash-g4q4wq49j57q39jqp-3000.app.github.dev/houston"
						target=""
						rel="noopener noreferrer"><img onMouseEnter={handleOnHover}
							src="https://townmapsusa.com/images/maps/map_of_houston_tx.jpg" width="250" height="300"
							className="me-5 cityimage houstonstate" /></a>

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
						{/* <button id="backToTopBtn" onClick={scrollToTop}><i class="fa-solid fa-angles-up"></i></button> */}
						{/* <button id="#section1" onClick={scrollToSection}>To Section</button> */}
				
				</div>
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap')
				</style>

			</body>

		</div>


	);



	function handleOnHover(event) {
		console.log("Working on Hover")
		console.log(event)
		event.target.style.background = "red"
	}

	function handleOffHover(event) {
		console.log("Working on off Hover")
	}

	async function fetchRecipes () {
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
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	}
	function scrollToTop() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	  }

	  function scrollToSection(){
		document.body.scrollToSection = 0; // For Safari
		document.documentElement.scrollToSection= 0; // For Chrome, Firefox, IE and Opera

	  }
;

};