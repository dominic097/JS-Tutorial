// Iterators

function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}


var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true



//------------------------------------------------------------------------//

const PREV = Symbol('prev'); //'prev';
const NEXT = Symbol('next'); //'next';


class linkedList {

    node(d, prev, next) {
        return {[PREV]: prev, 'data': d, [NEXT]: next};
    }

    [Symbol.iterator]() { 
        var i = 0,
         ...
         return { 
            next: () => { 
                if (i++ > 0) 
                    _nodeToReturn = (_nodeToReturn[NEXT] ? _nodeToReturn[NEXT] : null); 
                return { 
                    value: <return value>, done: <Boolean>
                   }
             }
           };
     }

...

}

// returns an Iteratable object
var obj = new linkedList();

for (var o of obj) {
   console.log(o);
}