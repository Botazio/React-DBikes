const express = require('express');
const mysql = require('mysql2');

// Create conncection
const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '$$DollA$$16',
   database: 'dbikes'
});

// Connect
db.connect((err) => {
   if (err) {
      throw err;
   }
   console.log('MySQL Connected...')
})

const app = express();

app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
});

// Define the endpoints

// Get the stations info
app.get('/stations', (req, res) => {
   let sql = 'SELECT * FROM dbikes.station;';
   let query = db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
   });
});

// Get the availability info
app.get('/availability', (req, res) => {
   let sql = 'SELECT * FROM dbikes.availability;';
   let query = db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
   });
});

app.listen('9000', () => {
   console.log('Server started on port 9000')
});