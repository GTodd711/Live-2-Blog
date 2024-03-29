const validationMiddleware = (req, res, next) => {
    // Validate request parameters, body, query, etc.
    // Example validation:
    if (!req.body.name || !req.body.email) {
      return res.status(400).send('Name and email are required');
    }
    // If validation passes, proceed to next middleware
    next();
  };
  
  module.exports = validationMiddleware;
  