function CarName(carName){
      console.log(`My Car name is ${carName}`,"this is using named function");
}

//                  myname refers the function 
function setCarname(callbackFn){
    callbackFn("BMW");
}


//Here i am passing the named function
//                      anonmous function
//                      arrow function

//Named function
setCarname(CarName);

//anonmous function
setCarname(function(carName){
   console.log(`My car name is ${carName}`,"this is using ananmous function"); 
})

//Lambda
setCarname((carName)=>{
   console.log(`My name is ${carName}`,"this using lmbda function"); 
});


//call back function with parameters
function fruits(market, callbackF){
    callbackF(market,"mango","apple","orange")
}
fruits(
    "D-Mart",( market,fruit1,fruit2,fruit3)=>{
    console.log(`In this ${market} we get ${fruit1},${fruit2},${fruit3}`);

   }
);





