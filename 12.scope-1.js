var greenColor = "Green";

//localblock-1
{
     let blueColor = "blue";
     console.log("Localblock1" , greenColor);
     console.log("Blue color is" , blueColor);
     // console.log("localblok2 is" ,pinkColor);   //if we uncoment this coderunning will stop inthis line becose reference error at runtime exception
}
//so the localblock-2 will not execute and printing greencolor in block 2 is not possible

//localblock-2
{
    
      let pinkColor = "pink";
       console.log("Localblock2" , greenColor);

       //console.log("pink color is ", pinkColor);  // itwill pring the pink color it is in same block 
}