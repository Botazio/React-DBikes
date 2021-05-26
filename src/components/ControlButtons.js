import iconBlueBike from '../fixtures/icon-bike-blue.png';
import iconParking from '../fixtures/icon-parking.png';
import iconBikePath from '../fixtures/icon-bike-path.png';


export default function ControlButtons({ buttonSelected, setButtonSelected }) {

   function handleClassTag(tag) {
      if (tag === buttonSelected) {
         return "control-button active-button";
      }
      return "control-button";
   }

   return (
      <div className="control-buttons-wrapper rounded">
         <div className={handleClassTag('available_bikes')} onClick={() => setButtonSelected("available_bikes")}>
            <img src={iconBlueBike} style={{ "width": "20px", "height": "20px" }} alt={'blue bike'} />
            <p>Available<br />Bikes</p>
         </div>
         <div className={handleClassTag('available_bike_stands')} onClick={() => setButtonSelected("available_bike_stands")}>
            <img src={iconParking} style={{ "width": "20px", "height": "20px" }} alt={'icon parking'} />
            <p>Available<br />Stands</p>
         </div>
         <div className={handleClassTag('bike_paths')} onClick={() => setButtonSelected("bike_paths")}>
            <img src={iconBikePath} style={{ "width": "20px", "height": "20px" }} alt={'icon bike path'} />
            <p>Bike<br />Paths</p>
         </div>
      </div>
   )
}