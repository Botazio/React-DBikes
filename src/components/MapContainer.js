import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, BicyclingLayer } from '@react-google-maps/api';
import useFetch from "../helpers/useFetch";
import mapStyles from '../fixtures/mapStyles';
import iconGreen from '../fixtures/icon-location-green.png';
import iconRed from '../fixtures/icon-location-red.png';
import iconYellow from '../fixtures/icon-location-yellow.png';
import markerBlue from '../fixtures/marker-user-position.png';
import iconBlueBike from '../fixtures/icon-bike-blue.png';
import iconParking from '../fixtures/icon-parking.png';
import iconBankingTrue from '../fixtures/icon-banking-true.png';
import iconBankingFalse from '../fixtures/icon-banking-false.png';
import iconCenter from '../fixtures/icon-center-focus.png';
import ControlButtons from './ControlButtons';
import SideBar from './SideBar';

const libraries = ["places"];
const containerStyle = {
   position: 'relative',
   width: '100%',
   height: '88vh'
};

const options = {
   styles: mapStyles,
   mapTypeControl: false,
   fullscreenControl: false
}

const center = {
   lat: 53.349804,
   lng: -6.26031
};

export default function MapContainer({ mapKey }) {
   // Loads the map
   const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: mapKey,
      libraries,
      version: "3.42"
   });

   // Fetch the stations
   const { data: stations, isPending: isPendingStations, errorStations } = useFetch('https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=facbcc8b7cb57b3d308cd541f3c1bec268a36aff');

   // Selected marker when the user mouseover a marker (stores a station object)
   const [markerSelected, setMarkerSelected] = useState(null);

   // Selected station when the user clicks on a marker or performs a destination search
   // (stores a station object)
   const [stationSelected, setStationSelected] = useState(null);

   // marker to define the user position
   const [userLocation, setUserLocation] = useState(null);

   // Selected control button to manage what info is displayed on the markers label
   // Default value is available_bikes
   const [buttonSelected, setButtonSelected] = useState("available_bikes");

   // mapRef to use in other parts of the code without triggering rerenders
   const mapRef = React.useRef();
   const onMapLoad = React.useCallback((map) => {
      mapRef.current = map;
   }, []);

   // Error handling when loading the map
   if (loadError) return "Error loading maps";
   if (!isLoaded) return "Loading Maps";

   // Error handling when fetching for the data
   if (errorStations) return "Unable to get the stations data";

   // Display a loading message while fetching for the data
   if (isPendingStations) return "Loading Maps";

   return (
      <div>
         {/* Top center buttons */}
         <ControlButtons buttonSelected={buttonSelected} setButtonSelected={setButtonSelected}></ControlButtons>
         <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            options={options}
            onLoad={onMapLoad}
         >
            {/* Child components, such as markers, info windows, etc. */}
            {buttonSelected !== "bike_paths" && stations && (stations.map((station) => {
               // Logic to handle which control button is clicked

               // Logic to handle the color of the marker 
               let iconType;
               if (station[buttonSelected] < 6) {
                  iconType = iconRed;
               } else if (station[buttonSelected] > 12) {
                  iconType = iconGreen;
               } else {
                  iconType = iconYellow;
               }

               return (<Marker
                  key={'marker' + station.number}
                  position={{
                     lat: station.position.lat,
                     lng: station.position.lng
                  }}
                  name={station.name}
                  icon={{
                     url: iconType,
                     size: new window.google.maps.Size(34, 34),
                     scaledSize: new window.google.maps.Size(34, 34),
                     labelOrigin: new window.google.maps.Point(17, 13),
                  }}
                  banking={station.banking}
                  label={{
                     className: "labelMarker",
                     text: "" + station[buttonSelected] + "",
                     fontSize: "12px",
                     fontFamily: "Roboto, sans-serif",
                  }}
                  onClick={() => setStationSelected(station)}
                  onMouseOver={() => {
                     setMarkerSelected(station);
                  }}
                  onMouseOut={() => {
                     setMarkerSelected(null);
                  }} />)
            }))}

            {/* Display an infowindow if a marker is selected */}
            {markerSelected ? handleInfoWindow(markerSelected) : null}

            {/* In case the user clicks in the geolocation button */}
            {userLocation && (<Marker
               key={'user location'}
               position={{
                  lat: userLocation.lat,
                  lng: userLocation.lng
               }}
               icon={{
                  url: markerBlue,
                  size: new window.google.maps.Size(34, 34),
                  scaledSize: new window.google.maps.Size(34, 34),
                  labelOrigin: new window.google.maps.Point(17, 13),
               }} />)
            }

            {/* In case the user has clicked on the bike paths button */}
            {buttonSelected === "bike_paths" && <BicyclingLayer />}

            {/* Side bar and search system */}
            {stations && <SideBar
               stations={stations}
               map={mapRef}
               setUserLocation={setUserLocation}
               stationSelected={stationSelected}
               setStationSelected={setStationSelected} />}

            {/* Buttons to center the view in Dublin and set the view in the user position */}
            <div
               className="center-view-button"
               onClick={() => centerView(mapRef)}>
               <img
                  src={iconCenter}
                  style={{ "width": "20px", "height": "20px" }}
                  alt={'icon position'} />
            </div>
         </GoogleMap>

      </div>
   );
}

// Function to center the view again in Dublin 
function centerView(mapRef) {
   mapRef.current.panTo(center);
   mapRef.current.setZoom(13);
}

// Function that displays an infowindow 
function handleInfoWindow(marker) {
   var iconBanking = iconBankingFalse;
   var iconOpacity = 0.2;
   // Handles the logic to see if the station has banking available
   if (marker.banking === 1) {
      iconBanking = iconBankingTrue;
      iconOpacity = 1;
   }

   const contentStr = (marker) => {
      return (
         <div className="contentStr">
            <div className="infowindow-station-title">
               <p><b>{marker.name}</b> nº {marker.number}</p>
            </div>
            <div className="station-infowindow">
               <div className="infowindow-subelements">
                  <p><b>{marker.available_bikes}</b></p>
                  <img src={iconBlueBike} style={{ "width": "20px", "height": "20px" }} alt={'blue bike'} />
               </div>
               <div className="infowindow-subelements">
                  <p><b>{marker.available_bike_stands}</b></p>
                  <img src={iconParking} style={{ "width": "20px", "height": "20px" }} alt={'icon parking'} />
               </div>
               <div className="infowindow-subelements">
                  <img src={iconBanking} style={{ "width": "20px", "height": "20px", "opacity": iconOpacity }} alt={'icon banking'} />
               </div>
            </div>
         </div>
      )
   }

   return (
      <InfoWindow
         position={{ lat: (marker.position.lat), lng: marker.position.lng }}
         options={{
            pixelOffset: new window.google.maps.Size(0, -35)
         }}
      >
         <div>{contentStr(marker)}</div>
      </InfoWindow>
   )

}