const product = require('../models/Product');
const Cart = require('../models/Cart');

module.exports = (req, res, next) => {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

    product.findById(productId, function(err, product) {
        if(err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        res.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    })
}