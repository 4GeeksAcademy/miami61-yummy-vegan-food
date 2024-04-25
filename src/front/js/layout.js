import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/Home";
import { Registration } from "./pages/registration";
import { Login } from "./pages/login";
import { Forgetpassword } from "./pages/forgetpassword";
import { Favorites } from "./pages/Favorites.js";
import { NYC } from "./pages/NYC";
import { LA } from "./pages/LA";
import { Houston } from "./pages/Houston";
import { NearYou } from "./pages/NearYou";
import { GoogleMaps } from "./pages/GoogleMaps";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Receipes } from "./pages/Receipes";



const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    const [isLoggedIn, setisLoggedIn] = useState(false)
    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;
        useEffect(() => {
            const token = localStorage.getItem('token')
            if (token && token.length) {
                setisLoggedIn(true)
            }
        }, [])
        
    return (
        <div id="layoutDiv">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Registration />} path="/registration" />
                        <Route element={<Login setisLoggedIn={setisLoggedIn}/>} path="/login" />
                        <Route element={<Forgetpassword />} path="/forgetpassword" />
                        <Route element={<Forgetpassword />} path="/change_password/:token" />
                        <Route element={<Favorites />} path="/favorites" />
                        <Route element={<NYC />} path="/nyc" />
                        <Route element={<LA />} path="/la" />
                        <Route element={<Houston/>} path="/houston" />
                        <Route element={<NearYou />} path="/apify-near-you" />
                        <Route element={<GoogleMaps />} path="/google-maps-near-you" />
                        <Route element={<Receipes />} path = "/receipes"/>
                        <Route
							path="*" 
							element={
								<React.Fragment>
									<div className="notFoundDiv" style={{ textAlign: 'center' }}>
										<h1 className="mt-5">404 Not Found</h1>
										<Link to="/">
											<button className="btn btn-secondary my-4">Back home</button>
										</Link>
									</div>
								</React.Fragment>
							}
						/>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
