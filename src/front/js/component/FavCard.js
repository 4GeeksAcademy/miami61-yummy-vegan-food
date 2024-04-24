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

	// Rendering "Not Available" for each prop except openingHours
	// const renderNotAvailable = () => {
	// 	return Object.entries(props).map(([key, value]) => {
	// 		console.log(`${key}: ${value}`);
	// 		if (key !== 'openingHours' && (value === "" || value === "undefined")) {
	// 			// return <div key={key}> Not Available</div>;
	// 			// return " Not Available";
	// 			// return <div key={`${key}-${index}`}> Not Available</div>;

	// 		} else {
	// 			return null;
	// 		}
	// 	});
	// };
	// ---------------------------------------------
	// const notAvailable = (props) => {
	// 	if (props.id === "" && props.id === null && props.id === undefined) {
	// 		return "Not Available"
	// 	}
	// 	if (props.restaurant_name === "" && props.restaurant_name === null && props.restaurant_name === undefined) {
	// 		return "Not Available"
	// 	}
	// 	if (props.url === "" && props.url === null && props.url === undefined) {
	// 		return "Not Available"
	// 	}
	// 	if (props.restaurant_phone === "" && props.restaurant_phone === null && props.restaurant_phone === undefined) {
	// 		return <p>Not Available</p>
	// 	}
	// 	if (props.rating === "" && props.rating === null && props.rating === undefined) {
	// 		return "Not Available"
	// 	}
	// 	if (props.price_range === "" && props.price_range === null && props.price_range === undefined) {
	// 		return <div>Not Available</div>
	// 	}
	// 	if (props.food_type === "" && props.food_type === null && props.food_type === undefined) {
	// 		return "Not Available"
	// 	}
	// 	if (props.address === "" && props.address === null && props.address === undefined) {
	// 		return "Not Available"
	// 	}
	// };

	const renderOpeningHours = () => {
		console.log('Opening Hours Data:', props.openingHours);
		console.log(props);

		// Handling Google Maps style array of strings for weekday hours
		if (Array.isArray(props.openingHours) && props.openingHours.every(item => typeof item === 'string')) {
			return (
				<div className="mb-3">
					<strong>Hours:</strong>
					<table>
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
				<div className="mb-3">
					<strong>Hours:</strong>
					<table>
						<tbody>
							{props.openingHours.map((hour, index) => (
								<tr key={index}>
									<td>{hour.days || hour.day}: {hour.hours}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		}
		// Default fallback when no valid format is detected
		else {
			if (props.openingHours === "") {
				return <div className="mb-3"><strong>Hours:</strong> Information not available</div>;
			} else {
				// Otherwise, return the default fallback
				return <div className="mb-3"><strong>Hours:</strong> Information not available</div>;
			}
		}
	};

	// const carousel = props.img_1_url !== "" && (
	// 	<div
	// 		id={`carousel${props.id}`}
	// 		className="carousel slide"
	// 		data-bs-ride="carousel"
	// 	>
	// 		<div className="carousel-inner">
	// 			<div className="carousel-item active">
	// 				<img
	// 					className="d-block w-100"
	// 					style={{
	// 						width: "300px",
	// 						height: "300px",
	// 						objectFit: "cover",
	// 					}}
	// 					src={props.img_1_url}
	// 					alt="First slide"
	// 				/>
	// 			</div>
	// 			<div className="carousel-item">
	// 				<img
	// 					className="d-block w-100"
	// 					style={{
	// 						width: "300px",
	// 						height: "300px",
	// 						objectFit: "cover",
	// 					}}
	// 					src={props.img_2_url}
	// 					alt="Second slide"
	// 				/>
	// 			</div>
	// 			<div className="carousel-item">
	// 				<img
	// 					className="d-block w-100"
	// 					style={{
	// 						width: "300px",
	// 						height: "300px",
	// 						objectFit: "cover",
	// 					}}
	// 					src={props.img_3_url}
	// 					alt="Third slide"
	// 				/>
	// 			</div>
	// 		</div>
	// 		<button
	// 			className="carousel-control-prev"
	// 			type="button"
	// 			data-bs-target={`#carousel${props.id}`}
	// 			data-bs-slide="prev"
	// 		>
	// 			<span
	// 				className="carousel-control-prev-icon"
	// 				aria-hidden="true"
	// 			>
	// 			</span>
	// 			<span className="visually-hidden">Previous</span>
	// 		</button>
	// 		<button
	// 			className="carousel-control-next"
	// 			type="button"
	// 			data-bs-target={`#carousel${props.id}`}
	// 			data-bs-slide="next"
	// 		>
	// 			<span
	// 				className="carousel-control-next-icon"
	// 				aria-hidden="true"
	// 			>
	// 			</span>
	// 			<span className="visually-hidden">Next</span>
	// 		</button>
	// 	</div>
	// );

	return (
		<div key={props.id} className="col-lg-4 col-md-6 mb-4">
			<div className="card h-100 d-flex flex-column bg-white">
				{/* carousel starts here */}
				{/* {carousel} */}
				{/* restaurant info starts here */}
				<div className="card-body d-flex flex-column justify-content-between">
					<div className="d-flex justify-content-between">
						<h2 className="mb-3">{props.restaurant_name}</h2>
						<button type="button" className="btn btn-outline-warning btn-heart ms-2" onClick={addToFavorites} style={{ width: "42px", height: "48px" }}>
							<i className="fa-solid fa-trash heartBtn" style={{ color: isFavorite ? '#000000' : '#ffc107' }}></i>
						</button>
					</div>
					<a href={props.url} target="_blank" rel="noopener noreferrer">
						<p><i className="fa-solid fa-globe"></i> {props.url}</p>
					</a>
					<a href={`tel:${props.call}`}>
						<p><i className="fa-solid fa-phone"></i> {props.restaurant_phone}</p>
					</a>
					{/* <p><i className="fa-solid fa-face-smile"></i> {props.rating}</p> */}
					<p>
						<i className="fa-solid fa-face-smile"></i>{" "}
						{props.rating % 1 === 0 ? `${props.rating}.0` : props.rating}{" "}
						{'★'.repeat(Math.floor(props.rating))}
						{props.rating % 1 >= 0.5 ? '★' : ''}
					</p>
					<p><i className="fa-solid fa-hand-holding-dollar"></i> {props.price_range}</p>
					<p><i className="fa-solid fa-bowl-rice"></i> {props.food_type}</p>
					{renderOpeningHours()}
					{/* {renderNotAvailable()} */}
					{/* {notAvailable(props)} */}
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