const color = require('../models/Color.js')

module.exports = (req, res) => {
	color.findById(req.params.id).remove(function () {
		req.flash('success_msg', 'Delete success!!!');
		res.redirect('/admin/color/list');
	});
}