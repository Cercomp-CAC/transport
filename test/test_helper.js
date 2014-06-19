module.exports = function() {

  var app     = require('../server')
    , request = require('supertest')(app);

  return request;
};
