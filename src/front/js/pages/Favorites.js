import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = (fav) => {
	const { store, actions } = useContext(Context)
	console.log(store.Favorites)

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 mb-4">
						<div>
							{store.fav.map((favs, index) => {
								return (
									<Card key = {index} fav = {favs} />
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)

};