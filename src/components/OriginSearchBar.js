import React, { useEffect } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
   Combobox,
   ComboboxInput,
   ComboboxPopover,
   ComboboxList,
   ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";


export default function OriginSearchBar({ setOrigin, cleanInput }) {
   const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
      requestOptions: {
         location: {
            lat: () => 53.349804,
            lng: () => -6.26031
         },
         radius: 20 * 1000,
      }
   });

   useEffect(() => {
      setValue("")
   }, [cleanInput, setValue]);

   return (
      <div>
         <Combobox
            onSelect={async (address) => {
               setValue(address, false);
               clearSuggestions();

               try {
                  const results = await getGeocode({ address });
                  const originPosition = await getLatLng(results[0]);
                  setOrigin(originPosition);
               } catch (error) {
                  console.log(error);
               }

            }}>
            <ComboboxInput
               id="origin-input"
               className="search-bar-active rounded"
               value={value}
               onChange={(e) => {
                  setValue(e.target.value);
               }}
               disabled={!ready}
               placeholder="Enter an address"
               autoComplete="off"
            />
            <ComboboxPopover style={{ zIndex: 100000 }}>
               <ComboboxList>
                  {status === "OK" && data.map(({ place_id, description }) => (<ComboboxOption key={place_id} value={description} />))}
               </ComboboxList>
            </ComboboxPopover>
         </Combobox>
      </div>

   )
}