const express = require('express');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const dotenv = require('dotenv');
const sequelize = require('./config/connection'); // Import your Sequelize instance from connection.js
const authRoutes = require('./routes/api/authRoutes'); // Import your authentication routes
const routes = require('./routes'); // Import your main routes (index.js)
const { authMiddleware, validationMiddleware } = require('./middleware');// Import middleware

dotenv.config(); // Load environment variables from .env file

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  cookie: { secure: false }, // Set to true in production with HTTPS
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration (assuming you have a passport.js file)
require('./config/passport')(passport);

// Apply middleware to specific routes
app.use('/auth', authMiddleware);
app.use(validationMiddleware);

// Routes setup
app.use('/auth', authRoutes); // Use authRoutes for authentication routes
app.use(routes); // Use main routes

// Sync Sequelize models with the database and start the server
sequelize.sync({ force: false }) // Set force to true to drop existing tables and re-create them
  .then(() => {
    console.log('Database synchronized successfully.');
    app.listen(3000, () => {
      console.log('Server is running on port 3000.');
    });
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });