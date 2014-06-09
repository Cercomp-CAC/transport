module.exports = function(app, express) {

    var path = require('path');

    // view engine setup
    app.set('views', path.join(__dirname, "../app/views"));
    app.set('view engine', 'jade');

    app.use(express.static(path.join(__dirname, '../public')));

};