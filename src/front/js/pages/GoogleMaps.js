import React, { useCallback, useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

export const GoogleMaps = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Using environment variable
    libraries: ["places"]
  });

  const [map, setMap] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = (placeId) => {
    setActiveMarker(activeMarker === placeId ? null : placeId);
  };

  const handleSearch = () => {
    if (!map) return;
    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      query: `vegan restaurants in ${searchTerm}`,
      location: map.center,
      radius: '1000',
      type: ['restaurant'],
      fields: ['name', 'geometry', 'formatted_address']  // Ensure these fields are requested
    };
    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSearchResults(results);
        map.panTo(results[0].geometry.location);
      }
    });
  };

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

  return isLoaded ? (
    <div>
      <div>
        <input
          type="text"
          placeholder='Enter city, state, or zip code'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={getCurrentLocation}>Use Current Location</button>
      </div>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '60vh' }}
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
          <h3>{place.name}</h3>
          <p>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.formatted_address)}`} target="_blank" rel="noopener noreferrer">
              {place.formatted_address}
            </a>
          </p>
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

