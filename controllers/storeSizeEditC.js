const size = require('../models/Size.js')

module.exports = (req, res) => {
    size.findById(req.params.id, function (err, data) {
        data.name = req.body.name;
        data.save();
        req.flash('success_msg', 'Success !!!');
        res.redirect('/admin/size/list');
    });
}