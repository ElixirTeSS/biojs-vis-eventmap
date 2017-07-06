/*
 * vis-eventmap
 * https://github.com/ElixirTeSS/vis-eventmap
 *
 * Copyright (c) 2015 Niall Beard
 * Licensed under the MIT license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var eventmap = require('../');

describe('vis-eventmap module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(eventmap.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      eventmap.hello('biojs').should.equal("hello biojs");
    });
  });
});
