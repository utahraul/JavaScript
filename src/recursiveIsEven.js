var recursiveIsEven = function (number){
    var originalNumber = number;
    if(number === 0){
        console.log(originalNumber + " is even");
    }
    else if(number === 1){
        console.log(originalNumber + " is odd");
    }
    else{
        recursiveIsEven(number - 2);
    }
};

module.exports = recursiveIsEven;