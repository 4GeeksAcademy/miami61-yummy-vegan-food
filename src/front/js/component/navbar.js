import React from "react";
import { Link } from "react-router-dom";

import opt1Logo from "../../img/opt1Logo.png";

import "../../styles/navbar.css"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light" >
			<div className="navbarContainer w-100">
				<div className="siteLogoDiv">
					<Link to="/">
						<img className="navbar-brand mb-0" id="siteLogo" src={opt1Logo} alt="Logo Design by FlamingText.com" />
					</Link>
				</div>
				<div className="cityBtnDiv">
					<Link to="/nyc">
						<button className="btn outlined-text cityBtn" id="nycBtn">N.Y.C.</button>
					</Link>
					<Link to="/la">
						<button className="btn outlined-text cityBtn">L.A.</button>
					</Link>
					<Link to="/houston">
						<button className="btn outlined-text cityBtn">Houston</button>
					</Link>
				</div>
				<div className="dropdown ml-auto nearBtnDiv">
					<button id="nearMeBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn dropdown-toggle nearBtnOutline nearBtn">
						Vegan Spots Near You!!
					</button>
					<ul className="dropdown-menu dropdown-menu-end text-center transparent-bg text-decoration-underline">
						<Link to="/apify-near-you" className="dropdown-item">Game & Search</Link>
						<Link to="/google-maps-near-you" className="dropdown-item">Use Google</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
