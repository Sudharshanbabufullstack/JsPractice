
// --- looping mecanism repeatly executes the your block of code until condition is gets false

// while loop --- contiues the flow of running loop until the condition falls
let rule = 0;

while(rule < 5)
{
  console.log("Hello");
  rule = rule + 1;
}

// do--while--- atleast one time compalsary execute even condition is not satisfied
let index = 0
do
{
  console.log("Index is " , index);
  index = index + 1;
}
while(index < -1)


// for...in  -- to iterates over te properies of an object

let student = { 
                name: "Madan", 
                course: "JS"  ,
                location : "Bangolore"
              };
//repeating the object for the keys 

for(let abc in student){
    console.log("key is " , abc);
    console.log("now" , student[abc]);
}

 //   student.name //   student[name]

 // for...of--------is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.).

  let fruits = ["Kiwi", "Mango", "grapes"];
  for(let fruit of fruits){
    console.log(fruit);
    
  }


// for loop-- this traditinal for loop we can looping from LEFT TO RIGHT and RIGHT TO LEFT by giving conditions and iterations

for(let i=1; i<=10; i++ ){
  console.log("loop is iterated "+i+" times");
}