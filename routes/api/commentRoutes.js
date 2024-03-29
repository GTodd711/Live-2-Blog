const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { ensureAuthenticated } = require('../../middleware/authMiddleware');

// Route for creating a comment
router.post('/comments', ensureAuthenticated, commentController.createComment);

module.exports = router;
