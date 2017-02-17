/**
 * Created by Dominic on 2/17/2017.
 */

/** String Data Type
 * String objects are usually created using string literals:
 */

var text = "my value";
var multiLine = " first \n second \n third line ";

// Escaping chars

//if single quotes appear inside a single-quoted string, they need to be escaped
var str = 'I\'m Chiti';

// or

var str = "I'm Chiti";

//Manipulating strings

var str = "string"

str = str.charAt(2) + str.charAt(3) + str.charAt(4) + str.charAt(5)

console.log(str) // ring

//Lowercasing / Uppercasing

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Finding a Sub String

var str = "Hello There, How Are You ???";

console.log(str.indexOf('There'));


//Extracting a substring: substr, substring, slice.

//substring(start [, end]) && slice(start [, end])
var str = "stringify"
console.log(str.substring(0,1)); //s
console.log(str.slice(0,1));

//substr(start [, length])
var str = "stringify"
str = str.substr(2,4);
console.log(str); //ring

//Comparison

console.log("Z" > "A" )// true
console.log("Bob" > "Bar" )// true, because o > a
console.log( "aa" > "a"); // true, because an absence of a char always loses in comparison

/**
Summary

Now we know:

    How to write a string, with special symbols and quoting.
    How to strings are compared.
    How to extract a portion of string.
*/


//JavaScript Number

var n=new Number(230);
console.log(n); //230


var x=102;//integer value
var y=102.7;//floating point value
var z=13e4;//exponent value, output: 130000
var n=new Number(16);//integer value by number object

var ex = 20.342;
ex.toExponential(); //"2.0342e+1"

ex.toFixed(); //20

ex.toString(); //"20.342"








