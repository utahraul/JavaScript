//Write a loop that makes seven calls to console.log to output the following triangle
//#
//##
//####
//#####
//######
//#######
//########
function oneMore(whatIWantToPrint, timesToPrint){
  var b = whatIWantToPrint;
  while (b.length <= timesToPrint){
    console.log(b);
    b = b + whatIWantToPrint;
  };
}
