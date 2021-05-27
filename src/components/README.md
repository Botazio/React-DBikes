# Components

## About.js 
Component that creates the about page in the application. It is mostly rendering of html in JSX syntax.

## BottomBar.js
Component that creates the footer.

## ControlButtons.js
Subcomponent of the 'MapContainer.js'. Creates and handles the logic of the top center buttons (in desktop view).

## DestinationSearchBar.js
Subcomponent of the 'DirectionsContainer.js'. Creates and handles the logic of selecting as a station as destination. Uses [Combobox](https://www.npmjs.com/package/@reach/combobox) for this end. 

## DirectionsContainer.js
Subcomponent of 'SideBar.js'. Creates and handles the logic to render directions in the map after the user has entered a origin and a destination.

## HowItWorks.js
Component that creates the HowItWorks page in the application.

## HowItWorksDBikes.js
Subcomponent of 'HowItWorks.js'. Renders HTML written in JSX syntax.

## InfoContainer.js
Subcomponent of 'SideBar.js. When active shows information about the station availability and the weather. For the information about the weather it fech the data from [OpenWeather API](https://openweathermap.org/).

## MapContainer.js
Biggest component of the application. Renders a Google map using [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api) and the other components to control it. Uses a custom hook to connect to the [JCDecaux API](https://developer.jcdecaux.com) and fetch the stations data.

## MapKey.js
An initial login system that ask the user for a Google Maps key before rendering the map.

## Navbar.js
Component that creates the navbar.

## NotFound.js
Component that redirects the user to the NotFound page if he tries to enter a https route that is not defined.

## OriginSearchBar.js
Subcomponent of the 'DirectionsContainer.js'. Creates and handles the logic of selecting an address as destination. Uses [Combobox](https://www.npmjs.com/package/@reach/combobox) and [use-places-autocomplete](https://www.npmjs.com/package/use-places-autocomplete) for this end. 

## SideBar.js
Subcomponent of 'MapContainer.js'. Displays a side bar when active.

## StationInfo.js
Subcomponent of 'InfoContainer.js'. When active displays the availability for the selected station.

## TransportTypeButtons.js
Subcomponent of 'DirectionsContainer.js'. The directions renderer system uses the selected value of this radio buttons to decide the mode of transport before rendering the route.

## WeatherInfo.js
Subcomponent of 'InfoContainer.js'. When active displays the forecast weather for the next 7 days in Dublin. Uses [google graphs](https://react-google-charts.com/) to display a graph with this information.