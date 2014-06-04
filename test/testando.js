var assert = require('assert');

describe('Testando o funcionamento do Mocha', function(){

    it('1 + 1 deve ser igual a 2', function(){
        assert.equal(1 + 1, 2);
    });

    it('1 + 2 não deve ser igual a 2', function(){
        assert.notEqual(1 + 2, 2);
    });

});