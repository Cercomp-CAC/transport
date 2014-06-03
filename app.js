var express = require('express'),
    path    = require('path'),
    routes  = require('./routes'),
    users   = require('./routes/user'),
    app     = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', routes.index);
app.get('/user', users.user);

app.listen(3000, function() {
    console.log('Express serving listening on port 3000');
});
