//functions with params and arguments.




//Addition
function getAddition(param1 , param2){
    
    
     let firstnum  = param1;
     let secondNum = param2;

     let ouput = firstnum + secondNum;
     return ouput;
}




function MathOperations(param1 , param2)
{
    let result1 = param1 + param2
    console.log(result1);

    let result2 = param1 - param2;
    console.log(result2);
    //[_,_]

    return [result1 , result2];
}


let result1 = MathOperations( 20 , 10);
console.log(result1);

let result2 = MathOperations(2000 , 1000);
console.log(result2);

//Subtraction
function getSubtraction(param1 , param2){
    
     let firstnum  = param1;
     let secondNum = param2;

     let ouput = firstnum - secondNum;
     return ouput;
}


var calData = getAddition(10,20);   // Calling the function 
console.log("First Data" , calData);


var calData1 = getAddition(30,40);   // Calling the function 
console.log("Second Data" , calData1);