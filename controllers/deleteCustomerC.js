const customer = require('../models/user.js')

module.exports = (req, res) => {
		customer.findById(req.params.id).remove(function() { 
			req.flash('success_msg', 'Delete success!!!');
			res.redirect('/admin/customer/list');
		});
	  }
