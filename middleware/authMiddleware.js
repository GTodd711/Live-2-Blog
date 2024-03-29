// Middleware for checking if the user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next(); // User is authenticated, proceed to the next middleware or route handler
    } else {
      res.redirect('/login'); // Redirect to the login page if the user is not authenticated
    }
  };
  
  // Middleware for checking if the user is an admin
  const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      return next(); // User is an admin, proceed to the next middleware or route handler
    } else {
      res.status(403).send('Unauthorized'); // Send a 403 Forbidden status if the user is not an admin
    }
  };
  
  module.exports = { isAuthenticated, isAdmin };
  