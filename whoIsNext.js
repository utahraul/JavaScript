//Sheldon, Leonard,Penny, Rajesh y Howard llegan a una máquina de bebidas,
//se ponen en cola y cada vez que uno bebe una bebida de la máquina, se clona y los dos clones se ponen a la cola al final
// http://codeforces.com/problemset/problem/82/A

var whoIsNext = function(names, number){
  var queue = names;
  if (queue.length <= number){
    console.log(queue.[number]);
  }
  else{
    for(i=1; queue.length < number; i++){
      queue = queue +(queue[i] + queue[i])
    }
    console.log(queue[number])
    };
}

whoIsNext(["Sheldon","Leonard","Penny","Rajesh","Howard"],52);
