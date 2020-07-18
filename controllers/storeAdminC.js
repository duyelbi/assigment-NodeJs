const Admin = require('../models/Admin.js')
const path = require('path');
module.exports = (req, res) => {
        let image = req.files.image;
        // lưu ảnh vào thư mục "public/upload"
        image.mv(path.resolve(__dirname, '..', 'public/upload', image.name), function (error) {
            // model creates a new doc with browser data
            console.log(req.body)

            Admin.create({
                ...req.body,
                image: '/upload/' + image.name
            }, function (err) {
                if(err) {
                    console.log(err)
                    return res.redirect('/admin/new')
                }
                // sau khi create thì đưa browser về trang chủ
                res.redirect('/admin/list')
            })
        })
}