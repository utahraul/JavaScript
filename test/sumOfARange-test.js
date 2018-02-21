//test/sumOfARange-test.js
var chai = require("chai");
var expect = chai.expect; // we are using the "expect" style of Chai
var sumOfARange = require("./../src/sumOfARange.js");

describe("sumOfARange", function() {
  it("sumOfARange() should return 55 if the values 1 and 10 are passed in", function() {
    var sumOf1to10Range = sumOfARange(1, 10);
    expect(sumOf1to10Range).to.equal(55);
  });
});

describe("sumOfARange", function() {
  it("sumOfARange() should return 30 if the values 0 and 10 are passed in and the step is 2", function() {
    var sumOf1to10Range = sumOfARange(0, 10, 2);
    expect(sumOf1to10Range).to.equal(30);
  });
});

describe("sumOfARange", function() {
  it("sumOfARange() should return 25 if the values 1 and 10 are passed in and the step is 2", function() {
    var sumOf1to10Range = sumOfARange(1, 10, 2);
    expect(sumOf1to10Range).to.equal(25);
  });
});

describe("sumOfARange", function() {
  it("sumOfARange() should return 35 if the values 1 and 13 are passed in and the step is 3", function() {
    var sumOf1to10Range = sumOfARange(1, 13, 3);
    expect(sumOf1to10Range).to.equal(35);
  });
});

describe("sumOfARange", function() {
  it("sumOfARange() should return 35 if the values 1 and 13 are passed in and the step is 3", function() {
    var sumOf1to10Range = sumOfARange(5, 2, -1);
    expect(sumOf1to10Range).to.equal(14);
  });
});

describe("sumOfARange", function() {
    it("sumOfARange() should return 0 if the values 1 and 1 and any step are passed in", function() {
      var sumOf1to10Range = sumOfARange(1, 1, 1);
      expect(sumOf1to10Range).to.equal(0);
    });
  });
