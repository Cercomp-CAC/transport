var express  = require('express')
  , passport = require('passport')
  , mongoose = require('mongoose')
  , config   = require('./config/config');

var app = express();

// Configuration
mongoose.connect(config.db.development);

// Bootstrap passport config
require('./config/passport')(passport);

// Bootstrap application settings
require('./config/express')(app, express, passport);

// Bootstrap routes
require('./config/routes')(app, passport);

var port = app.get('port');

app.listen(port, function() {
  console.log('Express serving listening on port %d in %s mode',
    port, app.settings.env);
});

module.exports = app;
