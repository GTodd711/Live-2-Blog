const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: true
}));

router.get('/logout', (req, res) => {
    req.logout(); // Passport method to remove the user's session
    req.session.destroy(); // Destroy the session data
    res.redirect('/'); // Redirect to the homepage or any other desired page
  });

module.exports = router;
