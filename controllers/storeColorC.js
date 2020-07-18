const color = require('../models/Color.js')

module.exports = (req, res) => {

        color.create(req.body, (error, color) => {
            req.flash('success_msg', 'Success !!!')
            res.redirect('/admin/color/list')
        })
}