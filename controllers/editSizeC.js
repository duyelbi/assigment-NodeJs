const size = require('../models/Size')
module.exports = (req, res) => {
    size.findById(req.params.id, function (error, data) {
        res.render('admin/size/editSize', {
            data
        })
    });
}