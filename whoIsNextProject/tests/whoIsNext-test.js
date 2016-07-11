// tests/whoIsNext-test.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var whoIsNext = require('./../src/whoIsNext.js');

describe('whoIsNext', function() {
  it('whoIsNext() should return Sheldon if 1 is passed in', function() {
    var whoIsTheNextOne = new whoIsNext(1);
    expect(whoIsNext.to.equal("Sheldon"));
  });
});
