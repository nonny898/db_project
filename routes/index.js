const express = require('express');

const movieController = require('../controllers/movie');
const roundController = require('../controllers/round');

const router = express.Router();

router.get('/', movieController.getMovies);

router.get('/rounds', roundController.getRounds);

router.get('/checkout', roundController.getCheckout);

router.get('/buy-ticket', roundController.getTickets);

router.post('/buy-ticket', roundController.postTickets);

module.exports = router;
