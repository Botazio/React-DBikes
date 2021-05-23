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
import iconClose from '../fixtures/icon-close.png';


function DirectionsContainer({ active, setActive, stations, map, setUserLocation }) {
   const [response, setResponse] = React.useState(null);
   const [travelMode, setTravelMode] = React.useState('DRIVING');
   const [origin, setOrigin] = React.useState(null);
   const [destination, setDestination] = React.useState(null);
   const [cleanInput, setCleanInput] = React.useState(false);


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
         }
      }
   }, [response])

   function handleClassTag() {
      if (active) {
         return "active";
      }
      return "inactive";
   }

   return (
      <div>
         <div className={handleClassTag()}>
            <div
               className="close-search-button"
               onClick={() => { cleanSearch(); setActive(false) }}>
               <img
                  src={iconClose}
                  style={{ cursor: "pointer", "width": "15px", "height": "15px" }}
                  alt={'close icon'} />
            </div>
         </div>
         <div className={"directions-container-" + handleClassTag()}>
            <div className={handleClassTag()}>
               <TransportTypeButtons setTravelMode={setTravelMode} />
            </div>
            <div className={"search-bar-container " + handleClassTag()}>
               <img
                  className={handleClassTag()}
                  src={iconPosition}
                  style={{ cursor: "pointer", "width": "20px", "height": "20px" }}
                  alt={'position icon'}
                  onClick={() => getUserPosition()} />
               <OriginSearchBar setOrigin={setOrigin} cleanInput={cleanInput} />
            </div>
            <div className="search-bar-container">
               <img
                  className={handleClassTag()}
                  src={iconRefresh}
                  style={{ cursor: "pointer", "width": "20px", "height": "20px" }}
                  alt={'refresh icon'}
                  onClick={() => cleanSearch()} />
               <DestinationSearchBar
                  active={active}
                  setActive={setActive}
                  stations={stations}
                  cleanInput={cleanInput}
                  setDestination={setDestination} />
            </div>
         </div>
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
   )

   function cleanSearch() {
      setResponse(null);
      setOrigin(null);
      setDestination(null);
      setUserLocation(null);

      if (cleanInput) setCleanInput(false);
      if (!cleanInput) setCleanInput(true);
   }

   function getUserPosition() {
      navigator.geolocation.getCurrentPosition((position) => {
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