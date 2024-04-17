import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = (fav) => {
	const { store, actions } = useContext(Context)
	console.log(store.Favorites)

	return (
	store.fav.map((favs, index) => {
		return (
	// card < favorites card(imported) 
	// key = {index}
		console.log("fav testing")
	)
	})
)};