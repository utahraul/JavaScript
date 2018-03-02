var reverseArray = function(arrayToReverse){
    var reversedArray = [];
    for(i=(arrayToReverse.length)-1; i>=0; i--){
        itemToAdd = arrayToReverse[i];
        reversedArray.push(itemToAdd);
    }
    console.log(reversedArray);
    return(reversedArray);
}

module.exports = reverseArray;
