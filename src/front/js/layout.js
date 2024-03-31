import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/Home";
import { NYC } from "./pages/NYC";
import { LA } from "./pages/LA";
import { Houston } from "./pages/Houston";
import { NearYou } from "./pages/NearYou";
import { GoogleMaps } from "./pages/GoogleMaps";
// import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div id="layoutDiv">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<NYC />} path="/nyc" />
                        <Route element={<LA />} path="/la" />
                        <Route element={<Houston/>} path="/houston" />
                        <Route element={<NearYou />} path="/apify-near-you" />
                        <Route element={<GoogleMaps />} path="/google-maps-near-you" />
                        {/* <Route element={<Single />} path="/single/:theid" /> */}
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
