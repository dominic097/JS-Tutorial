/**
 * Created by Dominic on 2/18/2017.
 */

//while Loop

var count = 0;
console.log("Starting Loop ");

while (count < 10){
    console.log("Current Count : " + count);
    count++;
}


// do ... while loop


var count = 0;

console.log("Starting Loop" );
do{
    console.log("Current Count : " + count );
    count++;
}

while (count < 5);
console.log ("Loop stopped!");


// For ... loop

var count;
console.log("Starting Loop");

for(count = 0; count < 10; count++){
    console.log("Current Count : " + count );
}

console.log("Loop stopped!");



// for .. in loop

obj = {a:4, b: 5}
for(prop in obj) {
    console.log(prop)
}