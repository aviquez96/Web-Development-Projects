var mongoose = require("mongoose");
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

module.exports = mongoose.model("User", userSchema);