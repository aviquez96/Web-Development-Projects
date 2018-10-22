var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');

var User = require('./models/user.js');

var port = 3000;

var app = express();
app.set('view engine', 'ejs')
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}))
app.use(require('express-session')({
    secret: "This is the secretest password ever llez",
    resave: false,
    saveUninitialized: false
}))
// These initialize the passport library
app.use(passport.initialize());
app.use(passport.session());
// These methods are responsible for reading the session, decoding and encoding it. 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES

app.get('/', function(req, res) {
    res.render("home");
})

app.get('/secret', function (req, res) {
    res.render("secret");
})

// AUTH ROUTES
app.get('/register', function(req, res) {
    res.render("register");
})

app.post('/register', function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect('/secret');
            })
        }
    });
})

app.get('/login', function(req,res) {
    res.render("login");
})

// Middleware: code that runs before the final route callback 
app.post('/login', passport.authenticate("local", {
    succesRedirect: "/secret",
    failureRedirect: "/login"
}), function(req,res) {
    
})

app.listen(port, console.log("Server is running"))