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
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1
        return {
           next () {
               [ pre, cur ] = [ cur, pre + cur ]
               return { done: false, value: cur }
           }
        }
    }
}

for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}


// ---------------------------------------------------------------


// ES5

var fibonacci = {
    next: (function () {
        var pre = 0, cur = 1;
        return function () {
            tmp = pre;
            pre = cur;
            cur += tmp;
            return cur;
        };
    })()
};

var n;
for (;;) {
    n = fibonacci.next();
    if (n > 1000)
        break;
    console.log(n);
}

// ---------------------------------------------------------------------

// using Generators

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