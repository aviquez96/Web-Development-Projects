var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/blog_demo_2', {useNewUrlParser: true});

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
    posts: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

var User = mongoose.model("User", userSchema)

// User.create ({
//     email: "as@gmail.com",
//     name: "Bob Belcher"
// });

// Post.create ({
//     title: "How to cook like a madman part 33!",
//     content: "asldfja;lskfjl;aksjfl;askdjf!"
// }, function (err, post) {
//     User.findOne({email: 'as@gmail.com'}, function(err, foundUser){
//         if (err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function (err, data) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             })
//         }
//     })
// })

User.findOne({email: 'as@gmail.com'}).populate("posts").exec(function(err, user) {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});