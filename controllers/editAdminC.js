const admin = require('../models/Admin')
module.exports = (req, res) => {
    admin.findById(req.params.id, function (error, data) {
        res.render('admin/admin/editAdmin', {
            data
        })
    })
}