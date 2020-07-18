const tag = require('../models/Tag')
module.exports = (req, res) => {
    tag.findById(req.params.id, function (error, data) {
        res.render('admin/tag/editTag', {
            data
        })
    });
}