//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

var countBs = function(stringWithBs) {
 var bs = 0;
 for (var i = 0; i <= stringWithBs.length; i++) {
  var currentLetter = stringWithBs.charAt(i)
  if (currentLetter === "B") {
   bs = bs + 1;
  }
 }
 return (bs);
};

module.exports = countBs;