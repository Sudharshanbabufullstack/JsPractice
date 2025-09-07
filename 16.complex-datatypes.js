// object , array and function

var studnet = {
     sName          : "xyz",
     dateOfbirth    : "Dec 30 , 2010",
     subjects       : ["En" , "Hi" , "Ma"],
     getStuLocatoin : function(){
                          return "Banoglore"
                      }
}

//studnet.sName;

// studnet.getStuLocatoin()



var myName = " java script ";
var stringLengn = myName.length
console.log(stringLengn);



var myName1 = "javascript";
var upperCaseMyName1 = myName.toUpperCase();
console.log(upperCaseMyName1);



var myName2 = "JAVA SCRIPT";
var lowerCaseMyName2 = myName2.toLowerCase();
console.log(lowerCaseMyName2);


var myName3 = "JavaSripT";
var lowerCaseMyName3 = myName3.toLowerCase();
console.log(lowerCaseMyName3);


var myName4 = " abc ";
var trimString1 = myName4.trim();         // "abc"

var trimString2 = myName4.length;         //  5

var trimString3 = myName4.trim().length;  //  3 or 5 or " abc " or "abc"
                //  "abc"       .length
console.log(trimString3);



var studnetsNames = ["john" , "robert" , " Mike"];
var reverseStuentNames = studnetsNames.reverse();  //[" Mike" , "robert" , " john"];

var data = reverseStuentNames[0].trim().toLowerCase();
console.log(data);

studnetsNames.concat

//data.

//reverseStuentNames --> " Mike"  --> " mike";

console.log(reverseStuentNames);





//any method is thier to accept the argemtn in string
//example concat
//                 0123
var firstString = "abcd";

var secondString = " world";

var finalString = firstString.concat(secondString);
console.log(finalString);

var indexOfB = firstString.indexOf("z")  //1
console.log(indexOfB);














// console.log(studnet.sName);
// console.log(studnet.dateOfbirth);
// console.log(studnet.subjects[1]); //Hi

//alert(studnet.getStuLocatoin()); //print in alert "bangolore"
//console.log(studnet.getStuLocatoin());  //print in console "bangolore"
//document.writeln(studnet.getStuLocatoin()); //print in document "bangolore"



