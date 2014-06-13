exports.login = function (req, res) {
    res.render('login/login');
};

exports.auth = function (req, res) {
    res.render('login/show',
        { user: req.body.user });
};
