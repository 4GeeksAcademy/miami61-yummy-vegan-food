import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = (props) => {
	return (
		// <div className="card m-3" style={{ width: "22.5rem" }}>
		// 	<div className="card-body">
		// 		<div className="card-title text-wrap">
		// 			<img src={props.img} />
		// 			<h2>{props.restaurant_name}</h2>
		// 			{/* <button type="button" className="btn btn-outline-warning btn-heart" onClick={addToFavorites}>
		// 				<i className="fa-solid fa-heart heartBtn" style={{ color: isFavorite ? '#cc0020' : '#ffc107' }}></i>
		// 			</button> */}
		// 		</div>
		<div key={props.id} className="col-lg-4 col-md-6 mb-4">
			<div className="card h-100">
				<div
					id={`carousel${props.id}`}
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
								src={props.img_1_url}
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
								src={props.img_2_url}
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
								src={props.img_3_url}
								alt="Third slide"
							/>
						</div>
             		</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target={`#carousel${props.id}`}
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						>
						</span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target={`#carousel${props.id}`}
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						>
						</span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				<div className="card-body">
					<div className="d-flex justify-content-between">
						<img src={props.img} />
						<h2>{props.restaurant_name}</h2>
						{/* <button type="button" className="btn btn-outline-warning btn-heart" onClick={addToFavorites}>
							<i className="fa-solid fa-heart heartBtn" style={{ color: isFavorite ? '#cc0020' : '#ffc107' }}></i>
						</button> */}
					</div>
					<a
						href={props.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>
							<i className="fa-solid fa-globe"></i>{" "}
							{props.url}
						</p>
					</a>
					<a href={`tel:${props.call}`}>
						<p>
							<i className="fa-solid fa-phone"></i>{" "}{props.restaurant_phone}
						</p>
					</a>
					<p>
						<i className="fa-solid fa-face-smile"></i>{" "}{props.rating}
					</p>
					<p>
						<i className="fa-solid fa-bowl-rice"></i>{" "}{props.food_type}
					</p>

					{/* !!!TO DO: STILL NEED TO DO props FOR HOURS */}
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
						href={props.address_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid fa-location-dot"></i>{" "}{props.address_link}
					</a>
				</div>
			</div>
		</div>
	)
};