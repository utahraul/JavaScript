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
