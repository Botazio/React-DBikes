import React, { useState } from 'react';
import StationInfo from './StationInfo';
import WeatherInfo from './WeatherInfo';
import waitingImage from '../fixtures/waiting-girl.png';

export default function InfoContainer({ stationSelected }) {
   const [active, setActive] = useState(true);

   return (
      <>
         <div
            className={"station-info-button-" + (active ? "active" : "inactive")}
            onClick={() => handleActive()}>
            <img alt={'direction icon'} />
         </div>
         {!stationSelected && active && (<div className="waiting-info-container">
            <img src={waitingImage} style={{ "width": "300px", "height": "260px" }} alt={'waiting girl'} />
         </div>)}
         {stationSelected && active && <div className="active-info-container">
            <StationInfo stationSelected={stationSelected} />
            <WeatherInfo />
         </div>}
      </>
   )

   function handleActive() {
      if (active) setActive(false);
      if (!active) setActive(true);
   }
}