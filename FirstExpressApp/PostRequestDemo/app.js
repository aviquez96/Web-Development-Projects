var express = require ('express');
var app = express();
var port = 3000;

app.get('/', function(req,res){
    res.render("home.ejs");
})

// friends
app.get('/friends', function(req,res){
    var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
    res.render("friends.ejs", {friends: friends});
})

app.post('/addfriend', function(req, res){
    res.send("You have reached the post routee");
})

app.listen(port,console.log("Server is running!"));