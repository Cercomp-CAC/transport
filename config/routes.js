module.exports = function(app) {
    var home     = require("../app/controllers/home");
    var register = require("../app/controllers/login");
    var user     = require("../app/controllers/user");

    app.get('/',      home.index);
    app.get('/login', register.login);
    app.get('/user',  user.list);
};