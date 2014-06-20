var express = require('express')
  , app     = express();

require('./config/express')(app, express);
require('./config/routes')(app);

var port = app.get('port');

app.listen(port, function() {
  console.log("Express serving listening on port %d", port);
});

module.exports = app;
