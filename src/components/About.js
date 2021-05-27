import React from 'react';
import aboutReact from '../fixtures/about-react.png';
import BottomBar from './BottomBar';

export default function About() {


   return (
      <div>
         <div className="about-wrapper">
            <div className="profile-photo-wrapper">
               <img src={aboutReact} alt={'about react'} />
            </div>
            <div className="profile-text-wrapper">
               <h2>About The Project</h2>
               <p>The project is based in the <a href="https://www.dublinbikes.ie/en/mapping">Dublin Bikes Page</a>. It has
            been developed in React using external libraries
            to interact with <a href="https://www.npmjs.com/package/@react-google-maps/api">Google Maps API</a> and <a href="https://www.npmjs.com/package/react-google-charts">Google Graphs API</a>.
            The project can be found in the following <a href="https://github.com/Botazio/React-DBikes">Github repository</a>.</p><br />
               <p>Regarding the organization of the project, I have tried to keep it very simple.
            I am not planning to extend the application so a single styles and components folder is sufficient.<br />
            The markers are being updated fetching the data from the <a href="https://developer.jcdecaux.com/#/home">JCDeaux API</a>.
            You just need to signin to get a free API key.<br /><br />
            The predictions functionality is not available since for this it is necessary a server performing web scrapping
            and introducing those results in a database, in turn an API would communicate with this database extracting
            the most recent results and creating the routes with which the application written in React would communicate.
            I have left in the repository the scrapers that would be needed for this purpose written in Python and a small API
            in Node.js with the mentioned routes.
            For more info about how to make predictions refer to <a href="https://github.com/Botazio/Group-Project-SoftDev/tree/main">this link</a>.
            <br /><br />Additionaly, in the helpers folder I have written a reusable custom hook that can be used to fetch these routes
            in a secure way. Feel free to take all these resources and use them for your own purposes.
            More detailed explanations about each folder can be found in the repository readme files.
            </p><br />
               <p>For the icons I have used the free service provided by <a href="https://www.flaticon.com/">Flaticon</a> and
            for the illustrations the free service provided by <a href="https://undraw.co/illustrations">unDraw</a>.</p>
            </div>
         </div>
         <BottomBar />
      </div>
   )
}