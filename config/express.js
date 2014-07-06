module.exports = function(app, express, passport) {

  var swig         = require('swig')
    , morgan       = require('morgan')
    , cookieParser = require('cookie-parser')
    , bodyParser   = require('body-parser')
    , session      = require('express-session')
    , favicon      = require('serve-favicon')
    , flash        = require('connect-flash');

  var env    = app.get('env')
    , config = require('./config')[env];

  app.set('port', config.port);
  app.use(favicon(config.root + '/public/images/favicon.ico'));

  // views config
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', config.root + '/app/views');

  app.use(express.static(config.root + '/public'));

  if (env === 'development') {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(cookieParser()); // read cookies (needed for auth)

  // required for passport
  app.use(session( { secret: config.sessionSecret } ));
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session
};
