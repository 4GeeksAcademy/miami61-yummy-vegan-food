import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { FavCard } from "../component/FavCard.js"

export const Favorites = (fav) => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getFavorites()
		console.log(store.Favorites);
	}, [])

	return (
		<div>
			<div className="container my-4">
				<div className="row">
					{store.Favorites.map((favs, index) => {
						return (
							<FavCard
								key={index}
								id={favs.id}
								city={favs.restaurant.city}
								img_1_url={favs.restaurant.img_1_url}
								img_2_url={favs.restaurant.img_2_url}
								img_3_url={favs.restaurant.img_3_url}
								restaurant_name={favs.restaurant.restaurant_name}
								url={favs.restaurant.url}
								call={favs.restaurant.call}
								restaurant_phone={favs.restaurant.restaurant_phone}
								rating={favs.restaurant.rating}
								price_range={favs.restaurant.price_range}
								food_type={favs.restaurant.food_type}
								openingHours={favs.restaurant.openingHours}
								address_link={favs.restaurant.address_link}
								address={favs.restaurant.address}
							/>
						)
					})}
				</div>
			</div>
			<p className="text-center">** The restaurant hours may differ on holidays **</p>
		</div>
	)

};
