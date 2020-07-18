const cate = require("../models/Cate")
const product = require("../models/Product")

module.exports = (req, res) => {
    cate.find({}, function (error, cates) {
        product.find({}, function (error, products) {
            res.render('product', {
                cate: cates,
                product: products
            });
        })
    })
}