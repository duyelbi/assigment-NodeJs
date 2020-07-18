const admin = require('../models/Admin.js')

module.exports = (req, res) => {
	admin.findById(req.params.id).remove(function () {
		req.flash('success_msg', 'Delete success!!!');
		res.redirect('/admin/list');
	});
}