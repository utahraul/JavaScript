//test/reverseArray-test.js
var chai = require("chai");
var expect = chai.expect; // we are using the "expect" style of Chai
var reverseArray = require("./../src/reverseArray.js");

describe("reverseArray", function() {
  it("reverseArray() should return [C,B,A] if the array [A,B,C] is passed in", function() {
    var arrayReversed = reverseArray(['A','B','C']);
    expect(arrayReversed).to.equal(['C','B','A']);
  });
});