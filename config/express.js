module.exports = function(app, express) {
  // Configuration
  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', process.env.PWD + '/app/views');
    app.set('view engine', 'swig');
    if( app.get('env') === 'development' ){
        app.use(express.logger('dev'));
    }
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.static(process.env.PWD + '/public'));
  });
};
