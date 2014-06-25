exports.list = function (req, res) {
  var users = require("../models/users")();

  res.render('user', {
    users: users,
  });
};
