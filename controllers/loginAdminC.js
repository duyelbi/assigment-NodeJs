const bcrypt = require('bcrypt')
const Admin = require('../models/Admin')
module.exports = (req, res) => {
    const { username, password } = req.body;
    Admin.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) { // if passwords match
                    // store user session, will talk about it later
                    req.session.userId = user._id
                    res.redirect('/admin')
                } else {
                    res.redirect('/admin/login')
                }
            })
        } else {
            res.redirect('/admin/login')
        }
    })
}