import React, { useCallback, useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

export const GoogleMaps = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBWpLg3Y4oQxsbUyCgYfQh98SwPQlt263Q"
  });
  const [map, setMap] = useState(null)
  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = useCallback((map) => {
    setMap(null);
  }, [])
  const mapStyles = {
    width: '100%',
    height: '60vh'
  };
  const center = {
    lat: 34.0522,
    lng: -118.2437
  };
  useEffect(() => {
    console.log(">>> props:", props);
  }, [props]);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyles}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      
      <Marker position={{ lat: 34.0522, lng: -118.2437 }} />
    </GoogleMap>
  ) : <LoadingContainer />;
};

const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
);







