import React from 'react';

export default function TransportTypeButtons({ setTravelMode }) {
   const checkDriving = ({ target: { checked } }) => {
      checked && setTravelMode('DRIVING')
   }

   const checkTransit = ({ target: { checked } }) => {
      checked && setTravelMode('TRANSIT')
   }

   const checkWalking = ({ target: { checked } }) => {
      checked && setTravelMode('WALKING')
   }

   return (
      <div id="mode-selector">
         <input
            type="radio"
            name="type"
            id="changemode-walking"
            defaultChecked="checked"
            onChange={checkWalking}
         />
         <label htmlFor="changemode-walking">Walking</label>

         <input
            type="radio"
            name="type"
            id="changemode-transit"
            onChange={checkTransit}
         />
         <label htmlFor="changemode-transit">Transit</label>

         <input
            type="radio"
            name="type"
            id="changemode-driving"
            onChange={checkDriving}
         />
         <label htmlFor="changemode-driving">Driving</label>
      </div>
   )
}