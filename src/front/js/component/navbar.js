import React from "react";
import { Link } from "react-router-dom";

import siteLogo from "../../img/med_siteLogo.png";
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
						<button className="btn outlined-text cityBtn">Houston, TX</button>
					</Link>
				</div>
				<div className="ml-auto nearBtnDiv">
					<Link to="/near-you">
						<button className="btn nearBtnOutline nearBtn">Vegan Spots Near You!!</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
