var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/blog_demo', {useNewUrlParser: true});

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    // embedding data; order matters, so POST is going first
    posts: [postSchema]
})

var User = mongoose.model("User", userSchema)

// var newUser = new User({
//     email: "harry@hogwarts.ed",
//     name: "Hermione"
// });

// newUser.posts.push({
//     title: "How to brew potions",
//     content: "Go to potions class"
// })

// newUser.save(function(err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })

// var newPost = new Post({
//     title: "123",
//     content: "This is blaaa"
// })

// newPost.save(function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })


User.findOne({name: "Hermione"}, function (err,user) {
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things I hate",
            content: "Voldermort, hedwig and buckbeack"
        });
        user.save(function(err,user) {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
})
