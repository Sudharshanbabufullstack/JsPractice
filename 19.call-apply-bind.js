let person1 = {
    name: "Madan",
    age: 25
};

let person2 = {
    name: "Sudharshan",
    age: 28
};

// Common function (not inside any object)
function introduce(city, country) {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, from ${city}, ${country}`);
}

// -------- Using call --------
// Pass arguments one by one
introduce.call(person1, "Hyderabad", "India");  
introduce.call(person2, "Bangalore", "India");


// -------- Using apply --------
// Pass arguments as an array
introduce.apply(person1, ["Chennai", "India"]);  
introduce.apply(person2, ["Pune", "India"]);


// -------- Using bind --------
// Creates a new function with `this` fixed (doesn't run immediately)
let introMadan = introduce.bind(person1, "Delhi", "India");
let introSudharshan = introduce.bind(person2, "Mumbai", "India");

// Later we can call these functions
introMadan();
introSudharshan();


// call → runs immediately, args one by one

// apply → runs immediately, args as array

// bind → doesn’t run immediately, returns a new function