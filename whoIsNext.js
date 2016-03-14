var whoIsNext = function(names, number){
  for(i=1; queue.length < number; i++){
    var queue = queue + (names*i)
  }
  console.log(queue[number])
};
whoIsNext(["Sheldon","Leonard","Penny","Rajesh","Howard"],52);
