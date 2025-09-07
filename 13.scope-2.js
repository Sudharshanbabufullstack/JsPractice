// Global variable (accessible in all functions)
var signalName = "wi-fi";  

// Function Room1
function Room1() {
    // Local variable (only available inside Room1)
    let room1FanStatus = "Very Fast";  
    
    //  Can access its own local variable
    console.log("Room1 Fan Status:", room1FanStatus);  
    
    //  Can access global variable
    console.log("Room1 - Global scope:", signalName);  
    
    //  error Cannot access room2FanStatus here
    // because it's declared inside Room2 only.
    console.log("Trying to access Room2 variable:", room2FanStatus); 
}

// Function Room2
function Room2() {
    // Local variable (only available inside Room2)
    let room2FanStatus = "Very Slow";  
    
    //  Can access its own local variable
    console.log("Room2 Fan Status:", room2FanStatus);  
    
    //  Can access global variable
    console.log("Room2 - Global scope:", signalName);  
    
    //  error if uncommented: room1FanStatus not accessible here
    // console.log("Trying to access Room1 variable:", room1FanStatus);
}

// Function calls
Room1();  // Will throw ReferenceError when trying to use room2FanStatus
Room2();  // Will not run if error occurs in Room1
