var express  = require('express')
  , passport = require('passport')
  , mongoose = require('mongoose');

var app = express();

// Configuration
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

mongoose.connect(config.db);

// Bootstrap passport config
require('./config/passport')(passport);

// Bootstrap application settings
require('./config/express')(app, express, passport);

// Bootstrap routes
require('./config/routes')(app, passport);

var port = app.get('port');

app.listen(port, function() {
  console.log('Express serving listening on port %d in %s mode', port, app.settings.env);
  console.log('Mongo database connection string: ', + config.db);
});

module.exports = app;
