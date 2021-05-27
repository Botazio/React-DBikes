import React from 'react';
import iconBlueBike from '../fixtures/icon-bike-blue.png';
import iconParking from '../fixtures/icon-parking.png';
import iconBankingTrue from '../fixtures/icon-banking-true.png';
import iconBankingFalse from '../fixtures/icon-banking-false.png';


export default function StationInfo({ stationSelected }) {
   var iconBanking = iconBankingFalse;
   var iconOpacity = 0.2;
   // Handles the logic to see if the station has banking available
   if (stationSelected.banking === 1) {
      iconBanking = iconBankingTrue;
      iconOpacity = 1;
   }

   return (
      <div className="station-info-wrapper">
         <div className="station-info-title">
            <p><b>{stationSelected.name}</b> nº {stationSelected.number}</p>
         </div>
         <div className="station-info">
            <div className="station-info-subelements">
               <p><b>{stationSelected.available_bikes}</b></p>
               <img src={iconBlueBike} style={{ "width": "20px", "height": "20px" }} alt={'blue bike'} />
            </div>
            <div className="station-info-subelements">
               <p><b>{stationSelected.available_bikes_stands}</b></p>
               <img src={iconParking} style={{ "width": "20px", "height": "20px" }} alt={'icon parking'} />
            </div>
            <div className="station-info-subelements">
               <img src={iconBanking} style={{ "width": "20px", "height": "20px", "opacity": iconOpacity }} alt={'icon banking'} />
            </div>
         </div>
      </div>

   )
}