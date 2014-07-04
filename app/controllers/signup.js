exports.signup = function (req, res) {
  res.render('signup/signup', {
    messageFailure: req.flash('signupMessage'),
    messageSuccess: req.flash('signupSuccessfulMessage'),
  });
};
