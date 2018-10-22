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

// isLoggedIn is the middleware that will get excecuted before the callback is
app.get('/secret', isLoggedIn, function (req, res) {
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
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req,res) {
    
})

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})

// Next is what happens after the middleware (in this case, the callback belonging to the .get('/secret') route)
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        // If the user is logged in, keep going, move along
        return next();
    } 
    res.redirect("/login");
}

app.listen(port, console.log("Server is running"))