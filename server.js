const express = require('express');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const dotenv = require('dotenv');
const sequelize = require('./config/connection'); // Import your Sequelize instance from connection.js
const authRoutes = require('./routes/authRoutes'); // Import your authentication routes
const { User } = require('./models'); // Import your User model
const routes = require('./routes'); // Import your main routes (index.js)

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

// Routes setup
app.use('/auth', authRoutes); // Use authRoutes for authentication routes
app.use(routes); // Use main routes

// Sync Sequelize models with the database and start the server
sequelize.sync({ force: false }).then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
