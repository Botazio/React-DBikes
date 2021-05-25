import React from 'react';
import StationInfo from './StationInfo';
import WeatherInfo from './WeatherInfo';
import waitingImage from '../fixtures/waiting-girl.png';

export default function InfoContainer({ stationSelected }) {
   // If no station is selected
   if (!stationSelected) {
      return (
         <div className="waiting-info-container">
            <img src={waitingImage} style={{ "width": "300px", "height": "260px" }} alt={'waiting girl'} />
         </div>
      )
   }

   return (
      <div className="active-info-container">
         <StationInfo stationSelected={stationSelected} />
         <WeatherInfo />
      </div>

   )
}