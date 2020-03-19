const { v4: uuidv4 } = require('uuid');
const Movie = require('../models/movie');
const Round = require('../models/round');

exports.getAddMovie = (req, res, next) => {
  res.render('admin/edit-movie', {
    pageTitle: 'Add Movie',
    path: '/admin/add-movie',
    editing: false,
  });
};

exports.postAddMovie = (req, res, next) => {
  const { title } = req.body;
  const { imageUrl } = req.body;
  const { description } = req.body;
  Movie.create({
    movie_id: uuidv4(),
    title,
    imageUrl,
    description,
  })
    .then(() => {
      console.log('Created Movie');
      res.redirect('/admin/movies');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditMovie = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const moviId = req.params.movieId;
  Movie.findByPk(moviId)
    .then(movie => {
      if (!movie) {
        return res.redirect('/');
      }
      res.render('admin/edit-movie', {
        pageTitle: 'Edit Movie',
        path: '/admin/edit-movie',
        editing: editMode,
        movie,
      });
    })
    .catch(err => console.log(err));
};

exports.postEditMovie = (req, res, next) => {
  const moviId = req.body.movieId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Movie.findByPk(moviId)
    .then(movie => {
      movie.title = updatedTitle;
      movie.price = updatedPrice;
      movie.description = updatedDesc;
      movie.imageUrl = updatedImageUrl;
      return movie.save();
    })
    .then(() => {
      console.log('UPDATED MOVIE!');
      res.redirect('/admin/movies');
    })
    .catch(err => console.log(err));
};

exports.getMovies = (req, res, next) => {
  Movie.findAll()
    .then(movies => {
      res.render('admin/movies', {
        movies,
        pageTitle: 'Admin Movies',
        path: '/admin/movies',
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteMovie = (req, res, next) => {
  const moviId = req.body.movieId;
  Movie.findByPk(moviId)
    .then(movie => movie.destroy())
    .then(result => {
      console.log('DESTROYED MOVIE');
      res.redirect('/admin/movies');
    })
    .catch(err => console.log(err));
};

exports.getAddRound = (req, res, next) => {
  res.render('admin/edit-round', {
    pageTitle: 'Add Round',
    path: '/admin/add-round',
    editing: false,
    movieId: req.query.movieId,
  });
};

exports.postAddRound = (req, res, next) => {
  const { movieId } = req.body;
  const { theaterNum } = req.body;
  const { time } = req.body;
  const { language } = req.body;
  Movie.findByPk(movieId)
    .then(movie => {
      if (!movie) {
        return res.redirect('/');
      }
      movie
        .createRound({
          round_id: uuidv4(),
          theater: theaterNum,
          time,
          language,
        })
        .then(result => {
          console.log('Created Rounds');
          res.redirect('/admin/movies');
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => console.log(err));
};

exports.getRounds = (req, res, next) => {
  const { movieId } = req.query;
  Movie.findByPk(movieId)
    .then(movie => {
      if (!movie) {
        return res.redirect('/');
      }
      movie
        .getRounds({
          order: ['time'],
        })
        .then(results => {
          const english = [];
          const thai = [];
          for (const round of results) {
            if (round.language === 'EN/TH') {
              english.push(round.time);
            } else {
              thai.push(round.time);
            }
          }
          res.render('admin/rounds', {
            rounds: results,
            pageTitle: 'Admin Rounds',
            path: '/admin/rounds',
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => console.log(err));
};

exports.postDeleteRound = (req, res, next) => {
  const { roundId } = req.body;
  console.log(roundId);
  Round.findByPk(roundId)
    .then(round => round.destroy())
    .then(() => {
      console.log('DESTROYED ROUND');
      res.redirect('/admin/movies');
    })
    .catch(err => console.log(err));
};
