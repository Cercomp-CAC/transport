module.exports = function(app) {
    var home = require("../app/controllers/home");
    var user = require("../app/controllers/user");

    app.get('/', home.index);

    app.get('/user', user.list);
};