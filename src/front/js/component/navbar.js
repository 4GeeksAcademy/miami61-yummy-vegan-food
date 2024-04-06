import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import opt1Logo from "../../img/opt1Logo.png";

import "../../styles/navbar.css"


export const Navbar = ({ isLoggedIn, isActive }) => {
	const nav = useRef(null);
	const location = useLocation();


	return (
		<nav ref={nav} className="navbar navbar-light bg-light" >
			<div className="navbarContainer w-100">
				<div className="siteLogoDiv">
					<Link to="/">
						<img className="navbar-brand mb-0" id="siteLogo" src={opt1Logo} alt="Logo Design by FlamingText.com" />
					</Link>
				</div>

				<div>
					{isLoggedIn ? (
						<Link to="/favorites">
							<button className={`btn outlined-text favoritesBtn ${location.pathname === '/favorites' ? 'active' : ''}`}>
								Favorites
							</button>
						</Link>
					) : (
						<Link to="/login">
							<button className={`btn outlined-text loginBtn ${location.pathname === '/login' ? 'active' : ''}`}>
								Log In
							</button>
						</Link>
					)}
				</div>
				<div className="cityBtnDiv">
					<Link to="/nyc">
						<button className={`btn outlined-text cityBtn ${location.pathname === '/nyc' ? 'active' : ''}`}>
							N.Y.C.
						</button>
					</Link>
					<Link to="/la">
						<button className={`btn outlined-text cityBtn ${location.pathname === '/la' ? 'active' : ''}`}>
							L.A.
						</button>
					</Link>
					<Link to="/houston">
						<button className={`btn outlined-text cityBtn ${location.pathname === '/houston' ? 'active' : ''}`}>
							Houston
						</button>
					</Link>
				</div>
				<div className="dropdown ml-auto nearBtnDiv">
					<button 
						id="nearMeBtn" 
						type="button" 
						data-bs-toggle="dropdown" 
						aria-expanded="false" 
						className={`btn dropdown-toggle nearBtnOutline nearBtn ${location.pathname === '/apify-near-you' || location.pathname === '/google-maps-near-you' ? 'active' : ''}`}
					>
						Vegan Spots Near You!!
					</button>
					<ul className="dropdown-menu dropdown-menu-end text-center bg-color text-decoration-underline">
						<Link to="/apify-near-you" className="dropdown-item">Game & Search</Link>
						<Link to="/google-maps-near-you" className="dropdown-item">Use Google</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
