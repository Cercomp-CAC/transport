module.exports = function(app, express) {

  var config     = require('./config')
    , swig       = require('swig')
    , morgan     = require('morgan')
    , bodyParser = require('body-parser');

  app.set('port', config.port);

  // views config
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', config.root + '/app/views');

  app.use(express.static(config.root + '/public'));

  if (app.get('env') === 'development') {
      app.use(morgan('dev'));
  }
  app.use(bodyParser.urlencoded({
    extended: true
  }));
};
