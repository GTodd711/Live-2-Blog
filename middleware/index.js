const errorMiddleware = require('./errorMiddleware');
const authMiddleware = require('./authMiddleware');
const validationMiddleware = require('./validationMiddleware');

module.exports = { authMiddleware, validationMiddleware, errorMiddleware };
