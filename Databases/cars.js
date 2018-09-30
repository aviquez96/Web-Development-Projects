var mongoose = require("mongoose");
// connection to a database. This is the same everytime, only after localhost/ changes; that is the name of your database.
// If there is no database, it will create it and use it to popullate your data
mongoose.connect("mongodb://localhost/cars_app");

// This is a structure/pattern that defines the scheema of the database. You can still add on keys if you need to
var carScheema = new mongoose.Schema({
    brand: String,
    year: Number
});

// We took the scheema and compiled it into a model, and saved it into a variable. This allows us to manipulate tha Car 
// variable to add, update, delete and so on from a car; allows to use mongo methods to it. The "Car" part inside the 
// model function should always be the singular version of my collection as mongoose pluralizes it. This essentially
// creates a collection "Cars" from the input "Car"
var Car = mongoose.model("Car", carScheema);

// adding a new car to the database
// var Car1 =  new Car({
//     brand: "Subaru",
//     year: "2010"
// })

// // Any time a mongo method is called, you use a callback function as the process takes time. It is customary to write 
// // an if and else with some indicators of completion (console.log) to verify the process was completed successfully.
// // The car in "function(err,car)" is the car retrieved from the database; car != Car1.
// Car1.save(function(err,car){
//     if(err){
//         console.log("Error");
//     } else {
//         console.log("Car is " + car);
//     }
// });

// This is an alternative to making a car, then saving it. Create = make + save
Car.create ({
        brand: "Porsche",
        year: "2013"
}, function (err, car) {
    if(err) {
        console.log("Error is " + err);
    } else {
        console.log(car);
    } 
});

// retreve all cars from the db and console.log each one. The {} sent object is empty as this is our query; we do not specify,
// so it is like we're selecting everything. Again, conventional callback as the request takes time.
Car.find({}, function(err, cars) {
    if(err) {
        console.log("Error is " + err);
    } else {
        console.log(cars);
    }
})
