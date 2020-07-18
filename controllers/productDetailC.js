const product = require("../models/Product")


module.exports = (req, res) => {
    product.findById(req.params.id, function (error, products) {
        res.render('product-detail', {
            product: products
        });
    })
}