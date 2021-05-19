import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import CustomMarker from './CustomMarker';

const mapStyles = {
  width: '100%',
  height: '88vh'
};

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '88vh'
};


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    isPending: true,
    error: {},
    stations: []
  };

  componentDidMount() {
    fetch('http://localhost:9000/stations', {
      method: 'GET'
    }).then(res => {
      if (!res.ok) {
        throw Error('could not fetch the data for that resource');
      }
      return res.json();
    })
      .then(data => {
        this.setState({
          stations: data,
          isPending: false
        })
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch abort');
        }
        else {
          this.setState({
            isPending: false,
            error: err.message
          })
        }
      })
  };


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={
          {
            lat: 53.349804,
            lng: -6.26031
          }
        }
        mapTypeControl={false}
        onClick={this.onMapClicked}>
        { this.state.stations && this.state.stations.map((station) => {

          return <CustomMarker station={station} {...this.props} />
        })
        }
      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD80-o7Dp_KBO_yhAL9QuUtF7BQL-c5v54'
})(MapContainer);