var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
  var User = require('../app/models/user');

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  var strategyOptions = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  };

  // use Local strategy
  passport.use('local-signup', new LocalStrategy(strategyOptions,
    function(req, email, password, done) {

      process.nextTick(function() {
        User.findOne({ 'email': email }).exec(function(err, user) {
          if (err) {
            return done(err);
          }
          if (user) {
            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
          } else {
            var newUser = new User();

            newUser.email    = email;
            newUser.password = newUser.generateHash(password);

            newUser.save(function(err) {
              if (err) {
                throw err;
              }
              return done(null, newUser, req.flash('signupSuccessfulMessage', 'Your account was created.'));
            });
          }
        });
      });
    }
  ));

  passport.use('local-login', new LocalStrategy(strategyOptions,
    function(req, email, password, done) {

      User.findOne({ 'email': email }).exec(function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, req.flash('loginMessage', 'No user found.'));
        }
        if (!user.validPassword(password)) {
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password'));
        }
        // return successful user
        return done(null, user);
      });
    }
  ));
};
