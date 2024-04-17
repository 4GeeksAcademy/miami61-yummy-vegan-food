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
			getNYCRestaurants: () => {

			},
			getLARestaurants: () => {

			},
			getHoustonRestaurants: () => {

			},
			getApifyRestaurants: () => {

			},
			getGoogleRestaurants: () => {

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

			// working on get and delete Favorites
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

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
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
