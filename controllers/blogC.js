const blogPost = require('../models/blogPost')
const tag = require('../models/Tag')
module.exports = (req, res) => {
    blogPost.find({}, function (error, posts) {
        tag.find({}, function (error, tags) {
            console.log('tags');
            res.render('blog', {
                // Dữ liệu trả về sẽ được gán cho biến blogposts
                // Đây là biến sẽ được sử dụng trong file blog.ejs
                blogposts: posts,
                tag: tags
            });
        })
        console.log(posts);
    })
}