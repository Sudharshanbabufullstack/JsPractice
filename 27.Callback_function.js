function myName(){
      console.log(" sudharshan babu");
}

        //callbackfuntion
setTimeout(myName, 4000);   

//settimeout is defualt funcion in js which can accept the ohter funciton(callback) as input parameter

function SBIbank(){
    console.log("Welcome to sbi bank");
}

function Bank(callbackFn){
    console.log("this is bank")// 
    callbackFn();//here we callback the sbibank  here
}
setTimeout(()=>Bank(SBIbank),5000); // 1.here we mention 5000 (5seconds) wait and 
                                    // 2. execute this line it call bank function
                                    //3. this is bank will print
                                    //4. callbackFn() executes, witch is SBIbank().
                                    //5.print welcome to sbi bank.

