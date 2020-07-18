const bcrypt = require('bcrypt')
const user = require('../models/user')

module.exports = (req, res) => {
    const { username, password } = req.body;
    user.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) { //if password match
                    req.session.userId = user._id
                // Chúng ta chỉ định user_id cho mỗi session. express-session module sẽ lưu thông tin này
                // xuống cookie trình duyệt của người dùng, để mỗi khi người dùng gửi yêu cầu thì trình
                // duyệt gửi cookie lại cho server kèm authenticated id. Đây là cách để server biết được
                // người dùng đó đã đăng nhập hay chưa.
                    res.cookie('userId', user._id, {
                    signed: false
                })
                    res.redirect('/')
                } else {
                    res.redirect('/users/login')
                }
            })
        } else {
            res.redirect('/users/login')
        }
    })
}