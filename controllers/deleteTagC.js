const tag = require('../models/Tag.js')

module.exports = (req, res) => {
	tag.findById(req.params.id).remove(function () {
		req.flash('success_msg', 'Delete success!!!');
		res.redirect('/admin/tag/list');
	});
}