exports.signup = function (req, res) {
  res.render('signup/signup', {
    messageFailure: req.flash('signupFailureMessage'),
    messageSuccess: req.flash('signupSuccessfulMessage'),
  });
};
