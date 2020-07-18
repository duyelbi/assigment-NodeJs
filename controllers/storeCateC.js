const cate = require('../models/Cate.js')

module.exports = (req, res) => {
        cate.create(req.body, (error, cate) => {
            res.redirect('/admin/cate/list')
        })
}