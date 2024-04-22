import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";


export const Card = (props) => {
	const { store, actions } = useContext(Context);
	// console.log(props)
	const addToFavorites = () => {
		const isFavorite = store.Favorites.some(fav => fav.id === props.id);
		if (isFavorite) {
			const indexToDelete = store.Favorites.findIndex(fav => fav.id === props.id);
			if (indexToDelete !== -1) {
				actions.deleteFavorites(indexToDelete);

				console.log("Deleted from Favorites:", props.restaurant_name)
			}
		} else {
			actions.addFavorite({ ...props });
		}
	};
	const isFavorite = store.Favorites.some(fav => (fav.id === props.id) || (fav.id === props.city + "'s " + props.title));

	const carousel = props.img_1_url !== "" && (
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
	);

	return (
		<div key={props.id} className="col-lg-4 col-md-6 mb-4">
			<div className="card h-100 d-flex flex-column bg-white">
				{/* carousel starts here */}
				{carousel}
				{/* restaurant info starts here */}
				<div className="card-body d-flex flex-column justify-content-between">
					<div className="d-flex justify-content-between">
						<h2 className="mb-3">{props.restaurant_name}</h2>
						<button type="button" className="btn btn-outline-warning btn-heart ms-2" style={{ width: "42px", height: "48px" }} onClick={addToFavorites}>
							<i className="fa-solid fa-heart heartBtn" style={{ color: isFavorite ? '#cc0020' : '#ffc107' }}></i>
						</button>
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
						<i className="fa-solid fa-hand-holding-dollar"></i>{" "}{props.price_range}
					</p>
					<p>
						<i className="fa-solid fa-bowl-rice"></i>{" "}{props.food_type}
					</p>

					{props.openingHours && (
						<table className="w-100">
							<tbody>
								{props.openingHours.map((props, index) => (
									<tr key={index}>
										<td className="fw-semibold pe-2">{index === 0 ? "OPEN:" : ""}</td>
										<td>{props.day}{props.days}</td>
										<td>{props.hours}</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
					<div className="mt-auto">
						<a
							href={props.address_link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-solid fa-location-dot"></i>{" "}{props.address}
						</a>
					</div>
				</div>
			</div>
		</div>
	)
};