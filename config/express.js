module.exports = function(app, express) {

    // var path   = require('path'),
    var logfmt = require('logfmt');

    // view engine setup
    app.set('views', process.env.PWD + '/app/views');
    app.set('view engine', 'jade');

    app.use(express.static(process.env.PWD + '/public'));

    app.use(logfmt.requestLogger());
    // app.use(express.logger('dev'));
    app.use(express.bodyParser());
};
