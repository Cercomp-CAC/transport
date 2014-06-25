module.exports = function(app, express) {

  var config = require('./config')
    , swig   = require('swig');

  // Configuration
  app.configure(function(){
    app.set('port', config.port);

    // views config
    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', config.root + '/app/views');

    if (app.get('env') === 'development') {
        app.use(express.logger('dev'));
    }
    app.use(express.bodyParser());
    app.use(express.static(config.root + '/public'));
    app.use(app.router);
  });
};
