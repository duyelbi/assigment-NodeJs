const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
    image: String,
    title: String,
    body: String,
    username: String,
    tags: String,
    datePosted: {
        /* can declare property type with an object like this because we need 'default' */
        type: Date,
        default: new Date()
    },
    comments: String
});

const blogPost = mongoose.model('blogPost', blogPostSchema);
module.exports = blogPost