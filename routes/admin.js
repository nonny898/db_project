const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// Movies

router.get('/add-movie', adminController.getAddMovie);

router.get('/movies', adminController.getMovies);

router.post('/add-movie', adminController.postAddMovie);

router.get('/edit-movie/:movieId', adminController.getEditMovie);

router.post('/edit-movie', adminController.postEditMovie);

router.post('/delete-movie', adminController.postDeleteMovie);

// Rounds

router.get('/add-round', adminController.getAddRound);

router.get('/rounds', adminController.getRounds);

router.post('/add-round', adminController.postAddRound);

router.post('/delete-round', adminController.postDeleteRound);

module.exports = router;
