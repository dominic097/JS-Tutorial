/**
 * Created by Dominic on 2/18/2017.
 */

// Accessing a prop of an obj using with

var a = 5

var obj = { a : 10 }
with(obj) {
    alert(a) // 10
}


// Accessing a prop which is not in obj using with

var a = 5, b = 1

var obj = { a : 10 }
with(obj) {
    alert(b) // 1
}

// nested with statement

var box = {
    weight: 10,
    size: {
        width: 5,
        height: 7
    }
}

with(box) {
    with(size) { // size is taken from box
        alert( width*height / weight ) // width,height from size, weight from box
    }
}



// with pit fall

var box = {
    weight: 10
};

with(box) {
    weight = 20;
    size = 35; // (*)
}

alert(box.size);
alert(window.size);
