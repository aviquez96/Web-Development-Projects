var express = require("express");
var app = express();
var port = 3000;

app.get("/", function(req,res){
    res.render("home.ejs");
})

app.get("/fellinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render('love.ejs', {thingVar: thing});
})

app.get("/posts", function(req,res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Ryan"},
        {title: "Post 3", author: "Karl"}
    ]
    res.render("posts.ejs", {posts: posts})
})

app.listen(port, console.log("Server is running!"));