const size = require('../models/Size.js')

module.exports = (req, res) => {
    size.create(req.body, (error, size) => {
        req.flash('success_msg', 'Success !!!')
        res.redirect('/admin/size/list')
    })
}