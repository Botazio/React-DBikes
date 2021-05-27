import React, { useState } from 'react';
import useFetch from '../helpers/useFetch';
import { Chart } from "react-google-charts";

// Styles for the graph
const options = {
   width: "100%",
   height: "100%",
   curveType: "function",
   fontName: "Roboto, sans-serif",
   series: {
      0: { color: "rgb(0, 115, 152)" },
   },
   lineWidth: 3,
   hAxis: {
      title: "Day",
      textStyle: {
         color: "black",
      },
      titleTextStyle: {
         color: "black",
      },
      minorGridlines: {
         count: 0,
      },
   },
   vAxis: {
      titleTextStyle: {
         color: "black",
      },
      textStyle: {
         color: "black",
      },
      minorGridlines: {
         count: 0,
      },
   },
   textStyle: {
      color: "black",
   },
   titleTextStyle: {
      fontSize: 14,
      fontName: "Roboto, sans-serif",
      color: "black",
   },
   legend: {
      textStyle: {
         color: "black",
      },
   },
   title: "Forecast Weather",
 };

export default function WeatherInfo() {
   // Fetch the stations
   const { data: weatherData, isPending: isPendingWeather, error } = useFetch("https://api.openweathermap.org/data/2.5/onecall?lat=53.350140&lon=-6.266155&exclude=currently,minuetely,hourly&units=metric&appid=f092bb2fdf927ba79511674732a39c36");
   // Current weather slide
   const [currentSlide, setCurrentSlide] = useState(0);


   // Error handling when fetching for the data
   if (error) return (<div className="weather-wrapper">Unable to get the weather data"</div>)

   // Wait for the data
   if (isPendingWeather) return null;

   // Get the data in a google data table to display and in arrays
   const forecastWeather = [];
   const datelist = [];
   (weatherData && weatherData.daily.forEach((el) => {
      var date = new Date(el.dt * 1000);
      datelist.push(date);
      forecastWeather.push([
         date,
         el.humidity,
         el.temp.day,
      ]);
   })
   )

   const weatherSlides = [];
   const dayName = [];
   const dates = [];
   for (var i = 0; i < datelist.length; i++) {
      dayName.push(datelist[i].toString().split(" ")[0]);
      dates.push(datelist[i].toString().substr(4, 6));

      // icon 
      var weatherIcon = (
      <img 
      className="icons2" 
      height="50px" 
      width="50px" 
      alt="weather-icon"
      src={"http://openweathermap.org/img/w/" + weatherData.daily[i].weather[0]["icon"] + ".png"}/>);

      //create the containers to display weather
      weatherSlides.push(<div key={"weather-slide-" + i} className="weather-slide fade">
         <div className="weather-header">
            <p>{dayName[i]}</p>
            <p>{weatherData.daily[i].weather[0].description}</p>
            <p>{dates[i]}</p>
         </div>
         <div className="weather-info">
            <div className="weather-temp">
               <h2>{weatherData.daily[i].temp.day}ºC</h2>
            </div>
            <div className="weather-items">
               {weatherIcon}
            </div>
            <div className="weather-items">
               <p>Min<br />{weatherData.daily[i].temp.min}</p>
            </div>
            <div className="weather-items">
               <p>Max<br />{weatherData.daily[i].temp.max}</p>
            </div>
            <div className="weather-items">
               <p>Wind<br />{weatherData.daily[i].wind_speed} mph</p>
            </div>
         </div>
      </div>);
   }

   return (
      <>
      <div className="weather-wrapper">
         <div id="prev-weather" href="/#" onClick={() => handleCurrentSlide(currentSlide - 1)}>&#10094;</div>
         <div id="next-weather" href="/#" onClick={() => handleCurrentSlide(currentSlide + 1)}>&#10095;</div>
         {weatherSlides[currentSlide]}
         <div id="weather-chart">
            <Chart
            chartType="LineChart"
            rows={forecastWeather}
            options={options}
            columns={[
            {
            type: "date",
            label: "Time"
            },
            {
            type: "number",
            label: "Humidiy"
            },
            {
            type: "number",
            label: "Temperature"
            }
            ]} />
         </div>
      </div>
      </>
   )

   function handleCurrentSlide(n) {
      if (n > weatherSlides.length - 1) {
         setCurrentSlide(0);
      }
      else if (n < 0) {
         setCurrentSlide(weatherSlides.length -1);
      }
      else {
        setCurrentSlide(n) 
      }
   }
}