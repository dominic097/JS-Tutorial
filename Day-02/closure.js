/**
 * Created by Dominic on 2/18/2017.
 */


// Global Scope
var monkey = "Gorilla";

function greetVisitor () {
    return alert("Hello there!");
}


//Local Scope


function talkDirty () {
    var saying = "Oh, Hi, How are u, I am Dominic";
    return alert(saying);
}
alert(saying); // Throws an error


// scope & closure context
function add (x) {
    return function (y) {
        return x + y;
    };
}
var add5 = add(5);
var no8 = add5(3);
alert(no8); // Returns 8



// making a private variable using closure
var person = function () {
    // Private
    var name = "Robert";
    return {
        getName : function () {
            return name;
        },
        setName : function (newName) {
            name = newName;
        }
    };
}();
alert(person.name); // Undefined
alert(person.getName()); // "Robert"
person.setName("Robert Nyman");
alert(person.getName()); // "Robert Nyman"
