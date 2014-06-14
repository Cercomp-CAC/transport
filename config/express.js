module.exports = function(app, express) {

    var path   = require('path'),
        logfmt = require('logfmt');

    // view engine setup
    app.set('views', path.join(process.env.PWD, 'app/views'));
    app.set('view engine', 'jade');

    app.use(express.static(path.join(process.env.PWD, 'public')));

    app.use(logfmt.requestLogger());
    // app.use(express.logger('dev'));
    app.use(express.bodyParser());
};
