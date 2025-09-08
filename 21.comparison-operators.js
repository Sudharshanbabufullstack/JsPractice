let a = 10;
let b = 20;

// Less than <
if (a < b) {
  console.log(a + " is less than " + b); // Output: 10 is less than 20
}

// Less than or equal <=
if (a <= b) {
  console.log(a + " is less than or equal to " + b); // true
}

// Greater than >
if (b > a) {
  console.log(b + " is greater than " + a); // Output: 20 is greater than 10
}

// Greater than or equal >=
if (b >= 20) {
  console.log(b + " is greater than or equal to 20"); // true
}

// Equal to == (value only)
if (a == "10") {
  console.log("a is equal to '10' with ==");
}

// Strict equal to === (value + type)
if (a === 10) {
  console.log("a is strictly equal to 10 (value and type)"); 
}

// Not equal !=
if (a != b) {
  console.log("a is not equal to b"); // true
}

// Strict not equal !==
if (a !== "10") {
  console.log("a is not strictly equal to '10' (different type)"); 
}
