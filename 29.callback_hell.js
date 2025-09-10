//callback-hell

function stepOne(callbackfn){
     console.log("step-1")
     callbackfn();
}

function stepTwo(callbackfn){
    console.log("step-2")
    callbackfn();
}

function stepThree(){
    console.log("step-3")
}

stepOne(()=>{
   stepTwo(()=>{
      stepThree();
   });
})



function dailyMorning(callbackfn){
    console.log("daily morning i wakeup at 6AM");
    callbackfn();
}
function dailyEvening(callbackfn){
    console.log("daily evening i play for 1 hour");
    callbackfn();
}
function dailyNight(){
    console.log("daily night i go to bed at 9PM")
}

dailyMorning( ()=>{
    dailyEvening(()=>{
            dailyNight();

        });
    });

