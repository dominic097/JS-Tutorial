/**
 * Created by Dominic on 2/28/2017.
 */

//Typing the function

// sample function in JS


function add(x , y){
    return x + y;
}

//TypeScript implementation

function addTS(x: number, y: number): number {
    return x + y;
}

// Function as a Type

let myAdd: (x: number, y: number)=>number =
    function(x: number, y: number): number { return x+y; };


//contextual typing

let myAddContextual: (baseValue:number, increment:number) => number =
    function(x, y) { return x + y; };

// Invalid Params

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right


//Default Params


function buildName_defaultParam(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let dresult1 = buildName_defaultParam("Bob");                  // works correctly now, returns "Bob Smith"
let dresult2 = buildName_defaultParam("Bob", undefined);       // still works, also returns "Bob Smith"
let dresult3 = buildName_defaultParam("Bob", "Adams", "Sr.");  // error, too many parameters
let dresult4 = buildName_defaultParam("Bob", "Adams");         // ah, just right


//Optional Params

function buildName_optionalParam(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}

let oresult1 = buildName_optionalParam("Bob");                  // works correctly now, returns "Bob Smith"
let oresult2 = buildName_optionalParam("Bob", undefined);       // still works, also returns "Bob Smith"
let oresult3 = buildName_optionalParam("Bob", "Adams", "Sr.");  // error, too many parameters
let oresult4 = buildName_optionalParam("Bob", "Adams");         // ah, just right