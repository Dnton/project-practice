var mongoose = require('mongoose')


var postSchema = new mongoose.Schema({
    header: String,
    time: {
      type: Date,
      default: Date.now
    },
    content: String
})

var Post = mongoose.model('Post', postSchema)

module.exports = Post
