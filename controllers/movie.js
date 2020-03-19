const Movie = require('../models/movie');

exports.getMovies = (req, res, next) => {
  Movie.findAll()
    .then(movies => {
      res.render('main/movie-list', {
        movies,
        pageTitle: 'Movies',
        path: '/',
      });
    })
    .catch(err => console.log(err));
};
