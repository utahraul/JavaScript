var countBs = function(stringWithBs){
var bs = 0;
 for(i =1; i <= stringWithBs.length; i ++){ var currentLetter = stringWithBs.charAt(i)
  if (currentLetter === "B") {
bs = bs + 1;
}
}
console.log(bs);
};
countBs("bsdbfjkfjjdBjjfjjkdk fkBBBjddjdB");
