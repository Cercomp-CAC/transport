var request = require('./test_helper')()
  , assert  = require('assert');

describe('No controller home', function(){

  it('deve retornar status 200 ao fazer GET /', function(done) {
    request
      .get('/')
      .end(function(err, res) {
        assert.equal(res.status, 200);
      });
    done();
  });
});
