//test/countBs-test.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var countBs = require('./../src/countBs.js');

describe('countBs', function() {
  it('countBs() should return 4 if the next string is passed in "BBBB"', function() {
    var count4Bs = countBs("BBBB");
    expect(count4Bs).to.equal(4);
  });
});