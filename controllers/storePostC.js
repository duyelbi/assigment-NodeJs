const blogPost =  require('../models/blogPost.js')
const path =  require('path')
module.exports = (req, res) => {
    let image = req.files.image;
    // lưu ảnh vào thư mục "public/upload"
    image.mv(path.resolve(__dirname,'..', 'public/upload', image.name), function (error) {
        // model creates a new doc with browser data
        blogPost.create({
            ...req.body,
            ...req.username,
            image: '/upload/' + image.name
        }, function (err) {
            // sau khi create thì đưa browser về trang chủ
            res.redirect('/')
        })
    })
}