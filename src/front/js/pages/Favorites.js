import React, { useContext } from "react";
import { Context } from "../store/appContext";

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
								fav={favs}
							/>
						)
					})}
				</div>
			</div>
			<p className="text-center">** The restaurant hours may differ on holidays **</p>
		</div>
	)

};
