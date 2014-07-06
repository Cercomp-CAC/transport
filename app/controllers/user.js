exports.signup = function (req, res) {
  res.render('signup/signup', {
    messageFailure: req.flash('signupFailureMessage'),
    messageSuccess: req.flash('signupSuccessfulMessage'),
  });
};

exports.login = function (req, res) {
  res.render('login/login', {
    message: req.flash('loginMessage')
  });
};

exports.logout = function (req, res) {
  res.logout();
  res.redirect('/');
};

exports.profile = function (req, res) {
  res.render('user/profile', {
    user: req.user,
  });
};
