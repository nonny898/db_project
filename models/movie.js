const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Movie = sequelize.define('movie', {
  movie_id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Movie;
