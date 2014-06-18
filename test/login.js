var app     = require('../server')
  , request = require('supertest')(app)
  , assert  = require('assert');

describe('No controller login', function(){

  it('deve retornar status 200 ao fazer GET /login', function(done) {
    request
      .get('/login')
      .end(function(err, res) {
        assert.equal(res.status, 200);
      });
    done();
  });
});
