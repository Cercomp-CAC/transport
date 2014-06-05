var express = require('express'),
    app     = express();

require("./config/express")(app, express);
require("./config/routes")(app);

app.listen(3000);
console.log('Express serving listening on port 3000');
