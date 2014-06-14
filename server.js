var express = require('express'),
    app     = express();

require('./config/express')(app, express);
require('./config/routes')(app);

var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
    console.log('Express serving listening on port ' + port);
});

module.exports = app;