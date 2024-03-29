const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./api/authRoutes');
const postRoutes = require('./api/postRoutes');
const commentRoutes = require('./api/commentRoutes');

// Define routes
router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
