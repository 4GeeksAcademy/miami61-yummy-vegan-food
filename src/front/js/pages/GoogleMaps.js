import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class GoogleMaps extends Component {
    componentDidMount() {
        console.log(">>> google maps:", this.props.google);
     }
     componentDidUpdate (prevProps, prevState) {
        console.log(">>> did update:", prevProps, prevState, this.props.google);
    };
  render() {
    const mapStyles = {
      width: '100%',
      height: '60vh'
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 34.0522,
          lng: -118.2437
        }}
      >
        <Marker position={{ lat: 34.0522, lng: -118.2437 }} />
      </Map>
    );
  }
}
const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
  )
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWpLg3Y4oQxsbUyCgYfQh98SwPQlt263Q',
  LoadingContainer:LoadingContainer // Replace with your actual API key
})(GoogleMaps);
