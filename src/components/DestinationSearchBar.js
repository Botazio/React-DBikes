import React, { useEffect, useMemo } from 'react';
import { useThrottle } from 'react-use';
import { matchSorter } from 'match-sorter';
import {
   Combobox,
   ComboboxInput,
   ComboboxPopover,
   ComboboxList,
   ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function DestinationSearchBar({ active, setActive, stations, setStationSelected, setDestination, cleanInput }) {
   const [term, setTerm] = React.useState("");
   const results = usePlaceMatch(term);
   const handleChange = (e) => setTerm(e.target.value);

   useEffect(() => {
      setTerm("")
   }, [cleanInput]);

   function handleClassTag() {
      if (active) {
         return "search-bar-active";
      }
      return "search-bar-inactive";
   }

   return (
      <div>
         <Combobox
            onSelect={(address) => {
               setTerm(address);
               const destination = stations.find((station) => station.address === address);
               handleSubmit(destination);
            }}>
            <ComboboxInput
               id="destination-input"
               className={handleClassTag() + " rounded"}
               placeholder="Enter a station"
               autoComplete="off"
               value={term}
               onChange={handleChange}
            />
            {
               results && (
                  <ComboboxPopover style={{ zIndex: 100000 }}>
                     {results.length > 0 ? (
                        <ComboboxList>
                           {results.slice(0, 5).map((result) => (
                              <ComboboxOption
                                 key={"suggestion" + result.number}
                                 value={result.address}
                              />
                           ))}
                        </ComboboxList>
                     ) : (
                        <span style={{ display: "block", margin: 8 }}>
                           No results found
                        </span>
                     )}
                  </ComboboxPopover>
               )
            }
         </Combobox>
      </div>
   );

   function handleSubmit(result) {
      setDestination({ lat: result.position.lat, lng: result.position.lng })
      setStationSelected(result);
      if (!active) setActive(true);
   }

   function usePlaceMatch() {
      const throttledTerm = useThrottle(term, 100);
      return useMemo(() =>
         term === "" ? null :
            matchSorter(stations, term, { keys: ['address'] }, { threshold: matchSorter.rankings.STARTS_WITH }),
         [throttledTerm]);
   }
}