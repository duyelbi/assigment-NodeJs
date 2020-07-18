const product = require('../models/Product')
const cate = require('../models/Cate')
const color = require('../models/Color')
const size = require('../models/Size')
const tag = require('../models/Tag')

module.exports = (req, res) => {

}

module.exports = (req, res) => {
    cate.find({}, function (error, cate) {
        color.find({}, function (error, color) {
            size.find({}, function (error, size) {
                tag.find({}, function (error, tag) {
                    product.findById(req.params.id, function (error, product) {
                        res.render('admin/product/editProduct', {
                            product: product,
                            cate: cate,
                            color: color,
                            size: size,
                            tag: tag
                        })
                    });
                })
            })
        })
    })
}