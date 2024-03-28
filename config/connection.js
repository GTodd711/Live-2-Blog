const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Sequelize with database credentials
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false, // Disable logging for SQL queries (optional, can be set to true for debugging)
});

module.exports = sequelize;
