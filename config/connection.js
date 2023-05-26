//const Sequelize = require('sequelize');
require('dotenv').config();
const { Sequelize } = require('sequelize');
// Create connection to our database, pass in your MySQL information for username and password

const sequelize = new Sequelize(
  'tech_db',
  'root',
  'password',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);


module.exports = sequelize;