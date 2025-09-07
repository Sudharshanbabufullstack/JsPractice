//if elseif else

// i want to execute this block based on the condition
// conditin true then executes the block if false no




 var isOk = false;


// //  if you are OK the book then give me
// //  else please go to the library

if(isOk)   // positive
{
  console.log("Hey i am madan. any i am having the hdfc bank");
  console.log("My password is $%$$!@@!");
}
else{
    console.log("YOu do't have permission")
}



let age = 65;

// Using if-else-if
if (age < 5) {
    console.log("Ticket is FREE for babies!");
}
else if (age >= 5 && age < 18) {
    console.log("Child Ticket: ₹100");
}
else if (age >= 18 && age < 60) {
    console.log("Adult Ticket: ₹200");
}
else {
    console.log("Senior Citizen Ticket: ₹150");
}



// switch case 

let signal = "yellow";

switch (signal) {
    case "red": {
        console.log("STOP! Wait until the light turns green.");
        break;
    }
    case "yellow": {
        console.log("READY! The signal is about to change.");
        break;
    }
    case "green": {
        console.log("GO! You can move now.");
        break;
    }
    default: {
        console.log("Invalid signal color. Please check input.");
    }
}


// one more example for switch case
let day = 2;

switch (day) {
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    } case 3: {
        console.log("Wednesday");
        break;
    } case 4: {
        console.log("thursday");
        break;
    } case 5: {
        console.log("friday");
        break;
    } case 6: {
        console.log("saturday");
        break;
    }
    case 7: {
        console.log("sunday");
        break;
    }
    default: {
        console.log("your input is wrong .please check the proper input")
    }


}