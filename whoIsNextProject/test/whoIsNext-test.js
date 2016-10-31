// tests/whoIsNext-test.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var whoIsNext = require('./../src/whoIsNext.js');

describe('whoIsNext', function() {
  it('whoIsNext() should return Sheldon if 1 is passed in', function() {
    var whoIsTheNextOne = whoIsNext(1);
    expect(whoIsTheNextOne).to.equal("Sheldon");
  });

  it('whoIsNext() should return Leonard if 2 is passed in', function() {
    var whoIsTheNextOne = whoIsNext(2);
    expect(whoIsTheNextOne).to.equal("Leonard");
  });

  it('whoIsNext() should return Howard if 5 is passed in', function() {
    var whoIsTheNextOne = whoIsNext(5);
    expect(whoIsTheNextOne).to.equal("Howard");
  });

  it('whoIsNext() should return Sheldon if 6 is passed in', function() {
    var whoIsTheNextOne = whoIsNext(6);
    expect(whoIsTheNextOne).to.equal("Sheldon");
  });

  it('whoIsNext() should return Howard if 15 is passed in', function() {
    var whoIsTheNextOne = whoIsNext(15);
    expect(whoIsTheNextOne).to.equal("Howard");
  });
  
});