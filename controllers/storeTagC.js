const tag = require('../models/Tag.js')

module.exports = (req, res) => {
    tag.create(req.body, (error, tag) => {
        req.flash('success_msg', 'Success !!!')
        res.redirect('/admin/tag/new')
    })
}