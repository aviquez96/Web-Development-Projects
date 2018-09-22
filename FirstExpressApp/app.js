var express = require('express');
// express has methods within it, so you need to make it ObjectOriented, defined to a variable that people usually name app 
var app = express();
var port = 3000;

// "/" => "Hi there"
// "/bye" => "Goodbye!"
// "/dog" => "Woof!"

// These are route orders
app.get("/", function(req,res){
    res.send("Hi Jorge pedazo de verga!");
})

app.get("/bye", function(req,res){
    res.send("Goodbye");
})

app.get("/dog", function(req,res){
    res.send("Woof!");
})

// the :name variables are routing variables
app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit + " Subreddit!");
})

//Changes the error message when trying to access a path that doesn't belong to this server
//This has to go last cause otherwise will redirect every other path to it
app.get("*", function(req,res) {
    res.send("Jorge es un tarado");
})

// always needs to be here
app.listen(port, function(){
    console.log("Server has started!");
});

// Request object contains everything about the request made by the user