module.exports = function(app, express) {

    // var path   = require('path'),
    var logfmt = require('logfmt');

    // Configuration
    app.configure(function(){
        app.set('views', process.env.PWD + '/app/views');
        app.set('view engine', 'jade');
        app.use(express.bodyParser());
        app.use(express.static(process.env.PWD + '/public'));
        app.use(logfmt.requestLogger());
        app.use(app.router);
    });
};
