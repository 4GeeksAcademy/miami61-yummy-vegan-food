import React, { useCallback, useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

export const GoogleMaps = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBWpLg3Y4oQxsbUyCgYfQh98SwPQlt263Q", libraries: ["places"]

  });

  const [map, setMap] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchLocation, setSearchLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleSearch = async() => {
    // Use Google Places API Text Search to search for vegan restaurants
    // const request = {
    //   //location: searchTerm,
    //   radius:1000,
    //   type:["restaurants","vegan"]
    // }
    const request = {
      textQuery: "vegan restaurant in" + searchTerm,
      fields: ["displayName", "location", "businessStatus"],
      includedType: "restaurant",
      language: "en-US",
      maxResultCount: 8,
      region: "us",
     };
     const {Place} = await window.google.maps.importLibrary("places");
    // const service = new window.google.maps.places.PlacesService(map);
    // service.textSearch(request, (results, status) => console.log(results));
    const { places } = await Place.searchByText(request);
    console.log("THESE ARE THE PLACES",places)
     setSearchResults (places)
     setSearchLocation(places[0].Fg.location);
    // fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=vegan+restaurants&location=${searchLocation.lat},${searchLocation.lng}&radius=10000&key=AIzaSyBWpLg3Y4oQxsbUyCgYfQh98SwPQlt263Q`,{
    //   headers:{"Content-Type": "application/json"},
      
    //   mode: "no-cors"
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Process the response and extract restaurant locations
    //     // For simplicity, let's assume the response format is as expected
    //     // You may need to adjust this based on the actual response format
    //     const restaurantLocations = data.results.map(result => ({
    //       lat: result.geometry.location.lat,
    //       lng: result.geometry.location.lng
    //     }));
    //     debugger
    //     // Update the search results on the map
    //     //setSearchResults(restaurantLocations);
    //   })
    //   .catch(error=>console.log(error, "THIS IS THE ERROR"));

  };

  const getCurrentLocation = () => {
    // Get the user's current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        setSearchLocation({ lat: latitude, lng: longitude });
      });
    }
  };

  useEffect(() => {
    if (isLoaded && map) {
      getCurrentLocation(); // Get current location when map is loaded
    }
  }, [isLoaded, map]);

  return isLoaded ? (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <button onClick={getCurrentLocation}>Use Current Location</button>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '60vh' }}
        center={searchLocation|| currentLocation }
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {currentLocation && <Marker position={currentLocation} />}
        {/* Display markers for search results */}
        {searchResults?.map((result, index) => (
          <Marker key={index} position={{ lat: result.Fg.location.lat, lng: result.Fg.location.lng }} />
        ))}
      </GoogleMap>
    </div>
  ) : <LoadingContainer />;
};

const LoadingContainer = () => (
  <div>Loading map...</div>
);
