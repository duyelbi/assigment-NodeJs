const product = require('../models/Product.js')

module.exports = (req, res) => {
	product.findById(req.params.id).remove(function () {
		req.flash('success_msg', 'Delete success!!!');
		res.redirect('/admin/product/list');
	});
}