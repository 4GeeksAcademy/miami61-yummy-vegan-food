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

		<div className="card m-3" style={{ width: "22.5rem" }}>
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
	)
};