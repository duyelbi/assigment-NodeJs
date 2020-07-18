const size = require('../models/Size.js')

module.exports = (req, res) => {
	size.findById(req.params.id).remove(function () {
		req.flash('success_msg', 'Delete success!!!');
		res.redirect('/admin/size/list');
	});
}