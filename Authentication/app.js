var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var LocalStrategu = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');

var User = require('./models/user.js');

var port = 3000;

var app = express();
app.set('view engine', 'ejs')
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });

app.use(require('express-session')({
    secret: "This is the secretest password ever llez",
    resave: false,
    saveUninitialized: false
}))
// These initialize the passport library
app.use(passport.initialize());
app.use(passport.session());
// These methods are responsible for reading the session, decoding and encoding it
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/', function(req, res) {
    res.render("home");
})

app.get('/secret', function (req, res) {
    res.render("secret");
})

app.listen(port, console.log("Server is running"))