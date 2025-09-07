//Global context

//it will returns window

// what is the behaviour incase if i provide the this in the outside of the object or script level or in the global evel ??
var books     = ["javacript" , "html"];
var customers = ["John" , "peter"];
this.authors = "Rolling";
 
console.log("Global context" , this);


 





//if you prepare this keyword in object then it referts to the object itself
var obj = {
    studentname : "John",
    age         : 15,
    getStudnetdetails : function(){
       //this.studenthabbits = "playing cricket";
       //this.studentdob     = "12-12-2010";
       let localthis = this;
       console.log("object level context" , localthis);
      // console.log(localthis.achivements);

      // this is the object
    }
}

 obj.getStudnetdetails();


// this in the constructor function


function getStudentDetails(){
   this.studentage = 10;
   this.studentname = "john";
   console.log(this);   
   console.log(this.studentname);
}

getStudentDetails();  // window
new getStudentDetails(); // function scope


var obj = {
    studentname : "John",
    age         : 15,
    getStudnetdetails : () => {
       let localthis = this;//refers to the window
       console.log("student level context" , localthis);
       //console.log(localthis.achivements);
    },
    getteacherdetails : function(){
       let localthis = this;  // refers object itself
       console.log("teacher level context" , localthis);
      // console.log(localthis.achivements);
    }
}

 obj.getStudnetdetails();
 obj.getteacherdetails();