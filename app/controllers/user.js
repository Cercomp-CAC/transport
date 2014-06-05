exports.list = function (req, res) {
    var User = require("../models/users")();

    res.render('user',
        { user: User });
};