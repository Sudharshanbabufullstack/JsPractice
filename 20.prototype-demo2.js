
function Car(purchasedate , carowner , location){
     //console.log("Car");
     this.PurchaseDate = purchasedate
     this.CarOwner     = carowner
     this.Location     = location
     //console.log("Car" ,this);  
};
//new Car();

Car.



Car.prototype.getCarInfo = function(){
    //console.log("Car brand is Toyoto and model is camry");
    console.log("from protype is " ,this);
    console.log(this.CarOwner);
    console.log(this.PurchaseDate);//PurchaseDate,CarOwner,Location
}

Car.prototype.getCarLocation = function(){
    console.log(this.Location);
    console.log(this) ;//PurchaseDate,CarOwner,Location
}

//new Car();
// var samCar = new Car("April 10 , 2017" , "Sam" , "Andhrapradesh");
// samCar.getCarInfo();
// samCar.getCarLocation();

var johnCar = new Car("Dec 10 , 2020" , "John" , "UK");
johnCar.getCarInfo();
johnCar.getCarLocation();


