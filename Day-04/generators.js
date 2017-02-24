function* idMaker() {
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2


//-----------------------------------------------------------
function* fibonacci() {
  let [prev, curr] = [0, 1];
  yield prev;
  yield curr;
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}
 
for (const n of fibonacci()) {
  if (n > 100) break;
  console.log(n);
}


let fib = {
  * [Symbol.iterator]() {
    let [prev, curr] = [0, 1];
    yield prev;
    yield curr;
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
};
 
for (const n of fib) {
  if (n > 100) break;
  console.log(n);
}