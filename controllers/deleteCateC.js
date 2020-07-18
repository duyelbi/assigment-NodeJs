const cate = require('../models/Cate.js')

module.exports = (req, res) => {
	cate.findById(req.params.id).remove(function () {
		req.flash('success_msg', 'Delete success!!!');
		res.redirect('/admin/cate/list');
	});
}