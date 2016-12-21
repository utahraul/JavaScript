//test/countChar-test.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var countChar = require('./../src/countChar.js');

describe(
    'countChar',
    function() {
      it(
          'countChar() should return 4 if the next string is passed in "BBBBaabb", and B is the char to count',
          function() {
            var countChars = countChar("BBBB", "B");
            expect(countChars).to.equal(4);
          });
    });