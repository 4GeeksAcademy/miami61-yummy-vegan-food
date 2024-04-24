const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			NYC: [],
			LA: [],
			Houston: [],
			Apify: [],
			Google: [],
			Favorites: [],
			token: sessionStorage.getItem('token')
		},
		actions: {
			getNYCRestaurants: async () => {
				let response = await fetch(process.env.BACKEND_URL + "/api/restaurant?city=NYC");
				let data = await response.json();

				setStore({ NYC: data })
			},
			getLARestaurants: async () => {
				let response = await fetch(process.env.BACKEND_URL + "/api/restaurant?city=LA");
				let data = await response.json();

				setStore({ LA: data })
			},
			getHoustonRestaurants: async () => {
				let response = await fetch(process.env.BACKEND_URL + "/api/restaurant?city=Houston");
				let data = await response.json();

				setStore({ Houston: data })
			},
			getApifyRestaurants: async () => {
				let response = await fetch(process.env.BACKEND_URL + "/api/restaurant");
				let data = await response.json();
				let apifyRestaurants = [];
				for (let restaurant in data) {
					if (restaurant.city === "Apify") {
						apifyRestaurants.push(restaurant)
					}
				}
				setStore({ Apify: apifyRestaurants })

			},
			getGoogleRestaurants: async () => {
				let response = await fetch(process.env.BACKEND_URL + "/api/restaurant");
				let data = await response.json();
				let googleRestaurants = [];
				for (let restaurant in data) {
					if (restaurant.city === "Google") {
						googleRestaurants.push(restaurant)
					}
				}
				setStore({ Google: googleRestaurants })
			},
			// addFavorite: async (body) => {
			// 	const store = getStore();
			// 	const response = await fetch(
			// 		process.env.BACKEND_URL + "/api/favRestaurants", {
			// 		method: "POST",
			// 		body: JSON.stringify(body),
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 			"Authorization": "Bearer " + store.token
			// 		}
			// 	}
			// 	);
			// 	return response
			// },

			addFavorite: async (item) => {

				const store = getStore();
				// Check if the item already exists in Favorites
				const isFavorite = store.Favorites.some(fav => fav.id === item.id);

				if (!isFavorite) {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/favRestaurants", {
						method: "POST",
						body: JSON.stringify(item),
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + store.token
						}
					})
					const data = response.json()
					setStore({ Favorites: [...store.Favorites, item] });
					console.log("Added to Favorites Page", item);
				}
			},
			// addFavorite: async (item) => {
			// 	const store = getStore();
			// 	// Check if the item already exists in Favorites
			// 	const isFavorite = store.Favorites.some(fav => fav.id === item.id);
			// 	if (!isFavorite) {
			// 		setStore({ Favorites: [...store.Favorites, item] });
			// 		console.log("Added to Favorites Page", item);
			// 	}
			// },
			// ----------------------
			// getFavorites: async (favItem) => {
			// 	let response = await fetch(process.env.BACKEND_URL + "/api/favRestaurants",
			// 		{
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 				Authorization: "Bearer " + store.token
			// 			}
			// 		})
			// 	let data = response.json()
			// 	const store = getStore();
			// 	setStore({ Favorites: data });
			// },
			getFavorites: async () => {
				const store = getStore();
				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/favRestaurants", {
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						}
					});

					if (!response.ok) {
						throw new Error('Failed to fetch favorites');
					}

					let data = await response.json();
					setStore({ Favorites: data });
				} catch (error) {
					console.error('Error fetching favorites:', error);
				}
			},
			// deleteFavorites: (index) => {
			// 	const store = getStore();
			// 	store.Favorites.splice(index, 1);
			// 	setStore({ Favorites: [...store.Favorites] });
			// },
			deleteFavorites: (index) => {
				const store = getStore();
				const updatedFavorites = store.Favorites.filter((_, i) => i !== index);
				setStore({ Favorites: updatedFavorites });
			},

			logout: () => {
				sessionStorage.removeItem("token");
			},
			login: async (email, password) => {
				// Check if email and password are provided
				if (email && password) {
					// Make a request to check if email and password are in the database
					let response = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: { 'Content-Type': "application/json" },
						body: JSON.stringify({
							email: email,
							password: password,
						})
					})
					if (response.status < 200 || response.status >= 300) {
						throw new Error("There was an error signing in");
					}
					const data = await response.json();

					sessionStorage.setItem("token", data.token);

				} else {
					// Email or password is missing
					console.log("Please enter both email and password.");
				}
			}
		}
	};
};

export default getState;
