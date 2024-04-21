import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.js"


export const NYC = (name) => {
	const { store, actions } = useContext(Context);
	// console.log(store.NYC)

	// const addToFavorites = () => {
	// 	const isFavorite = store.favorites.some(fav => fav === name);
	// 	if (isFavorite) {
	// 		const indexToDelete = store.favorites.findIndex(fav => fav === name);
	// 		if (indexToDelete !== -1) {
	// 			actions.deleteFavorites(indexToDelete);
	// 		}
	// 	} else {
	// 		actions.addFavorite({ name: name, index: 0, city: "NYC" });
	// 	}
	// };

	// const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.city === city);

	return (
		// <div className="container d-flex justify-content-center flex-wrap pt-5">
		// 	{store.NYC.map((restaurant, index) => {
		// 		return (
		// 			<Card img={"https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"} key={index} address={restaurant.address} address_link={restaurant.address_link} city={restaurant.city} hours={restaurant.hours} id={restaurant.id} price_range={restaurant.price_range} rating={restaurant.rating} restaurant_name={restaurant.restaurant_name} restaurant_phone={restaurant.restaurant_phone} url={restaurant.restaurant_phone} />
		// 		)
		// 	})}
		// </div>

		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 mb-4">
					{store.NYC.map((restaurant, index) => {
						return (
							<Card 
								key={index} 
								id={restaurant.id} 
								city={restaurant.city} 
								img_1_url={restaurant.img_1_url} 
								img_2_url={restaurant.img_2_url} 
								img_3_url={restaurant.img_3_url} 
								restaurant_name={restaurant.restaurant_name} 
								url={restaurant.url} 
								call={restaurant.call}
								restaurant_phone={restaurant.restaurant_phone} 
								rating={restaurant.rating} 
								food_type={restaurant.food_type}
								address={restaurant.address} 
								address_link={restaurant.address_link} 
								hours={restaurant.hours} 
								price_range={restaurant.price_range} 
							/>
						)
					})}
				</div>
			</div>
		</div>
	);
};
