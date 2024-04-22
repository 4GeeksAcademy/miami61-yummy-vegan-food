import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.js"

export const Favorites = (fav) => {
	const { store, actions } = useContext(Context)
	console.log(store.Favorites)

	return (
		<div>
			<div className="container my-4">
				<div className="row">
					{store.Favorites.map((favs, index) => {
						return (
							<Card
								key={index}
								id={favs.id}
								city={favs.city}
								img_1_url={favs.img_1_url}
								img_2_url={favs.img_2_url}
								img_3_url={favs.img_3_url}
								restaurant_name={favs.restaurant_name}
								url={favs.url}
								call={favs.call}
								restaurant_phone={favs.restaurant_phone}
								rating={favs.rating}
								price_range={favs.price_range}
								food_type={favs.food_type}
								openingHours={favs.openingHours}
								address_link={favs.address_link}
								address={favs.address}
							/>
						)
					})}
				</div>
			</div>
			<p className="text-center">** The restaurant hours may differ on holidays **</p>
		</div>
	)

};
