const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			NYC: [],
			LA: [],
			Houston: [],
			Apify: [],
			Google: [],
			favorites: [],
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
				let houstonRestaurants = [];
				for (let restaurant in data) {
					if (restaurant.city === "Houston") {
						houstonRestaurants.push(restaurant)
					}
				}
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
				store.favorites.push(item)
				setStore(store)
				console.log("Added to Favorites Page", item)
			},
			getFavorites: async (favItem) => {
				let response = await fetch(process.env.BACKEND_URL + "/api/favRestaurants",
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						}
					})
				let data = response.json()
				const store = getStore();
				setStore({ favorites: data });
			},
			deleteFavorites: (index) => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore(store);
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
