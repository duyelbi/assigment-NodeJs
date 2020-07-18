const tag = require('../models/Tag.js')

module.exports = (req, res) => {
    tag.findById(req.params.id, function (err, data) {
        data.name = req.body.name;
        data.save();
        req.flash('success_msg', 'Success !!!');
        res.redirect('/admin/tag/list');
    });
}