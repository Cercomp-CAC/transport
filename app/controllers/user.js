exports.profile = function (req, res) {
  res.render('user/profile', {
    user: req.user,
  });
};
