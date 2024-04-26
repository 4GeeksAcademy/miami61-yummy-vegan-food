const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			NYC: [],
			LA: [],
			Houston: [],
			Apify: [],
			Google: [],
			Favorites: [],
			token: localStorage.getItem('token')
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

			addFavorite: async (item) => {

				const store = getStore();
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
					const data = await response.json()
					const actions = getActions()
					actions.getFavorites()
					// setStore({ Favorites: [...store.Favorites, item] });
					// console.log("Added to Favorites Page", item);
				}
			},

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
			// ---------------------
			// deleteFavorites: (index) => {
			// 	const store = getStore();
			// 	const updatedFavorites = store.Favorites.filter((_, i) => i !== index);
			// 	setStore({ Favorites: updatedFavorites });
			// },
			deleteFavorites: async (id) => {
				let store = getStore();
				const response = await fetch(`${process.env.BACKEND_URL}/api/favRestaurants/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + localStorage.getItem('token')
					}
				});

				if (!response.ok) {
					throw new Error('Failed to delete favorite');
				}
				else {
					window.location.reload()
				}
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({
					token: undefined
				})
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
					setStore({
						token: data.token
					})
					localStorage.setItem("token", data.token);
					return true
				} else {
					// Email or password is missing
					console.log("Please enter both email and password.");
				}
			},
			checkIfUserLoggedIn: () => {
				const token = localStorage.getItem('token')
				if (token) setStore({
					token: token
				})
			}
		}
	};
};

export default getState;
