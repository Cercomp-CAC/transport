var auth = require("./middlewares/authorization");

module.exports = function(app, passport) {
  var home     = require('../app/controllers/home')
    , register = require('../app/controllers/login')
    , user     = require('../app/controllers/user')
    , signup   = require('../app/controllers/signup');

  app.get('/', home.index);
  app.get('/login', register.login);

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true // allow flash messages
  }));

  app.get('/signup', signup.signup);

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/signup',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/admin/login', register.login);
  app.get('/profile', auth.isLoggedIn, user.profile);

  app.get('/recovery', function(req, res) {
    res.render('user/recovery');
  });

  app.get('/faq', function(req, res) {
    res.render('faq/faq');
  });
};
