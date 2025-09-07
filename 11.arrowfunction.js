// 1. Normal function
function ShowInfo1() {
    console.log("Welcome!");
}
ShowInfo1();


// 2. Function expression
var ShowInfo2 = function() {
    console.log("Learning Functions in JS");
}
ShowInfo2();


// 3. Arrow function
var ShowInfo3 = () => {
    console.log("Arrow functions are cool!");
}
ShowInfo3();


// 4. Arrow function with parameters
var ShowInfo4 = (topic, level) => {
    console.log("Topic:", topic);
    console.log("Level:", level);
}
ShowInfo4("Callbacks", "Beginner");
