var express = require ('express');
var bodyParser = require ('body-parser');
var app = express();
var port = 3000;

// Allows to interpret the body into an object
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get('/', function(req,res){
    res.render("home.ejs");
})

// friends
app.get('/friends', function(req,res){
    res.render("friends.ejs", {friends: friends});
})

app.post('/addfriend', function(req, res){
    // The newfriend variable is what we added as "name" property in the friends.ejs file
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    // res.redirect goes to the specified channel, 
    res.redirect("/friends");
})

app.listen(port,console.log("Server is running!!!!"));