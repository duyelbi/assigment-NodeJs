const cate = require('../models/Cate')
module.exports = (req, res) => {
    cate.findById(req.params.id, function (error, data) {
        res.render('admin/cate/editCate', {
            data
        })
    })
}