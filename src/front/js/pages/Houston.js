import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.js"


export const Houston = (name) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getFavorites();
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}, [])


	return (
		<div>
			<div className="container my-4">
				<div className="row">
					{store.Houston.map((restaurant, index) => {
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
								openingHours={restaurant.openingHours}
								price_range={restaurant.price_range}
							/>
						)
					})}
				</div>
			</div>
			<p className="text-center">** The restaurant hours may differ on holidays **</p>
		</div>
	);
};
