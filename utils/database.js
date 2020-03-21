const Sequelize = require('sequelize');

// TODO: Change to MySQL username and passowrd
sequelize = new Sequelize('db_project', 'root', 'Nonny2540', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
  timestamps: false,
});

module.exports = sequelize;
