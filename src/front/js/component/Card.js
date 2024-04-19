import React, { useState, useContext } from "react";
import { Link } from "reatc-router-dom";
import { Context } from "../store/appContext";


export const Card = (fav) => {
	console.log(fav, "FAVORITE")
	return (
		<div className="card h-100">
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<h2>{fav.restaurant_name}</h2>
					{/* <button type="button" className="btn btn-outline-warning btn-heart" onClick={addToFavorites}>
						<i className="fa-solid fa-heart heartBtn" style={{ color: isFavorite ? '#cc0020' : '#ffc107' }}></i>
					</button> */}
				</div>
				<a
					href={fav.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<p>
						<i className="fa-solid fa-globe"></i>{" "}
						{fav.url}
					</p>
				</a>
				{/* <a href={"tel:+18325825566"}> */}
				<p>
					<i className="fa-solid fa-phone"></i>{fav.restaurant_phone}
				</p>
				{/* </a> */}
				<p>
					<i className="fa-solid fa-face-smile"></i>: {fav.rating}{" "}
				</p>
				<p>
					<i className="fa-solid fa-bowl-rice"></i> Vegan
				</p>

				{/* !!!TO DO: STILL NEED TO DO FAV FOR HOURS */}
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
					href={fav.address_link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-solid fa-location-dot"></i> {fav.address_link}
				</a>
			</div>
		</div>
	)
};