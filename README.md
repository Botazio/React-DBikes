# React-DBikes

## Description
The project is based in the Dublin Bikes Page. It has been developed in React using external libraries to interact with [Google Maps API](https://www.npmjs.com/package/@react-google-maps/api) and [Google Graphs API](https://react-google-charts.com/). The project was previously made in Flask as part of a university group project (You can find the repo in my Github account). I decided to rewrite it completly in React making the whole experience way more pleasant.

Regarding the organization of the project, I have tried to keep it very simple. I am not planning to extend the application so a single styles and components folder is sufficient.
The markers are being updated fetching the data from the [JCDeaux API](https://developer.jcdecaux.com). You just need to signin to get a free API key.

The predictions functionality is not available since for this it is necessary a server performing web scrapping and introducing those results in a database, in turn an API would communicate with this database extracting the most recent results and creating the routes with which the application written in React would communicate. I have left in the repository the scrapers that would be needed for this purpose written in Python and a small API in Node.js with the mentioned routes. For more info about how to make predictions refer to this link.

Additionaly, in the helpers folder I have written a reusable custom hook that can be used to fetch these routes in a secure way. Feel free to take all these resources and use them for your own purposes. More detailed explanations about each folder can be found in the repository readme files.

For the icons I have used the free service provided by [Flaticon](https://www.flaticon.com/) and for the illustrations the free service provided by [unDraw](https://undraw.co/).

For more info regarding how to integrate React with Google Maps API follow this [tutorial](https://www.youtube.com/watch?v=WZcxJGmLbSo&t=2553s) by Leigh Halliday, it does not get any easier!!

I bought the domain name in [GoDaddy](https://www.godaddy.com/). 

Finally, for the hosting I am using [Netlify](https://www.netlify.com/), apart from providing continuous integration linking the github repository with the Netlify account, they made the process so simple. It does not take more than 10 minutes to have an online app working. By the way, the service is free.

You can find the app working following this [link](https://dbikes.es).

## Author
Alvaro Garcia

## Images

### Desktop view
![Screenshot desktop](/images_readme/screenshot-desktop.png)

### Phone view
![Screenshot phone](/images_readme/screenshot-phone.png)

## License
MIT License. You can use the code of this repo with complete freedom and I will be very happy to implement any suggestions other developers can have.
