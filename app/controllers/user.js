exports.profile = function (req, res) {
  res.render('user/profile', {
    user: req.user,
  });
};

exports.respondWithJson = function ( req, res ) {
  var User = require('../app/models/user');
  res.json({
    user: User
  });
};
