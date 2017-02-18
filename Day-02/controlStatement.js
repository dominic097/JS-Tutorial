/**
 * Created by Dominic on 2/18/2017.
 */


// If Statement
var age = 20;

if( age > 18 ){
    console.log("Qualifies for driving");
}

//If ... else Statement

if(age > 18) {
    console.log("Qualifies for driving");
}
else {
    console.log("Does not qualify for driving");
}

//If ... else If Statement

var book = "maths";
if( book == "history" ){
    console.log("History Book");
}

else if( book == "maths" ){
    console.log("Maths Book");
}

else if( book == "economics" ){
    console.log("Economics Book");
}

else{
    console.log("Unknown Book");
}


// Switch Statements
var grade='A';

console.log("Entering switch block");
switch (grade)
{
    case 'A':
        console.log("Good job");
        break;

    case 'B':
        console.log("Pretty good");
        break;

    case 'C':
        console.log("Passed");
        break;

    case 'D':
        console.log("Not so good");
        break;

    case 'F':
        console.log("Failed");
        break;

    default:
        console.log("Unknown grade");
}

console.log("Exiting switch block");


