import { useState } from "react"
import BottomBar from "./BottomBar";
import MapContainer from "./MapContainer";



export default function MapKey({ mapKey, setMapKey }) {
   const [value, setValue] = useState('')

   function handleSubmit() {
      setMapKey(value);
   }

   function handleDefaultKey() {
      setValue("AIzaSyCLGkrQoHNmMyhdvwl0wmron1ndtREM0zM");
   }

   return (
      <>
         {!mapKey && (
            <>
               <div className="key-auth">
                  <form id="form-key-auth">
                     <div><h3>Enter a Google key</h3></div>
                     <div>
                        <input type="text" id="input-text-key" value={value} onChange={(e) => setValue(e.target.value)} />
                        <input type="button" id="submit-key" value="Submit" onClick={() => handleSubmit()} />
                     </div>
                     <div className="default-key rounded" onClick={() => handleDefaultKey()}>
                        <h4>Use default key</h4>
                     </div>
                  </form>
                  <div>
                     <p>You need a Google Maps API Key to access the application.
                     I have left a default key for the moment that you can use but
                     it will be taken out in feature versions. <br /><br />If you are interested
                     in the service provided by Google, you can obtain a free key in
                     the following <a href="https://developers.google.com/maps/documentation/javascript/get-api-key?hl=es-419">link</a>.
                     You will be ask for your credit card but no charges will be made
                     until you upgrade the account to allow payment services. The free key
                     has a limited duration but it is enough to get you working.</p><br />
                     <p>If you find the app does not load correctly refresh the page and
                  try again.</p>
                  </div>
               </div>
               <BottomBar />
            </>
         )}

         {mapKey && <MapContainer mapKey={mapKey} />}
      </>
   )
}