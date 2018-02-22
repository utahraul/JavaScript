/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers
from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous 
program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value 
used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the 
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with 
negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/
//cambio username
var range = function(start, end, step) {
  if (step === undefined) {
    step = 1;
  }
  var arrayOfNumbers = [];
  if (start < end) {
    for (var i = start; i <= end; i = i + step) {
      arrayOfNumbers.push(i);
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
  } else if (start > end) {
    for (i = start; i >= end; i = i + step) {
      arrayOfNumbers.push(i);
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
  } else {
    console.log(start + " es igual a " + end);
    return arrayOfNumbers;
  }
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

var sumOfARange = function(start, end, step) {
  return sum(range(start, end, step));
};

module.exports = sumOfARange;
