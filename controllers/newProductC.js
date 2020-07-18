const cate = require('../models/Cate')
const color = require('../models/Color')
const size = require('../models/Size')
const tag = require('../models/Tag')

module.exports = (req, res) => {
    cate.find({}, function (error, cate) {
        color.find({}, function (error, color) {
            size.find({}, function (error, size) {
                tag.find({}, function (error, tag) {
                    res.render('admin/product/newProduct', {
                        cate: cate,
                        color: color,
                        size: size,
                        tag: tag
                    });
                })
            })
        })
    })
}