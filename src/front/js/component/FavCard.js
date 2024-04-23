import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";


export const FavCard = (props) => {
	const { store, actions } = useContext(Context);

	const addToFavorites = () => {
		const isFavorite = store.Favorites.some(fav => fav.id === props.id);
		if (isFavorite) {
			const indexToDelete = store.Favorites.findIndex(fav => fav.id === props.id);
			if (indexToDelete !== -1) {
				actions.deleteFavorites(indexToDelete);
				console.log("Deleted from Favorites:", props.restaurant_name);
			}
		} else {
			actions.addFavorite({ ...props });
		}
	};

	const isFavorite = store.Favorites.some(fav => fav.id === props.id);

	const renderOpeningHours = () => {
		console.log('Opening Hours Data:', props.openingHours);

		// Handling Google Maps style array of strings for weekday hours
		if (Array.isArray(props.openingHours) && props.openingHours.every(item => typeof item === 'string')) {
			return (
				<div className="mt-auto">
					<strong>Hours:</strong>
					<table className="table">
						<tbody>
							{props.openingHours.map((text, index) => (
								<tr key={index}>
									<td>{text}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		}
		// Handling structured data with 'days' and 'hours' or 'day' and 'hours'
		else if (Array.isArray(props.openingHours) && props.openingHours.every(hour => typeof hour === 'object' && hour !== null && ('days' in hour || 'day' in hour) && 'hours' in hour)) {
			return (
				<div className="mt-auto">
					<strong>Hours:</strong>
					<table className="table">
						<tbody>
							{props.openingHours.map((hour, index) => (
								<tr key={index}>
									<td>{hour.days || hour.day}</td>
									<td>{hour.hours}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		}
		// Default fallback when no valid format is detected
		else {
			return <div className="mt-auto"><strong>Hours:</strong> Information not available</div>;
		}
	};

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
						<button type="button" className="btn btn-outline-warning btn-heart ms-2" onClick={addToFavorites}>
							<i className="fa-solid fa-trash heartBtn" style={{ color: isFavorite ? '#000000' : '#ffc107' }}></i>
						</button>
					</div>
					<a href={props.url} target="_blank" rel="noopener noreferrer">
						<p><i className="fa-solid fa-globe"></i> {props.url}</p>
					</a>
					<a href={`tel:${props.call}`}>
						<p><i className="fa-solid fa-phone"></i> {props.restaurant_phone}</p>
					</a>
					<p><i className="fa-solid fa-face-smile"></i> {props.rating}</p>
					<p><i className="fa-solid fa-hand-holding-dollar"></i> {props.price_range}</p>
					<p><i className="fa-solid fa-bowl-rice"></i> {props.food_type}</p>
					{renderOpeningHours()}
					<div className="mt-auto">
						<a href={props.address_link} target="_blank" rel="noopener noreferrer">
							<i className="fa-solid fa-location-dot"></i> {props.address}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}