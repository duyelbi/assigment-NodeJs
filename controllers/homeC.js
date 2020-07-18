const cate = require("../models/Cate")
const product = require('../models/Product')

module.exports = (req, res) => {
    console.log(req.session)
    cate.find({}, function (error, cates) {
        product.find({}, function (error, products) {
            res.render('index', {
                cate: cates,
                product: products
            });
        })
    })
}