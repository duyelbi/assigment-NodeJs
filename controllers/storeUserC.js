const user = require('../models/user.js')

module.exports = (req, res) => {
    user.create(req.body, (error, user) => {
        if(error) {
            return res.redirect('/users/register')
        }
        res.redirect('/')
    })
}