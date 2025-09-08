
// AND operator is using && symbol
//when both condition are true then only it execute inside of that block

//condition 1   condition2   result
    // true            true        true
    // true            false       false
    // false           true        false
    // false           false       false

//example

let val=15;  

if( val>10 && val<20){
    console.log("val is between 10 and 20")  //result is true because both conditions are true
}
if(val>=10 && val<15){
    console.log("val is "+ val); //result is false because second codition is false 15 is not < 15  //not execute
}
if(val>=20 && val<25){
    console.log("val is"+val); // result is false becausse first condition is false 15 is not >= to 20 //not execute
}
if(val=10 && val!=15){
    console.log("val is "+ val); // result is false becausse both condition is false  //not execute
}

// OR operator is using || symbol
//any one condition is true then it will execute inside of code

//condition 1   condition2   result
    // true            true        true
    // true            false       true
    // false           true        true
    // false           false       false

//example



let y = 5;

if (y < 0 || y > 10) {
  console.log("y is either less than 0 or greater than 10");
} else {
  console.log("y is between 0 and 10");
}


let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please login first!");
}




let marks = 85;

let grade = (marks >= 90) ? "A+" :
            (marks >= 75 && marks < 90) ? "A" :
            (marks >= 50 && marks < 75) ? "B" : "Fail";

console.log("Grade:", grade); // Output: Grade: A
