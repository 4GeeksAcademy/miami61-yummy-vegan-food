import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useJsApiLoader, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import "../../styles/home.css";


export const GoogleMaps = () => {
	const { store, actions } = useContext(Context);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries: ["places"]
	});

	const [map, setMap] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [currentLocation, setCurrentLocation] = useState(null);
	const [activeMarker, setActiveMarker] = useState(null);
	const [selectedPlace, setSelectedPlace] = useState(null);
	const [placeDetails, setPlaceDetails] = useState(null);
	const onLoad = useCallback((mapInstance) => {
		setMap(mapInstance);
	}, []);

	const onUnmount = useCallback(() => {
		setMap(null);
	}, []);

	const handleMarkerClick = (placeId) => {
		setActiveMarker(activeMarker === placeId ? null : placeId);
		setSelectedPlace(placeId);

		console.log(placeId);
	};

	const handleSearch = () => {
		if (!map) return;
		const service = new window.google.maps.places.PlacesService(map);
		const request = {
			query: `vegan restaurants in ${searchTerm}`,
			location: map.center,
			radius: '1000',
			type: ['restaurant'],
			fields: ['name', 'geometry', 'formatted_address', 'place_id']  // Ensure these fields are requested
		};
		service.textSearch(request, (results, status) => {
			if (status === window.google.maps.places.PlacesServiceStatus.OK) {
				setSearchResults(results);
				map.panTo(results[0].geometry.location);
			}
		});
	};

	const getPlaceDetails = () => {
		if (map && selectedPlace) {
			const service = new window.google.maps.places.PlacesService(map);
			const request = {
				placeId: selectedPlace,
				fields: ['name', 'formatted_address', 'opening_hours', 'rating', 'website', 'photos', 'formatted_phone_number', 'price_level']
			};
			service.getDetails(request, (place, status) => {
				if (status === window.google.maps.places.PlacesServiceStatus.OK) {
					setPlaceDetails(place);
				}
			});
		}
	};

	useEffect(() => {
		if (isLoaded && map) {
			getCurrentLocation();
		}
	}, [isLoaded, map]);

	useEffect(() => {
		getPlaceDetails();
	}, [map, selectedPlace]);


	const getCurrentLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				setCurrentLocation(pos);
				map && map.setCenter(pos);
			});
		}
	};

	useEffect(() => {
		if (isLoaded && map) {
			getCurrentLocation();
		}
	}, [isLoaded, map]);


	// edit these functions to make the favs work on googleMaps
	const addToFavorites = (place) => {
		const createMapLink = (address) => {
			const baseUrl = "https://www.google.com/maps/search/?api=1";
			const query = encodeURIComponent(address);
			return `${baseUrl}&query=${query}`;
		}
		const formatPhoneNumber = (phoneNumber) => {
			// Remove all non-numeric characters from the phone number
			const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
			return `+1${numericPhoneNumber}`;
		};

		// function extractCity(addressComponents) {
		// 	if (!addressComponents || addressComponents.length === 0) {
		// 		return ''; // Return an empty string or handle the case appropriately
		// 	}

		// 	const cityComponent = addressComponents.find(component =>
		// 		component.types.includes('locality')
		// 	);
		// 	return cityComponent ? cityComponent.long_name : '';
		// }


		const body = {
			id: place.place_id,
			img_1_url: "",
			img_2_url: "",
			img_3_url: "",
			// city: extractCity(placeDetails.formatted_address),
			restaurant_name: place.name,
			url: placeDetails.website,
			call: formatPhoneNumber(placeDetails.formatted_phone_number),
			restaurant_phone: placeDetails.formatted_phone_number,
			// example below for code for empty results:
			// restaurant_phone: placeDetails ? placeDetails.formatted_phone_number : "",
			rating: placeDetails.rating,
			price_range: '$'.repeat(placeDetails.price_level),
			food_type: "Vegan",
			openingHours: placeDetails.opening_hours?.weekday_text.join(', '),
			// openingHours: placeDetails.opening_hours?.weekday_text.join(', '),
			address_link: createMapLink(place.formatted_address),
			address: place.formatted_address,
		};
		const isFavorite = store.Favorites?.some(fav => fav.id === place.place_id);
		if (isFavorite) {
			const indexToDelete = store.Favorites.findIndex(fav => fav.id === place.place_id);
			if (indexToDelete !== -1) {
				actions.deleteFavorites(indexToDelete);
				console.log("Deleted from Favorites:", place.place_id)
			}
		} else {
			actions.addFavorite(body);
		}
	};


	const isFavorite = (placeId) => {
		return store.Favorites?.some(fav => fav.id === placeId);
	};
	return isLoaded ? (
		<div id="googleMapsApiDiv">
			<div className='googleSearchDiv'>
				<input
					type="text"
					placeholder='Enter city, state, or zip code'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyDown={(event) => {
						if (event.key === 'Enter') { handleSearch(); }
					}}
				/>
				<button className='googleSearchBtn' onClick={handleSearch}>Search</button>
				<button onClick={getCurrentLocation}>Use Current Location</button>
			</div>


			<GoogleMap
				mapContainerStyle={{ width: '100%', height: '80vh' }}
				center={currentLocation || map?.center}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>

				{currentLocation && <Marker position={currentLocation} />}
				{searchResults.map((place) => (
					<Marker key={place.place_id} position={place.geometry.location} onClick={() => handleMarkerClick(place.place_id)}>
						{activeMarker === place.place_id && (
							<InfoWindow onCloseClick={() => setActiveMarker(null)}>
								<div>
									<div className="d-flex justify-content-between">
										<h3>{place.name}</h3>
										<button type="button" className="btn btn-outline-warning btn-heart" onClick={() => addToFavorites(place)}>
											<i className="fa-solid fa-heart heartBtn" style={{ color: isFavorite ? '#cc0020' : '#ffc107' }}></i>
										</button>
									</div>
									<p>
										<a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.formatted_address)}`} target="_blank" rel="noopener noreferrer">
											{place.formatted_address}
										</a>
									</p>
									{placeDetails && (
										<div>
											<p>Rating: {placeDetails.rating}</p>
											<p>Phone: {placeDetails.formatted_phone_number}</p>
											<p>Price Range: {'$'.repeat(placeDetails.price_level)}</p>
											<p>Opening Hours: {placeDetails.opening_hours?.weekday_text.join(', ')}</p>
											{placeDetails.website && <p>Website: <a href={placeDetails.website} target="_blank" rel="noopener noreferrer">{placeDetails.website}</a></p>}
											{placeDetails.photos && placeDetails.photos.map((photo, index) => (
												<img key={index} src={photo.getUrl()} alt={`Photo ${index}`} />
											))}
										</div>
									)}


								</div>
							</InfoWindow>
						)}
					</Marker>
				))}



			</GoogleMap>
		</div>
	) : <LoadingContainer />;
};

const LoadingContainer = () => (
	<div>Loading map...</div>
);

