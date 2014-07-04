exports.login = function (req, res) {
  res.render('login/login', {
    message: req.flash('loginMessage')
  });
};
