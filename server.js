var express = require('express'),
    path    = require('path'),
    app     = express();

// view engine setup
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

require("./config/routes")(app);

app.listen(3000);
console.log('Express serving listening on port 3000');
