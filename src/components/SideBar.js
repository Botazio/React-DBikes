import React from 'react';
import DirectionsContainer from './DirectionsContainer';
import InfoContainer from './InfoContainer';

function SideBar({ stations, map, setUserLocation, stationSelected, setStationSelected }) {
   const [active, setActive] = React.useState(false);

   if (stationSelected && !active) setActive(true);

   function handleClassTag() {
      if (active) {
         return "side-bar-active";
      }
      return "side-bar-inactive";
   }

   return (
      <div className={handleClassTag()}>
         {/* Search system */}
         <DirectionsContainer
            active={active}
            setActive={setActive}
            stationSelected={stationSelected}
            setStationSelected={setStationSelected}
            stations={stations}
            map={map}
            setUserLocation={setUserLocation} />

         {/* Info displayed under the search system after performing a search or clicking on a marker */}
         {active && <InfoContainer
            stationSelected={stationSelected} />}
      </div>

   )
}

export default React.memo(SideBar);