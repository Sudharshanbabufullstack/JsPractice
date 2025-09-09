
let sname;


    try
    {
        let uppercase = sname.toUpperCase();  // "JOHN";  
        console.log(uppercase);
    }
    catch(error){
         console.log(error);                // it give message about the what error occurs
                                                // console.log("Something is wrong .please check your input");//
    }
    finally{
        console.log("Finally its executed");
        console.log("Hey !!!! How are you ????");
    }

//the finally block will always execute naither error occur and try catch it  not error not occurs 
//it deffenetly executes the code inside finally block







