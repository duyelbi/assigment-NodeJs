const blogPost = require('../models/blogPost')
module.exports = (req, res) => {
    blogPost.findById(req.params.id, function (error, detailPost) {
        res.render('blog-detail', {
            detailPost
        })
    })
}