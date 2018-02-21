//test/sumOfARange-test.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var countChar = require('./../src/sumOfARange.js');

describe('sumOfARange', function() {
  it('sumOfARange() should return 55 if the values 1 and 10 are passed in', function() {
    var sumOf1to10Range = sumOfARange(1, 10);
    expect(sumOf1to10Range).to.equal(55);
    });
});
