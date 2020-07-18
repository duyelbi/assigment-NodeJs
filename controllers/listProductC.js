const product = require("../models/Product")

module.exports = (req, res) => {
		product.find({}, function (error, products) {
            res.render('admin/product/listProduct', {
                product: products
            });
        })
}