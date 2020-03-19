const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

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
