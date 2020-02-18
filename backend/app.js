const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

// Change this to your db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nonny2540',
  database: 'world',
});

connection.connect();

// connection.query('SELECT * FROM city', function(error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].Name);
// });

connection.end();

module.exports = app;
