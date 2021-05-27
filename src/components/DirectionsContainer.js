import React from 'react';
import {
   DirectionsService,
   DirectionsRenderer,
} from '@react-google-maps/api';
import TransportTypeButtons from './TransportTypeButtons';
import DestinationSearchBar from './DestinationSearchBar';
import OriginSearchBar from './OriginSearchBar';
import iconPosition from '../fixtures/icon-position.png';
import iconRefresh from '../fixtures/icon-refresh.png';
import iconDirection from '../fixtures/icon-direction.png';


function DirectionsContainer({ active, setActive, stationSelected, setStationSelected, stations, map, setUserLocation }) {
   const [response, setResponse] = React.useState(null);
   const [travelMode, setTravelMode] = React.useState('DRIVING');
   const [origin, setOrigin] = React.useState(null);
   const [destination, setDestination] = React.useState(null);
   const [cleanInput, setCleanInput] = React.useState(false);
   const [originTextValue, setOriginTextValue] = React.useState("");


   const panTo = React.useCallback(({ lat, lng }) => {
      map.current.panTo({ lat, lng });
      map.current.setZoom(14);
   })

   const directionsCallback = React.useCallback((res) => {
      if (res !== null) {
         if (res.status === 'OK') {
            setResponse(res)
         } else {
            console.log('response: ', res)
         }
      }
   }, [])

   const directionsServiceOptions = React.useMemo(() => {
      return {
         origin: origin,
         destination: destination,
         travelMode: travelMode,
      }
   }, [origin, destination, travelMode])

   const directionsRendererOptions = React.useMemo(() => {
      return {
         directions: response,
         markerOptions: {
            zIndex: 100000,
            clickable: false,
         },
         polylineOptions: {
            strokeColor: "#1A73E8",
            zIndex: 10000,
            strokeWeight: "5",
         },
      }
   }, [response])

   function handleClassTag() {
      if (active) {
         return "active";
      }
      return "inactive";
   }

   return (
      <>
         { active && (
            <div
               className="close-search-button"
               onClick={() => { cleanSearch(); setActive(false) }}>
               <img
                  alt={'close icon'} />
            </div>
         )
         }

         {/* A tag is used in this case because the side bar styles are different depending if it is active or not */}
         <div className={"directions-container-" + handleClassTag()}>

            {active && (<div>
               <TransportTypeButtons setTravelMode={setTravelMode} />
            </div>)}

            {active && (<div className={"search-bar-container"}>
               <img
                  src={iconPosition}
                  style={{ cursor: "pointer", "width": "20px", "height": "20px" }}
                  alt={'position icon'}
                  onClick={() => getUserPosition()} />
               <OriginSearchBar
                  setOrigin={setOrigin}
                  cleanInput={cleanInput}
                  textValue={originTextValue}
                  setTextValue={setOriginTextValue} />
            </div>)}


            <div className="search-bar-container">
               {active && (<img
                  src={iconRefresh}
                  style={{ cursor: "pointer", "width": "20px", "height": "20px" }}
                  alt={'refresh icon'}
                  onClick={() => cleanSearch()} />)}

               <DestinationSearchBar
                  active={active}
                  setActive={setActive}
                  stations={stations}
                  stationSelected={stationSelected}
                  setStationSelected={setStationSelected}
                  cleanInput={cleanInput}
                  setDestination={setDestination} />
            </div>

            {!active && (
               <div
                  className="directions-button rounded"
                  onClick={() => { setActive(true) }}>
                  <img
                     src={iconDirection}
                     style={{ "width": "20px", "height": "20px" }}
                     alt={'directions icon'} />
               </div>
            )}

            {/* Render the directions on the map if the user introduces origin and destination */}
            {origin && destination && (
               <DirectionsService
                  options={directionsServiceOptions}
                  callback={directionsCallback}
               />
            )}

            {response !== null && (
               <DirectionsRenderer options={directionsRendererOptions} />
            )}
         </div>
      </>
   )

   function cleanSearch() {
      setResponse(null);
      setOrigin(null);
      setDestination(null);
      setUserLocation(null);
      setStationSelected(null);
      setOriginTextValue("");

      if (cleanInput) setCleanInput(false);
      if (!cleanInput) setCleanInput(true);
   }

   function getUserPosition() {
      navigator.geolocation.getCurrentPosition((position) => {
         setOriginTextValue("Current user location");
         setOrigin({
            lat: position.coords.latitude,
            lng: position.coords.longitude
         });
         setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
         });
         panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude
         });
      }, () => null)
   }
}

export default React.memo(DirectionsContainer);