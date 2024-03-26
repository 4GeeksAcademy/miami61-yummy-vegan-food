import React from "react";
import { Link } from "react-router-dom";

import siteLogo from "../../img/med_siteLogo.png";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light" >
			<div className="container">
				<Link to="/">
					<img className="navbar-brand mb-0" id="siteLogo" src={siteLogo} alt="Logo Design by FlamingText.com" />
				</Link>
				<div>
					<Link to="/nyc">
						<button className="btn btn-warning">N.Y.C.</button>
					</Link>
					<Link to="/la">
						<button className="btn btn-warning cityBtn">L.A.</button>
					</Link>
					<Link to="/houston">
						<button className="btn btn-warning cityBtn">Houston, TX</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/near-you">
						<button className="btn btn-secondary">Find Vegan Friendly Restaurants Near You!!</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
