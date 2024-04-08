import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
	return (
		// <div className="container favoritesDiv">
		//     <table className="favTable">
		//         <th className="favTable">
		//             <td>Restaurant Name</td>
		//             <td>Restaurant Address</td>
		//             <td>Restaurant Web address</td>
		//             <td>Restaurant City</td>
		//         </th>
		//         {/* <tr>{restaurant.name}</tr>
		//         <tr>{restaurant.name}</tr>
		//         <tr>{restaurant.name}</tr>
		//         <tr>{restaurant.name}</tr> */}
		//     </table>
		// </div>


		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 mb-4">
					<div className="card h-100">
						<div
							id="carouselSeasonedVeganRealQuick"
							className="carousel slide"
							data-bs-ride="carousel"
						>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										className="d-block w-100"
										style={{
											width: "300px",
											height: "300px",
											objectFit: "cover",
										}}
										src="https://s3-media0.fl.yelpcdn.com/bphoto/1blQSQRt42H_dFj-n9uKww/348s.jpg"
										alt="First slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										style={{
											width: "300px",
											height: "300px",
											objectFit: "cover",
										}}
										src="https://s3-media0.fl.yelpcdn.com/bphoto/-cB1VBHZjiz5y2S8Z20o1A/o.jpg"
										alt="Second slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										style={{
											width: "300px",
											height: "300px",
											objectFit: "cover",
										}}
										src="https://s3-media0.fl.yelpcdn.com/bphoto/-OVLSGBt7l-0mX1KAzILhQ/o.jpg"
										alt="Third slide"
									/>
								</div>
								{/* Add more carousel items for additional images */}
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselSeasonedVeganRealQuick"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselSeasonedVeganRealQuick"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<h2>Seasoned Vegan Real Quick</h2>
								{/* <button type="button" className="btn btn-outline-warning btn-heart" onClick={addToFavorites}>
									<i className="fa-solid fa-heart heartBtn" style={{ color: isFavorite ? '#cc0020' : '#ffc107' }}></i>
								</button> */}
							</div>
							<a
								href="https://www.seasonedvegan.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p>
									<i className="fa-solid fa-globe"></i>{" "}
									https://www.seasonedvegan.com/
								</p>
							</a>
							<a href="tel:+18325825566">
								<p>
									<i className="fa-solid fa-phone"></i> (973) 319-8856
								</p>
							</a>
							<p>
								<i className="fa-solid fa-face-smile"></i>: 4.4{" "}
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-regular fa-star-half-stroke"></i>(1.8K reviews)
							</p>

							<p>
								<i className="fa-solid fa-bowl-rice"></i> Vegan
							</p>
							<table className="w-100 mb-3">
								<tbody>
									<tr>
										<td>Friday</td>
										<td>11 AM–9 PM</td>
									</tr>{" "}
									<tr>
										<td>Saturday</td>
										<td>11 AM–9 PM</td>
									</tr>{" "}
									<tr>
										<td>Sunday</td>
										<td>11 AM–9 PM</td>
									</tr>{" "}
									<tr>
										<td>Monday</td>
										<td>11 AM–9 PM</td>
									</tr>{" "}
									<tr>
										<td>Tuesday</td>
										<td>11 AM–9 PM</td>
									</tr>{" "}
									<tr>
										<td>Wednesday</td>
										<td>11 AM–9 PM</td>
									</tr>{" "}
									<tr>
										<td>Thursday</td>
										<td>11 AM–9 PM</td>
									</tr>
								</tbody>
							</table>

							<a
								href="https://www.google.com/maps/search/?api=1&query=128+2nd+Ave%2C+New+York%2C+NY"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-solid fa-location-dot"></i> 128 2nd Ave, New
								York, NY
							</a>
						</div>
					</div>
				</div>
				<br />
				<br />
			</div>
		</div>
	)
};