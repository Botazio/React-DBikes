import React from 'react';
import phone from '../fixtures/phone.png';
import markers from '../fixtures/markers.png';
import release from '../fixtures/release.jpg';
import routes from '../fixtures/dublinbikes-route.jpg';
import predictions from '../fixtures/predictions.png';
import plus from '../fixtures/icon-plus.png';

export default function HowItWorksDBikes() {


   return (
      <div id="wrapper-how2">
         <div className="header-how2">
            <div className="intro">
               <div className="title-how2"><h1>HOW IT WORKS</h1></div>
            </div>
         </div>
         <div className='title'>
            <h1>Rent a Bike</h1>
         </div>
         <section className='container'>
            <div className='left-half'>
               <article>
                  <h2> Open App </h2>
                  <p> The DublinBikes App is available for all major browsers.
                  Once opened, users of the App will be able to explore available bike services/stations,
                  you on your commute around the city!
                     </p>
               </article>
            </div>
            <div className='right-half' style={{ 'background': 'white' }}>
               <article>
                  <img src={phone} style={{ "height": "200px" }} alt={'Phone'} />
               </article>
            </div>
         </section>
         <section className='container'>
            <div className='left-half' style={{ 'background': 'white' }}>
               <article>
                  <img src={markers} style={{ "height": "220px" }} alt={'Markers'} />
               </article>
            </div>
            <div className='right-half'>
               <article>
                  <h2> Find a station </h2>
                  <p> Through are easy-to-use interactive user interfaces, it has never been easier to find available bikes for rent!
                  Once downloaded, users will be able to display bike stations, which will provide information regarding the number of bikes and available bike stands at the desired station!
                  User will also be able to display routes, providing easy navigation to get you on your way!
                     </p>
               </article>
            </div>
         </section>
         <section className='container'>
            <div className='left-half'>
               <article>
                  <h2> Select & Release </h2>
                  <p> You can release a bike at a station terminal.
                  Select a bike from the terminal screen and release it by pressing the button on the bike stand as directed.
                     </p>
               </article>
            </div>
            <div className='right-half' style={{ 'background': 'white' }}>
               <article>
                  <img src={release} style={{ "height": "220px" }} alt={'Release bike'} />
               </article>
            </div>
         </section>
         <section className='container'>
            <div className='left-half' style={{ 'background': 'white' }}>
               <article>
                  <img src={routes} style={{ "height": "220px" }} alt={'Routes'} />
               </article>
            </div>
            <div className='right-half'>
               <article>
                  <h2> Limited Availabilty </h2>
                  <p> If the station you are looking at has no avaible bikes,
                  You can view nearby stations and the number of available bikes at each station on the dublinbikes App or at a station terminal.
                     </p>
               </article>
            </div>
         </section>
         <section className='container'>
            <div className='left-half'>
               <article>
                  <h2> Make Predictions (Not Available)</h2>
                  <p> Through are smart UI, users can make informed predictions and smarter decisions regarding the use of our products and services.
                  Through the app, users are able to predict bike availabilty depending on the time of day. This enables users to plan ahead of time,
                  making life that little bit easier!
                     </p>
               </article>
            </div>
            <div className='right-half' style={{ 'background': 'white' }}>
               <article>
                  <img src={predictions} style={{ "height": "220px" }} alt={'Predictions'} />
               </article>
            </div>
         </section>
         <div className='title'>
            <h1>Frequently Asked Questions</h1>
         </div>
         <section>
            <div className="container2">
               <div className="accordion">
                  <div className="accordion-item" id="question1">
                     <a className="accordion-link" href="#question1">
                        Are Dublin Bikes Available 24 Hours Per Day?
                        <img src={plus} style={{ "height": "25px" }} alt={'icon plus'} />
                     </a>
                     <div className="answer"><p>DublinBikes are available to rent anytime from 5am to 12.30am daily,
                               seven days a week. While there is a fixed time frame for time rentals, bikes can be returned at any time 24/7.</p>
                     </div>
                  </div>
                  <div className="accordion-item" id="question2">
                     <a className="accordion-link" href="#question2">
                        Can I return my bike to any station?
                        <img src={plus} style={{ "height": "25px" }} alt={'icon plus'} />
                     </a>
                     <div className="answer">
                        <p>The bike must be returned to a free stand at a station.
                        Find available bikes and stands at each station in real time on the official dublinbikes App.
                           </p>
                     </div>
                  </div>
                  <div className="accordion-item" id="question3">
                     <a className="accordion-link" href="#question3">
                        If I lose my bike am I liable?
                        <img src={plus} style={{ "height": "25px" }} alt={'icon plus'} />
                     </a>
                     <div className="answer">
                        <p>Yes, users of the DublinBikes scheme will be liable to pay a 20% fee towards the overall cost of repairs if a bike is lost or damaged.</p>
                     </div>
                  </div>
                  <div className="accordion-item" id="question4">
                     <a className="accordion-link" href="#question4">
                        What payment options are accepted through the Dublin Bikes App?
                        <img src={plus} style={{ "height": "25px" }} alt={'icon plus'} />
                     </a>
                     <div className="answer">
                        <p>Once the app has been successfully downloaded, users will be able to pay for different subscription models available using any valid
                        debit or credit card. Leap cards and cash are not accepted with this service.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )

}