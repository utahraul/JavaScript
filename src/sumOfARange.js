var createArray = function(start, end) {
  var arrayOfNumbers = [];
  for (var i = start; i <= end; i++) {
    arrayOfNumbers.push(i);
  }
  return arrayOfNumbers;
};

var sum = function(arrayOfNumbers) {
  for (a = 0; a <= arrayOfNumbers.length - 1; a++) {
    console.log(arrayOfNumbers[a]);
  }
};

var sumOfARange = function(start, end){
    sum(createArray(start, end));
}