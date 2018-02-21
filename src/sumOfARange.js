var createArray = function(start, end) {
  var arrayOfNumbers = [];
  for (var i = start; i <= end; i++) {
    arrayOfNumbers.push(i);
  }
  return arrayOfNumbers;
};

var sum = function(arrayOfNumbers) {
  var total = 0;
  var numberToAdd;
  for (var a = 0; a <= arrayOfNumbers.length - 1; a++) {
    numberToAdd = arrayOfNumbers[a];
    total = total + numberToAdd;
  }
  return total;
};

var sumOfARange = function(start, end) {
  return sum(createArray(start, end));
};

module.exports = sumOfARange;
