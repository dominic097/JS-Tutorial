/**
 * Created by Dominic on 3/1/2017.
 */

//without Generics

function identity(arg: number): number {
    //.. do something
    return arg;
}

// or

function identityWithAny(arg: any): any {
    return arg;
}

// in the above method we will loose what type that function returns

//with generics

function identityWithG<T>(arg: T): T {
    return arg;
}
let output1 = identity("myString");
let output2: number = identityWithAny("myString");
let output3: number = identityWithG<string>("myString");
let output4: number = identityWithG<string>("myString");  // type of output will be 'string'