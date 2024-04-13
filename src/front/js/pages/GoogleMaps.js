import React, { useCallback, useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
export const GoogleMaps = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBWpLg3Y4oQxsbUyCgYfQh98SwPQlt263Q"
  });
  const [map, setMap] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState(null); // Change default value to null
  const [currentLocation, setCurrentLocation] = useState(null); // Add state for current location
  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);
  const handleSearch = () => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=AIzaSyBWpLg3Y4oQxsbUyCgYfQh98SwPQlt263Q`)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setSearchLocation({ lat, lng });
          setCurrentLocation(undefined)
        }
      });
  };
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        setSearchLocation (undefined)
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
        center={currentLocation || searchLocation} // Use current location if available
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {currentLocation && <Marker position={currentLocation} />} {/* Display marker for current location */}
        {searchLocation && <Marker position={searchLocation} />} {/* Display marker for searched location */}
      </GoogleMap>
    </div>
  ) : <LoadingContainer />;
};
const LoadingContainer = () => (
  <div>Loading map...</div>
);







