import React, { useRef, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserStatusModal } from "../component/UserStatusModal";

import "../../styles/navbar.css"
import opt1Logo from "../../img/opt1Logo.png";


export const Navbar = () => {
	const nav = useRef(null);
	const location = useLocation();
	const { store } = useContext(Context);
	const [showModal, setShowModal] = useState(false);

	function callLogoutModal() {
		setShowModal(true);
	}


	return (
		<nav ref={nav} className="navbar navbar-expand-md navbar-light bg-light">
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="siteLogoDiv">
				<Link to="/">
					<img className="navbar-brand mb-0" id="siteLogo" src={opt1Logo} alt="Logo Design by FlamingText.com" />
				</Link>
			</div>
			<div id="navbarSupportedContent" className="navbarContainer flex-column flex-sm-row collapse navbar-collapse w-100">
				<div>
					{store.token ? (<>
						<Link to="/favorites">
							<button className={`btn outlined-text favBtn ${location.pathname === '/favorites' ? 'active' : ''}`}>
								Favorites
							</button>
						</Link>
						<button onClick={callLogoutModal} className={`btn outlined-text loginBtn `}>
							Log Out
						</button>
						{showModal && (
							<UserStatusModal
								identify="logOut"
								info="Are you sure you want to log out?"
								onClose={() => setShowModal(false)}
								action1="No"
								action2="Yes"
							/>
						)}
					</>
					) : (
						<Link to="/login">
							<button className={`btn outlined-text loginBtn ${location.pathname === '/login' ? 'active' : ''}`}>
								Log In
							</button>
						</Link>
					)}
				</div>

				<div className="cityBtnDiv ms-0 ms-sm-auto">
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
						<Link to="/apify-near-you" className="dropdown-item bold-text">Game & Search</Link>
						<Link to="/google-maps-near-you" className="dropdown-item bold-text">Use Google</Link>
					</ul>
				</div>
				<div className="contactUsDiv">
					<Link to="/contactUs">
						<button className={`btn outlined-text loginBtn ${location.pathname === '/contactUs' ? 'active' : ''}`}>
							Contact Us
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
