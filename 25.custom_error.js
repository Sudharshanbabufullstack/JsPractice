


function readNumber(input) {
  let num = Number(input);
  if (isNaN(num)) {
    throw new Error("InputMismatch: Expected a number!");
  }
  return num;
}

try {
  console.log(readNumber("123"));  //  works fine
  console.log(readNumber("as"));  //  throws error
} catch (error) {
  console.log("Caught an error:", error.message);
}




let subjectName;         // 1. here no error no output 
if(subjectName){         // 2. but when u remove this line it give RefferenceError:subjectName is not defined
    console.log("Js");  //3.  but when u give a value to this then condition become true and execute inside code   
}
                    
                     
