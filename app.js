const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');

// TODO: Change to MySQL username and passowrd
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nonny2540',
  database: ''
});

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS db_project;', function (error, results, fields) {
  if (error) throw error;
});

connection.end();

const errorController = require('./controllers/error');
const sequelize = require('./utils/database');
const Movie = require('./models/movie');
const Round = require('./models/round');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/admin', adminRoutes);

app.use(errorController.get404);

Movie.hasMany(Round);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
