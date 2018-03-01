//test/reverseArray-test.js
var chai = require("chai");
var expect = chai.expect; // we are using the "expect" style of Chai
var reverseArray = require("./../src/reverseArray.js");

describe("reverseArray", function() {
  it("reverseArray() should return [C,B,A] if the array [A,B,C] passed in", function() {
    var arrayReversed = reverseArray([]);
    expect(arrayReversed).to.equal([]);
  });
});