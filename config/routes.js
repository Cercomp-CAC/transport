var auth = require("./middlewares/authorization");

module.exports = function(app, passport) {
  var home = require('../app/controllers/home')
    , user = require('../app/controllers/user');

  app.get('/', home.index);

  app.route('/login')
    .get(user.login)

    .post(passport.authenticate('local-login', {
      successRedirect: '/profile',
      failureRedirect: '/login',
      failureFlash: true
    }));

  app.route('/signup')
    .get(user.signup)

    .post(passport.authenticate('local-signup', {
      successRedirect: '/signup',
      failureRedirect: '/signup',
      failureFlash: true
    }));

  app.get('/logout', user.logout);

  app.get('/profile', auth.isLoggedIn, user.profile);

  app.get('/recovery', function(req, res) {
    res.render('user/recovery');
  });

};
