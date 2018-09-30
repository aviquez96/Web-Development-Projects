var express = require('express');
var request = require('request');
var app = express();
var port = 3000;

// Lets the program understand that all the files given have the file extension ejs
app.set("view engine", "ejs");

app.get('/', function(req,res) {
    res.render("form");
})

app.get('/results', function(req, res){
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            // This is making the string "body" become an object
            var data = JSON.parse(body);
            res.render("results", {data: data}); 
        }
    })
}) 

app.listen(port, console.log("Movie app has started!"));