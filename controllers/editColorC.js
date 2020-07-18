const color = require('../models/Color')
module.exports = (req, res) => {

    color.findById(req.params.id, function (error, data) {
        res.render('admin/color/editColor', {
            data
        })
    });
}