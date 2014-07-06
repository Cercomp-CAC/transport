var auth = require("./middlewares/authorization");

module.exports = function(app, passport) {
  var home     = require('../app/controllers/home')
    , login    = require('../app/controllers/login')
    , user     = require('../app/controllers/user')
    , signup   = require('../app/controllers/signup');

  app.get('/', home.index);

  app.route('/login')
    .get(login.login)

    .post(passport.authenticate('local-login', {
      successRedirect: '/profile',
      failureRedirect: '/login',
      failureFlash: true
    }));

  app.route('/signup')
    .get(signup.signup)

    .post(passport.authenticate('local-signup', {
      successRedirect: '/signup',
      failureRedirect: '/signup',
      failureFlash: true
    }));

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/profile', auth.isLoggedIn, user.profile);

  app.get('/recovery', function(req, res) {
    res.render('user/recovery');
  });

};
