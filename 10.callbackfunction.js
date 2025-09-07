// normal function
function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(5, 10);


// function with callback
function doOperation(callbackFn) {
    callbackFn(20, 30);
}

doOperation(function(x, y) {
    console.log("Multiplication:", x * y);
});


// function expression
var greet = function() {
    console.log("Good Morning!");
}

greet(); //calling
